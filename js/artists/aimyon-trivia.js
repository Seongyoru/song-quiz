'use strict';
/* =========================================================
 * あいみょん 팬 퀴즈 : 아티스트 · 활동 (4지선다)
 * 출처 : 일본어 위키백과 「あいみょん」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'aimyon');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    'あいみょん': '아이묭', '兵庫県': '효고현', '西宮市': '니시노미야시', '大阪府': '오사카부', '京都府': '교토부', '神戸市': '고베시', '尼崎市': '아마가사키시',
    '阪神甲子園球場': '한신 고시엔 구장', '大阪城ホール': '오사카성 홀', '日本武道館': '닛폰 부도칸', '京セラドーム大阪': '교세라 돔 오사카',
    '台湾': '대만', '韓国': '한국', '香港': '홍콩', '上海': '상하이',
    'エンズエンターテイメント': '엔즈 엔터테인먼트',
    '吉祥寺だけが住みたい街ですか?': '키치조지만이 살고 싶은 거리인가요?', '恋愛奇譚集': '렌아이 키탄슈',
    'クレヨンしんちゃん': '크레용 신짱', 'らんまん': '란만', '窓ぎわのトットちゃん': '창가의 토토', 'ドラえもん': '도라에몽',
    '君たちはどう生きるか': '그대들은 어떻게 살 것인가', 'ヒミ': '히미', 'キリコ': '키리코', 'ナツコ': '나츠코', 'ワラワラ': '와라와라',
    'ブラタモリ': '부라타모리', 'タモリ倶楽部': '타모리 클럽', 'あいみょんのオールナイトニッポンGOLD': '아이묭의 올나잇 닛폰 GOLD',
    'スピッツ': '스피츠', '浜田省吾': '하마다 쇼고', '尾崎豊': '오자키 유타카', '吉田拓郎': '요시다 타쿠로', '平井堅': '히라이 켄', '菅田将暉': '스다 마사키',
    '太陽の塔': '태양의 탑', '東京タワー': '도쿄 타워', '通天閣': '츠텐카쿠', '大阪城': '오사카성',
    '新しい学校のリーダーズ': '아타라시이 갓코노 리더즈', '学校行けやあ゛': '갓코 이케야', '泣き出しそうだよ': '나키다시소다요', 'キスだけで': '키스다케데', '怪物さん': '카이부츠상',
    '栞': '시오리', '日本レコード大賞': '일본 레코드 대상', '紅白歌合戦': '홍백가합전',
    '淡麗グリーンラベル': '탄레이 그린 라벨', 'カルピス': '칼피스',
  };

  A.trivia = [
    /* 프로필 */
    { q: q('아이묭의 출신지는?', 'あいみょんの出身地は？', 'Where is Aimyon from?'), a: '西宮市', x: ['神戸市', '尼崎市', '大阪府'] },
    { q: q('아이묭의 생일은?', 'あいみょんの誕生日は？', "When is Aimyon's birthday?"), a: d(3, 6), x: [d(11, 30), d(3, 16), d(6, 3)] },
    { q: q('「あいみょん」 이라는 이름의 유래는?', '「あいみょん」という名前の由来は？', 'Where does the name "Aimyon" come from?'), a: q('친구가 부르던 별명', '友人から呼ばれていたあだ名', "A nickname her friends called her"), x: [q('할머니가 지어 준 이름', '祖母がつけた名前', 'A name from her grandmother'), q('좋아하는 영화 주인공', '好きな映画の主人公', 'A favorite film character'), q('오디션 때 받은 예명', 'オーディションで付けられた芸名', 'A stage name from an audition')] },
    { q: q('아버지의 직업은?', '父親の職業は？', "What is her father's job?"), a: q('음향(PA) 엔지니어', 'PAエンジニア', 'PA engineer'), x: [q('기타 장인', 'ギター職人', 'Guitar maker'), q('라디오 DJ', 'ラジオDJ', 'Radio DJ'), q('음악 교사', '音楽教師', 'Music teacher')] },
    { q: q('중학교 3학년 때 다시 기타를 잡게 된 계기는?', '中学3年でギターを再び弾き始めたきっかけは？', 'What got her playing guitar again in her third year of junior high?'), a: q('ALT 영어 교사가 남기고 간 어쿠스틱 기타', 'ALTの英語教師が残していったアコギ', 'An acoustic guitar left by her ALT English teacher'), x: [q('아버지가 준 전자 기타', '父親から渡されたエレキギター', 'An electric guitar from her father'), q('생일 선물로 받은 우쿨렐레', '誕生日にもらったウクレレ', 'A ukulele birthday gift'), q('학교 경음악부 입부', '軽音楽部への入部', 'Joining the school band club')] },
    { q: q('소속 레이블 unBORDE 는 어느 회사 산하일까요?', '所属レーベルunBORDEはどこの傘下？', 'Which company is her label unBORDE part of?'), a: 'Warner Music Japan', x: ['Sony Music', 'Universal Music', 'Victor Entertainment'] },
    { q: q('음악적 뿌리로 꼽은 밴드는?', '音楽的ルーツとして挙げているバンドは？', 'Which band does she name among her musical roots?'), a: 'スピッツ', x: ['RADWIMPS', 'サカナクション', 'back number'] },
    { q: q('아래에서 노래하는 것을 목표로 삼고 있는 곳은?', 'その下で歌うことを目標に掲げている場所は？', 'Under what landmark does she dream of singing?'), a: '太陽の塔', x: ['東京タワー', '通天閣', '大阪城'] },
    /* 데뷔 */
    { q: q('인디 데뷔 싱글은?', 'インディーズデビューシングルは？', 'What was her indie debut single?'), a: '貴方解剖純愛歌 〜死ね〜', x: ['生きていたんだよな', '君はロックを聴かない', 'どうせ死ぬなら'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was her major-debut single?'), a: '生きていたんだよな', x: ['愛を伝えたいだとか', '君はロックを聴かない', '貴方解剖純愛歌 〜死ね〜'] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'In what year did she make her major debut?'), a: y(2016), x: [y(2015), y(2017), y(2018)] },
    { q: q('팬들이 「아이묭의 날」 로 부르는 날은? (메이저 데뷔일)', 'ファンが「あいみょんの日」と呼ぶ日は？（メジャーデビュー日）', 'Which date do fans call "Aimyon Day" (her major-debut date)?'), a: d(11, 30), x: [d(3, 6), d(3, 4), d(9, 13)] },
    { q: q('처음으로 영화 주제가를 맡은 곡은?', '初の映画主題歌となった曲は？', 'Which was her first film theme song?'), a: '漂白', x: ['ハルノヒ', '空の青さを知る人よ', 'あのね'] },
    { q: q('첫 정규 앨범은?', '1stフルアルバムは？', 'What was her first full album?'), a: '青春のエキサイトメント', x: ['瞬間的シックスセンス', 'tamago', 'おいしいパスタがあると聞いて'] },
    { q: q('처음 해외 공연을 연 곳은?', '初の海外公演を行った場所は？', 'Where was her first overseas show?'), a: '台湾', x: ['韓国', '香港', '上海'] },
    /* 수상 · 기록 */
    { q: q('첫 홍백가합전에서 부른 곡은?', '初出場の紅白歌合戦で歌った曲は？', 'Which song did she sing at her first Kohaku?'), a: 'マリーゴールド', x: ['君はロックを聴かない', '今夜このまま', '裸の心'] },
    { q: q('홍백가합전에 처음 나간 해는?', '紅白歌合戦に初出場した年は？', 'In what year did she first appear on Kohaku?'), a: y(2018), x: [y(2017), y(2019), y(2020)] },
    { q: q('일본 레코드 대상 우수 앨범상을 받은 앨범은?', '日本レコード大賞で優秀アルバム賞を受賞したアルバムは？', 'Which album won an Excellent Album award at the Japan Record Awards?'), a: '瞬間的シックスセンス', x: ['青春のエキサイトメント', 'おいしいパスタがあると聞いて', '瞳へ落ちるよレコード'] },
    { q: q('평론가 시바 토모노리가 아이묭을 부른 말은?', '柴那典があいみょんを評した言葉は？', 'How did critic Shiba Tomonori describe Aimyon?'), a: q('스트리밍에서 나온 첫 스타', 'ストリーミングサービスから出てきた最初のスター', 'The first star to come out of streaming'), x: [q('레이와의 포크 여왕', '令和のフォーク女王', 'The folk queen of Reiwa'), q('라디오가 키운 가수', 'ラジオが育てた歌手', 'A singer raised by radio'), q('SNS 세대의 대변자', 'SNS世代の代弁者', 'The voice of the social-media generation')] },
    /* 타이업 */
    { q: q('NHK 연속 TV 소설 『らんまん』 주제가는?', 'NHK連続テレビ小説『らんまん』の主題歌は？', 'Which song was the theme of the NHK morning drama "Ranman"?'), a: '愛の花', x: ['あのね', 'ハート', '会いに行くのに'] },
    { q: q('영화 『크레용 신짱 신혼여행 허리케인』 주제가는?', '映画『クレヨンしんちゃん 新婚旅行ハリケーン』の主題歌は？', 'Which song was the theme of the Crayon Shin-chan honeymoon-hurricane film?'), a: 'ハルノヒ', x: ['マリーゴールド', 'スケッチ', '空の青さを知る人よ'] },
    { q: q('영화 『窓ぎわのトットちゃん』 주제가는?', '映画『窓ぎわのトットちゃん』の主題歌は？', 'Which song was the theme of the film "Totto-chan: The Little Girl at the Window"?'), a: 'あのね', x: ['愛の花', 'スケッチ', 'ざらめ'] },
    { q: q('『映画 도라에몽 노비타의 그림 세계 이야기』 주제가는?', '『映画ドラえもん のび太の絵世界物語』の主題歌は？', "Which song was the theme of Doraemon: Nobita's Art World Tales?"), a: 'スケッチ', x: ['ハルノヒ', 'あのね', 'ビーナスベルト'] },
    { q: q('드라마 『私の家政夫ナギサさん』 주제가는?', 'ドラマ『私の家政夫ナギサさん』の主題歌は？', 'Which song was the theme of the drama "My Housekeeper Nagisa-san"?'), a: '裸の心', x: ['ハート', '真夏の夜の匂いがする', '初恋が泣いている'] },
    { q: q('『君たちはどう生きるか』 에서 목소리를 맡은 역은?', '『君たちはどう生きるか』で声を担当した役は？', 'Which role did she voice in "The Boy and the Heron"?'), a: 'ヒミ', x: ['キリコ', 'ナツコ', 'ワラワラ'] },
    { q: q('2024년부터 내레이션을 맡은 NHK 프로그램은?', '2024年からナレーションを務めるNHK番組は？', 'Which NHK show has she narrated since 2024?'), a: 'ブラタモリ', x: ['タモリ倶楽部', 'SONGS', 'シブヤノオト'] },
    { q: q('「キスだけで」 를 함께 부른 가수는?', '「キスだけで」で共演した歌手は？', 'Who did she sing "Kiss Dake de" with?'), a: '菅田将暉', x: ['平井堅', 'RADWIMPS', '新しい学校のリーダーズ'] },
    /* 라이브 */
    { q: q('2022년 혼자 기타 치며 노래하는 공연을 연 고향의 구장은?', '2022年に弾き語りワンマンを開催した地元の球場は？', 'At which hometown stadium did she hold a solo acoustic show in 2022?'), a: '阪神甲子園球場', x: ['京セラドーム大阪', '大阪城ホール', '日本武道館'] },
    { q: q('2026년 데뷔 10주년 고시엔 공연은 며칠 동안 열렸을까요?', '2026年のデビュー10周年・甲子園公演は何日間開催された？', 'How many days was the 2026 10th-anniversary Koshien show held?'), a: q('2일', '2日間', '2 days'), x: [q('1일', '1日間', '1 day'), q('3일', '3日間', '3 days'), q('4일', '4日間', '4 days')] },
  ];
})();
