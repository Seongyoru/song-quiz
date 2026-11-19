'use strict';
/* =========================================================
 * ロクデナシ 팬 퀴즈 : 프로젝트 · 곡 · 공연 (4지선다)
 * 출처 : 일본어 위키백과 「ロクデナシ (音楽プロジェクト)」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ym = (n, m) => ({ ko: `${n}년 ${m}월`, ja: `${n}年${m}月`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${n}` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'rokudenashi');

  A.readings = {
    'にんじん': '닌진', 'ナユタン星人': '나유탄 성인', 'カンザキイオリ': '칸자키 이오리', '煮ル果実': '니루카지츠', 'とあ': '토아',
    'まふまふ': '마후마후', '傘村トータ': '카사무라 토타', 'みきとP': '미키토P', '蝶々P': '쵸쵸P', 'はるな。': '하루나.',
    '一二三': '히후미', 'ビクターエンタテインメント': '빅터 엔터테인먼트', 'ソニー・ミュージック': '소니 뮤직', 'ユニバーサル': '유니버설',
    '愛ニ咲花': '아이니 사쿠하나', '溜息': '타메이키', '日陰': '히카게', '六花': '릿카',
    '終末トレインどこへいく?': '종말 트레인 어디로 가?', '【推しの子】': '최애의 아이', '葬送のフリーレン': '장송의 프리렌',
    '薬屋のひとりごと': '약사의 혼잣말', '僕のヒーローアカデミア': '나의 히어로 아카데미아',
    '渋谷ストリームホール': '시부야 스트림 홀', '日本武道館': '닛폰 부도칸', '東京国際フォーラム': '도쿄 국제 포럼', '横浜アリーナ': '요코하마 아레나',
    '思い出にならないように': '추억이 되지 않도록', '行かないで': '가지 마', 'ジャカルタ': '자카르타', 'ソウル': '서울', '台北': '타이베이', 'バンコク': '방콕',
    '日本マクドナルド': '일본 맥도날드', 'カントリー・ロード': '컨트리 로드', '森永製菓': '모리나가 제과', '大塚製薬': '오츠카 제약',
    '茶山': '', 'さよならの夏～コクリコ坂から～': '안녕 여름 ~코쿠리코 언덕에서~', 'いのちの名前': '생명의 이름', '君をのせて': '너를 태우고', 'テルーの唄': '테루의 노래',
  };
  delete A.readings['茶山'];

  A.trivia = [
    /* 프로젝트 */
    { q: q('ロクデナシ 의 보컬은?', 'ロクデナシのボーカルは？', 'Who is the vocalist of Rokudenashi?'), a: 'にんじん', x: ['はるな。', 'Ado', 'suis'] },
    { q: q('にんじん 이 처음 활동을 시작한 SNS 는?', 'にんじんが最初に活動を始めたSNSは？', 'On which platform did Ninjin first start posting?'), a: 'TikTok', x: ['ニコニコ動画', 'Instagram', 'X (Twitter)'] },
    { q: q('ロクデナシ 가 곡을 내기 시작한 해는?', 'ロクデナシが楽曲の発表を始めた年は？', 'In what year did Rokudenashi start releasing songs?'), a: y(2021), x: [y(2019), y(2020), y(2022)] },
    { q: q('ロクデナシ 는 어떤 형태의 음악 프로젝트일까?', 'ロクデナシはどんな形の音楽プロジェクト？', 'What kind of project is Rokudenashi?'), a: { ko: '보컬과 곡마다 바뀌는 보카로P 작곡가', ja: 'ボーカルと楽曲ごとに迎えるボカロPらコンポーザー', en: 'A vocalist with a different Vocaloid producer for each song' }, x: [{ ko: '4인조 록 밴드', ja: '4人組ロックバンド', en: 'A four-piece rock band' }, { ko: '남녀 2인조 유닛', ja: '男女2人組ユニット', en: 'A male-female duo' }, { ko: '아이돌 그룹', ja: 'アイドルグループ', en: 'An idol group' }] },
    { q: q('소속 레이블은?', '所属レーベルは？', 'Which label are they on?'), a: 'ビクターエンタテインメント', x: ['ソニー・ミュージック', 'ユニバーサル', 'avex'] },
    /* 곡 */
    { q: q('첫 곡은?', '最初に発表された曲は？', 'What was their first song?'), a: '三時のキス', x: ['ただ声一つ', 'まちぼうけ', '知らないままで'] },
    { q: q('유튜브 조회수 2억 회를 넘긴 대표곡은?', 'YouTube再生回数2億回を超える代表曲は？', 'Which signature song has over 200 million YouTube views?'), a: 'ただ声一つ', x: ['愛が灯る', 'スピカ', 'アルビレオ'] },
    { q: q('「ただ声一つ」 를 만든 작곡가는?', '「ただ声一つ」を手がけたコンポーザーは？', 'Who composed "Tada Koe Hitotsu"?'), a: 'MIMI', x: ['ナユタン星人', 'カンザキイオリ', '40mP'] },
    { q: q('「スピカ」「アルビレオ」「イオ」「カロン」 을 만든 작곡가는?', '「スピカ」「アルビレオ」「イオ」「カロン」を手がけたコンポーザーは？', 'Who composed "Spica", "Albireo", "Io" and "Charon"?'), a: 'ナユタン星人', x: ['MIMI', 'Aqu3ra', 'みきとP'] },
    { q: q('「眼差し」「草々不一」「生活の」 을 만든 작곡가는?', '「眼差し」「草々不一」「生活の」を手がけたコンポーザーは？', 'Who wrote "Manazashi", "Sousou Fuitsu" and "Seikatsu no"?'), a: 'カンザキイオリ', x: ['ナユタン星人', '煮ル果実', 'とあ'] },
    { q: q('「鯨の落ちる街」 의 작사 · 작곡가는?', '「鯨の落ちる街」の作詞・作曲は？', 'Who wrote "Kujira no Ochiru Machi"?'), a: 'まふまふ', x: ['Eve', 'カンザキイオリ', 'MIMI'] },
    { q: q('「ホウキボシ」 를 만든 아티스트는?', '「ホウキボシ」を手がけたアーティストは？', 'Who created "Houkiboshi"?'), a: 'Eve', x: ['まふまふ', 'Guiano', 'Aqu3ra'] },
    { q: q('「ユリイカ」 의 작사 · 작곡가는?', '「ユリイカ」の作詞・作曲は？', 'Who wrote "Eureka"?'), a: '傘村トータ', x: ['MIMI', 'みきとP', '蝶々P'] },
    { q: q('「子供騙し」 를 만든 작곡가는?', '「子供騙し」を手がけたコンポーザーは？', 'Who composed "Kodomodamashi"?'), a: '煮ル果実', x: ['とあ', 'ナユタン星人', '一二三'] },
    { q: q('MIMI 곡의 일러스트를 주로 맡는 일러스트레이터는?', 'MIMIの楽曲のイラストを主に担当するイラストレーターは？', 'Which illustrator usually draws for the MIMI songs?'), a: 'faPka', x: ['Y_Y', '周憂', 'あぷちとち'] },
    /* 작품 */
    { q: q('첫 정규 앨범의 제목은?', '1stアルバムのタイトルは？', 'What is the title of their first album?'), a: '愛ニ咲花', x: ['六花', '溜息', '日陰'] },
    { q: q('첫 미니 앨범의 제목은?', '1stミニアルバムのタイトルは？', 'What is the title of their first mini album?'), a: '溜息', x: ['日陰', '六花', '愛ニ咲花'] },
    { q: q('2025년 12월에 나온 2nd 앨범의 제목은?', '2025年12月発売の2ndアルバムのタイトルは？', 'What is the title of their 2nd album (Dec 2025)?'), a: '六花', x: ['愛ニ咲花', '日陰', '溜息'] },
    { q: q('1st 싱글 「ユリイカ」 에 함께 실린 곡은?', '1stシングル「ユリイカ」に収録されたカップリング曲は？', 'Which song was the coupling on the 1st single "Eureka"?'), a: 'About you', x: ['アルビレオ', 'あやふや', '心の奥'] },
    /* 타이업 */
    { q: q('「ユリイカ」 가 엔딩 테마로 쓰인 TV 애니메이션은?', '「ユリイカ」がエンディングテーマに起用されたTVアニメは？', 'Which TV anime used "Eureka" as its ending theme?'), a: '終末トレインどこへいく?', x: ['葬送のフリーレン', '薬屋のひとりごと', '僕のヒーローアカデミア'] },
    { q: q('「草々不一」 가 주제가로 쓰인 실사 드라마는?', '「草々不一」が主題歌に起用された実写ドラマは？', 'Which live-action drama used "Sousou Fuitsu" as a theme song?'), a: '【推しの子】', x: ['葬送のフリーレン', '薬屋のひとりごと', '終末トレインどこへいく?'] },
    { q: q('にんじん 이 2024년에 CM 송 「カントリー・ロード」 를 부른 회사는?', 'にんじんが2024年にCMで「カントリー・ロード」を歌った企業は？', 'For which company did Ninjin sing "Country Road" in a 2024 commercial?'), a: '日本マクドナルド', x: ['森永製菓', '大塚製薬', 'ユニバーサル'] },
    /* 공연 */
    { q: q('ロクデナシ 로서 첫 라이브를 연 도시는? (2024)', 'ロクデナシとしての初ライブが行われた都市は？（2024年）', 'In which city did Rokudenashi play their first live (2024)?'), a: 'ジャカルタ', x: ['ソウル', '台北', 'バンコク'] },
    { q: q('첫 원맨 라이브 「Vol.0」 의 첫 공연장은?', '初ワンマン「Vol.0」の最初の会場は？', 'Where was the first show of their first solo concert "Vol.0"?'), a: '渋谷ストリームホール', x: ['日本武道館', '東京国際フォーラム', '横浜アリーナ'] },
    { q: q('2025년 1st 원맨 투어의 이름은?', '2025年の1stワンマンライブのタイトルは？', 'What was the title of their 1st solo tour in 2025?'), a: '思い出にならないように', x: ['行かないで', '六花', 'Twilight'] },
    { q: q('첫 원맨 「Vol.0」 때 추가로 공연한 해외 도시는?', '初ワンマン「Vol.0」で追加開催した海外都市は？', 'Which overseas city was added to their first solo show "Vol.0"?'), a: 'ソウル', x: ['台北', 'ジャカルタ', 'バンコク'] },
    { q: q('2024년 연말에 처음 나간 대형 페스티벌은?', '2024年末に出演した大型フェスは？', 'Which major year-end festival did they play in 2024?'), a: 'COUNTDOWN JAPAN 24/25', x: ['ROCK IN JAPAN FESTIVAL', 'SUMMER SONIC', 'FUJI ROCK FESTIVAL'] },
    { q: q('첫 정규 앨범이 나온 때는?', '1stアルバムが発売された時期は？', 'When was their first album released?'), a: ym(2023, 12), x: [ym(2022, 12), ym(2024, 6), ym(2025, 2)] },
  ];
})();
