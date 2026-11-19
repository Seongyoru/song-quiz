'use strict';
/* =========================================================
 * Tani Yuuki 팬 퀴즈 : 프로필 · 활동 (4지선다)
 * 출처 : 일본어 위키백과 「Tani Yuuki」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const nth = (k) => ({ ko: `${k}번째`, ja: `${k}人目`, en: ['1st', '2nd', '3rd', '4th'][k - 1] });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'taniyuuki');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '神奈川県茅ヶ崎市': '가나가와현 치가사키시', '神奈川県横浜市': '가나가와현 요코하마시', '神奈川県藤沢市': '가나가와현 후지사와시', '神奈川県鎌倉市': '가나가와현 가마쿠라시',
    'ナイト・ドクター': '나이트 닥터', 'コンフィデンスマンJP': '컨피던스맨 JP', 'ペンディングトレイン': '펜딩 트레인',
    '東京リベンジャーズ': '도쿄 리벤저스', '呪術廻戦': '주술회전',
    'ドラえもん': '도라에몽', 'クレヨンしんちゃん': '크레용 신짱', 'ちびまる子ちゃん': '치비마루코짱', 'サザエさん': '사자에상',
    'みんなのうた': '민나노 우타', 'おかあさんといっしょ': '오카아상토 잇쇼', 'うたコン': '우타콘', 'NHK紅白歌合戦': 'NHK 홍백가합전',
    '王様のブランチ': '오사마노 브런치', 'めざましテレビ': '메자마시 테레비',
    '代官山LOOP': '다이칸야마 LOOP', '渋谷WWWX': '시부야 WWWX', '梅田TRAD': '우메다 TRAD',
    '多面態': '타멘타이', '航海士': '코카이시',
    '日本武道館': '닛폰 부도칸', '横浜アリーナ': '요코하마 아레나', '東京国際フォーラム': '도쿄 국제 포럼',
    '絢香': '아야카', '優里': '유우리', 'あいみょん': '아이묭', '小玉ひかり': '코다마 히카리',
    'あんさんぶるスターズ!!': '앙상블 스타즈!!', 'プロジェクトセカイ': '프로젝트 세카이', 'ウマ娘': '우마무스메', 'モンスト': '몬스트',
    '野田洋次郎': '노다 요지로',
  };

  A.trivia = [
    /* 프로필 */
    { q: q('Tani Yuuki 의 출신지는?', 'Tani Yuukiの出身地は？', 'Where is Tani Yuuki from?'), a: '神奈川県茅ヶ崎市', x: ['神奈川県横浜市', '神奈川県藤沢市', '神奈川県鎌倉市'] },
    { q: q('Tani Yuuki 가 태어난 해는?', 'Tani Yuukiが生まれた年は？', 'What year was Tani Yuuki born?'), a: y(1998), x: [y(1996), y(1997), y(1999)] },
    { q: q('음악을 시작한 계기가 된 어쿠스틱 기타를 준 사람은?', '音楽を始めるきっかけになったアコースティックギターをくれたのは？', 'Who gave him the acoustic guitar that got him into music?'), a: { ko: '할아버지', ja: '祖父', en: 'His grandfather' }, x: [{ ko: '아버지', ja: '父', en: 'His father' }, { ko: '형', ja: '兄', en: 'His older brother' }, { ko: '중학교 선생님', ja: '中学校の先生', en: 'A middle school teacher' }] },
    { q: q('기타를 받아 음악을 시작한 것은 언제?', 'ギターをもらって音楽を始めたのはいつ？', 'When did he get the guitar and start music?'), a: { ko: '중학교 2학년', ja: '中学2年生', en: '8th grade' }, x: [{ ko: '초등학교 6학년', ja: '小学6年生', en: '6th grade' }, { ko: '고등학교 1학년', ja: '高校1年生', en: '10th grade' }, { ko: '전문학교 1학년', ja: '専門学校1年生', en: 'First year of vocational school' }] },
    { q: q('2018년 여름부터 멤버로 활동한 온라인 아카펠라 서클은?', '2018年夏からメンバーとして活動したオンラインアカペラサークルは？', 'Which online a cappella circle did he join in summer 2018?'), a: 'WHITEBOX', x: ['BLACKBOX', 'VOICE BOX', 'Harmony Room'] },
    { q: q('「노다 요지로처럼 되고 싶었던」 적이 있을 만큼 좋아하는 밴드는?', '野田洋次郎になりたかった時期があるほどファンのバンドは？', 'Which band is he such a fan of that he once wanted to be Yojiro Noda?'), a: 'RADWIMPS', x: ['BUMP OF CHICKEN', 'ONE OK ROCK', 'back number'] },
    /* 데뷔 · 히트 */
    { q: q('첫 배포 싱글은?', '1st配信シングルは？', 'What was his first digital single?'), a: 'Myra', x: ['W/X/Y', 'Life is beautiful', 'Unreachable love song'] },
    { q: q('「Myra」를 처음 한 소절만 공개한 SNS 는?', '「Myra」をワンフレーズだけ最初に公開したSNSは？', 'Where did he first post a snippet of "Myra"?'), a: 'TikTok', x: ['Instagram', 'X (Twitter)', { ko: '니코니코 동화', ja: 'ニコニコ動画', en: 'Niconico' }] },
    { q: q('「Myra」는 무엇으로 만든 곡일까?', '「Myra」は何を使って作った曲？', 'How was "Myra" made?'), a: { ko: '독학한 DTM', ja: '独学で始めたDTM', en: 'Self-taught DTM' }, x: [{ ko: '밴드 합주', ja: 'バンドでのセッション', en: 'A band session' }, { ko: '아카펠라 녹음', ja: 'アカペラ録音', en: 'An a cappella recording' }, { ko: '피아노 한 대', ja: 'ピアノ一本', en: 'Piano only' }] },
    { q: q('발매 반년 뒤 TikTok 을 중심으로 크게 유행한 곡은?', 'リリース半年後にTikTokを中心に大流行した曲は？', 'Which song blew up on TikTok about six months after release?'), a: 'W/X/Y', x: ['Myra', 'もう一度', 'おかえり'] },
    { q: q('2022년 오리콘 연간 스트리밍 랭킹 1위 곡은?', '「オリコン年間ランキング2022」ストリーミング部門1位の曲は？', 'Which song topped the Oricon 2022 yearly streaming ranking?'), a: 'W/X/Y', x: ['Myra', 'もう一度', '愛言葉'] },
    { q: q('「W/X/Y」 가 5억 회 재생을 넘었을 때 남성 솔로로는 몇 번째였을까?', '「W/X/Y」の5億回再生突破は男性ソロアーティスト史上何人目？', 'Among male solo artists, how many had reached 500M streams when "W/X/Y" did?'), a: nth(2), x: [nth(1), nth(3), nth(4)] },
    { q: q('2022년 일본 레코드 대상에서 노미네이트된 상은?', '第64回日本レコード大賞でノミネートされたのは？', 'What was he nominated for at the 64th Japan Record Awards?'), a: { ko: '신인상', ja: '新人賞', en: 'Best New Artist' }, x: [{ ko: '대상', ja: '大賞', en: 'Grand Prix' }, { ko: '작곡상', ja: '作曲賞', en: 'Composer Award' }, { ko: '특별상', ja: '特別賞', en: 'Special Award' }] },
    /* 타이업 */
    { q: q('「Over The Time」 이 오리지널 넘버로 쓰인 드라마는?', '「Over The Time」がオリジナルナンバーに採用されたドラマは？', 'Which drama used "Over The Time" as an original number?'), a: 'ナイト・ドクター', x: ['コンフィデンスマンJP', 'ペンディングトレイン', 'silent'] },
    { q: q('「械物」 가 오프닝 테마인 애니메이션은?', '「械物」がオープニングテーマのアニメは？', 'Which anime used "Kaibutsu" as its opening?'), a: 'EDENS ZERO', x: ['東京リベンジャーズ', 'SPY×FAMILY', '呪術廻戦'] },
    { q: q('「もしものがたり」 가 엔딩곡인 애니메이션은?', '「もしものがたり」がエンディング曲のアニメは？', 'Which anime uses "Moshimonogatari" as its ending?'), a: 'ドラえもん', x: ['クレヨンしんちゃん', 'ちびまる子ちゃん', 'サザエさん'] },
    { q: q('「万有引力」 이 방송된 NHK 프로그램은?', '「万有引力」がオンエアされたNHKの番組は？', 'Which NHK program aired "Banyuuinryoku"?'), a: 'みんなのうた', x: ['おかあさんといっしょ', 'うたコン', 'NHK紅白歌合戦'] },
    { q: q('「ワンダーランド」 가 테마송이었던 TBS 프로그램은?', '「ワンダーランド」がテーマソングだったTBSの番組は？', 'Which TBS show used "Wonderland" as its theme song?'), a: '王様のブランチ', x: ['めざましテレビ', 'news zero', 'ZIP!'] },
    { q: q('「アンタレス」 가 캠페인송으로 쓰인 게임은?', '「アンタレス」がキャンペーンソングになったゲームは？', 'Which game used "Antares" as a campaign song?'), a: 'あんさんぶるスターズ!!', x: ['プロジェクトセカイ', 'ウマ娘', 'モンスト'] },
    { q: q('「運命」 이 CM 송으로 쓰인 스마트폰은?', '「運命」がCMソングになったスマートフォンは？', 'Which smartphone used "Unmei" in its commercial?'), a: 'Xperia 5 IV', x: ['iPhone 14', 'Galaxy S23', 'Pixel 7'] },
    /* 앨범 · 라이브 */
    { q: q('첫 정규 앨범의 이름은?', '1stアルバムのタイトルは？', 'What is his first album called?'), a: 'Memories', x: ['多面態', '航海士', 'HOMETOWN'] },
    { q: q('2023년에 나온 2nd 앨범의 이름은?', '2023年に出た2ndアルバムのタイトルは？', 'What is his 2nd album (2023) called?'), a: '多面態', x: ['Memories', '航海士', 'kotodama'] },
    { q: q('2024년에 나온 첫 EP 의 이름은?', '2024年に出た1st EPのタイトルは？', 'What is his first EP (2024) called?'), a: 'HOMETOWN', x: ['SPACE RENDEZVOUS', 'Memories', 'LOTUS'] },
    { q: q('첫 원맨 라이브 (2020년) 가 열린 곳은?', '初のワンマンライブ（2020年）の会場は？', 'Where was his first solo show (2020)?'), a: '代官山LOOP', x: ['渋谷WWWX', '梅田TRAD', 'Shibuya O-EAST'] },
    { q: q('「Over The Time」 투어 파이널에 깜짝 출연한 가수는?', '「Over The Time」ツアーファイナルにサプライズ出演したのは？', 'Who made a surprise appearance at the "Over The Time" tour final?'), a: '優里', x: ['絢香', 'あいみょん', '小玉ひかり'] },
    { q: q('유튜브 기획 「Re:tter」 1회에서 함께 노래한 가수는?', 'YouTube企画「Re:tter」第1回で一緒に歌ったのは？', 'Who sang with him in the first episode of "Re:tter"?'), a: '絢香', x: ['優里', 'あいみょん', '小玉ひかり'] },
    { q: q('5주년 투어 「Still love... this」 의 파이널 공연장은?', '5周年ツアー「Still love... this」のファイナル会場は？', 'Where was the final of the 5th-anniversary tour "Still love... this"?'), a: '日本武道館', x: ['横浜アリーナ', '東京国際フォーラム', 'TOKYO DOME CITY HALL'] },
  ];
})();
