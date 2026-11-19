'use strict';
/* =========================================================
 * Ado 팬 퀴즈 (4지선다)
 * 출처 : 일본어 위키백과 「Ado (歌手)」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const age = (k) => ({ ko: `${k}살`, ja: `${k}歳`, en: String(k) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'ado');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '狂言': '쿄겐', '歌舞伎': '가부키', '能': '노', '落語': '라쿠고', '文楽': '분라쿠',
    '君の体温': '키미노 타이온', 'ニコニコ動画': '니코니코 동화', '歌ってみた': '우탓테미타',
    'syudou': '슈도', '中田ヤスタカ': '나카타 야스타카', 'Vaundy': '반디', '椎名林檎': '시이나 링고', 'Giga': '기가', 'TOPHAMHAT-KYO': '탑햇쿄',
    'ウタ': '우타', 'ナミ': '나미', 'ロビン': '로빈', 'ヤマト': '야마토',
    '東本願寺': '히가시혼간지', '大塚国際美術館': '오츠카 국제미술관', '清水寺': '키요미즈데라', '厳島神社': '이츠쿠시마 신사',
    '国立競技場': '국립경기장', '東京ドーム': '도쿄 돔', '日本武道館': '닛폰 부도칸', 'さいたまスーパーアリーナ': '사이타마 슈퍼 아레나', '日産スタジアム': '닛산 스타디움',
    'ユニバーサル・スタジオ・ジャパン': '유니버설 스튜디오 재팬', 'ロッテ': '롯데', 'くら寿司': '쿠라즈시', 'ジョージア': '조지아', '丸紅': '마루베니',
    'ドクターX〜外科医・大門未知子〜': '닥터 X ~외과의 다이몬 미치코~', 'ドクターホワイト': '닥터 화이트', 'カラダ探し': '카라다사가시', '沈黙の艦隊': '침묵의 함대', 'ビリオン×スクール': '빌리언 스쿨', 'めざましテレビ': '메자마시 테레비',
    'ORIHARA': '오리하라', '心臓': '신조', '蜃気楼': '신키로', 'マーズ': '마즈', 'カムパネルラ': '캄파넬라',
    '呪術廻戦': '주술회전', 'チェンソーマン': '체인소 맨', 'ドクターX': '닥터 X', '残夢': '잔무', 'Adoのベストアドバム': '아도노 베스트 아도바무', 'ウタの歌 ONE PIECE FILM RED': '우타노 우타 원피스 필름 레드',
    'シカバネーゼ': '시카바네제', 'マトリョシカ': '마트료시카',
    '東京都': '도쿄도','大阪府': '오사카부', '愛知県': '아이치현', '福岡県': '후쿠오카현',
  };

  A.trivia = [
    /* 프로필 */
    { q: q('Ado 의 생일은?', 'Adoの誕生日は？', 'When is Ado\'s birthday?'), a: d(10, 24), x: [d(10, 23), d(4, 28), d(8, 11)] },
    { q: q('Ado 가 태어난 해는?', 'Adoが生まれた年は？', 'What year was Ado born?'), a: y(2002), x: [y(2000), y(2001), y(2004)] },
    { q: q('「Ado」라는 이름은 어디에서 따왔을까요?', '「Ado」という名前の由来は？', 'Where does the name "Ado" come from?'), a: '狂言', x: ['歌舞伎', '能', '落語'] },
    { q: q('이름의 바탕이 된 「アド」는 쿄겐에서 어떤 역할일까요?', '名前の由来「アド」は狂言でどんな役？', 'In kyogen, what kind of role is the "Ado"?'), a: q('주인공을 받쳐 주는 조연', '主役を支える脇役', 'The supporting role'), x: [q('주인공', '主役', 'The lead role'), q('해설자', '語り手', 'The narrator'), q('악역', '悪役', 'The villain')] },
    { q: q('우타이테 활동을 시작하며 처음 올린 「歌ってみた」 곡은?', '歌い手として初めて投稿した「歌ってみた」の曲は？', 'What was the first cover she posted as an utaite?'), a: '君の体温', x: ['うっせぇわ', 'マトリョシカ', 'シカバネーゼ'] },
    { q: q('우타이테 활동을 시작한 해는?', '歌い手として活動を始めた年は？', 'In what year did she start as an utaite?'), a: y(2017), x: [y(2015), y(2019), y(2020)] },
    { q: q('첫 영상을 올린 사이트는?', '初めて動画を投稿したサイトは？', 'Where did she first post a video?'), a: 'ニコニコ動画', x: ['YouTube', 'TikTok', 'Instagram'] },
    { q: q('얼굴을 공개하지 않는 Ado 의 일러스트를 그리는 이미지 디렉터는?', '顔出しをしないAdoのイラストを手がけるイメージディレクターは？', 'Who is the image director who draws Ado\'s illustrations?'), a: 'ORIHARA', x: ['syudou', 'Giga', 'Vaundy'] },
    /* 데뷔 · 앨범 */
    { q: q('메이저 데뷔곡은?', 'メジャーデビュー曲は？', 'What was her major debut song?'), a: 'うっせぇわ', x: ['レディメイド', 'ギラギラ', '踊'] },
    { q: q('「うっせぇわ」를 만든 보카로P 는?', '「うっせぇわ」を手がけたボカロPは？', 'Which Vocaloid producer wrote "Usseewa"?'), a: 'syudou', x: ['Giga', 'TOPHAMHAT-KYO', 'Vaundy'] },
    { q: q('메이저 데뷔했을 때 Ado 의 나이는?', 'メジャーデビュー時のAdoの年齢は？', 'How old was Ado at her major debut?'), a: age(17), x: [age(15), age(19), age(20)] },
    { q: q('첫 정규 앨범의 제목은?', '1stアルバムのタイトルは？', 'What is the title of her first album?'), a: '狂言', x: ['残夢', 'Adoのベストアドバム', 'ウタの歌 ONE PIECE FILM RED'] },
    { q: q('두 번째 정규 앨범의 제목은?', '2ndアルバムのタイトルは？', 'What is the title of her second album?'), a: '残夢', x: ['狂言', 'Adoのベストアドバム', 'ウタの歌 ONE PIECE FILM RED'] },
    /* ONE PIECE FILM RED */
    { q: q('『ONE PIECE FILM RED』에서 Ado 가 노래를 맡은 캐릭터는?', '『ONE PIECE FILM RED』でAdoが歌唱を担当したキャラクターは？', 'Which character in ONE PIECE FILM RED did Ado sing for?'), a: 'ウタ', x: ['ナミ', 'ロビン', 'ヤマト'] },
    { q: q('「新時代」를 만든 사람은?', '「新時代」を手がけたのは？', 'Who wrote "Shinjidai"?'), a: '中田ヤスタカ', x: ['syudou', 'Vaundy', '椎名林檎'] },
    { q: q('『ONE PIECE FILM RED』의 오프닝 주제가는?', '『ONE PIECE FILM RED』のオープニング主題歌は？', 'What was the opening theme of ONE PIECE FILM RED?'), a: '新時代', x: ['私は最強', '逆光', 'ウタカタララバイ'] },
    { q: q('「私は最強」을 만든 아티스트는?', '「私は最強」を提供したアーティストは？', 'Which artist wrote "Watashi wa Saikyou"?'), a: 'Mrs. GREEN APPLE', x: ['Vaundy', 'King Gnu', 'RADWIMPS'] },
    /* 곡 · 타이업 */
    { q: q('「いばら」를 만든 아티스트는?', '「いばら」を手がけたアーティストは？', 'Who wrote "Ibara"?'), a: 'Vaundy', x: ['syudou', '中田ヤスタカ', '椎名林檎'] },
    { q: q('「唱」과 손잡은 곳은?', '「唱」のタイアップ先は？', 'Which brand was "Show" tied up with?'), a: 'ユニバーサル・スタジオ・ジャパン', x: ['ロッテ', 'くら寿司', 'ジョージア'] },
    { q: q('「阿修羅ちゃん」이 주제가로 쓰인 드라마는?', '「阿修羅ちゃん」が主題歌となったドラマは？', 'Which drama used "Ashura-chan" as its theme song?'), a: 'ドクターX〜外科医・大門未知子〜', x: ['ドクターホワイト', 'ビリオン×スクール', 'カラダ探し'] },
    { q: q('「クラクラ」가 오프닝으로 쓰인 애니메이션은?', '「クラクラ」がオープニングとなったアニメは？', 'Which anime used "Kura Kura" as its opening?'), a: 'SPY×FAMILY', x: ['ONE PIECE', 'チェンソーマン', '呪術廻戦'] },
    { q: q('「DIGNITY」가 주제가로 쓰인 영화는?', '「DIGNITY」が主題歌となった映画は？', 'Which film used "DIGNITY" as its theme song?'), a: '沈黙の艦隊', x: ['カラダ探し', 'ONE PIECE FILM RED', 'ドクターX'] },
    { q: q('「行方知れず」를 만든 아티스트는?', '「行方知れず」を手がけたアーティストは？', 'Who wrote "Yukue Shirezu"?'), a: '椎名林檎', x: ['Vaundy', '中田ヤスタカ', 'syudou'] },
    /* 라이브 · 홍백 */
    { q: q('처음 나간 NHK 홍백가합전에서 부른 곡은?', '初出場のNHK紅白歌合戦で歌った曲は？', 'Which song did she sing at her first Kohaku?'), a: '唱', x: ['新時代', 'うっせぇわ', '踊'] },
    { q: q('첫 홍백가합전 무대를 중계한 곳은?', '初出場の紅白歌合戦で中継した場所は？', 'Where was her first Kohaku performance broadcast from?'), a: '東本願寺', x: ['大塚国際美術館', '清水寺', '厳島神社'] },
    { q: q('처음 홍백가합전에 나간 해는?', '紅白歌合戦に初出場した年は？', 'In what year did she first appear on Kohaku?'), a: y(2023), x: [y(2021), y(2022), y(2024)] },
    { q: q('2024년 4월, 여성 솔로 아티스트 최초로 공연한 곳은?', '2024年4月、女性ソロアーティスト史上初の公演を行った会場は？', 'In April 2024, where did she become the first female solo artist to perform?'), a: '国立競技場', x: ['東京ドーム', '日産スタジアム', 'さいたまスーパーアリーナ'] },
  ];
})();
