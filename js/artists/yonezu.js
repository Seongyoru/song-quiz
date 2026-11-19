'use strict';
/* =========================================================
 * 米津玄師 전체 곡 데이터 (정규 앨범, 싱글 표제곡 · 커플링, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (米津玄師の作品 · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : ハチ 명의 보카로 곡 (砂の惑星 제외), 리믹스, 셀프 커버 (ドーナツホール COVER), 아직 안 나온 곡
 *
 * 필드 설명은 mga.js 머리말과 같다
 * ========================================================= */
ARTISTS.push({
  id: 'yonezu',
  name: '米津玄師',
  local: { ko: '요네즈 켄시', ja: '米津玄師', en: 'Kenshi Yonezu' },
  color: '#2f4f7f',
  color2: '#8fb8de',
  albums: {
    diorama: { d: '2012-05-16', kind: 'full' },
    YANKEE: { d: '2014-04-23', kind: 'full' },
    Bremen: { d: '2015-10-07', kind: 'full' },
    BOOTLEG: { d: '2017-11-01', kind: 'full' },
    'STRAY SHEEP': { d: '2020-08-05', kind: 'full' },
    'LOST CORNER': { d: '2024-08-21', kind: 'full' },
  },
  songs: [
    /* ---- diorama (2012) ---- */
    { t: '街', ko: '마치', en: 'Machi', alias: 'まち|거리', d: '2012-05-16', type: 'album', album: 'diorama', track: 1, tie: null },
    { t: 'ゴーゴー幽霊船', ko: '고고 유레이센', en: 'Go Go Yuureisen', alias: 'ごーごーゆうれいせん|고고 유령선', d: '2012-05-16', type: 'album', album: 'diorama', track: 2, tie: null },
    { t: '駄菓子屋商売', ko: '다가시야 쇼바이', en: 'Dagashiya Shoubai', alias: 'だがしやしょうばい|과자가게 장사', d: '2012-05-16', type: 'album', album: 'diorama', track: 3, tie: null },
    { t: 'caribou', ko: '카리부', en: 'caribou', d: '2012-05-16', type: 'album', album: 'diorama', track: 4, tie: null },
    { t: 'あめふり婦人', ko: '아메후리 후진', en: 'Amefuri Fujin', alias: 'あめふりふじん|비 오는 날의 부인', d: '2012-05-16', type: 'album', album: 'diorama', track: 5, tie: null },
    { t: 'ディスコバルーン', ko: '디스코 벌룬', en: 'Disco Balloon', d: '2012-05-16', type: 'album', album: 'diorama', track: 6, tie: null },
    { t: 'vivi', ko: '비비', en: 'vivi', d: '2012-05-16', type: 'album', album: 'diorama', track: 7, tie: null },
    { t: 'トイパトリオット', ko: '토이 패트리엇', en: 'Toy Patriot', d: '2012-05-16', type: 'album', album: 'diorama', track: 8, tie: null },
    { t: '恋と病熱', ko: '코이토 뵤네츠', en: 'Koi to Byounetsu', alias: 'こいとびょうねつ|사랑과 열병', d: '2012-05-16', type: 'album', album: 'diorama', track: 9, tie: null },
    { t: 'Black Sheep', ko: '블랙 쉽', en: 'Black Sheep', d: '2012-05-16', type: 'album', album: 'diorama', track: 10, tie: null },
    { t: '乾涸びたバスひとつ', ko: '히카라비타 바스 히토츠', en: 'Hikarabita Bus Hitotsu', alias: 'ひからびたばすひとつ|말라붙은 버스 하나', d: '2012-05-16', type: 'album', album: 'diorama', track: 11, tie: null },
    { t: '首なし閑古鳥', ko: '쿠비나시 칸코도리', en: 'Kubinashi Kankodori', alias: 'くびなしかんこどり|목 없는 뻐꾸기', d: '2012-05-16', type: 'album', album: 'diorama', track: 12, tie: null },
    { t: '心像放映', ko: '신조 호에이', en: 'Shinzou Houei', alias: 'しんぞうほうえい|심상 방영', d: '2012-05-16', type: 'album', album: 'diorama', track: 13, tie: null },
    { t: '抄本', ko: '쇼혼', en: 'Shouhon', alias: 'しょうほん|초본', d: '2012-05-16', type: 'album', album: 'diorama', track: 14, tie: null },
    /* ---- サンタマリア (2013) ---- */
    { t: 'サンタマリア', ko: '산타마리아', en: 'Santa Maria', d: '2013-05-29', type: 'single', album: 'YANKEE', track: 6, tie: null },
    { t: '百鬼夜行', ko: '햣키야코', en: 'Hyakki Yakou', alias: 'ひゃっきやこう|백귀야행', d: '2013-05-29', type: 'coupling', rel: 'サンタマリア', album: 'YANKEE', track: 13, tie: null },
    { t: '笛吹けども踊らず', ko: '후에 후케도모 오도라즈', en: 'Fue Fukedomo Odorazu', alias: 'ふえふけどもおどらず|피리를 불어도 춤추지 않네', d: '2013-05-29', type: 'coupling', rel: 'サンタマリア', album: null, tie: null },
    /* ---- MAD HEAD LOVE / ポッピンアパシー (2013) ---- */
    { t: 'MAD HEAD LOVE', ko: '매드 헤드 러브', en: 'MAD HEAD LOVE', d: '2013-10-23', type: 'single', album: 'YANKEE', track: 2, tie: null },
    { t: 'ポッピンアパシー', ko: '포핀 아파시', en: 'Poppin Apathy', d: '2013-10-23', type: 'single', album: null, tie: null },
    { t: '鳥にでもなりたい', ko: '토리니데모 나리타이', en: 'Tori ni demo Naritai', alias: 'とりにでもなりたい|새라도 되고 싶어', d: '2013-10-23', type: 'coupling', rel: 'MAD HEAD LOVE', album: null, tie: null },
    /* ---- YANKEE (2014) ---- */
    { t: 'リビングデッド・ユース', ko: '리빙 데드 유스', en: 'Living Dead Youth', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 1, tie: null },
    { t: 'WOODEN DOLL', ko: '우든 돌', en: 'WOODEN DOLL', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 3, tie: null },
    { t: 'アイネクライネ', ko: '아이네 클라이네', en: 'Eine Kleine', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 4, tie: 'cm', tieName: '東京メトロ「Color your days.」' },
    { t: 'メランコリーキッチン', ko: '멜랑콜리 키친', en: 'Melancholy Kitchen', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 5, tie: null },
    { t: '花に嵐', ko: '하나니 아라시', en: 'Hana ni Arashi', alias: 'はなにあらし|꽃에 폭풍', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 7, tie: null },
    { t: '海と山椒魚', ko: '우미토 산쇼우오', en: 'Umi to Sanshouo', alias: 'うみとさんしょううお|바다와 도롱뇽', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 8, tie: null },
    { t: 'しとど晴天大迷惑', ko: '시토도 세이텐 다이메이와쿠', en: 'Shitodo Seiten Daimeiwaku', alias: 'しとどせいてんだいめいわく', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 9, tie: null },
    { t: '眼福', ko: '간푸쿠', en: 'Ganpuku', alias: 'がんぷく|안복', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 10, tie: null },
    { t: 'ホラ吹き猫野郎', ko: '호라후키 네코야로', en: 'Horafuki Neko Yarou', alias: 'ほらふきねこやろう|허풍쟁이 고양이 녀석', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 11, tie: null },
    { t: 'TOXIC BOY', ko: '톡식 보이', en: 'TOXIC BOY', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 12, tie: null },
    { t: 'KARMA CITY', ko: '카르마 시티', en: 'KARMA CITY', d: '2014-04-23', type: 'album', album: 'YANKEE', track: 14, tie: null },
    /* ---- Flowerwall (2015) ---- */
    { t: 'Flowerwall', ko: '플라워월', en: 'Flowerwall', d: '2015-01-14', type: 'single', album: 'Bremen', track: 4, tie: 'cm', tieName: 'ニコン「D5500」' },
    { t: '懺悔の街', ko: '잔게노 마치', en: 'Zange no Machi', alias: 'ざんげのまち|참회의 거리', d: '2015-01-14', type: 'coupling', rel: 'Flowerwall', album: null, tie: null },
    { t: 'ペトリコール', ko: '페트리코르', en: 'Petrichor', d: '2015-01-14', type: 'coupling', rel: 'Flowerwall', album: null, tie: null },
    /* ---- アンビリーバーズ (2015) ---- */
    { t: 'アンビリーバーズ', ko: '언빌리버즈', en: 'Unbelievers', d: '2015-09-02', type: 'single', album: 'Bremen', track: 1, tie: 'cm', tieName: 'ミズノ「WAVE ENIGMA 5」' },
    { t: '旅人電燈', ko: '타비비토 덴토', en: 'Tabibito Dentou', alias: 'たびびとでんとう|나그네 전등', d: '2015-09-02', type: 'coupling', rel: 'アンビリーバーズ', album: null, tie: null },
    { t: 'こころにくだもの', ko: '코코로니 쿠다모노', en: 'Kokoro ni Kudamono', alias: '마음에 과일', d: '2015-09-02', type: 'coupling', rel: 'アンビリーバーズ', album: null, tie: null },
    /* ---- Bremen (2015) ---- */
    { t: 'フローライト', ko: '플로라이트', en: 'Fluorite', d: '2015-10-07', type: 'album', album: 'Bremen', track: 2, tie: null },
    { t: '再上映', ko: '사이조에이', en: 'Saijouei', alias: 'さいじょうえい|재상영', d: '2015-10-07', type: 'album', album: 'Bremen', track: 3, tie: null },
    { t: 'あたしはゆうれい', ko: '아타시와 유레이', en: 'Atashi wa Yuurei', alias: '나는 유령', d: '2015-10-07', type: 'album', album: 'Bremen', track: 5, tie: null },
    { t: 'ウィルオウィスプ', ko: '윌 오 위스프', en: 'Will-o\'-the-wisp', d: '2015-10-07', type: 'album', album: 'Bremen', track: 6, tie: null },
    { t: 'Undercover', ko: '언더커버', en: 'Undercover', d: '2015-10-07', type: 'album', album: 'Bremen', track: 7, tie: null },
    { t: 'Neon Sign', ko: '네온 사인', en: 'Neon Sign', d: '2015-10-07', type: 'album', album: 'Bremen', track: 8, tie: null },
    { t: 'メトロノーム', ko: '메트로놈', en: 'Metronome', d: '2015-10-07', type: 'album', album: 'Bremen', track: 9, tie: null },
    { t: '雨の街路に夜光蟲', ko: '아메노 가이로니 야코추', en: 'Ame no Gairo ni Yakouchuu', alias: 'あめのがいろにやこうちゅう|비 내리는 거리의 야광충', d: '2015-10-07', type: 'album', album: 'Bremen', track: 10, tie: null },
    { t: 'シンデレラグレイ', ko: '신데렐라 그레이', en: 'Cinderella Gray', d: '2015-10-07', type: 'album', album: 'Bremen', track: 11, tie: null },
    { t: 'ミラージュソング', ko: '미라주 송', en: 'Mirage Song', d: '2015-10-07', type: 'album', album: 'Bremen', track: 12, tie: null },
    { t: 'ホープランド', ko: '호프랜드', en: 'Hopeland', d: '2015-10-07', type: 'album', album: 'Bremen', track: 13, tie: null },
    { t: 'Blue Jasmine', ko: '블루 재스민', en: 'Blue Jasmine', d: '2015-10-07', type: 'album', album: 'Bremen', track: 14, tie: null },
    /* ---- LOSER / ナンバーナイン (2016) ---- */
    { t: 'LOSER', ko: '루저', en: 'LOSER', d: '2016-09-28', type: 'single', album: 'BOOTLEG', track: 2, tie: 'cm', tieName: 'Honda「JADE」' },
    { t: 'ナンバーナイン', ko: '넘버 나인', en: 'Number Nine', d: '2016-09-28', type: 'single', album: 'BOOTLEG', track: 10, tie: 'other', tieName: 'ルーヴル美術館特別展' },
    { t: 'amen', ko: '아멘', en: 'amen', d: '2016-09-28', type: 'coupling', rel: 'LOSER', album: null, tie: null },
    /* ---- orion (2017) ---- */
    { t: 'orion', ko: '오리온', en: 'orion', d: '2017-02-15', type: 'single', album: 'BOOTLEG', track: 5, tie: 'anime', tieName: '3月のライオン' },
    { t: 'ララバイさよなら', ko: '랄라바이 사요나라', en: 'Lullaby Sayonara', alias: '자장가 안녕', d: '2017-02-15', type: 'coupling', rel: 'orion', album: null, tie: null },
    { t: '翡翠の狼', ko: '히스이노 오오카미', en: 'Hisui no Ookami', alias: 'ひすいのおおかみ|비취의 늑대', d: '2017-02-15', type: 'coupling', rel: 'orion', album: null, tie: null },
    /* ---- ピースサイン (2017) ---- */
    { t: 'ピースサイン', ko: '피스 사인', en: 'Peace Sign', d: '2017-06-21', type: 'single', album: 'BOOTLEG', track: 3, tie: 'anime', tieName: '僕のヒーローアカデミア' },
    { t: 'Neighbourhood', ko: '네이버후드', en: 'Neighbourhood', d: '2017-06-21', type: 'coupling', rel: 'ピースサイン', album: null, tie: null },
    { t: 'ゆめくいしょうじょ', ko: '유메쿠이 쇼조', en: 'Yumekui Shoujo', alias: '꿈을 먹는 소녀', d: '2017-06-21', type: 'coupling', rel: 'ピースサイン', album: null, tie: null },
    /* ---- BOOTLEG (2017) ---- */
    { t: '飛燕', ko: '히엔', en: 'Hien', alias: 'ひえん|비연', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 1, tie: null },
    { t: '砂の惑星', ko: '스나노 와쿠세이', en: 'Suna no Wakusei', alias: 'すなのわくせい|모래의 행성', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 4, tie: 'other', tieName: '初音ミク「マジカルミライ 2017」' },
    { t: 'かいじゅうのマーチ', ko: '카이주노 마치', en: 'Kaijuu no March', alias: '괴수의 행진', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 6, tie: null },
    { t: 'Moonlight', ko: '문라이트', en: 'Moonlight', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 7, tie: null },
    { t: '春雷', ko: '슌라이', en: 'Shunrai', alias: 'しゅんらい|봄천둥', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 8, tie: null },
    { t: 'fogbound', ko: '포그바운드', en: 'fogbound', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 9, tie: null },
    { t: '爱丽丝', ko: '아이리스', en: 'Alice', alias: 'アイリス|愛麗絲|앨리스', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 11, tie: null },
    { t: 'Nighthawks', ko: '나이트호크스', en: 'Nighthawks', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 12, tie: null },
    { t: '打上花火', ko: '우치아게 하나비', en: 'Uchiage Hanabi', alias: 'うちあげはなび|쏘아올린 불꽃', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 13, tie: 'movie', tieName: '打ち上げ花火、下から見るか? 横から見るか?' },
    { t: '灰色と青', ko: '하이이로토 아오', en: 'Haiiro to Ao', alias: 'はいいろとあお|회색과 파랑', d: '2017-11-01', type: 'album', album: 'BOOTLEG', track: 14, tie: null },
    /* ---- Lemon (2018) ---- */
    { t: 'Lemon', ko: '레몬', en: 'Lemon', d: '2018-03-14', type: 'single', album: 'STRAY SHEEP', track: 8, tie: 'drama', tieName: 'アンナチュラル' },
    { t: 'クランベリーとパンケーキ', ko: '크랜베리토 팬케이크', en: 'Cranberry to Pancake', alias: '크랜베리와 팬케이크', d: '2018-03-14', type: 'coupling', rel: 'Lemon', album: null, tie: null },
    { t: 'Paper Flower', ko: '페이퍼 플라워', en: 'Paper Flower', d: '2018-03-14', type: 'coupling', rel: 'Lemon', album: null, tie: null },
    /* ---- Flamingo / TEENAGE RIOT (2018) ---- */
    { t: 'Flamingo', ko: '플라밍고', en: 'Flamingo', d: '2018-10-31', type: 'single', album: 'STRAY SHEEP', track: 2, tie: 'cm', tieName: 'SONY「WF-SP900」' },
    { t: 'TEENAGE RIOT', ko: '틴에이지 라이엇', en: 'TEENAGE RIOT', d: '2018-10-31', type: 'single', album: 'STRAY SHEEP', track: 13, tie: 'cm', tieName: 'GATSBY' },
    { t: 'ごめんね', ko: '고멘네', en: 'Gomen ne', alias: '미안해', d: '2018-10-31', type: 'coupling', rel: 'Flamingo', album: null, tie: null },
    /* ---- 2019 ---- */
    { t: '海の幽霊', ko: '우미노 유레이', en: 'Umi no Yuurei', alias: 'うみのゆうれい|바다의 유령', d: '2019-06-03', type: 'digital', album: 'STRAY SHEEP', track: 14, tie: 'movie', tieName: '海獣の子供' },
    { t: '馬と鹿', ko: '우마토 시카', en: 'Uma to Shika', alias: 'うまとしか|말과 사슴', d: '2019-09-11', type: 'single', album: 'STRAY SHEEP', track: 6, tie: 'drama', tieName: 'ノーサイド・ゲーム' },
    { t: 'でしょましょ', ko: '데쇼마쇼', en: 'Deshomasho', d: '2019-09-11', type: 'coupling', rel: '馬と鹿', album: null, tie: null },
    { t: 'パプリカ', ko: '파프리카', en: 'Paprika', d: '2020-02-03', type: 'digital', album: 'STRAY SHEEP', track: 5, tie: 'tv', tieName: 'みんなのうた' },
    /* ---- STRAY SHEEP (2020) ---- */
    { t: 'カムパネルラ', ko: '캄파넬라', en: 'Campanella', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 1, tie: null },
    { t: '感電', ko: '칸덴', en: 'Kanden', alias: 'かんでん|감전', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 3, tie: 'drama', tieName: 'MIU404' },
    { t: 'PLACEBO', ko: '플라시보', en: 'PLACEBO', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 4, tie: null },
    { t: '優しい人', ko: '야사시이 히토', en: 'Yasashii Hito', alias: 'やさしいひと|다정한 사람', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 7, tie: null },
    { t: 'まちがいさがし', ko: '마치가이사가시', en: 'Machigai Sagashi', alias: '틀린 그림 찾기', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 9, tie: null },
    { t: 'ひまわり', ko: '히마와리', en: 'Himawari', alias: '해바라기', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 10, tie: null },
    { t: '迷える羊', ko: '마요에루 히츠지', en: 'Mayoeru Hitsuji', alias: 'まよえるひつじ|길 잃은 양', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 11, tie: 'cm', tieName: 'カロリーメイト' },
    { t: 'Décolleté', ko: '데콜테', en: 'Decollete', alias: 'Decollete', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 12, tie: null },
    { t: 'カナリヤ', ko: '카나리야', en: 'Kanariya', alias: '카나리아', d: '2020-08-05', type: 'album', album: 'STRAY SHEEP', track: 15, tie: null },
    /* ---- Pale Blue (2021) ---- */
    { t: 'Pale Blue', ko: '페일 블루', en: 'Pale Blue', d: '2021-06-16', type: 'single', album: 'LOST CORNER', track: 14, tie: 'drama', tieName: 'リコカツ' },
    { t: 'ゆめうつつ', ko: '유메우츠츠', en: 'Yume Utsutsu', alias: '비몽사몽', d: '2021-06-16', type: 'coupling', rel: 'Pale Blue', album: 'LOST CORNER', track: 8, tie: 'tv', tieName: 'news zero' },
    { t: '死神', ko: '시니가미', en: 'Shinigami', alias: 'しにがみ|사신', d: '2021-06-16', type: 'coupling', rel: 'Pale Blue', album: 'LOST CORNER', track: 5, tie: null },
    /* ---- 2022 ---- */
    { t: 'POP SONG', ko: '팝 송', en: 'POP SONG', d: '2022-02-07', type: 'digital', album: 'LOST CORNER', track: 4, tie: 'cm', tieName: 'PlayStation' },
    { t: 'M八七', ko: '엠 하치주나나', en: 'M87', alias: 'えむはちじゅうなな|M87|엠팔칠', d: '2022-05-18', type: 'single', album: 'LOST CORNER', track: 13, tie: 'movie', tieName: 'シン・ウルトラマン' },
    { t: 'ETA', ko: '이티에이', en: 'ETA', d: '2022-05-18', type: 'coupling', rel: 'M八七', album: null, tie: null },
    { t: 'KICK BACK', ko: '킥 백', en: 'KICK BACK', d: '2022-11-23', type: 'single', album: 'LOST CORNER', track: 2, tie: 'anime', tieName: 'チェンソーマン' },
    { t: '恥ずかしくってしょうがねえ', ko: '하즈카시쿳테 쇼가네', en: 'Hazukashikutte Shouganee', alias: 'はずかしくってしょうがねえ|부끄러워서 못 견디겠어', d: '2022-11-23', type: 'coupling', rel: 'KICK BACK', album: null, tie: null },
    /* ---- 2023 ---- */
    { t: 'LADY', ko: '레이디', en: 'LADY', d: '2023-03-21', type: 'digital', album: 'LOST CORNER', track: 7, tie: 'cm', tieName: 'ジョージア' },
    { t: '月を見ていた', ko: '츠키오 미테이타', en: 'Tsuki wo Miteita', alias: 'つきをみていた|달을 보고 있었다', d: '2023-06-26', type: 'digital', album: 'LOST CORNER', track: 12, tie: 'game', tieName: 'FINAL FANTASY XVI' },
    { t: '地球儀', ko: '치큐기', en: 'Chikyuugi', alias: 'ちきゅうぎ|지구본|지구의', d: '2023-07-26', type: 'single', album: 'LOST CORNER', track: 18, tie: 'movie', tieName: '君たちはどう生きるか' },
    /* ---- 2024 ---- */
    { t: 'さよーならまたいつか！', ko: '사요-나라 마타이츠카', en: 'Sayonara Mata Itsuka!', alias: 'さよーならまたいつか!|さよならまたいつか|안녕 또 언젠가', d: '2024-04-08', type: 'digital', album: 'LOST CORNER', track: 9, tie: 'drama', tieName: '虎に翼' },
    { t: '毎日', ko: '마이니치', en: 'Mainichi', alias: 'まいにち|매일', d: '2024-05-27', type: 'digital', album: 'LOST CORNER', track: 6, tie: 'cm', tieName: 'ジョージア' },
    /* ---- LOST CORNER (2024) ---- */
    { t: 'RED OUT', ko: '레드 아웃', en: 'RED OUT', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 1, tie: 'cm', tieName: 'Spotify' },
    { t: 'マルゲリータ', ko: '마르게리타', en: 'Margherita', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 3, tie: null },
    { t: 'とまれみよ', ko: '토마레미요', en: 'Tomare Miyo', alias: '멈춰서 봐', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 10, tie: null },
    { t: 'LENS FLARE', ko: '렌즈 플레어', en: 'LENS FLARE', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 11, tie: null },
    { t: 'がらくた', ko: '가라쿠타', en: 'Garakuta', alias: '잡동사니', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 15, tie: 'movie', tieName: 'ラストマイル' },
    { t: 'YELLOW GHOST', ko: '옐로 고스트', en: 'YELLOW GHOST', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 16, tie: null },
    { t: 'POST HUMAN', ko: '포스트 휴먼', en: 'POST HUMAN', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 17, tie: null },
    { t: 'LOST CORNER', ko: '로스트 코너', en: 'LOST CORNER', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 19, tie: null },
    { t: 'おはよう', ko: '오하요', en: 'Ohayou', alias: '좋은 아침', d: '2024-08-21', type: 'album', album: 'LOST CORNER', track: 20, tie: null },
    /* ---- 2024 - 2026 ---- */
    { t: 'Azalea', ko: '아잘레아', en: 'Azalea', d: '2024-11-18', type: 'digital', album: null, tie: 'drama', tieName: 'さよならのつづき' },
    { t: 'Plazma', ko: '플라즈마', en: 'Plazma', d: '2025-06-11', type: 'single', album: null, tie: 'anime', tieName: '機動戦士Gundam GQuuuuuuX' },
    { t: 'BOW AND ARROW', ko: '보우 앤드 애로', en: 'BOW AND ARROW', d: '2025-06-11', type: 'single', album: null, tie: 'anime', tieName: 'メダリスト' },
    { t: 'IRIS OUT', ko: '아이리스 아웃', en: 'IRIS OUT', d: '2025-09-24', type: 'single', album: null, tie: 'movie', tieName: '劇場版 チェンソーマン レゼ篇' },
    { t: 'JANE DOE', ko: '제인 도', en: 'JANE DOE', d: '2025-09-24', type: 'single', album: null, tie: 'movie', tieName: '劇場版 チェンソーマン レゼ篇' },
    { t: '1991', ko: '천구백구십일', en: '1991', alias: '일구구일', d: '2025-10-13', type: 'digital', album: null, tie: 'movie', tieName: '秒速5センチメートル' },
    { t: '烏', ko: '카라스', en: 'Karasu', alias: 'からす|까마귀', d: '2026-06-15', type: 'digital', album: null, tie: 'tv', tieName: '2026 NHKサッカーテーマ' },
    { t: '夜鷹', ko: '요타카', en: 'Yotaka', alias: 'よたか|쏙독새', d: '2026-07-13', type: 'digital', album: null, tie: 'movie', tieName: 'キングダム 魂の決戦' },
  ],
});
