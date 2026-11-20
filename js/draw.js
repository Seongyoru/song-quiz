'use strict';
/* =========================================================
 * 럭키드로우 : 모든 구슬을 핀볼판 위에서 한꺼번에 떨어뜨려, 맨 먼저 바닥 출구를 통과한 구슬의 주인이 당첨
 *  물리 계산은 matter.js (cdnjs), 그리기는 직접 캔버스에
 *  LUCKY.run([{ id, name, count }], (winner) => …)
 * ========================================================= */
const LUCKY = (() => {
  const MATTER_JS = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
  let libP = null;
  const lib = () => libP || (libP = new Promise((ok, no) => { const s = document.createElement('script'); s.src = MATTER_JS; s.onload = ok; s.onerror = no; document.head.appendChild(s); }));
  const W = 560, H = 980; // 판 크기 (논리 좌표)
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // 사람마다 다른 색 (이름 순서대로 색상환을 고르게 나눔)
  const colorOf = (k, n) => `hsl(${Math.round((k * 360) / Math.max(n, 1) + 12) % 360} 78% 56%)`;

  async function run(people, done) {
    await lib();
    const { Engine, Bodies, Body, Composite, Events } = window.Matter;
    const list = people.filter((p) => p.count > 0);
    const total = list.reduce((a, p) => a + p.count, 0);
    if (!total) return;
    const colors = {};
    list.forEach((p, k) => { colors[p.id] = colorOf(k, list.length); });

    // 화면
    const ov = document.createElement('div');
    ov.className = 'lucky';
    ov.innerHTML = `<div class="lk-side"><h3>🎰 ${esc(T('럭키드로우'))}</h3><p>${esc(T('구슬 {n}개 · 맨 먼저 바닥 출구를 통과한 구슬이 당첨이에요', { n: total }))}</p>
      <ol class="lk-list">${list.slice().sort((a, b) => b.count - a.count).map((p) => `<li><i style="background:${colors[p.id]}"></i>${esc(p.name)}<b>${p.count}</b></li>`).join('')}</ol>
      <button type="button" class="btn lk-close" hidden>${esc(T('닫기'))}</button></div>
      <div class="lk-stage"><canvas width="${W}" height="${H}"></canvas><div class="lk-count"></div><div class="lk-win" hidden></div></div>`;
    document.body.appendChild(ov);
    const cv = ov.querySelector('canvas'), g = cv.getContext('2d');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = W * dpr; cv.height = H * dpr; g.scale(dpr, dpr);

    // 판 만들기
    const engine = Engine.create({ gravity: { y: 1 } });
    const world = engine.world;
    const wall = (x, y, w, h, a = 0) => Bodies.rectangle(x, y, w, h, { isStatic: true, angle: a, restitution: 0.4, friction: 0.02, render: { kind: 'wall' } });
    const statics = [wall(-10, H / 2, 20, H * 2), wall(W + 10, H / 2, 20, H * 2)];
    const pegs = [];
    for (let row = 0, y = 190; y < 720; row++, y += 46) {
      for (let x = row % 2 ? 44 : 20; x < W - 10; x += 48) pegs.push(Bodies.circle(x, y, 5, { isStatic: true, restitution: 0.6, friction: 0.01 }));
    }
    // 회전 막대 두 개 (구슬을 섞는다)
    const spin = [
      Bodies.rectangle(W * 0.3, 760, 120, 10, { isStatic: true, restitution: 0.5 }),
      Bodies.rectangle(W * 0.7, 760, 120, 10, { isStatic: true, restitution: 0.5 }),
    ];
    // 깔때기 + 출구
    const gap = 30;
    const fl = (W - gap) / 2;
    const funnel = [
      wall(fl / 2 - 6, 870, fl + 20, 12, 0.32),
      wall(W - fl / 2 + 6, 870, fl + 20, 12, -0.32),
    ];
    const finishY = 935;
    // 출발 칸막이 : 카운트다운이 끝나면 치운다
    const gate = wall(W / 2, 150, W, 10);
    Composite.add(world, [...statics, ...pegs, ...spin, ...funnel, gate]);

    // 구슬 : 사람마다 count 개, 섞어서 위쪽에 고르게 놓는다
    const r = total > 90 ? 6 : total > 50 ? 7 : 8.5;
    const seeds = [];
    list.forEach((p) => { for (let k = 0; k < p.count; k++) seeds.push(p); });
    for (let i = seeds.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [seeds[i], seeds[j]] = [seeds[j], seeds[i]]; }
    const perRow = Math.floor((W - 30) / (r * 2.4));
    const balls = seeds.map((p, i) => {
      const x = 18 + (i % perRow) * r * 2.4 + Math.random() * 3;
      const y = 140 - Math.floor(i / perRow) * r * 2.4 - r;
      const b = Bodies.circle(x, y, r, { restitution: 0.55, friction: 0.002, frictionAir: 0.004, density: 0.002 });
      b.owner = p;
      return b;
    });
    Composite.add(world, balls);

    let t = 0, winner = null, released = false, raf = 0, last = performance.now(), stuckAt = 0;
    const startAt = performance.now();
    const countEl = ov.querySelector('.lk-count');
    function step(now) {
      const dt = Math.min(32, now - last); last = now;
      t += dt;
      // 3 · 2 · 1 카운트다운 뒤 출발
      const left = 3 - Math.floor((now - startAt) / 800);
      if (!released) {
        countEl.textContent = left > 0 ? left : 'GO!';
        if (left <= 0) { released = true; Composite.remove(world, gate); setTimeout(() => { countEl.textContent = ''; }, 500); }
      }
      Body.setAngle(spin[0], t / 420); Body.setAngle(spin[1], -t / 380);
      Engine.update(engine, dt);
      // 오래 걸리면 살짝 흔든다 (구슬이 걸려 멈추지 않게)
      if (released && !winner && now - (stuckAt || startAt) > 4000) {
        stuckAt = now;
        balls.forEach((b) => { if (b.speed < 0.4) Body.applyForce(b, b.position, { x: (Math.random() - 0.5) * 0.002 * b.mass * 10, y: -0.001 * b.mass * 10 }); });
      }
      if (!winner) {
        const hit = balls.find((b) => b.position.y > finishY);
        if (hit) finish(hit);
      }
      draw();
      if (!winner || now - winner.at < 2500) raf = requestAnimationFrame(step);
    }
    function draw() {
      g.clearRect(0, 0, W, H);
      const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#fbfff2'); bg.addColorStop(1, '#eaf6dc');
      g.fillStyle = bg; g.fillRect(0, 0, W, H);
      g.fillStyle = '#b9c4ad';
      pegs.forEach((p) => { g.beginPath(); g.arc(p.position.x, p.position.y, 5, 0, Math.PI * 2); g.fill(); });
      g.fillStyle = '#7f8b74';
      [...spin, ...funnel, ...(released ? [] : [gate])].forEach((b) => {
        g.beginPath(); b.vertices.forEach((v, i) => (i ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y))); g.closePath(); g.fill();
      });
      // 출구
      g.fillStyle = '#f5b82e'; g.fillRect(W / 2 - gap / 2 - 6, finishY - 4, gap + 12, 8);
      g.font = '700 14px Fredoka, sans-serif'; g.textAlign = 'center'; g.fillStyle = '#c48a0c'; g.fillText('GOAL', W / 2, finishY + 24);
      balls.forEach((b) => {
        g.beginPath(); g.arc(b.position.x, b.position.y, r, 0, Math.PI * 2);
        g.fillStyle = colors[b.owner.id]; g.fill();
        g.lineWidth = b === (winner && winner.ball) ? 4 : 1.5; g.strokeStyle = b === (winner && winner.ball) ? '#f5b82e' : 'rgba(255,255,255,.9)'; g.stroke();
      });
    }
    function finish(ball) {
      winner = { ball, at: performance.now() };
      const p = ball.owner;
      const el = ov.querySelector('.lk-win');
      el.innerHTML = `<small>${esc(T('당첨'))}</small><b style="color:${colors[p.id]}">${esc(p.name)}</b>`;
      el.hidden = false;
      ov.querySelector('.lk-close').hidden = false;
      try { if (typeof FX !== 'undefined') { FX.fireworks(3); setTimeout(() => FX.confetti(2), 500); } } catch (e) { /* 무시 */ }
      try { const a = new Audio('sounds/champion.ogg'); a.volume = 0.6; a.play().catch(() => {}); } catch (e) { /* 무시 */ }
      done(p);
    }
    ov.querySelector('.lk-close').addEventListener('click', () => { cancelAnimationFrame(raf); Engine.clear(engine); ov.remove(); });
    raf = requestAnimationFrame(step);
  }
  return { run };
})();
