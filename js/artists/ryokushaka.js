'use strict';
/* =========================================================
 * 緑黄色社会 전체 곡 데이터 (정규 · 미니 앨범, EP, 싱글 표제곡 · 커플링, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (緑黄色社会 · 각 앨범 · 싱글 문서), 2026-11 확인
 * 빠진 것 : 인터루드(∩ · U), 커버(空に歌えば · ありあまる富), 어쿠스틱 · 라이브 버전, 인디 시절 공연장 한정 음원
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범 · EP 곡)
 * rel    : 커플링이면 표제곡 이름
 * album  : 처음 실린 정규 · 미니 앨범 · EP, 없으면 null     track : 그 앨범의 트랙 번호
 * tie    : 위키백과 타이업 표에 있는 것만 적는다 (anime / drama / movie / cm / tv / game / other), 없으면 null
 * ========================================================= */
ARTISTS.push({
  id: 'ryokushaka',
  name: '緑黄色社会',
  local: { ko: '녹황색사회', ja: 'リョクシャカ', en: 'Ryokuoushoku Shakai' },
  color: '#3aa564',
  color2: '#f2b13a',
  albums: {
    'Nice To Meet You??': { d: '2017-01-11', kind: 'mini' },
    ADORE: { d: '2017-08-02', kind: 'mini' },
    '緑黄色社会': { d: '2018-03-14', kind: 'full' },
    '溢れた水の行方': { d: '2018-11-07', kind: 'mini' },
    '幸せ -EP-': { d: '2019-05-29', kind: 'mini' },
    SINGALONG: { d: '2020-04-22', kind: 'full' },
    Actor: { d: '2022-01-26', kind: 'full' },
    'pink blue': { d: '2023-05-17', kind: 'full' },
    'Channel U': { d: '2025-02-19', kind: 'full' },
    'あたまご': { d: '2026-09-09', kind: 'full' },
  },
  songs: [
    /* ---- Nice To Meet You?? (2017) ---- */
    { t: 'またね', ko: '마타네', en: 'Matane', alias: '또 봐', d: '2017-01-11', type: 'ep', album: 'Nice To Meet You??', track: 1, tie: null },
    { t: 'アウトサイダー', ko: '아웃사이더', en: 'Outsider', d: '2017-01-11', type: 'ep', album: 'Nice To Meet You??', track: 2, tie: null },
    { t: 'regret', ko: '리그렛', en: 'regret', d: '2017-01-11', type: 'ep', album: 'Nice To Meet You??', track: 3, tie: null },
    { t: 'Bitter', ko: '비터', en: 'Bitter', d: '2017-01-11', type: 'ep', album: 'Nice To Meet You??', track: 4, tie: 'tv', tieName: '恋愛ドラマな恋がしたい' },
    { t: '丘と小さなパラダイム', ko: '오카토 치이사나 파라다이무', en: 'Oka to Chiisana Paradigm', alias: 'おかとちいさなパラダイム|언덕과 작은 패러다임', d: '2017-01-11', type: 'ep', album: 'Nice To Meet You??', track: 5, tie: null },
    /* ---- ADORE (2017) ---- */
    { t: '始まりの歌', ko: '하지마리노 우타', en: 'Hajimari no Uta', alias: 'はじまりのうた|시작의 노래', d: '2017-08-02', type: 'ep', album: 'ADORE', track: 1, tie: 'tv', tieName: '音ドキッ!' },
    { t: 'want', ko: '원트', en: 'want', d: '2017-08-02', type: 'ep', album: 'ADORE', track: 2, tie: null },
    { t: 'キラキラ', ko: '키라키라', en: 'Kira Kira', alias: '반짝반짝', d: '2017-08-02', type: 'ep', album: 'ADORE', track: 3, tie: null },
    { t: '恋って', ko: '코잇테', en: 'Koitte', alias: 'こいって|사랑이란', d: '2017-08-02', type: 'ep', album: 'ADORE', track: 4, tie: 'tv', tieName: '恋のコーチは元恋人' },
    { t: 'それなりの生活', ko: '소레나리노 세이카츠', en: 'Sorenari no Seikatsu', alias: 'それなりのせいかつ|그럭저럭한 생활', d: '2017-08-02', type: 'ep', album: 'ADORE', track: 5, tie: null },
    /* ---- 緑黄色社会 (2018) ---- */
    { t: 'Re', ko: '리', en: 'Re', d: '2018-03-14', type: 'album', album: '緑黄色社会', track: 1, tie: 'other', tieName: 'Follow Your Heart & Music' },
    { t: '大人ごっこ', ko: '오토나곳코', en: 'Otona Gokko', alias: 'おとなごっこ|어른 놀이', d: '2018-03-14', type: 'album', album: '緑黄色社会', track: 3, tie: 'tv', tieName: '夢チカ18' },
    { t: 'Alice', ko: '앨리스', en: 'Alice', d: '2018-03-14', type: 'album', album: '緑黄色社会', track: 5, tie: null },
    { t: '君が望む世界', ko: '키미가 노조무 세카이', en: 'Kimi ga Nozomu Sekai', alias: 'きみがのぞむせかい|네가 바라는 세계', d: '2018-03-14', type: 'album', album: '緑黄色社会', track: 6, tie: null },
    { t: '真夜中ドライブ', ko: '마요나카 드라이브', en: 'Mayonaka Drive', alias: 'まよなかドライブ|한밤중 드라이브', d: '2018-03-14', type: 'album', album: '緑黄色社会', track: 9, tie: null },
    /* ---- 리틀싱어 · 溢れた水の行方 (2018) ---- */
    { t: 'リトルシンガー', ko: '리틀 싱어', en: 'Little Singer', d: '2018-08-04', type: 'digital', album: '溢れた水の行方', track: 6, tie: 'other', tieName: 'きみに届け。はじまりの歌' },
    { t: 'あのころ見た光', ko: '아노코로 미타 히카리', en: 'Anokoro Mita Hikari', alias: 'あのころみたひかり|그때 본 빛', d: '2018-11-07', type: 'ep', album: '溢れた水の行方', track: 1, tie: 'tv', tieName: 'a-NN♪' },
    { t: '視線', ko: '시센', en: 'Shisen', alias: 'しせん|시선', d: '2018-11-07', type: 'ep', album: '溢れた水の行方', track: 2, tie: null },
    { t: 'Never Come Back', ko: '네버 컴 백', en: 'Never Come Back', d: '2018-11-07', type: 'ep', album: '溢れた水の行方', track: 3, tie: null },
    { t: 'サボテン', ko: '사보텐', en: 'Saboten', alias: '선인장', d: '2018-11-07', type: 'ep', album: '溢れた水の行方', track: 4, tie: null },
    /* ---- 幸せ -EP- (2019) ---- */
    { t: '幸せ', ko: '시아와세', en: 'Shiawase', alias: 'しあわせ|행복', d: '2019-05-29', type: 'ep', album: '幸せ -EP-', track: 1, tie: 'anime', tieName: '夢中に幸せ、府中町' },
    { t: '逆転', ko: '갸쿠텐', en: 'Gyakuten', alias: 'ぎゃくてん|역전', d: '2019-05-29', type: 'ep', album: '幸せ -EP-', track: 2, tie: null },
    { t: 'ひとりごと', ko: '히토리고토', en: 'Hitorigoto', alias: '혼잣말', d: '2019-05-29', type: 'ep', album: '幸せ -EP-', track: 3, tie: null },
    { t: 'にちようび', ko: '니치요비', en: 'Nichiyoubi', alias: '일요일', d: '2019-05-29', type: 'ep', album: '幸せ -EP-', track: 4, tie: 'cm', tieName: '日本工学院' },
    /* ---- SINGALONG 시기 (2019 - 2020) ---- */
    { t: '想い人', ko: '오모이비토', en: 'Omoibito', alias: 'おもいびと|그리운 사람', d: '2019-08-30', type: 'digital', album: 'SINGALONG', track: 4, tie: 'movie', tieName: '初恋ロスタイム' },
    { t: 'sabotage', ko: '사보타주', en: 'sabotage', d: '2019-11-06', type: 'single', album: 'SINGALONG', track: 2, tie: 'drama', tieName: 'G線上のあなたと私' },
    { t: 'Alright!!', ko: '올라잇', en: 'Alright!!', d: '2019-11-06', type: 'coupling', rel: 'sabotage', album: null, tie: 'tv', tieName: 'うまいッ!' },
    { t: 'Shout Baby', ko: '샤우트 베이비', en: 'Shout Baby', d: '2020-02-19', type: 'single', album: 'SINGALONG', track: 6, tie: 'anime', tieName: '僕のヒーローアカデミア' },
    { t: 'SINGALONG', ko: '싱어롱', en: 'SINGALONG', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 1, tie: null },
    { t: 'Mela!', ko: '메라', en: 'Mela!', alias: 'メラ', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 3, tie: 'cm', tieName: 'パルティ カラーリングミルク' },
    { t: 'inori', ko: '이노리', en: 'inori', alias: 'いのり|기도', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 5, tie: null },
    { t: 'スカーレット', ko: '스칼렛', en: 'Scarlet', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 7, tie: 'tv', tieName: '熱烈!ホットサンド!' },
    { t: '一歩', ko: '잇포', en: 'Ippo', alias: 'いっぽ|한 걸음', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 8, tie: null },
    { t: '愛のかたち', ko: '아이노 카타치', en: 'Ai no Katachi', alias: 'あいのかたち|사랑의 모양', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 9, tie: null },
    { t: 'Brand New World', ko: '브랜드 뉴 월드', en: 'Brand New World', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 11, tie: 'cm', tieName: 'Honda Cars' },
    { t: '冬の朝', ko: '후유노 아사', en: 'Fuyu no Asa', alias: 'ふゆのあさ|겨울 아침', d: '2020-04-22', type: 'album', album: 'SINGALONG', track: 13, tie: null },
    { t: '夏を生きる', ko: '나츠오 이키루', en: 'Natsu wo Ikiru', alias: 'なつをいきる|여름을 살다', d: '2020-07-31', type: 'digital', album: null, tie: 'tv', tieName: 'PRIDE OF KANAGAWA 2020 高校野球' },
    /* ---- Actor 시기 (2021 - 2022) ---- */
    { t: '結証', ko: '켓쇼', en: 'Kessho', alias: 'けっしょう', d: '2021-02-03', type: 'single', album: 'Actor', track: 11, tie: 'anime', tieName: '半妖の夜叉姫' },
    { t: 'LADYBUG', ko: '레이디버그', en: 'LADYBUG', d: '2021-02-03', type: 'coupling', rel: '結証', album: null, tie: 'tv', tieName: 'サタデーステーション' },
    { t: 'Copy', ko: '카피', en: 'Copy', d: '2021-02-03', type: 'coupling', rel: '結証', album: null, tie: 'other', tieName: 'UPBEAT!' },
    { t: 'たとえたとえ', ko: '타토에타토에', en: 'Tatoe Tatoe', d: '2021-03-19', type: 'digital', album: 'Actor', track: 9, tie: 'other', tieName: '第93回センバツ' },
    { t: 'ずっとずっとずっと', ko: '즛토즛토즛토', en: 'Zutto Zutto Zutto', alias: '계속계속계속', d: '2021-06-04', type: 'digital', album: 'Actor', track: 7, tie: 'cm', tieName: 'アサヒスーパードライ ザ・クール' },
    { t: 'アーユーレディー', ko: '아 유 레디', en: 'Are You Ready', d: '2021-07-03', type: 'digital', album: null, tie: 'movie', tieName: '都会のトム&ソーヤ' },
    { t: 'LITMUS', ko: '리트머스', en: 'LITMUS', d: '2021-08-25', type: 'single', album: 'Actor', track: 6, tie: 'drama', tieName: '緊急取調室' },
    { t: 'これからのこと、それからのこと', ko: '코레카라노 코토 소레카라노 코토', en: 'Korekara no Koto, Sorekara no Koto', alias: '이제부터의 일, 그 다음의 일', d: '2021-08-25', type: 'coupling', rel: 'LITMUS', album: 'Actor', track: 4, tie: 'cm', tieName: 'SEA BREEZE' },
    { t: 'Actor', ko: '액터', en: 'Actor', d: '2022-01-26', type: 'album', album: 'Actor', track: 1, tie: null },
    { t: 'キャラクター', ko: '캐릭터', en: 'Character', d: '2022-01-26', type: 'album', album: 'Actor', track: 2, tie: 'cm', tieName: 'inゼリー' },
    { t: 'merry-go-round', ko: '메리고라운드', en: 'merry-go-round', d: '2022-01-26', type: 'album', album: 'Actor', track: 3, tie: 'tv', tieName: 'アーバンスポーツ' },
    { t: '安心してね', ko: '안신시테네', en: 'Anshin Shitene', alias: 'あんしんしてね|안심해', d: '2022-01-26', type: 'album', album: 'Actor', track: 5, tie: 'tv', tieName: 'Finder TRIP' },
    { t: '揺れる', ko: '유레루', en: 'Yureru', alias: 'ゆれる|흔들리다', d: '2022-01-26', type: 'album', album: 'Actor', track: 8, tie: null },
    { t: 'アラモードにワルツ', ko: '아라모도니 와루츠', en: 'A la Mode ni Waltz', alias: '아라모드에 왈츠', d: '2022-01-26', type: 'album', album: 'Actor', track: 10, tie: null },
    { t: 'S.T.U.D', ko: '에스티유디', en: 'S.T.U.D', d: '2022-01-26', type: 'album', album: 'Actor', track: 12, tie: 'other', tieName: 'ガッツナイター' },
    { t: 'Landscape', ko: '랜드스케이프', en: 'Landscape', d: '2022-01-26', type: 'album', album: 'Actor', track: 13, tie: 'cm', tieName: 'ソリオ バンディット' },
    { t: 'スクリーンと横顔', ko: '스크린토 요코가오', en: 'Screen to Yokogao', alias: 'スクリーンとよこがお|스크린과 옆얼굴', d: '2022-01-26', type: 'album', album: 'Actor', track: 14, tie: null },
    /* ---- pink blue 시기 (2022 - 2023) ---- */
    { t: '陽はまた昇るから', ko: '히와 마타 노보루카라', en: 'Hi wa Mata Noborukara', alias: 'ひはまたのぼるから|해는 다시 뜨니까', d: '2022-04-20', type: 'single', album: 'pink blue', track: 7, tie: 'movie', tieName: 'クレヨンしんちゃん もののけニンジャ珍風伝' },
    { t: '時のいたずら', ko: '토키노 이타즈라', en: 'Toki no Itazura', alias: 'ときのいたずら|시간의 장난', d: '2022-04-20', type: 'coupling', rel: '陽はまた昇るから', album: null, tie: null },
    { t: 'ブレス', ko: '브레스', en: 'Breath', d: '2022-07-04', type: 'digital', album: null, tie: null },
    { t: 'ミチヲユケ', ko: '미치오 유케', en: 'Michi wo Yuke', alias: 'みちをゆけ|길을 가라', d: '2022-11-09', type: 'single', album: 'pink blue', track: 5, tie: 'drama', tieName: 'ファーストペンギン!' },
    { t: 'Don!!', ko: '돈', en: 'Don!!', d: '2022-11-09', type: 'coupling', rel: 'ミチヲユケ', album: 'pink blue', track: 9, tie: 'cm', tieName: 'INSTAX mini Link 2' },
    { t: 'White Rabbit', ko: '화이트 래빗', en: 'White Rabbit', d: '2023-03-22', type: 'digital', album: 'pink blue', track: 10, tie: 'other', tieName: '秘密のはなの庭' },
    { t: 'ピンクブルー', ko: '핑크 블루', en: 'Pink Blue', d: '2023-05-17', type: 'album', album: 'pink blue', track: 1, tie: null },
    { t: 'Starry Drama', ko: '스타리 드라마', en: 'Starry Drama', d: '2023-05-17', type: 'album', album: 'pink blue', track: 2, tie: 'cm', tieName: '東京シティ競馬' },
    { t: 'ジブンセイフク', ko: '지분세이후쿠', en: 'Jibun Seifuku', alias: 'じぶんせいふく', d: '2023-05-17', type: 'album', album: 'pink blue', track: 3, tie: 'cm', tieName: 'YKK' },
    { t: 'あうん', ko: '아운', en: 'Aun', d: '2023-05-17', type: 'album', album: 'pink blue', track: 4, tie: null },
    { t: 'うそつき', ko: '우소츠키', en: 'Usotsuki', alias: '거짓말쟁이', d: '2023-05-17', type: 'album', album: 'pink blue', track: 6, tie: null },
    { t: '湿気っている', ko: '시켓테이루', en: 'Shiketteiru', alias: 'しけっている|눅눅하다', d: '2023-05-17', type: 'album', album: 'pink blue', track: 8, tie: null },
    { t: 'さもなくば誰がやる', ko: '사모나쿠바 다레가 야루', en: 'Samonakuba Dare ga Yaru', alias: 'さもなくばだれがやる|아니면 누가 하나', d: '2023-05-17', type: 'album', album: 'pink blue', track: 11, tie: 'movie', tieName: '緊急取調室 THE FINAL' },
    { t: 'Slow dance', ko: '슬로 댄스', en: 'Slow dance', d: '2023-05-17', type: 'album', album: 'pink blue', track: 12, tie: null },
    /* ---- Channel U 시기 (2023 - 2025) ---- */
    { t: 'サマータイムシンデレラ', ko: '서머타임 신데렐라', en: 'Summer Time Cinderella', d: '2023-09-06', type: 'single', album: 'Channel U', track: 11, tie: 'drama', tieName: '真夏のシンデレラ' },
    { t: 'マジックアワー', ko: '매직 아워', en: 'Magic Hour', d: '2023-09-06', type: 'coupling', rel: 'サマータイムシンデレラ', album: 'Channel U', track: 6, tie: 'drama', tieName: '真夏のシンデレラ' },
    { t: '花になって', ko: '하나니 낫테', en: 'Hana ni Natte', alias: 'はなになって|꽃이 되어|Be a flower', d: '2023-12-06', type: 'single', album: 'Channel U', track: 16, tie: 'anime', tieName: '薬屋のひとりごと' },
    { t: '夢と悪魔とファンタジー', ko: '유메토 아쿠마토 판타지', en: 'Yume to Akuma to Fantasy', alias: 'ゆめとあくまとファンタジー|꿈과 악마와 판타지', d: '2023-12-06', type: 'coupling', rel: '花になって', album: null, tie: 'other', tieName: 'ZIP-FM 30th Anniversary Song' },
    { t: 'Party!!', ko: '파티', en: 'Party!!', d: '2024-03-06', type: 'single', album: 'Channel U', track: 15, tie: 'anime', tieName: 'ダンジョン飯' },
    { t: 'Tap Tap Dance', ko: '탭 탭 댄스', en: 'Tap Tap Dance', d: '2024-03-06', type: 'coupling', rel: 'Party!!', album: null, tie: 'cm', tieName: 'チャレンジユーキャン2024' },
    { t: 'ナイスアイディア!', ko: '나이스 아이디어', en: 'Nice Idea!', d: '2024-03-19', type: 'digital', album: 'Channel U', track: 3, tie: 'cm', tieName: '野菜生活100' },
    { t: '夜祭音頭', ko: '야사이온도', en: 'Yasai Ondo', alias: 'やさいおんど', d: '2024-05-21', type: 'digital', album: null, tie: null },
    { t: '恥ずかしいか青春は', ko: '하즈카시이카 세이슌와', en: 'Hazukashii ka Seishun wa', alias: 'はずかしいかせいしゅんは|부끄러운가 청춘은', d: '2024-07-09', type: 'digital', album: 'Channel U', track: 2, tie: 'tv', tieName: '今日、好きになりました。' },
    { t: '言えない', ko: '이에나이', en: 'Ienai', alias: 'いえない|말할 수 없어', d: '2024-07-30', type: 'digital', album: 'Channel U', track: 12, tie: 'tv', tieName: '今日、好きになりました。' },
    { t: '僕らはいきものだから', ko: '보쿠라와 이키모노다카라', en: 'Bokura wa Ikimono dakara', alias: 'ぼくらはいきものだから|우리는 생물이니까', d: '2024-09-20', type: 'digital', album: 'Channel U', track: 7, tie: 'tv', tieName: 'NHK全国学校音楽コンクール' },
    { t: '馬鹿の一つ覚え', ko: '바카노 히토츠오보에', en: 'Baka no Hitotsuoboe', alias: 'ばかのひとつおぼえ', d: '2024-11-13', type: 'digital', album: 'Channel U', track: 9, tie: 'movie', tieName: '六人の嘘つきな大学生' },
    { t: 'PLAYER 1', ko: '플레이어 원', en: 'PLAYER 1', d: '2025-02-19', type: 'album', album: 'Channel U', track: 1, tie: null },
    { t: 'Monkey Dance', ko: '몽키 댄스', en: 'Monkey Dance', d: '2025-02-19', type: 'album', album: 'Channel U', track: 4, tie: null },
    { t: 'Channel Me', ko: '채널 미', en: 'Channel Me', d: '2025-02-19', type: 'album', album: 'Channel U', track: 8, tie: null },
    { t: 'Each Ring', ko: '이치 링', en: 'Each Ring', d: '2025-02-19', type: 'album', album: 'Channel U', track: 10, tie: null },
    { t: 'コーヒーとましゅまろ', ko: '코히토 마슈마로', en: 'Coffee to Marshmallow', alias: '커피와 마시멜로', d: '2025-02-19', type: 'album', album: 'Channel U', track: 13, tie: null },
    { t: 'オーロラを探しに', ko: '오로라오 사가시니', en: 'Aurora wo Sagashi ni', alias: 'オーロラをさがしに|오로라를 찾으러', d: '2025-02-19', type: 'album', album: 'Channel U', track: 17, tie: null },
    /* ---- あたまご 시기 (2025 - 2026) ---- */
    { t: 'illusion', ko: '일루전', en: 'illusion', d: '2025-07-04', type: 'digital', album: 'あたまご', track: 4, tie: null },
    { t: 'つづく', ko: '츠즈쿠', en: 'Tsuzuku', alias: '계속된다', d: '2025-07-18', type: 'digital', album: 'あたまご', track: 11, tie: 'cm', tieName: 'ドコモ未来ミュージアム' },
    { t: 'My Answer', ko: '마이 앤서', en: 'My Answer', d: '2025-11-12', type: 'single', album: 'あたまご', track: 3, tie: 'drama', tieName: '緊急取調室' },
    { t: '風に乗る', ko: '카제니 노루', en: 'Kaze ni Noru', alias: 'かぜにのる|바람을 타다|Riding the wind', d: '2026-03-18', type: 'single', album: 'あたまご', track: 10, tie: 'movie', tieName: 'パリに咲くエトワール' },
    { t: 'étoile', ko: '에투알', en: 'etoile', alias: 'エトワール', d: '2026-03-18', type: 'coupling', rel: '風に乗る', album: null, tie: 'movie', tieName: 'パリに咲くエトワール' },
    { t: '章', ko: '시루시', en: 'Shirushi', alias: 'しるし', d: '2026-04-09', type: 'digital', album: 'あたまご', track: 6, tie: 'drama', tieName: '月夜行路 -答えは名作の中に-' },
    { t: '晴々', ko: '하레바레', en: 'Harebare', alias: 'はればれ', d: '2026-07-31', type: 'digital', album: 'あたまご', track: 12, tie: 'tv', tieName: 'バレーボールアジア選手権2026' },
    { t: '誰かの国', ko: '다레카노 쿠니', en: 'Dareka no Kuni', alias: 'だれかのくに|누군가의 나라', d: '2026-09-09', type: 'album', album: 'あたまご', track: 1, tie: null },
    { t: 'TABOO', ko: '터부', en: 'TABOO', d: '2026-09-09', type: 'album', album: 'あたまご', track: 2, tie: null },
    { t: 'うたまご', ko: '우타마고', en: 'Utamago', d: '2026-09-09', type: 'album', album: 'あたまご', track: 5, tie: null },
    { t: '分かりにくい', ko: '와카리니쿠이', en: 'Wakarinikui', alias: 'わかりにくい|알기 어려워', d: '2026-09-09', type: 'album', album: 'あたまご', track: 7, tie: null },
    { t: 'アルゴリズム', ko: '알고리즘', en: 'Algorithm', d: '2026-09-09', type: 'album', album: 'あたまご', track: 8, tie: null },
    { t: 'レジスダンス', ko: '레지스댄스', en: 'Resisdance', d: '2026-09-09', type: 'album', album: 'あたまご', track: 9, tie: null },
  ],
});
