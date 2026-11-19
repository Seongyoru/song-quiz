'use strict';
/* =========================================================
 * ヨルシカ 전체 곡 데이터 (정규 · 미니 앨범, EP 『創作』, 음악 화집 『幻燈』, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (ヨルシカ · 각 앨범 문서), 2026-11 확인
 * 빠진 것 : 인스트 · 인터루드 (夏陰、ピアノを弾く · 8/31 · 車窓 · 音楽泥棒の自白 등), 다시 녹음한 곡 (爆弾魔 · 靴の花火 · 負け犬にアンコールはいらない 재수록), 『幻燈』 의 낭독 「第一夜」~「第十夜」
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범곡) / best (베스트 앨범 신곡)
 * album  : 처음 실린 앨범, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 위키백과 타이업 목록에 있는 것만 (anime / drama / movie / cm / tv / game / other)
 * ========================================================= */
ARTISTS.push({
  id: 'yorushika',
  name: 'ヨルシカ',
  local: { ko: '요루시카', ja: 'ヨルシカ', en: 'Yorushika' },
  color: '#2f6f8f',
  color2: '#9fd3c7',
  albums: {
    '夏草が邪魔をする': { d: '2017-06-28', kind: 'mini' },
    '負け犬にアンコールはいらない': { d: '2018-05-09', kind: 'mini' },
    'だから僕は音楽を辞めた': { d: '2019-04-10', kind: 'full' },
    'エルマ': { d: '2019-08-28', kind: 'full' },
    '盗作': { d: '2020-07-29', kind: 'full' },
    '創作': { d: '2021-01-27', kind: 'mini' },
    '幻燈': { d: '2023-04-05', kind: 'full' },
    '二人称': { d: '2026-03-04', kind: 'full' },
  },
  songs: [
    /* ---- 夏草が邪魔をする (2017) ---- */
    { t: 'カトレア', ko: '카토레아', en: 'Cattleya', alias: '카틀레야', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 2, tie: null },
    { t: '言って。', ko: '잇테', en: 'Itte.', alias: 'いって|言って|말해줘', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 3, tie: null },
    { t: 'あの夏に咲け', ko: '아노 나츠니 사케', en: 'Ano Natsu ni Sake', alias: 'あのなつにさけ|그 여름에 피어라', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 4, tie: null },
    { t: '飛行', ko: '히코', en: 'Hikou', alias: 'ひこう|비행', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 5, tie: null },
    { t: '靴の花火', ko: '쿠츠노 하나비', en: 'Kutsu no Hanabi', alias: 'くつのはなび|구두의 불꽃놀이', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 6, tie: null },
    { t: '雲と幽霊', ko: '쿠모토 유레이', en: 'Kumo to Yuurei', alias: 'くもとゆうれい|구름과 유령', d: '2017-06-28', type: 'ep', album: '夏草が邪魔をする', track: 7, tie: null },
    /* ---- 負け犬にアンコールはいらない (2018) ---- */
    { t: '負け犬にアンコールはいらない', ko: '마케이누니 앙코르와 이라나이', en: 'Makeinu ni Encore wa Iranai', alias: 'まけいぬにアンコールはいらない|패배자에게 앙코르는 필요 없어', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 2, tie: null },
    { t: '爆弾魔', ko: '바쿠단마', en: 'Bakudanma', alias: 'ばくだんま|폭탄마', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 3, tie: null },
    { t: 'ヒッチコック', ko: '힛치콧쿠', en: 'Hitchcock', alias: '히치콕', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 4, tie: null },
    { t: '落下', ko: '랏카', en: 'Rakka', alias: 'らっか|낙하', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 5, tie: null },
    { t: '準透明少年', ko: '준토메이 쇼넨', en: 'Juntoumei Shounen', alias: 'じゅんとうめいしょうねん|준투명 소년', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 6, tie: null },
    { t: 'ただ君に晴れ', ko: '타다 키미니 하레', en: 'Tada Kimi ni Hare', alias: 'ただきみにはれ|그저 네게 맑아라', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 7, tie: null },
    { t: '冬眠', ko: '토민', en: 'Toumin', alias: 'とうみん|동면', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 8, tie: null },
    { t: '夏、バス停、君を待つ', ko: '나츠 바스테이 키미오 마츠', en: 'Natsu, Bus-tei, Kimi wo Matsu', alias: 'なつ、バスてい、きみをまつ|여름, 버스 정류장, 너를 기다려', d: '2018-05-09', type: 'ep', album: '負け犬にアンコールはいらない', track: 9, tie: null },
    /* ---- だから僕は音楽を辞めた (2019) ---- */
    { t: '藍二乗', ko: '아이니죠', en: 'Ai Nijou', alias: 'あいにじょう|쪽빛 제곱', d: '2018-12-27', type: 'digital', album: 'だから僕は音楽を辞めた', track: 2, tie: null },
    { t: 'パレード', ko: '퍼레이드', en: 'Parade', alias: '파레도', d: '2019-03-15', type: 'digital', album: 'だから僕は音楽を辞めた', track: 11, tie: null },
    { t: '八月、某、月明かり', ko: '하치가츠 보 츠키아카리', en: 'Hachigatsu, Bou, Tsukiakari', alias: 'はちがつ、ぼう、つきあかり|8월, 어느 날, 달빛', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 3, tie: null },
    { t: '詩書きとコーヒー', ko: '우타카키토 코히', en: 'Utakaki to Coffee', alias: 'うたかきとコーヒー|시 쓰기와 커피', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 4, tie: null },
    { t: '踊ろうぜ', ko: '오도로제', en: 'Odorouze', alias: 'おどろうぜ|춤추자', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 6, tie: null },
    { t: '六月は雨上がりの街を書く', ko: '로쿠가츠와 아메아가리노 마치오 카쿠', en: 'Rokugatsu wa Ameagari no Machi wo Kaku', alias: 'ろくがつはあめあがりのまちをかく|6월은 비 갠 거리를 쓴다', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 7, tie: null },
    { t: '五月は花緑青の窓辺から', ko: '고가츠와 하나로쿠쇼노 마도베카라', en: 'Gogatsu wa Hanarokushou no Madobe kara', alias: 'ごがつははなろくしょうのまどべから|5월은 화록청의 창가에서', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 8, tie: null },
    { t: '夜紛い', ko: '요루마가이', en: 'Yorumagai', alias: 'よるまがい|밤을 닮은', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 9, tie: null },
    { t: 'エルマ', ko: '에루마', en: 'Elma', alias: '엘마', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 12, tie: null },
    { t: 'だから僕は音楽を辞めた', ko: '다카라 보쿠와 온가쿠오 야메타', en: 'Dakara Boku wa Ongaku wo Yameta', alias: 'だからぼくはおんがくをやめた|그래서 나는 음악을 그만두었다', d: '2019-04-10', type: 'album', album: 'だから僕は音楽を辞めた', track: 14, tie: null },
    /* ---- エルマ (2019) ---- */
    { t: '心に穴が空いた', ko: '코코로니 아나가 아이타', en: 'Kokoro ni Ana ga Aita', alias: 'こころにあながあいた|마음에 구멍이 뚫렸다', d: '2019-06-24', type: 'digital', album: 'エルマ', track: 9, tie: 'cm', tieName: '帝京平成大学' },
    { t: '雨とカプチーノ', ko: '아메토 카푸치노', en: 'Ame to Cappuccino', alias: 'あめとカプチーノ|비와 카푸치노', d: '2019-08-02', type: 'digital', album: 'エルマ', track: 4, tie: null },
    { t: '憂一乗', ko: '우이치조', en: 'Ui Ichijou', alias: 'ういいちじょう|우일승', d: '2019-08-28', type: 'album', album: 'エルマ', track: 2, tie: null },
    { t: '夕凪、某、花惑い', ko: '유나기 보 하나마도이', en: 'Yuunagi, Bou, Hanamadoi', alias: 'ゆうなぎ、ぼう、はなまどい|저녁뜸, 어느 날, 꽃 헤맴', d: '2019-08-28', type: 'album', album: 'エルマ', track: 3, tie: null },
    { t: '湖の街', ko: '미즈우미노 마치', en: 'Mizuumi no Machi', alias: 'みずうみのまち|호수의 거리', d: '2019-08-28', type: 'album', album: 'エルマ', track: 5, tie: null },
    { t: '神様のダンス', ko: '카미사마노 단스', en: 'Kamisama no Dance', alias: 'かみさまのダンス|신의 춤', d: '2019-08-28', type: 'album', album: 'エルマ', track: 6, tie: null },
    { t: '雨晴るる', ko: '아메하루루', en: 'Ame Haruru', alias: 'あめはるる|비 개다', d: '2019-08-28', type: 'album', album: 'エルマ', track: 7, tie: null },
    { t: '歩く', ko: '아루쿠', en: 'Aruku', alias: 'あるく|걷다', d: '2019-08-28', type: 'album', album: 'エルマ', track: 8, tie: null },
    { t: '声', ko: '코에', en: 'Koe', alias: 'こえ|목소리', d: '2019-08-28', type: 'album', album: 'エルマ', track: 11, tie: null },
    { t: 'エイミー', ko: '에이미', en: 'Amy', d: '2019-08-28', type: 'album', album: 'エルマ', track: 12, tie: null },
    { t: 'ノーチラス', ko: '노치라스', en: 'Nautilus', alias: '노틸러스', d: '2019-08-28', type: 'album', album: 'エルマ', track: 14, tie: 'drama', tieName: '言の葉' },
    /* ---- 盗作 (2020) ---- */
    { t: '夜行', ko: '야코', en: 'Yakou', alias: 'やこう|야행', d: '2020-03-04', type: 'digital', album: '盗作', track: 13, tie: 'movie', tieName: '泣きたい私は猫をかぶる' },
    { t: '花に亡霊', ko: '하나니 보레이', en: 'Hana ni Bourei', alias: 'はなにぼうれい|꽃에 망령', d: '2020-04-22', type: 'digital', album: '盗作', track: 14, tie: 'movie', tieName: '泣きたい私は猫をかぶる' },
    { t: '春ひさぎ', ko: '하루히사기', en: 'Haru Hisagi', alias: 'はるひさぎ|봄을 팔다', d: '2020-06-03', type: 'digital', album: '盗作', track: 3, tie: null },
    { t: '思想犯', ko: '시소한', en: 'Shisouhan', alias: 'しそうはん|사상범', d: '2020-06-24', type: 'digital', album: '盗作', track: 10, tie: null },
    { t: '盗作', ko: '토사쿠', en: 'Tousaku', alias: 'とうさく|도작|표절', d: '2020-07-22', type: 'digital', album: '盗作', track: 9, tie: 'game', tieName: 'FFBE幻影戦争' },
    { t: '昼鳶', ko: '히루토비', en: 'Hirutobi', alias: 'ひるとび|낮도둑', d: '2020-07-29', type: 'album', album: '盗作', track: 2, tie: null },
    { t: 'レプリカント', ko: '레프리칸토', en: 'Replicant', alias: '레플리칸트', d: '2020-07-29', type: 'album', album: '盗作', track: 6, tie: null },
    { t: '花人局', ko: '하나츠츠모타세', en: 'Hanatsutsumotase', alias: 'はなつつもたせ', d: '2020-07-29', type: 'album', album: '盗作', track: 7, tie: null },
    { t: '逃亡', ko: '토보', en: 'Toubou', alias: 'とうぼう|도망', d: '2020-07-29', type: 'album', album: '盗作', track: 11, tie: 'other', tieName: 'よふかしのうた' },
    /* ---- 創作 (2021) ---- */
    { t: '風を食む', ko: '카제오 하무', en: 'Kaze wo Hamu', alias: 'かぜをはむ|바람을 먹다', d: '2020-10-07', type: 'digital', album: '創作', track: 4, tie: 'tv', tieName: 'NEWS23' },
    { t: '春泥棒', ko: '하루도로보', en: 'Haru Dorobou', alias: 'はるどろぼう|봄도둑', d: '2021-01-09', type: 'digital', album: '創作', track: 2, tie: 'cm', tieName: '大成建設' },
    { t: '強盗と花束', ko: '고토토 하나타바', en: 'Goutou to Hanataba', alias: 'ごうとうとはなたば|강도와 꽃다발', d: '2021-01-27', type: 'ep', album: '創作', track: 1, tie: null },
    { t: '創作', ko: '소사쿠', en: 'Sousaku', alias: 'そうさく|창작', d: '2021-01-27', type: 'ep', album: '創作', track: 3, tie: null },
    { t: '嘘月', ko: '우소츠키', en: 'Usotsuki', alias: 'うそつき|거짓말쟁이', d: '2021-01-27', type: 'ep', album: '創作', track: 5, tie: 'movie', tieName: '泣きたい私は猫をかぶる' },
    /* ---- 幻燈 (2023) ---- */
    { t: '又三郎', ko: '마타사부로', en: 'Matasaburou', alias: 'またさぶろう', d: '2021-06-07', type: 'digital', album: '幻燈', track: 9, tie: 'cm', tieName: 'dアニメストア' },
    { t: '老人と海', ko: '로진토 우미', en: 'Roujin to Umi', alias: 'ろうじんとうみ|노인과 바다', d: '2021-08-18', type: 'digital', album: '幻燈', track: 11, tie: 'cm', tieName: 'STAFF START' },
    { t: '月に吠える', ko: '츠키니 호에루', en: 'Tsuki ni Hoeru', alias: 'つきにほえる|달에게 짖다', d: '2021-10-06', type: 'digital', album: '幻燈', track: 6, tie: null },
    { t: 'ブレーメン', ko: '브레멘', en: 'Bremen', alias: '부레멘', d: '2022-07-04', type: 'digital', album: '幻燈', track: 3, tie: null },
    { t: '左右盲', ko: '사유모', en: 'Sayuumou', alias: 'さゆうもう|좌우맹', d: '2022-07-25', type: 'digital', album: '幻燈', track: 14, tie: 'movie', tieName: '今夜、世界からこの恋が消えても' },
    { t: 'チノカテ', ko: '치노카테', en: 'Chinokate', d: '2022-08-29', type: 'digital', album: '幻燈', track: 4, tie: null },
    { t: 'テレパス', ko: '테레파스', en: 'Telepath', alias: '텔레파스', d: '2023-01-12', type: 'digital', album: null, tie: 'anime', tieName: '大雪海のカイナ' },
    { t: 'アルジャーノン', ko: '아루쟈논', en: 'Algernon', alias: '앨저넌', d: '2023-02-06', type: 'digital', album: '幻燈', track: 15, tie: 'drama', tieName: '夕暮れに、手をつなぐ' },
    { t: '451', ko: '욘고이치', en: '451', d: '2023-03-08', type: 'digital', album: '幻燈', track: 7, tie: null },
    { t: '夏の肖像', ko: '나츠노 쇼조', en: 'Natsu no Shouzou', alias: 'なつのしょうぞう|여름의 초상', d: '2023-04-05', type: 'album', album: '幻燈', track: 1, tie: null },
    { t: '都落ち', ko: '미야코오치', en: 'Miyakoochi', alias: 'みやこおち|도읍을 떠나다', d: '2023-04-05', type: 'album', album: '幻燈', track: 2, tie: null },
    { t: '雪国', ko: '유키구니', en: 'Yukiguni', alias: 'ゆきぐに|설국', d: '2023-04-05', type: 'album', album: '幻燈', track: 5, tie: null },
    { t: 'パドドゥ', ko: '파도두', en: 'Pas de deux', alias: '파드되', d: '2023-04-05', type: 'album', album: '幻燈', track: 8, tie: null },
    { t: 'さよならモルテン', ko: '사요나라 모루텐', en: 'Sayonara Morten', alias: '안녕 모르텐', d: '2023-04-05', type: 'album', album: '幻燈', track: 12, tie: null },
    { t: 'いさな', ko: '이사나', en: 'Isana', alias: '고래', d: '2023-04-05', type: 'album', album: '幻燈', track: 13, tie: null },
    { t: '斜陽', ko: '샤요', en: 'Shayou', alias: 'しゃよう|사양', d: '2023-05-08', type: 'digital', album: null, tie: 'anime', tieName: '僕の心のヤバイやつ' },
    /* ---- 二人称 (2026) ---- */
    { t: '月光浴', ko: '겟코요쿠', en: 'Gekkouyoku', alias: 'げっこうよく|달빛욕', d: '2023-10-13', type: 'digital', album: '二人称', track: 19, tie: 'movie', tieName: '大雪海のカイナ ほしのけんじゃ' },
    { t: '晴る', ko: '하루', en: 'Haru', alias: 'はる|개다', d: '2024-01-05', type: 'digital', album: '二人称', track: 8, tie: 'anime', tieName: '葬送のフリーレン' },
    { t: 'ルバート', ko: '루바토', en: 'Rubato', d: '2024-05-29', type: 'digital', album: '二人称', track: 12, tie: null },
    { t: '忘れてください', ko: '와스레테 쿠다사이', en: 'Wasurete Kudasai', alias: 'わすれてください|잊어 주세요', d: '2024-07-13', type: 'digital', album: '二人称', track: 9, tie: 'drama', tieName: 'GO HOME〜警視庁身元不明人相談室〜' },
    { t: 'アポリア', ko: '아포리아', en: 'Aporia', d: '2024-10-07', type: 'digital', album: '二人称', track: 14, tie: 'anime', tieName: 'チ。-地球の運動について-' },
    { t: '太陽', ko: '타이요', en: 'Taiyou', alias: 'たいよう|태양', d: '2024-11-22', type: 'digital', album: '二人称', track: 7, tie: 'movie', tieName: '正体' },
    { t: 'へび', ko: '헤비', en: 'Hebi', alias: '뱀', d: '2025-01-17', type: 'digital', album: '二人称', track: 15, tie: 'anime', tieName: 'チ。-地球の運動について-' },
    { t: '火星人', ko: '카세이진', en: 'Kaseijin', alias: 'かせいじん|화성인', d: '2025-05-09', type: 'digital', album: '二人称', track: 11, tie: 'anime', tieName: '小市民シリーズ' },
    { t: '修羅', ko: '슈라', en: 'Shura', alias: 'しゅら|수라', d: '2025-08-08', type: 'digital', album: '二人称', track: 10, tie: 'drama', tieName: '僕達はまだその星の校則を知らない' },
    { t: 'プレイシック', ko: '플레이식', en: 'Playsick', alias: '프레이식쿠', d: '2025-12-22', type: 'digital', album: '二人称', track: 5, tie: 'cm', tieName: 'ダイハツ ムーヴ キャンバス' },
    { t: '早朝、郵便受け', ko: '소초 유빈우케', en: 'Souchou, Yuubinuke', alias: 'そうちょう、ゆうびんうけ|이른 아침, 우편함', d: '2026-03-04', type: 'album', album: '二人称', track: 1, tie: null },
    { t: '雲になる', ko: '쿠모니 나루', en: 'Kumo ni Naru', alias: 'くもになる|구름이 되다', d: '2026-03-04', type: 'album', album: '二人称', track: 2, tie: null },
    { t: '花も騒めく', ko: '하나모 자와메쿠', en: 'Hana mo Zawameku', alias: 'はなもざわめく|꽃도 술렁인다', d: '2026-03-04', type: 'album', album: '二人称', track: 3, tie: null },
    { t: '魔性', ko: '마쇼', en: 'Mashou', alias: 'ましょう|마성', d: '2026-03-04', type: 'album', album: '二人称', track: 4, tie: null },
    { t: 'ポスト春', ko: '포스토 하루', en: 'Post Haru', alias: 'ポストはる|포스트 봄', d: '2026-03-04', type: 'album', album: '二人称', track: 6, tie: null },
    { t: '火葬', ko: '카소', en: 'Kasou', alias: 'かそう|화장', d: '2026-03-04', type: 'album', album: '二人称', track: 13, tie: null },
    { t: 'うめき', ko: '우메키', en: 'Umeki', alias: '신음', d: '2026-03-04', type: 'album', album: '二人称', track: 16, tie: null },
    { t: '啄木鳥', ko: '키츠츠키', en: 'Kitsutsuki', alias: 'きつつき|딱따구리', d: '2026-03-04', type: 'album', album: '二人称', track: 17, tie: null },
    { t: '千鳥', ko: '치도리', en: 'Chidori', alias: 'ちどり|물떼새', d: '2026-03-04', type: 'album', album: '二人称', track: 20, tie: null },
    { t: '櫂', ko: '카이', en: 'Kai', alias: 'かい|노', d: '2026-03-04', type: 'album', album: '二人称', track: 21, tie: null },
    { t: '海へ', ko: '우미에', en: 'Umi e', alias: 'うみへ|바다로', d: '2026-03-04', type: 'album', album: '二人称', track: 22, tie: null },
    /* ---- 그 뒤 배포 싱글 ---- */
    { t: '茜', ko: '아카네', en: 'Akane', alias: 'あかね|꼭두서니', d: '2026-02-04', type: 'digital', album: null, tie: 'movie', tieName: '劇場版「僕の心のヤバイやつ」' },
    { t: 'あぶく', ko: '아부쿠', en: 'Abuku', alias: '거품', d: '2026-04-22', type: 'digital', album: null, tie: 'anime', tieName: 'LIAR GAME' },
    { t: '雲を抜け風下へ私だけ', ko: '쿠모오 누케 카자시모에 와타시다케', en: 'Kumo wo Nuke Kazashimo e Watashi dake', alias: 'くもをぬけかざしもへわたしだけ', d: '2026-10-14', type: 'digital', album: null, tie: 'anime', tieName: '薬屋のひとりごと' },
  ],
});
