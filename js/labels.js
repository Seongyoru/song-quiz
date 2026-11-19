'use strict';
/* 듣기 퀴즈 레코드판 가운데 라벨 그림 (64 × 64)
 * class a = 가수 대표 색, b = 보조 색, o = 흰 테두리 · 공식 로고가 아니라 가수를 떠올리게 하는 간단한 모양 */
const LABELS = (() => {
  const ring = (n, f) => Array.from({ length: n }, (_, i) => f((360 / n) * i)).join('');
  return {
    _: '<path class="a o" d="M26 12l24-6v34a8 7 0 1 1-4-6V16l-16 4v26a8 7 0 1 1-4-6z"/>',
    mga: `<defs><linearGradient id="gapple" x1=".2" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="#e4fb7a"/><stop offset=".45" stop-color="#a6e23c"/><stop offset="1" stop-color="#5fb52a"/></linearGradient></defs>
      <path d="M32 18c-6-5-20-5-24 8-4 14 6 32 16 32 4 0 5-2 8-2s4 2 8 2c10 0 20-18 16-32-4-13-18-13-24-8z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/>
      <path d="M32 18c-6-5-20-5-24 8-4 14 6 32 16 32 4 0 5-2 8-2s4 2 8 2c10 0 20-18 16-32-4-13-18-13-24-8z" fill="url(#gapple)"/>
      <path d="M32 19c0-6 2-11 6-14" stroke="#7a4a2a" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M36 12c4-7 13-8 17-5-3 6-11 9-17 5z" fill="#2f8f2c" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
      <ellipse cx="20" cy="30" rx="4" ry="7" fill="#fff" opacity=".55" transform="rotate(25 20 30)"/>`,
    // 히게단 : 콧수염
    higedan: '<path class="a o" d="M32 28c-4-6-12-8-18-4-4 3-6 9-11 9 4 7 15 9 21 5 4-2 6-5 8-8 2 3 4 6 8 8 6 4 17 2 21-5-5 0-7-6-11-9-6-4-14-2-18 4z"/>',
    // Vaundy : V
    vaundy: '<path class="a o" d="M8 12h15l9 26 9-26h15L39 54H25z"/>',
    // Ado : 파란 장미
    ado: '<path class="o" d="M30 40c-2 8-2 14 2 20" fill="none" stroke-width="8"/><path class="bs" d="M30 40c-2 8-2 14 2 20" fill="none" stroke-width="3.5" stroke-linecap="round"/><path class="b o" d="M31 50c-6-6-14-4-16 0 6 4 12 3 16 0z"/><circle class="a o" cx="32" cy="24" r="17"/><path d="M32 24c0-4 6-4 6 1s-5 9-11 7-8-9-3-15 15-5 17 3" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>',
    // back number : 번호 기호
    backnumber: '<path class="o" d="M26 10l-5 44M43 10l-5 44M12 24h42M9 41h42" fill="none" stroke-width="13" stroke-linecap="round"/><path class="as" d="M26 10l-5 44M43 10l-5 44M12 24h42M9 41h42" fill="none" stroke-width="7" stroke-linecap="round"/>',
    // King Gnu : 왕관
    kinggnu: '<path class="a o" d="M8 46l3-30 12 14 9-20 9 20 12-14 3 30z"/><rect class="a o" x="8" y="46" width="48" height="9" rx="2"/><circle class="b" cx="32" cy="38" r="4" fill="#fff"/><circle fill="#fff" cx="19" cy="40" r="3"/><circle fill="#fff" cx="45" cy="40" r="3"/>',
    // 요네즈 켄시 : 레몬
    yonezu: '<path class="o" fill="#f5d33b" d="M8 40c0-16 14-28 30-28 6 0 10 1 14-2 1 5 3 8 2 13-2 17-17 27-31 27-6 0-9-2-13 0-1-4-2-6-2-10z"/><path class="a o" d="M44 14c2-6 8-10 14-9-1 6-7 10-14 9z"/><ellipse cx="22" cy="30" rx="4" ry="8" fill="#fff" opacity=".5" transform="rotate(40 22 30)"/>',
    // tuki. : 초승달
    tuki: '<path class="a o" d="M38 6a26 26 0 1 0 18 44A21 21 0 1 1 38 6z"/>',
    // YOASOBI : 밤하늘 별
    yoasobi: '<path class="b o" d="M30 6l5 17 17 5-17 5-5 17-5-17-17-5 17-5z"/><path class="b o" d="M50 40l2.5 7 7 2.5-7 2.5L50 59l-2.5-7-7-2.5 7-2.5z"/><circle class="b" cx="12" cy="50" r="3"/>',
    // 요루시카 : 꽃
    yorushika: ring(5, (r) => `<ellipse class="a o" cx="32" cy="16" rx="9" ry="13" transform="rotate(${r} 32 32)"/>`) + ring(5, (r) => `<ellipse class="a" cx="32" cy="16" rx="9" ry="13" transform="rotate(${r} 32 32)"/>`) + '<circle class="b o" cx="32" cy="32" r="8"/>',
    // 녹황색사회 : 잎사귀
    ryokushaka: '<path class="a o" d="M10 54C10 26 28 10 56 8c0 28-18 46-46 46z"/><path d="M12 52C24 40 36 28 50 14" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/><circle class="b o" cx="48" cy="46" r="7"/>',
    // 아이묭 : 마리골드
    aimyon: ring(14, (r) => `<ellipse class="a o" cx="32" cy="12" rx="6" ry="12" transform="rotate(${r} 32 32)"/>`) + ring(14, (r) => `<ellipse class="a" cx="32" cy="12" rx="6" ry="12" transform="rotate(${r} 32 32)"/>`) + ring(9, (r) => `<ellipse class="b" cx="32" cy="22" rx="4" ry="8" transform="rotate(${r + 20} 32 32)"/>`) + '<circle class="b" cx="32" cy="32" r="6"/>',
    // Aimer : 깃털
    aimer: '<path class="a o" d="M52 6C30 8 14 24 14 46l14-2c16-4 24-20 24-38z"/><path d="M50 9C38 22 26 36 8 58" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M22 34l10 1M28 26l10 1M35 18l8 1" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>',
    // 로쿠데나시 : 하트
    rokudenashi: '<path class="b o" d="M32 56C14 44 6 34 6 22 6 13 13 7 21 7c5 0 9 3 11 7 2-4 6-7 11-7 8 0 15 6 15 15 0 12-8 22-26 34z"/><ellipse cx="18" cy="20" rx="4" ry="6" fill="#fff" opacity=".55" transform="rotate(-30 18 20)"/>',
    // 유우리 : 꽃다발 (튤립)
    yuuri: '<path class="o" d="M22 58l8-26M32 58V30M42 58l-8-26" fill="none" stroke-width="8" stroke-linecap="round"/><path class="as" d="M22 58l8-26M32 58V30M42 58l-8-26" fill="none" stroke-width="3.5" stroke-linecap="round"/>' + [[18, 22, -18], [32, 16, 0], [46, 22, 18]].map(([x, y, r]) => `<path class="b o" transform="rotate(${r} ${x} ${y})" d="M${x - 9} ${y - 6}l4 4 5-8 5 8 4-4v8c0 6-4 10-9 10s-9-4-9-10z"/>`).join(''),
    // DISH// : 접시
    dish: '<circle class="a o" cx="32" cy="32" r="25"/><circle cx="32" cy="32" r="16" fill="#fff" opacity=".35"/><path d="M28 22l-8 20M40 22l-8 20" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
    // Tani Yuuki : 해
    taniyuuki: ring(10, (r) => `<path class="a o" d="M32 2l5 11h-10z" transform="rotate(${r} 32 32)"/>`) + '<circle class="b o" cx="32" cy="32" r="15"/>',
    // Hump Back : 고래
    humpback: '<path class="a o" d="M4 36c0-11 13-18 27-18 13 0 21 7 23 15 2-5 6-8 9-8-2 5-2 10 0 15-3 0-7-2-9-6-3 9-13 14-25 14C14 48 4 44 4 36z"/><circle cx="16" cy="32" r="2.5" fill="#fff"/><path d="M10 40c8 4 20 4 30 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/><path class="o" d="M28 16c-2-4-6-6-9-5M28 16c2-5 6-7 10-6M28 16V8" fill="none" stroke-width="8" stroke-linecap="round"/><path class="bs" d="M28 16c-2-4-6-6-9-5M28 16c2-5 6-7 10-6M28 16V8" fill="none" stroke-width="3" stroke-linecap="round"/>',
    // RADWIMPS : 혜성
    radwimps: '<path class="a o" d="M6 60L34 22l10 10z" opacity=".95"/><path d="M14 52l22-28" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/><circle class="b o" cx="44" cy="20" r="13"/><circle cx="40" cy="16" r="4" fill="#fff" opacity=".6"/>',
  };
})();
