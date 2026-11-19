'use strict';
/* =========================================================
 * YOASOBI 팬 퀴즈 : 멤버 · 유닛 (4지선다)
 * 출처 : 일본어 위키백과 「YOASOBI」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const AY = 'Ayase', IK = 'ikura';

  ARTISTS.find((a) => a.id === 'yoasobi').readings = {
    '幾田りら': '이쿠타 리라', '山口県': '야마구치현', '東京都': '도쿄도', '大阪府': '오사카부', '北海道': '홋카이도', '福岡県': '후쿠오카현',
    '星野舞夜': '호시노 마요', 'タナトスの誘惑': '타나토스의 유혹', '板垣巴留': '이타가키 파루',
    '島本理生': '시마모토 리오', '森絵都': '모리 에토', '辻村深月': '츠지무라 미즈키', '宮部みゆき': '미야베 미유키',
    'あいみょん': '아이묭', '君はロックを聴かない': '너는 록을 듣지 않아',
    '小説を音楽にする': '소설을 음악으로 만든다', '映画を音楽にする': '영화를 음악으로 만든다', '漫画を音楽にする': '만화를 음악으로 만든다', '夢を音楽にする': '꿈을 음악으로 만든다',
    'CLUB 夜遊': '클럽 요아소비', '夜遊び': '요아소비 (밤놀이)',
    '電光石火': '덴코섹카', '動画工房': '도가코보',
    '葬送のフリーレン': '장송의 프리렌', '機動戦士ガンダム 水星の魔女': '기동전사 건담 수성의 마녀', '【推しの子】': '최애의 아이',
    'ポケットモンスター スカーレット・バイオレット': '포켓몬스터 스칼렛·바이올렛', 'ウィッチウォッチ': '위치 워치', 'めざましテレビ': '메자마시 테레비',
    'ジャカルタ': '자카르타', 'マニラ': '마닐라', 'ソウル': '서울', 'バンコク': '방콕',
    'ソニーミュージック': '소니 뮤직',
  };

  ARTISTS.find((a) => a.id === 'yoasobi').trivia = [
    /* 멤버 */
    { q: q('보컬을 맡은 멤버는?', 'ボーカル担当のメンバーは？', 'Who is the vocalist?'), a: IK, x: [AY, 'n-buna', 'suis'] },
    { q: q('작곡 · 프로듀스를 맡은 멤버는?', 'コンポーザー担当のメンバーは？', 'Who is the composer?'), a: AY, x: [IK, 'n-buna', 'Vaundy'] },
    { q: q('ikura 의 솔로 활동 이름은?', 'ikuraのソロ名義は？', "What is ikura's solo name?"), a: '幾田りら', x: ['suis', 'Ado', 'milet'] },
    { q: q('Ayase 의 출신지는?', 'Ayaseの出身地は？', 'Where is Ayase from?'), a: '山口県', x: ['東京都', '大阪府', '福岡県'] },
    { q: q('ikura 의 출신지는?', 'ikuraの出身地は？', 'Where is ikura from?'), a: '東京都', x: ['山口県', '北海道', '大阪府'] },
    { q: q('ikura 의 생일은?', 'ikuraの誕生日は？', "When is ikura's birthday?"), a: d(9, 25), x: [d(4, 4), d(10, 1), d(12, 15)] },
    { q: q('Ayase 의 생일은?', 'Ayaseの誕生日は？', "When is Ayase's birthday?"), a: d(4, 4), x: [d(9, 25), d(10, 1), d(11, 16)] },
    { q: q('결성 전 Ayase 가 하던 활동은?', '結成前のAyaseの活動は？', 'What was Ayase known as before YOASOBI?'), a: q('보카로P', 'ボカロP', 'Vocaloid producer'), x: [q('아이돌', 'アイドル', 'Idol'), q('성우', '声優', 'Voice actor'), q('소설가', '小説家', 'Novelist')] },
    { q: q('Ayase 가 ikura 를 발견한 계기가 된 커버곡은?', 'AyaseがikuraをスカウトするきっかけとなったInstagramの弾き語り曲は？', 'Which cover song on Instagram led Ayase to find ikura?'), a: '君はロックを聴かない', x: ['マリーゴールド', 'Lemon', 'Pretender'] },
    { q: q('그 커버곡의 원곡 가수는?', 'その曲のオリジナル歌手は？', 'Who originally sang that song?'), a: 'あいみょん', x: ['米津玄師', 'Official髭男dism', 'LiSA'] },
    /* 유닛 */
    { q: q('YOASOBI 의 콘셉트는?', 'YOASOBIのコンセプトは？', "What is YOASOBI's concept?"), a: '小説を音楽にする', x: ['映画を音楽にする', '漫画を音楽にする', '夢を音楽にする'] },
    { q: q('YOASOBI 가 결성된 해는?', 'YOASOBIが結成された年は？', 'In which year was YOASOBI formed?'), a: y(2019), x: [y(2017), y(2018), y(2020)] },
    { q: q('결성의 계기가 된 소설 · 일러스트 투고 사이트는?', '結成のきっかけとなった小説＆イラスト投稿サイトは？', 'Which novel posting site led to the formation of YOASOBI?'), a: 'monogatary.com', x: ['小説家になろう', 'pixiv', 'カクヨム'] },
    { q: q('데뷔곡 「夜に駆ける」 의 원작 소설은?', 'デビュー曲「夜に駆ける」の原作小説は？', 'What is the original novel of the debut song "Yoru ni Kakeru"?'), a: 'タナトスの誘惑', x: ['獅子座流星群のままに', '世界の終わりと、さよならのうた', '大正ロマンス'] },
    { q: q('「夜に駆ける」 원작 소설의 작가는?', '「夜に駆ける」の原作小説の作者は？', 'Who wrote the original story of "Yoru ni Kakeru"?'), a: '星野舞夜', x: ['板垣巴留', '島本理生', '森絵都'] },
    { q: q('공식 팬클럽 이름은?', 'オフィシャルファンクラブの名前は？', 'What is the official fan club called?'), a: 'CLUB 夜遊', x: ['後書き', 'JAM\'S', 'YOASOBI FAMILY'] },
    { q: q('처음 나온 CD 는?', '初めてのCD作品は？', 'What was their first CD release?'), a: '『THE BOOK』', x: ['『E-SIDE』', '『THE BOOK 2』', '『はじめての - EP』'] },
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did they first appear on NHK Kohaku?'), a: y(2020), x: [y(2019), y(2021), y(2023)] },
    { q: q('처음 관객 앞에서 연 단독 라이브 이름은?', '初の有観客ライブのタイトルは？', 'What was the title of their first live show with an audience?'), a: 'NICE TO MEET YOU', x: ['KEEP OUT THEATER', '電光石火', 'POP OUT'] },
    { q: q('처음 연 아레나 투어 이름은?', '初のアリーナツアーのタイトルは？', 'What was their first arena tour called?'), a: '電光石火', x: ['NICE TO MEET YOU', 'KEEP OUT THEATER', '超現実'] },
    { q: q('처음 해외 라이브를 한 도시는?', '初めて海外でライブを行った都市は？', 'In which city did they first perform overseas?'), a: 'ジャカルタ', x: ['マニラ', 'ソウル', 'バンコク'] },
    { q: q('「はじめての」 프로젝트에서 「ミスター」 의 원작을 쓴 작가는?', '「はじめての」プロジェクトで「ミスター」の原作を書いた作家は？', 'Who wrote the original story for "Mister" in the "Hajimete no" project?'), a: '島本理生', x: ['森絵都', '辻村深月', '宮部みゆき'] },
    { q: q('「アイドル」 가 오프닝 테마인 애니메이션은?', '「アイドル」がオープニングテーマのアニメは？', 'Which anime used "Idol" as its opening theme?'), a: '【推しの子】', x: ['葬送のフリーレン', '機動戦士ガンダム 水星の魔女', 'ウィッチウォッチ'] },
    { q: q('「勇者」 가 오프닝 테마인 애니메이션은?', '「勇者」がオープニングテーマのアニメは？', 'Which anime used "Yuusha" as its opening theme?'), a: '葬送のフリーレン', x: ['【推しの子】', '機動戦士ガンダム 水星の魔女', 'BEASTARS'] },
    { q: q('「祝福」 가 오프닝 테마인 애니메이션은?', '「祝福」がオープニングテーマのアニメは？', 'Which anime used "Shukufuku" as its opening theme?'), a: '機動戦士ガンダム 水星の魔女', x: ['葬送のフリーレン', '【推しの子】', 'BEASTARS'] },
    { q: q('「怪物」 · 「優しい彗星」 이 쓰인 애니메이션은?', '「怪物」「優しい彗星」が使われたアニメは？', 'Which anime used "Kaibutsu" and "Yasashii Suisei"?'), a: 'BEASTARS', x: ['葬送のフリーレン', '【推しの子】', 'ウィッチウォッチ'] },
    { q: q('「Biri-Biri」 가 영감을 받은 게임은?', '「Biri-Biri」がインスパイアソングとなったゲームは？', 'Which game inspired "Biri-Biri"?'), a: 'ポケットモンスター スカーレット・バイオレット', x: ['オーバーウォッチ', 'スプラトゥーン3', 'ファイナルファンタジーXVI'] },
    { q: q('「もう少しだけ」 가 테마송이 된 프로그램은?', '「もう少しだけ」がテーマソングとなった番組は？', 'Which TV show used "Mou Sukoshi Dake" as its theme song?'), a: 'めざましテレビ', x: ['NEWS23', 'ZIP!', 'スッキリ'] },
    { q: q('「夜に駆ける」 가 일본에서 처음으로 달성한 스트리밍 기록은?', '「夜に駆ける」が日本初で達成したストリーミング記録は？', 'What streaming milestone did "Yoru ni Kakeru" reach first in Japan?'), a: q('10억 회', '10億回', '1 billion'), x: [q('5억 회', '5億回', '500 million'), q('20억 회', '20億回', '2 billion'), q('1억 회', '1億回', '100 million')] },
    { q: q('「アイドル」 가 일본 곡 처음으로 1위를 한 차트는?', '「アイドル」が日本の楽曲で初めて1位を獲得したチャートは？', 'Which chart did "Idol" top as the first Japanese song ever?'), a: 'Billboard Global Excl. U.S.', x: ['Billboard Hot 100', 'UK Singles Chart', 'Billboard Global 200'] },
  ];
})();
