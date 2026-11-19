'use strict';
/* =========================================================
 * Hump Back 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「Hump Back」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const n = (k) => ({ ko: `${k}명`, ja: `${k}人`, en: String(k) });
  const rank = (k) => ({ ko: `${k}위`, ja: `${k}位`, en: `#${k}` });
  const HY = '林萌々子', PK = 'ぴか', MS = '美咲';
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'humpback');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '林萌々子': '하야시 모모코', 'ぴか': '피카', '美咲': '미사키',
    'めぐ': '메구', 'ゆっきー': '윳키', 'せつこ': '세츠코', 'カンナ': '칸나',
    '大阪府': '오사카부', '東大阪市': '히가시오사카시', '京都府': '교토부', '兵庫県': '효고현', '奈良県': '나라현',
    '軽音楽部': '경음악부', '吹奏楽部': '취주악부', '合唱部': '합창부', '演劇部': '연극부',
    '閃光ライオット': '센코 라이엇', '林音楽教室': '하야시 음악교실', '日本武道館': '닛폰 부도칸', '大阪城ホール': '오사카성 홀',
    '梅田CLUB QUATTRO': '우메다 클럽 콰트로', '心斎橋BRONZE': '신사이바시 브론즈', 'なんばHatch': '난바 해치', '京セラドーム大阪': '교세라 돔 오사카',
    '拝啓、少年少女たちよ': '하이케이 쇼넨쇼죠타치요', '打上披露宴': '우치아게 히로엔', '産休サンキュー': '산큐 산큐',
    'ハンプバック道場': '험프백 도장', '魁塾': '사키가케 주쿠',
    '愛はズボーン': '아이와 즈본', '真っ赤な星': '맛카나 호시', 'スッキリ': '슷키리', 'ミント!': '민트!',
    '猪又進と8人の喪女〜私の初めてもらってください〜': '이노마타 스스무와 8명의 모죠',
    '洋服の青山': '요후쿠노 아오야마', '岩谷産業': '이와타니 산교', 'ポップマン': '팝맨', 'シナぷしゅ': '시나푸슈',
    'チャットモンチー': '챗몬치', 'フラワーカンパニーズ': '플라워 컴퍼니즈', 'ELLEGARDEN': '엘레가든', 'Galileo Galilei': '갈릴레오 갈릴레이',
    '「消しゴム貸して。」': '지우개 빌려줘', 'say good bye': '세이 굿바이',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타를 맡은 멤버는?', 'ボーカル・ギター担当のメンバーは？', 'Who is on vocals and guitar?'), a: HY, x: [PK, MS, 'カンナ'] },
    { q: q('베이스를 맡은 멤버는?', 'ベース担当のメンバーは？', 'Who plays bass?'), a: PK, x: [HY, MS, 'めぐ'] },
    { q: q('드럼을 맡은 멤버는?', 'ドラム担当のメンバーは？', 'Who plays drums?'), a: MS, x: [HY, PK, 'ゆっきー'] },
    { q: q('지금 멤버는 몇 명일까요?', '現在のメンバーは何人？', 'How many members are there now?'), a: n(3), x: [n(2), n(4), n(5)] },
    { q: q('결성 때부터 지금까지 남아 있는 유일한 원년 멤버는?', '結成から現在まで在籍している唯一のオリジナルメンバーは？', 'Who is the only original member still in the band?'), a: HY, x: [PK, MS, '373'] },
    { q: q('대부분의 곡을 작사 · 작곡하는 멤버는?', '大半の楽曲の作詞・作曲を行うメンバーは？', 'Who writes most of the songs?'), a: HY, x: [PK, MS, q('세 명이 함께', '3人の共作', 'All three together')] },
    { q: q('드러머 미사키가 가입해 지금 멤버가 갖춰진 해는?', 'ドラムの美咲が加入し現行体制となった年は？', 'In what year did drummer Misaki join, completing the current lineup?'), a: y(2016), x: [y(2013), y(2015), y(2018)] },
    { q: q('베이스 피카가 가장 크게 영향을 받았다고 한 밴드는?', 'ベースのぴかが最も強く影響を受けたバンドは？', 'Which band influenced bassist Pika the most?'), a: 'Galileo Galilei', x: ['ELLEGARDEN', 'チャットモンチー', 'フラワーカンパニーズ'] },
    { q: q('드러머 미사키가 가장 크게 영향을 받았다고 한 밴드는?', 'ドラムの美咲が最も強く影響を受けたバンドは？', 'Which band influenced drummer Misaki the most?'), a: 'ELLEGARDEN', x: ['Galileo Galilei', 'チャットモンチー', 'フラワーカンパニーズ'] },
    { q: q('「しょうもない」 와 「スリーピース」 를 작사 · 작곡한 멤버는?', '「しょうもない」「スリーピース」を作詞作曲したメンバーは？', 'Who wrote "Shoumonai" and "Three Piece"?'), a: PK, x: [HY, MS, q('세 명이 함께', '3人の共作', 'All three together')] },
    { q: q('하야시 모모코의 아버지가 회장을 맡은 킥복싱 체육관 이름은?', '林萌々子の父親が会長を務めるキックボクシングジムの名前は？', "What is the kickboxing gym run by Hayashi Momoko's father?"), a: '魁塾', x: ['林音楽教室', 'ハンプバック道場', '愛はズボーン'] },
    { q: q('하야시 모모코의 남편 기마 켄타가 속한 밴드는?', '林萌々子の夫・儀間建太が所属するバンドは？', "Which band is Hayashi Momoko's husband Gima Kenta in?"), a: '愛はズボーン', x: ['チャットモンチー', 'フラワーカンパニーズ', 'ELLEGARDEN'] },
    /* 결성 · 데뷔 */
    { q: q('Hump Back 이 결성된 곳은?', 'Hump Backが結成されたのはどこ？', 'Where was Hump Back formed?'), a: q('고등학교 경음악부', '高校の軽音楽部', 'A high school light-music club'), x: [q('대학교 동아리', '大学のサークル', 'A university club'), q('라이브하우스 오디션', 'ライブハウスのオーディション', 'A live-house audition'), q('중학교 취주악부', '中学校の吹奏楽部', 'A junior high brass band')] },
    { q: q('결성된 해는?', '結成された年は？', 'In what year were they formed?'), a: y(2009), x: [y(2007), y(2012), y(2016)] },
    { q: q('출신지는?', '出身地は？', 'Where are they from?'), a: '東大阪市', x: ['京都府', '兵庫県', '奈良県'] },
    { q: q('2012년에 출전한 10대 대상 음악 대회는?', '2012年に出場した10代向けの音楽コンテストは？', 'Which teen music contest did they enter in 2012?'), a: '閃光ライオット', x: ['RO69JACK', 'eggs', 'SPACE SHOWER NEW FORCE'] },
    { q: q('처음 전국 유통된 미니 앨범은?', '初の全国流通盤となったミニアルバムは？', 'What was their first nationally distributed mini album?'), a: '夜になったら', x: ['hanamuke', '人間なのさ', 'say good bye'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was their major-debut single?'), a: '拝啓、少年よ', x: ['涙のゆくえ', 'ティーンエイジサンセット', '星丘公園'] },
    { q: q('Vap 안에 만든 전용 레이블 이름은?', 'Vap内に設立した専用レーベルの名前は？', 'What is the name of their own label inside Vap?'), a: '林音楽教室', x: ['WELL BUCKET RECORDS', 'Echoes', 'THE NINTH APOLLO'] },
    { q: q('메이저 첫 앨범 『人間なのさ』 의 오리콘 최고 순위는?', 'メジャー1stアルバム『人間なのさ』のオリコン最高位は？', 'What was the peak Oricon rank of their first major album "Ningen Nanosa"?'), a: rank(6), x: [rank(1), rank(13), rank(17)] },
    { q: q('2026년에 옮겨 간 소니 뮤직 산하 레이블은?', '2026年に移籍したソニー・ミュージック内のレーベルは？', 'Which Sony Music label did they move to in 2026?'), a: 'Echoes', x: ['林音楽教室', 'WELL BUCKET RECORDS', 'Vap'] },
    /* 라이브 */
    { q: q('첫 원맨 라이브가 열린 곳은?', '初のワンマンライブの会場は？', 'Where was their first one-man show?'), a: '梅田CLUB QUATTRO', x: ['心斎橋BRONZE', 'なんばHatch', '大阪城ホール'] },
    { q: q('2020년 첫 오사카성 홀 단독 공연의 이름은?', '2020年の初の大阪城ホール単独公演のタイトルは？', 'What was their first Osaka-jo Hall show (2020) called?'), a: '拝啓、少年少女たちよ', x: ['打上披露宴', '産休サンキュー', 'ACHATTER tour'] },
    { q: q('처음 닛폰 부도칸 단독 공연을 연 해는?', '初の日本武道館単独公演を行った年は？', 'In what year did they first headline Nippon Budokan?'), a: y(2021), x: [y(2019), y(2020), y(2023)] },
    { q: q('멤버 세 명의 결혼을 축하하며 2023년 부도칸에서 연 공연 이름은?', 'メンバー3人の結婚を祝い2023年に武道館で開催した公演名は？', 'What was the 2023 Budokan show celebrating all three members\' marriages called?'), a: '打上披露宴', x: ['拝啓、少年少女たちよ', '産休サンキュー', 'ACHATTER tour'] },
    { q: q('세 멤버 모두 출산을 마쳤다고 알린 유튜브 프로그램은?', 'メンバー3人全員が出産を終えたことを公表したYouTube番組は？', 'On which YouTube show did they announce all three had given birth?'), a: 'ハンプバック道場', x: ['林音楽教室', '打上披露宴', '魁塾'] },
    /* 타이업 */
    { q: q('영화 『真っ赤な星』 의 주제가는?', '映画『真っ赤な星』の主題歌は？', 'Which song was the theme of the film "Makka na Hoshi"?'), a: 'クジラ', x: ['生きて行く', 'LILLY', '恋をしよう'] },
    { q: q('드라마 『猪又進と8人の喪女』 의 주제가는?', 'ドラマ『猪又進と8人の喪女』の主題歌は？', 'Which song was the theme of the drama "Inomata Susumu to 8-nin no Mojo"?'), a: '恋をしよう', x: ['LILLY', 'クジラ', 'がらくた讃歌'] },
    { q: q('「洋服の青山」 CM 송으로 쓰인 곡은?', '「洋服の青山」のCMソングに起用された曲は？', 'Which song was used in a Yofuku no Aoyama commercial?'), a: 'tour', x: ['Linger', '拝啓、少年よ', '番狂わせ'] },
    { q: q('개그 콤비 팝맨의 등장 음악으로 쓰인 곡은?', 'お笑いコンビ・ポップマンの出囃子に使われた曲は？', "Which song is the comedy duo Popman's entrance music?"), a: '拝啓、少年よ', x: ['星丘公園', 'LILLY', '宣誓'] },
  ];
})();
