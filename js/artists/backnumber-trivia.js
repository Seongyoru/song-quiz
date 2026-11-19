'use strict';
/* =========================================================
 * back number 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「back number」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const SM = '清水依与吏', KJ = '小島和也', KR = '栗原寿', SA = '齋藤真希夫';
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'backnumber');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '清水依与吏': '시미즈 이요리', '小島和也': '코지마 카즈야', '栗原寿': '쿠리하라 히사시', '齋藤真希夫': '사이토 마키오', '村田昭': '무라타 아키라',
    '群馬県': '군마현', '栃木県': '도치기현', '埼玉県': '사이타마현', '長野県': '나가노현',
    '群馬県太田市': '군마현 오타시', '群馬県前橋市': '군마현 마에바시시', '群馬県高崎市': '군마현 다카사키시', '群馬県伊勢崎市': '군마현 이세사키시',
    '型遅れ': '카타오쿠레 (유행이 지난 것)', '背番号': '세반고 (등번호)', '最終回': '사이슈카이 (마지막 회)', '控え選手': '히카에 센슈 (후보 선수)',
    'オールナイトニッポン': '올나이트 닛폰', 'ミュージックステーション': '뮤직 스테이션', 'COUNT DOWN TV': '카운트다운 TV', 'スッキリ': '숫키리',
    '舞いあがれ!': '마이아가레', '5→9〜私に恋したお坊さん〜': '5→9 ~나에게 사랑에 빠진 스님~', '海のはじまり': '우미노 하지마리',
    '銀魂2 掟は破るためにこそある': '은혼 2 규칙은 깨라고 있는 것',
    '日本武道館': '일본 부도칸', '東京ドーム': '도쿄 돔', '日産スタジアム': '닛산 스타디움', '横浜アリーナ': '요코하마 아레나',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타를 맡은 멤버는?', 'ボーカル・ギター担当のメンバーは？', 'Who is on vocals and guitar?'), a: SM, x: [KJ, KR, SA] },
    { q: q('베이스 · 코러스를 맡은 멤버는?', 'ベース・コーラス担当のメンバーは？', 'Who plays bass and sings backing vocals?'), a: KJ, x: [SM, KR, SA] },
    { q: q('드럼을 맡은 멤버는?', 'ドラムス担当のメンバーは？', 'Who plays drums?'), a: KR, x: [SM, KJ, '村田昭'] },
    { q: q('2007년에 탈퇴한 전 멤버(기타)는?', '2007年に脱退した元メンバー（ギター）は？', 'Which former member (guitar) left in 2007?'), a: SA, x: [KJ, KR, '村田昭'] },
    { q: q('2006년 5월에 마지막으로 가입한 현 멤버는?', '2006年5月に加入した現メンバーは？', 'Which current member joined in May 2006?'), a: KR, x: [KJ, SM, SA] },
    { q: q('「西藤公園」의 제목이 된 공원이 있는, 시미즈 이요리의 고향은?', '「西藤公園」のタイトルの由来となった公園がある、清水依与吏の地元は？', "Where is Iyori Shimizu's hometown, home of the park that inspired 西藤公園?"), a: '群馬県太田市', x: ['群馬県前橋市', '群馬県高崎市', '群馬県伊勢崎市'] },
    /* 결성 · 데뷔 */
    { q: q('밴드가 결성된 해는?', 'バンドが結成された年は？', 'When was the band formed?'), a: y(2004), x: [y(2005), y(2007), y(2009)] },
    { q: q('밴드가 결성된 곳은?', 'バンドが結成された場所は？', 'Where was the band formed?'), a: '群馬県', x: ['栃木県', '埼玉県', '長野県'] },
    { q: q('밴드 이름 「back number」에 담긴 뜻은?', 'バンド名「back number」に込められた意味は？', 'What does the band name "back number" mean to them?'), a: '型遅れ', x: ['背番号', '最終回', '控え選手'] },
    { q: q('2009년에 낸 인디즈 미니 앨범은?', '2009年にリリースしたインディーズのミニアルバムは？', 'Which indie mini album came out in 2009?'), a: '逃した魚', x: ['あとのまつり', 'スーパースター', 'blues'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was their major debut single?'), a: 'はなびら', x: ['花束', '恋', '青い春'] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'When did they make their major debut?'), a: y(2011), x: [y(2009), y(2010), y(2012)] },
    /* 앨범 · 기록 */
    { q: q('처음으로 오리콘 주간 1위를 차지한 앨범은?', '初めてオリコン週間1位を獲得したアルバムは？', 'Which album was their first to top the Oricon weekly chart?'), a: 'シャンデリア', x: ['ラブストーリー', 'MAGIC', 'ユーモア'] },
    { q: q('첫 올타임 베스트 앨범은?', '初のオールタイム・ベストアルバムは？', 'What is their first all-time best album?'), a: 'アンコール', x: ['ユーモア', 'MAGIC', 'シャンデリア'] },
    { q: q('오리콘 사상 처음으로 400주 연속 TOP100에 든 앨범은?', 'オリコン史上初の400週連続TOP100入りを記録したアルバムは？', 'Which album became the first to stay in the Oricon Top 100 for 400 straight weeks?'), a: 'アンコール', x: ['シャンデリア', 'ラブストーリー', 'ユーモア'] },
    { q: q('2023년에 나온 7번째 오리지널 앨범은?', '2023年に発売された7thアルバムは？', 'What is their 7th album, released in 2023?'), a: 'ユーモア', x: ['MAGIC', 'シャンデリア', 'blues'] },
    /* 타이업 */
    { q: q('NHK 연속 TV 소설 『舞いあがれ!』 주제가는?', 'NHK連続テレビ小説『舞いあがれ!』の主題歌は？', 'Which song was the theme of the NHK morning drama "Maiagare!"?'), a: 'アイラブユー', x: ['水平線', '黄色', 'エメラルド'] },
    { q: q('고교생의 편지를 계기로 만들어져 인터하이 응원가가 된 곡은?', '高校生からの手紙をきっかけに制作され、インターハイ応援ソングとなった曲は？', 'Which song was written after a letter from a high-school student and became the Inter-High support song?'), a: '水平線', x: ['青い春', '瞬き', '怪盗'] },
    { q: q('영화 『銀魂2 掟は破るためにこそある』 주제가는?', '映画『銀魂2 掟は破るためにこそある』の主題歌は？', 'Which song was the theme of the film "Gintama 2"?'), a: '大不正解', x: ['瞬き', 'ハッピーエンド', '僕の名前を'] },
    { q: q('드라마 『5→9〜私に恋したお坊さん〜』 주제가는?', 'ドラマ『5→9〜私に恋したお坊さん〜』の主題歌は？', 'Which song was the theme of the drama "5→9"?'), a: 'クリスマスソング', x: ['ヒロイン', '手紙', 'SISTER'] },
    { q: q('드라마 『海のはじまり』 주제가는?', 'ドラマ『海のはじまり』の主題歌は？', 'Which song was the theme of the drama "Umi no Hajimari"?'), a: '新しい恋人達に', x: ['冬と春', 'ブルーアンバー', '怪獣のサイズ'] },
    /* 라이브 · 활동 */
    { q: q('처음 일본 부도칸 단독 공연을 연 해는?', '初の日本武道館単独公演を行った年は？', 'When did they first headline the Nippon Budokan?'), a: y(2013), x: [y(2011), y(2014), y(2016)] },
    { q: q('2018년, 밴드 사상 처음으로 연 단독 3대 돔 투어 이름은?', '2018年に開催した、バンド史上初の単独3大ドームツアーのタイトルは？', 'What was their 2018 three-dome tour called?'), a: 'dome tour 2018 "stay with you"', x: ['in your humor tour 2023', 'NO MAGIC TOUR 2019', 'All Our Yesterdays Tour 2017'] },
    { q: q('처음으로 연 5대 돔 투어 이름은? (2023)', '初の全国5大ドームツアーのタイトルは？（2023年）', 'What was their first five-dome tour called (2023)?'), a: 'in your humor tour 2023', x: ['anti sleeps tour 2024', 'SCENT OF HUMOR TOUR 2022', 'Grateful Yesterdays Tour 2026'] },
    { q: q('2026년에 연 첫 5대 스타디움 투어 이름은?', '2026年に開催した初の5大スタジアムツアーのタイトルは？', 'What was their first five-stadium tour in 2026 called?'), a: 'Grateful Yesterdays Tour 2026', x: ['anti sleeps tour 2024', 'in your humor tour 2023', 'All Our Yesterdays Tour 2017'] },
    { q: q('각 공연에 게스트를 부른 대결 형식 투어 「anti sleeps tour」가 열린 해는?', 'ゲストを招いた対バン形式の「anti sleeps tour」が開催された年は？', 'When was the guest-band "anti sleeps tour" held?'), a: y(2024), x: [y(2022), y(2023), y(2025)] },
    { q: q('2014년부터 정기 퍼스널리티를 맡은 닛폰방송 라디오 프로그램은?', '2014年からレギュラーパーソナリティを務めたニッポン放送の番組は？', 'Which Nippon Broadcasting radio show did they host from 2014?'), a: 'オールナイトニッポン', x: ['ミュージックステーション', 'COUNT DOWN TV', 'スッキリ'] },
    { q: q('NHK 홍백가합전에 처음 출연한 해는?', 'NHK紅白歌合戦に初出場した年は？', 'When did they first appear on NHK Kohaku?'), a: y(2022), x: [y(2016), y(2019), y(2025)] },
    { q: q('2025년 홍백가합전에서 「水平線」과 함께 부른 곡은?', '2025年の紅白歌合戦で「水平線」と共に歌った曲は？', 'Which song did they perform with "Suiheisen" at Kohaku 2025?'), a: 'どうしてもどうしても', x: ['高嶺の花子さん', 'アイラブユー', 'ブルーアンバー'] },
    { q: q('MV가 처음으로 유튜브 1억 회를 넘은 곡은? (2019)', 'MVが初めてYouTubeで1億回再生を突破した曲は？（2019年）', 'Which music video was their first to pass 100 million YouTube views (2019)?'), a: 'クリスマスソング', x: ['高嶺の花子さん', 'ハッピーエンド', 'ヒロイン'] },
  ];
})();
