'use strict';
/* =========================================================
 * Tani Yuuki 전체 곡 데이터 (정규 앨범, EP, CD 싱글, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 「Tani Yuuki」「多面態 (アルバム)」, 공식 유튜브 앨범 트레일러 · 음원 설명란 (2026-11 확인)
 * 빠진 것 : 리믹스, THE FIRST TAKE 버전, 피처링 참가곡, 다른 가수에게 준 곡
 * 『航海士』『HOMETOWN』『SPACE RENDEZVOUS』는 수록곡 순서를 확인하지 못해 트랙 번호를 비운다
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (EP 곡) / best (베스트 앨범 신곡)
 * album  : 처음 실린 정규 앨범 · EP, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 위키백과 타이업 표에 있는 것만 (anime / drama / movie / cm / tv / game / other), 없으면 null
 * ========================================================= */
ARTISTS.push({
  id: 'taniyuuki',
  name: 'Tani Yuuki',
  local: { ko: '타니 유우키', ja: 'タニユウキ', en: 'Tani Yuuki' },
  color: '#3b8fd1',
  color2: '#f6c445',
  albums: {
    Memories: { d: '2021-12-08', kind: 'full' },
    '多面態': { d: '2023-03-29', kind: 'full' },
    HOMETOWN: { d: '2024-05-08', kind: 'mini' },
    '航海士': { d: '2025-06-18', kind: 'full' },
    'SPACE RENDEZVOUS': { d: '2026-10-14', kind: 'mini' },
  },
  songs: [
    /* ---- 배포 싱글 (2020 - 2021) → Memories ---- */
    { t: 'Myra', ko: '마이라', en: 'Myra', d: '2020-05-16', type: 'digital', album: 'Memories', track: 4, tie: 'cm', tieName: 'TikTok「じいちゃんとMyra」篇' },
    { t: 'Life is beautiful', ko: '라이프 이즈 뷰티풀', en: 'Life is beautiful', d: '2020-09-07', type: 'digital', album: 'Memories', track: 14, tie: null },
    { t: 'Unreachable love song', ko: '언리처블 러브 송', en: 'Unreachable love song', d: '2021-02-20', type: 'digital', album: 'Memories', track: 6, tie: null },
    { t: 'Night Butterfly', ko: '나이트 버터플라이', en: 'Night Butterfly', d: '2021-04-21', type: 'digital', album: 'Memories', track: 7, tie: null },
    { t: 'W/X/Y', ko: '더블유 엑스 와이', en: 'W/X/Y', alias: 'WXY|ダブリューエックスワイ', d: '2021-05-26', type: 'digital', album: 'Memories', track: 2, tie: 'cm', tieName: 'ザ・プレミアム・モルツ' },
    { t: 'Over The Time', ko: '오버 더 타임', en: 'Over The Time', d: '2021-06-28', type: 'digital', album: null, tie: 'drama', tieName: 'ナイト・ドクター' },
    { t: 'FREYA', ko: '프레이야', en: 'FREYA', d: '2021-08-13', type: 'single', album: null, tie: null },
    { t: '百鬼夜行', ko: '햣키야코', en: 'Hyakki Yakou', alias: 'ひゃっきやこう|백귀야행', d: '2021-11-10', type: 'digital', album: 'Memories', track: 9, tie: null },
    /* ---- Memories (2021) ---- */
    { t: '決別の唄', ko: '케츠베츠노 우타', en: 'Ketsubetsu no Uta', alias: 'けつべつのうた|결별의 노래', d: '2021-12-08', type: 'album', album: 'Memories', track: 1, tie: null },
    { t: 'おかえり', ko: '오카에리', en: 'Okaeri', alias: '어서 와|다녀왔어', d: '2021-12-08', type: 'album', album: 'Memories', track: 3, tie: null },
    { t: '非lie心', ko: '히라이신', en: 'Hiraishin', alias: 'ひらいしん|피뢰침', d: '2021-12-08', type: 'album', album: 'Memories', track: 5, tie: null },
    { t: '油性マジック', ko: '유세이 매직', en: 'Yusei Magic', alias: 'ゆせいまじっく|유성 매직', d: '2021-12-08', type: 'album', album: 'Memories', track: 8, tie: null },
    { t: '曖昧ミーマイン', ko: '아이마이 미마인', en: 'Aimai Me Mine', alias: 'あいまいみーまいん', d: '2021-12-08', type: 'album', album: 'Memories', track: 10, tie: null },
    { t: '愛言葉', ko: '아이코토바', en: 'Aikotoba', alias: 'あいことば|사랑의 말', d: '2021-12-08', type: 'album', album: 'Memories', track: 11, tie: null },
    { t: '記憶', ko: '키오쿠', en: 'Kioku', alias: 'きおく|기억', d: '2021-12-08', type: 'album', album: 'Memories', track: 12, tie: null },
    { t: 'We are free', ko: '위 아 프리', en: 'We are free', d: '2021-12-08', type: 'album', album: 'Memories', track: 13, tie: null },
    /* ---- 배포 싱글 (2022 - 2023) → 多面態 ---- */
    { t: '自分自信', ko: '지분지신', en: 'Jibun Jishin', alias: 'じぶんじしん|자기 자신|自分自身', d: '2022-03-09', type: 'digital', album: '多面態', track: 4, tie: 'cm', tieName: 'UQ mobile「UQ応援割」' },
    { t: '夢喰', ko: '유메쿠이', en: 'Yumekui', alias: 'ゆめくい|꿈을 먹다', d: '2022-06-22', type: 'digital', album: '多面態', track: 2, tie: null },
    { t: 'もう一度', ko: '모 이치도', en: 'Mou Ichido', alias: 'もういちど|한 번 더', d: '2022-09-21', type: 'digital', album: '多面態', track: 5, tie: null },
    { t: '燦々たるや', ko: '산산타루야', en: 'Sansan Taruya', alias: 'さんさんたるや', d: '2023-01-01', type: 'digital', album: '多面態', track: 10, tie: null },
    { t: 'ワンダーランド', ko: '원더랜드', en: 'Wonderland', alias: 'わんだーらんど', d: '2023-02-22', type: 'digital', album: '多面態', track: 7, tie: 'tv', tieName: '王様のブランチ' },
    { t: 'Cheers', ko: '치어스', en: 'Cheers', d: '2023-03-08', type: 'digital', album: '多面態', track: 9, tie: null },
    { t: '運命', ko: '운메이', en: 'Unmei', alias: 'うんめい|운명', d: '2023-03-15', type: 'digital', album: '多面態', track: 11, tie: 'cm', tieName: 'ソニー「Xperia 5 IV」' },
    /* ---- 多面態 (2023) ---- */
    { t: '生きる偉人たちよ', ko: '이키루 이진타치요', en: 'Ikiru Ijintachi yo', alias: 'いきるいじんたちよ|살아가는 위인들이여', d: '2023-03-29', type: 'album', album: '多面態', track: 1, tie: null },
    { t: 'Life goes on', ko: '라이프 고즈 온', en: 'Life goes on', d: '2023-03-29', type: 'album', album: '多面態', track: 3, tie: null },
    { t: '何も考えたくないです', ko: '나니모 칸가에타쿠나이데스', en: 'Nanimo Kangaetakunai desu', alias: 'なにもかんがえたくないです|아무것도 생각하고 싶지 않아요', d: '2023-03-29', type: 'album', album: '多面態', track: 6, tie: null },
    { t: 'マーメイド', ko: '머메이드', en: 'Mermaid', alias: 'まーめいど|인어', d: '2023-03-29', type: 'album', album: '多面態', track: 8, tie: null },
    { t: '多面態', ko: '타멘타이', en: 'Tamentai', alias: 'ためんたい|다면태', d: '2023-03-29', type: 'album', album: '多面態', track: 12, tie: null },
    /* ---- 배포 싱글 (2023 - 2025) → 航海士 ---- */
    { t: '械物', ko: '카이부츠', en: 'Kaibutsu', alias: 'かいぶつ|괴물', d: '2023-06-28', type: 'digital', album: '航海士', track: null, tie: 'anime', tieName: 'EDENS ZERO' },
    { t: '最後の魔法', ko: '사이고노 마호', en: 'Saigo no Mahou', alias: 'さいごのまほう|마지막 마법', d: '2023-10-04', type: 'digital', album: '航海士', track: null, tie: null },
    { t: 'kotodama', ko: '코토다마', en: 'kotodama', alias: 'ことだま|언령', d: '2024-01-05', type: 'digital', album: '航海士', track: null, tie: null },
    /* ---- HOMETOWN (2024) ---- */
    { t: '笑い話', ko: '와라이바나시', en: 'Waraibanashi', alias: 'わらいばなし|웃음거리', d: '2024-04-19', type: 'digital', album: 'HOMETOWN', track: null, tie: null },
    { t: "I'm home", ko: '아임 홈', en: "I'm home", d: '2024-05-08', type: 'ep', album: 'HOMETOWN', track: null, tie: null },
    { t: 'がらくた', ko: '가라쿠타', en: 'Garakuta', alias: '잡동사니', d: '2024-05-08', type: 'ep', album: 'HOMETOWN', track: null, tie: null },
    { t: '花詩', ko: '하나우타', en: 'Hanauta', alias: 'はなうた|꽃노래', d: '2024-05-08', type: 'ep', album: 'HOMETOWN', track: null, tie: null },
    /* ---- 배포 싱글 (2024 - 2025) ---- */
    { t: 'アンタレス', ko: '안타레스', en: 'Antares', alias: 'あんたれす', d: '2024-08-21', type: 'digital', album: '航海士', track: null, tie: 'game', tieName: 'あんさんぶるスターズ!!' },
    { t: 'メニークリスマス', ko: '메니 크리스마스', en: 'Many Christmas', alias: 'めにーくりすます|메리 크리스마스', d: '2024-12-11', type: 'digital', album: null, tie: null },
    { t: '後悔史', ko: '코카이시', en: 'Koukaishi', alias: 'こうかいし|후회사', d: '2025-05-21', type: 'digital', album: '航海士', track: null, tie: null },
    { t: 'Dear drops', ko: '디어 드롭스', en: 'Dear drops', d: '2025-06-04', type: 'digital', album: '航海士', track: null, tie: null },
    /* ---- 航海士 (2025) ---- */
    { t: 'Anchor', ko: '앵커', en: 'Anchor', d: '2025-06-18', type: 'album', album: '航海士', track: null, tie: null },
    { t: '自分革命', ko: '지분카쿠메이', en: 'Jibunkakumei', alias: 'じぶんかくめい|자기 혁명', d: '2025-06-18', type: 'album', album: '航海士', track: null, tie: null },
    { t: '他人り事', ko: '히토리고토', en: 'Hitorigoto', alias: 'ひとりごと|혼잣말', d: '2025-06-18', type: 'album', album: '航海士', track: null, tie: null },
    /* ---- 배포 싱글 · CD 싱글 (2025 - 2026) ---- */
    { t: '万有引力', ko: '반유인료쿠', en: 'Banyuuinryoku', alias: 'ばんゆういんりょく|만유인력', d: '2025-08-08', type: 'digital', album: null, tie: 'tv', tieName: 'みんなのうた' },
    { t: '吾輩は人である', ko: '와가하이와 히토데아루', en: 'Wagahai wa Hito de Aru', alias: 'わがはいはひとである|나는 사람이다', d: '2025-09-23', type: 'digital', album: null, tie: null },
    { t: 'everyday', ko: '에브리데이', en: 'everyday', d: '2025-10-15', type: 'digital', album: null, tie: null },
    { t: 'Survivor', ko: '서바이버', en: 'Survivor', d: '2025-11-03', type: 'digital', album: null, tie: null },
    { t: 'もしものがたり', ko: '모시모노가타리', en: 'Moshimonogatari', alias: 'もしものがたり|만약의 이야기', d: '2025-11-19', type: 'single', album: null, tie: 'anime', tieName: 'ドラえもん' },
    { t: 'アイノウタ', ko: '아이노우타', en: 'Ai no Uta', alias: 'あいのうた|사랑의 노래', d: '2026-06-19', type: 'digital', album: null, tie: null },
    /* ---- SPACE RENDEZVOUS (2026) ---- */
    { t: 'エイリアンズ', ko: '에이리언즈', en: 'Aliens', alias: 'えいりあんず', d: '2026-09-27', type: 'digital', album: 'SPACE RENDEZVOUS', track: null, tie: null },
    { t: 'Satellite Blue', ko: '새틀라이트 블루', en: 'Satellite Blue', d: '2026-10-14', type: 'ep', album: 'SPACE RENDEZVOUS', track: null, tie: null },
    { t: 'Cold Sleep', ko: '콜드 슬립', en: 'Cold Sleep', d: '2026-10-14', type: 'ep', album: 'SPACE RENDEZVOUS', track: null, tie: null },
    { t: 'Everyday-Debris', ko: '에브리데이 데브리', en: 'Everyday-Debris', d: '2026-10-14', type: 'ep', album: 'SPACE RENDEZVOUS', track: null, tie: null },
    { t: 'Moonwalker', ko: '문워커', en: 'Moonwalker', d: '2026-10-14', type: 'ep', album: 'SPACE RENDEZVOUS', track: null, tie: null },
  ],
});
