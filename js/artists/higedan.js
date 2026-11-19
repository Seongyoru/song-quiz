'use strict';
/* =========================================================
 * Official髭男dism 전체 곡 데이터 (미니 앨범 · EP, 정규 앨범, 싱글 표제곡 · 커플링, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (Official髭男dism · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : 인스트루멘털, 어쿠스틱 · 라이브 버전, Interlude(052519 · I'm home), 다른 가수에게 준 곡
 * 인디 시절 미니 앨범(『ラブとピースは君の中』『MAN IN THE MIRROR』『What's Going On?』)은 위키백과에 수록곡 표가 없어 트랙 번호를 비운다
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범 · EP 곡) / best (베스트 앨범 신곡)
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 앨범 · EP, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 위키백과 타이업 표에 있는 것만 (anime / drama / movie / cm / tv / game / other), 없으면 null
 * ========================================================= */
ARTISTS.push({
  id: 'higedan',
  name: 'Official髭男dism',
  local: { ko: '히게단', ja: 'ヒゲダン', en: 'Official HIGE DANdism' },
  color: '#2b4c8c',
  color2: '#f0b429',
  albums: {
    'ラブとピースは君の中': { d: '2015-04-22', kind: 'mini' },
    'MAN IN THE MIRROR': { d: '2016-06-15', kind: 'mini' },
    "What's Going On?": { d: '2016-11-02', kind: 'mini' },
    'レポート': { d: '2017-04-19', kind: 'mini' },
    'エスカパレード': { d: '2018-04-11', kind: 'full' },
    'Stand By You EP': { d: '2018-10-17', kind: 'mini' },
    Traveler: { d: '2019-10-09', kind: 'full' },
    'HELLO EP': { d: '2020-08-05', kind: 'mini' },
    Editorial: { d: '2021-08-18', kind: 'full' },
    'ミックスナッツ EP': { d: '2022-06-22', kind: 'mini' },
    Rejoice: { d: '2024-07-24', kind: 'full' },
  },
  songs: [
    /* ---- ラブとピースは君の中 (2015) ---- */
    { t: '恋の前ならえ', ko: '코이노 마에나라에', en: 'Koi no Mae Narae', alias: 'こいのまえならえ|사랑 앞으로 나란히', d: '2015-04-22', type: 'ep', album: 'ラブとピースは君の中', track: null, tie: 'tv', tieName: '着席!マナビーヤβ' },
    { t: 'SWEET TWEET', ko: '스위트 트윗', en: 'SWEET TWEET', d: '2015-04-22', type: 'ep', album: 'ラブとピースは君の中', track: null, tie: 'other', tieName: '島根大学 Promotion Video' },
    { t: '夕暮れ沿い', ko: '유구레조이', en: 'Yuugure Zoi', alias: 'ゆうぐれぞい|해질녘을 따라', d: '2015-04-22', type: 'ep', album: 'ラブとピースは君の中', track: null, tie: null },
    /* ---- MAN IN THE MIRROR (2016) ---- */
    { t: 'コーヒーとシロップ', ko: '코히토 시럽', en: 'Coffee to Syrup', alias: 'こーひーとしろっぷ|커피와 시럽', d: '2016-06-15', type: 'ep', album: 'MAN IN THE MIRROR', track: null, tie: null },
    { t: '日曜日のラブレター', ko: '니치요비노 러브레터', en: 'Nichiyoubi no Love Letter', alias: 'にちようびのらぶれたー|일요일의 러브레터', d: '2016-06-15', type: 'ep', album: 'MAN IN THE MIRROR', track: null, tie: null },
    { t: 'ゼロのままでいられたら', ko: '제로노 마마데 이라레타라', en: 'Zero no Mama de Iraretara', alias: 'ぜろのままでいられたら|제로인 채로 있을 수 있다면', d: '2016-06-15', type: 'ep', album: 'MAN IN THE MIRROR', track: null, tie: null },
    { t: 'ニットの帽子', ko: '닛토노 보시', en: 'Knit no Boushi', alias: 'にっとのぼうし|니트 모자', d: '2016-06-15', type: 'ep', album: 'MAN IN THE MIRROR', track: null, tie: null },
    /* ---- What's Going On? (2016) ---- */
    { t: "What's Going On?", ko: '왓츠 고잉 온', en: "What's Going On?", d: '2016-11-02', type: 'ep', album: "What's Going On?", track: 1, tie: 'other', tieName: '鷹の爪団のSHIROZEME in 国宝松江城 2016' },
    { t: '黄色い車', ko: '키이로이 쿠루마', en: 'Kiiroi Kuruma', alias: 'きいろいくるま|노란 차', d: '2016-11-02', type: 'ep', album: "What's Going On?", track: null, tie: 'anime', tieName: '秘密結社鷹の爪GT' },
    { t: 'ダーリン。', ko: '달링', en: 'Darling', alias: 'だーりん|ダーリン', d: '2016-11-02', type: 'ep', album: "What's Going On?", track: null, tie: null },
    /* ---- レポート (2017) ---- */
    { t: '始まりの朝', ko: '하지마리노 아사', en: 'Hajimari no Asa', alias: 'はじまりのあさ|시작의 아침', d: '2017-04-19', type: 'ep', album: 'レポート', track: 1, tie: 'tv', tieName: '前略、大徳さん' },
    { t: '犬かキャットかで死ぬまで喧嘩しよう！', ko: '이누카 캣토카데 시누마데 켄카시요', en: 'Inu ka Cat ka de Shinu made Kenka Shiyou!', alias: 'いぬかきゃっとかでしぬまでけんかしよう|개냐 고양이냐로 죽을 때까지 싸우자', d: '2017-04-19', type: 'ep', album: 'レポート', track: 2, tie: 'cm', tieName: '広島女学院大学' },
    { t: '異端なスター', ko: '이탄나 스타', en: 'Itan na Star', alias: 'いたんなすたー|이단의 스타', d: '2017-04-19', type: 'ep', album: 'レポート', track: 3, tie: 'tv', tieName: '熱烈!ホットサンド!' },
    { t: '55', ko: '고고', en: '55', alias: 'ごーごー|오십오', d: '2017-04-19', type: 'ep', album: 'レポート', track: 4, tie: null },
    { t: 'Rolling', ko: '롤링', en: 'Rolling', d: '2017-04-19', type: 'ep', album: 'レポート', track: 5, tie: null },
    { t: 'イコール', ko: '이퀄', en: 'Equal', alias: 'いこーる|이코루', d: '2017-04-19', type: 'ep', album: 'レポート', track: 6, tie: null },
    { t: 'Trailer', ko: '트레일러', en: 'Trailer', d: '2017-04-19', type: 'ep', album: 'レポート', track: 7, tie: null },
    /* ---- 배포 싱글 · EP (2017) → エスカパレード ---- */
    { t: 'Tell Me Baby', ko: '텔 미 베이비', en: 'Tell Me Baby', d: '2017-07-21', type: 'digital', album: 'エスカパレード', track: 8, tie: null },
    { t: 'ブラザーズ', ko: '브라더즈', en: 'Brothers', alias: 'ぶらざーず', d: '2017-07-21', type: 'digital', album: 'エスカパレード', track: 12, tie: null },
    { t: 'LADY', ko: '레이디', en: 'LADY', d: '2017-10-13', type: 'digital', album: 'エスカパレード', track: 4, tie: null },
    /* ---- エスカパレード (2018) ---- */
    { t: '115万キロのフィルム', ko: '햐쿠주고만 키로노 피루무', en: '115 Man Kilo no Film', alias: 'ひゃくじゅうごまんきろのふぃるむ|115만 킬로의 필름', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 1, tie: 'cm', tieName: 'ローム「electric landscape」篇' },
    { t: 'ノーダウト', ko: '노 다우트', en: 'No Doubt', alias: 'のーだうと', d: '2018-04-11', type: 'single', album: 'エスカパレード', track: 2, tie: 'drama', tieName: 'コンフィデンスマンJP' },
    { t: 'ESCAPADE', ko: '에스커페이드', en: 'ESCAPADE', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 3, tie: 'cm', tieName: 'ノートルダム清心女子大学' },
    { t: 'たかがアイラブユー', ko: '타카가 아이 러브 유', en: 'Takaga I Love You', alias: 'たかがあいらぶゆー|고작 아이 러브 유', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 5, tie: null },
    { t: 'されど日々は', ko: '사레도 히비와', en: 'Saredo Hibi wa', alias: 'されどひびは|그래도 나날은', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 6, tie: null },
    { t: '可能性', ko: '카노세이', en: 'Kanousei', alias: 'かのうせい|가능성', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 7, tie: null },
    { t: 'Second LINE', ko: '세컨드 라인', en: 'Second LINE', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 9, tie: null },
    { t: 'Driver', ko: '드라이버', en: 'Driver', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 10, tie: 'tv', tieName: 'デルサタ' },
    { t: '相思相愛', ko: '소시소아이', en: 'Soushi Souai', alias: 'そうしそうあい|상사상애', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 11, tie: null },
    { t: '発明家', ko: '하츠메이카', en: 'Hatsumeika', alias: 'はつめいか|발명가', d: '2018-04-11', type: 'album', album: 'エスカパレード', track: 13, tie: null },
    /* ---- Stand By You EP (2018) ---- */
    { t: 'バッドフォーミー', ko: '배드 포 미', en: 'Bad For Me', alias: 'ばっどふぉーみー', d: '2018-08-06', type: 'digital', album: 'Stand By You EP', track: 3, tie: 'drama', tieName: 'グッド・バイ' },
    { t: 'Stand By You', ko: '스탠드 바이 유', en: 'Stand By You', d: '2018-10-17', type: 'ep', album: 'Stand By You EP', track: 1, tie: 'cm', tieName: 'Apple Music' },
    { t: 'FIRE GROUND', ko: '파이어 그라운드', en: 'FIRE GROUND', d: '2018-10-17', type: 'ep', album: 'Stand By You EP', track: 2, tie: 'anime', tieName: '火ノ丸相撲' },
    /* ---- Pretender · 宿命 (2019) ---- */
    { t: 'Pretender', ko: '프리텐더', en: 'Pretender', alias: 'ぷりてんだー', d: '2019-05-15', type: 'single', album: 'Traveler', track: 12, tie: 'movie', tieName: 'コンフィデンスマンJP ロマンス編' },
    { t: 'Amazing', ko: '어메이징', en: 'Amazing', d: '2019-05-15', type: 'coupling', rel: 'Pretender', album: 'Traveler', track: 3, tie: 'tv', tieName: '#きとキュン♡トラベラー with T' },
    { t: '宿命', ko: '슈쿠메이', en: 'Shukumei', alias: 'しゅくめい|숙명', d: '2019-07-31', type: 'single', album: 'Traveler', track: 2, tie: 'tv', tieName: '熱闘甲子園' },
    /* ---- Traveler (2019) ---- */
    { t: 'イエスタデイ', ko: '예스터데이', en: 'Yesterday', alias: 'いえすたでい', d: '2019-10-09', type: 'album', album: 'Traveler', track: 1, tie: 'movie', tieName: 'HELLO WORLD' },
    { t: 'Rowan', ko: '로완', en: 'Rowan', d: '2019-10-09', type: 'album', album: 'Traveler', track: 4, tie: null },
    { t: '最後の恋煩い', ko: '사이고노 코이와즈라이', en: 'Saigo no Koiwazurai', alias: 'さいごのこいわずらい|마지막 사랑앓이', d: '2019-10-09', type: 'album', album: 'Traveler', track: 6, tie: 'drama', tieName: 'あと3回、君に会える' },
    { t: 'ビンテージ', ko: '빈티지', en: 'Vintage', alias: 'びんてーじ', d: '2019-10-09', type: 'album', album: 'Traveler', track: 7, tie: 'tv', tieName: 'あいのり : African Journey' },
    { t: '旅は道連れ', ko: '타비와 미치즈레', en: 'Tabi wa Michizure', alias: 'たびはみちづれ|여행은 길동무', d: '2019-10-09', type: 'album', album: 'Traveler', track: 10, tie: 'cm', tieName: 'スズキ「スイフト」' },
    { t: 'ラストソング', ko: '라스트 송', en: 'Last Song', alias: 'らすとそんぐ', d: '2019-10-09', type: 'album', album: 'Traveler', track: 13, tie: 'drama', tieName: 'あと3回、君に会える' },
    { t: 'Travelers', ko: '트래블러스', en: 'Travelers', d: '2019-10-09', type: 'album', album: 'Traveler', track: 14, tie: null },
    /* ---- I LOVE... (2020) ---- */
    { t: 'I LOVE...', ko: '아이 러브', en: 'I LOVE...', alias: 'あいらぶ|I LOVE', d: '2020-02-12', type: 'single', album: 'Editorial', track: 3, tie: 'drama', tieName: '恋はつづくよどこまでも' },
    /* ---- HELLO EP (2020) ---- */
    { t: 'パラボラ', ko: '파라보라', en: 'Parabola', alias: 'ぱらぼら|파라볼라', d: '2020-04-10', type: 'digital', album: 'HELLO EP', track: 2, tie: 'cm', tieName: 'カルピスウォーター' },
    { t: 'Laughter', ko: '래프터', en: 'Laughter', d: '2020-07-10', type: 'digital', album: 'HELLO EP', track: 3, tie: 'movie', tieName: 'コンフィデンスマンJP プリンセス編' },
    { t: 'HELLO', ko: '헬로', en: 'HELLO', d: '2020-08-05', type: 'ep', album: 'HELLO EP', track: 1, tie: 'tv', tieName: 'めざましテレビ' },
    { t: '夏模様の猫', ko: '나츠모요노 네코', en: 'Natsumoyou no Neko', alias: 'なつもようのねこ|여름 무늬 고양이', d: '2020-08-05', type: 'ep', album: 'HELLO EP', track: 4, tie: null },
    /* ---- Universe · Cry Baby (2021) ---- */
    { t: 'Universe', ko: '유니버스', en: 'Universe', d: '2021-02-24', type: 'single', album: 'Editorial', track: 13, tie: 'movie', tieName: 'ドラえもん のび太の宇宙小戦争 2021' },
    { t: 'Cry Baby', ko: '크라이 베이비', en: 'Cry Baby', d: '2021-05-07', type: 'digital', album: 'Editorial', track: 6, tie: 'anime', tieName: '東京リベンジャーズ' },
    /* ---- Editorial (2021) ---- */
    { t: 'Editorial', ko: '에디토리얼', en: 'Editorial', d: '2021-08-18', type: 'album', album: 'Editorial', track: 1, tie: null },
    { t: 'アポトーシス', ko: '아포토시스', en: 'Apoptosis', alias: 'あぽとーしす', d: '2021-08-18', type: 'album', album: 'Editorial', track: 2, tie: 'cm', tieName: 'Apple Music' },
    { t: 'フィラメント', ko: '필라멘트', en: 'Filament', alias: 'ふぃらめんと|휘라멘토', d: '2021-08-18', type: 'album', album: 'Editorial', track: 4, tie: 'tv', tieName: '出雲全日本大学選抜駅伝' },
    { t: 'Shower', ko: '샤워', en: 'Shower', d: '2021-08-18', type: 'album', album: 'Editorial', track: 7, tie: null },
    { t: 'みどりの雨避け', ko: '미도리노 아마요케', en: 'Midori no Amayoke', alias: 'みどりのあまよけ|초록 비가리개', d: '2021-08-18', type: 'album', album: 'Editorial', track: 8, tie: null },
    { t: 'ペンディング・マシーン', ko: '펜딩 머신', en: 'Pending Machine', alias: 'ぺんでぃんぐましーん', d: '2021-08-18', type: 'album', album: 'Editorial', track: 10, tie: null },
    { t: 'Bedroom Talk', ko: '베드룸 토크', en: 'Bedroom Talk', d: '2021-08-18', type: 'album', album: 'Editorial', track: 11, tie: null },
    { t: 'Lost In My Room', ko: '로스트 인 마이 룸', en: 'Lost In My Room', d: '2021-08-18', type: 'album', album: 'Editorial', track: 14, tie: null },
    /* ---- ミックスナッツ EP (2022) ---- */
    { t: 'Anarchy', ko: '아나키', en: 'Anarchy', d: '2022-01-07', type: 'digital', album: 'ミックスナッツ EP', track: 2, tie: 'movie', tieName: 'コンフィデンスマンJP 英雄編' },
    { t: 'ミックスナッツ', ko: '믹스너츠', en: 'Mixed Nuts', alias: 'みっくすなっつ|믹스넛', d: '2022-04-15', type: 'digital', album: 'ミックスナッツ EP', track: 1, tie: 'anime', tieName: 'SPY×FAMILY' },
    { t: 'Choral A', ko: '코랄 에이', en: 'Choral A', d: '2022-06-22', type: 'ep', album: 'ミックスナッツ EP', track: 3, tie: 'movie', tieName: '異動辞令は音楽隊!' },
    { t: '破顔', ko: '하간', en: 'Hagan', alias: 'はがん|파안', d: '2022-06-22', type: 'ep', album: 'ミックスナッツ EP', track: 4, tie: 'cm', tieName: 'JR東日本「あたりまえの毎日」' },
    /* ---- 배포 싱글 (2022 - 2023) → Rejoice ---- */
    { t: 'Subtitle', ko: '서브타이틀', en: 'Subtitle', d: '2022-10-12', type: 'digital', album: 'Rejoice', track: 10, tie: 'drama', tieName: 'silent' },
    { t: 'ホワイトノイズ', ko: '화이트 노이즈', en: 'White Noise', alias: 'ほわいとのいず', d: '2023-01-11', type: 'digital', album: 'Rejoice', track: 12, tie: 'anime', tieName: '東京リベンジャーズ 聖夜決戦編' },
    { t: 'TATTOO', ko: '타투', en: 'TATTOO', d: '2023-04-21', type: 'digital', album: 'Rejoice', track: 15, tie: 'drama', tieName: 'ペンディングトレイン-8時23分、明日 君と' },
    { t: 'Chessboard', ko: '체스보드', en: 'Chessboard', d: '2023-08-09', type: 'digital', album: 'Rejoice', track: 14, tie: 'other', tieName: 'NHK全国学校音楽コンクール' },
    { t: '日常', ko: '니치조', en: 'Nichijou', alias: 'にちじょう|일상', d: '2023-09-13', type: 'single', album: 'Rejoice', track: 6, tie: 'tv', tieName: 'news zero' },
    { t: 'SOULSOUP', ko: '소울수프', en: 'SOULSOUP', d: '2023-12-13', type: 'digital', album: 'Rejoice', track: 4, tie: 'movie', tieName: '劇場版 SPY×FAMILY CODE: White' },
    /* ---- Rejoice (2024) ---- */
    { t: 'Finder', ko: '파인더', en: 'Finder', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 1, tie: null },
    { t: 'Get Back To 人生', ko: '겟 백 투 진세이', en: 'Get Back To Jinsei', alias: 'Get Back To じんせい|겟 백 투 인생', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 2, tie: null },
    { t: 'キャッチボール', ko: '캐치볼', en: 'Catchball', alias: 'きゃっちぼーる', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 5, tie: null },
    { t: 'Sharon', ko: '샤론', en: 'Sharon', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 8, tie: 'drama', tieName: 'マウンテンドクター' },
    { t: '濁点', ko: '다쿠텐', en: 'Dakuten', alias: 'だくてん|탁점', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 9, tie: null },
    { t: 'うらみつらみきわみ', ko: '우라미 츠라미 키와미', en: 'Urami Tsurami Kiwami', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 13, tie: null },
    { t: 'B-Side Blues', ko: '비사이드 블루스', en: 'B-Side Blues', d: '2024-07-24', type: 'album', album: 'Rejoice', track: 16, tie: 'cm', tieName: '午後の紅茶' },
    /* ---- 배포 싱글 (2024 - 2026) ---- */
    { t: 'Same Blue', ko: '세임 블루', en: 'Same Blue', d: '2024-10-02', type: 'digital', album: null, tie: 'anime', tieName: 'アオのハコ' },
    { t: '50%', ko: '피프티 퍼센트', en: '50%', alias: '50퍼센트|오십 퍼센트', d: '2024-12-13', type: 'digital', album: null, tie: 'movie', tieName: 'はたらく細胞' },
    { t: 'らしさ', ko: '라시사', en: 'Rashisa', alias: '다움', d: '2025-08-06', type: 'digital', album: null, tie: 'movie', tieName: 'ひゃくえむ。' },
    { t: 'Sanitizer', ko: '새니타이저', en: 'Sanitizer', d: '2025-12-01', type: 'digital', album: null, tie: null },
    { t: 'Make Me Wonder', ko: '메이크 미 원더', en: 'Make Me Wonder', d: '2025-12-29', type: 'digital', album: null, tie: 'anime', tieName: 'ダーウィン事変' },
    { t: 'エルダーフラワー', ko: '엘더플라워', en: 'Elderflower', alias: 'えるだーふらわー', d: '2026-03-30', type: 'digital', album: null, tie: 'movie', tieName: '人はなぜラブレターを書くのか' },
    { t: 'スターダスト', ko: '스타더스트', en: 'Stardust', alias: 'すたーだすと', d: '2026-04-13', type: 'digital', album: null, tie: 'drama', tieName: 'GIFT' },
  ],
});
