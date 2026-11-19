'use strict';
/* =========================================================
 * King Gnu 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「King Gnu」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const TD = '常田大希', SY = '勢喜遊', AK = '新井和輝', IS = '井口理';

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  ARTISTS.find((a) => a.id === 'kinggnu').readings = {
    '常田大希': '츠네타 다이키', '勢喜遊': '세키 유', '新井和輝': '아라이 카즈키', '井口理': '이구치 사토루',
    '石若駿': '이시와카 슌',
    '長野県': '나가노현', '徳島県': '도쿠시마현', '東京都': '도쿄도', '神奈川県': '가나가와현',
    'イノセンス 冤罪弁護士': '이노센스 원죄 변호사', '35歳の少女': '35세의 소녀', 'ミステリと言う勿れ': '미스테리라 하지 말지어다',
    'オールドルーキー': '올드 루키', '海に眠るダイヤモンド': '바다에 잠든 다이아몬드', '王様ランキング': '임금님 랭킹',
    '呪術廻戦': '주술회전', '劇場版 呪術廻戦 0': '극장판 주술회전 0', 'チェンソーマン': '체인소 맨',
    '名探偵コナン 隻眼の残像': '명탐정 코난 척안의 잔상', '名探偵コナン': '명탐정 코난', '攻殻機動隊': '공각기동대',
    'ヌー': '누', 'ライオン': '라이온', 'シマウマ': '시마우마', 'ゾウ': '조우',
    'チェロ': '첼로', 'バイオリン': '바이올린', 'ヴィオラ': '비올라', 'ハープ': '하프',
    '東京ドーム': '도쿄 돔', 'レッドブル': '레드불',
    '一途/逆夢': '이치즈/사카유메', '三文小説/千両役者': '산몬쇼세츠/센료야쿠샤',
  };

  ARTISTS.find((a) => a.id === 'kinggnu').trivia = [
    /* 멤버 */
    { q: q('기타 · 보컬을 맡고 대부분의 곡을 만드는 멤버는?', 'ギター・ボーカルを担当し、ほとんどの楽曲を手がけるメンバーは？', 'Who is on guitar and vocals and writes most of the songs?'), a: TD, x: [IS, SY, AK] },
    { q: q('드럼을 맡은 멤버는?', 'ドラムス担当のメンバーは？', 'Who plays the drums?'), a: SY, x: [AK, IS, TD] },
    { q: q('베이스를 맡은 멤버는?', 'ベース担当のメンバーは？', 'Who plays bass?'), a: AK, x: [SY, IS, TD] },
    { q: q('보컬 · 키보드를 맡은 멤버는? (하이톤 보컬)', 'ボーカル・キーボード担当のメンバーは？（ハイトーンボーカル）', 'Who is on vocals and keyboard (the high-tone singer)?'), a: IS, x: [TD, SY, AK] },
    { q: q('常田大希와 井口理의 고향은?', '常田大希と井口理の出身地は？', 'Where are Daiki Tsuneta and Satoru Iguchi from?'), a: '長野県', x: ['徳島県', '東京都', '神奈川県'] },
    { q: q('勢喜遊의 고향은?', '勢喜遊の出身地は？', 'Where is Yu Seki from?'), a: '徳島県', x: ['長野県', '東京都', '神奈川県'] },
    { q: q('常田大希가 연주하는 클래식 현악기는? (곡의 현악 파트를 직접 맡는다)', '常田大希が演奏するクラシックの弦楽器は？（楽曲のストリングスを自ら担当）', 'Which classical string instrument does Daiki Tsuneta play?'), a: 'チェロ', x: ['バイオリン', 'ヴィオラ', 'ハープ'] },
    { q: q('멤버는 몇 명?', 'メンバーは何人？', 'How many members are in the band?'), a: { ko: '4명', ja: '4人', en: '4' }, x: [{ ko: '3명', ja: '3人', en: '3' }, { ko: '5명', ja: '5人', en: '5' }, { ko: '6명', ja: '6人', en: '6' }] },
    /* 결성 · 데뷔 */
    { q: q('King Gnu 로 이름을 바꾸기 전의 밴드 이름은?', 'King Gnuに改名する前のバンド名は？', 'What was the band called before it became King Gnu?'), a: 'Srv.Vinci', x: ['millennium parade', 'PERIMETRON', 'Diddy\'s Underground Jam'] },
    { q: q('「King Gnu」로 이름을 바꾼 해는?', '「King Gnu」に改名した年は？', 'In which year did the band rename itself King Gnu?'), a: y(2017), x: [y(2015), y(2016), y(2019)] },
    { q: q('밴드 이름의 유래가 된 동물은? (봄부터 조금씩 모여 큰 무리가 된다)', 'バンド名の由来となった動物は？（春から少しずつ合流して巨大な群れになる）', 'Which animal is the band named after?'), a: 'ヌー', x: ['ライオン', 'シマウマ', 'ゾウ'] },
    { q: q('MV 와 로고 등 비주얼을 맡는, 常田大希가 세운 크리에이티브 팀은?', 'MVやロゴなどのビジュアルを手がける、常田大希が立ち上げたクリエイティブチームは？', 'What is the creative team founded by Daiki Tsuneta that makes their MVs and visuals?'), a: 'PERIMETRON', x: ['millennium parade', 'Srv.Vinci', 'CLUB GNU'] },
    { q: q('메이저 데뷔 앨범은?', 'メジャーデビューアルバムは？', 'What was their major-label debut album?'), a: 'Sympa', x: ['Tokyo Rendez-Vous', 'CEREMONY', 'THE GREATEST UNKNOWN'] },
    { q: q('King Gnu 이름으로 낸 첫 앨범은? (2017)', 'King Gnuとして初のアルバムは？（2017年）', 'What was their first album as King Gnu (2017)?'), a: 'Tokyo Rendez-Vous', x: ['Sympa', 'CEREMONY', 'Mad me more softly'] },
    { q: q('첫 싱글 「Prayer X」가 엔딩 테마로 쓰인 애니메이션은?', '初のシングル「Prayer X」がエンディングテーマに起用されたアニメは？', 'Their first single "Prayer X" was the ending theme of which anime?'), a: 'BANANA FISH', x: ['王様ランキング', '呪術廻戦', 'チェンソーマン'] },
    /* 타이업 */
    { q: q('「白日」가 주제가로 쓰인 드라마는?', '「白日」が主題歌に起用されたドラマは？', 'Which drama used "Hakujitsu" as its theme song?'), a: 'イノセンス 冤罪弁護士', x: ['35歳の少女', 'オールドルーキー', '海に眠るダイヤモンド'] },
    { q: q('『劇場版 呪術廻戦 0』의 주제가는?', '『劇場版 呪術廻戦 0』の主題歌は？', 'What was the theme song of "Jujutsu Kaisen 0: The Movie"?'), a: '一途', x: ['逆夢', 'SPECIALZ', 'AIZO'] },
    { q: q('2022년 NHK 축구 테마로 쓰인 곡은?', '2022 NHKサッカーテーマに起用された曲は？', 'Which song was NHK\'s 2022 soccer theme?'), a: 'Stardom', x: ['雨燦々', 'カメレオン', 'BOY'] },
    { q: q('「泡」는 전신 밴드 시절 어느 곡을 다시 만든 것?', '「泡」は前身バンド時代のどの曲のリメイク？', '"Awa" is a remake of which song from their predecessor band?'), a: 'ABUKU', x: ['In Tokyo', 'In Rose', 'Stem'] },
    { q: q('「TWILIGHT!!!」가 주제가로 쓰인 영화 시리즈는?', '「TWILIGHT!!!」が主題歌に起用された映画シリーズは？', 'Which film series used "TWILIGHT!!!" as its theme song?'), a: '名探偵コナン', x: ['呪術廻戦', 'ミステリと言う勿れ', '攻殻機動隊'] },
    { q: q('「ねっこ」가 주제가로 쓰인 드라마는?', '「ねっこ」が主題歌に起用されたドラマは？', 'Which drama used "Nekko" as its theme song?'), a: '海に眠るダイヤモンド', x: ['オールドルーキー', '35歳の少女', 'イノセンス 冤罪弁護士'] },
    /* 기록 · 공연 */
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did they first appear on NHK Kohaku?'), a: y(2019), x: [y(2018), y(2020), y(2022)] },
    { q: q('첫 홍백가합전에서 부른 곡은?', '初出場の紅白歌合戦で歌った曲は？', 'Which song did they sing at their first Kohaku?'), a: '白日', x: ['傘', '飛行艇', 'Teenager Forever'] },
    { q: q('2022년 오리콘 연간 합산 싱글 랭킹 1위를 차지한 작품은?', '2022年のオリコン年間合算シングルランキングで1位を獲得した作品は？', 'Which release topped Oricon\'s 2022 yearly combined singles ranking?'), a: '一途/逆夢', x: ['三文小説/千両役者', 'カメレオン', 'BOY'] },
    { q: q('처음으로 도쿄 돔 공연을 연 해는?', '初の東京ドーム公演を開催した年は？', 'In which year did they first play Tokyo Dome?'), a: y(2022), x: [y(2020), y(2021), y(2024)] },
    { q: q('2023년 첫 스타디움 투어의 이름은?', '2023年の初スタジアムツアーのタイトルは？', 'What was their first stadium tour (2023) called?'), a: 'CLOSING CEREMONY', x: ['THE GREATEST UNKNOWN', 'CEN+RAL', 'CEREMONY'] },
    { q: q('2020년 일본 아티스트 최초로 파트너십 계약을 맺은 브랜드는?', '2020年に日本人アーティストとして初めてパートナーシップ契約を結んだブランドは？', 'In 2020 they became the first Japanese artist to partner with which brand?'), a: 'レッドブル', x: ['ANA', 'PlayStation', 'NTTドコモ'] },
    { q: q('2023년에 나온 4집 앨범은?', '2023年にリリースされた4thアルバムは？', 'What is their 4th album, released in 2023?'), a: 'THE GREATEST UNKNOWN', x: ['CEREMONY', 'Sympa', 'CEN+RAL'] },
  ];
})();
