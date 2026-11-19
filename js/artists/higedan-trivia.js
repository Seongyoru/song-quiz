'use strict';
/* =========================================================
 * Official髭男dism 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「Official髭男dism」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ymd = (n, m, day) => ({ ko: `${n}년 ${m}월 ${day}일`, ja: `${n}年${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}, ${n}` });
  const man = (k) => ({ ko: `${k}만 명`, ja: `${k}万人`, en: `${k * 10},000` });
  const FS = '藤原聡', OZ = '小笹大輔', NR = '楢﨑誠', MT = '松浦匡希';
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'higedan');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '藤原聡': '후지하라 사토시', '小笹大輔': '오자사 다이스케', '楢﨑誠': '나라자키 마코토', '松浦匡希': '마츠우라 마사키',
    '島根大学': '시마네 대학', '鳥取大学': '돗토리 대학', '広島大学': '히로시마 대학', '岡山大学': '오카야마 대학',
    '鳥取県米子市': '돗토리현 요나고시', '島根県松江市': '시마네현 마쓰에시', '広島県福山市': '히로시마현 후쿠야마시', '島根県出雲市': '시마네현 이즈모시',
    'ラブとピースは君の中': '러브토 피스와 키미노 나카', 'レポート': '레포트', 'エスカパレード': '에스카퍼레이드',
    'コンフィデンスマンJP': '컨피던스맨 JP', '恋はつづくよどこまでも': '코이와 츠즈쿠요 도코마데모', 'ペンディングトレイン': '펜딩 트레인',
    '東京リベンジャーズ': '도쿄 리벤저스', 'アオのハコ': '아오노 하코', 'ダーウィン事変': '다윈 사변',
    'ドラえもん のび太の宇宙小戦争 2021': '도라에몽 노비타의 우주소전쟁 2021', 'はたらく細胞': '하타라쿠 사이보', 'ひゃくえむ。': '햐쿠에무', 'HELLO WORLD': '헬로 월드',
    'めざましテレビ': '메자마시 테레비', '報道ステーション': '호도 스테이션', 'ニュースウォッチ9': '뉴스 워치 9',
    '愛なんだが…': '아이 난다가', 'ポニーキャニオン': '포니캐니언',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 피아노를 맡은 멤버는?', 'ボーカル・ピアノ担当のメンバーは？', 'Who is on vocals and piano?'), a: FS, x: [OZ, NR, MT] },
    { q: q('기타를 맡은 멤버는?', 'ギター担当のメンバーは？', 'Who plays guitar?'), a: OZ, x: [FS, NR, MT] },
    { q: q('베이스와 색소폰을 맡은 멤버는?', 'ベース・サックス担当のメンバーは？', 'Who plays bass and saxophone?'), a: NR, x: [FS, OZ, MT] },
    { q: q('드럼을 맡은 멤버는?', 'ドラムス担当のメンバーは？', 'Who plays drums?'), a: MT, x: [FS, OZ, NR] },
    { q: q('멤버 중 가장 나이가 많은 사람은?', 'メンバーの中で最年長は？', 'Who is the oldest member?'), a: NR, x: [FS, OZ, MT] },
    { q: q('멤버 중 가장 나이가 어린 사람은?', 'メンバーの中で最年少は？', 'Who is the youngest member?'), a: OZ, x: [FS, NR, MT] },
    { q: q('후지하라 사토시 · 마츠우라 마사키의 출신지는?', '藤原聡・松浦匡希の出身地は？', 'Where are Satoshi Fujihara and Masaki Matsuura from?'), a: '鳥取県米子市', x: ['島根県松江市', '広島県福山市', '島根県出雲市'] },
    { q: q('오자사 다이스케의 출신지는?', '小笹大輔の出身地は？', 'Where is Daisuke Ozasa from?'), a: '島根県松江市', x: ['鳥取県米子市', '広島県福山市', '島根県出雲市'] },
    { q: q('밴드 이름을 지은 멤버는?', 'バンド名の名付け親は？', 'Who came up with the band name?'), a: NR, x: [FS, OZ, MT] },
    { q: q('대학 졸업 뒤 밴드와 함께 후지하라가 다닌 직장은?', '大学卒業後、バンドと並行して藤原が勤めていたのは？', 'Where did Fujihara work after university while in the band?'), a: { ko: '지역 은행', ja: '地元の銀行', en: 'A local bank' }, x: [{ ko: '시청', ja: '市役所', en: 'City hall' }, { ko: '레코드 가게', ja: 'レコード店', en: 'A record store' }, { ko: '고등학교', ja: '高校', en: 'A high school' }] },
    /* 결성 · 데뷔 */
    { q: q('Official髭男dism 이 결성된 날은?', 'Official髭男dismが結成された日は？', 'When was the band formed?'), a: ymd(2012, 6, 7), x: [ymd(2011, 6, 7), ymd(2012, 7, 7), ymd(2013, 6, 7)] },
    { q: q('후지하라가 다니던, 결성의 무대가 된 대학은?', '藤原が在学していた、結成のきっかけとなった大学は？', 'Which university was Fujihara attending when the band formed?'), a: '島根大学', x: ['鳥取大学', '広島大学', '岡山大学'] },
    { q: q('2014년 FM 산인 「아마반」 그랑프리를 받은 곡은?', '2014年、エフエム山陰「あまばん」でグランプリを受賞した曲は？', 'Which song won the grand prix of FM San-in\'s "Amaban" in 2014?'), a: '愛なんだが…', x: ['恋の前ならえ', 'SWEET TWEET', '夕暮れ沿い'] },
    { q: q('인디 데뷔작이 된 1st 미니 앨범은?', 'インディーズデビュー作の1stミニアルバムは？', 'What was their indie debut mini album?'), a: 'ラブとピースは君の中', x: ['MAN IN THE MIRROR', 'レポート', "What's Going On?"] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was their major debut single?'), a: 'ノーダウト', x: ['Pretender', '宿命', 'Stand By You'] },
    { q: q('메이저 데뷔 때 소속한 레이블은?', 'メジャーデビュー時のレーベルは？', 'Which label did they debut on as a major act?'), a: 'ポニーキャニオン', x: ['IRORI Records', 'Lastrum', 'Sony Music'] },
    /* 타이업 */
    { q: q('「ノーダウト」 가 주제가인 드라마는?', '「ノーダウト」が主題歌のドラマは？', 'Which drama used "No Doubt" as its theme?'), a: 'コンフィデンスマンJP', x: ['恋はつづくよどこまでも', 'silent', 'ペンディングトレイン'] },
    { q: q('「Cry Baby」 가 오프닝인 애니메이션은?', '「Cry Baby」がオープニングのアニメは？', 'Which anime used "Cry Baby" as its opening?'), a: '東京リベンジャーズ', x: ['SPY×FAMILY', 'アオのハコ', 'ダーウィン事変'] },
    { q: q('「ミックスナッツ」 가 오프닝인 애니메이션은?', '「ミックスナッツ」がオープニングのアニメは？', 'Which anime used "Mixed Nuts" as its opening?'), a: 'SPY×FAMILY', x: ['東京リベンジャーズ', 'アオのハコ', 'ダーウィン事変'] },
    { q: q('「Universe」 가 주제가인 영화는?', '「Universe」が主題歌の映画は？', 'Which film used "Universe" as its theme?'), a: 'ドラえもん のび太の宇宙小戦争 2021', x: ['HELLO WORLD', 'はたらく細胞', 'ひゃくえむ。'] },
    { q: q('「日常」 을 테마곡으로 쓴 보도 프로그램은?', '「日常」がテーマ曲の報道番組は？', 'Which news program used "Nichijou" as its theme?'), a: 'news zero', x: ['めざましテレビ', '報道ステーション', 'ニュースウォッチ9'] },
    { q: q('NHK 전국 학교 음악 콩쿠르 중학교 부문 과제곡이 된 곡은?', 'NHK全国学校音楽コンクール中学校の部の課題曲になった曲は？', 'Which song became the junior high set piece for the NHK school music contest?'), a: 'Chessboard', x: ['日常', '宿命', 'Universe'] },
    /* 기록 · 라이브 */
    { q: q('처음 나간 홍백가합전 (2019) 에서 부른 곡은?', '初出場の紅白歌合戦（2019年）で歌った曲は？', 'What did they sing at their first Kohaku (2019)?'), a: 'Pretender', x: ['I LOVE...', '宿命', 'ノーダウト'] },
    { q: q('홍백가합전 출전을 사양한 해는?', '紅白歌合戦への出場を辞退した年は？', 'Which year did they decline to appear on Kohaku?'), a: y(2021), x: [y(2020), y(2022), y(2023)] },
    { q: q('처음으로 일본 무도관 단독 공연을 연 해는?', '初めて日本武道館で単独公演を行った年は？', 'In what year did they first headline Nippon Budokan?'), a: y(2019), x: [y(2018), y(2020), y(2021)] },
    { q: q('CD숍 대상 2020 대상을 받은 앨범은?', 'CDショップ大賞2020で大賞を受賞したアルバムは？', 'Which album won the CD Shop Awards 2020 grand prize?'), a: 'Traveler', x: ['エスカパレード', 'Editorial', 'Rejoice'] },
    { q: q('2023년 후지하라가 활동을 쉬게 된 이유는?', '2023年に藤原が療養することになった理由は？', 'Why did Fujihara take time off in 2023?'), a: { ko: '성대 폴립', ja: '声帯ポリープ', en: 'Vocal cord polyp' }, x: [{ ko: '손목 부상', ja: '手首の怪我', en: 'Wrist injury' }, { ko: '돌발성 난청', ja: '突発性難聴', en: 'Sudden hearing loss' }, { ko: '허리 부상', ja: '腰の怪我', en: 'Back injury' }] },
    { q: q('첫 스타디움 투어 (2025) 4회 공연에 모인 관객 수는?', '初のスタジアムツアー（2025年）全4公演の動員数は？', 'How many people attended their first stadium tour (2025, 4 shows)?'), a: man(25), x: [man(10), man(15), man(40)] },
    { q: q('「Pretender」 에 이어 누적 9억 회 재생을 넘은 두 번째 곡은?', '「Pretender」に続いて累積9億回再生を突破した曲は？', 'After "Pretender", which song became their second to pass 900M streams?'), a: 'Subtitle', x: ['I LOVE...', 'ミックスナッツ', 'Cry Baby'] },
  ];
})();
