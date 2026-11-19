'use strict';
/* =========================================================
 * tuki. 팬 퀴즈 (4지선다)
 * 출처 : 일본어 위키백과 「tuki.」 본문 (2026-11-19 정리). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ym = (n, m) => ({ ko: `${n}년 ${m}월`, ja: `${n}年${m}月`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${n}` });
  const age = (k) => ({ ko: `${k}살`, ja: `${k}歳`, en: String(k) });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'tuki');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기
  A.readings = {
    '出水ぽすか': '데미즈 포스카', '約束のネバーランド': '약속의 네버랜드', '日本武道館': '닛폰 부도칸',
    '承認欲求爆発': '쇼닌욕큐 바쿠하츠', '月面着陸計画': '게츠멘 차쿠리쿠 케이카쿠',
    '今日、好きになりました。': '오늘, 좋아하게 됐습니다.', 'キャスター': '캐스터', '日曜劇場': '일요극장',
    '愚か者の身分': '오로카모노노 미분', 'スノウボールアース': '스노볼 어스', '夫に間違いありません': '옷토니 마치가이 아리마센',
    '東京リベンジャーズ': '도쿄 리벤저스', '紅白歌合戦': '홍백가합전', 'スズキ': '스즈키',
    '台北': '타이베이', 'ソウル': '서울', '香港': '홍콩', 'ピアノ': '피아노', 'ギター': '기타', 'ドラム': '드럼', 'バイオリン': '바이올린',
  };

  A.trivia = [
    /* 데뷔 · 프로필 */
    { q: q('tuki. 가 처음 노래를 올리며 화제가 된 플랫폼은?', 'tuki.が弾き語り動画を投稿して話題になったプラットフォームは？', 'On which platform did tuki. first gain attention with her videos?'), a: 'TikTok', x: ['YouTube', 'Instagram', { ko: '니코니코 동화', ja: 'ニコニコ動画', en: 'Niconico' }] },
    { q: q('첫 싱글은?', '1stシングルは？', 'What was her first single?'), a: '晩餐歌', x: ['一輪花', 'サクラキミワタシ', '地獄恋文'] },
    { q: q('「晩餐歌」가 배포된 때는?', '「晩餐歌」が配信リリースされた時期は？', 'When was "Bansanka" released?'), a: ym(2023, 9), x: [ym(2022, 12), ym(2023, 3), ym(2024, 1)] },
    { q: q('유치원 때부터 배운 악기는?', '幼稚園の頃から習い始めた楽器は？', 'Which instrument has she studied since kindergarten?'), a: { ko: '피아노', ja: 'ピアノ', en: 'Piano' }, x: [{ ko: '기타', ja: 'ギター', en: 'Guitar' }, { ko: '바이올린', ja: 'バイオリン', en: 'Violin' }, { ko: '드럼', ja: 'ドラム', en: 'Drums' }] },
    { q: q('곡을 만들기 시작한 나이는?', '楽曲制作を始めた年齢は？', 'At what age did she start writing songs?'), a: age(13), x: [age(10), age(15), age(16)] },
    { q: q('공개하지 않는 것이 아닌 것은?', '非公開にしていないものは？', 'Which of these has she NOT kept private?'), a: { ko: '활동 이름', ja: '活動名', en: 'Artist name' }, x: [{ ko: '본명', ja: '本名', en: 'Real name' }, { ko: '얼굴', ja: '素顔', en: 'Face' }, { ko: '출신지', ja: '出身地', en: 'Hometown' }] },
    { q: q('자신의 레이블 이름은?', '自主レーベルの名前は？', 'What is the name of her own label?'), a: '月面着陸計画', x: ['晩餐歌レコーズ', 'tuki. records', '星街レコード'] },
    { q: q('첫 뮤직비디오를 공개한 곡은?', '初めてミュージックビデオを公開した曲は？', 'Which song got her first music video?'), a: '一輪花', x: ['晩餐歌', 'サクラキミワタシ', '地獄恋文'] },
    { q: q('「晩餐歌」 MV 일러스트를 그린 『약속의 네버랜드』 작화가는?', '「晩餐歌」MVのイラストを担当した『約束のネバーランド』の漫画家は？', 'Which "The Promised Neverland" artist illustrated the "Bansanka" MV?'), a: '出水ぽすか', x: ['ONE', '吾峠呼世晴', '藤本タツキ'] },
    /* 기록 */
    { q: q('「晩餐歌」가 Billboard Japan Hot 100 1위를 했을 때 나이는?', '「晩餐歌」がBillboard JAPANで首位を獲得した時の年齢は？', 'How old was she when "Bansanka" topped Billboard Japan?'), a: age(15), x: [age(14), age(16), age(17)] },
    { q: q('2025년 5월, 사상 최연소로 넘긴 스트리밍 누적 재생 수는?', '2025年5月に史上最年少で突破したストリーミング累計再生回数は？', 'In May 2025 she became the youngest to pass how many total streams?'), a: { ko: '5억 회', ja: '5億回', en: '500 million' }, x: [{ ko: '1억 회', ja: '1億回', en: '100 million' }, { ko: '3억 회', ja: '3億回', en: '300 million' }, { ko: '10억 회', ja: '10億回', en: '1 billion' }] },
    { q: q('「晩餐歌」로 처음 나간 NHK 홍백가합전은 몇 회?', '「晩餐歌」で初出場したNHK紅白歌合戦は第何回？', 'Which edition of NHK Kohaku was her first appearance?'), a: { ko: '제75회', ja: '第75回', en: '75th' }, x: [{ ko: '제73회', ja: '第73回', en: '73rd' }, { ko: '제74회', ja: '第74回', en: '74th' }, { ko: '제76회', ja: '第76回', en: '76th' }] },
    /* 앨범 · 활동 */
    { q: q('첫 앨범 이름은?', '1stアルバムのタイトルは？', 'What is the title of her first album?'), a: '15', x: ['16', '晩餐歌', 'tuki.'] },
    { q: q('첫 앨범 『15』가 나온 때는?', '1stアルバム『15』の発売時期は？', 'When was her first album "15" released?'), a: ym(2025, 1), x: [ym(2024, 9), ym(2024, 12), ym(2025, 4)] },
    { q: q('2025년 4월 1일부터 바뀐 활동 이름 표기는?', '2025年4月1日から引き継がれた活動名の表記は？', 'What did her activity name change to on April 1, 2025?'), a: 'tuki.(16)', x: ['tuki.(15)', 'tuki.(17)', 'tuki.2025'] },
    { q: q('첫 단독 라이브 장소는?', '初ライブの会場は？', 'Where was her first live concert held?'), a: '日本武道館', x: ['東京ドーム', 'Zepp Haneda', 'さいたまスーパーアリーナ'] },
    { q: q('무도관 공연의 부제는?', '日本武道館公演のサブタイトルは？', 'What was the subtitle of her Budokan show?'), a: '〜承認欲求爆発〜', x: ['〜月面着陸計画〜', '〜天体観測〜', '〜晩餐会〜'] },
    { q: q('무도관 첫 라이브를 연 해는?', '日本武道館で初ライブを行った年は？', 'In which year did she hold her first Budokan live?'), a: y(2026), x: [y(2024), y(2025), y(2027)] },
    { q: q('2026년 첫 아시아 투어에서 공연하지 않은 도시는?', '2026年の1st ASIA TOURで公演しなかった都市は？', 'Which city was NOT on her 2026 1st Asia Tour?'), a: { ko: '방콕', ja: 'バンコク', en: 'Bangkok' }, x: [{ ko: '타이베이', ja: '台北', en: 'Taipei' }, { ko: '서울', ja: 'ソウル', en: 'Seoul' }, { ko: '홍콩', ja: '香港', en: 'Hong Kong' }] },
    /* 타이업 */
    { q: q('TBS 일요극장 『캐스터』 주제가는?', 'TBS系日曜劇場『キャスター』の主題歌は？', 'Which song was the theme of the TBS drama "Caster"?'), a: '騙シ愛', x: ['声命', 'ストレンジャーズ', 'ギルティ'] },
    { q: q('「サクラキミワタシ」가 삽입곡으로 쓰인 ABEMA 프로그램은?', '「サクラキミワタシ」が挿入歌となったABEMAの番組は？', 'Which ABEMA show used "Sakura Kimi Watashi" as an insert song?'), a: '今日、好きになりました。', x: ['オオカミくんには騙されない', 'バズリズム', 'ZIP!'] },
    { q: q('PlayStation 5 CM에 쓰인 곡은?', 'PlayStation 5のCMソングになった曲は？', 'Which song was used in a PlayStation 5 commercial?'), a: 'ひゅるりらぱっぱ', x: ['アイモライモ', '月面着陸計画', 'マルボロ'] },
    { q: q('영화 『愚か者の身分』 주제가는?', '映画『愚か者の身分』の主題歌は？', 'Which song was the theme of the film "Orokamono no Mibun"?'), a: '人生讃歌', x: ['最低界隈', 'コトノハ', '騙シ愛'] },
    { q: q('TV 애니메이션 『スノウボールアース』 오프닝은?', 'テレビアニメ『スノウボールアース』のオープニングテーマは？', 'Which song opened the anime "Snowball Earth"?'), a: '零-zero-', x: ['SOS', '第三惑星', 'バブル'] },
    { q: q('게임 『東京リベンジャーズUNLIMITED』 주제가는?', 'ゲーム『東京リベンジャーズUNLIMITED』の主題歌は？', 'Which song was the theme of the game "Tokyo Revengers UNLIMITED"?'), a: '地獄恋文', x: ['ギルティ', '愛の賞味期限', '孤独の鯨'] },
    { q: q('「愛の賞味期限」은 어느 곡의 앤서 송일까요?', '「愛の賞味期限」はどの曲のアンサーソング？', '"Ai no Shoumikigen" is an answer song to which song?'), a: '晩餐歌', x: ['一輪花', '星街の駅で', 'シーソー'] },
  ];
})();
