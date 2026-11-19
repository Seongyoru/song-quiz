'use strict';
/* =========================================================
 * 優里 전체 곡 데이터 (배포 싱글, 정규 앨범 수록곡)
 *
 * 출처 : 일본어 위키백과 (優里 · 壱 · 弐 문서), 2026-11 확인
 * 빠진 것 : 커버 · 외국어 버전 · piano ver. · 오케스트라 앨범 『響』 · 커버 앨범 『詩-80's』, 피처링 참가곡
 *
 * t / ko / en / alias / d / type / rel / album / track / tie : mga.js 와 같은 형식
 * ========================================================= */
ARTISTS.push({
  id: 'yuuri',
  name: '優里',
  local: { ko: '유우리', ja: '優里', en: 'Yuuri' },
  color: '#b5838d',
  color2: '#e8c7cb',
  albums: {
    壱: { d: '2022-01-12', kind: 'full' },
    弐: { d: '2023-03-29', kind: 'full' },
  },
  songs: [
    /* ---- 인디즈 · 壱 시기 배포 싱글 ---- */
    { t: 'かくれんぼ', ko: '카쿠렌보', en: 'Kakurenbo', alias: '숨바꼭질', d: '2019-12-01', type: 'digital', album: '壱', track: 16, tie: 'drama', tieName: 'ドライフラワー -七月の部屋-' },
    { t: 'かごめ', ko: '카고메', en: 'Kagome', d: '2020-02-28', type: 'digital', album: '壱', track: 12, tie: null },
    { t: 'ピーターパン', ko: '피터팬', en: 'Peter Pan', d: '2020-08-09', type: 'digital', album: '壱', track: 8, tie: 'cm', tieName: 'ディップ' },
    { t: 'ドライフラワー', ko: '드라이플라워', en: 'Dry Flower', alias: '드라이 플라워|dried flowers|말린 꽃', d: '2020-10-25', type: 'digital', album: '壱', track: 2, tie: 'drama', tieName: 'ドライフラワー -七月の部屋-' },
    { t: 'インフィニティ', ko: '인피니티', en: 'Infinity', d: '2021-01-23', type: 'digital', album: '壱', track: 14, tie: 'anime', tieName: 'SK∞ エスケーエイト' },
    { t: '桜晴', ko: '오우카', en: 'Ouka', alias: 'おうか|벚꽃 갠 날', d: '2021-02-19', type: 'digital', album: '壱', track: 13, tie: null },
    { t: '飛行船', ko: '히코센', en: 'Hikousen', alias: 'ひこうせん|비행선', d: '2021-04-17', type: 'digital', album: '壱', track: 15, tie: null },
    { t: 'シャッター', ko: '셔터', en: 'Shutter', d: '2021-07-07', type: 'digital', album: '壱', track: 5, tie: null },
    { t: '夏音', ko: '나츠오토', en: 'Natsuoto', alias: 'なつおと|여름 소리', d: '2021-09-19', type: 'digital', album: '壱', track: 10, tie: 'drama', tieName: 'ドライフラワー -七月の部屋-' },
    { t: 'ベテルギウス', ko: '베텔기우스', en: 'Betelgeuse', d: '2021-11-04', type: 'digital', album: '壱', track: 1, tie: 'drama', tieName: 'SUPER RICH' },
    /* ---- 壱 (2022) ---- */
    { t: '花鳥風月', ko: '카초후게츠', en: 'Kachoufuugetsu', alias: 'かちょうふうげつ|화조풍월', d: '2022-01-12', type: 'album', album: '壱', track: 3, tie: null },
    { t: 'ミズキリ', ko: '미즈키리', en: 'Mizukiri', alias: '물수제비', d: '2022-01-12', type: 'album', album: '壱', track: 4, tie: 'drama', tieName: 'SUPER RICH' },
    { t: 'ミザリー', ko: '미저리', en: 'Misery', d: '2022-01-12', type: 'album', album: '壱', track: 6, tie: null },
    { t: 'レオ', ko: '레오', en: 'Leo', d: '2022-01-12', type: 'album', album: '壱', track: 7, tie: null },
    { t: 'スマホウォーズ', ko: '스마호 워즈', en: 'Smartphone Wars', d: '2022-01-12', type: 'album', album: '壱', track: 9, tie: null },
    { t: '背中', ko: '세나카', en: 'Senaka', alias: 'せなか|등', d: '2022-01-12', type: 'album', album: '壱', track: 11, tie: null },
    /* ---- 弐 시기 배포 싱글 ---- */
    { t: 'うぉ', ko: '우오', en: 'Uo', d: '2022-05-13', type: 'digital', album: '弐', track: 10, tie: null },
    { t: 'タイムマシン', ko: '타임머신', en: 'Time Machine', d: '2022-07-12', type: 'digital', album: '弐', track: 12, tie: null },
    { t: 'おにごっこ', ko: '오니곳코', en: 'Onigokko', alias: '술래잡기', d: '2022-09-12', type: 'digital', album: '弐', track: 9, tie: null },
    { t: 'クリスマスイブ', ko: '크리스마스 이브', en: 'Christmas Eve', d: '2022-11-27', type: 'digital', album: '弐', track: 2, tie: null },
    { t: 'メリーゴーランド', ko: '메리고라운드', en: 'Merry-go-round', alias: '회전목마', d: '2022-12-22', type: 'digital', album: '弐', track: 14, tie: 'movie', tieName: 'かがみの孤城' },
    { t: 'ビリミリオン', ko: '비리밀리언', en: 'Billimillion', d: '2023-01-19', type: 'digital', album: '弐', track: 1, tie: null },
    { t: '恋人じゃなくなった日', ko: '코이비토쟈 나쿠낫타 히', en: 'Koibito ja Nakunatta Hi', alias: 'こいびとじゃなくなったひ|연인이 아니게 된 날', d: '2023-02-14', type: 'digital', album: '弐', track: 3, tie: null },
    /* ---- 弐 (2023) ---- */
    { t: 'アストロノーツ', ko: '아스트로노츠', en: 'Astronauts', d: '2023-03-29', type: 'album', album: '弐', track: 4, tie: null },
    { t: 'アダムとイブ', ko: '아담토 이브', en: 'Adam to Eve', alias: '아담과 이브', d: '2023-03-29', type: 'album', album: '弐', track: 5, tie: null },
    { t: 'ヒーローの居ない街', ko: '히어로노 이나이 마치', en: 'Hero no Inai Machi', alias: 'ひーろーのいないまち|히어로가 없는 거리', d: '2023-03-29', type: 'album', album: '弐', track: 6, tie: null },
    { t: 'ライラ', ko: '라이라', en: 'Lyla', d: '2023-03-29', type: 'album', album: '弐', track: 7, tie: null },
    { t: 'ガリレオは恋をする', ko: '갈릴레오와 코이오 스루', en: 'Galileo wa Koi wo Suru', alias: 'がりれおはこいをする|갈릴레오는 사랑을 한다', d: '2023-03-29', type: 'album', album: '弐', track: 8, tie: null },
    { t: 'フロントライン', ko: '프런트라인', en: 'Frontline', alias: 'フロントライン feat BAK&YO_CO', d: '2023-03-29', type: 'album', album: '弐', track: 11, tie: null },
    { t: '告白直前酸欠状態', ko: '코쿠하쿠 쵸쿠젠 산케츠 조타이', en: 'Kokuhaku Chokuzen Sanketsu Joutai', alias: 'こくはくちょくぜんさんけつじょうたい|고백 직전 산소 결핍 상태', d: '2023-03-29', type: 'album', album: '弐', track: 13, tie: null },
    /* ---- 2024 이후 ---- */
    { t: 'カーテンコール', ko: '커튼콜', en: 'Curtain Call', d: '2024-07-19', type: 'digital', album: null, tie: 'anime', tieName: '僕のヒーローアカデミア' },
    { t: 'DiNA', ko: '디나', en: 'DiNA', d: '2025-01-10', type: 'digital', album: null, tie: null },
    { t: '最&強', ko: '사이쿄', en: 'Saikyou', alias: 'さいきょう|最強|최강', d: '2025-04-20', type: 'digital', album: null, tie: null },
    { t: '輪廻転生', ko: '린네텐세이', en: 'Rinne Tensei', alias: 'りんねてんせい|윤회전생', d: '2025-06-28', type: 'digital', album: null, tie: null },
    { t: '最低な君に贈る歌', ko: '사이테이나 키미니 오쿠루 우타', en: 'Saitei na Kimi ni Okuru Uta', alias: 'さいていなきみにおくるうた|최악인 너에게 보내는 노래', d: '2025-11-14', type: 'digital', album: null, tie: null },
    { t: '世界が終わりました', ko: '세카이가 오와리마시타', en: 'Sekai ga Owarimashita', alias: 'せかいがおわりました|세상이 끝났습니다', d: '2026-01-14', type: 'digital', album: null, tie: 'drama', tieName: '再会〜Silent Truth〜' },
    { t: 'サンダーボルト', ko: '선더볼트', en: 'Thunderbolt', d: '2026-09-02', type: 'digital', album: null, tie: 'anime', tieName: 'サンダー3' },
  ],
});
