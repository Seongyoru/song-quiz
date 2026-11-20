'use strict';
/* =========================================================
 * 방 만들기 · 버저
 *  출제자 : 큰 화면에서 방을 만들고 퀴즈를 낸다. 누가 먼저 버저를 눌렀는지 보고 정답 · 오답을 매긴다
 *  참가자 : 휴대폰으로 방 코드(또는 QR)로 들어와 버저를 누른다
 *  서버가 없는 정적 사이트라서 공개 MQTT 브로커(웹소켓)로 메시지만 주고받는다. 계정 · 저장 없음
 *   songquiz/v1/<코드>/host : 출제자 → 모두 (방 상태, retain)
 *   songquiz/v1/<코드>/in   : 참가자 → 출제자 (join · buzz)
 * ========================================================= */
const ROOM = (() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 무시 */ } },
  };
  const BROKERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];
  const MQTT_JS = 'https://unpkg.com/mqtt@5.10.1/dist/mqtt.min.js';
  const QR_JS = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
  const topic = (code, k) => `songquiz/v1/${code}/${k}`;
  const myId = (() => { let v = store.get('sq_pid', ''); if (!v) { v = Math.random().toString(36).slice(2, 10); store.set('sq_pid', v); } return v; })();
  const loaded = {};
  const loadScript = (src) => loaded[src] || (loaded[src] = new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }));
  const joinUrl = (code) => `${location.href.split('#')[0]}#/join/${code}`;
  const sfx = (n, v) => { try { const a = new Audio(`sounds/${n}.ogg`); a.volume = v || 0.6; a.play().catch(() => {}); } catch (e) { /* 무시 */ } };

  let client = null, role = null, code = '', S = null, connected = false;
  // 출제자 상태
  const blank = () => ({ open: false, locked: null, blocked: [], round: 0, players: {} });
  // 럭키드로우 구슬 : 들어오면 3개, 정답을 맞히면 출제자가 1개씩 더 준다
  const MARBLES = 3;
  const mOf = (p) => (p.marbles != null ? p.marbles : MARBLES);

  // will : 창을 닫거나 연결이 끊기면 브로커가 대신 보내 주는 메시지 (참가자의 '연결 끊김')
  async function connect(onMsg, subs, will) {
    await loadScript(MQTT_JS);
    for (const url of BROKERS) {
      try {
        const c = await new Promise((ok, no) => {
          const cl = window.mqtt.connect(url, { clientId: `sq_${myId}_${Math.random().toString(36).slice(2, 6)}`, clean: true, connectTimeout: 7000, reconnectPeriod: 2000, keepalive: 20, ...(will ? { will } : {}) });
          const t = setTimeout(() => { cl.end(true); no(new Error('timeout')); }, 8000);
          cl.once('connect', () => { clearTimeout(t); ok(cl); });
          cl.once('error', () => { clearTimeout(t); cl.end(true); no(new Error('error')); });
        });
        c.on('message', (tp, buf) => { let m = null; try { m = JSON.parse(buf.toString()); } catch (e) { return; } if (m) onMsg(tp, m); });
        c.on('connect', () => { connected = true; subs.forEach((s) => c.subscribe(s, { qos: 1 })); render(); if (role === 'player') sendJoin(); });
        c.on('offline', () => { connected = false; render(); });
        c.on('close', () => { connected = false; render(); });
        subs.forEach((s) => c.subscribe(s, { qos: 1 }));
        connected = true;
        return c;
      } catch (e) { /* 다음 브로커 */ }
    }
    throw new Error('no broker');
  }

  /* ---------- 출제자 ---------- */
  const newCode = () => Array.from({ length: 4 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]).join('');
  function pub() {
    if (!client || role !== 'host') return;
    const players = Object.entries(S.players).map(([id, p]) => ({ id, name: p.name, score: p.score, marbles: mOf(p) }));
    client.publish(topic(code, 'host'), JSON.stringify({ t: 'state', open: S.open, locked: S.locked, blocked: S.blocked, round: S.round, players, drawing: !!S.drawing, draw: S.draw || null }), { qos: 1, retain: true });
    store.set('sq_room_host', { code, S });
    render();
  }
  function onHostMsg(tp, m) {
    if (tp !== topic(code, 'in')) return;
    if (m.t === 'join' && m.id) {
      const name = String(m.name || '').slice(0, 16) || '?';
      const isNew = !S.players[m.id];
      const prev = S.players[m.id];
      S.players[m.id] = { name, score: prev ? prev.score : 0, marbles: prev && prev.marbles != null ? prev.marbles : MARBLES };
      pub();
      if (isNew) toastBig(`👋 ${name}`, 1200);
    } else if (m.t === 'leave' && m.id && S.players[m.id]) {
      // 나가기 = 목록에서 뺌, 연결 끊김(창 닫음 · 인터넷) = 회색으로 남겨 두고 다시 들어오면 그대로
      if (m.soft) S.players[m.id].off = true; else delete S.players[m.id];
      if (S.locked && S.locked.id === m.id) { S.locked = null; hideBig(); }
      pub();
    } else if (m.t === 'buzz' && m.id && S.players[m.id]) {
      if (!S.open || S.locked || S.blocked.includes(m.id) || m.round !== S.round) return;
      S.locked = { id: m.id, name: S.players[m.id].name };
      pub();
      sfx('pick', 0.8);
      toastBig(`🔔 ${S.players[m.id].name}`, 0);
      if (window.SQ) window.SQ.stop();
    }
  }
  async function host(resume) {
    const saved = resume ? store.get('sq_room_host', null) : null;
    leave(true);
    role = 'host';
    code = saved ? saved.code : newCode();
    S = saved ? saved.S : blank();
    S.drawing = false; // 새로 고침으로 끊긴 럭키드로우가 '진행 중' 으로 남지 않게
    render();
    try { client = await connect(onHostMsg, [topic(code, 'in')]); } catch (e) { role = null; render(); alert(T('방 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요')); return; }
    pub();
    openDlg();
  }
  function judge(ok) {
    if (role !== 'host' || !S.locked) return;
    const p = S.players[S.locked.id];
    if (ok) {
      if (p) { p.score += 1; p.marbles = mOf(p) + 1; }
      S.locked = null; S.open = false;
      hideBig();
      pub();
      if (window.SQ) window.SQ.right();
    } else {
      S.blocked.push(S.locked.id);
      S.locked = null;
      sfx('wrong', 0.6);
      hideBig();
      pub();
    }
  }
  function lucky() {
    if (role !== 'host' || S.drawing) return;
    const people = Object.entries(S.players).map(([id, p]) => ({ id, name: p.name, count: mOf(p) })).filter((p) => p.count > 0);
    if (!people.length) { alert(T('구슬을 가진 참가자가 없어요')); return; }
    if (typeof LUCKY === 'undefined') return;
    S.drawing = true; S.open = false; S.locked = null; hideBig(); pub();
    closeDlg();
    if (window.SQ) window.SQ.stop();
    LUCKY.run(people, (w) => { S.drawing = false; S.draw = { id: w.id, name: w.name, n: (S.draw ? S.draw.n : 0) + 1 }; pub(); })
      .catch(() => { S.drawing = false; pub(); alert(T('럭키드로우를 불러오지 못했어요. 인터넷 연결을 확인해 주세요')); });
  }
  function newRound() { if (role !== 'host') return; S.round += 1; S.open = true; S.locked = null; S.blocked = []; hideBig(); pub(); }
  function closeRound() { if (role !== 'host' || (!S.open && !S.locked)) return; S.open = false; S.locked = null; hideBig(); pub(); }

  /* ---------- 참가자 ---------- */
  let P = null; // 받은 방 상태
  let myName = store.get('sq_pname', '');
  let pressedRound = -1;
  function sendJoin() { if (client && role === 'player') client.publish(topic(code, 'in'), JSON.stringify({ t: 'join', id: myId, name: myName }), { qos: 1 }); }
  async function join(c, name) {
    leave(true);
    role = 'player'; code = c.toUpperCase(); myName = name; store.set('sq_pname', name); P = null; pressedRound = -1;
    render();
    try {
      client = await connect((tp, m) => {
        if (tp === topic(code, 'host')) {
          const was = P;
          P = m && m.t === 'state' ? m : null;
          if (P && P.draw && P.draw.id === myId && !P.drawing && !(was && was.draw && was.draw.n === P.draw.n)) { try { navigator.vibrate && navigator.vibrate([100, 60, 100, 60, 300]); } catch (e) { /* 무시 */ } sfx('champion', 0.6); }
          if (P && P.locked && P.locked.id === myId && !(was && was.locked && was.locked.id === myId)) { try { navigator.vibrate && navigator.vibrate([80, 40, 160]); } catch (e) { /* 무시 */ } sfx('correct', 0.5); }
          render();
        }
      }, [topic(code, 'host')], { topic: topic(code, 'in'), payload: JSON.stringify({ t: 'leave', id: myId, soft: true }), qos: 1, retain: false });
    } catch (e) { role = null; render(); alert(T('방 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요')); return; }
    sendJoin();
    render();
  }
  function buzz() {
    if (role !== 'player' || !P || !P.open || P.locked || P.blocked.includes(myId) || pressedRound === P.round) return;
    pressedRound = P.round;
    client.publish(topic(code, 'in'), JSON.stringify({ t: 'buzz', id: myId, round: P.round }), { qos: 1 });
    try { navigator.vibrate && navigator.vibrate(40); } catch (e) { /* 무시 */ }
    render();
  }

  function leave(quiet) {
    if (client) {
      // 참가자가 나가면 출제자 목록에서 바로 빠지게 알리고, 보낸 뒤에 연결을 끊는다
      if (role === 'player' && !quiet) { const c = client; c.publish(topic(code, 'in'), JSON.stringify({ t: 'leave', id: myId }), { qos: 1 }, () => { try { c.end(); } catch (e) { /* 무시 */ } }); client = null; }
      if (role === 'host' && !quiet) { client.publish(topic(code, 'host'), '', { qos: 1, retain: true }); store.set('sq_room_host', null); }
      if (client) { try { client.end(true); } catch (e) { /* 무시 */ } }
    }
    client = null; connected = false;
    if (!quiet) { role = null; code = ''; S = null; P = null; hideBig(); render(); }
  }

  /* ---------- 화면 ---------- */
  let bigT = 0;
  function toastBig(text, ms) {
    const el = $('#roomBig'); el.textContent = text; el.hidden = false;
    clearTimeout(bigT); if (ms) bigT = setTimeout(() => { el.hidden = true; }, ms);
  }
  function hideBig() { clearTimeout(bigT); $('#roomBig').hidden = true; }
  function openDlg() { $('#roomDlg').hidden = false; render(); }
  function closeDlg() { $('#roomDlg').hidden = true; }

  async function drawQr() {
    const box = $('#roomQr');
    if (!box || box.dataset.code === code) return;
    box.dataset.code = code;
    try {
      await loadScript(QR_JS);
      const q = window.qrcode(0, 'M'); q.addData(joinUrl(code)); q.make();
      box.innerHTML = q.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
    } catch (e) { box.textContent = ''; }
  }
  const rank = (list) => list.slice().sort((a, b) => b.score - a.score);
  function render() {
    const dlg = $('#roomDlgBody'), bar = $('#roomBar'), play = $('#roomPlay');
    if (!dlg) return;
    $('#roomBtn').classList.toggle('on', !!role);
    // 출제자 막대
    bar.hidden = role !== 'host';
    if (role === 'host' && S) {
      const n = Object.values(S.players).filter((p) => !p.off).length;
      const status = !connected ? T('연결 중...') : S.locked ? `🔔 ${esc(S.locked.name)}` : S.open ? T('버저 열림') : T('버저 닫힘');
      bar.innerHTML = `<button type="button" class="rb-code" data-act="dlg">${esc(T('방'))} <b>${esc(code)}</b> · ${esc(T('{n}명', { n }))}</button>
        <span class="rb-status ${S.locked ? 'hot' : S.open ? 'open' : ''}">${S.locked ? status : esc(status)}</span>
        ${S.locked ? `<button type="button" class="btn main" data-act="ok">${esc(T('정답 +1'))}</button><button type="button" class="btn" data-act="no">${esc(T('오답'))}</button>`
          : `<button type="button" class="btn" data-act="round">${esc(T(S.open ? '버저 초기화' : '버저 열기'))}</button>`}`;
    }
    // 참가자 버저 화면
    play.hidden = role !== 'player';
    if (role === 'player') {
      const me = P && P.players.find((x) => x.id === myId);
      let cls = 'wait', msg = T('출제자를 기다리는 중...');
      if (!connected) msg = T('연결 중...');
      else if (P && P.locked && P.locked.id === myId) { cls = 'mine'; msg = T('내 차례! 정답을 말해 주세요'); }
      else if (P && P.locked) { cls = 'other'; msg = T('{name} 님이 먼저 눌렀어요', { name: P.locked.name }); }
      else if (P && P.blocked.includes(myId)) { cls = 'used'; msg = T('이번 문제는 기회를 썼어요'); }
      else if (P && P.open && pressedRound === P.round) { cls = 'sent'; msg = T('눌렀어요!'); }
      else if (P && P.open) { cls = 'ready'; msg = T('들리면 누르세요!'); }
      else if (P) msg = T('다음 문제를 기다리는 중...');
      $('#rpName').textContent = `${myName} · ${T('방')} ${code}`;
      $('#rpScore').textContent = `${T('{n}점', { n: me ? me.score : 0 })} · 🔮 ${me ? me.marbles : MARBLES}`;
      const d = P && P.draw;
      $('#rpDraw').hidden = !(P && (P.drawing || d));
      $('#rpDraw').className = `rp-draw ${d && d.id === myId && !P.drawing ? 'me' : ''}`;
      $('#rpDraw').textContent = P && P.drawing ? T('🎰 럭키드로우 진행 중...') : d ? (d.id === myId ? T('🎉 럭키드로우 당첨! 축하해요!') : T('🎉 럭키드로우 당첨 : {name}', { name: d.name })) : '';
      $('#rpBuzz').className = `rp-buzz ${cls}`;
      $('#rpBuzz').disabled = cls !== 'ready';
      $('#rpMsg').textContent = msg;
      $('#rpRank').innerHTML = P ? rank(P.players).slice(0, 5).map((x, k) => `<li class="${x.id === myId ? 'me' : ''}"><i>${k + 1}</i>${esc(x.name)}<b>${x.score}</b></li>`).join('') : '';
    }
    // 방 창
    if (role === 'host' && S) {
      const list = rank(Object.entries(S.players).map(([id, p]) => ({ id, ...p })));
      dlg.innerHTML = `<div class="room-code">${esc(code)}</div>
        <div class="room-join"><div class="room-qr" id="roomQr" data-code=""></div>
          <div><p>${esc(T('휴대폰으로 QR을 찍거나 주소에 들어가서 방 코드를 넣어 주세요'))}</p>
          <button type="button" class="chip" data-act="copy">${esc(T('참가 링크 복사'))}</button></div></div>
        <ol class="room-list">${list.map((p) => `<li class="${p.off ? 'off' : ''}"><span>${esc(p.name)}${p.off ? ` <small>${esc(T('연결 끊김'))}</small>` : ''}</span>
          <em>${esc(T('점수'))}</em><button type="button" class="chip" data-act="minus" data-id="${esc(p.id)}">−</button><b>${p.score}</b><button type="button" class="chip" data-act="plus" data-id="${esc(p.id)}">+</button>
          <em>🔮</em><button type="button" class="chip" data-act="mminus" data-id="${esc(p.id)}">−</button><b>${mOf(p)}</b><button type="button" class="chip" data-act="mplus" data-id="${esc(p.id)}">+</button></li>`).join('') || `<li class="empty">${esc(T('아직 들어온 사람이 없어요'))}</li>`}</ol>
        ${S.draw ? `<p class="room-draw">${esc(T('🎉 지난 럭키드로우 당첨 : {name}', { name: S.draw.name }))}</p>` : ''}
        <p class="room-note">${esc(T('새 문제를 내면 버저가 자동으로 열려요. 먼저 누른 사람이 화면에 크게 뜨면 정답 · 오답을 눌러 주세요. 오답이면 그 사람만 빼고 다시 누를 수 있어요.'))}<br>${esc(T('들어오면 구슬 3개를 받고, 정답을 맞히면 구슬이 1개씩 늘어요. 럭키드로우는 모든 구슬을 핀볼판에 떨어뜨려 맨 먼저 출구를 통과한 구슬의 주인이 당첨이에요.'))}</p>
        <div class="room-btns"><button type="button" class="btn main" data-act="lucky">${esc(T('🎰 럭키드로우'))}</button><button type="button" class="btn" data-act="mreset">${esc(T('구슬 모두 3개로'))}</button><button type="button" class="btn" data-act="reset">${esc(T('점수 초기화'))}</button><button type="button" class="btn" data-act="close">${esc(T('방 닫기'))}</button></div>`;
      drawQr();
    } else if (role === 'player') {
      dlg.innerHTML = `<p>${esc(T('{code} 방에 들어와 있어요', { code }))}</p><div class="room-btns"><button type="button" class="btn" data-act="leave">${esc(T('방 나가기'))}</button></div>`;
    } else {
      const pre = (location.hash.match(/^#\/join\/(\w+)/) || [])[1] || '';
      dlg.innerHTML = `<div class="room-pick">
          <div class="room-card"><h4>${esc(T('출제자'))}</h4><p>${esc(T('이 화면에서 퀴즈를 내고, 참가자들은 휴대폰으로 버저를 눌러요'))}</p>
            <button type="button" class="btn main" data-act="host">${esc(T('방 만들기'))}</button></div>
          <div class="room-card"><h4>${esc(T('참가자'))}</h4>
            <input id="roomCodeIn" maxlength="4" autocomplete="off" placeholder="${esc(T('방 코드'))}" value="${esc(pre)}">
            <input id="roomNameIn" maxlength="16" autocomplete="off" placeholder="${esc(T('닉네임'))}" value="${esc(myName)}">
            <button type="button" class="btn main" data-act="join">${esc(T('참가하기'))}</button></div>
        </div>
        <p class="room-note">${esc(T('방 메시지는 공개 MQTT 서버를 거쳐요. 닉네임 말고는 아무것도 보내지 않아요.'))}</p>`;
    }
  }

  function onAct(e) {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const a = b.dataset.act;
    if (a === 'dlg') openDlg();
    else if (a === 'ok') judge(true);
    else if (a === 'no') judge(false);
    else if (a === 'round') newRound();
    else if (a === 'host') host(false);
    else if (a === 'join') {
      const c = ($('#roomCodeIn').value || '').trim().toUpperCase(), n = ($('#roomNameIn').value || '').trim();
      if (c.length !== 4) { $('#roomCodeIn').focus(); return; }
      if (!n) { $('#roomNameIn').focus(); return; }
      closeDlg(); join(c, n);
    } else if (a === 'copy') { navigator.clipboard.writeText(joinUrl(code)).then(() => toastBig(T('복사했어요'), 900)).catch(() => window.prompt('', joinUrl(code))); }
    else if (a === 'plus' || a === 'minus') { const p = S.players[b.dataset.id]; if (p) { p.score += a === 'plus' ? 1 : -1; pub(); } }
    else if (a === 'reset') { Object.values(S.players).forEach((p) => { p.score = 0; }); pub(); }
    else if (a === 'mplus' || a === 'mminus') { const p = S.players[b.dataset.id]; if (p) { p.marbles = Math.max(0, mOf(p) + (a === 'mplus' ? 1 : -1)); pub(); } }
    else if (a === 'mreset') { Object.values(S.players).forEach((p) => { p.marbles = MARBLES; }); pub(); }
    else if (a === 'lucky') lucky();
    else if (a === 'close') { if (confirm(T('방을 닫을까요? 참가자 연결이 모두 끊겨요'))) { leave(false); closeDlg(); } }
    else if (a === 'leave') { leave(false); closeDlg(); if (/^#\/join\//.test(location.hash)) location.hash = '#/'; }
  }

  function init() {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="room-dlg" id="roomDlg" hidden><div class="room-box"><button type="button" class="room-x" id="roomX" aria-label="닫기">✕</button><h3>${esc(T('방 만들기 · 버저'))}</h3><div id="roomDlgBody"></div></div></div>
      <div class="room-bar" id="roomBar" hidden></div>
      <div class="room-big" id="roomBig" hidden></div>
      <div class="room-play" id="roomPlay" hidden>
        <div class="rp-top"><span id="rpName"></span><b id="rpScore"></b></div>
        <button type="button" class="rp-buzz wait" id="rpBuzz">BUZZ</button>
        <p class="rp-msg" id="rpMsg"></p>
        <p class="rp-draw" id="rpDraw" hidden></p>
        <ol class="rp-rank" id="rpRank"></ol>
        <button type="button" class="chip rp-leave" data-act="leave">${esc(T('방 나가기'))}</button>
      </div>`);
    $('#roomBtn').addEventListener('click', openDlg);
    $('#roomX').addEventListener('click', closeDlg);
    $('#roomDlg').addEventListener('click', (e) => { if (e.target.id === 'roomDlg') closeDlg(); else onAct(e); });
    $('#roomBar').addEventListener('click', onAct);
    $('#roomPlay').addEventListener('click', onAct);
    $('#rpBuzz').addEventListener('pointerdown', (e) => { e.preventDefault(); buzz(); });
    $('#roomBig').addEventListener('click', hideBig);
    document.addEventListener('keydown', (e) => {
      if (role === 'player' && e.code === 'Space') { e.preventDefault(); buzz(); return; }
      if (role === 'host' && S && S.locked && !(e.target.closest && e.target.closest('input, textarea'))) {
        if (e.key === 'o' || e.key === 'O') judge(true); else if (e.key === 'x' || e.key === 'X') judge(false);
      }
    });
    const checkJoin = () => { const m = location.hash.match(/^#\/join\/(\w+)/); if (m && role !== 'player') openDlg(); };
    window.addEventListener('hashchange', checkJoin);
    checkJoin();
    // 새로 고침해도 출제자 방은 그대로 (같은 코드 · 점수)
    if (!/^#\/join\//.test(location.hash) && store.get('sq_room_host', null)) host(true).then(closeDlg);
  }
  return { init, newRound, closeRound, get role() { return role; } };
})();
window.ROOM = ROOM;
ROOM.init();
