'use strict';
/* =========================================================
 * 緑黄色社会 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「緑黄色社会」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ym = (n, m) => ({ ko: `${n}년 ${m}월`, ja: `${n}年${m}月`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${n}` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const o = (ko, ja, en) => ({ ko, ja, en });
  const NG = '長屋晴子', KB = '小林壱誓', PP = 'peppe', AN = '穴見真吾';
  const A = ARTISTS.find((a) => a.id === 'ryokushaka');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '長屋晴子': '나가야 하루코', '小林壱誓': '코바야시 잇세이', '穴見真吾': '아나미 신고', '天野夏実': '아마노 나츠미', '杉江泰周': '스기에 야스치카',
    '愛知県': '아이치현', '岐阜県': '기후현', '静岡県': '시즈오카현', '大阪府': '오사카부',
    'リョクシャカ': '료쿠샤카', 'リョクシャ': '료쿠샤', 'ミドシャ': '미도샤', 'ショクシャカ': '쇼쿠샤카',
    '閃光ライオット': '센코 라이엇', '日本武道館': '닛폰 부도칸',
    '野菜生活100': '야사이 세이카츠 100', '伊右衛門': '이에몬', '午後の紅茶': '고고노 코차', 'ポカリスエット': '포카리스웨트',
    '薬屋のひとりごと': '쿠스리야노 히토리고토', 'ダンジョン飯': '던전밥', '僕のヒーローアカデミア': '보쿠노 히어로 아카데미아',
    '緊急取調室': '킨큐 토리시라베시츠', 'クレヨンしんちゃん': '크레용 신짱',
    'タッチ': '탓치', 'ハイキュー!!': '하이큐', '世界遺産検定1級': '세카이 이산 켄테이 1급', '漢字検定1級': '칸지 켄테이 1급', '英検1級': '에이켄 1급', '秘書検定1級': '히쇼 켄테이 1급',
    '溢れた水の行方': '아후레타 미즈노 유쿠에', 'あたまご': '아타마고',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타를 맡은 멤버는?', 'ボーカル・ギター担当のメンバーは？', 'Who is on vocals and guitar?'), a: NG, x: [KB, PP, AN] },
    { q: q('키보드를 맡은 멤버는?', 'キーボード担当のメンバーは？', 'Who plays keyboards?'), a: PP, x: [NG, KB, AN] },
    { q: q('베이스를 맡은 멤버는?', 'ベース担当のメンバーは？', 'Who plays bass?'), a: AN, x: [NG, KB, PP] },
    { q: q('기타를 맡은 멤버는?', 'ギター担当のメンバーは？', 'Who plays guitar (not vocals)?'), a: KB, x: [PP, AN, '杉江泰周'] },
    { q: q('2015년에 탈퇴한 멤버 杉江泰周의 담당 파트는?', '2015年に脱退した杉江泰周の担当パートは？', 'Which part did Yasuchika Sugie, who left in 2015, play?'), a: o('드럼', 'ドラムス', 'Drums'), x: [o('베이스', 'ベース', 'Bass'), o('기타', 'ギター', 'Guitar'), o('키보드', 'キーボード', 'Keyboards')] },
    { q: q('長屋晴子의 이름은 어느 만화의 히로인에서 따왔을까요?', '長屋晴子の名前の由来となったヒロインが登場する漫画は？', 'Haruko Nagaya was named after the heroine of which manga?'), a: 'SLAM DUNK', x: ['タッチ', 'H2', 'ハイキュー!!'] },
    { q: q('peppe가 2019년에 딴 자격은?', 'peppeが2019年に取得した資格は？', 'Which qualification did peppe earn in 2019?'), a: '世界遺産検定1級', x: ['漢字検定1級', '英検1級', '秘書検定1級'] },
    /* 결성 · 이름 */
    { q: q('출신지는?', '出身地は？', 'Where are they from?'), a: '愛知県', x: ['岐阜県', '静岡県', '大阪府'] },
    { q: q('밴드 결성 기념일은?', 'バンドの結成記念日は？', 'What is the band\'s anniversary date?'), a: d(7, 4), x: [d(4, 4), d(12, 10), d(11, 7)] },
    { q: q('결성 기념일로 정해진 첫 라이브를 한 해는?', '結成記念日となった初ライブを行った年は？', 'In which year was the first live show that marks their founding?'), a: y(2012), x: [y(2010), y(2014), y(2016)] },
    { q: q('밴드 이름은 무엇을 보고 나온 말에서 비롯되었을까요?', 'バンド名の由来となったのは、何を見たときの会話？', 'Seeing what led to the band name?'), a: o('야채 주스', '野菜ジュース', 'Vegetable juice'), x: [o('녹차', '緑茶', 'Green tea'), o('신호등', '信号機', 'Traffic light'), o('사회 교과서', '社会の教科書', 'A social studies textbook')] },
    { q: q('멤버들이 만난 고등학교의 동아리는?', 'メンバーが出会った高校の部活は？', 'Which high school club did the members meet in?'), a: o('경음악부', '軽音楽部', 'Light music club'), x: [o('취주악부', '吹奏楽部', 'Brass band club'), o('합창부', '合唱部', 'Choir club'), o('연극부', '演劇部', 'Drama club')] },
    { q: q('팬들이 부르는 밴드의 줄임말은?', 'バンドの略称は？', 'What is the band\'s nickname?'), a: 'リョクシャカ', x: ['リョクシャ', 'ミドシャ', 'ショクシャカ'] },
    { q: q('2013년 10대 한정 음악 페스티벌 「閃光ライオット」에서 받은 상은?', '2013年、10代限定の音楽フェス「閃光ライオット」で獲得したのは？', 'What did they win at the teens-only festival Senko Riot in 2013?'), a: o('준그랑프리', '準グランプリ', 'Runner-up'), x: [o('그랑프리', 'グランプリ', 'Grand prix'), o('심사위원 특별상', '審査員特別賞', 'Judges\' special award'), o('관객상', '観客賞', 'Audience award')] },
    /* 작품 */
    { q: q('메이저 데뷔작이 된 미니 앨범은?', 'メジャーデビュー作となったミニアルバムは？', 'Which mini album was their major debut?'), a: '溢れた水の行方', x: ['Nice To Meet You??', 'ADORE', '幸せ -EP-'] },
    { q: q('메이저 데뷔한 때는?', 'メジャーデビューしたのは？', 'When did they make their major debut?'), a: ym(2018, 11), x: [ym(2017, 1), ym(2019, 11), ym(2020, 4)] },
    { q: q('첫 CD 싱글은?', '初のCDシングルは？', 'What was their first CD single?'), a: 'sabotage', x: ['Shout Baby', '結証', 'LITMUS'] },
    { q: q('2026년 9월에 나온 6번째 앨범은?', '2026年9月発売の6枚目のアルバムは？', 'What is the 6th album released in September 2026?'), a: 'あたまご', x: ['Channel U', 'pink blue', 'Actor'] },
    { q: q('스트리밍 5억 회를 넘긴 곡은?', 'ストリーミング再生5億回を超えた曲は？', 'Which song passed 500 million streams?'), a: 'Mela!', x: ['花になって', 'サマータイムシンデレラ', 'Shout Baby'] },
    /* 타이업 */
    { q: q('애니메이션 『薬屋のひとりごと』 오프닝 곡은?', 'アニメ『薬屋のひとりごと』のオープニングテーマは？', 'Which song is the opening of "The Apothecary Diaries"?'), a: '花になって', x: ['Party!!', 'Shout Baby', '結証'] },
    { q: q('애니메이션 『ダンジョン飯』 엔딩 곡은?', 'アニメ『ダンジョン飯』のエンディングテーマは？', 'Which song is the ending of "Delicious in Dungeon"?'), a: 'Party!!', x: ['花になって', 'ナイスアイディア!', 'Shout Baby'] },
    { q: q('애니메이션 『僕のヒーローアカデミア』 4기 엔딩 곡은?', 'アニメ『僕のヒーローアカデミア』第4期のエンディングテーマは？', 'Which song was an ending of "My Hero Academia" season 4?'), a: 'Shout Baby', x: ['結証', 'sabotage', 'LITMUS'] },
    { q: q('2021년 드라마 『緊急取調室』 주제가는?', '2021年のドラマ『緊急取調室』の主題歌は？', 'Which song was the theme of the 2021 drama "Kinkyu Torishirabeshitsu"?'), a: 'LITMUS', x: ['ミチヲユケ', 'sabotage', 'サマータイムシンデレラ'] },
    { q: q('영화 『クレヨンしんちゃん もののけニンジャ珍風伝』 주제가는?', '映画『クレヨンしんちゃん もののけニンジャ珍風伝』の主題歌は？', 'Which song was the theme of the 2022 Crayon Shin-chan movie?'), a: '陽はまた昇るから', x: ['ミチヲユケ', 'たとえたとえ', '花になって'] },
    { q: q('2024년부터 앰배서더를 맡은 음료는?', '2024年からアンバサダーを務める飲料は？', 'Which drink have they been ambassadors for since 2024?'), a: '野菜生活100', x: ['伊右衛門', '午後の紅茶', 'ポカリスエット'] },
    /* 라이브 · 기록 */
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did they first appear on NHK Kohaku?'), a: y(2022), x: [y(2021), y(2023), y(2024)] },
    { q: q('첫 홍백가합전에서 부른 곡은?', '初出場の紅白歌合戦で歌った曲は？', 'Which song did they sing at their first Kohaku?'), a: 'Mela!', x: ['花になって', 'Shout Baby', 'ブレス'] },
    { q: q('처음으로 日本武道館 단독 공연을 연 때는?', '初の日本武道館ワンマンライブを開催したのは？', 'When was their first solo show at the Nippon Budokan?'), a: ym(2022, 9), x: [ym(2019, 11), ym(2021, 5), ym(2023, 7)] },
    { q: q('「LITMUS」 MV 로 MTV VMAJ 2021 에서 받은 상은?', '「LITMUS」のMVでMTV VMAJ 2021で受賞したのは？', 'Which award did the "LITMUS" video win at MTV VMAJ 2021?'), a: o('최우수 록 비디오상', '最優秀ロックビデオ賞', 'Best Rock Video'), x: [o('최우수 팝 비디오상', '最優秀ポップビデオ賞', 'Best Pop Video'), o('최우수 신인 아티스트상', '最優秀新人アーティストビデオ賞', 'Best New Artist Video'), o('최우수 그룹 비디오상', '最優秀グループビデオ賞', 'Best Group Video')] },
  ];
})();
