'use strict';
/* =========================================================
 * King Gnu 전체 곡 데이터 (정규 앨범, CD 싱글 표제곡 · 커플링, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (King Gnu · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : 인스트 · 인터루드 (Sympa Ⅰ~Ⅳ, 開会式, 幕間, 閉会式, 仝, ЯOЯЯIM), 라이브 · 어쿠스틱 버전, Srv.Vinci 명의 곡
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)    dq : 날짜가 확실하지 않음 → "어느 곡이 먼저?" 에서 뺀다
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범곡) / best (베스트 앨범 신곡)
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 · 베스트(신곡일 때) 앨범, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 확인된 타이업만 적는다 (anime / drama / movie / cm / tv / game / other), 모르면 null → 힌트로 쓰지 않음
 * ========================================================= */
ARTISTS.push({
  id: 'kinggnu',
  name: 'King Gnu',
  local: { ko: '킹누', ja: 'キングヌー', en: 'King Gnu' },
  color: '#c8102e',
  color2: '#1a1a1a',
  albums: {
    'Tokyo Rendez-Vous': { d: '2017-10-25', kind: 'full' },
    Sympa: { d: '2019-01-16', kind: 'full' },
    CEREMONY: { d: '2020-01-15', kind: 'full' },
    'THE GREATEST UNKNOWN': { d: '2023-11-29', kind: 'full' },
  },
  songs: [
    /* ---- Tokyo Rendez-Vous (2017) ---- */
    { t: 'Tokyo Rendez-Vous', ko: '도쿄 랑데부', en: 'Tokyo Rendez-Vous', alias: '도쿄랑데부|tokyo rendezvous', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 1, tie: null },
    { t: 'McDonald Romance', ko: '맥도날드 로맨스', en: 'McDonald Romance', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 2, tie: null },
    { t: 'あなたは蜃気楼', ko: '아나타와 신키로', en: 'Anata wa Shinkiro', alias: 'あなたはしんきろう|당신은 신기루', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 3, tie: null },
    { t: 'Vinyl', ko: '바이닐', en: 'Vinyl', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 4, tie: 'cm', tieName: 'パーソルテンプスタッフ「HAKEN ROCK!!」' },
    { t: '破裂', ko: '하레츠', en: 'Haretsu', alias: 'はれつ|파열', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 5, tie: null },
    { t: 'ロウラヴ', ko: '로우 러브', en: 'Low Love', alias: 'ロウラブ|로우러브|로라브', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 6, tie: null },
    { t: 'NIGHT POOL', ko: '나이트 풀', en: 'NIGHT POOL', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 7, tie: null },
    { t: 'サマーレイン・ダイバー', ko: '서머 레인 다이버', en: 'Summer Rain Diver', d: '2017-10-25', type: 'album', album: 'Tokyo Rendez-Vous', track: 8, tie: null },
    /* ---- Flash!!! / Prayer X (2018) ---- */
    { t: 'Flash!!!', ko: '플래시', en: 'Flash!!!', alias: 'flash', d: '2018-07-13', type: 'digital', album: 'Sympa', track: 3, tie: 'cm', tieName: 'NTTドコモ「5G」' },
    { t: 'Prayer X', ko: '프레이어 엑스', en: 'Prayer X', d: '2018-09-19', type: 'single', album: 'Sympa', track: 10, tie: 'anime', tieName: 'BANANA FISH' },
    /* ---- Sympa (2019) ---- */
    { t: 'Slumberland', ko: '슬럼버랜드', en: 'Slumberland', d: '2019-01-16', type: 'album', album: 'Sympa', track: 2, tie: null },
    { t: 'Sorrows', ko: '소로우즈', en: 'Sorrows', d: '2019-01-16', type: 'album', album: 'Sympa', track: 4, tie: 'cm', tieName: 'アサヒ ドライゼロスパーク' },
    { t: 'Hitman', ko: '히트맨', en: 'Hitman', d: '2019-01-16', type: 'album', album: 'Sympa', track: 6, tie: 'cm', tieName: 'ANA' },
    { t: "Don't Stop the Clocks", ko: '돈트 스톱 더 클락스', en: "Don't Stop the Clocks", d: '2019-01-16', type: 'album', album: 'Sympa', track: 7, tie: null },
    { t: "It's a small world", ko: '잇츠 어 스몰 월드', en: "It's a small world", d: '2019-01-16', type: 'album', album: 'Sympa', track: 8, tie: 'tv', tieName: 'BOMBER-E' },
    { t: 'Bedtown', ko: '베드타운', en: 'Bedtown', d: '2019-01-16', type: 'album', album: 'Sympa', track: 11, tie: null },
    { t: 'The hole', ko: '더 홀', en: 'The hole', d: '2019-01-16', type: 'album', album: 'Sympa', track: 12, tie: null },
    /* ---- 白日 / 飛行艇 / 傘 (2019) ---- */
    { t: '白日', ko: '하쿠지츠', en: 'Hakujitsu', alias: 'はくじつ|백일', d: '2019-02-22', type: 'digital', album: 'CEREMONY', track: 5, tie: 'drama', tieName: 'イノセンス 冤罪弁護士' },
    { t: '飛行艇', ko: '히코테이', en: 'Hikoutei', alias: 'ひこうてい|비행정', d: '2019-08-09', type: 'digital', album: 'CEREMONY', track: 7, tie: 'cm', tieName: 'ANA「ひとには翼がある」' },
    { t: '傘', ko: '카사', en: 'Kasa', alias: 'かさ|우산', d: '2019-10-11', type: 'digital', album: 'CEREMONY', track: 10, tie: 'cm', tieName: 'ブルボン アルフォート' },
    /* ---- CEREMONY (2020) ---- */
    { t: 'どろん', ko: '도론', en: 'Doron', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 2, tie: 'movie', tieName: 'スマホを落としただけなのに 囚われの殺人鬼' },
    { t: 'Teenager Forever', ko: '틴에이저 포에버', en: 'Teenager Forever', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 3, tie: 'cm', tieName: 'ソニー WF-1000XM3' },
    { t: 'ユーモア', ko: '유머', en: 'Humor', alias: '유-모아', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 4, tie: 'cm', tieName: 'ロマンシング サガ リ・ユニバース' },
    { t: '小さな惑星', ko: '치이사나 와쿠세이', en: 'Chiisana Wakusei', alias: 'ちいさなわくせい|작은 행성', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 8, tie: 'cm', tieName: 'Honda VEZEL' },
    { t: 'Overflow', ko: '오버플로', en: 'Overflow', alias: '오버플로우', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 9, tie: null },
    { t: '壇上', ko: '단조', en: 'Danjou', alias: 'だんじょう|단상', d: '2020-01-15', type: 'album', album: 'CEREMONY', track: 11, tie: null },
    /* ---- 三文小説/千両役者 (2020) ---- */
    { t: '三文小説', ko: '산몬쇼세츠', en: 'Sanmon Shousetsu', alias: 'さんもんしょうせつ|삼류 소설|삼문소설', d: '2020-12-02', type: 'single', album: 'THE GREATEST UNKNOWN', track: 20, tie: 'drama', tieName: '35歳の少女' },
    { t: '千両役者', ko: '센료야쿠샤', en: 'Senryo Yakusha', alias: 'せんりょうやくしゃ|천량배우', d: '2020-12-02', type: 'single', album: 'THE GREATEST UNKNOWN', track: 11, tie: 'cm', tieName: 'NTTドコモ「5G」' },
    /* ---- 泡 (2021) ---- */
    { t: '泡', ko: '아와', en: 'Awa', alias: 'あわ|거품', d: '2021-03-05', type: 'digital', album: 'THE GREATEST UNKNOWN', track: 13, tie: 'movie', tieName: '太陽は動かない' },
    /* ---- BOY (2021) ---- */
    { t: 'BOY', ko: '보이', en: 'BOY', d: '2021-12-01', type: 'single', album: 'THE GREATEST UNKNOWN', track: 18, tie: 'anime', tieName: '王様ランキング' },
    { t: 'F.O.O.L', ko: '풀', en: 'F.O.O.L', alias: 'fool|에프오오엘', d: '2021-12-01', type: 'coupling', rel: 'BOY', album: null, tie: 'cm', tieName: 'Red Bull Race Day' },
    /* ---- 一途/逆夢 (2021) ---- */
    { t: '一途', ko: '이치즈', en: 'Ichizu', alias: 'いちず|한결같이', d: '2021-12-29', type: 'single', album: 'THE GREATEST UNKNOWN', track: 5, tie: 'movie', tieName: '劇場版 呪術廻戦 0' },
    { t: '逆夢', ko: '사카유메', en: 'Sakayume', alias: 'さかゆめ|역몽', d: '2021-12-29', type: 'single', album: 'THE GREATEST UNKNOWN', track: 7, tie: 'movie', tieName: '劇場版 呪術廻戦 0' },
    /* ---- 2022 ---- */
    { t: 'カメレオン', ko: '카멜레온', en: 'Chameleon', alias: 'CHAMELEON', d: '2022-03-16', type: 'single', album: 'THE GREATEST UNKNOWN', track: 2, tie: 'drama', tieName: 'ミステリと言う勿れ' },
    { t: '雨燦々', ko: '아메산산', en: 'Ame Sansan', alias: 'あめさんさん|비 찬란히', d: '2022-07-15', type: 'digital', album: 'THE GREATEST UNKNOWN', track: 17, tie: 'drama', tieName: 'オールドルーキー' },
    { t: 'Stardom', ko: '스타덤', en: 'Stardom', alias: 'STARDOM', d: '2022-11-17', type: 'single', album: 'THE GREATEST UNKNOWN', track: 15, tie: 'tv', tieName: '2022 NHKサッカーテーマ' },
    /* ---- SPECIALZ (2023) ---- */
    { t: 'SPECIALZ', ko: '스페셜즈', en: 'SPECIALZ', d: '2023-09-06', type: 'single', album: 'THE GREATEST UNKNOWN', track: 4, tie: 'anime', tieName: '呪術廻戦「渋谷事変」' },
    /* ---- THE GREATEST UNKNOWN (2023) ---- */
    { t: 'MIRROR', ko: '미러', en: 'MIRROR', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 1, tie: 'cm', tieName: 'メルセデス・ベンツ Eクラス' },
    { t: 'DARE??', ko: '데어', en: 'DARE??', alias: 'dare|다레', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 3, tie: null },
    { t: 'δ', ko: '델타', en: 'Delta', alias: 'delta', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 6, tie: null },
    { t: 'IKAROS', ko: '이카로스', en: 'IKAROS', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 8, tie: null },
    { t: 'W●RKAHOLIC', ko: '워커홀릭', en: 'WORKAHOLIC', alias: 'workaholic', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 9, tie: null },
    { t: '):阿修羅:(', ko: '아슈라', en: 'Ashura', alias: '阿修羅|あしゅら|아수라', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 10, tie: 'cm', tieName: 'PlayStation「Play Has No Limits」' },
    { t: '硝子窓', ko: '가라스마도', en: 'Garasumado', alias: 'がらすまど|유리창', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 12, tie: 'movie', tieName: 'ミステリと言う勿れ' },
    { t: '2 Μ Ο Я Ο', ko: '투모로', en: '2 MORO', alias: '2moro|tomorrow|투 모로', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 14, tie: 'cm', tieName: 'ネイチャーラボ「MARO」' },
    { t: 'SUNNY SIDE UP', ko: '서니 사이드 업', en: 'SUNNY SIDE UP', d: '2023-11-29', type: 'album', album: 'THE GREATEST UNKNOWN', track: 16, tie: null },
    /* ---- 2024 ~ ---- */
    { t: 'MASCARA', ko: '마스카라', en: 'MASCARA', alias: 'マスカラ', d: '2024-10-04', type: 'digital', album: null, tie: null },
    { t: 'ねっこ', ko: '넷코', en: 'Nekko', alias: '뿌리', d: '2024-10-21', type: 'digital', album: null, tie: 'drama', tieName: '海に眠るダイヤモンド' },
    { t: 'TWILIGHT!!!', ko: '트와일라잇', en: 'TWILIGHT!!!', alias: 'twilight', d: '2025-04-18', type: 'digital', album: null, tie: 'movie', tieName: '名探偵コナン 隻眼の残像' },
    { t: 'SO BAD', ko: '소 배드', en: 'SO BAD', d: '2025-09-05', type: 'digital', album: null, tie: 'other', tieName: 'USJ ハロウィーン・ホラー・ナイト' },
    { t: 'AIZO', ko: '아이조', en: 'AIZO', alias: '愛憎|あいぞう|애증', d: '2026-01-09', type: 'single', album: null, tie: 'anime', tieName: '呪術廻戦「死滅回游 前編」' },
    { t: 'GO GHOST', ko: '고 고스트', en: 'GO GHOST', d: '2026-07-29', type: 'digital', album: null, tie: 'anime', tieName: '攻殻機動隊 THE GHOST IN THE SHELL' },
  ],
});
