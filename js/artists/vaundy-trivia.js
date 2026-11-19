'use strict';
/* =========================================================
 * Vaundy 팬 퀴즈 : 아티스트 · 활동 (4지선다)
 * 출처 : 일본어 위키백과 「Vaundy」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const q = (ko, ja, en) => ({ ko, ja, en });

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  ARTISTS.find((a) => a.id === 'vaundy').readings = {
    '東京都': '도쿄도', '大阪府': '오사카부', '神奈川県': '가나가와현', '北海道': '홋카이도',
    '日本大学芸術学部': '니혼대학 예술학부', '東京藝術大学': '도쿄예술대학', '武蔵野美術大学': '무사시노미술대학', '多摩美術大学': '타마미술대학',
    'バウンドボール': '바운드 볼', 'バウンサー': '바운서', 'バウンティ': '바운티', 'ボンド': '본드',
    'チェンソーマン': '체인소 맨', '王様ランキング': '임금님 랭킹', '呪術廻戦': '주술회전', '僕のヒーローアカデミア': '나의 히어로 아카데미아',
    '映画ドラえもん のび太の地球交響楽': '영화 도라에몽 노비타의 지구 교향악', 'ONE PIECE FILM RED': '원피스 필름 레드',
    '青天を衝け': '청천을 찔러라', '光が死んだ夏': '히카루가 죽은 여름', '鎌倉殿の13人': '가마쿠라도노의 13인', 'どうする家康': '도스루 이에야스', '麒麟がくる': '기린이 온다',
    'サカナクション': '사카낙션', '小松菜奈': '고마츠 나나', '菅田将暉': '스다 마사키', '幾田りら': '이쿠타 리라',
    '惑う糸': '마도우 이토', '深呼吸': '신코큐', '日本武道館': '니혼부도칸',
  };

  ARTISTS.find((a) => a.id === 'vaundy').trivia = [
    /* 프로필 */
    { q: q('Vaundy 의 생일은?', 'Vaundyの誕生日は？', 'When is Vaundy\'s birthday?'), a: d(6, 6), x: [d(6, 16), d(9, 6), d(2, 6)] },
    { q: q('Vaundy 가 태어난 해는?', 'Vaundyが生まれた年は？', 'In which year was Vaundy born?'), a: y(2000), x: [y(1998), y(1999), y(2001)] },
    { q: q('Vaundy 의 출신지는?', 'Vaundyの出身地は？', 'Where is Vaundy from?'), a: '東京都', x: ['大阪府', '神奈川県', '北海道'] },
    { q: q('Vaundy 가 졸업한 학교는?', 'Vaundyが卒業した学校は？', 'Which school did Vaundy graduate from?'), a: '日本大学芸術学部', x: ['東京藝術大学', '武蔵野美術大学', '多摩美術大学'] },
    { q: q('「Vaundy」라는 이름의 유래가 된 중학교 때 별명은?', '「Vaundy」という名前の由来となった中学時代のあだ名は？', 'Which middle-school nickname is the name "Vaundy" derived from?'), a: 'バウンドボール', x: ['バウンサー', 'バウンティ', 'ボンド'] },
    { q: q('중학생 때 작곡을 시작하며 쓴 음악 제작 소프트웨어는?', '中学生時代に作曲を始めた際に使っていた音楽制作ソフトは？', 'Which music software did he start composing with in middle school?'), a: 'Cubase', x: ['GarageBand', 'Logic Pro', 'FL Studio'] },
    { q: q('존경하는 뮤지션으로 꼽는 밴드는?', '尊敬する好きなミュージシャンとして名前を挙げているバンドは？', 'Which band does he name as musicians he respects?'), a: 'サカナクション', x: ['King Gnu', 'RADWIMPS', 'Mr.Children'] },
    /* 데뷔 · 작품 */
    { q: q('YouTube 에 처음 올린 자작곡은? (2019년 6월)', 'YouTubeに初めて投稿した自作曲は？（2019年6月）', 'What was the first original song he posted on YouTube (June 2019)?'), a: 'pain', x: ['pained', 'replica', 'napori'] },
    { q: q('첫 배포 싱글은?', '1st配信シングルは？', 'What was his first digital single?'), a: '東京フラッシュ', x: ['不可幸力', '怪獣の花唄', '僕は今日も'] },
    { q: q('1집 앨범의 제목은?', '1stアルバムのタイトルは？', 'What is the title of his first album?'), a: 'strobo', x: ['replica', 'soramimi', 'napori'] },
    { q: q('첫 EP 의 제목은? (2022)', '1st EPのタイトルは？（2022年）', 'What is the title of his first EP (2022)?'), a: '裸の勇者', x: ['replica', '踊り子', 'HERO'] },
    { q: q('「不可幸力」가 CM 송으로 쓰인 서비스는?', '「不可幸力」がCMソングに起用されたサービスは？', 'Which service used "Fukakouryoku" in its TV commercial?'), a: 'Spotify', x: ['Apple Music', 'LINE MUSIC', 'YouTube Music'] },
    { q: q('「CHAINSAW BLOOD」가 엔딩 테마로 쓰인 애니메이션은?', '「CHAINSAW BLOOD」がエンディングテーマに起用されたアニメは？', 'Which anime used "CHAINSAW BLOOD" as an ending theme?'), a: 'チェンソーマン', x: ['呪術廻戦', '王様ランキング', '僕のヒーローアカデミア'] },
    { q: q('『映画ドラえもん のび太の地球交響楽』의 주제가는?', '『映画ドラえもん のび太の地球交響楽』の主題歌は？', 'What was the theme song of "Doraemon: Nobita\'s Earth Symphony"?'), a: 'タイムパラドックス', x: ['ホムンクルス', '風神', 'Gift'] },
    { q: q('「走れSAKAMOTO」가 오프닝으로 쓰인 애니메이션은?', '「走れSAKAMOTO」がオープニングテーマに起用されたアニメは？', 'Which anime used "Hashire SAKAMOTO" as its opening?'), a: 'SAKAMOTO DAYS', x: ['チェンソーマン', 'SPY×FAMILY', '光が死んだ夏'] },
    { q: q('「偉生人」은 어느 NHK 대하드라마의 인스파이어드 송?', '「偉生人」はどのNHK大河ドラマのインスパイアードソング？', '"Iseijin" is the inspired song for which NHK Taiga drama?'), a: '青天を衝け', x: ['鎌倉殿の13人', 'どうする家康', '麒麟がくる'] },
    /* 곡 제공 */
    { q: q('『ONE PIECE FILM RED』에서 Ado 에게 써 준 곡은?', '『ONE PIECE FILM RED』でAdoに提供した楽曲は？', 'Which song did he write for Ado in "ONE PIECE FILM RED"?'), a: '逆光', x: ['宮', '黒子', '常熱'] },
    { q: q('milet × Aimer × 幾田りら 에게 써 준 곡은?', 'milet × Aimer × 幾田りらに提供した楽曲は？', 'Which song did he write for milet × Aimer × Lilas Ikuta?'), a: 'おもかげ', x: ['二人話', '恋風邪にのせて', '花占い'] },
    { q: q('菅田将暉에게 써 준 곡은?', '菅田将暉に提供した楽曲は？', 'Which song did he write for Masaki Suda?'), a: '惑う糸', x: ['まぶた', '置き手紙', '忘れ物'] },
    { q: q('「踊り子」 MV 에 출연한 배우는?', '「踊り子」のMVに出演している俳優は？', 'Which actress appears in the "Odoriko" music video?'), a: '小松菜奈', x: ['菅田将暉', '幾田りら', 'Ado'] },
    /* 기록 · 공연 */
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did he first appear on NHK Kohaku?'), a: y(2022), x: [y(2020), y(2021), y(2023)] },
    { q: q('2024년 홍백가합전에서 부른 곡은?', '2024年の紅白歌合戦で歌った曲は？', 'Which song did he sing at Kohaku 2024?'), a: '踊り子', x: ['怪獣の花唄', 'Tokimeki', '風神'] },
    { q: q('처음 연 日本武道館 공연의 이름은? (2022)', '初の日本武道館公演のタイトルは？（2022年）', 'What was his first Nippon Budokan show called (2022)?'), a: '深呼吸', x: ['FUSION', 'HEADSHOT', 'replica ZERO'] },
    { q: q('오리콘 연간 노래방 랭킹에서 2023 · 2024년 연속 1위를 한 곡은?', 'オリコン年間カラオケランキングで2023・2024年と2年連続1位を獲得した曲は？', 'Which song topped Oricon\'s yearly karaoke ranking in both 2023 and 2024?'), a: '怪獣の花唄', x: ['踊り子', '不可幸力', '東京フラッシュ'] },
    { q: q('남성 솔로 아티스트 사상 최연소로 연 2026년 돔 투어의 이름은?', '男性ソロアーティスト史上最年少で開催した2026年のドームツアーのタイトルは？', 'What was his 2026 dome tour, the youngest ever by a male solo artist, called?'), a: 'SILENCE', x: ['FUSION', 'HORO', 'HEADSHOT'] },
    { q: q('2024~2025년 아레나 투어의 이름은?', '2024〜2025年のアリーナツアーのタイトルは？', 'What was his 2024-2025 arena tour called?'), a: 'FUSION', x: ['SILENCE', 'little punk', 'replica ZERO'] },
  ];
})();
