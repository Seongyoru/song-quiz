'use strict';
/* =========================================================
 * SONG QUIZ : 아티스트별 곡 퀴즈
 *  - 힌트 퀴즈 (스무고개) : 막연한 힌트부터 하나씩 열고, 답을 적어 확인하거나 정답을 공개한다. 정답 때 공식 영상 재생
 *  - Up & Down          : 다음 곡이 더 나중 / 먼저 (발매일), 더 많다 / 적다 (MV 조회수)
 *  - 월드컵              : 라이브 · 오케스트라 · MV 영상끼리 토너먼트 (8 ~ 128강)
 * 아티스트 추가 : js/artists/<id>.js (곡) · <id>-media.js (영상) 를 만들고 index.html 에 script 추가
 * ========================================================= */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- 작은 도구들 ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 저장 못 해도 진행 */ } },
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // 정답 비교용 : 대소문자 · 전각/반각 · 가타카나/히라가나 · 띄어쓰기 · 문장부호 무시
  const norm = (s) => String(s || '').normalize('NFKC').toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .replace(/[\s・·\-_.,!?'"’“”()（）☆★#：:、。~〜!]/g, '');
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function fmtDate(d) {
    const [y, m, dd] = d.split('-').map(Number);
    if (I18N.lang === 'ja') return `${y}年${m}月${dd}日`;
    if (I18N.lang === 'en') return `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${dd}, ${y}`;
    return `${y}년 ${m}월 ${dd}일`;
  }
  function fmtViews(n) {
    if (I18N.lang === 'en') return n >= 1e9 ? `${(n / 1e9).toFixed(2)}B views` : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M views` : `${Math.round(n / 1e3)}K views`;
    const [oku, man] = I18N.lang === 'ja' ? ['億', '万'] : ['억', '만'];
    const unit = I18N.lang === 'ja' ? '回' : ' 회';
    if (n >= 1e8) return `${(n / 1e8).toFixed(2).replace(/\.?0+$/, '')}${oku}${unit}`;
    return `${Math.round(n / 1e4).toLocaleString()}${man}${unit}`;
  }
  let toastT = 0;
  function toast(msg) {
    const el = $('#toast'); el.textContent = msg; el.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 1800);
  }
  async function share(text) {
    const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    if (mobile && navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
    try { await navigator.clipboard.writeText(text); toast(T('복사했어요')); } catch (e) { window.prompt('', text); }
  }
  const pageUrl = () => location.href.split('#')[0];
  const sub = (s) => (I18N.lang === 'ko' ? s.ko : I18N.lang === 'en' ? (s.en !== s.t ? s.en : '') : '');
  const eraOf = (A, s) => (A.eras ? (A.eras.find((e) => (!e.from || s.d >= e.from) && (!e.to || s.d <= e.to)) || {}).label : null);
  const ytEmbed = (id, auto, start) => `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0&playsinline=1${auto ? '&autoplay=1' : ''}${start > 0 ? `&start=${Math.floor(start)}` : ''}"
    allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  const thumb = (id) => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/mqdefault.jpg`;

  // 효과음 (Freesound CC0, sounds/ 폴더) : hint · correct · wrong · reveal · up-right · up-wrong · pick · champion
  const sfxOn = () => store.get('sq_sfx', true);
  const SFX = {};
  function sfx(name, vol = 0.55) {
    if (!sfxOn()) return;
    try {
      if (!SFX[name]) { SFX[name] = new Audio(`sounds/${name}.ogg`); SFX[name].preload = 'auto'; }
      const a = SFX[name].paused ? SFX[name] : SFX[name].cloneNode();
      a.volume = vol; a.currentTime = 0;
      a.play().catch(() => {});
    } catch (e) { /* 소리 못 내도 게임은 계속 */ }
  }

  /* ---------- 힌트 만들기 : 막연한 것 → 확실한 것 ---------- */
  const TIE_HINT = {
    anime: '애니메이션과 함께한 곡이에요 (주제가 등)',
    drama: '드라마와 함께한 곡이에요 (주제가 등)',
    movie: '영화와 함께한 곡이에요 (주제가 등)',
    cm: '광고(CM)에 쓰인 곡이에요',
    tv: '방송 프로그램과 함께한 곡이에요',
    game: '게임과 함께한 곡이에요',
    other: '이벤트 · 스포츠 등과 함께한 곡이에요',
  };
  const TYPE_HINT = {
    single: 'CD 싱글의 표제곡이에요',
    coupling: '싱글의 커플링곡이에요 (표제곡이 아니에요)',
    digital: '배포(디지털) 싱글로 먼저 나온 곡이에요',
    album: '정규 앨범에 처음 실린 곡이에요 (싱글이 아니에요)',
    ep: '미니 앨범에 처음 실린 곡이에요',
    best: '베스트 앨범의 신곡으로 나온 곡이에요',
  };
  const TYPE_SHORT = { single: 'CD 싱글', coupling: '커플링곡', digital: '배포 싱글', album: '앨범곡', ep: '미니 앨범곡', best: '베스트 앨범 신곡' };
  const KIND = { full: '정규 앨범', mini: '미니 앨범', best: '베스트 앨범' };
  function hintsOf(A, s) {
    const h = [];
    const era = eraOf(A, s);
    if (era) h.push(T('{era} 시기의 곡이에요', { era }));
    const latin = /[A-Za-z]/.test(s.t), jp = /[぀-ヿ㐀-鿿]/.test(s.t);
    h.push(T(latin && jp ? '제목에 일본어와 알파벳이 섞여 있어요' : latin ? '제목이 알파벳(영어 등)으로 되어 있어요' : '제목이 일본어(가나 · 한자)로 되어 있어요'));
    h.push(T('{y}년에 처음 나온 곡이에요', { y: s.d.slice(0, 4) }));
    h.push(T(TYPE_HINT[s.type]));
    if (s.tie) h.push(T(TIE_HINT[s.tie]));
    if (s.type === 'coupling') h.push(T('싱글 「{rel}」에 함께 실린 곡이에요', { rel: s.rel }));
    else if (s.album) h.push(T('{kind} 『{album}』에 실려 있어요', { kind: T(KIND[A.albums[s.album].kind]), album: s.album }));
    else h.push(T('정규 · 미니 앨범에는 실리지 않은 곡이에요'));
    h.push(T('제목은 띄어쓰기를 빼고 {n}글자예요', { n: [...s.t.replace(/\s/g, '')].length }));
    if (s.album && s.track) h.push(T('『{album}』의 {n}번 트랙이에요', { album: s.album, n: s.track }));
    if (s.tieName) h.push(T('타이업 작품은 『{name}』이에요', { name: s.tieName }));
    h.push(T('{date}에 나왔어요', { date: fmtDate(s.d) }));
    // 한국어 화면에서는 한글 표기의 첫 글자도 함께 (예 : 「ケ」, 한글로는 「케」)
    const c = [...s.t][0], k = s.ko ? [...s.ko.replace(/\s/g, '')][0] : '';
    h.push(I18N.lang === 'ko' && k && k !== c ? T('제목의 첫 글자는 「{c}」, 한글로는 「{k}」예요', { c, k }) : T('제목의 첫 글자는 「{c}」예요', { c }));
    return h;
  }
  const answers = (s) => [s.t, s.t.replace(/\s*[(（].*?[)）]\s*/g, ''), s.t.replace(/\s*feat\..*$/i, ''), s.ko, s.en, ...(s.alias || '').split('|')]
    .map(norm).filter(Boolean);

  /* ---------- 화면 전환 ---------- */
  let A = null; // 지금 아티스트
  let mode = 'quiz';
  const MODES = ['quiz', 'listen', 'trivia', 'updown', 'cup'];

  function route() {
    const [, id, m] = (location.hash || '#/').split('/');
    A = ARTISTS.find((x) => x.id === id) || null;
    $('#home').hidden = !!A;
    $('#game').hidden = !A;
    stopAllVideo();
    if (!A) { renderHome(); window.scrollTo(0, 0); return; }
    mode = MODES.includes(m) ? m : 'quiz';
    document.body.style.setProperty('--ac', A.color);
    document.body.style.setProperty('--ac2', A.color2 || A.color);
    $('#artistName').textContent = A.name;
    $$('#tabs a').forEach((a) => { a.href = `#/${A.id}/${a.dataset.mode}`; a.classList.toggle('on', a.dataset.mode === mode); });
    $('#quizView').hidden = mode !== 'quiz';
    $('#lsView').hidden = mode !== 'listen';
    $('#tvView').hidden = mode !== 'trivia';
    // 데이터가 없는 모드는 탭을 숨기고, 그 주소로 오면 힌트 퀴즈로
    const hasMode = { trivia: !!(A.trivia && A.trivia.length), listen: !!(A.clips && Object.keys(A.clips).length) };
    $$('#tabs a').forEach((a) => { if (a.dataset.mode in hasMode) a.hidden = !hasMode[a.dataset.mode]; });
    if (mode in hasMode && !hasMode[mode]) { location.hash = `#/${A.id}/quiz`; return; }
    syncQuizTab();
    $('#udView').hidden = mode !== 'updown';
    $('#cupView').hidden = mode !== 'cup';
    if (mode === 'listen') { if (!L || L.artist !== A.id) newListen(); else renderListen(); }
    else if (mode === 'trivia') startTrivia();
    else if (mode === 'updown') startUd();
    else if (mode === 'cup') cupSetup();
    else if (!Q || Q.artist !== A.id) newQuiz(); else renderQuiz();
  }
  // 팬 퀴즈 탭 이름은 가수마다 (미세스는 JAM'S 퀴즈)
  const quizName = () => (A && A.quizName ? A.quizName[I18N.lang] || A.quizName.ko : T('팬 퀴즈'));
  const syncQuizTab = () => { const t = $('#tabs a[data-mode=trivia]'); if (t && A) t.textContent = quizName(); };
  function stopAllVideo() {
    clearMedia();
    if (typeof lsStop === 'function') lsStop();
    $$('.cup-video').forEach((v) => { v.innerHTML = ''; });
  }

  function renderHome() {
    document.body.style.removeProperty('--ac');
    document.body.style.removeProperty('--ac2');
    $('#artistList').innerHTML = ARTISTS.map((x) => `
      <a class="artist" href="#/${x.id}/quiz" style="--ac:${x.color};--ac2:${x.color2 || x.color}">
        <span class="a-name">${esc(x.name)}</span>
        <span class="a-local">${esc(x.local && x.local[I18N.lang] !== x.name ? x.local[I18N.lang] : '')}</span>
        <span class="a-count">${esc(T('곡 {n}개', { n: x.songs.length }))}</span>
      </a>`).join('');
  }

  /* =========================================================
   * 힌트 퀴즈
   * ========================================================= */
  let Q = null; // { artist, no, song, shown, wrong:[], state:'play'|'right'|'reveal', used:Set, score, total }
  const range = () => $('#qRange').value;
  const poolOf = () => A.songs.map((s, i) => i).filter((i) => range() === 'all' || ['single', 'digital'].includes(A.songs[i].type));

  function newQuiz() {
    const keep = Q && Q.artist === A.id ? Q : null;
    const pool = poolOf();
    let used = keep ? keep.used : new Set();
    let fresh = pool.filter((i) => !used.has(i));
    if (!fresh.length) { used = new Set(); fresh = pool; }
    const song = fresh[Math.floor(Math.random() * fresh.length)];
    used.add(song);
    Q = {
      artist: A.id, no: keep ? keep.no + 1 : 1, song, shown: 1, wrong: [], state: 'play', used,
      score: keep ? keep.score : 0, total: keep ? keep.total : 0,
    };
    $('#answerInput').value = '';
    renderQuiz();
    $$('#hints li').forEach((li) => li.classList.add('new'));
    if (window.scrollY > $('#quizView').offsetTop) $('#quizView').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function renderQuiz() {
    const s = A.songs[Q.song];
    const hs = hintsOf(A, s);
    const done = Q.state !== 'play';
    const shown = done ? hs.length : Q.shown;
    $('#qNo').textContent = T('{n}번째 문제', { n: Q.no });
    $('#qScore').textContent = Q.total ? T('맞힌 문제 {a} / {b}', { a: Q.score, b: Q.total }) : '';
    $('#hints').innerHTML = hs.slice(0, shown).map((t, i) => `<li class="${done && i >= Q.shown ? 'extra' : ''}"><i>${i + 1}</i><span>${esc(t)}</span></li>`).join('');
    $('#hintBtn').textContent = T('힌트 하나 더 ({a}/{b})', { a: Q.shown, b: hs.length });
    $('#hintBtn').disabled = done || Q.shown >= hs.length;
    $('#qWrong').hidden = !Q.wrong.length;
    $('#qWrong').innerHTML = `<b>${esc(T('아니에요'))}</b> ${Q.wrong.map((w) => `<span>${esc(w)}</span>`).join('')}`;
    $('#qInput').hidden = done;
    $('#revealBtn').hidden = done;
    $('#qAnswer').hidden = !done;
    if (done) {
      $('#qAnswer').className = `q-answer ${Q.state}`;
      $('#qaTitle').textContent = Q.state === 'right' ? T('정답! 힌트 {n}개 만에 맞혔어요', { n: Q.shown }) : T('정답은 이 곡이에요');
      $('#qaSong').innerHTML = `<b>${esc(s.t)}</b><span>${esc([s.ko, s.en !== s.t ? s.en : ''].filter(Boolean).join(' · '))}</span>`;
      const meta = [
        [T('발매'), fmtDate(s.d)],
        [T('형태'), T(TYPE_SHORT[s.type])],
        s.type === 'coupling' ? [T('표제곡'), `「${s.rel}」`] : null,
        s.album ? [T('앨범'), `『${s.album}』${s.track ? ` #${s.track}` : ''}`] : null,
        s.tieName ? [T('타이업'), s.tieName] : null,
      ].filter(Boolean);
      $('#qaMeta').innerHTML = meta.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    } else clearMedia();
  }
  function moreHint() {
    if (Q.state !== 'play') return;
    const n = hintsOf(A, A.songs[Q.song]).length;
    if (Q.shown >= n) return;
    Q.shown += 1;
    sfx('hint', 0.45);
    renderQuiz();
    const last = $('#hints li:last-child');
    if (last) { last.classList.add('new'); last.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
  }
  function finish(state) {
    Q.state = state; Q.total += 1;
    if (state === 'right') Q.score += 1;
    sfx(state === 'right' ? 'correct' : 'reveal');
    // 힌트를 적게 쓰고 맞힐수록 크게 축하
    if (state === 'right') FX.celebrate(Q.shown <= 3 ? 3 : Q.shown <= 6 ? 2 : 1);
    renderQuiz();
    showMedia(A.songs[Q.song]);
    $('#quizView').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function check() {
    if (Q.state !== 'play') return;
    const v = $('#answerInput').value.trim();
    if (!v) { $('#answerInput').focus(); return; }
    if (answers(A.songs[Q.song]).includes(norm(v))) { finish('right'); return; }
    if (!Q.wrong.includes(v)) Q.wrong.push(v);
    sfx('wrong', 0.5);
    $('#answerInput').value = '';
    renderQuiz();
    const box = $('#qInput'); box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    $('#answerInput').focus();
  }
  function reveal() { if (Q.state === 'play') finish('reveal'); }

  /* 정답 공개 때 영상 : 공식 MV → 공식 영상 → 리릭 비디오 → 공식 음원 → 라이브 → (없으면) 앨범 커버 + 미리듣기 */
  const mediaOn = () => store.get('sq_media', true);
  let mediaToken = 0;
  function clearMedia() {
    mediaToken += 1;
    const box = $('#qaMedia');
    if (box.innerHTML) box.innerHTML = '';
    box.hidden = true;
  }
  const KIND_LABEL = { mv: '공식 MV', video: '공식 영상', lyric: '공식 리릭 비디오', audio: '공식 음원', live: '공식 라이브 영상' };
  async function showMedia(s) {
    clearMedia();
    if (!mediaOn()) return;
    const my = mediaToken;
    const box = $('#qaMedia');
    const m = A.media && A.media[s.t];
    if (m) {
      box.hidden = false;
      box.innerHTML = `<div class="m-tag">${esc(T(KIND_LABEL[m[1]]))}</div><div class="m-video">${ytEmbed(m[0], true)}</div>`;
      return;
    }
    try {
      const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(`${A.name} ${s.t}`)}&country=JP&entity=song&limit=15`);
      const j = await r.json();
      if (my !== mediaToken) return;
      const want = norm(s.t.replace(/\s*[(（].*?[)）]\s*/g, ''));
      const hit = (j.results || []).find((x) => /mrs\.? ?green ?apple/i.test(x.artistName) && norm(x.trackName).startsWith(want));
      if (!hit) return;
      box.hidden = false;
      box.innerHTML = `<div class="m-tag">${esc(T('앨범 커버 · 30초 미리듣기'))}</div>
        <div class="m-cover">
          <img src="${esc(hit.artworkUrl100.replace('100x100bb', '600x600bb'))}" alt="${esc(hit.collectionName)}">
          <div class="m-cover-r">
            <b>${esc(hit.collectionName)}</b>
            ${hit.previewUrl ? `<audio controls autoplay src="${esc(hit.previewUrl)}"></audio>` : ''}
            <a href="${esc(hit.trackViewUrl)}" target="_blank" rel="noopener">${esc(T('Apple Music 에서 듣기'))} ↗</a>
          </div>
        </div>`;
    } catch (e) { /* 못 불러오면 정답만 보여 준다 */ }
  }

  /* =========================================================
   * 듣기 퀴즈 : 인트로 · 배속(하이라이트) · 아웃트로
   *  유튜브 플레이어를 가리개로 덮고 정해진 구간만 들려준다. 3초 → 6초 → … 15초까지 늘릴 수 있다
   * ========================================================= */
  const LS_STEP = 3, LS_MAX = 15;
  let L = null; // { artist, kind, no, song, secs, state, wrong, used:Set, score, total }
  let yt = null, ytReady = null, lsTimer = 0, lsWatch = 0;
  const lsKind = () => store.get('sq_lskind', 'intro');
  const lsRate = () => Number($('#lsRate').value) || 2;
  function loadYT() {
    if (ytReady) return ytReady;
    ytReady = new Promise((ok) => {
      const make = () => {
        yt = new YT.Player('lsYt', {
          width: '100%', height: '100%',
          playerVars: { controls: 0, disablekb: 1, rel: 0, playsinline: 1, modestbranding: 1, iv_load_policy: 3, fs: 0 },
          events: { onReady: () => ok(yt) },
        });
      };
      if (window.YT && window.YT.Player) { make(); return; }
      window.onYouTubeIframeAPIReady = make;
      const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
    });
    return ytReady;
  }
  function lsStop() {
    clearInterval(lsTimer); clearTimeout(lsWatch);
    $('#lsEq').classList.remove('on');
    if (yt && yt.pauseVideo) try { yt.pauseVideo(); } catch (e) { /* 무시 */ }
  }
  const lsPool = () => A.songs.map((s, i) => i).filter((i) => A.clips && A.clips[A.songs[i].t]);
  function newListen() {
    lsStop();
    const keep = L && L.artist === A.id ? L : null;
    const pool = lsPool();
    let used = keep ? keep.used : new Set();
    let fresh = pool.filter((i) => !used.has(i));
    if (!fresh.length) { used = new Set(); fresh = pool; }
    const song = fresh[Math.floor(Math.random() * fresh.length)];
    used.add(song);
    L = { artist: A.id, kind: lsKind(), no: keep ? keep.no + 1 : 1, song, secs: LS_STEP, state: 'play', wrong: [], used, score: keep ? keep.score : 0, total: keep ? keep.total : 0, played: false };
    $('#lsInput').value = '';
    renderListen();
    loadYT().then((p) => { if (L && L.song === song) p.cueVideoById(A.clips[A.songs[song].t][0]); });
  }
  function renderListen() {
    const done = L.state !== 'play';
    $$('#lsKind [data-kind]').forEach((b) => b.classList.toggle('on', b.dataset.kind === L.kind));
    $('#lsRate').hidden = L.kind !== 'hl';
    $('#lsNo').textContent = T('{n}번째 문제', { n: L.no });
    $('#lsScore').textContent = L.total ? T('맞힌 문제 {a} / {b}', { a: L.score, b: L.total }) : '';
    $('#lsDesc').textContent = T({ intro: '곡의 처음 부분을 들려줘요', hl: '하이라이트를 빠르게 들려줘요', outro: '곡의 마지막 부분을 들려줘요' }[L.kind]);
    $('#lsPlay').textContent = T('▶ {n}초 듣기', { n: L.secs });
    $('#lsMore').textContent = T('+{n}초 더 듣기', { n: LS_STEP });
    $('#lsMore').disabled = done || L.secs >= LS_MAX;
    $('#lsSec').textContent = done ? '' : `${L.secs}${T('초')}`;
    $('#lsCover').hidden = done;
    $('#lsCtrl').hidden = done;
    $('#lsInputBox').hidden = done;
    $('#lsReveal').hidden = done;
    $('#lsWrong').hidden = !L.wrong.length;
    $('#lsWrong').innerHTML = `<b>${esc(T('아니에요'))}</b> ${L.wrong.map((w) => `<span>${esc(w)}</span>`).join('')}`;
    $('#lsAnswer').hidden = !done;
    if (done) {
      const s = A.songs[L.song];
      $('#lsAnswer').className = `q-answer ${L.state}`;
      $('#lsaTitle').textContent = L.state === 'right' ? T('정답! {n}초 만에 맞혔어요', { n: L.secs }) : T('정답은 이 곡이에요');
      $('#lsaSong').innerHTML = `<b>${esc(s.t)}</b><span>${esc([s.ko, s.en !== s.t ? s.en : ''].filter(Boolean).join(' · '))}</span>`;
    }
  }
  // 지금 문제의 들려줄 구간 [시작, 끝] (영상 시간, 초)
  function lsSegment() {
    const [, o, hl, e] = A.clips[A.songs[L.song].t];
    const dur = yt.getDuration() || 0;
    if (L.kind === 'intro') return [o, o + L.secs];
    if (L.kind === 'hl') { const st = hl != null ? hl : dur * 0.3; return [st, st + L.secs * lsRate()]; }
    const end = e != null ? e : Math.max(0, dur - 1.2);
    return [Math.max(0, end - L.secs), end];
  }
  async function lsPlay() {
    if (!L || L.state !== 'play') return;
    const p = await loadYT();
    lsStop();
    $('#lsMsg').textContent = T('불러오는 중...');
    p.mute();
    p.playVideo(); // 길이를 알기 위해 먼저 한 번 재생
    const t0 = performance.now();
    const wantId = A.clips[A.songs[L.song].t][0];
    let seg = null, seekAt = 0, armedAt = 0;
    lsTimer = setInterval(() => {
      const st = p.getPlayerState();
      const now = performance.now();
      const cur = p.getCurrentTime();
      const isOurs = ((p.getVideoData && p.getVideoData()) || {}).video_id === wantId;
      if (!seg) {
        // 광고 · 버퍼링 중이면 기다린다. 우리 영상이 재생되고 길이를 알게 되면 구간으로 이동
        if (st === 1 && isOurs && p.getDuration() > 0) {
          seg = lsSegment();
          p.setPlaybackRate(L.kind === 'hl' ? lsRate() : 1);
          p.seekTo(seg[0], true);
          seekAt = now;
        } else if (now - t0 > 3500) {
          $('#lsMsg').textContent = T('광고가 나오는 중일 수 있어요. 가리개를 열고 건너뛰기를 눌러 주세요');
        }
        return;
      }
      if (!armedAt) {
        // 이동이 끝나 구간 시작점에서 재생되는 걸 확인한 뒤에 소리를 켜고 시간을 잰다
        if (st === 1 && Math.abs(cur - seg[0]) < 1.2) {
          armedAt = now;
          p.unMute();
          $('#lsMsg').textContent = '';
          $('#lsEq').classList.add('on');
          L.played = true;
        } else if (now - seekAt > 2500) { p.seekTo(seg[0], true); seekAt = now; }
        return;
      }
      const limit = ((seg[1] - seg[0]) / (L.kind === 'hl' ? lsRate() : 1)) * 1000 + 1500;
      if (cur >= seg[1] || st === 0 || now - armedAt > limit) { lsStop(); $('#lsMsg').textContent = ''; }
    }, 60);
  }
  function lsMore() {
    if (!L || L.state !== 'play' || L.secs >= LS_MAX) return;
    L.secs += LS_STEP;
    sfx('hint', 0.4);
    renderListen();
    lsPlay();
  }
  function lsFinish(state) {
    L.state = state; L.total += 1;
    if (state === 'right') { L.score += 1; FX.celebrate(L.secs <= 3 ? 3 : L.secs <= 6 ? 2 : 1); }
    sfx(state === 'right' ? 'correct' : 'reveal');
    lsStop();
    renderListen();
    // 가리개를 열고 하이라이트부터 보통 속도로 들려준다
    const [, o, hl] = A.clips[A.songs[L.song].t];
    if (yt) { yt.setPlaybackRate(1); yt.unMute(); yt.seekTo(hl != null ? hl : o, true); yt.playVideo(); }
    $('#lsView').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function lsCheck() {
    if (!L || L.state !== 'play') return;
    const v = $('#lsInput').value.trim();
    if (!v) { $('#lsInput').focus(); return; }
    if (answers(A.songs[L.song]).includes(norm(v))) { lsFinish('right'); return; }
    if (!L.wrong.includes(v)) L.wrong.push(v);
    sfx('wrong', 0.5);
    $('#lsInput').value = '';
    renderListen();
    const box = $('#lsInputBox'); box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    $('#lsInput').focus();
  }

  /* =========================================================
   * JAM'S 퀴즈 (멤버 · 밴드) : 4지선다, 한 판 10문제
   * ========================================================= */
  const TV_N = 10;
  let V = null; // { list:[idx], i, score, opts:[{t, ok}], picked }
  const loc = (x) => (typeof x === 'string' ? x : x[I18N.lang] || x.ko);
  // 한국어 화면에서는 한자 · 가나 옆에 한글 읽기를 작게 붙인다
  const NON_LATIN = /[぀-ヿ㐀-鿿]/;
  function readingOf(word) {
    const w = word.replace(/^[『「"“]|[』」"”]$/g, '');
    if (!NON_LATIN.test(w)) return '';
    if (A.readings && A.readings[w]) return A.readings[w];
    const song = A.songs.find((x) => x.t === w);
    return song && song.ko ? song.ko : '';
  }
  const withReading = (text) => {
    if (I18N.lang !== 'ko') return esc(text);
    const r = readingOf(text);
    return r ? `${esc(text)} <small class="tv-read">${esc(r)}</small>` : esc(text);
  };
  // 질문 안의 이름들 : 「大森元貴의 생일은?」 → 大森元貴(오모리 모토키)의 생일은?
  const qWithReading = (text) => {
    if (I18N.lang !== 'ko' || !A.readings) return esc(text);
    const keys = Object.keys(A.readings).sort((a, b) => b.length - a.length);
    const re = new RegExp(keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
    let out = '', last = 0;
    for (const m of text.matchAll(re)) { out += esc(text.slice(last, m.index)) + `${esc(m[0])}<small class="tv-read">(${esc(A.readings[m[0]])})</small>`; last = m.index + m[0].length; }
    return out + esc(text.slice(last));
  };
  function startTrivia() {
    const all = (A.trivia || []).map((_, i) => i);
    V = { list: shuffle(all).slice(0, Math.min(TV_N, all.length)), i: 0, score: 0, picked: -1 };
    $('#tvEnd').hidden = true; $('#tvCard').hidden = false;
    nextTv(true);
  }
  function nextTv(first) {
    if (!first) V.i += 1;
    if (V.i >= V.list.length) { endTv(); return; }
    const it = A.trivia[V.list[V.i]];
    V.opts = shuffle([{ t: it.a, ok: true }, ...it.x.map((t) => ({ t, ok: false }))]);
    V.picked = -1;
    renderTv();
    $('#tvCard').classList.remove('in'); void $('#tvCard').offsetWidth; $('#tvCard').classList.add('in');
  }
  function renderTv() {
    const it = A.trivia[V.list[V.i]];
    $('#tvNo').textContent = `${T('{n}번째 문제', { n: V.i + 1 })} / ${V.list.length}`;
    $('#tvScore').textContent = T('맞힌 문제 {a} / {b}', { a: V.score, b: V.i + (V.picked >= 0 ? 1 : 0) });
    $('#tvQ').innerHTML = qWithReading(loc(it.q));
    $('#tvOpts').innerHTML = V.opts.map((o, k) => {
      const cls = V.picked < 0 ? '' : o.ok ? 'right' : k === V.picked ? 'wrong' : 'dim';
      return `<button type="button" class="btn tv-opt ${cls}" data-k="${k}" ${V.picked >= 0 ? 'disabled' : ''}><i>${'ABCD'[k]}</i><span>${withReading(loc(o.t))}</span></button>`;
    }).join('');
    $('#tvNext').hidden = V.picked < 0;
    $('#tvNext').textContent = V.i + 1 >= V.list.length ? T('결과 보기') : T('다음 문제 →');
  }
  function pickTv(k) {
    if (V.picked >= 0) return;
    V.picked = k;
    const ok = V.opts[k].ok;
    if (ok) { V.score += 1; sfx('correct'); FX.sparkle($$('.tv-opt')[k]); } else sfx('wrong', 0.5);
    renderTv();
  }
  function endTv(silent) {
    $('#tvCard').hidden = true; $('#tvEnd').hidden = false;
    const r = V.score / V.list.length;
    $('#tvEndIcon').textContent = r === 1 ? '👑' : r >= 0.7 ? '🍏' : '🌱';
    $('#tvEndTitle').textContent = T('{a} / {b} 정답', { a: V.score, b: V.list.length });
    $('#tvEndMsg').textContent = r === 1 ? T('만점! 진짜 {fan} 인정이에요', { fan: A.fanName || T('팬') })
      : r >= 0.7 ? T('대단해요! {name} 박사님', { name: (A.local && A.local[I18N.lang]) || A.name })
      : T(r >= 0.4 ? '좋아요! 조금만 더 알아 가 봐요' : '이제부터 알아 가면 돼요!');
    if (silent) return;
    sfx(r >= 0.7 ? 'champion' : 'reveal', 0.5);
    if (r >= 0.7) FX.celebrate(r === 1 ? 3 : 2);
  }
  function shareTv() {
    share(`SONG QUIZ · ${A.name}\n${quizName()} ${V.score}/${V.list.length} ${'🍏'.repeat(V.score)}${'▫️'.repeat(V.list.length - V.score)}\n${pageUrl()}#/${A.id}/trivia`);
  }

  /* =========================================================
   * Up & Down : 발매일 / MV 조회수
   * ========================================================= */
  let U = null; // { kind, a, b, streak, used:Set, busy }
  const hasViews = () => !!(A.views && Object.keys(A.views).length);
  const udKind = () => (hasViews() ? store.get('sq_udkind', 'date') : 'date');
  const udVal = (i) => (U.kind === 'date' ? A.songs[i].d : (A.views[A.songs[i].t] || [])[1]);
  const udPool = () => A.songs.map((s, i) => i).filter((i) => (U.kind === 'date' ? !A.songs[i].dq : A.views && A.views[A.songs[i].t]));
  const udShow = (i) => (U.kind === 'date' ? fmtDate(A.songs[i].d) : fmtViews(udVal(i)));
  const udThumb = (i) => {
    const t = A.songs[i].t;
    const id = U.kind === 'views' ? A.views[t][0] : (A.media && A.media[t] ? A.media[t][0] : null);
    return id ? thumb(id) : '';
  };
  function udPickB(a) {
    const pool = udPool().filter((i) => i !== a && udVal(i) !== udVal(a));
    let fresh = pool.filter((i) => !U.used.has(i));
    if (!fresh.length) { U.used = new Set([a]); fresh = pool; }
    const b = fresh[Math.floor(Math.random() * fresh.length)];
    U.used.add(b);
    return b;
  }
  function startUd() {
    U = { kind: udKind(), a: -1, b: -1, streak: 0, used: new Set(), busy: false };
    const pool = udPool();
    U.a = pool[Math.floor(Math.random() * pool.length)];
    U.used.add(U.a);
    U.b = udPickB(U.a);
    $('#udOver').hidden = true;
    $('#udBtns').hidden = false;
    renderUd();
  }
  function udCard(el, i, show, cls = '') {
    el.className = `hcard ${cls}`;
    const th = udThumb(i);
    $('.h-thumb', el).style.backgroundImage = th ? `url("${th}")` : '';
    $('.h-thumb', el).hidden = !th;
    $('.h-title', el).textContent = A.songs[i].t;
    $('.h-sub', el).textContent = sub(A.songs[i]);
    $('.h-date', el).textContent = show ? udShow(i) : '?';
  }
  function renderUd() {
    $$('#udKind [data-kind]').forEach((b) => { b.classList.toggle('on', b.dataset.kind === U.kind); if (b.dataset.kind === 'views') b.hidden = !hasViews(); });
    $('#udQ').textContent = T(U.kind === 'date' ? '오른쪽 곡은 왼쪽 곡보다 나중에 나왔을까요(UP), 먼저 나왔을까요(DOWN)?' : '오른쪽 곡의 MV 조회수는 왼쪽보다 많을까요(UP), 적을까요(DOWN)?');
    $('.ud-up').textContent = T(U.kind === 'date' ? '▲ UP · 더 나중' : '▲ UP · 더 많아요');
    $('.ud-down').textContent = T(U.kind === 'date' ? '▼ DOWN · 더 먼저' : '▼ DOWN · 더 적어요');
    $('#udNote').textContent = U.kind === 'views' ? T('조회수는 {d} 유튜브 기준이에요 (공식 MV · 공식 영상)', { d: A.viewsAt ? fmtDate(A.viewsAt) : '' }) : '';
    udCard($('#hcA'), U.a, true);
    udCard($('#hcB'), U.b, false);
    $('#udStreak').textContent = U.streak;
    $('#udBest').textContent = store.get(`sq_ud_${A.id}_${U.kind}`, 0);
  }
  function answerUd(ans) {
    if (U.busy) return;
    U.busy = true;
    const ok = (ans === 'up') === (udVal(U.b) > udVal(U.a));
    udCard($('#hcB'), U.b, true, ok ? 'right' : 'wrong');
    sfx(ok ? 'up-right' : 'up-wrong', 0.5);
    const key = `sq_ud_${A.id}_${U.kind}`;
    if (ok) {
      U.streak += 1;
      if (U.streak % 10 === 0) FX.celebrate(3);
      else if (U.streak % 5 === 0) FX.celebrate(2);
      else FX.sparkle($('#hcB'));
      if (U.streak > store.get(key, 0)) store.set(key, U.streak);
      $('#udStreak').textContent = U.streak;
      $('#udBest').textContent = store.get(key, 0);
      setTimeout(() => {
        U.a = U.b; U.b = udPickB(U.a); U.busy = false;
        renderUd();
        $('#hcB').classList.add('in');
      }, 1000);
    } else {
      setTimeout(() => {
        $('#udBtns').hidden = true;
        $('#udOver').hidden = false;
        $('#udOverTitle').textContent = T('{n}연속으로 맞혔어요!', { n: U.streak });
        U.busy = false;
      }, 700);
    }
  }
  function shareUd() {
    const what = T(U.kind === 'date' ? '발매일' : 'MV 조회수');
    share(`SONG QUIZ · ${A.name}\nUp & Down (${what}) ${T('{n}연속', { n: U.streak })} ${'🟩'.repeat(Math.min(U.streak, 10))}${U.streak > 10 ? '…' : ''}\n${pageUrl()}#/${A.id}/updown`);
  }

  /* =========================================================
   * 월드컵 : 라이브 · 오케스트라 영상 (라이브가 없는 곡은 MV)
   * ========================================================= */
  let C = null; // { size, round:[entry], next:[entry], i, out:[[entry, place]] }
  function cupEntries() {
    const list = (A.lives || []).map(([t, id, label, year, venue, note]) => ({ t, id, label, year, venue, note }));
    const has = new Set(list.map((e) => e.t));
    Object.entries(A.media || {}).forEach(([t, [id, kind]]) => { if (!has.has(t) && kind === 'mv') list.push({ t, id, label: 'MV' }); });
    return list;
  }
  function cupSetup() {
    C = null;
    const n = cupEntries().length;
    $('#cupSetup').hidden = false; $('#cupMatch').hidden = true; $('#cupWin').hidden = true;
    $('#cupWinVideo').innerHTML = '';
    $('#cupSizes').innerHTML = [8, 16, 32, 64, 128].filter((k) => k <= n)
      .map((k) => `<button type="button" class="btn big" data-size="${k}">${esc(T('{n}강', { n: k }))}</button>`).join('');
    $('#cupPool').textContent = T('지금 들어 있는 무대 {n}개 중에서 무작위로 골라요', { n });
  }
  function cupStart(size) {
    const pick = shuffle(cupEntries()).slice(0, size);
    C = { size, round: pick, next: [], i: 0, out: [] };
    $('#cupSetup').hidden = true; $('#cupMatch').hidden = false; $('#cupWin').hidden = true;
    renderMatch();
  }
  const entryName = (e) => {
    const s = A.songs.find((x) => x.t === e.t);
    return `<b>${esc(e.t)}</b>${s && sub(s) ? `<span class="cup-sub">${esc(sub(s))}</span>` : ''}<em>${esc(e.label)}</em>${liveInfo(e) ? `<small class="cup-info">${esc(liveInfo(e))}</small>` : ''}`;
  };
  // 공연 연도 · 장소 · 방송이나 음원 같은 메모
  const liveInfo = (e) => [e.year, e.venue, e.note && T(e.note)].filter(Boolean).join(' · ');
  // 월드컵 영상은 하이라이트부터
  const cupStartOf = (e) => (A.cupStart && A.cupStart[e.id]) || 0;
  function renderMatch() {
    const n = C.round.length;
    const k = C.i / 2 + 1, m = n / 2;
    $('#cupRound').textContent = n === 2 ? T('결승') : `${T('{n}강', { n })}  ${k} / ${m}`;
    $$('.cup-side').forEach((side, j) => {
      const e = C.round[C.i + j];
      $('.cup-video', side).innerHTML = ytEmbed(e.id, false, cupStartOf(e));
      $('.cup-name', side).innerHTML = entryName(e);
    });
    $('#cupMatch').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function cupPick(j) {
    const win = C.round[C.i + j], lose = C.round[C.i + 1 - j];
    sfx('pick', 0.5);
    FX.sparkle($$('.cup-side')[j]);
    C.next.push(win);
    if (C.round.length <= 4) C.out.push([lose, C.round.length === 2 ? 2 : 3]);
    C.i += 2;
    if (C.i >= C.round.length) {
      if (C.next.length === 1) { cupWin(C.next[0]); return; }
      C.round = C.next; C.next = []; C.i = 0;
    }
    renderMatch();
  }
  function cupWin(e) {
    C.champ = e;
    sfx('champion', 0.5);
    FX.fireworks(3);
    setTimeout(() => FX.confetti(2), 600);
    $$('.cup-video').forEach((v) => { v.innerHTML = ''; });
    $('#cupMatch').hidden = true; $('#cupWin').hidden = false;
    $('#cupWinVideo').innerHTML = ytEmbed(e.id, true, cupStartOf(e));
    $('#cupWinName').innerHTML = entryName(e);
    const places = [[e, 1], ...C.out.slice().reverse()];
    $('#cupRank').innerHTML = places.map(([x, p]) => `<li><i>${esc(T(p === 1 ? '우승' : p === 2 ? '준우승' : '4강'))}</i>${esc(x.t)} <em>${esc(x.label)}${x.year ? ` (${esc(x.year)})` : ''}</em></li>`).join('');
    $('#cupWin').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function shareCup() {
    if (!C || !C.champ) return;
    share(`SONG QUIZ · ${A.name}\n${T('최애 무대 월드컵')} (${T('{n}강', { n: C.size })})\n🏆 ${C.champ.t} — ${C.champ.label}\nhttps://youtu.be/${C.champ.id}${cupStartOf(C.champ) ? `?t=${cupStartOf(C.champ)}` : ''}\n${pageUrl()}#/${A.id}/cup`);
  }

  /* ---------- 이벤트 ---------- */
  $('#hintBtn').addEventListener('click', moreHint);
  $('#checkBtn').addEventListener('click', check);
  $('#revealBtn').addEventListener('click', reveal);
  $('#nextBtn').addEventListener('click', newQuiz);
  $('#nextBtn2').addEventListener('click', newQuiz);
  $('#answerInput').addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); check(); } });
  $('#qRange').addEventListener('change', () => { store.set('sq_range', range()); if (Q) Q.used = new Set(); newQuiz(); });
  $('#qBig').addEventListener('click', () => {
    document.body.classList.toggle('big');
    $('#qBig').classList.toggle('on', document.body.classList.contains('big'));
    store.set('sq_big', document.body.classList.contains('big'));
  });
  const syncMediaChip = () => {
    $('#qMedia').classList.toggle('on', mediaOn());
    $('#qMedia').textContent = T(mediaOn() ? '정답 때 영상 켬' : '정답 때 영상 끔');
  };
  $('#qMedia').addEventListener('click', () => {
    store.set('sq_media', !mediaOn());
    syncMediaChip();
    if (!mediaOn()) clearMedia(); else if (Q && Q.state !== 'play') showMedia(A.songs[Q.song]);
  });
  $('#qFull').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  });
  // JAM'S 퀴즈
  $('#tvOpts').addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) pickTv(Number(b.dataset.k)); });
  $('#tvNext').addEventListener('click', () => nextTv());
  $('#tvAgain').addEventListener('click', startTrivia);
  $('#shareTv').addEventListener('click', shareTv);
  // 듣기 퀴즈
  $('#lsPlay').addEventListener('click', lsPlay);
  $('#lsMore').addEventListener('click', lsMore);
  $('#lsCheck').addEventListener('click', lsCheck);
  $('#lsReveal').addEventListener('click', () => { if (L && L.state === 'play') lsFinish('reveal'); });
  $('#lsNext').addEventListener('click', newListen);
  $('#lsNext2').addEventListener('click', newListen);
  $('#lsInput').addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); lsCheck(); } });
  $$('#lsKind [data-kind]').forEach((b) => b.addEventListener('click', () => { store.set('sq_lskind', b.dataset.kind); if (L) L.used = new Set(); newListen(); }));
  $('#lsRate').addEventListener('change', () => store.set('sq_lsrate', $('#lsRate').value));
  $('#lsBig').addEventListener('click', () => $('#qBig').click());
  // 광고가 나오면 가리개를 잠깐 걷어서 건너뛰기를 누를 수 있게 한다 (6초 뒤 다시 가림)
  let peekT = 0;
  $('#lsPeek').addEventListener('click', () => {
    $('#lsCover').classList.add('peek');
    clearTimeout(peekT); peekT = setTimeout(() => $('#lsCover').classList.remove('peek'), 6000);
  });
  $$('#udBtns [data-ans]').forEach((b) => b.addEventListener('click', () => answerUd(b.dataset.ans)));
  $$('#udKind [data-kind]').forEach((b) => b.addEventListener('click', () => { store.set('sq_udkind', b.dataset.kind); startUd(); }));
  $('#udRetry').addEventListener('click', startUd);
  $('#shareUd').addEventListener('click', shareUd);
  $('#cupSizes').addEventListener('click', (e) => { const b = e.target.closest('[data-size]'); if (b) cupStart(Number(b.dataset.size)); });
  $$('.cup-pick').forEach((b) => b.addEventListener('click', () => cupPick(Number(b.closest('.cup-side').dataset.side))));
  $('#cupQuit').addEventListener('click', () => { $$('.cup-video').forEach((v) => { v.innerHTML = ''; }); cupSetup(); });
  $('#cupAgain').addEventListener('click', cupSetup);
  $('#shareCup').addEventListener('click', shareCup);
  document.addEventListener('keydown', (e) => {
    if (!A || !$('#help').hidden) return;
    const typing = e.target.closest && e.target.closest('input, select, textarea');
    if (mode === 'updown') {
      if ($('#udBtns').hidden) return;
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { e.preventDefault(); answerUd('up'); } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { e.preventDefault(); answerUd('down'); }
      return;
    }
    if (mode === 'trivia') {
      if (typing || !V) return;
      const k = ['1', '2', '3', '4'].indexOf(e.key);
      if (k >= 0 && !$('#tvCard').hidden) { e.preventDefault(); pickTv(k); }
      else if ((e.key === 'Enter' || e.key === 'ArrowRight') && !$('#tvNext').hidden) { e.preventDefault(); nextTv(); }
      return;
    }
    if (mode === 'listen') {
      if (typing || !L || L.state !== 'play') { if (!typing && e.key === 'ArrowRight') { e.preventDefault(); newListen(); } return; }
      if (e.code === 'Space') { e.preventDefault(); lsPlay(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); lsMore(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); newListen(); }
      else if (e.key === 'Enter') { e.preventDefault(); $('#lsInput').focus(); }
      return;
    }
    if (mode !== 'quiz' || typing) return;
    if (e.code === 'Space') { e.preventDefault(); moreHint(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); newQuiz(); }
    else if (e.key === 'Enter' && Q && Q.state === 'play') { e.preventDefault(); $('#answerInput').focus(); }
  });
  const syncSfx = () => { $('#sfxBtn').textContent = sfxOn() ? '🔊' : '🔇'; $('#sfxBtn').setAttribute('aria-label', T(sfxOn() ? '효과음 끄기' : '효과음 켜기')); };
  $('#sfxBtn').addEventListener('click', () => { store.set('sq_sfx', !sfxOn()); syncSfx(); sfx('hint', 0.45); });
  syncSfx();
  $('#helpBtn').addEventListener('click', () => { $('#help').hidden = false; });
  $('#helpClose').addEventListener('click', () => { $('#help').hidden = true; });
  $('#help').addEventListener('click', (e) => { if (e.target.id === 'help') $('#help').hidden = true; });
  // 언어만 바꾸고 진행 중인 게임은 그대로 다시 그린다
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    I18N.set(b.dataset.lang);
    syncMediaChip(); syncSfx(); syncQuizTab();
    if (!A) renderHome();
    else if (mode === 'updown') {
      const shown = $('#hcB').classList.contains('right') || $('#hcB').classList.contains('wrong');
      const cls = $('#hcB').className.replace('hcard', '').trim();
      renderUd(); if (shown) udCard($('#hcB'), U.b, true, cls);
      if (!$('#udOver').hidden) $('#udOverTitle').textContent = T('{n}연속으로 맞혔어요!', { n: U.streak });
    } else if (mode === 'listen') { if (L) renderListen(); } else if (mode === 'trivia') { if (V && !$('#tvCard').hidden) renderTv(); else if (V) endTv(true); } else if (mode === 'cup') {
      if (!$('#cupSetup').hidden) cupSetup();
      else if (!$('#cupMatch').hidden) $$('.cup-side').forEach((side, j) => { $('.cup-name', side).innerHTML = entryName(C.round[C.i + j]); });
    } else renderQuiz();
  }));
  window.addEventListener('hashchange', route);

  I18N.set(I18N.detect());
  $('#qRange').value = store.get('sq_range', 'all');
  $('#lsRate').value = store.get('sq_lsrate', '2');
  if (store.get('sq_big', false)) { document.body.classList.add('big'); $('#qBig').classList.add('on'); }
  syncMediaChip();
  route();
  if (!store.get('sq_seen3', false)) { $('#help').hidden = false; store.set('sq_seen3', true); }
})();
