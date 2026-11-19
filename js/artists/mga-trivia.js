'use strict';
/* =========================================================
 * Mrs. GREEN APPLE 멤버 · 밴드 퀴즈 (4지선다)
 * 출처 : 일본어 위키백과 「Mrs. GREEN APPLE」 「大森元貴」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ym = (n, m) => ({ ko: `${n}년 ${m}월`, ja: `${n}年${m}月`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${n}` });
  const ymd = (n, m, day) => ({ ko: `${n}년 ${m}월 ${day}일`, ja: `${n}年${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}, ${n}` });
  const n = (k) => ({ ko: `${k}명`, ja: `${k}人`, en: String(k) });
  const age = (k) => ({ ko: `${k}살`, ja: `${k}歳`, en: String(k) });
  const OM = '大森元貴', WK = '若井滉斗', FJ = '藤澤涼架';
  const q = (ko, ja, en) => ({ ko, ja, en });

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다). 이름 읽기는 일본어 위키백과 기준
  ARTISTS.find((a) => a.id === 'mga').readings = {
    '大森元貴': '오모리 모토키', '若井滉斗': '와카이 히로토', '藤澤涼架': '후지사와 료카',
    '髙野清宗': '타카노 키요카즈', '山中綾華': '야마나카 아야카', '松尾拓海': '마츠오 타쿠미',
    '長野県': '나가노현', '東京都': '도쿄도', '大阪府': '오사카부', '宮崎県': '미야자키현', '神奈川県': '가나가와현',
    'もっくん': '못쿤', 'もときち': '모토키치', 'おーもり': '오모리', 'もっちー': '못치',
    '#真相をお話しします': '진상을 말씀드리겠습니다', 'ラーゲリより愛を込めて': '라게리에서 사랑을 담아',
    'サイレントラブ': '사일런트 러브', 'ディア・ファミリー': '디어 패밀리',
    'いせたくや': '이세 타쿠야', 'あんぱん': '앙팡', '風、薫る': '카제 카오루', 'らんまん': '란만', 'ブギウギ': '부기우기',
    '渋谷CLUB CRAWL': '시부야 클럽 크롤', '下北沢SHELTER': '시모키타자와 셸터', '新宿LOFT': '신주쿠 로프트', '渋谷WWW': '시부야 WWW',
    'エデンの園': '에덴노 소노',
    'ゼンジン未到とヴェルトラウム〜銘銘編〜': '젠진미토토 베르트라움 ~메이메이헨~',
    'ゼンジン未到とリライアンス〜復誦編〜': '젠진미토토 릴라이언스 ~후쿠쇼헨~',
  };

  ARTISTS.find((a) => a.id === 'mga').trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타를 맡은 멤버는?', 'ボーカル・ギター担当のメンバーは？', 'Who is on vocals and guitar?'), a: OM, x: [WK, FJ, '髙野清宗'] },
    { q: q('기타를 맡은 멤버는?', 'ギター担当のメンバーは？', 'Who plays guitar?'), a: WK, x: [OM, FJ, '山中綾華'] },
    { q: q('키보드를 맡은 멤버는?', 'キーボード担当のメンバーは？', 'Who plays keyboard?'), a: FJ, x: [OM, WK, '松尾拓海'] },
    { q: q('모든 곡의 작사 · 작곡을 맡는 멤버는?', '全曲の作詞作曲を担当しているメンバーは？', 'Who writes the lyrics and music for every song?'), a: OM, x: [WK, FJ, q('세 명이 함께', '3人で共作', 'All three together')] },
    { q: q('大森元貴의 생일은?', '大森元貴の誕生日は？', "When is Motoki Ohmori's birthday?"), a: d(9, 14), x: [d(10, 8), d(5, 19), d(4, 23)] },
    { q: q('若井滉斗의 생일은?', '若井滉斗の誕生日は？', "When is Hiroto Wakai's birthday?"), a: d(10, 8), x: [d(9, 14), d(5, 19), d(5, 20)] },
    { q: q('藤澤涼架의 생일은?', '藤澤涼架の誕生日は？', "When is Ryoka Fujisawa's birthday?"), a: d(5, 19), x: [d(9, 14), d(10, 8), d(7, 8)] },
    { q: q('지금 멤버 세 명 중 가장 나이가 많은 사람은?', '現メンバー3人のうち最年長は？', 'Who is the oldest of the current three members?'), a: FJ, x: [OM, WK, q('셋 다 동갑', '3人とも同い年', 'They are all the same age')] },
    { q: q('藤澤涼架의 출신지는?', '藤澤涼架の出身地は？', 'Where is Ryoka Fujisawa from?'), a: '長野県', x: ['東京都', '大阪府', '宮崎県'] },
    { q: q('大森元貴의 출신지는?', '大森元貴の出身地は？', 'Where is Motoki Ohmori from?'), a: '東京都', x: ['長野県', '神奈川県', '大阪府'] },
    { q: q('大森元貴의 애칭은?', '大森元貴の愛称は？', "What is Motoki Ohmori's nickname?"), a: 'もっくん', x: ['もときち', 'おーもり', 'もっちー'] },
    { q: q('大森元貴의 솔로 데뷔 EP는?', '大森元貴のソロデビューEPは？', "What was Motoki Ohmori's solo debut EP?"), a: '『French』', x: ['『Midnight』', '『Variety』', '『Unity』'] },
    { q: q('大森元貴가 솔로 데뷔한 해는?', '大森元貴がソロデビューした年は？', 'In which year did Motoki Ohmori debut as a solo artist?'), a: y(2021), x: [y(2019), y(2020), y(2022)] },
    { q: q('大森元貴가 주연을 맡은 영화는?', '大森元貴が主演した映画は？', 'Which film did Motoki Ohmori star in?'), a: '『#真相をお話しします』', x: ['『ラーゲリより愛を込めて』', '『サイレントラブ』', '『ディア・ファミリー』'] },
    { q: q('大森元貴가 작곡가 「いせたくや」 역으로 나온 NHK 아침 드라마는?', '大森元貴が作曲家・いせたくや役で出演したNHK連続テレビ小説は？', 'In which NHK morning drama did Motoki Ohmori play composer Taku Ise?'), a: '『あんぱん』', x: ['『風、薫る』', '『らんまん』', '『ブギウギ』'] },
    { q: q('2019년까지 리더였다가 리더 자리를 넘긴 멤버는?', '2019年までリーダーで、リーダーを交代したメンバーは？', 'Who was leader until 2019 before handing it over?'), a: WK, x: [OM, FJ, '山中綾華'] },
    { q: q('2021년 12월 30일에 탈퇴한 멤버 중 한 명은?', '2021年12月30日に脱退したメンバーのひとりは？', 'Which of these members left on Dec 30, 2021?'), a: '山中綾華', x: ['松尾拓海', WK, FJ] },
    { q: q('지금 Mrs. GREEN APPLE은 몇 인조?', '現在のMrs. GREEN APPLEは何人組？', 'How many members does Mrs. GREEN APPLE have now?'), a: n(3), x: [n(2), n(4), n(5)] },
    /* 밴드 */
    { q: q('Mrs. GREEN APPLE을 결성한 날은?', 'Mrs. GREEN APPLEを結成した日は？', 'When was Mrs. GREEN APPLE formed?'), a: ymd(2013, 4, 23), x: [ymd(2013, 5, 20), ymd(2014, 2, 4), ymd(2015, 7, 8)] },
    { q: q('결성 당시 大森元貴는 몇 살이었을까?', '結成当時、大森元貴は何歳だった？', 'How old was Motoki Ohmori when he formed the band?'), a: age(16), x: [age(14), age(18), age(20)] },
    { q: q('결성 때 멤버는 몇 명이었을까?', '結成時のメンバーは何人？', 'How many members were there at formation?'), a: n(5), x: [n(3), n(4), n(6)] },
    { q: q('팬들이 「청사과의 날」이라고 부르는 첫 라이브 날짜는?', 'ファンが「青リンゴの日」と呼ぶ初ライブの日は？', 'The first live show, which fans call "Green Apple Day", was on…'), a: d(5, 20), x: [d(4, 23), d(7, 8), d(3, 18)] },
    { q: q('첫 라이브를 한 공연장은?', '初ライブを行ったライブハウスは？', 'Where was the first live show?'), a: '渋谷CLUB CRAWL', x: ['下北沢SHELTER', '新宿LOFT', '渋谷WWW'] },
    { q: q('밴드 이름의 「GREEN APPLE」은 어디서 정했을까?', 'バンド名の「GREEN APPLE」はどこで決まった？', 'Where was the name "GREEN APPLE" decided?'), a: q('패밀리 레스토랑', 'ファミレス', 'At a family restaurant'), x: [q('학교 음악실', '学校の音楽室', 'In the school music room'), q('첫 라이브 무대 위', '初ライブのステージ上', 'On stage at the first show'), q('청사과 과수원', '青リンゴ農園', 'At a green apple orchard')] },
    { q: q('메이저 데뷔 작품은?', 'メジャーデビュー作は？', 'What was their major-label debut release?'), a: '『Variety』', x: ['『Progressive』', '『TWELVE』', '「Speaking」'] },
    { q: q('메이저 데뷔한 레이블은?', 'メジャーデビューしたレーベルは？', 'Which label did they make their major debut on?'), a: 'EMI Records', x: ['Sony Music Records', 'avex trax', 'Victor Entertainment'] },
    { q: q('공식 팬클럽 이름은?', 'オフィシャルファンクラブの名前は？', 'What is the official fan club called?'), a: 'Ringo Jam', x: ['Green House', 'Apple Pie', 'Ringo Garden'] },
    { q: q('팬들을 부르는 이름은?', 'ファンの呼び名は？', 'What are the fans called?'), a: "JAM'S", x: ['APPLES', 'GREENIES', 'RINGOS'] },
    { q: q('「페이즈 1 완결」과 함께 활동을 쉬기 시작한 때는?', '「フェーズ1完結」と活動休止を発表したのは？', 'When did Phase 1 end and the hiatus begin?'), a: ym(2020, 7), x: [ym(2019, 10), ym(2021, 12), ym(2022, 3)] },
    { q: q('「페이즈 2」를 연 곡은?', '「フェーズ2」の幕開けとなった曲は？', 'Which song opened Phase 2?'), a: 'ニュー・マイ・ノーマル', x: ['ダンスホール', 'Soranji', 'ケセラセラ'] },
    { q: q('처음으로 일본 레코드 대상 「대상」을 받은 곡은? (2023)', '初めて日本レコード大賞「大賞」を受賞した曲は？（2023年）', 'Which song first won the Japan Record Award grand prize (2023)?'), a: 'ケセラセラ', x: ['ダンスホール', 'ライラック', 'Magic'] },
    { q: q('2024년 일본 레코드 대상 「대상」을 받은 곡은?', '2024年の日本レコード大賞「大賞」受賞曲は？', 'Which song won the 2024 Japan Record Award grand prize?'), a: 'ライラック', x: ['ケセラセラ', 'ダンスホール', 'Dear'] },
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did they first appear on NHK Kohaku?'), a: y(2023), x: [y(2021), y(2022), y(2024)] },
    { q: q('첫 홍백가합전에서 부른 곡은?', '初出場の紅白歌合戦で歌った曲は？', 'Which song did they sing at their first Kohaku?'), a: 'ダンスホール', x: ['ケセラセラ', '青と夏', 'Soranji'] },
    { q: q('처음으로 연 돔 공연의 이름은?', '初のドーム公演のタイトルは？', 'What was their first dome concert called?'), a: '"Atlantis"', x: ['"Utopia"', '"NOAH no HAKOBUNE"', '"エデンの園"'] },
    { q: q('첫 스타디움 투어 이름은? (2024)', '初のスタジアムツアーのタイトルは？（2024年）', 'What was their first stadium tour called (2024)?'), a: 'ゼンジン未到とヴェルトラウム〜銘銘編〜', x: ['ゼンジン未到とリライアンス〜復誦編〜', 'NOAH no HAKOBUNE', 'Atlantis'] },
    { q: q('일본 아카데미상에서 처음 생긴 「주제가상」을 받은 곡은?', '日本アカデミー賞で初の「主題歌賞」を受賞した曲は？', 'Which song received the first-ever theme song award at the Japan Academy Film Prize?'), a: 'Dear', x: ['Soranji', 'ナハトムジーク', '天国'] },
    { q: q('스트리밍 1억 회를 당시 밴드 최고 속도로 넘긴 곡은?', 'ストリーミング再生1億回を当時バンド最速で突破した曲は？', 'Which song hit 100 million streams faster than any band song at the time?'), a: 'ダンスホール', x: ['ケセラセラ', 'ニュー・マイ・ノーマル', '青と夏'] },
  ];
})();
