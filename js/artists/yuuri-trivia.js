'use strict';
/* =========================================================
 * 優里 팬 퀴즈 : 프로필 · 활동 (4지선다)
 * 출처 : 일본어 위키백과 「優里」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const mo = (n) => ({ ko: `${n}개월`, ja: `${n}ヶ月`, en: `${n} months` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'yuuri');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '優里': '유우리', '徳島県': '도쿠시마현', '千葉県': '지바현', '東京都': '도쿄도', '大阪府': '오사카부', '千葉県千葉市': '지바현 지바시',
    '玉置浩二': '타마키 코지', '桑田佳祐': '쿠와타 케이스케', '福山雅治': '후쿠야마 마사하루', '槇原敬之': '마키하라 노리유키',
    '川崎鷹也': '카와사키 타카야', '弱虫男爵': '요와무시 단샤쿠', '弱虫兄弟': '요와무시 쿄다이', '臆病伯爵': '오쿠뵤 하쿠샤쿠', '泣き虫男爵': '나키무시 단샤쿠',
    '壱': '이치', '弐': '니', '参': '산', '響': '히비키', '詩-80\'s': '우타 80s',
    '優里ちゃんねる': '유우리 채널', 'ゆーりんち': '유린치', 'ゆうりの部屋': '유우리노 헤야', '優里TV': '유우리 TV',
    '僕のヒーローアカデミア': '나의 히어로 아카데미아', '呪術廻戦': '주술회전', '葬送のフリーレン': '장송의 프리렌',
    'SK∞ エスケーエイト': 'SK∞ 에스케이에이트', 'かがみの孤城': '카가미노 코조 (거울 속 외딴 성)', 'すずめの戸締まり': '스즈메의 문단속', '竜とそばかすの姫': '용과 주근깨 공주',
    '再会〜Silent Truth〜': '사이카이 ~Silent Truth~', 'サンダー3': '선더 3', '渋谷': '시부야',
    '幕張メッセ': '마쿠하리 멧세',
  };

  A.trivia = [
    /* 프로필 */
    { q: q('유우리의 생일은?', '優里の誕生日は？', "When is Yuuri's birthday?"), a: d(3, 23), x: [d(3, 3), d(2, 23), d(4, 23)] },
    { q: q('태어난 곳은?', '生まれた場所は？', 'Where was Yuuri born?'), a: '徳島県', x: ['千葉県', '東京都', '大阪府'] },
    { q: q('자란 곳(출신지)은?', '育った場所（出身地）は？', 'Where did Yuuri grow up?'), a: '千葉県千葉市', x: ['徳島県', '東京都', '大阪府'] },
    { q: q('가장 존경하는 뮤지션으로 꼽은 사람은?', '最も尊敬しているミュージシャンとして挙げているのは？', 'Who does Yuuri name as the musician he respects most?'), a: '玉置浩二', x: ['桑田佳祐', '福山雅治', '槇原敬之'] },
    { q: q('고등학교를 몇 개월 만에 중퇴했을까?', '高校を何ヶ月で中退した？', 'After how many months did he drop out of high school?'), a: mo(5), x: [mo(1), mo(3), mo(8)] },
    { q: q('솔로 전에 보컬로 활동한 4인조 록 밴드는? (2019년 해산)', 'ソロ以前にボーカルを務めていた4人組ロックバンドは？（2019年解散）', 'Which four-piece rock band did he front before going solo (split 2019)?'), a: 'THE BUGZY', x: ['MY FIRST STORY', 'BAK', 'CHIMERAZ'] },
    { q: q('시부야 노상 라이브 중 깜짝 합류해 2절을 불러 화제가 된 MY FIRST STORY 보컬은?', '渋谷での路上ライブ中に飛び入り参加して話題となったMY FIRST STORYのボーカルは？', 'Which MY FIRST STORY vocalist joined his Shibuya street performance?'), a: 'Hiro', x: ['Taka', 'Teru', 'Ryota'] },
    /* 데뷔 · 곡 */
    { q: q('인디즈 시절 처음 배포한 싱글은?', 'インディーズ時代の1st配信シングルは？', 'What was his first indie digital single?'), a: 'かくれんぼ', x: ['かごめ', 'ピーターパン', 'ドライフラワー'] },
    { q: q('메이저 데뷔곡은?', 'メジャーデビュー曲は？', 'What was his major debut song?'), a: 'ピーターパン', x: ['ドライフラワー', 'かくれんぼ', 'インフィニティ'] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'When did he make his major debut?'), a: y(2020), x: [y(2019), y(2021), y(2022)] },
    { q: q('Billboard JAPAN 「HOT 100 of the Year 2021」에서 연간 1위를 차지한 곡은?', 'Billboard JAPAN「HOT 100 of the Year 2021」で年間1位を獲得した曲は？', 'Which song topped the Billboard JAPAN Hot 100 of the Year 2021?'), a: 'ドライフラワー', x: ['ベテルギウス', 'かくれんぼ', 'ピーターパン'] },
    { q: q('솔로 아티스트 최초로 스트리밍 10억 회를 넘은 곡은?', 'ソロアーティスト初のストリーミング10億回再生を突破した曲は？', 'Which song became the first by a solo artist to pass 1 billion streams?'), a: 'ドライフラワー', x: ['ベテルギウス', 'ビリミリオン', 'シャッター'] },
    { q: q('첫 오리지널 앨범 이름은?', '1stオリジナルアルバムのタイトルは？', 'What is his first original album called?'), a: '壱', x: ['弐', '参', '響'] },
    { q: q('Billboard JAPAN Hot Albums 에서 처음 종합 1위를 한 앨범은?', 'Billboard JAPAN Hot Albumsで初の総合首位を獲得したアルバムは？', 'Which album was his first to top the Billboard JAPAN Hot Albums?'), a: '弐', x: ['壱', '響', "詩-80's"] },
    { q: q('2023년에 낸 오케스트라 앨범 이름은?', '2023年にリリースしたオーケストラアルバムのタイトルは？', 'What is his 2023 orchestral album called?'), a: '響', x: ['壱', '弐', "詩-80's"] },
    { q: q('80년대 곡을 커버한 앨범 이름은?', '80年代の楽曲をカバーしたアルバムのタイトルは？', 'What is his 80s cover album called?'), a: "詩-80's", x: ['響', '弐', '壱'] },
    /* 타이업 */
    { q: q('드라마 『SUPER RICH』 주제가는?', 'ドラマ『SUPER RICH』の主題歌は？', 'Which song was the theme of the drama "SUPER RICH"?'), a: 'ベテルギウス', x: ['ミズキリ', 'ドライフラワー', '夏音'] },
    { q: q('극장 애니메이션 『かがみの孤城』 주제가는?', '劇場アニメ『かがみの孤城』の主題歌は？', 'Which song was the theme of the anime film "Lonely Castle in the Mirror"?'), a: 'メリーゴーランド', x: ['クリスマスイブ', 'おにごっこ', 'ビリミリオン'] },
    { q: q('「カーテンコール」가 오프닝 테마로 쓰인 TV 애니메이션은?', '「カーテンコール」がOPテーマに起用されたTVアニメは？', 'Which TV anime used "Curtain Call" as its opening theme?'), a: '僕のヒーローアカデミア', x: ['呪術廻戦', '葬送のフリーレン', 'SK∞ エスケーエイト'] },
    { q: q('TV 애니메이션 『SK∞ エスケーエイト』 엔딩 테마는?', 'TVアニメ『SK∞ エスケーエイト』のEDテーマは？', 'Which song was the ending theme of the anime "SK8 the Infinity"?'), a: 'インフィニティ', x: ['飛行船', '桜晴', 'シャッター'] },
    { q: q('드라마 『再会〜Silent Truth〜』 주제가는?', 'ドラマ『再会〜Silent Truth〜』の主題歌は？', 'Which song was the theme of the drama "Saikai: Silent Truth"?'), a: '世界が終わりました', x: ['最低な君に贈る歌', '輪廻転生', 'DiNA'] },
    { q: q('TV 애니메이션 『サンダー3』 오프닝 테마는?', 'TVアニメ『サンダー3』のOPテーマは？', 'Which song was the opening theme of the anime "Thunder3"?'), a: 'サンダーボルト', x: ['最&強', 'カーテンコール', '輪廻転生'] },
    /* 활동 */
    { q: q('공식 유튜브 채널 이름은?', '公式YouTubeチャンネルの名前は？', 'What is his official YouTube channel called?'), a: '優里ちゃんねる', x: ['ゆーりんち', 'ゆうりの部屋', '優里TV'] },
    { q: q('2024년 川崎鷹也 · Tani Yuuki 와 셋이 결성한 밴드 이름은?', '2024年に川崎鷹也、Tani Yuukiと3人で結成したバンド名は？', 'What band did he form with Takaya Kawasaki and Tani Yuuki in 2024?'), a: '弱虫男爵', x: ['弱虫兄弟', '臆病伯爵', '泣き虫男爵'] },
    { q: q('2026년에 커버해 발매한 Bon Jovi 의 곡은?', '2026年にカバーをリリースしたBon Joviの曲は？', 'Which Bon Jovi song did he release a cover of in 2026?'), a: "Livin' On A Prayer", x: ["It's My Life", 'Always', 'Bed of Roses'] },
    { q: q('「ドライフラワー」 펑크 록 버전을 공개한 라이브 이벤트는? (幕張メッセ)', '「ドライフラワー」パンクロックver.を披露したライブイベントは？（幕張メッセ）', 'At which live event (Makuhari Messe) did he perform a punk-rock "Dry Flower"?'), a: 'Red Bull Jukebox 2023', x: ['ROCK IN JAPAN FESTIVAL 2022', 'YURIN LIVE vol.1', 'SUMMER SONIC 2023'] },
  ];
})();
