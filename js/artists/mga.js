'use strict';
/* =========================================================
 * Mrs. GREEN APPLE 전체 곡 데이터 (정규 · 미니 앨범, 싱글 표제곡 · 커플링, 배포 싱글, 베스트 신곡)
 *
 * 출처 : 일본어 위키백과 (Mrs. GREEN APPLEの作品 · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : 인터루드, 리믹스 · 다시 녹음한 버전, 공연장 한정 CD 『Introduction』
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)    dq : 날짜가 확실하지 않음 → "어느 곡이 먼저?" 에서 뺀다
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범곡) / best (베스트 앨범 신곡)
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 · 베스트(신곡일 때) 앨범, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 확인된 타이업만 적는다 (anime / drama / movie / cm / tv / game / other), 모르면 null → 힌트로 쓰지 않음
 * ========================================================= */
ARTISTS.push({
  id: 'mga',
  name: 'Mrs. GREEN APPLE',
  local: { ko: '미세스 그린 애플', ja: 'ミセス', en: 'Mrs. GREEN APPLE' },
  color: '#3fae3a',
  color2: '#a6e23c',
  eras: [
    { label: 'Phase 1', to: '2021-12-31' },
    { label: 'Phase 2', from: '2022-01-01' },
  ],
  albums: {
    Progressive: { d: '2015-02-18', kind: 'mini' },
    Variety: { d: '2015-07-08', kind: 'mini' },
    TWELVE: { d: '2016-01-13', kind: 'full' },
    'Mrs. GREEN APPLE': { d: '2017-01-11', kind: 'full' },
    ENSEMBLE: { d: '2018-04-18', kind: 'full' },
    Attitude: { d: '2019-10-02', kind: 'full' },
    '5': { d: '2020-07-08', kind: 'best' },
    Unity: { d: '2022-07-08', kind: 'mini' },
    ANTENNA: { d: '2023-07-05', kind: 'full' },
    POPS: { d: '2026-09-30', kind: 'full' },
  },
  songs: [
    /* ---- Progressive (2015) ---- */
    { t: '我逢人', ko: '가호진', en: 'Gahojin', alias: 'がほうじん', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 1, tie: null },
    { t: 'ナニヲナニヲ', ko: '나니오나니오', en: 'Naniwo Naniwo', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 2, tie: null },
    { t: 'CONFLICT', ko: '컨플릭트', en: 'CONFLICT', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 3, tie: null },
    { t: 'アンゼンパイ', ko: '안젠파이', en: 'Anzenpai', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 4, tie: null },
    { t: '日々と君', ko: '히비토키미', en: 'Hibi to Kimi', alias: 'ひびときみ|나날과 너', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 5, tie: null },
    { t: 'WaLL FloWeR', ko: '월플라워', en: 'Wall Flower', d: '2015-02-18', type: 'ep', album: 'Progressive', track: 6, tie: null },
    /* ---- Variety (2015) ---- */
    { t: 'StaRt', ko: '스타트', en: 'StaRt', d: '2015-07-08', type: 'ep', album: 'Variety', track: 1, tie: null },
    { t: 'リスキーゲーム', ko: '리스키 게임', en: 'Risky Game', d: '2015-07-08', type: 'ep', album: 'Variety', track: 2, tie: null },
    { t: 'L.P', ko: '엘피', en: 'L.P', d: '2015-07-08', type: 'ep', album: 'Variety', track: 3, tie: null },
    { t: 'VIP', ko: '브이아이피', en: 'VIP', d: '2015-07-08', type: 'ep', album: 'Variety', track: 4, tie: null },
    { t: 'ゼンマイ', ko: '젠마이', en: 'Zenmai', d: '2015-07-08', type: 'ep', album: 'Variety', track: 5, tie: null },
    { t: '道徳と皿', ko: '도토쿠토 사라', en: 'Doutoku to Sara', alias: 'どうとくとさら|도덕과 접시', d: '2015-07-08', type: 'ep', album: 'Variety', track: 6, tie: null },
    /* ---- Speaking (2015) ---- */
    { t: 'Speaking', ko: '스피킹', en: 'Speaking', d: '2015-12-16', type: 'single', album: 'TWELVE', track: 2, tie: 'anime', tieName: '遊☆戯☆王ARC-V' },
    { t: '恋と吟', ko: '코이토 우타', en: 'Koi to Uta', alias: 'こいとうた|恋と吟(うた)', d: '2015-12-16', type: 'coupling', rel: 'Speaking', album: null, tie: null },
    { t: 'えほん', ko: '에혼', en: 'Ehon', alias: '그림책', d: '2015-12-16', type: 'coupling', rel: 'Speaking', album: null, tie: null },
    /* ---- TWELVE (2016) ---- */
    { t: '愛情と矛先', ko: '아이조토 호코사키', en: 'Aijou to Hokosaki', alias: 'あいじょうとほこさき|애정과 창끝', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 1, tie: null },
    { t: 'パブリック', ko: '퍼블릭', en: 'Public', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 3, tie: null },
    { t: '藍', ko: '아오', en: 'Ao', alias: 'あお|藍(あお)|쪽빛', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 4, tie: null },
    { t: 'キコリ時計', ko: '키코리도케이', en: 'Kikori Dokei', alias: 'きこりどけい|나무꾼 시계', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 5, tie: null },
    { t: '私', ko: '와타시', en: 'Watashi', alias: 'わたし', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 6, tie: 'cm', tieName: 'キリン 午後の紅茶' },
    { t: 'No.7', ko: '넘버 세븐', en: 'No.7', alias: 'number seven|넘버세븐|no7', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 7, tie: null },
    { t: 'ミスカサズ', ko: '미스카사즈', en: 'Misukasazu', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 8, tie: null },
    { t: 'SimPle', ko: '심플', en: 'SimPle', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 9, tie: null },
    { t: 'Hug', ko: '허그', en: 'Hug', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 11, tie: null },
    { t: 'HeLLo', ko: '헬로', en: 'HeLLo', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 12, tie: null },
    { t: '庶幾の唄', ko: '쇼키노 우타', en: 'Shoki no Uta', alias: 'しょきのうた', d: '2016-01-13', type: 'album', album: 'TWELVE', track: 13, tie: 'cm', tieName: '大塚製薬 カロリーメイト' },
    /* ---- サママ・フェスティバル！ (2016) ---- */
    { t: 'サママ・フェスティバル！', ko: '사마마 페스티벌', en: 'Samama Festival!', d: '2016-06-15', type: 'single', album: 'Mrs. GREEN APPLE', track: 8, tie: 'cm', tieName: '日本工学院' },
    { t: 'umbrella', ko: '엄브렐라', en: 'umbrella', alias: '우산', d: '2016-06-15', type: 'coupling', rel: 'サママ・フェスティバル！', album: 'Mrs. GREEN APPLE', track: 12, tie: null },
    { t: 'ノニサクウタ', ko: '노니사쿠 우타', en: 'Nonisaku Uta', d: '2016-06-15', type: 'coupling', rel: 'サママ・フェスティバル！', album: null, tie: null },
    /* ---- In the Morning (2016) ---- */
    { t: 'In the Morning', ko: '인 더 모닝', en: 'In the Morning', d: '2016-11-02', type: 'single', album: 'Mrs. GREEN APPLE', track: 2, tie: 'tv', tieName: '#nakedEve' },
    { t: 'ツキマシテハ', ko: '츠키마시테와', en: 'Tsukimashitewa', d: '2016-11-02', type: 'coupling', rel: 'In the Morning', album: null, tie: null },
    { t: 'Oz', ko: '오즈', en: 'Oz', d: '2016-11-02', type: 'coupling', rel: 'In the Morning', album: 'Mrs. GREEN APPLE', track: 9, tie: 'tv', tieName: '新潟一番サンデープラス' },
    /* ---- Mrs. GREEN APPLE (2017) ---- */
    { t: 'Lion', ko: '라이온', en: 'Lion', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 1, tie: null },
    { t: 'おもちゃの兵隊', ko: '오모차노 헤이타이', en: 'Omocha no Heitai', alias: 'おもちゃのへいたい|장난감 병정', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 3, tie: null },
    { t: '絶世生物', ko: '젯세이세이부츠', en: 'Zessei Seibutsu', alias: 'ぜっせいせいぶつ|제세이세이부츠|절세생물', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 4, tie: null },
    { t: 'soFt-dRink', ko: '소프트 드링크', en: 'soft drink', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 5, tie: 'movie', tieName: 'ポエトリーエンジェル' },
    { t: '鯨の唄', ko: '쿠지라노 우타', en: 'Kujira no Uta', alias: 'くじらのうた|고래의 노래', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 6, tie: null },
    { t: 'うブ', ko: '우부', en: 'Ubu', alias: 'うぶ', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 7, tie: null },
    { t: 'Just a Friend', ko: '저스트 어 프렌드', en: 'Just a Friend', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 10, tie: 'cm', tieName: 'ハウステンボス' },
    { t: 'FACTORY', ko: '팩토리', en: 'FACTORY', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 11, tie: null },
    { t: 'JOURNEY', ko: '저니', en: 'JOURNEY', d: '2017-01-11', type: 'album', album: 'Mrs. GREEN APPLE', track: 13, tie: null },
    /* ---- どこかで日は昇る (2017) ---- */
    { t: 'どこかで日は昇る', ko: '도코카데 히와 노보루', en: 'Dokoka de Hi wa Noboru', alias: 'どこかでひはのぼる|어딘가에서 해는 뜬다', d: '2017-05-03', type: 'single', album: 'ENSEMBLE', track: 13, tie: 'movie', tieName: '笑う招き猫' },
    { t: 'スマイロブドリーマ', ko: '스마이로브 드리마', en: 'Smilove Dreamer', d: '2017-05-03', type: 'coupling', rel: 'どこかで日は昇る', album: 'ENSEMBLE', track: 8, tie: 'drama', tieName: '笑う招き猫' },
    { t: 'SwitCh', ko: '스위치', en: 'Switch', d: '2017-05-03', type: 'coupling', rel: 'どこかで日は昇る', album: null, tie: 'tv', tieName: 'ニュース シブ5時' },
    /* ---- WanteD! WanteD! (2017) ---- */
    { t: 'WanteD! WanteD!', ko: '원티드 원티드', en: 'Wanted Wanted', d: '2017-08-30', type: 'single', album: 'ENSEMBLE', track: 3, tie: 'drama', tieName: '僕たちがやりました' },
    { t: 'On My MiND', ko: '온 마이 마인드', en: 'On My Mind', d: '2017-08-30', type: 'coupling', rel: 'WanteD! WanteD!', album: 'ENSEMBLE', track: 12, tie: 'anime', tieName: 'ナナマル サンバツ' },
    { t: '光のうた', ko: '히카리노 우타', en: 'Hikari no Uta', alias: 'ひかりのうた|빛의 노래', d: '2017-08-30', type: 'coupling', rel: 'WanteD! WanteD!', album: null, tie: null },
    { t: 'WHOO WHOO WHOO', ko: '후 후 후', en: 'Whoo Whoo Whoo', alias: '우우우', d: '2017-12-04', type: 'digital', album: 'ENSEMBLE', track: 7, tie: null },
    /* ---- Love me, Love you (2018) ---- */
    { t: 'Love me, Love you', ko: '러브 미 러브 유', en: 'Love me Love you', d: '2018-02-14', type: 'single', album: 'ENSEMBLE', track: 1, tie: null },
    { t: '春愁', ko: '슌슈', en: 'Shunshu', alias: 'しゅんしゅう|슌슈우|봄의 수심', d: '2018-02-14', type: 'coupling', rel: 'Love me, Love you', album: null, tie: null },
    { t: 'Log', ko: '로그', en: 'Log', alias: 'Log (feat. 坂口有望)', d: '2018-02-14', type: 'coupling', rel: 'Love me, Love you', album: null, tie: null },
    /* ---- ENSEMBLE (2018) ---- */
    { t: 'PARTY', ko: '파티', en: 'PARTY', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 2, tie: 'other', tieName: '2018 FIFA ワールドカップ ロシア' },
    { t: 'アウフヘーベン', ko: '아우프헤벤', en: 'Aufheben', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 4, tie: null },
    { t: 'はじまり', ko: '하지마리', en: 'Hajimari', alias: 'はじまり feat. キヨサク from MONGOL800|시작', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 5, tie: null },
    { t: 'They are', ko: '데이 아', en: 'They are', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 6, tie: null },
    { t: 'SPLASH!!!', ko: '스플래시', en: 'SPLASH', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 9, tie: 'game', tieName: 'ワンダーグラビティ' },
    { t: 'REVERSE', ko: '리버스', en: 'REVERSE', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 10, tie: null },
    { t: 'Coffee', ko: '커피', en: 'Coffee', d: '2018-04-18', type: 'album', album: 'ENSEMBLE', track: 11, tie: 'drama', tieName: 'I"s' },
    /* ---- 青と夏 (2018) ---- */
    { t: '青と夏', ko: '아오토 나츠', en: 'Ao to Natsu', alias: 'あおとなつ|청과 여름|아오토나츠', d: '2018-08-01', type: 'single', album: 'Attitude', track: 8, tie: 'movie', tieName: '青夏 きみに恋した30日' },
    { t: '点描の唄', ko: '텐뵤노 우타', en: 'Tenbyou no Uta', alias: 'てんびょうのうた|点描の唄 (feat. 井上苑子)|점묘의 노래|텐뵤노우타', d: '2018-08-01', type: 'coupling', rel: '青と夏', album: null, tie: 'movie', tieName: '青夏 きみに恋した30日' },
    { t: 'ア・プリオリ', ko: '아 프리오리', en: 'A Priori', d: '2018-08-01', type: 'coupling', rel: '青と夏', album: null, tie: null },
    /* ---- 僕のこと (2019) ---- */
    { t: '僕のこと', ko: '보쿠노 코토', en: 'Boku no Koto', alias: 'ぼくのこと|나의 것|보쿠노코토', d: '2019-01-09', type: 'single', album: 'Attitude', track: 7, tie: 'other', tieName: '全国高校サッカー選手権' },
    { t: '灯火', ko: '토모시비', en: 'Tomoshibi', alias: 'ともしび|등불', d: '2019-01-09', type: 'coupling', rel: '僕のこと', album: null, tie: null },
    { t: 'Folktale', ko: '포크테일', en: 'Folktale', d: '2019-01-09', type: 'coupling', rel: '僕のこと', album: 'Attitude', track: 17, tie: 'cm', tieName: 'SoftBank' },
    /* ---- ロマンチシズム (2019) ---- */
    { t: 'ロマンチシズム', ko: '로맨티시즘', en: 'Romanticism', alias: '로만치시즘', d: '2019-04-03', type: 'single', album: 'Attitude', track: 12, tie: 'cm', tieName: '資生堂 シーブリーズ' },
    { t: 'How-to', ko: '하우 투', en: 'How to', d: '2019-04-03', type: 'coupling', rel: 'ロマンチシズム', album: 'Attitude', track: 14, tie: 'cm', tieName: 'エアアジア・ジャパン' },
    { t: '月とアネモネ', ko: '츠키토 아네모네', en: 'Tsuki to Anemone', alias: 'つきとあねもね|달과 아네모네', d: '2019-04-03', type: 'coupling', rel: 'ロマンチシズム', album: null, tie: null },
    /* ---- 2019 배포 · Attitude ---- */
    { t: 'インフェルノ', ko: '인페르노', en: 'Inferno', d: '2019-07-18', type: 'digital', album: 'Attitude', track: 3, tie: 'anime', tieName: '炎炎ノ消防隊' },
    { t: "lovin'", ko: '러빈', en: 'lovin', d: '2019-08-24', dq: true, type: 'digital', album: 'Attitude', track: 10, tie: 'tv', tieName: 'めざましどようび' },
    { t: 'CHEERS', ko: '치어스', en: 'CHEERS', d: '2019-09-19', type: 'digital', album: 'Attitude', track: 4, tie: 'cm', tieName: '森永製菓 inゼリー' },
    { t: 'Attitude', ko: '애티튜드', en: 'Attitude', d: '2019-10-02', type: 'album', album: 'Attitude', track: 2, tie: null },
    { t: 'Viking', ko: '바이킹', en: 'Viking', d: '2019-10-02', type: 'album', album: 'Attitude', track: 5, tie: null },
    { t: 'ProPose', ko: '프로포즈', en: 'Propose', d: '2019-10-02', type: 'album', album: 'Attitude', track: 6, tie: null },
    { t: 'クダリ', ko: '쿠다리', en: 'Kudari', d: '2019-10-02', type: 'album', album: 'Attitude', track: 9, tie: null },
    { t: 'Ke-Mo Sah-Bee', ko: '케모사비', en: 'Kemosabe', alias: 'kemosahbee', d: '2019-10-02', type: 'album', album: 'Attitude', track: 11, tie: null },
    { t: '嘘じゃないよ', ko: '우소쟈 나이요', en: 'Uso ja Naiyo', alias: 'うそじゃないよ|거짓말 아니야|우소자나이요', d: '2019-10-02', type: 'album', album: 'Attitude', track: 13, tie: null },
    { t: 'Soup', ko: '수프', en: 'Soup', alias: '스프', d: '2019-10-02', type: 'album', album: 'Attitude', track: 15, tie: null },
    { t: 'Circle', ko: '서클', en: 'Circle', d: '2019-10-02', type: 'album', album: 'Attitude', track: 16, tie: null },
    /* ---- 2020 · 베스트 『5』 ---- */
    { t: 'PRESENT', ko: '프레젠트', en: 'PRESENT', alias: '프레즌트|선물', d: '2020-04-10', type: 'digital', album: '5', track: 18, tie: null },
    { t: 'アボイドノート', ko: '어보이드 노트', en: 'Avoid Note', alias: '아보이도노토', d: '2020-05-27', type: 'best', album: '5', track: 17, tie: null },
    { t: 'スターダム', ko: '스타덤', en: 'Stardom', d: '2020-07-08', dq: true, type: 'best', album: '5', track: 1, tie: null },
    { t: 'Theater', ko: '시어터', en: 'Theater', alias: '씨어터', d: '2020-07-08', type: 'best', album: '5', track: 19, tie: null },
    /* ---- Phase 2 · Unity (2022) ---- */
    { t: 'ニュー・マイ・ノーマル', ko: '뉴 마이 노멀', en: 'New My Normal', d: '2022-03-18', type: 'digital', album: 'Unity', track: 1, tie: null },
    { t: 'ダンスホール', ko: '댄스홀', en: 'Dance Hall', d: '2022-05-24', type: 'digital', album: 'Unity', track: 2, tie: 'tv', tieName: 'めざまし8' },
    { t: 'ブルーアンビエンス', ko: '블루 앰비언스', en: 'Blue Ambience', alias: 'ブルーアンビエンス (feat. asmi)|블루앰비언스', d: '2022-06-14', dq: true, type: 'digital', album: 'Unity', track: 3, tie: 'tv', tieName: '今日、好きになりました。' },
    { t: '君を知らない', ko: '키미오 시라나이', en: 'Kimi wo Shiranai', alias: 'きみをしらない|너를 몰라', d: '2022-07-08', type: 'ep', album: 'Unity', track: 4, tie: null },
    { t: '延々', ko: '엔엔', en: 'Enen', alias: 'えんえん', d: '2022-07-08', type: 'ep', album: 'Unity', track: 5, tie: 'game', tieName: '炎炎ノ消防隊 炎舞ノ章' },
    { t: 'Part of me', ko: '파트 오브 미', en: 'Part of me', d: '2022-07-08', type: 'ep', album: 'Unity', track: 6, tie: null },
    /* ---- Soranji (2022) ---- */
    { t: 'Soranji', ko: '소란지', en: 'Soranji', d: '2022-10-18', type: 'single', album: 'ANTENNA', track: 6, tie: 'movie', tieName: 'ラーゲリより愛を込めて' },
    { t: '私は最強', ko: '와타시와 사이쿄', en: 'Watashi wa Saikyou', alias: 'わたしはさいきょう|나는 최강|와타시와사이쿄', d: '2022-11-09', type: 'coupling', rel: 'Soranji', album: 'ANTENNA', track: 3, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: 'フロリジナル', ko: '플로리지널', en: 'Floriginal', d: '2022-11-09', type: 'coupling', rel: 'Soranji', album: null, tie: 'other', tieName: 'PARFA TUNE' },
    /* ---- ANTENNA (2023) ---- */
    { t: 'ケセラセラ', ko: '케세라세라', en: 'Que Sera Sera', d: '2023-04-25', type: 'digital', album: 'ANTENNA', track: 5, tie: 'drama', tieName: '日曜の夜ぐらいは...' },
    { t: 'Magic', ko: '매직', en: 'Magic', d: '2023-06-13', type: 'digital', album: 'ANTENNA', track: 2, tie: 'cm', tieName: 'コカ・コーラ' },
    { t: 'ANTENNA', ko: '안테나', en: 'ANTENNA', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 1, tie: 'tv', tieName: 'ワールドカップバレー2023' },
    { t: 'Blizzard', ko: '블리자드', en: 'Blizzard', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 4, tie: null },
    { t: 'アンラブレス', ko: '언러브레스', en: 'Unloveless', alias: '안라브레스|언러브리스', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 7, tie: null },
    { t: 'Loneliness', ko: '론리니스', en: 'Loneliness', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 8, tie: null },
    { t: 'norn', ko: '노른', en: 'norn', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 9, tie: null },
    { t: '橙', ko: '다이다이', en: 'Daidai', alias: 'だいだい|오렌지색|등', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 10, tie: 'cm', tieName: '旭化成' },
    { t: 'Doodle', ko: '두들', en: 'Doodle', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 11, tie: 'cm', tieName: '花王 メリット' },
    { t: 'BFF', ko: '비에프에프', en: 'BFF', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 12, tie: null },
    { t: 'Feeling', ko: '필링', en: 'Feeling', d: '2023-07-05', type: 'album', album: 'ANTENNA', track: 13, tie: 'cm', tieName: 'カンロ ピュレグミ' },
    /* ---- 2024 ~ 2025 배포 싱글 ---- */
    { t: 'ナハトムジーク', ko: '나하트무지크', en: 'Nachtmusik', d: '2024-01-17', type: 'digital', album: null, tie: 'movie', tieName: 'サイレントラブ' },
    { t: 'ライラック', ko: '라일락', en: 'Lilac', alias: '라이락쿠', d: '2024-04-12', type: 'digital', album: null, tie: 'anime', tieName: '忘却バッテリー' },
    { t: 'Dear', ko: '디어', en: 'Dear', d: '2024-05-20', type: 'digital', album: null, tie: 'movie', tieName: 'ディア・ファミリー' },
    { t: 'コロンブス', ko: '콜럼버스', en: 'Columbus', alias: '코롬부스', d: '2024-06-12', type: 'digital', album: null, tie: null },
    { t: 'アポロドロス', ko: '아폴로도로스', en: 'Apollodorus', alias: 'apollodoros', d: '2024-07-03', type: 'digital', album: null, tie: null },
    { t: 'familie', ko: '파밀리에', en: 'familie', alias: '패밀리|훼밀리에', d: '2024-08-09', type: 'digital', album: null, tie: 'cm', tieName: 'Honda FREED' },
    { t: 'ビターバカンス', ko: '비터 바캉스', en: 'Bitter Vacances', d: '2024-11-29', type: 'digital', album: null, tie: 'movie', tieName: '聖☆おにいさん THE MOVIE' },
    { t: 'ダーリン', ko: '달링', en: 'Darling', alias: '다링', d: '2025-01-20', type: 'digital', album: null, tie: 'tv', tieName: 'NHK Mrs. GREEN APPLE 18祭' },
    { t: 'クスシキ', ko: '쿠스시키', en: 'Kusushiki', d: '2025-04-05', type: 'digital', album: null, tie: 'anime', tieName: '薬屋のひとりごと' },
    { t: '天国', ko: '텐고쿠', en: 'Tengoku', alias: 'てんごく|천국|heaven', d: '2025-05-02', type: 'digital', album: null, tie: 'movie', tieName: '#真相をお話しします' },
    { t: 'breakfast', ko: '브렉퍼스트', en: 'breakfast', alias: '아침밥', d: '2025-06-04', type: 'digital', album: null, tie: 'tv', tieName: 'サン!シャイン' },
    /* ---- POPS (2026) ---- */
    { t: 'Carrying Happiness', ko: '캐링 해피니스', en: 'Carrying Happiness', d: '2025-07-19', type: 'digital', album: 'POPS', track: 14, tie: 'other', tieName: '東京ディズニーリゾート' },
    { t: '夏の影', ko: '나츠노 카게', en: 'Natsu no Kage', alias: 'なつのかげ|여름의 그림자|나츠노카게', d: '2025-08-11', type: 'digital', album: 'POPS', track: 15, tie: 'cm', tieName: 'キリン 午後の紅茶' },
    { t: 'GOOD DAY', ko: '굿 데이', en: 'GOOD DAY', d: '2025-09-28', type: 'digital', album: 'POPS', track: 6, tie: 'cm', tieName: 'キリン グッドエール' },
    { t: 'lulu.', ko: '루루', en: 'lulu', d: '2026-01-12', type: 'digital', album: 'POPS', track: 8, tie: 'anime', tieName: '葬送のフリーレン' },
    { t: '風と町', ko: '카제토 마치', en: 'Kaze to Machi', alias: 'かぜとまち|바람과 마을|카제토마치', d: '2026-04-13', type: 'digital', album: 'POPS', track: 9, tie: 'drama', tieName: '風、薫る' },
    { t: 'Brand New', ko: '브랜드 뉴', en: 'Brand New', d: '2026-07-13', type: 'digital', album: 'POPS', track: 1, tie: 'movie', tieName: 'スパイダーマン：ブランド・ニュー・デイ' },
    { t: '共犯', ko: '쿄한', en: 'Kyouhan', alias: 'きょうはん|공범', d: '2026-09-30', type: 'album', album: 'POPS', track: 2, tie: null },
    { t: 'シンデレラ', ko: '신데렐라', en: 'Cinderella', d: '2026-09-30', type: 'album', album: 'POPS', track: 3, tie: null },
    { t: '本と彗星', ko: '혼토 스이세이', en: 'Hon to Suisei', alias: 'ほんとすいせい|책과 혜성', d: '2026-09-30', type: 'album', album: 'POPS', track: 4, tie: 'movie', tieName: '君の話' },
    { t: 'ア・ポステリオリ', ko: '아 포스테리오리', en: 'A Posteriori', d: '2026-09-30', type: 'album', album: 'POPS', track: 5, tie: null },
    { t: 'エピソード', ko: '에피소드', en: 'Episode', d: '2026-09-30', type: 'album', album: 'POPS', track: 7, tie: null },
    { t: 'Really Really', ko: '리얼리 리얼리', en: 'Really Really', d: '2026-09-30', type: 'album', album: 'POPS', track: 10, tie: null },
    { t: 'プロジェクト4', ko: '프로젝트 4', en: 'Project 4', alias: '프로젝트포|프로젝트 포', d: '2026-09-30', type: 'album', album: 'POPS', track: 11, tie: null },
    { t: '瞞し', ko: '마야카시', en: 'Mayakashi', alias: 'まやかし', d: '2026-09-30', type: 'album', album: 'POPS', track: 12, tie: null },
    { t: '禁じた遊び', ko: '킨지타 아소비', en: 'Kinjita Asobi', alias: 'きんじたあそび|금지된 놀이', d: '2026-09-30', type: 'album', album: 'POPS', track: 13, tie: null },
    { t: 'Variety', ko: '버라이어티', en: 'Variety', d: '2026-09-30', type: 'album', album: 'POPS', track: 16, tie: null },
  ],
});
