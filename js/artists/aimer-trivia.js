'use strict';
/* =========================================================
 * Aimer 팬 퀴즈 (4지선다)
 * 출처 : 일본어 위키백과 「Aimer」 본문 (2026-11-19 정리). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ym = (n, m) => ({ ko: `${n}년 ${m}월`, ja: `${n}年${m}月`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${n}` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'aimer');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기
  A.readings = {
    '玉井健二': '타마이 켄지', '飛内将大': '토비나이 마사히로', '百田留衣': '모모타 루이', '釣俊輔': '츠리 슌스케',
    '澤野弘之': '사와노 히로유키', '梶浦由記': '카지우라 유키', '野田洋次郎': '노다 요지로', '菅野よう子': '칸노 요코',
    '青葉市子': '아오바 이치코', '阿部真央': '아베 마오', '平沢進': '히라사와 스스무', '内澤崇仁': '우치사와 타카히토',
    '宇多田ヒカル': '우타다 히카루', '椎名林檎': '시이나 링고', '西野七瀬': '니시노 나나세', '浜辺美波': '하마베 미나미',
    '六等星の夜': '로쿠토세이노 요루', '機動戦士ガンダムUC': '기동전사 건담 UC', '鬼滅の刃': '귀멸의 칼날',
    '遊郭編': '유곽편', '甲鉄城のカバネリ': '갑철성의 카바네리', '残響のテロル': '잔향의 테러',
    '夏目友人帳': '나츠메 우인장', 'あなたの番です': '당신 차례입니다', 'ヴィンランド・サガ': '빈란드 사가',
    '炎炎ノ消防隊': '불꽃 소방대', '恋は雨上がりのように': '사랑은 비가 갠 뒤처럼', 'チェンソーマン': '체인소 맨',
    '日本武道館': '닛폰 부도칸', '大阪城ホール': '오사카조 홀', '横浜アリーナ': '요코하마 아리나',
    '日本ゴールドディスク大賞': '일본 골드디스크 대상', '日本レコード大賞': '일본 레코드 대상', 'CDショップ大賞': 'CD숍 대상',
    '特別賞': '특별상', '準大賞': '준대상', '新人賞': '신인상', '最優秀作品賞': '최우수 작품상',
    'エメ': '에메', 'デフスターレコーズ': '데프스타 레코즈',
  };

  A.trivia = [
    /* 이름 · 데뷔 */
    { q: q('「Aimer」라는 이름은 어느 나라 말에서 왔을까요?', '「Aimer」という名前は何語に由来する？', 'Which language does the name "Aimer" come from?'), a: { ko: '프랑스어', ja: 'フランス語', en: 'French' }, x: [{ ko: '이탈리아어', ja: 'イタリア語', en: 'Italian' }, { ko: '스페인어', ja: 'スペイン語', en: 'Spanish' }, { ko: '독일어', ja: 'ドイツ語', en: 'German' }] },
    { q: q('「Aimer」의 뜻은?', '「Aimer」の意味は？', 'What does "Aimer" mean?'), a: { ko: '사랑하다', ja: '愛する', en: 'To love' }, x: [{ ko: '노래하다', ja: '歌う', en: 'To sing' }, { ko: '꿈꾸다', ja: '夢見る', en: 'To dream' }, { ko: '빛나다', ja: '輝く', en: 'To shine' }] },
    { q: q('작사할 때 쓰는 이름은?', '作詞の際に使う名義は？', 'What name does she use as a lyricist?'), a: 'aimerrhythm', x: ['aimerlyric', 'aimersong', 'aimer:rain'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was her major debut single?'), a: '六等星の夜', x: ['Re:pray', '雪の降る街', 'RE:I AM'] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'In which year did she make her major debut?'), a: y(2011), x: [y(2010), y(2012), y(2013)] },
    { q: q('데뷔 당시 소속 레이블은?', 'デビュー当時のレーベルは？', 'Which label did she debut on?'), a: 'DefSTAR RECORDS', x: ['SACRA MUSIC', 'SME Records', 'Ki/oon Music'] },
    { q: q('2021년부터 소속된 레이블은?', '2021年から所属するレーベルは？', 'Which label has she been with since 2021?'), a: 'SACRA MUSIC', x: ['DefSTAR RECORDS', 'Aniplex', 'Lantis'] },
    { q: q('메이저 데뷔 전 처음 낸 배포 한정 커버 앨범은?', 'メジャーデビュー前に配信した初のカバーアルバムは？', 'What was her pre-debut digital cover album?'), a: 'Your favorite things', x: ['Bitter & Sweet', 'After Dark', 'Sleepless Nights'] },
    { q: q('첫 정규 앨범은?', '1stオリジナルアルバムは？', 'What was her first original album?'), a: 'Sleepless Nights', x: ['Midnight Sun', 'DAWN', 'daydream'] },
    /* 음악 · 협업 */
    { q: q('Aimer가 가장 존경하는 뮤지션으로 꼽은 사람은?', 'Aimerが最も敬愛するミュージシャンとして挙げているのは？', 'Who does Aimer name as the musician she respects most?'), a: '平沢進', x: ['宇多田ヒカル', '椎名林檎', '梶浦由記'] },
    { q: q('중학생 때 빠져서 기타를 시작하게 된 해외 가수는?', '中学時代に傾倒しギターを始めるきっかけとなった海外アーティストは？', 'Which foreign artist inspired her to pick up guitar in junior high?'), a: { ko: '에이브릴 라빈', ja: 'アヴリル・ラヴィーン', en: 'Avril Lavigne' }, x: [{ ko: '테일러 스위프트', ja: 'テイラー・スウィフト', en: 'Taylor Swift' }, { ko: '아델', ja: 'アデル', en: 'Adele' }, { ko: '레이디 가가', ja: 'レディー・ガガ', en: 'Lady Gaga' }] },
    { q: q('「RE:I AM」「StarRingChild」「ninelie」를 만든 작곡가는?', '「RE:I AM」「StarRingChild」「ninelie」を手がけた作曲家は？', 'Who composed "RE:I AM", "StarRingChild" and "ninelie"?'), a: '澤野弘之', x: ['梶浦由記', '菅野よう子', '玉井健二'] },
    { q: q('「花の唄」「I beg you」「春はゆく」를 만든 작곡가는?', '「花の唄」「I beg you」「春はゆく」を手がけた作曲家は？', 'Who wrote "Hana no Uta", "I beg you" and "Haru wa Yuku"?'), a: '梶浦由記', x: ['澤野弘之', '菅野よう子', '百田留衣'] },
    { q: q('「蝶々結び」를 만들고 프로듀스한 RADWIMPS 멤버는?', '「蝶々結び」を提供・プロデュースしたRADWIMPSのメンバーは？', 'Which RADWIMPS member wrote and produced "Chouchou Musubi"?'), a: '野田洋次郎', x: ['内澤崇仁', '平沢進', '飛内将大'] },
    { q: q('「ninelie」에 게스트 보컬로 참여한 EGOIST 의 보컬은?', '「ninelie」にゲストボーカルで参加したEGOISTのボーカルは？', 'Which EGOIST vocalist featured on "ninelie"?'), a: 'chelly', x: ['LiSA', 'milet', 'ReoNa'] },
    { q: q('「誰か、海を。」를 작곡 · 프로듀스한 음악가는?', '「誰か、海を。」の作曲・プロデュースを手がけた音楽家は？', 'Who composed and produced "Dareka, Umi wo."?'), a: '菅野よう子', x: ['梶浦由記', '澤野弘之', '青葉市子'] },
    { q: q('「地球儀」에 함께한 아티스트는?', '「地球儀」で共演したアーティストは？', 'Who collaborated with her on "Chikyuugi"?'), a: 'Vaundy', x: ['milet', 'TK', 'Taka'] },
    { q: q('2023년에 결혼을 발표한 상대는 어떤 사람일까요?', '2023年に結婚を報告した相手は？', 'Who did she announce her marriage to in 2023?'), a: '飛内将大', x: ['玉井健二', '百田留衣', '釣俊輔'] },
    /* 타이업 */
    { q: q('「残響散歌」가 오프닝으로 쓰인 애니메이션은?', '「残響散歌」がオープニングテーマに起用されたアニメは？', 'Which anime used "Zankyou Sanka" as its opening?'), a: { ko: '귀멸의 칼날 유곽편', ja: '鬼滅の刃 遊郭編', en: 'Demon Slayer: Entertainment District Arc' }, x: [{ ko: '체인소 맨', ja: 'チェンソーマン', en: 'Chainsaw Man' }, { ko: '불꽃 소방대', ja: '炎炎ノ消防隊', en: 'Fire Force' }, { ko: '빈란드 사가', ja: 'ヴィンランド・サガ', en: 'Vinland Saga' }] },
    { q: q('「カタオモイ」가 처음 실린 앨범은?', '「カタオモイ」が初収録されたアルバムは？', 'Which album first included "Kataomoi"?'), a: 'daydream', x: ['DAWN', 'Sun Dance', 'Walpurgis'] },
    { q: q('「STAND-ALONE」이 주제가로 쓰인 드라마는?', '「STAND-ALONE」が主題歌に起用されたドラマは？', 'Which drama used "STAND-ALONE" as its theme song?'), a: 'あなたの番です', x: ['奪い愛、冬', 'ホットママ', '大奥'] },
    { q: q('「Ref:rain」이 엔딩으로 쓰인 애니메이션은?', '「Ref:rain」がエンディングテーマに起用されたアニメは？', 'Which anime used "Ref:rain" as its ending?'), a: '恋は雨上がりのように', x: ['夏目友人帳 伍', '甲鉄城のカバネリ', '残響のテロル'] },
    /* 기록 · 수상 · 라이브 */
    { q: q('2019년 CD 작품으로 처음 오리콘 주간 1위를 한 싱글은?', '2019年にCD作品として初めてオリコン週間1位を獲得したシングルは？', 'Which single became her first CD to top the Oricon weekly chart (2019)?'), a: 'I beg you/花びらたちのマーチ/Sailing', x: ['ONE/花の唄/六等星の夜 Magic Blue ver.', 'Ref:rain/眩いばかり', 'Torches'] },
    { q: q('자신의 첫 1억 회 재생을 넘긴 곡은?', '自身初のストリーミング1億回再生を突破した曲は？', 'Which song was her first to pass 100 million streams?'), a: 'カタオモイ', x: ['残響散歌', 'Ref:rain', '蝶々結び'] },
    { q: q('2022년 Billboard JAPAN 연간 「Hot 100 of the Year」를 차지한 곡은?', 'Billboard JAPAN MUSIC AWARDS 2022で「Hot 100 of the Year」を獲得した曲は？', 'Which song won Hot 100 of the Year at Billboard JAPAN Music Awards 2022?'), a: '残響散歌', x: ['朝が来る', 'カタオモイ', 'Deep down'] },
    { q: q('CD숍 대상 2017 에서 준대상을 받은 앨범은?', '第9回CDショップ大賞で準大賞を受賞したアルバムは？', 'Which album won runner-up at the 9th CD Shop Awards (2017)?'), a: 'daydream', x: ['DAWN', 'Midnight Sun', 'Sun Dance'] },
    { q: q('메이저 데뷔 직후부터 이어 온 인터넷 라이브 시리즈 이름은?', 'メジャーデビュー直後から続けているネットライブシリーズの名前は？', 'What is the name of her internet live series started right after her debut?'), a: 'Live at anywhere', x: ['Live at home', 'Aimer Premier Live', 'Midnight Session'] },
    { q: q('첫 아레나 투어 「nuit immersive」 를 연 해는?', '初のアリーナツアー「nuit immersive」を開催した年は？', 'When did she hold her first arena tour "nuit immersive"?'), a: y(2023), x: [y(2019), y(2021), y(2025)] },
    { q: q('첫 베스트 앨범 두 장이 나온 때는?', '初のベストアルバム2作が発売された時期は？', 'When were her first two best-of albums released?'), a: ym(2017, 5), x: [ym(2016, 9), ym(2019, 4), ym(2021, 4)] },
  ];
})();
