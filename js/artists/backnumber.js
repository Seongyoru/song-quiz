'use strict';
/* =========================================================
 * back number 전체 곡 데이터 (인디즈 · 정규 앨범, 싱글 표제곡 · 커플링, 배포 싱글, FC 한정작)
 *
 * 출처 : 일본어 위키백과 (back number · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : instrumental, 라이브 버전, 데모 CD, 앨범 수록 정보가 없는 곡 (reunion 등)
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single / coupling / digital / album / ep / best
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 · 베스트 앨범, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 위키백과에 적힌 타이업만 (anime / drama / movie / cm / tv / game / other), 없으면 null
 * ========================================================= */
ARTISTS.push({
  id: 'backnumber',
  name: 'back number',
  local: { ko: '백넘버', ja: 'バックナンバー', en: 'back number' },
  color: '#2b4a8b',
  color2: '#9fb7e0',
  albums: {
    逃した魚: { d: '2009-02-18', kind: 'mini' },
    あとのまつり: { d: '2010-06-02', kind: 'full' },
    スーパースター: { d: '2011-10-26', kind: 'full' },
    blues: { d: '2012-11-21', kind: 'full' },
    ラブストーリー: { d: '2014-03-26', kind: 'full' },
    シャンデリア: { d: '2015-12-09', kind: 'full' },
    アンコール: { d: '2016-12-28', kind: 'best' },
    MAGIC: { d: '2019-03-27', kind: 'full' },
    ユーモア: { d: '2023-01-17', kind: 'full' },
  },
  songs: [
    /* ---- 逃した魚 (2009) ---- */
    { t: '重なり', ko: '카사나리', en: 'Kasanari', alias: 'かさなり|겹침', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 1, tie: null },
    { t: '春を歌にして', ko: '하루오 우타니 시테', en: 'Haru wo Uta ni Shite', alias: 'はるをうたにして|봄을 노래로 만들어', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 2, tie: null },
    { t: 'sympathy', ko: '심퍼시', en: 'sympathy', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 3, tie: null },
    { t: 'then', ko: '덴', en: 'then', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 4, tie: null },
    { t: '海岸通り', ko: '카이간도리', en: 'Kaigan Dori', alias: 'かいがんどおり|해안 거리', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 5, tie: null },
    { t: 'KNOCK', ko: '노크', en: 'KNOCK', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 6, tie: null },
    { t: '西藤公園', ko: '사이토 코엔', en: 'Saito Koen', alias: 'さいとうこうえん|사이토 공원', d: '2009-02-18', type: 'ep', album: '逃した魚', track: 7, tie: null },
    /* ---- あとのまつり (2010) ---- */
    { t: 'stay with me', ko: '스테이 위드 미', en: 'stay with me', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 1, tie: 'tv', tieName: '音楽缶' },
    { t: 'あとのうた', ko: '아토노 우타', en: 'Ato no Uta', alias: '뒤의 노래', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 2, tie: null },
    { t: '浮ついた気持ち', ko: '우와츠이타 키모치', en: 'Uwatsuita Kimochi', alias: 'うわついたきもち|들뜬 마음', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 3, tie: null },
    { t: '風の強い日', ko: '카제노 츠요이 히', en: 'Kaze no Tsuyoi Hi', alias: 'かぜのつよいひ|바람이 강한 날', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 4, tie: null },
    { t: 'tender', ko: '텐더', en: 'tender', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 5, tie: null },
    { t: 'そのドレスちょっと待った', ko: '소노 도레스 춋토 맛타', en: 'Sono Dress Chotto Matta', alias: '그 드레스 잠깐만', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 6, tie: null },
    { t: 'おまえさん', ko: '오마에상', en: 'Omaesan', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 7, tie: null },
    { t: 'ハイスクールガール', ko: '하이스쿨 걸', en: 'High School Girl', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 8, tie: null },
    { t: 'Life', ko: '라이프', en: 'Life', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 9, tie: null },
    { t: 'fallman', ko: '폴맨', en: 'fallman', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 10, tie: null },
    { t: 'march', ko: '마치', en: 'march', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 11, tie: null },
    { t: 'いつか忘れてしまっても', ko: '이츠카 와스레테 시맛테모', en: 'Itsuka Wasurete Shimattemo', alias: '언젠가 잊어버리더라도', d: '2010-06-02', type: 'album', album: 'あとのまつり', track: 12, tie: null },
    /* ---- はなびら (2011) ---- */
    { t: 'はなびら', ko: '하나비라', en: 'Hanabira', alias: '꽃잎', d: '2011-04-06', type: 'single', album: 'スーパースター', track: 1, tie: 'tv', tieName: 'JAPAN COUNTDOWN' },
    { t: 'こぼれ落ちて', ko: '코보레오치테', en: 'Koboreochite', alias: 'こぼれおちて|넘쳐 흘러', d: '2011-04-06', type: 'coupling', rel: 'はなびら', album: 'スーパースター', track: 9, tie: null },
    { t: '幸せ', ko: '시아와세', en: 'Shiawase', alias: 'しあわせ|행복', d: '2011-04-06', type: 'coupling', rel: 'はなびら', album: 'スーパースター', track: 12, tie: null },
    /* ---- 花束 (2011) ---- */
    { t: '花束', ko: '하나타바', en: 'Hanataba', alias: 'はなたば|꽃다발', d: '2011-06-22', type: 'single', album: 'スーパースター', track: 3, tie: 'cm', tieName: 'レコチョク' },
    { t: 'だいじなこと', ko: '다이지나 코토', en: 'Daiji na Koto', alias: '소중한 것', d: '2011-06-22', type: 'coupling', rel: '花束', album: null, tie: null },
    { t: '半透明人間', ko: '한토메이 닌겐', en: 'Hantomei Ningen', alias: 'はんとうめいにんげん|반투명 인간', d: '2011-06-22', type: 'coupling', rel: '花束', album: 'スーパースター', track: 6, tie: null },
    /* ---- 思い出せなくなるその日まで (2011) ---- */
    { t: '思い出せなくなるその日まで', ko: '오모이다세나쿠 나루 소노 히마데', en: 'Omoidasenaku Naru Sono Hi Made', alias: 'おもいだせなくなるそのひまで|떠올릴 수 없게 되는 그날까지', d: '2011-10-05', type: 'single', album: 'スーパースター', track: 4, tie: 'tv', tieName: 'JAPAN COUNTDOWN' },
    { t: 'はじまりはじまり', ko: '하지마리 하지마리', en: 'Hajimari Hajimari', d: '2011-10-05', type: 'coupling', rel: '思い出せなくなるその日まで', album: null, tie: null },
    { t: 'ミスターパーフェクト', ko: '미스터 퍼펙트', en: 'Mister Perfect', d: '2011-10-05', type: 'coupling', rel: '思い出せなくなるその日まで', album: 'スーパースター', track: 8, tie: null },
    /* ---- スーパースター (2011) ---- */
    { t: 'スーパースターになったら', ko: '슈퍼스타니 낫타라', en: 'Superstar ni Nattara', alias: '슈퍼스타가 되면', d: '2011-10-26', type: 'album', album: 'スーパースター', track: 2, tie: null },
    { t: 'あやしいひかり', ko: '아야시이 히카리', en: 'Ayashii Hikari', alias: '수상한 빛', d: '2011-10-26', type: 'album', album: 'スーパースター', track: 5, tie: null },
    { t: 'チェックのワンピース', ko: '첵쿠노 원피스', en: 'Check no One-piece', alias: '체크무늬 원피스', d: '2011-10-26', type: 'album', album: 'スーパースター', track: 7, tie: null },
    { t: 'リッツパーティー', ko: '릿츠 파티', en: 'Ritz Party', d: '2011-10-26', type: 'album', album: 'スーパースター', track: 10, tie: null },
    { t: '電車の窓から', ko: '덴샤노 마도카라', en: 'Densha no Mado kara', alias: 'でんしゃのまどから|전철 창문에서', d: '2011-10-26', type: 'album', album: 'スーパースター', track: 11, tie: 'movie', tieName: '群青色の、とおり道' },
    /* ---- 恋 (2012) ---- */
    { t: '恋', ko: '코이', en: 'Koi', alias: 'こい|사랑', d: '2012-03-07', type: 'single', album: 'blues', track: 12, tie: 'tv', tieName: 'Musicる TV' },
    { t: '信者よ盲目であれ', ko: '신자요 모모쿠데 아레', en: 'Shinja yo Moumoku de Are', alias: 'しんじゃよもうもくであれ|신자여 맹목이어라', d: '2012-03-07', type: 'coupling', rel: '恋', album: null, tie: null },
    { t: 'ささえる人の歌', ko: '사사에루 히토노 우타', en: 'Sasaeru Hito no Uta', alias: 'ささえるひとのうた|받쳐주는 사람의 노래', d: '2012-03-07', type: 'coupling', rel: '恋', album: 'blues', track: 8, tie: null },
    /* ---- 日曜日 (2012) ---- */
    { t: '日曜日', ko: '니치요비', en: 'Nichiyoubi', alias: 'にちようび|일요일', d: '2012-05-30', type: 'single', album: 'blues', track: 5, tie: 'drama', tieName: 'スープカレー' },
    { t: 'one room', ko: '원 룸', en: 'one room', d: '2012-05-30', type: 'coupling', rel: '日曜日', album: null, tie: null },
    { t: 'アイアムノットイナフ', ko: '아이 앰 낫 이너프', en: 'I Am Not Enough', d: '2012-05-30', type: 'coupling', rel: '日曜日', album: null, tie: null },
    /* ---- わたがし (2012) ---- */
    { t: 'わたがし', ko: '와타가시', en: 'Watagashi', alias: '솜사탕', d: '2012-07-18', type: 'single', album: 'blues', track: 3, tie: 'tv', tieName: 'COUNT DOWN TV' },
    { t: '平日のブルース', ko: '헤이지츠노 블루스', en: 'Heijitsu no Blues', alias: 'へいじつのぶるーす|평일의 블루스', d: '2012-07-18', type: 'coupling', rel: 'わたがし', album: 'blues', track: 6, tie: 'tv', tieName: 'ドデスカ!' },
    { t: '君の代わり', ko: '키미노 카와리', en: 'Kimi no Kawari', alias: 'きみのかわり|너의 대신', d: '2012-07-18', type: 'coupling', rel: 'わたがし', album: null, tie: null },
    /* ---- 青い春 (2012) ---- */
    { t: '青い春', ko: '아오이 하루', en: 'Aoi Haru', alias: 'あおいはる|푸른 봄', d: '2012-11-07', type: 'single', album: 'blues', track: 1, tie: 'drama', tieName: '高校入試' },
    { t: '助演女優症', ko: '조엔 조유쇼', en: 'Joen Joyusho', alias: 'じょえんじょゆうしょう|조연 여배우증', d: '2012-11-07', type: 'coupling', rel: '青い春', album: 'blues', track: 10, tie: null },
    { t: '反省線急行自宅行き', ko: '한세이센 큐코 지타쿠유키', en: 'Hanseisen Kyuko Jitaku Yuki', alias: 'はんせいせんきゅうこうじたくゆき|반성선 급행 자택행', d: '2012-11-07', type: 'coupling', rel: '青い春', album: null, tie: null },
    /* ---- blues (2012) ---- */
    { t: '手の鳴る方へ', ko: '테노 나루 호에', en: 'Te no Naru Hou e', alias: 'てのなるほうへ|손뼉 치는 쪽으로', d: '2012-11-21', type: 'album', album: 'blues', track: 2, tie: null },
    { t: 'エンディング', ko: '엔딩', en: 'Ending', d: '2012-11-21', type: 'album', album: 'blues', track: 4, tie: null },
    { t: '笑顔', ko: '에가오', en: 'Egao', alias: 'えがお|웃는 얼굴', d: '2012-11-21', type: 'album', album: 'blues', track: 7, tie: 'movie', tieName: '今日、恋をはじめます' },
    { t: "bird's sorrow", ko: '버즈 소로우', en: "bird's sorrow", d: '2012-11-21', type: 'album', album: 'blues', track: 9, tie: null },
    { t: '僕が今できることを', ko: '보쿠가 이마 데키루 코토오', en: 'Boku ga Ima Dekiru Koto wo', alias: 'ぼくがいまできることを|내가 지금 할 수 있는 것을', d: '2012-11-21', type: 'album', album: 'blues', track: 11, tie: null },
    /* ---- 高嶺の花子さん (2013) ---- */
    { t: '高嶺の花子さん', ko: '타카네노 하나코상', en: 'Takane no Hanako-san', alias: 'たかねのはなこさん|높은 산의 하나코 씨|높은 산의 하나코', d: '2013-06-26', type: 'single', album: 'ラブストーリー', track: 6, tie: null },
    { t: 'バースデー', ko: '버스데이', en: 'Birthday', d: '2013-06-26', type: 'coupling', rel: '高嶺の花子さん', album: null, tie: null },
    { t: '君がドアを閉めた後', ko: '키미가 도아오 시메타 아토', en: 'Kimi ga Door wo Shimeta Ato', alias: 'きみがどあをしめたあと|네가 문을 닫은 뒤', d: '2013-06-26', type: 'coupling', rel: '高嶺の花子さん', album: 'ラブストーリー', track: 8, tie: null },
    /* ---- fish (2014) ---- */
    { t: 'fish', ko: '피시', en: 'fish', d: '2014-02-05', type: 'single', album: 'ラブストーリー', track: 4, tie: null },
    { t: 'ネタンデルタール人', ko: '네탄데르탈진', en: 'Netanderthal-jin', alias: 'ねたんでるたーるじん|네탄데르탈인', d: '2014-02-05', type: 'coupling', rel: 'fish', album: 'ラブストーリー', track: 10, tie: null },
    { t: '優柔不断宣言', ko: '유주후단 센겐', en: 'Yujufudan Sengen', alias: 'ゆうじゅうふだんせんげん|우유부단 선언', d: '2014-02-05', type: 'coupling', rel: 'fish', album: null, tie: null },
    /* ---- 繋いだ手から (2014) ---- */
    { t: '繋いだ手から', ko: '츠나이다 테카라', en: 'Tsunaida Te kara', alias: 'つないだてから|잡은 손에서', d: '2014-03-19', type: 'single', album: 'ラブストーリー', track: 2, tie: 'cm', tieName: 'JTB' },
    { t: '003', ko: '제로제로쓰리', en: '003', alias: '003|공공삼', d: '2014-03-19', type: 'coupling', rel: '繋いだ手から', album: 'ラブストーリー', track: 3, tie: null },
    { t: '遠吠え', ko: '토보에', en: 'Toboe', alias: 'とおぼえ|멀리 짖기', d: '2014-03-19', type: 'coupling', rel: '繋いだ手から', album: null, tie: null },
    /* ---- ラブストーリー (2014) ---- */
    { t: '聖者の行進', ko: '세이자노 코신', en: 'Seija no Koushin', alias: 'せいじゃのこうしん|성자의 행진', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 1, tie: null },
    { t: '光の街', ko: '히카리노 마치', en: 'Hikari no Machi', alias: 'ひかりのまち|빛의 거리', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 5, tie: null },
    { t: 'MOTTO', ko: '모토', en: 'MOTTO', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 7, tie: null },
    { t: 'こわいはなし', ko: '코와이 하나시', en: 'Kowai Hanashi', alias: '무서운 이야기', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 9, tie: null },
    { t: '頬を濡らす雨のように', ko: '호호오 누라스 아메노 요니', en: 'Hoho wo Nurasu Ame no You ni', alias: 'ほほをぬらすあめのように|뺨을 적시는 비처럼', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 11, tie: null },
    { t: '世田谷ラブストーリー', ko: '세타가야 러브스토리', en: 'Setagaya Love Story', d: '2014-03-26', type: 'album', album: 'ラブストーリー', track: 12, tie: null },
    /* ---- ヒロイン (2015) ---- */
    { t: 'ヒロイン', ko: '히로인', en: 'Heroine', d: '2015-01-21', type: 'single', album: 'シャンデリア', track: 3, tie: 'cm', tieName: 'JR SKISKI' },
    { t: 'アーバンライフ', ko: '어반 라이프', en: 'Urban Life', d: '2015-01-21', type: 'coupling', rel: 'ヒロイン', album: null, tie: null },
    { t: 'アップルパイ', ko: '애플파이', en: 'Apple Pie', d: '2015-01-21', type: 'coupling', rel: 'ヒロイン', album: 'シャンデリア', track: 11, tie: null },
    /* ---- SISTER (2015) ---- */
    { t: 'SISTER', ko: '시스터', en: 'SISTER', d: '2015-05-27', type: 'single', album: 'シャンデリア', track: 1, tie: 'cm', tieName: 'ポカリスエット イオンウォーター' },
    { t: '泡と羊', ko: '아와토 히츠지', en: 'Awa to Hitsuji', alias: 'あわとひつじ|거품과 양', d: '2015-05-27', type: 'coupling', rel: 'SISTER', album: 'シャンデリア', track: 5, tie: 'cm', tieName: 'サンスター トニックシャンプー' },
    { t: '君はいらないだろうな', ko: '키미와 이라나이다로나', en: 'Kimi wa Iranai Darou na', alias: 'きみはいらないだろうな|너는 필요 없겠지', d: '2015-05-27', type: 'coupling', rel: 'SISTER', album: null, tie: null },
    /* ---- 手紙 (2015) ---- */
    { t: '手紙', ko: '테가미', en: 'Tegami', alias: 'てがみ|편지', d: '2015-08-12', type: 'single', album: 'シャンデリア', track: 12, tie: 'cm', tieName: 'NTTドコモ' },
    /* ---- クリスマスソング (2015) ---- */
    { t: 'クリスマスソング', ko: '크리스마스 송', en: 'Christmas Song', d: '2015-11-18', type: 'single', album: 'シャンデリア', track: 7, tie: 'drama', tieName: '5→9〜私に恋したお坊さん〜' },
    { t: 'Hey!Brother!', ko: '헤이 브라더', en: 'Hey!Brother!', alias: 'hey brother', d: '2015-11-18', type: 'coupling', rel: 'クリスマスソング', album: null, tie: null },
    { t: '助演女優症2', ko: '조엔 조유쇼 투', en: 'Joen Joyusho 2', alias: 'じょえんじょゆうしょう2|조연 여배우증 2', d: '2015-11-18', type: 'coupling', rel: 'クリスマスソング', album: 'シャンデリア', track: 8, tie: null },
    /* ---- シャンデリア (2015) ---- */
    { t: 'サイレン', ko: '사이렌', en: 'Siren', d: '2015-12-09', type: 'album', album: 'シャンデリア', track: 2, tie: null },
    { t: '僕は君の事が好きだけど君は僕を別に好きじゃないみたい', ko: '보쿠와 키미노 코토가 스키다케도 키미와 보쿠오 베츠니 스키쟈나이 미타이', en: 'Boku wa Kimi no Koto ga Suki dakedo Kimi wa Boku wo Betsuni Suki ja Nai Mitai', alias: '나는 너를 좋아하지만 너는 나를 별로 좋아하지 않는 것 같아', d: '2015-12-09', type: 'album', album: 'シャンデリア', track: 4, tie: null },
    { t: 'ミラーボールとシンデレラ', ko: '미러볼토 신데렐라', en: 'Mirrorball to Cinderella', alias: '미러볼과 신데렐라', d: '2015-12-09', type: 'album', album: 'シャンデリア', track: 6, tie: null },
    { t: '東京の夕焼け', ko: '도쿄노 유야케', en: 'Tokyo no Yuyake', alias: 'とうきょうのゆうやけ|도쿄의 노을', d: '2015-12-09', type: 'album', album: 'シャンデリア', track: 9, tie: null },
    { t: 'Liar', ko: '라이어', en: 'Liar', d: '2015-12-09', type: 'album', album: 'シャンデリア', track: 10, tie: null },
    /* ---- 僕の名前を (2016) ---- */
    { t: '僕の名前を', ko: '보쿠노 나마에오', en: 'Boku no Namae wo', alias: 'ぼくのなまえを|내 이름을', d: '2016-05-25', type: 'single', album: 'アンコール', track: 18, tie: 'movie', tieName: 'オオカミ少女と黒王子' },
    { t: 'パレード', ko: '퍼레이드', en: 'Parade', d: '2016-05-25', type: 'coupling', rel: '僕の名前を', album: null, tie: null },
    { t: 'ひとくいにんげん', ko: '히토쿠이 닌겐', en: 'Hitokui Ningen', alias: '식인 인간', d: '2016-05-25', type: 'coupling', rel: '僕の名前を', album: null, tie: null },
    /* ---- 黒い猫の歌 (2016) ---- */
    { t: '黒い猫の歌', ko: '쿠로이 네코노 우타', en: 'Kuroi Neko no Uta', alias: 'くろいねこのうた|검은 고양이의 노래', d: '2016-08-01', type: 'digital', album: 'アンコール', track: 6, tie: 'movie', tieName: 'ルドルフとイッパイアッテナ' },
    /* ---- ハッピーエンド (2016) ---- */
    { t: 'ハッピーエンド', ko: '해피엔드', en: 'Happy End', alias: '해피엔딩', d: '2016-11-16', type: 'single', album: 'アンコール', track: 3, tie: 'movie', tieName: 'ぼくは明日、昨日のきみとデートする' },
    { t: '君の恋人になったら', ko: '키미노 코이비토니 낫타라', en: 'Kimi no Koibito ni Nattara', alias: 'きみのこいびとになったら|너의 연인이 된다면', d: '2016-11-16', type: 'coupling', rel: 'ハッピーエンド', album: null, tie: null },
    { t: '魔女と僕', ko: '마조토 보쿠', en: 'Majo to Boku', alias: 'まじょとぼく|마녀와 나', d: '2016-11-16', type: 'coupling', rel: 'ハッピーエンド', album: null, tie: null },
    /* ---- 瞬き (2017) ---- */
    { t: '瞬き', ko: '마바타키', en: 'Mabataki', alias: 'まばたき|눈 깜빡임', d: '2017-12-20', type: 'single', album: 'MAGIC', track: 3, tie: 'movie', tieName: '8年越しの花嫁 奇跡の実話' },
    { t: 'ゆめなのであれば', ko: '유메나 노데 아레바', en: 'Yume na no de Areba', alias: '꿈이라면', d: '2017-12-20', type: 'coupling', rel: '瞬き', album: null, tie: null },
    { t: 'ARTIST', ko: '아티스트', en: 'ARTIST', d: '2017-12-20', type: 'coupling', rel: '瞬き', album: 'MAGIC', track: 5, tie: null },
    /* ---- 大不正解 (2018) ---- */
    { t: '大不正解', ko: '다이후세카이', en: 'Dai Fuseikai', alias: 'だいふせいかい|대부정해', d: '2018-08-22', type: 'single', album: 'MAGIC', track: 12, tie: 'movie', tieName: '銀魂2 掟は破るためにこそある' },
    { t: '強化書', ko: '쿄카쇼', en: 'Kyokasho', alias: 'きょうかしょ|강화서', d: '2018-08-22', type: 'coupling', rel: '大不正解', album: null, tie: null },
    { t: 'ロンリネス', ko: '론리니스', en: 'Loneliness', d: '2018-08-22', type: 'coupling', rel: '大不正解', album: 'MAGIC', track: 7, tie: null },
    /* ---- オールドファッション (2018) ---- */
    { t: 'オールドファッション', ko: '올드 패션', en: 'Old Fashion', d: '2018-11-21', type: 'single', album: 'MAGIC', track: 6, tie: 'drama', tieName: '大恋愛〜僕を忘れる君と' },
    { t: 'サマーワンダーランド', ko: '서머 원더랜드', en: 'Summer Wonderland', d: '2018-11-21', type: 'coupling', rel: 'オールドファッション', album: 'MAGIC', track: 2, tie: null },
    { t: 'Jaguar', ko: '재규어', en: 'Jaguar', d: '2018-11-21', type: 'coupling', rel: 'オールドファッション', album: null, tie: null },
    /* ---- HAPPY BIRTHDAY (2019) ---- */
    { t: 'HAPPY BIRTHDAY', ko: '해피 버스데이', en: 'HAPPY BIRTHDAY', d: '2019-02-27', type: 'single', album: 'MAGIC', track: 11, tie: 'drama', tieName: '初めて恋をした日に読む話' },
    { t: 'エキシビションデスマッチ', ko: '엑시비션 데스매치', en: 'Exhibition Deathmatch', alias: 'エキシビジョンデスマッチ', d: '2019-02-27', type: 'coupling', rel: 'HAPPY BIRTHDAY', album: 'MAGIC', track: 9, tie: null },
    { t: 'ジャスティスインザボックス', ko: '저스티스 인 더 박스', en: 'Justice in the Box', d: '2019-02-27', type: 'coupling', rel: 'HAPPY BIRTHDAY', album: null, tie: null },
    /* ---- MAGIC (2019) ---- */
    { t: '最深部', ko: '사이신부', en: 'Saishinbu', alias: 'さいしんぶ|가장 깊은 곳', d: '2019-03-27', type: 'album', album: 'MAGIC', track: 1, tie: null },
    { t: 'あかるいよるに', ko: '아카루이 요루니', en: 'Akarui Yoru ni', alias: '밝은 밤에', d: '2019-03-27', type: 'album', album: 'MAGIC', track: 4, tie: 'cm', tieName: 'キリン グリーンラベル' },
    { t: '雨と僕の話', ko: '아메토 보쿠노 하나시', en: 'Ame to Boku no Hanashi', alias: 'あめとぼくのはなし|비와 나의 이야기', d: '2019-03-27', type: 'album', album: 'MAGIC', track: 8, tie: null },
    { t: 'monaural fantasy', ko: '모노럴 판타지', en: 'monaural fantasy', d: '2019-03-27', type: 'album', album: 'MAGIC', track: 10, tie: null },
    /* ---- 배포 싱글 · ユーモア (2020-2023) ---- */
    { t: 'エメラルド', ko: '에메랄드', en: 'Emerald', d: '2020-10-12', type: 'digital', album: 'ユーモア', track: 8, tie: 'drama', tieName: '危険なビーナス' },
    { t: '怪盗', ko: '카이토', en: 'Kaito', alias: 'かいとう|괴도', d: '2021-05-24', type: 'digital', album: 'ユーモア', track: 2, tie: 'drama', tieName: '恋はDeepに' },
    { t: '水平線', ko: '스이헤이센', en: 'Suiheisen', alias: 'すいへいせん|수평선', d: '2021-08-13', type: 'digital', album: 'ユーモア', track: 12, tie: 'other', tieName: '令和2年度全国高等学校総合体育大会' },
    { t: '女王の猿', ko: '조오노 사루', en: 'Joou no Saru', alias: 'じょおうのさる|여왕의 원숭이', d: '2021-08-18', type: 'single', album: null, tie: null },
    { t: '黄色', ko: '키이로', en: 'Kiiro', alias: 'きいろ|노란색', d: '2021-09-29', type: 'single', album: 'ユーモア', track: 5, tie: 'tv', tieName: '虹とオオカミには騙されない' },
    { t: '勝手にオリンピック', ko: '캇테니 올림픽', en: 'Katte ni Olympic', alias: 'かってにおりんぴっく|멋대로 올림픽', d: '2021-09-29', type: 'coupling', rel: '黄色', album: null, tie: null },
    { t: 'ベルベットの詩', ko: '벨벳노 우타', en: 'Velvet no Uta', alias: 'べるべっとのうた|벨벳의 시', d: '2022-08-26', type: 'digital', album: 'ユーモア', track: 9, tie: 'movie', tieName: 'アキラとあきら' },
    { t: 'アイラブユー', ko: '아이 러브 유', en: 'I Love You', d: '2022-10-24', type: 'digital', album: 'ユーモア', track: 3, tie: 'drama', tieName: '舞いあがれ!' },
    { t: '秘密のキス', ko: '히미츠노 키스', en: 'Himitsu no Kiss', alias: 'ひみつのきす|비밀의 키스', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 1, tie: null },
    { t: 'ゴールデンアワー', ko: '골든 아워', en: 'Golden Hour', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 4, tie: null },
    { t: '添い寝チャンスは突然に', ko: '소이네 찬스와 토츠젠니', en: 'Soine Chance wa Totsuzen ni', alias: 'そいねちゃんすはとつぜんに|곁잠 찬스는 갑자기', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 6, tie: null },
    { t: 'Silent Journey in Tokyo', ko: '사일런트 저니 인 도쿄', en: 'Silent Journey in Tokyo', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 7, tie: null },
    { t: '赤い花火', ko: '아카이 하나비', en: 'Akai Hanabi', alias: 'あかいはなび|빨간 불꽃놀이', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 10, tie: null },
    { t: 'ヒーロースーツ', ko: '히어로 슈트', en: 'Hero Suit', d: '2023-01-17', type: 'album', album: 'ユーモア', track: 11, tie: null },
    /* ---- 2023 이후 ---- */
    { t: '怪獣のサイズ', ko: '카이주노 사이즈', en: 'Kaiju no Size', alias: 'かいじゅうのさいず|괴수의 사이즈', d: '2023-08-04', type: 'digital', album: null, tie: null },
    { t: '冬と春', ko: '후유토 하루', en: 'Fuyu to Haru', alias: 'ふゆとはる|겨울과 봄', d: '2024-01-24', type: 'digital', album: null, tie: null },
    { t: '新しい恋人達に', ko: '아타라시이 코이비토타치니', en: 'Atarashii Koibitotachi ni', alias: 'あたらしいこいびとたちに|새로운 연인들에게', d: '2024-07-15', type: 'digital', album: null, tie: 'drama', tieName: '海のはじまり' },
    { t: '楽園の地図', ko: '라쿠엔노 치즈', en: 'Rakuen no Chizu', alias: 'らくえんのちず|낙원의 지도', d: '2024-09-11', type: 'coupling', rel: '新しい恋人達に', album: null, tie: null },
    { t: 'ブルーアンバー', ko: '블루 앰버', en: 'Blue Amber', d: '2025-04-28', type: 'digital', album: null, tie: 'drama', tieName: 'あなたを奪ったその日から' },
    { t: 'ある未来より愛を込めて', ko: '아루 미라이요리 아이오 코메테', en: 'Aru Mirai yori Ai wo Komete', alias: 'あるみらいよりあいをこめて|어느 미래로부터 사랑을 담아', d: '2025-06-20', type: 'digital', album: null, tie: 'cm', tieName: 'モスバーガー' },
    { t: '幕が上がる', ko: '마쿠가 아가루', en: 'Maku ga Agaru', alias: 'まくがあがる|막이 오른다', d: '2025-07-31', type: 'digital', album: null, tie: 'movie', tieName: '劇場版TOKYO MER〜走る緊急救命室〜南海ミッション' },
    { t: 'どうしてもどうしても', ko: '도시테모 도시테모', en: 'Doushitemo Doushitemo', alias: '어떻게 해서든', d: '2025-12-27', type: 'digital', album: null, tie: 'tv', tieName: 'NHKウィンタースポーツテーマソング' },
  ],
});
