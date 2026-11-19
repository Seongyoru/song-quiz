'use strict';
/* =========================================================
 * Vaundy 전체 곡 데이터 (정규 앨범, EP, CD 싱글 표제곡 · 커플링, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (Vaundy · strobo · replica · 각 싱글 문서), 2026-11 확인
 * 빠진 것 : Audio 001~008 (인터루드), replica 판 다시 녹음 (怪獣の花唄 - replica -), 커버 (ココロありがとう), 라이브 앨범, 자주 제작 · 다른 가수에게 준 곡
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)    dq : 날짜가 확실하지 않음 → "어느 곡이 먼저?" 에서 뺀다
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범곡) / best (베스트 앨범 신곡)
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 앨범, 없으면 null     track : 그 앨범의 트랙 번호 (replica 는 Disc 2 를 16 번부터 이어서 센다)
 * tie    : 확인된 타이업만 적는다 (anime / drama / movie / cm / tv / game / other), 모르면 null → 힌트로 쓰지 않음
 * ========================================================= */
ARTISTS.push({
  id: 'vaundy',
  name: 'Vaundy',
  local: { ko: '바운디', ja: 'バウンディ', en: 'Vaundy' },
  color: '#e8d21d',
  color2: '#2b2b2b',
  albums: {
    strobo: { d: '2020-05-27', kind: 'full' },
    '裸の勇者': { d: '2022-02-23', kind: 'mini' },
    replica: { d: '2023-11-15', kind: 'full' },
  },
  songs: [
    /* ---- strobo (2019~2020) ---- */
    { t: '東京フラッシュ', ko: '도쿄 플래시', en: 'Tokyo Flash', alias: 'とうきょうフラッシュ|도쿄플래시', d: '2019-11-29', type: 'digital', album: 'strobo', track: 3, tie: null },
    { t: '不可幸力', ko: '후카코료쿠', en: 'Fukakouryoku', alias: 'ふかこうりょく|불가항력', d: '2020-01-22', type: 'digital', album: 'strobo', track: 6, tie: 'cm', tieName: 'Spotify Premium' },
    { t: '僕は今日も', ko: '보쿠와 쿄모', en: 'Boku wa Kyou mo', alias: 'ぼくはきょうも|나는 오늘도', d: '2020-02-07', type: 'digital', album: 'strobo', track: 10, tie: 'cm', tieName: 'マルハニチロ 新中華街' },
    { t: 'life hack', ko: '라이프 핵', en: 'life hack', alias: '라이프핵', d: '2020-03-23', type: 'digital', album: 'strobo', track: 5, tie: 'cm', tieName: 'GLOBAL WORK' },
    { t: 'Bye by me', ko: '바이 바이 미', en: 'Bye by me', alias: '바이바이미', d: '2020-04-18', type: 'digital', album: 'strobo', track: 11, tie: 'drama', tieName: '捨ててよ、安達さん。' },
    { t: '灯火', ko: '토모시비', en: 'Tomoshibi', alias: 'ともしび|등불', d: '2020-04-27', type: 'digital', album: 'strobo', track: 2, tie: 'drama', tieName: '東京ラブストーリー' },
    { t: '怪獣の花唄', ko: '카이주노 하나우타', en: 'Kaiju no Hanauta', alias: 'かいじゅうのはなうた|괴수의 꽃노래', d: '2020-05-11', type: 'digital', album: 'strobo', track: 4, tie: 'cm', tieName: 'マルハニチロ WILDish' },
    { t: 'soramimi', ko: '소라미미', en: 'soramimi', alias: 'そらみみ|空耳|환청', d: '2020-05-27', type: 'album', album: 'strobo', track: 7, tie: null },
    { t: 'napori', ko: '나포리', en: 'napori', alias: 'ナポリ|나폴리', d: '2020-05-27', type: 'album', album: 'strobo', track: 9, tie: 'cm', tieName: 'ブルボン アルフォート' },
    /* ---- replica Disc 2 (2020~2023 배포 싱글) ---- */
    { t: '世界の秘密', ko: '세카이노 히미츠', en: 'Sekai no Himitsu', alias: 'せかいのひみつ|세계의 비밀', d: '2020-12-27', type: 'digital', album: 'replica', track: 17, tie: 'drama', tieName: 'こころのフフフ' },
    { t: '融解sink', ko: '유카이 싱크', en: 'Yukai sink', alias: 'ゆうかいsink|융해 싱크', d: '2021-02-24', type: 'digital', album: 'replica', track: 18, tie: null },
    { t: 'しわあわせ', ko: '시와아와세', en: 'Shiwaawase', d: '2021-04-11', type: 'digital', album: 'replica', track: 19, tie: 'cm', tieName: '首都医校・大阪医専・名古屋医専' },
    { t: 'benefits', ko: '베네핏츠', en: 'benefits', alias: '베네핏', d: '2021-06-12', type: 'digital', album: 'replica', track: 20, tie: null },
    { t: '花占い', ko: '하나우라나이', en: 'Hanauranai', alias: 'はなうらない|꽃점', d: '2021-07-05', type: 'digital', album: 'replica', track: 21, tie: 'drama', tieName: 'ボクの殺意が恋をした' },
    { t: 'Tokimeki', ko: '토키메키', en: 'Tokimeki', alias: 'ときめき|설렘', d: '2021-09-22', type: 'digital', album: 'replica', track: 22, tie: 'cm', tieName: 'トヨタ カローラクロス' },
    { t: '泣き地蔵', ko: '나키지조', en: 'Nakijizo', alias: 'なきじぞう|우는 지장보살', d: '2021-10-19', type: 'digital', album: 'replica', track: 23, tie: null },
    { t: '踊り子', ko: '오도리코', en: 'Odoriko', alias: 'おどりこ|무희', d: '2021-11-17', type: 'digital', album: 'replica', track: 24, tie: null },
    /* ---- 裸の勇者 EP (2022) ---- */
    { t: '裸の勇者', ko: '하다카노 유샤', en: 'Hadaka no Yusha', alias: 'はだかのゆうしゃ|벌거벗은 용사', d: '2022-01-07', type: 'digital', album: '裸の勇者', track: 1, tie: 'anime', tieName: '王様ランキング' },
    { t: '二人話', ko: '후타리바나시', en: 'Futaribanashi', alias: 'ふたりばなし|두 사람 이야기', d: '2022-02-23', type: 'ep', album: '裸の勇者', track: 2, tie: null },
    { t: 'HERO', ko: '히어로', en: 'HERO', d: '2022-02-23', type: 'ep', album: '裸の勇者', track: 3, tie: null },
    { t: 'おもかげ', ko: '오모카게', en: 'Omokage', alias: 'おもかげ -self cover-|모습', d: '2022-02-23', type: 'ep', album: '裸の勇者', track: 4, tie: 'drama', tieName: '事件は、その周りで起きている' },
    /* ---- 2022 ~ 2023 배포 싱글 ---- */
    { t: '恋風邪にのせて', ko: '코이카제니 노세테', en: 'Koikaze ni Nosete', alias: 'こいかぜにのせて|사랑 감기에 실어', d: '2022-03-07', type: 'digital', album: 'replica', track: 26, tie: 'tv', tieName: '彼とオオカミちゃんには騙されない' },
    { t: '走馬灯', ko: '소마토', en: 'Soumatou', alias: 'そうまとう|주마등', d: '2022-07-11', type: 'digital', album: 'replica', track: 27, tie: null },
    { t: 'mabataki', ko: '마바타키', en: 'mabataki', alias: 'まばたき|눈 깜박임', d: '2022-09-10', type: 'digital', album: 'replica', track: 28, tie: 'cm', tieName: 'サントリー ボス カフェイン' },
    { t: 'CHAINSAW BLOOD', ko: '체인소 블러드', en: 'CHAINSAW BLOOD', alias: '체인쏘 블러드', d: '2022-10-12', type: 'digital', album: 'replica', track: 29, tie: 'anime', tieName: 'チェンソーマン' },
    { t: '瞳惚れ', ko: '히토미보레', en: 'Hitomibore', alias: 'ひとみぼれ|눈동자에 반하다', d: '2022-10-28', type: 'digital', album: 'replica', track: 30, tie: 'drama', tieName: 'ジャパニーズスタイル' },
    { t: '忘れ物', ko: '와스레모노', en: 'Wasuremono', alias: 'わすれもの|잊은 물건', d: '2022-11-14', type: 'digital', album: 'replica', track: 31, tie: 'cm', tieName: 'マクドナルド「時をかけるバーガー」' },
    { t: '置き手紙', ko: '오키테가미', en: 'Okitegami', alias: 'おきてがみ|남긴 편지', d: '2022-11-28', type: 'digital', album: 'replica', track: 32, tie: 'cm', tieName: 'Morisawa Fonts' },
    { t: 'まぶた', ko: '마부타', en: 'Mabuta', alias: '눈꺼풀', d: '2023-01-10', type: 'digital', album: 'replica', track: 33, tie: 'drama', tieName: '女神の教室〜リーガル青春白書〜' },
    { t: 'そんなbitterな話', ko: '손나 비터나 하나시', en: 'Sonna bitter na Hanashi', alias: 'そんなビターなはなし|그런 bitter한 이야기', d: '2023-03-13', type: 'digital', album: 'replica', track: 34, tie: 'tv', tieName: '花束とオオカミちゃんには騙されない' },
    { t: 'ZERO', ko: '제로', en: 'ZERO', d: '2023-09-29', type: 'digital', album: 'replica', track: 2, tie: 'cm', tieName: 'Spotify' },
    { t: 'トドメの一撃', ko: '토도메노 이치게키', en: 'Todome no Ichigeki', alias: 'とどめのいちげき|최후의 일격|トドメの一撃 feat. Cory Wong', d: '2023-10-08', type: 'digital', album: 'replica', track: 35, tie: 'anime', tieName: 'SPY×FAMILY Season2' },
    { t: '呼吸のように', ko: '코큐노 요니', en: 'Kokyu no You ni', alias: 'こきゅうのように|호흡처럼', d: '2023-11-08', type: 'digital', album: 'replica', track: 12, tie: 'movie', tieName: '正欲' },
    /* ---- replica Disc 1 (2023) ---- */
    { t: '美電球', ko: '비덴큐', en: 'Bidenkyu', alias: 'びでんきゅう|미전구', d: '2023-11-15', type: 'album', album: 'replica', track: 3, tie: 'tv', tieName: 'サタデーステーション' },
    { t: 'カーニバル', ko: '카니발', en: 'Carnival', d: '2023-11-15', type: 'album', album: 'replica', track: 4, tie: 'drama', tieName: '御手洗家、炎上する' },
    { t: '1リッター分の愛をこめて', ko: '이치릿타분노 아이오 코메테', en: '1 Liter-bun no Ai wo Komete', alias: '1리터만큼의 사랑을 담아', d: '2023-11-15', type: 'album', album: 'replica', track: 5, tie: null },
    { t: '常熱', ko: '조네츠', en: 'Jounetsu', alias: 'じょうねつ|상열', d: '2023-11-15', type: 'album', album: 'replica', track: 6, tie: 'cm', tieName: 'ゼクシィ' },
    { t: '宮', ko: '미야코', en: 'Miyako', alias: 'みやこ|궁', d: '2023-11-15', type: 'album', album: 'replica', track: 8, tie: null },
    { t: '黒子', ko: '호쿠로', en: 'Hokuro', alias: 'ほくろ|점', d: '2023-11-15', type: 'album', album: 'replica', track: 9, tie: null },
    { t: '逆光', ko: '갹코', en: 'Gyakko', alias: 'ぎゃっこう|역광|逆光 - replica -', d: '2023-11-15', type: 'album', album: 'replica', track: 10, tie: 'cm', tieName: 'KATE「LIGHTS ON SHADOW.」' },
    { t: 'NEO JAPAN', ko: '네오 재팬', en: 'NEO JAPAN', d: '2023-11-15', type: 'album', album: 'replica', track: 11, tie: null },
    { t: 'replica', ko: '레플리카', en: 'replica', d: '2023-11-15', type: 'album', album: 'replica', track: 15, tie: null },
    { t: 'pained', ko: '페인드', en: 'pained', d: '2023-11-15', type: 'album', album: 'replica', track: 16, tie: null },
    /* ---- 2024 ---- */
    { t: 'タイムパラドックス', ko: '타임 패러독스', en: 'Time Paradox', alias: '타임파라독스', d: '2024-01-07', type: 'digital', album: null, tie: 'movie', tieName: '映画ドラえもん のび太の地球交響楽' },
    { t: 'ホムンクルス', ko: '호문쿨루스', en: 'Homunculus', d: '2024-07-05', type: 'digital', album: null, tie: 'movie', tieName: '僕のヒーローアカデミア THE MOVIE ユアネクスト' },
    { t: 'Gift', ko: '기프트', en: 'Gift', d: '2024-08-03', type: 'digital', album: null, tie: 'movie', tieName: '僕のヒーローアカデミア THE MOVIE ユアネクスト' },
    { t: 'GORILLA芝居', ko: '고릴라 시바이', en: 'GORILLA Shibai', alias: 'ゴリラしばい|고릴라 연극', d: '2024-09-25', type: 'digital', album: null, tie: null },
    { t: '風神', ko: '후진', en: 'Fujin', alias: 'ふうじん|풍신', d: '2024-10-12', type: 'digital', album: null, tie: 'drama', tieName: 'ライオンの隠れ家' },
    /* ---- 2025 ---- */
    { t: '走れSAKAMOTO', ko: '하시레 사카모토', en: 'Hashire SAKAMOTO', alias: 'はしれさかもと|달려라 사카모토', d: '2025-01-12', type: 'digital', album: null, tie: 'anime', tieName: 'SAKAMOTO DAYS' },
    { t: 'Somebody help us', ko: '섬바디 헬프 어스', en: 'Somebody help us', d: '2025-02-16', type: 'digital', album: null, tie: 'anime', tieName: 'SAKAMOTO DAYS' },
    { t: '人生はミックスナッツの組み合わせ', ko: '진세이와 믹스 넛츠노 쿠미아와세', en: 'Jinsei wa Mix Nuts no Kumiawase', alias: '인생은 믹스넛의 조합', d: '2025-03-26', type: 'digital', album: null, tie: null },
    { t: '僕にはどうしてわかるんだろう', ko: '보쿠니와 도시테 와카룬다로', en: 'Boku ni wa Doushite Wakarundarou', alias: 'ぼくにはどうしてわかるんだろう|나는 왜 알 수 있는 걸까', d: '2025-04-25', type: 'digital', album: null, tie: 'drama', tieName: 'PJ 〜航空救難団〜' },
    { t: 'まじで、サヨナラべぃべぃ', ko: '마지데 사요나라 베이베이', en: 'Majide, Sayonara Baby Baby', alias: '진짜로 안녕 베이베이', d: '2025-05-22', type: 'digital', album: null, tie: 'movie', tieName: 'ラストシーン' },
    { t: '再会', ko: '사이카이', en: 'Saikai', alias: 'さいかい|재회', d: '2025-07-13', type: 'digital', album: null, tie: 'anime', tieName: '光が死んだ夏' },
    { t: 'ずっとラブソング', ko: '즛토 러브송', en: 'Zutto Love Song', alias: '계속 러브송', d: '2025-08-27', type: 'digital', album: null, tie: null },
    { t: '忘れる前に', ko: '와스레루 마에니', en: 'Wasureru Mae ni', alias: 'わすれるまえに|잊기 전에', d: '2025-09-30', type: 'digital', album: null, tie: 'cm', tieName: '東京メトロ「Find my Tokyo.」' },
    { t: '偉生人', ko: '이세이진', en: 'Iseijin', alias: 'いせいじん', d: '2025-10-29', type: 'digital', album: null, tie: 'drama', tieName: '青天を衝け' },
    { t: '軌跡', ko: '키세키', en: 'Kiseki', alias: 'きせき|궤적', d: '2025-11-26', type: 'digital', album: null, tie: 'tv', tieName: '世界遺産' },
    { t: '呼び声', ko: '요비고에', en: 'Yobigoe', alias: 'よびごえ|부르는 소리', d: '2025-12-24', type: 'digital', album: null, tie: 'tv', tieName: '18祭' },
    /* ---- 2026 ---- */
    { t: 'シンギュラリティ', ko: '싱귤래리티', en: 'Singularity', d: '2026-02-11', type: 'digital', album: null, tie: 'other', tieName: 'テート美術館 ― YBA & BEYOND' },
    { t: 'The SILENCE', ko: '더 사일런스', en: 'The SILENCE', d: '2026-03-29', type: 'digital', album: null, tie: null },
    { t: '飛ぶ時', ko: '토부 토키', en: 'Tobu Toki', alias: 'とぶとき|날 때', d: '2026-04-12', type: 'digital', album: null, tie: 'anime', tieName: '黄泉のツガイ' },
    { t: '飛ぼうよ', ko: '토보요', en: 'Tobouyo', alias: 'とぼうよ|날자', d: '2026-04-12', type: 'digital', album: null, tie: null },
    { t: 'イデアが溢れて眠れない', ko: '이데아가 아후레테 네무레나이', en: 'Idea ga Afurete Nemurenai', alias: '이데아가 넘쳐서 잠들 수 없어', d: '2026-04-20', type: 'digital', album: null, tie: 'drama', tieName: 'さばの缶づめ、宇宙へいく' },
    { t: '気まぐれ', ko: '키마구레', en: 'Kimagure', alias: 'きまぐれ|변덕', d: '2026-05-27', type: 'digital', album: null, tie: 'cm', tieName: 'メンズビオレ' },
    { t: 'かげろう', ko: '카게로', en: 'Kagerou', alias: '아지랑이', d: '2026-07-15', type: 'digital', album: null, tie: 'tv', tieName: '熱闘甲子園' },
  ],
});
