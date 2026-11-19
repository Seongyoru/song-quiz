'use strict';
/* =========================================================
 * 축하 효과 : 화면 전체 캔버스에 입자를 뿌린다 (클릭은 통과)
 *  FX.celebrate(level)  1 ~ 3 : 꽃가루 · 이모지 비 · 불꽃놀이 · 별 터짐 중 무작위
 *  FX.sparkle(el)       : 요소 위치에서 작게 반짝
 *  FX.confetti / emojiRain / fireworks / starBurst 를 따로 불러도 된다
 * 움직임 줄이기 설정(prefers-reduced-motion)이면 입자 수를 크게 줄인다
 * ========================================================= */
const FX = (() => {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COLORS = ['#ff86c2', '#ff8f7a', '#ffd23f', '#6fd34f', '#6cc4ff', '#b896ff', '#ffffff'];
  let cv = null, ctx = null, parts = [], raf = 0, W = 0, H = 0, dpr = 1;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const scale = (n) => Math.max(1, Math.round(reduce ? n * 0.2 : n));

  function setup() {
    if (cv) return;
    cv = document.createElement('canvas');
    cv.className = 'fx-canvas';
    cv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cv);
    ctx = cv.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function add(p) { parts.push(p); if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } }
  let last = 0;
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    ctx.clearRect(0, 0, W, H);
    parts = parts.filter((p) => {
      p.life -= dt;
      if (p.life <= 0) return false;
      p.vy += p.g * dt; p.vx *= p.drag; p.vy *= p.drag;
      p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
      if (p.y > H + 60) return false;
      const a = Math.min(1, p.life / p.fade);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      if (p.kind === 'rect') { ctx.scale(1, Math.cos(p.rot * 3)); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); }
      else if (p.kind === 'dot') { ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(0, 0, p.s, 0, Math.PI * 2); ctx.fill(); }
      else if (p.kind === 'star') { ctx.fillStyle = p.c; star(p.s); }
      else if (p.kind === 'emoji') { ctx.font = `${p.s}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(p.e, 0, 0); }
      ctx.restore();
      if (p.trail && Math.random() < 0.35) add({ ...base(p.x, p.y), kind: 'dot', s: p.s * 0.5, c: p.c, life: 0.4, fade: 0.4, g: 60 });
      return true;
    });
    if (parts.length) raf = requestAnimationFrame(loop); else { raf = 0; ctx.clearRect(0, 0, W, H); }
  }
  function star(r) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r * 0.45 : r; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    ctx.closePath(); ctx.fill();
  }
  const base = (x, y) => ({ x, y, vx: 0, vy: 0, g: 0, drag: 1, rot: 0, vr: 0, life: 1, fade: 0.5, s: 8, c: '#fff' });

  /* 꽃가루 : 양쪽 아래에서 위로 쏘아 올림 */
  function confetti(level = 2) {
    setup();
    const n = scale(70 * level);
    for (let i = 0; i < n; i++) {
      const left = i % 2 === 0;
      add({ ...base(left ? rnd(-10, W * 0.15) : rnd(W * 0.85, W + 10), H + 10), kind: 'rect', c: pick(COLORS), s: rnd(8, 14),
        vx: (left ? 1 : -1) * rnd(120, 520), vy: -rnd(650, 1150), g: 900, drag: 0.985, rot: rnd(0, 6), vr: rnd(-12, 12), life: rnd(2.2, 3.4), fade: 0.8 });
    }
  }
  /* 이모지 비 : 위에서 천천히 */
  function emojiRain(level = 2, set = ['🍏', '🍏', '🎵', '🎶', '✨', '💚']) {
    setup();
    const n = scale(26 * level);
    for (let i = 0; i < n; i++) {
      add({ ...base(rnd(0, W), rnd(-H * 0.6, -20)), kind: 'emoji', e: pick(set), s: rnd(22, 44),
        vx: rnd(-40, 40), vy: rnd(140, 300), g: 60, drag: 0.999, rot: rnd(-0.4, 0.4), vr: rnd(-1.5, 1.5), life: rnd(3.5, 5), fade: 0.8 });
    }
  }
  /* 불꽃놀이 : 여러 곳에서 동그랗게 터짐 */
  function fireworks(level = 2) {
    setup();
    const shots = scale(3 + level * 2);
    for (let k = 0; k < shots; k++) {
      setTimeout(() => {
        const cx = rnd(W * 0.15, W * 0.85), cy = rnd(H * 0.15, H * 0.5), c = pick(COLORS.slice(0, 6));
        const n = scale(46);
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2, sp = rnd(180, 360);
          add({ ...base(cx, cy), kind: 'dot', c: Math.random() < 0.2 ? '#fff' : c, s: rnd(2, 3.5), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 220, drag: 0.975, life: rnd(1.1, 1.6), fade: 0.6, trail: true });
        }
      }, k * rnd(180, 320));
    }
  }
  /* 별 터짐 : 화면 가운데(또는 지정 위치)에서 사방으로 */
  function starBurst(level = 2, x, y) {
    setup();
    const cx = x != null ? x : W / 2, cy = y != null ? y : H * 0.4;
    const n = scale(36 * level);
    for (let i = 0; i < n; i++) {
      const a = rnd(0, Math.PI * 2), sp = rnd(200, 620);
      add({ ...base(cx, cy), kind: Math.random() < 0.6 ? 'star' : 'rect', c: pick(COLORS), s: rnd(6, 13), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 150, g: 700, drag: 0.982, rot: rnd(0, 6), vr: rnd(-8, 8), life: rnd(1.6, 2.4), fade: 0.7 });
    }
  }
  /* 요소 위치에서 작게 반짝 */
  function sparkle(el) {
    setup();
    const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : { left: W / 2, top: H / 2, width: 0, height: 0 };
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const n = scale(18);
    for (let i = 0; i < n; i++) {
      const a = rnd(0, Math.PI * 2), sp = rnd(120, 300);
      add({ ...base(cx, cy), kind: 'star', c: pick(COLORS.slice(0, 6)), s: rnd(4, 8), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 300, drag: 0.96, rot: rnd(0, 6), vr: rnd(-6, 6), life: rnd(0.6, 0.9), fade: 0.4 });
    }
  }
  /* 무작위 축하 : level 1 = 작게, 3 = 크게 (큰 건 두 가지를 섞는다) */
  let lastKind = -1;
  function celebrate(level = 2) {
    const kinds = [confetti, emojiRain, fireworks, starBurst];
    let i; do { i = Math.floor(Math.random() * kinds.length); } while (i === lastKind && kinds.length > 1);
    lastKind = i;
    kinds[i](level);
    if (level >= 3) setTimeout(() => kinds[(i + 1 + Math.floor(Math.random() * 3)) % kinds.length](2), 350);
  }
  return { celebrate, confetti, emojiRain, fireworks, starBurst, sparkle };
})();
