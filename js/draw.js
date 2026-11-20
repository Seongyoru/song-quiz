'use strict';
/* =========================================================
 * 럭키드로우 : 모든 구슬을 긴 핀볼 코스에 한꺼번에 떨어뜨려, 맨 먼저 GOAL 을 통과한 구슬의 주인이 당첨
 *  코스 : 출발 → 핀 숲 · 범퍼 → 지그재그 경사로 → 풍차 → 움직이는 막대 → 핀 숲 2 · 범퍼 → 마지막 깔때기 · 진자 → GOAL
 *  카메라가 1등 구슬을 따라가고, 결승 직전에는 슬로모션
 *  물리 계산은 matter.js (cdnjs), 그리기는 직접 캔버스에
 *  LUCKY.run([{ id, name, count }], (winner) => …)
 * ========================================================= */
const LUCKY = (() => {
  const MATTER_JS = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
  let libP = null;
  const lib = () => libP || (libP = new Promise((ok, no) => { const s = document.createElement('script'); s.src = MATTER_JS; s.onload = ok; s.onerror = () => { libP = null; no(); }; document.head.appendChild(s); }));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const colorOf = (k, n) => `hsl(${Math.round((k * 360) / Math.max(n, 1) + 12) % 360} 85% 60%)`;
  const W = 900; // 코스 폭 (논리 좌표)

  /* ---------- 효과음 : 소리 파일 없이 Web Audio 로 바로 만든다 (사이트 효과음 끄기를 따른다) ---------- */
  function makeSynth() {
    let on = true;
    try { const v = localStorage.getItem('sq_sfx'); on = v == null ? true : JSON.parse(v); } catch (e) { /* 기본은 켬 */ }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!on || !AC) return new Proxy({}, { get: () => () => {} });
    const ac = new AC();
    const master = ac.createGain(); master.gain.value = 0.55; master.connect(ac.destination);
    const last = {};
    const ok = (k, ms) => { const t = performance.now(); if (last[k] && t - last[k] < ms) return false; last[k] = t; return true; };
    const tone = (f0, f1, dur, type = 'sine', vol = 0.3, delay = 0) => {
      const t = ac.currentTime + delay, o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.05);
    };
    let nb = null;
    const noise = (dur, f0, f1, q = 1, vol = 0.3, type = 'bandpass') => {
      if (!nb) { nb = ac.createBuffer(1, ac.sampleRate * 1.5, ac.sampleRate); const d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
      const t = ac.currentTime, src = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
      src.buffer = nb; f.type = type; f.Q.value = q;
      f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(f).connect(g).connect(master); src.start(t); src.stop(t + dur + 0.05);
    };
    return {
      count: () => { tone(660, 660, 0.2, 'square', 0.16); tone(1320, 1320, 0.12, 'sine', 0.08); },
      go: () => { [523, 659, 784, 1047].forEach((f, i) => tone(f, f, 0.4, 'triangle', 0.2, i * 0.05)); noise(0.45, 800, 5000, 0.8, 0.14); },
      bump: () => ok('bump', 70) && tone(520, 980, 0.13, 'sine', 0.22),
      whoosh: () => ok('whoosh', 120) && noise(0.28, 500, 3800, 1.2, 0.2),
      warp: () => { tone(300, 1600, 0.5, 'sawtooth', 0.1); tone(600, 2400, 0.5, 'sine', 0.14, 0.05); [1800, 2400, 3000].forEach((f, i) => tone(f, f, 0.08, 'sine', 0.06, 0.35 + i * 0.06)); },
      back: () => { tone(900, 140, 0.6, 'sawtooth', 0.12); tone(450, 70, 0.6, 'sine', 0.18); },
      rumble: () => ok('rumble', 800) && (tone(70, 38, 1.0, 'sine', 0.32), noise(1.0, 320, 70, 0.7, 0.22, 'lowpass')),
      boom: () => ok('boom', 150) && (tone(150, 42, 0.45, 'sine', 0.42), noise(0.35, 2200, 180, 0.6, 0.28, 'lowpass')),
      lead: () => ok('lead', 450) && tone(1200, 1550, 0.07, 'triangle', 0.09),
      gulp: () => ok('gulp', 300) && (tone(420, 55, 0.35, 'sine', 0.3), noise(0.3, 900, 120, 1, 0.15, 'lowpass')),
      final: () => { tone(55, 55, 1.0, 'sine', 0.34); tone(110, 108, 0.6, 'square', 0.1); noise(0.7, 4500, 260, 0.7, 0.18); },
      win: () => { [784, 988, 1175, 1568].forEach((f, i) => tone(f, f, 0.55, 'triangle', 0.18, i * 0.12)); tone(1568, 1568, 1.1, 'sine', 0.1, 0.5); },
      close: () => { try { ac.close(); } catch (e) { /* 무시 */ } },
    };
  }

  // opts.again : 「다시 하기」를 눌렀을 때 부를 함수 (없으면 같은 참가자로 다시 돌린다)
  async function run(people, done, opts = {}) {
    await lib();
    const { Engine, Bodies, Body, Composite, Events } = window.Matter;
    const list = people.filter((p) => p.count > 0);
    const total = list.reduce((a, p) => a + p.count, 0);
    if (!total) return;
    const colors = {};
    const SND = makeSynth();
    list.forEach((p, k) => { colors[p.id] = colorOf(k, list.length); });

    /* ---------- 화면 ---------- */
    const ov = document.createElement('div');
    ov.className = 'lucky';
    ov.innerHTML = `<canvas class="lk-cv"></canvas>
      <div class="lk-hud">
        <div class="lk-title">🎰 ${esc(T('럭키드로우'))} <small>${esc(T('구슬 {n}개', { n: total }))}</small></div>
        <ol class="lk-rank"></ol>
      </div>
      <canvas class="lk-mini"></canvas>
      <div class="lk-count"></div>
      <div class="lk-final" hidden>FINAL</div>
      <div class="lk-win" hidden></div>
      <div class="lk-btns" hidden><button type="button" class="btn main lk-again">${esc(T('🔁 다시 하기'))}</button><button type="button" class="btn lk-close">${esc(T('닫기'))}</button></div>`;
    document.body.appendChild(ov);
    const cv = ov.querySelector('.lk-cv'), g = cv.getContext('2d');
    const mini = ov.querySelector('.lk-mini'), mg = mini.getContext('2d');
    let VW = 0, VH = 0, dpr = 1;
    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      VW = ov.clientWidth; VH = ov.clientHeight;
      cv.width = VW * dpr; cv.height = VH * dpr;
      mini.width = 36 * dpr; mini.height = Math.min(VH * 0.6, 420) * dpr;
    }
    resize();
    window.addEventListener('resize', resize);

    /* ---------- 코스 만들기 ---------- */
    const engine = Engine.create({ gravity: { y: 1.65 }, positionIterations: 8, velocityIterations: 6 });
    const world = engine.world;
    const solid = []; // 그릴 고정 물체 { b, kind }
    const add = (b, kind) => { b.kind = kind; solid.push(b); Composite.add(world, b); return b; };
    const plank = (x, y, len, ang, kind = 'plank') => add(Bodies.rectangle(x, y, len, 14, { isStatic: true, angle: ang, restitution: 0.3, friction: 0.0005, chamfer: { radius: 6 } }), kind);
    const peg = (x, y, r = 6) => add(Bodies.circle(x, y, r, { isStatic: true, restitution: 0.3, friction: 0.0005 }), 'peg');
    const bumper = (x, y, r) => add(Bodies.circle(x, y, r, { isStatic: true, restitution: 0.9, friction: 0 }), 'bumper');
    // 같은 높이 사이 랜덤 값 (판마다 조금씩 다르게)
    const rnd = (a, b) => a + Math.random() * (b - a);

    let y = 0;
    const movers = []; // 움직이는 것 { b, fn(t) }
    const zones = []; // 구간 { y0, y1, name, hue } : 배경색과 이름 표시
    const zone = (name, hue, fn) => { const y0 = y; fn(); zones.push({ y0, y1: y, name, hue }); };
    // 반전 구멍 : WARP(파랑) 은 결승 직전으로 순간이동, BACK(빨강) 은 갈림길 구간으로 되돌려 보낸다
    let warpY = 0, backY = 0;
    const hole = (x, hy, r, kind) => { const b = Bodies.circle(x, hy, r, { isStatic: true, isSensor: true }); b.kind = kind; b.ph = Math.random() * 6; b.open = true; solid.push(b); Composite.add(world, b); return b; };
    // 블랙홀 : 반지름 R 안의 구슬을 빙글빙글 끌어당긴다 (오래 붙잡힌 구슬은 잠깐 놓아 준다)
    const wells = [];
    // R = 끌어당기는 범위, vis = 보이는 크기, k = 힘, surge = SURGE 때 배수, swirl = 도는 힘(작을수록 곧장 빨려 듦)
    const well = (x, wy, R, o = {}) => wells.push({ x, y: wy, R, vis: o.vis || R, k: o.k || 0.0008, surge: o.surge || 1.6, swirl: o.swirl == null ? 0.3 : o.swirl, ph: Math.random() * 4.5 });
    // 4.5초마다 0.9초 동안 강하게 빨아들인다 (SURGE) : 범위 1.8배 · 힘 2.6배
    const surgeOf = (w, ms) => { const c = (ms / 1000 + w.ph) % 4.5; return c < 0.9 ? Math.sin((c / 0.9) * Math.PI) : 0; };
    const pops = []; // 떠오르는 글자 { x, y, text, color, at }
    const waves = []; // 충격파 { x, y, at }
    const boosts = []; // 가속 패드 (센서) : 지나가는 구슬을 dir 방향으로 민다
    const boost = (x, by, w, ang, dir) => { const b = Bodies.rectangle(x, by, w, 18, { isStatic: true, isSensor: true, angle: ang }); b.kind = 'boost'; b.dir = dir; boosts.push(b); solid.push(b); Composite.add(world, b); };
    const mill = (cx, cy, len, speed, blades = 2) => {
      const ph = Math.random() * Math.PI;
      for (let k = 0; k < blades; k++) {
        const a = add(Bodies.rectangle(cx, cy, len, 12, { isStatic: true, restitution: 0.5, chamfer: { radius: 5 } }), 'mill');
        const off = (Math.PI / blades) * k;
        movers.push({ b: a, fn: (t) => Body.setAngle(a, ph + off + t * speed) });
      }
      add(Bodies.circle(cx, cy, 10, { isStatic: true }), 'hub');
    };
    const slider = (cy, len, amp, speed) => {
      const b = add(Bodies.rectangle(W / 2, cy, len, 14, { isStatic: true, restitution: 0.4, chamfer: { radius: 6 } }), 'slider');
      const ph = Math.random() * Math.PI * 2;
      movers.push({ b, fn: (t) => Body.setPosition(b, { x: W / 2 + Math.sin(ph + t * speed) * amp, y: cy }) });
    };
    // 자동 플리퍼 : 한쪽 끝을 축으로 위아래로 퍼덕인다
    const flipper = (px, py, len, side, speed) => {
      const b = add(Bodies.rectangle(px + (side * len) / 2, py, len, 14, { isStatic: true, restitution: 0.7, chamfer: { radius: 7 } }), 'flipper');
      const ph = Math.random() * Math.PI * 2;
      movers.push({ b, fn: (t) => {
        const a = side * (0.35 + Math.sin(ph + t * speed) * 0.45);
        Body.setAngle(b, a);
        Body.setPosition(b, { x: px + Math.cos(a) * (side * len) / 2, y: py + (Math.sin(a) * (side * len)) / 2 });
      } });
      add(Bodies.circle(px, py, 9, { isStatic: true }), 'hub');
    };

    // 1. 출발 상자
    const START_H = 260;
    const gate = Bodies.rectangle(W / 2, START_H + 10, W, 16, { isStatic: true });
    Composite.add(world, gate);
    y = START_H + 40;
    // 2. 핀 숲 + 범퍼
    zone('PIN FOREST', 200, () => {
      y += 20;
      for (let row = 0; row < 8; row++, y += 64) {
        for (let x = row % 2 ? 75 : 30; x < W - 20; x += 90) peg(x, y);
      }
      [[W * 0.25, y - 400], [W * 0.62, y - 290], [W * 0.4, y - 140], [W * 0.8, y - 470]].forEach(([bx, by]) => bumper(bx, by, 24));
      y += 30;
    });
    // 3. 지그재그 경사로 + 가속 패드
    zone('ZIGZAG', 250, () => {
      y += 30;
      for (let k = 0; k < 4; k++, y += 170) {
        const left = k % 2 === 0, len = W * 0.74, ang = 0.32;
        plank(left ? len / 2 - 10 : W - len / 2 + 10, y, len, left ? ang : -ang, 'ramp');
        // 경사로 위 가속 패드 : 내려가는 방향으로 휙
        boost(left ? len * 0.45 : W - len * 0.45, y - 18, 90, left ? ang : -ang, { x: left ? 7 : -7, y: 3 });
        peg(left ? W - 70 : 70, y + 40, 8);
      }
      y += 20;
    });
    // 4. 풍차 (두 날개 · 세 날개)
    zone('WINDMILLS', 45, () => {
      plank(W * 0.24 - 10, y + 10, W * 0.48, 0.34, 'ramp');
      bumper(W * 0.62, y + 70, 18);
      y += 90;
      mill(W * 0.22, y + 100, 210, 0.0021); mill(W * 0.78, y + 100, 210, -0.0024); mill(W * 0.5, y + 320, 230, 0.0019, 3);
      well(W * 0.5, y + 110, 125);
      for (let x = 40; x < W; x += 90) peg(x, y + 210, 7);
      y += 470;
    });
    // 5. 세 갈래 길 : 칸막이로 나뉘고, 칸마다 다른 장애물 (핀 · 범퍼 · 풍차)
    zone('SPLIT LANES', 160, () => {
      plank(W * 0.18, y + 40, W * 0.4, 0.38, 'ramp'); plank(W * 0.82, y + 40, W * 0.4, -0.38, 'ramp');
      y += 120;
      const top = y, len = 380;
      add(Bodies.rectangle(W / 3, top + len / 2, 12, len, { isStatic: true, chamfer: { radius: 6 } }), 'wall');
      add(Bodies.rectangle((W * 2) / 3, top + len / 2, 12, len, { isStatic: true, chamfer: { radius: 6 } }), 'wall');
      for (let k = 0; k < 6; k++) peg(W / 6 + (k % 2 ? 40 : -40), top + 40 + k * 55, 7);
      bumper(W / 2, top + 110, 22); bumper(W / 2 - 60, top + 250, 18); bumper(W / 2 + 60, top + 250, 18);
      mill((W * 5) / 6, top + 150, 120, 0.004); mill((W * 5) / 6, top + 290, 120, -0.004);
      y += len + 40;
    });
    // 6. 움직이는 막대 + 자동 플리퍼
    zone('SLIDERS', 330, () => {
      for (let k = 0; k < 2; k++, y += 170) {
        slider(y, 300, W / 2 - 170, 0.0016 + k * 0.0005);
        if (k === 1) well(W * (Math.random() < 0.5 ? 0.22 : 0.78), y - 80, 140);
        for (let x = k % 2 ? 80 : 40; x < W; x += 110) peg(x, y + 85, 7);
      }
      flipper(40, y + 20, 170, 1, 0.006); flipper(W - 40, y + 20, 170, -1, 0.0065);
      y += 150;
      // 깔때기로 모았다가 범퍼로 다시 퍼뜨림
      plank(W * 0.2, y + 60, W * 0.46, 0.42, 'ramp'); plank(W * 0.8, y + 60, W * 0.46, -0.42, 'ramp');
      y += 200;
      bumper(W / 2, y, 30);
      y += 80;
    });
    // 7. 범퍼 파티 : 촘촘한 핀 + 큰 범퍼 + 돌아가는 막대
    zone('BUMPER PARTY', 300, () => {
      backY = y + 10; // BACK 게이트는 이 구간 처음으로 되돌린다
      for (let row = 0; row < 8; row++, y += 58) {
        for (let x = row % 2 ? 62 : 22; x < W - 15; x += 80) peg(x + rnd(-4, 4), y, 5.5);
      }
      [[W * 0.3, y - 360], [W * 0.7, y - 210]].forEach(([cx, cy], k) => {
        const b = add(Bodies.rectangle(cx, cy, 150, 10, { isStatic: true, restitution: 0.6, chamfer: { radius: 4 } }), 'mill');
        movers.push({ b, fn: (t) => Body.setAngle(b, t * (k ? -0.003 : 0.0032)) });
      });
      [[W * 0.15, y - 420], [W * 0.85, y - 420], [W * 0.5, y - 100]].forEach(([bx, by]) => bumper(bx, by, 22));
      hole(W * 0.12, y - 200, 18, 'warp'); hole(W * 0.88, y - 260, 18, 'warp');
      well(W * 0.5, y - 270, 950, { vis: 125, k: 0.00014, surge: 7, swirl: 0.12 });
      hole(W * 0.74, y - 120, 16, 'back');
      y += 40;
    });
    // 8. 마지막 깔때기 + 출구를 가로지르는 진자
    const FUN_TOP = y;
    zone('FINAL', 0, () => {
      plank(W * 0.23, y + 110, W * 0.52, 0.5, 'ramp'); plank(W * 0.77, y + 110, W * 0.52, -0.5, 'ramp');
      y += 250;
      const pend = add(Bodies.rectangle(W / 2, y, 70, 16, { isStatic: true, restitution: 0.6, chamfer: { radius: 7 } }), 'pend');
      movers.push({ b: pend, fn: (t) => Body.setPosition(pend, { x: W / 2 + Math.sin(t * 0.0042) * 95, y: FUN_TOP + 250 }) });
      // 깔때기 위 되돌리기 구멍 : 1등도 빠지면 한참 뒤로!
      hole(W * 0.33, FUN_TOP + 120, 17, 'back'); hole(W * 0.67, FUN_TOP + 120, 17, 'back');
      // 결승선 바로 위 셔터 : 가운데를 열었다 닫았다 (닫히면 앞선 구슬이 막혀 역전이 나온다)
      const shutY = FUN_TOP + 330;
      const shL = add(Bodies.rectangle(W / 2 - 60, shutY, 120, 14, { isStatic: true, restitution: 0.2, chamfer: { radius: 6 } }), 'shutter');
      const shR = add(Bodies.rectangle(W / 2 + 60, shutY, 120, 14, { isStatic: true, restitution: 0.2, chamfer: { radius: 6 } }), 'shutter');
      movers.push({ b: shL, fn: (t) => { const o = (Math.sin(t * 0.0021) + 1) / 2; Body.setPosition(shL, { x: W / 2 - 60 - o * 140, y: shutY }); Body.setPosition(shR, { x: W / 2 + 60 + o * 140, y: shutY }); } });
      y += 140;
    });
    // 가속 패드 : 닿은 구슬을 민다
    Events.on(engine, 'collisionStart', (ev) => ev.pairs.forEach(({ bodyA, bodyB }) => {
      const pad = bodyA.kind === 'boost' ? bodyA : bodyB.kind === 'boost' ? bodyB : null;
      const ball = pad === bodyA ? bodyB : bodyA;
      if (pad && ball.owner) { Body.setVelocity(ball, { x: pad.dir.x, y: pad.dir.y }); flash.set(pad, performance.now()); SND.whoosh(); }
      // 셔터에 부딪히면 충격파 : 반경 130 안 구슬을 바깥으로 튕겨 낸다 (셔터마다 0.35초에 한 번)
      const sh = bodyA.kind === 'shutter' ? bodyA : bodyB.kind === 'shutter' ? bodyB : null;
      const sb = sh === bodyA ? bodyB : bodyA;
      if (sh && sb.owner) {
        const now = performance.now();
        if (!sh.waveAt || now - sh.waveAt > 350) {
          sh.waveAt = now;
          const cx = sb.position.x, cy = sb.position.y;
          waves.push({ x: cx, y: cy, at: now });
          SND.boom();
          balls.forEach((o) => {
            const dx = o.position.x - cx, dy = o.position.y - cy, d = Math.hypot(dx, dy);
            if (d > 130 || o.done) return;
            const f = (1 - d / 130) * 11 + 3, n = d || 1;
            Body.setVelocity(o, { x: (dx / n) * f + rnd(-1, 1), y: (dy / n) * f - 4 });
          });
        }
      }
      const h = ['warp', 'back'].includes(bodyA.kind) ? bodyA : ['warp', 'back'].includes(bodyB.kind) ? bodyB : null;
      const hb = h === bodyA ? bodyB : bodyA;
      if (h && hb.owner && !hb.done && h.open) {
        const now = performance.now();
        if (hb.holeAt && now - hb.holeAt < 1500) return;
        hb.holeAt = now; flash.set(h, now);
        if (h.kind === 'warp') SND.warp(); else SND.back();
        pops.push({ x: h.position.x, y: h.position.y - 30, text: h.kind === 'warp' ? `⚡ ${hb.owner.name} WARP!` : `↩ ${hb.owner.name} BACK!`, color: h.kind === 'warp' ? '#5bc8ff' : '#ff5d5d', at: now });
        const ty = h.kind === 'warp' ? warpY : backY;
        setTimeout(() => { Body.setPosition(hb, { x: rnd(W * 0.3, W * 0.7), y: ty }); Body.setVelocity(hb, { x: rnd(-2, 2), y: 1 }); hb.trail.length = 0; pops.push({ x: hb.position.x, y: ty + 30, text: h.kind === 'warp' ? '⚡ 역전 찬스!' : '↩ 처음부터 다시…', color: h.kind === 'warp' ? '#5bc8ff' : '#ff5d5d', at: performance.now() }); }, 0);
      }
    }));
    const GOAL = y;
    warpY = FUN_TOP - 40;
    // 결승 아래 받침 (기울어 있어 쌓여도 굴러감)
    plank(W * 0.25, GOAL + 150, W * 0.55, 0.25, 'floor'); plank(W * 0.75, GOAL + 150, W * 0.55, -0.25, 'floor');
    const H = GOAL + 260;
    // 양쪽 벽
    Composite.add(world, [
      Bodies.rectangle(-20, H / 2, 40, H * 2, { isStatic: true, friction: 0 }),
      Bodies.rectangle(W + 20, H / 2, 40, H * 2, { isStatic: true, friction: 0 }),
      Bodies.rectangle(W / 2, H + 20, W, 40, { isStatic: true }),
    ]);

    /* ---------- 구슬 ---------- */
    const r = total > 110 ? 8 : total > 60 ? 9.5 : 11;
    const seeds = [];
    list.forEach((p) => { for (let k = 0; k < p.count; k++) seeds.push(p); });
    for (let i = seeds.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [seeds[i], seeds[j]] = [seeds[j], seeds[i]]; }
    const perRow = Math.floor((W - 40) / (r * 2.5));
    const balls = seeds.map((p, i) => {
      const b = Bodies.circle(24 + r + (i % perRow) * r * 2.5 + rnd(-2, 2), START_H - r - 4 - Math.floor(i / perRow) * r * 2.5, r,
        { restitution: 0.35, friction: 0.0005, frictionAir: 0.0025, density: 0.002 });
      b.owner = p; b.trail = []; b.still = 0; b.done = false;
      return b;
    });
    Composite.add(world, balls);
    // 범퍼에 닿으면 세게 튕겨 낸다
    const flash = new Map();
    Events.on(engine, 'collisionStart', (ev) => {
      ev.pairs.forEach(({ bodyA, bodyB }) => {
        const bump = bodyA.kind === 'bumper' ? bodyA : bodyB.kind === 'bumper' ? bodyB : null;
        const ball = bump === bodyA ? bodyB : bodyA;
        if (!bump || !ball.owner) return;
        const dx = ball.position.x - bump.position.x, dy = ball.position.y - bump.position.y, d = Math.hypot(dx, dy) || 1;
        Body.setVelocity(ball, { x: (dx / d) * 9, y: (dy / d) * 9 });
        flash.set(bump, performance.now());
        SND.bump();
      });
    });

    /* ---------- 진행 ---------- */
    const countEl = ov.querySelector('.lk-count'), rankEl = ov.querySelector('.lk-rank'), finalEl = ov.querySelector('.lk-final');
    const startAt = performance.now();
    let arrived = 0; // GOAL 통과 순서
    let lastLeft = null, lastLead = null, wasNear = false, eatAt = 0;
    let released = false, winner = null, raf = 0, last = startAt, simT = 0, camY = 0, slow = 1, rankAt = 0;
    const STEP = 1000 / 120;
    let acc = 0;
    function leader() {
      let best = null;
      balls.forEach((b) => { if (!b.done && (!best || b.position.y > best.position.y)) best = b; });
      return best;
    }
    function frame(now) {
      const dt = Math.min(50, now - last); last = now;
      // 3 · 2 · 1 카운트다운
      if (!released) {
        const left = 3 - Math.floor((now - startAt) / 850);
        if (left !== lastLeft) { lastLeft = left; if (left > 0) SND.count(); else SND.go(); }
        countEl.textContent = left > 0 ? left : 'GO!';
        countEl.classList.toggle('go', left <= 0);
        if (left <= 0) { released = true; Composite.remove(world, gate); setTimeout(() => { countEl.textContent = ''; }, 600); }
      }
      const lead = leader();
      if (released && !winner && lead && lead !== lastLead) { if (lastLead) SND.lead(); lastLead = lead; }
      // 결승 직전 슬로모션
      const near = released && !winner && lead && lead.position.y > GOAL - 230;
      slow += ((near ? 0.55 : 1) - slow) * 0.08;
      finalEl.hidden = !near;
      if (near && !wasNear) SND.final();
      wasNear = near;
      acc += dt * slow;
      let n = 0;
      while (acc >= STEP && n < 6) {
        simT += STEP;
        movers.forEach((m) => m.fn(simT));
        solid.forEach((h) => { if (h.ph != null) h.open = Math.sin(simT * 0.0013 + h.ph) > -0.25; });
        // 화면 근처 블랙홀이 SURGE 를 시작하면 웅웅
        wells.forEach((w) => { const su = surgeOf(w, simT) > 0; if (su && !w.surging && released && Math.abs(w.y - (camY + 380)) < 700) SND.rumble(); w.surging = su; });
        if (released) balls.forEach((b) => {
          if (b.done) return;
          if (b.eat) {
            // 블랙홀에 삼켜진 동안 : 중심에 붙잡혀 있다가 아래쪽으로 뱉어 낸다
            const w = b.eat.w;
            if (simT < b.eat.until) { Body.setPosition(b, { x: w.x, y: w.y }); Body.setVelocity(b, { x: 0, y: 0 }); return; }
            b.collisionFilter.mask = b.eat.mask;
            const a = rnd(0.4, Math.PI - 0.4), out = w.vis * 0.28 + r;
            Body.setPosition(b, { x: w.x + Math.cos(a) * out, y: w.y + Math.sin(a) * out });
            Body.setVelocity(b, { x: Math.cos(a) * 7, y: Math.sin(a) * 7 });
            b.eat = null; b.freeUntil = simT + 1500; b.trail.length = 0; SND.whoosh();
            return;
          }
          if (b.freeUntil && simT < b.freeUntil) return;
          let near = false;
          wells.forEach((w) => {
            if (b.eat) return;
            const su = surgeOf(w, simT), RR = w.R * (1 + su * 0.8);
            const dx = w.x - b.position.x, dy = w.y - b.position.y, d = Math.hypot(dx, dy);
            if (d > RR) return;
            if (d < w.vis * 0.2) {
              // 사건의 지평선에 닿으면 삼킨다
              b.eat = { w, until: simT + 1100, mask: b.collisionFilter.mask };
              b.collisionFilter.mask = 0;
              if (performance.now() - eatAt > 700) { eatAt = performance.now(); pops.push({ x: w.x, y: w.y - w.vis * 0.35, text: `🌀 ${b.owner.name}`, color: '#d9a6ff', at: eatAt }); SND.gulp(); }
              return;
            }
            const k = (1 - d / RR) * w.k * (1 + su * w.surge) * b.mass;
            Body.applyForce(b, b.position, { x: (dx / d) * k - (dy / d) * k * w.swirl, y: (dy / d) * k + (dx / d) * k * w.swirl });
            // 가까울수록 느려지며 빨려 든다
            if (d < w.vis) { near = true; Body.setVelocity(b, { x: b.velocity.x * 0.99, y: b.velocity.y * 0.99 }); }
          });
          b.wellT = near ? (b.wellT || 0) + STEP : 0;
          if (b.wellT > 2600) { b.freeUntil = simT + 2500; b.wellT = 0; }
        });
        Engine.update(engine, STEP);
        acc -= STEP; n++;
      }
      if (n >= 6) acc = 0;
      // 구슬 정리 : 끼어 멈추면 살짝 튕기고, 흔적을 남긴다
      balls.forEach((b) => {
        if (b.position.y > GOAL && !b.done) { b.done = true; b.order = ++arrived; if (!winner) finish(b); }
        if (released && !b.done && !b.eat && b.speed < 0.25) { b.still += dt; if (b.still > 1200) { Body.setVelocity(b, { x: rnd(-4, 4), y: -rnd(2, 5) }); b.still = 0; } } else b.still = 0;
        b.trail.push(b.position.x, b.position.y); if (b.trail.length > 16) b.trail.splice(0, 2);
      });
      // 카메라 : 1등 구슬을 따라 (끝나면 당첨 구슬)
      // 화면에 코스가 세로로 760 정도 보이게 (가로가 좁은 화면은 폭에 맞춤)
      const sc = Math.min(VW / W, VH / 760);
      const viewH = VH / sc;
      const target = winner ? winner.ball.position.y : lead ? lead.position.y : 0;
      const want = Math.max(0, Math.min(H - viewH, target - viewH * 0.45));
      camY += (want - camY) * (released ? 0.08 : 1);
      draw(sc, viewH, lead);
      drawMini(lead);
      if (now - rankAt > 250) { rankAt = now; drawRank(); }
      if (!winner || now - winner.at < 4000) raf = requestAnimationFrame(frame);
    }

    /* ---------- 그리기 ---------- */
    function draw(sc, viewH, lead) {
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const bg = g.createLinearGradient(0, 0, 0, VH);
      bg.addColorStop(0, '#0d1024'); bg.addColorStop(1, '#1d1035');
      g.fillStyle = bg; g.fillRect(0, 0, VW, VH);
      const ox = (VW - W * sc) / 2;
      g.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * ox, -dpr * camY * sc);
      // 코스 바닥 · 격자
      g.fillStyle = 'rgba(255,255,255,.025)'; g.fillRect(0, camY, W, viewH);
      g.strokeStyle = 'rgba(140,160,255,.07)'; g.lineWidth = 1;
      for (let gy = Math.floor(camY / 80) * 80; gy < camY + viewH; gy += 80) { g.beginPath(); g.moveTo(0, gy); g.lineTo(W, gy); g.stroke(); }
      // 진행 눈금
      g.fillStyle = 'rgba(255,255,255,.18)'; g.font = '700 14px Fredoka, sans-serif'; g.textAlign = 'left';
      for (let k = 1; k < 10; k++) { const my = GOAL * k / 10; if (my > camY && my < camY + viewH) g.fillText(`${k * 10}%`, 8, my); }
      zones.forEach((z) => {
        if (z.y1 < camY || z.y0 > camY + viewH) return;
        g.fillStyle = `hsla(${z.hue}, 80%, 55%, .07)`; g.fillRect(0, z.y0, W, z.y1 - z.y0);
        g.fillStyle = `hsla(${z.hue}, 90%, 70%, .9)`; g.fillRect(0, z.y0, 6, z.y1 - z.y0); g.fillRect(W - 6, z.y0, 6, z.y1 - z.y0);
        g.save(); g.font = '700 34px Fredoka, sans-serif'; g.textAlign = 'right'; g.fillStyle = `hsla(${z.hue}, 90%, 75%, .22)`; g.fillText(z.name, W - 20, z.y0 + 40); g.restore();
      });
      wells.forEach((w) => { if (w.y + w.R > camY && w.y - w.R < camY + viewH) drawWell(w, performance.now()); });
      const inView = (b, m = 60) => b.bounds.max.y > camY - m && b.bounds.min.y < camY + viewH + m;
      const now = performance.now();
      solid.forEach((b) => {
        if (!inView(b)) return;
        if (b.kind === 'peg') {
          g.fillStyle = 'rgba(120,200,255,.18)'; g.beginPath(); g.arc(b.position.x, b.position.y, b.circleRadius + 4, 0, Math.PI * 2); g.fill();
          g.fillStyle = '#9fe0ff'; g.beginPath(); g.arc(b.position.x, b.position.y, b.circleRadius, 0, Math.PI * 2); g.fill();
        } else if (b.kind === 'bumper') {
          const f = Math.max(0, 1 - (now - (flash.get(b) || 0)) / 300);
          g.fillStyle = `rgba(255,90,170,${0.25 + f * 0.5})`; g.beginPath(); g.arc(b.position.x, b.position.y, b.circleRadius + 8 + f * 10, 0, Math.PI * 2); g.fill();
          const rg = g.createRadialGradient(b.position.x - 6, b.position.y - 6, 2, b.position.x, b.position.y, b.circleRadius);
          rg.addColorStop(0, '#fff'); rg.addColorStop(0.35, '#ff7ac0'); rg.addColorStop(1, '#c2186b');
          g.fillStyle = rg; g.beginPath(); g.arc(b.position.x, b.position.y, b.circleRadius, 0, Math.PI * 2); g.fill();
        } else if (b.kind === 'boost') {
          const f = Math.max(0, 1 - (now - (flash.get(b) || 0)) / 250);
          g.save(); g.translate(b.position.x, b.position.y); g.rotate(b.angle);
          g.fillStyle = `rgba(54,226,180,${0.25 + f * 0.6})`; g.fillRect(-45, -9, 90, 18);
          g.fillStyle = '#36e2b4'; const sh = (now / 60) % 20; const d = b.dir.x >= 0 ? 1 : -1;
          for (let k = -40; k < 40; k += 20) { const xx = k + d * sh; g.beginPath(); g.moveTo(xx, -7); g.lineTo(xx + d * 8, 0); g.lineTo(xx, 7); g.lineTo(xx + d * 3, 0); g.closePath(); g.fill(); }
          g.restore();
        } else if (b.kind === 'warp' || b.kind === 'back') {
          drawGate(b, now);
        } else if (b.kind === 'hub') {
          g.fillStyle = '#ffd166'; g.beginPath(); g.arc(b.position.x, b.position.y, 10, 0, Math.PI * 2); g.fill();
        } else {
          const col = { ramp: '#5b6cff', plank: '#5b6cff', mill: '#ffd166', slider: '#36e2b4', pend: '#ff5d5d', floor: '#3a3f66', wall: '#8a7dff', flipper: '#ff8a3d', shutter: '#ff3d7f' }[b.kind] || '#5b6cff';
          g.save(); g.shadowColor = col; g.shadowBlur = 14;
          g.fillStyle = col; g.beginPath(); b.vertices.forEach((v, i) => (i ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y))); g.closePath(); g.fill();
          g.restore();
        }
      });
      if (!released) { g.fillStyle = '#ff5d5d'; g.fillRect(0, START_H + 2, W, 14); }
      // GOAL
      if (GOAL > camY - 40 && GOAL < camY + viewH + 40) {
        const t = (now / 120) % 2 < 1;
        for (let x = 0; x < W; x += 30) { g.fillStyle = ((x / 30) % 2 === 0) === t ? '#fff' : '#111'; g.fillRect(x, GOAL - 6, 30, 12); }
        g.fillStyle = '#ffd166'; g.font = '700 30px Fredoka, sans-serif'; g.textAlign = 'center'; g.fillText('GOAL', W / 2, GOAL + 44);
      }
      // 구슬 : 흔적 → 몸통 → 광택
      balls.forEach((b) => {
        if (b.position.y < camY - 40 || b.position.y > camY + viewH + 40) return;
        const c = colors[b.owner.id];
        if (b.eat) {
          const f = Math.max(0, (b.eat.until - simT) / 1100), ang = simT / 60;
          const rr = (1 - f) * 0 + f * b.eat.w.vis * 0.18;
          g.globalAlpha = 0.3 + f * 0.7; g.fillStyle = c;
          g.beginPath(); g.arc(b.eat.w.x + Math.cos(ang) * rr, b.eat.w.y + Math.sin(ang) * rr * 0.5, r * Math.max(0.2, f), 0, Math.PI * 2); g.fill();
          g.globalAlpha = 1;
          return;
        }
        g.strokeStyle = c; g.globalAlpha = 0.25; g.lineWidth = r * 0.9; g.lineCap = 'round';
        g.beginPath(); for (let k = 0; k < b.trail.length; k += 2) (k ? g.lineTo(b.trail[k], b.trail[k + 1]) : g.moveTo(b.trail[k], b.trail[k + 1])); g.stroke();
        g.globalAlpha = 1;
        g.fillStyle = c; g.beginPath(); g.arc(b.position.x, b.position.y, r, 0, Math.PI * 2); g.fill();
        g.fillStyle = 'rgba(255,255,255,.75)'; g.beginPath(); g.arc(b.position.x - r * 0.35, b.position.y - r * 0.35, r * 0.32, 0, Math.PI * 2); g.fill();
      });
      for (let k = waves.length - 1; k >= 0; k--) {
        const w = waves[k], age = (now - w.at) / 500;
        if (age > 1) { waves.splice(k, 1); continue; }
        g.strokeStyle = `rgba(255,61,127,${1 - age})`; g.lineWidth = 6 * (1 - age) + 1;
        g.beginPath(); g.arc(w.x, w.y, 20 + age * 120, 0, Math.PI * 2); g.stroke();
        g.strokeStyle = `rgba(255,255,255,${(1 - age) * 0.6})`; g.lineWidth = 2;
        g.beginPath(); g.arc(w.x, w.y, 10 + age * 90, 0, Math.PI * 2); g.stroke();
      }
      for (let k = pops.length - 1; k >= 0; k--) {
        const p = pops[k], age = (now - p.at) / 1400;
        if (age > 1) { pops.splice(k, 1); continue; }
        g.globalAlpha = 1 - age; g.font = '700 22px Fredoka, "Noto Sans KR", sans-serif'; g.textAlign = 'center';
        g.lineWidth = 5; g.strokeStyle = 'rgba(5,6,15,.85)'; g.strokeText(p.text, p.x, p.y - age * 40);
        g.fillStyle = p.color; g.fillText(p.text, p.x, p.y - age * 40); g.globalAlpha = 1;
      }
      // 1등 (끝나면 당첨) 구슬 : 고리 + 왕관 + 이름
      const star = winner ? winner.ball : lead;
      if (star && released) {
        const { x, y: by } = star.position;
        g.strokeStyle = '#ffd166'; g.lineWidth = 3; g.beginPath(); g.arc(x, by, r + 6 + Math.sin(now / 120) * 2, 0, Math.PI * 2); g.stroke();
        g.font = '700 22px Fredoka, "Noto Sans KR", sans-serif'; g.textAlign = 'center';
        const label = `👑 ${star.owner.name}`;
        const tw = g.measureText(label).width + 20;
        g.fillStyle = 'rgba(10,12,30,.8)'; g.fillRect(x - tw / 2, by - r - 46, tw, 32);
        g.fillStyle = '#ffd166'; g.fillText(label, x, by - r - 22);
      }
    }
    /* ---------- 블랙홀 · 게이트 그리기 ---------- */
    // 블랙홀 : 빨려 들어가는 빛 알갱이 → 기울어진 강착원반(뒤쪽) → 사건의 지평선 → 광자 고리 → 강착원반(앞쪽)
    function drawWell(w, now) {
      if (!w.parts) w.parts = Array.from({ length: 46 }, () => ({ a: Math.random() * Math.PI * 2, r: Math.random(), s: 0.6 + Math.random() * 0.8 }));
      const R = w.vis, core = R * 0.2, t = now / 1000;
      if (w.R > 400) {
        const su0 = surgeOf(w, simT);
        g.save(); g.translate(w.x, w.y);
        for (let k = 0; k < 28; k++) {
          const a = k * 0.224 + t * 0.4, life = ((t * (0.35 + su0 * 1.4) + k * 0.137) % 1), d0 = 140 + (1 - life) * 760;
          g.strokeStyle = `rgba(190,140,255,${(0.05 + su0 * 0.35) * life})`; g.lineWidth = 1.5 + su0 * 2;
          g.beginPath(); g.moveTo(Math.cos(a) * d0, Math.sin(a) * d0); g.lineTo(Math.cos(a + 0.12) * (d0 - 40 - su0 * 60), Math.sin(a + 0.12) * (d0 - 40 - su0 * 60)); g.stroke();
        }
        g.restore();
      }
      // 바깥 빛 번짐
      const halo = g.createRadialGradient(w.x, w.y, core, w.x, w.y, R);
      halo.addColorStop(0, 'rgba(255,170,80,.28)'); halo.addColorStop(0.35, 'rgba(160,70,255,.16)'); halo.addColorStop(1, 'rgba(90,40,200,0)');
      g.fillStyle = halo; g.beginPath(); g.arc(w.x, w.y, R, 0, Math.PI * 2); g.fill();
      // 나선을 그리며 빨려 드는 알갱이
      w.parts.forEach((q) => {
        const life = (q.r - t * 0.18 * q.s) % 1, rr = (life < 0 ? life + 1 : life);
        const rad = core + rr * (R - core), ang = q.a + (1 - rr) * 6 + t * 1.6 * q.s;
        g.fillStyle = `rgba(255,${180 + rr * 60},${120 + rr * 120},${0.25 + (1 - rr) * 0.7})`;
        g.beginPath(); g.arc(w.x + Math.cos(ang) * rad, w.y + Math.sin(ang) * rad * 0.55, 1.2 + (1 - rr) * 1.6, 0, Math.PI * 2); g.fill();
      });
      // 강착원반 : 납작한 타원 (뒤쪽 절반)
      const disk = (front) => {
        g.save(); g.translate(w.x, w.y); g.rotate(-0.35); g.scale(1, 0.32);
        const dg = g.createRadialGradient(0, 0, core * 1.1, 0, 0, R * 0.62);
        dg.addColorStop(0, 'rgba(255,245,220,.95)'); dg.addColorStop(0.35, 'rgba(255,170,70,.85)'); dg.addColorStop(0.7, 'rgba(220,70,140,.45)'); dg.addColorStop(1, 'rgba(120,40,220,0)');
        g.fillStyle = dg; g.beginPath();
        if (front) g.arc(0, 0, R * 0.62, 0, Math.PI); else g.arc(0, 0, R * 0.62, Math.PI, Math.PI * 2);
        g.arc(0, 0, core * 1.05, front ? Math.PI : Math.PI * 2, front ? 0 : Math.PI, true);
        g.closePath(); g.fill();
        // 원반 무늬가 돈다
        g.strokeStyle = 'rgba(255,230,200,.35)'; g.lineWidth = 2;
        for (let k = 0; k < 3; k++) { const st = t * 2.2 + k * 2.1; g.beginPath(); g.arc(0, 0, R * (0.32 + k * 0.1), front ? st % Math.PI : Math.PI + (st % Math.PI), (front ? st % Math.PI : Math.PI + (st % Math.PI)) + 0.9); g.stroke(); }
        g.restore();
      };
      disk(false);
      // 사건의 지평선 + 광자 고리
      g.fillStyle = '#000'; g.beginPath(); g.arc(w.x, w.y, core, 0, Math.PI * 2); g.fill();
      const ring = g.createRadialGradient(w.x, w.y, core * 0.9, w.x, w.y, core * 1.35);
      ring.addColorStop(0, 'rgba(255,255,255,0)'); ring.addColorStop(0.45, `rgba(255,236,200,${0.85 + Math.sin(t * 6) * 0.1})`); ring.addColorStop(1, 'rgba(255,150,60,0)');
      g.fillStyle = ring; g.beginPath(); g.arc(w.x, w.y, core * 1.35, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#000'; g.beginPath(); g.arc(w.x, w.y, core * 0.92, 0, Math.PI * 2); g.fill();
      disk(true);
      const su = surgeOf(w, simT);
      if (su > 0.01) {
        const RR = R * (1 + su * 0.8);
        for (let k = 0; k < 3; k++) {
          const ph = ((now / 260) + k / 3) % 1, rr = RR * (1 - ph) + core * ph;
          g.strokeStyle = `rgba(200,140,255,${su * (1 - ph) * 0.9})`; g.lineWidth = 3;
          g.beginPath(); g.arc(w.x, w.y, rr, 0, Math.PI * 2); g.stroke();
        }
        g.font = '700 22px Fredoka, sans-serif'; g.textAlign = 'center'; g.fillStyle = `rgba(230,180,255,${su})`; g.fillText('SURGE!', w.x, w.y - R * 0.5);
      }
      g.font = '700 12px Fredoka, sans-serif'; g.textAlign = 'center'; g.fillStyle = 'rgba(255,210,170,.75)'; g.fillText('BLACK HOLE', w.x, w.y + R * 0.42 + 10);
    }
    // 게이트 : 열리면 소용돌이 포털 (조리개처럼 커짐), 닫히면 금속 조리개 날개
    function drawGate(b, now) {
      const warp = b.kind === 'warp', r = b.circleRadius, t = now / 1000;
      b.vis = (b.vis == null ? 1 : b.vis) + ((b.open ? 1 : 0) - (b.vis == null ? 1 : b.vis)) * 0.12;
      const o = b.vis, f = Math.max(0, 1 - (now - (flash.get(b) || 0)) / 600);
      const c1 = warp ? [91, 200, 255] : [255, 80, 90], c2 = warp ? [150, 110, 255] : [255, 170, 60];
      const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
      g.save(); g.translate(b.position.x, b.position.y);
      // 바깥 빛
      const gl = g.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 2.6 + f * 20);
      gl.addColorStop(0, rgba(c1, 0.35 * o + f * 0.4)); gl.addColorStop(1, rgba(c1, 0));
      g.fillStyle = gl; g.beginPath(); g.arc(0, 0, r * 2.6 + f * 20, 0, Math.PI * 2); g.fill();
      // 바깥 틀 (금속 고리 + 눈금)
      g.strokeStyle = '#3a3f66'; g.lineWidth = 7; g.beginPath(); g.arc(0, 0, r + 6, 0, Math.PI * 2); g.stroke();
      g.strokeStyle = rgba(c1, 0.5 + 0.5 * o); g.lineWidth = 2;
      g.save(); g.rotate(t * (warp ? 0.8 : -0.8));
      for (let k = 0; k < 12; k++) { g.rotate(Math.PI / 6); g.beginPath(); g.moveTo(r + 3, 0); g.lineTo(r + 9, 0); g.stroke(); }
      g.restore();
      // 안쪽 : 소용돌이 (열린 만큼 보인다)
      if (o > 0.02) {
        g.save(); g.beginPath(); g.arc(0, 0, r * o, 0, Math.PI * 2); g.clip();
        const core = g.createRadialGradient(0, 0, 0, 0, 0, r);
        core.addColorStop(0, '#ffffff'); core.addColorStop(0.25, rgba(c1, 1)); core.addColorStop(0.7, rgba(c2, 0.9)); core.addColorStop(1, '#05060f');
        g.fillStyle = core; g.fillRect(-r, -r, r * 2, r * 2);
        g.rotate(t * (warp ? 3 : -3));
        for (let k = 0; k < 5; k++) {
          g.rotate((Math.PI * 2) / 5);
          g.strokeStyle = `rgba(255,255,255,${0.55 - k * 0.05})`; g.lineWidth = 2.2;
          g.beginPath(); for (let u = 0; u <= 1.001; u += 0.1) { const rr = u * r, aa = u * 3.2; const x = Math.cos(aa) * rr, y = Math.sin(aa) * rr; u ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
        }
        g.restore();
      }
      // 닫히는 조리개 날개
      if (o < 0.98) {
        const close = 1 - o;
        g.save(); g.beginPath(); g.arc(0, 0, r + 0.5, 0, Math.PI * 2); g.clip();
        for (let k = 0; k < 6; k++) {
          g.save(); g.rotate((Math.PI / 3) * k + close * 0.6);
          g.fillStyle = k % 2 ? '#4a5078' : '#3c4166';
          g.beginPath(); g.moveTo(r * 1.2, 0); g.arc(0, 0, r * 1.2, 0, Math.PI / 3 + 0.05); g.lineTo(r * (1.25 - close * 1.25), r * 0.1); g.closePath(); g.fill();
          g.restore();
        }
        g.restore();
      }
      // 튀는 불꽃 (열려 있을 때)
      if (o > 0.5) for (let k = 0; k < 6; k++) {
        const a = t * (warp ? 2.4 : -2.4) + k * 1.05, rr = r + 6 + ((t * 30 + k * 7) % 10);
        g.fillStyle = rgba(c1, 0.8 - ((t * 30 + k * 7) % 10) / 12);
        g.beginPath(); g.arc(Math.cos(a) * rr, Math.sin(a) * rr, 1.6, 0, Math.PI * 2); g.fill();
      }
      g.restore();
      g.font = '700 13px Fredoka, sans-serif'; g.textAlign = 'center';
      g.fillStyle = b.open ? rgba(c1, 1) : 'rgba(150,155,190,.9)';
      g.fillText(`${warp ? 'WARP ⇣' : 'BACK ⇡'}${b.open ? '' : ' · CLOSED'}`, b.position.x, b.position.y + r + 24);
    }
    function drawMini(lead) {
      const mw = mini.width, mh = mini.height;
      mg.setTransform(1, 0, 0, 1, 0, 0);
      mg.clearRect(0, 0, mw, mh);
      mg.fillStyle = 'rgba(255,255,255,.08)'; mg.fillRect(mw * 0.35, 0, mw * 0.3, mh);
      mg.fillStyle = '#ffd166'; mg.fillRect(0, mh - 3 * dpr, mw, 3 * dpr);
      balls.forEach((b) => {
        const py = Math.min(1, Math.max(0, b.position.y / GOAL)) * (mh - 6 * dpr) + 3 * dpr;
        mg.fillStyle = colors[b.owner.id]; mg.beginPath(); mg.arc(mw * 0.5 + ((b.position.x / W) - 0.5) * mw * 0.7, py, (b === lead ? 4 : 2.2) * dpr, 0, Math.PI * 2); mg.fill();
      });
    }
    function drawRank() {
      // 사람마다 가장 앞선 구슬 기준 순위
      const best = {};
      balls.forEach((b) => { const v = b.done ? GOAL + 10000 - b.order : b.position.y; if (!(b.owner.id in best) || v > best[b.owner.id]) best[b.owner.id] = v; });
      const top = list.slice().sort((a, b) => best[b.id] - best[a.id]).slice(0, 5);
      rankEl.innerHTML = top.map((p, k) => `<li><i>${k + 1}</i><b style="background:${colors[p.id]}"></b>${esc(p.name)}<em>${best[p.id] > GOAL ? '🏁' : `${Math.round((best[p.id] / GOAL) * 100)}%`}</em></li>`).join('');
    }
    function finish(ball) {
      winner = { ball, at: performance.now() };
      const p = ball.owner;
      finalEl.hidden = true;
      const el = ov.querySelector('.lk-win');
      el.innerHTML = `<small>🏆 ${esc(T('당첨'))}</small><b style="color:${colors[p.id]}">${esc(p.name)}</b>`;
      el.hidden = false;
      ov.querySelector('.lk-btns').hidden = false;
      drawRank();
      try { if (typeof FX !== 'undefined') { FX.fireworks(3); setTimeout(() => FX.confetti(3), 500); } } catch (e) { /* 무시 */ }
      SND.win();
      try { const a = new Audio('sounds/champion.ogg'); a.volume = 0.7; a.play().catch(() => {}); } catch (e) { /* 무시 */ }
      done(p);
    }
    const shut = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); Engine.clear(engine); SND.close(); ov.remove(); };
    ov.querySelector('.lk-close').addEventListener('click', shut);
    ov.querySelector('.lk-again').addEventListener('click', () => { shut(); if (opts.again) opts.again(); else run(people, done, opts); });
    raf = requestAnimationFrame(frame);
  }
  return { run };
})();
