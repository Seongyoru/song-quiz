'use strict';
/* =========================================================
 * ヨルシカ 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「ヨルシカ」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const NB = 'n-buna', SU = 'suis';

  ARTISTS.find((a) => a.id === 'yorushika').readings = {
    '後書き': '아토가키', 'CLUB 夜遊': '클럽 요아소비', '前書き': '마에가키', '夜の会': '요루노 카이',
    'キタニタツヤ': '키타니 타츠야', '平畑徹也': '히라하타 테츠야', '下鶴光康': '시모즈루 미츠야스',
    '日本武道館': '닛폰 부도칸', '大阪城ホール': '오사카조 홀', '東京ドーム': '도쿄 돔', 'さいたまスーパーアリーナ': '사이타마 슈퍼 아레나', '横浜アリーナ': '요코하마 아레나',
    '前世': '젠세', '月光': '겟코', '月と猫のダンス': '츠키토 네코노 단스', '一人称': '이치닌쇼', '盗作 再演': '토사쿠 사이엔',
    '泣きたい私は猫をかぶる': '울고 싶은 나는 고양이 가면을 쓴다', '葬送のフリーレン': '장송의 프리렌', 'チ。-地球の運動について-': '지. -지구의 운동에 대하여-',
    '僕の心のヤバイやつ': '내 마음의 위험한 녀석', '大雪海のカイナ': '대설해의 카이나', '今夜、世界からこの恋が消えても': '오늘 밤, 세계에서 이 사랑이 사라진다 해도',
    '小市民シリーズ': '소시민 시리즈', '薬屋のひとりごと': '약사의 혼잣말', '【推しの子】': '최애의 아이', 'BEASTARS': '비스타즈',
    '音楽画集': '음악 화집', '書簡型小説': '서간형 소설', '写真集': '사진집', '絵本': '그림책',
  };

  ARTISTS.find((a) => a.id === 'yorushika').trivia = [
    /* 멤버 */
    { q: q('보컬을 맡은 멤버는?', 'ボーカル担当のメンバーは？', 'Who is the vocalist?'), a: SU, x: [NB, 'ikura', 'Ayase'] },
    { q: q('모든 곡의 작사 · 작곡 · 편곡을 맡는 멤버는?', '全楽曲の作詞・作曲・編曲を担当するメンバーは？', 'Who writes, composes and arranges every song?'), a: NB, x: [SU, 'キタニタツヤ', q('두 사람이 함께', '2人で共作', 'Both together')] },
    { q: q('n-buna 가 맡은 악기는?', 'n-bunaの担当楽器は？', 'What instrument does n-buna play?'), a: q('기타', 'ギター', 'Guitar'), x: [q('베이스', 'ベース', 'Bass'), q('드럼', 'ドラムス', 'Drums'), q('키보드', 'キーボード', 'Keyboard')] },
    { q: q('결성 전 n-buna 가 하던 활동은?', '結成前のn-bunaの活動は？', 'What was n-buna known as before Yorushika?'), a: q('보카로P', 'ボカロP', 'Vocaloid producer'), x: [q('성우', '声優', 'Voice actor'), q('소설가', '小説家', 'Novelist'), q('드러머', 'ドラマー', 'Drummer')] },
    { q: q('n-buna 가 처음으로 메인 보컬을 맡은 곡은?', 'n-bunaが初めてメインボーカルを務めた曲は？', 'On which song did n-buna sing lead vocals for the first time?'), a: '451', x: ['テレパス', '斜陽', 'ルバート'] },
    { q: q('n-buna 가 suis 와 함께하기로 한 큰 이유로 든 것은?', 'n-bunaがsuisと一緒にやろうと決めた大きな理由は？', 'What did n-buna cite as a big reason for teaming up with suis?'), a: q('목소리 결', '声質', 'Her voice'), x: [q('기타 실력', 'ギターの腕前', 'Her guitar skills'), q('작사 능력', '作詞の才能', 'Her lyric writing'), q('같은 고향', '同じ出身地', 'Same hometown')] },
    { q: q('결성 때부터 베이스로 서포트해 온 뮤지션은?', '結成当初からベースでサポートしてきたミュージシャンは？', 'Which musician has supported them on bass since the beginning?'), a: 'キタニタツヤ', x: ['平畑徹也', '下鶴光康', 'Ayase'] },
    /* 밴드 */
    { q: q('ヨルシカ 결성을 발표한 해는?', 'ヨルシカの結成を発表した年は？', 'In which year was the formation of Yorushika announced?'), a: y(2017), x: [y(2015), y(2016), y(2018)] },
    { q: q('첫 미니 앨범은?', '1stミニアルバムは？', 'What was their first mini album?'), a: '『夏草が邪魔をする』', x: ['『負け犬にアンコールはいらない』', '『創作』', '『エルマ』'] },
    { q: q('첫 정규 앨범은?', '1stフルアルバムは？', 'What was their first full album?'), a: '『だから僕は音楽を辞めた』', x: ['『エルマ』', '『盗作』', '『幻燈』'] },
    { q: q('메이저 데뷔작은?', 'メジャーデビュー作は？', 'What was their major-label debut release?'), a: '『エルマ』', x: ['『だから僕は音楽を辞めた』', '『盗作』', '『夏草が邪魔をする』'] },
    { q: q('「ただ君に晴れ」 가 실린 앨범은?', '「ただ君に晴れ」が収録されたアルバムは？', 'Which album includes "Tada Kimi ni Hare"?'), a: '『負け犬にアンコールはいらない』', x: ['『夏草が邪魔をする』', '『エルマ』', '『盗作』'] },
    { q: q('공식 팬클럽 이름은?', 'オフィシャルファンクラブの名前は？', 'What is the official fan club called?'), a: '後書き', x: ['前書き', '夜の会', 'CLUB 夜遊'] },
    { q: q('2023년에 나온 『幻燈』 은 어떤 형태의 작품?', '2023年発売の『幻燈』はどんな形の作品？', 'What kind of release was "Gentou" (2023)?'), a: '音楽画集', x: ['写真集', '書簡型小説', '絵本'] },
    { q: q('2026년 앨범 『二人称』 과 이어지는 같은 이름의 책은?', '2026年のアルバム『二人称』と連動する同名の本は？', 'What kind of book accompanies the 2026 album "Nininshou"?'), a: '書簡型小説', x: ['音楽画集', '写真集', '絵本'] },
    { q: q('2020년 일본 골드 디스크 대상에서 받은 상은?', '2020年の日本ゴールドディスク大賞で受賞したのは？', 'What did they win at the 2020 Japan Gold Disc Award?'), a: q('베스트 5 뉴 아티스트', 'ベスト5ニュー・アーティスト', 'Best 5 New Artists'), x: [q('아티스트 오브 더 이어', 'アーティスト・オブ・ザ・イヤー', 'Artist of the Year'), q('송 오브 더 이어', 'ソング・オブ・ザ・イヤー', 'Song of the Year'), q('앨범 오브 더 이어', 'アルバム・オブ・ザ・イヤー', 'Album of the Year')] },
    { q: q('「LIVE 2023 前世」 에서 처음 공연한 곳은?', '「LIVE 2023 前世」で初めて公演した会場は？', 'Which venue did they first play during "LIVE 2023 Zense"?'), a: '日本武道館', x: ['東京ドーム', 'さいたまスーパーアリーナ', '横浜アリーナ'] },
    { q: q('2019년 라이브 투어의 이름은?', '2019年のライブツアーのタイトルは？', 'What was the title of their 2019 live tour?'), a: '月光', x: ['前世', '月と猫のダンス', '一人称'] },
    { q: q('2026년 라이브 투어의 이름은?', '2026年のライブツアーのタイトルは？', 'What is the title of their 2026 live tour?'), a: '一人称', x: ['前世', '月光', '盗作 再演'] },
    { q: q('처음 낸 아날로그 싱글은?', '初のアナログ・シングルは？', 'What was their first analog single?'), a: '『ルバート/ブレーメン』', x: ['『晴る/アポリア』', '『春泥棒/花に亡霊』', '『斜陽/テレパス』'] },
    /* 타이업 */
    { q: q('「花に亡霊」 이 주제가인 애니메이션 영화는?', '「花に亡霊」が主題歌のアニメ映画は？', 'Which anime film used "Hana ni Bourei" as its theme song?'), a: '泣きたい私は猫をかぶる', x: ['大雪海のカイナ', '僕の心のヤバイやつ', '今夜、世界からこの恋が消えても'] },
    { q: q('「晴る」 가 오프닝 테마인 애니메이션은?', '「晴る」がオープニングテーマのアニメは？', 'Which anime used "Haru" as its opening theme?'), a: '葬送のフリーレン', x: ['薬屋のひとりごと', 'チ。-地球の運動について-', '【推しの子】'] },
    { q: q('「アポリア」 와 「へび」 가 엔딩 테마인 애니메이션은?', '「アポリア」「へび」がエンディングテーマのアニメは？', 'Which anime used "Aporia" and "Hebi" as ending themes?'), a: 'チ。-地球の運動について-', x: ['葬送のフリーレン', '小市民シリーズ', '大雪海のカイナ'] },
    { q: q('「斜陽」 이 오프닝 테마인 애니메이션은?', '「斜陽」がオープニングテーマのアニメは？', 'Which anime used "Shayou" as its opening theme?'), a: '僕の心のヤバイやつ', x: ['大雪海のカイナ', '小市民シリーズ', 'BEASTARS'] },
    { q: q('「テレパス」 가 오프닝 테마인 애니메이션은?', '「テレパス」がオープニングテーマのアニメは？', 'Which anime used "Telepath" as its opening theme?'), a: '大雪海のカイナ', x: ['僕の心のヤバイやつ', '薬屋のひとりごと', '葬送のフリーレン'] },
    { q: q('「火星人」 이 오프닝 테마인 애니메이션은?', '「火星人」がオープニングテーマのアニメは？', 'Which anime used "Kaseijin" as its opening theme?'), a: '小市民シリーズ', x: ['チ。-地球の運動について-', '薬屋のひとりごと', '大雪海のカイナ'] },
    { q: q('「雲を抜け風下へ私だけ」 가 오프닝 테마인 애니메이션은?', '「雲を抜け風下へ私だけ」がオープニングテーマのアニメは？', 'Which anime used "Kumo wo Nuke Kazashimo e Watashi dake" as its opening theme?'), a: '薬屋のひとりごと', x: ['葬送のフリーレン', '小市民シリーズ', '僕の心のヤバイやつ'] },
    { q: q('「左右盲」 이 주제가인 영화는?', '「左右盲」が主題歌の映画は？', 'Which film used "Sayuumou" as its theme song?'), a: '今夜、世界からこの恋が消えても', x: ['泣きたい私は猫をかぶる', '大雪海のカイナ', '僕の心のヤバイやつ'] },
  ];
})();
