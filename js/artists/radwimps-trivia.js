'use strict';
/* =========================================================
 * RADWIMPS 팬 퀴즈 : 멤버 · 밴드 (4지선다)
 * 출처 : 일본어 위키백과 「RADWIMPS」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ymd = (n, m, day) => ({ ko: `${n}년 ${m}월 ${day}일`, ja: `${n}年${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}, ${n}` });
  const NY = '野田洋次郎', TY = '武田祐介', YS = '山口智史', KA = '桑原彰';
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'radwimps');

  A.readings = {
    '野田洋次郎': '노다 요지로', '武田祐介': '타케다 유스케', '山口智史': '야마구치 사토시', '桑原彰': '쿠와하라 아키라',
    '斉木祐介': '사이키 유스케', '森瑞希': '모리 미즈키', '刄田綴色': '하타 테이시',
    '神奈川県': '가나가와현', '横浜市': '요코하마시', '東京都': '도쿄도', '大阪府': '오사카부', '千葉県': '지바현', '埼玉県': '사이타마현',
    '横浜アリーナ': '요코하마 아레나', '日本武道館': '닛폰 부도칸', '東京ドーム': '도쿄 돔', '幕張メッセ': '마쿠하리 멧세',
    'ZOZOマリンスタジアム': 'ZOZO 마린 스타디움', '関内B.B.STREET': '칸나이 B.B.STREET', '横浜BLITZ': '요코하마 BLITZ',
    '新海誠': '신카이 마코토', '細田守': '호소다 마모루', '宮崎駿': '미야자키 하야오', '庵野秀明': '안노 히데아키','君の名は。': '너의 이름은.', '天気の子': '날씨의 아이', 'すずめの戸締まり': '스즈메의 문단속',
    '言の葉の庭': '언어의 정원', '秒速5センチメートル': '초속 5센티미터',
    'あんぱん': '앙팡', 'ブギウギ': '부기우기', 'らんまん': '란만', '虎に翼': '토라니 츠바사',
    'トイレのピエタ': '토이레노 피에타', 'キネマの神様': '키네마노 카미사마', '余命10年': '여명 10년',
    '菅田将暉': '스다 마사키', 'あいみょん': '아이묭', '十明': '토아카', '三浦透子': '미우라 토코',
    '東芝EMI': '도시바 EMI', '白日': '하쿠지츠', 'ブリキ': '부리키', 'カイコ': '카이코', 'あいとわ': '아이토와', '春灯': '하루토모시',
    '青とメメメ': '아오토 메메메', 'セプテンバーまだじゃん。': '셉템버 마다쟝.', '春ウララレミドソ': '하루 우라라레미도소', '絶体延命': '젯타이 엔메이',
    '石子と羽男': '이시코토 하네오', '空海-KU-KAI- 美しき王妃の謎': '쿠카이 아름다운 왕비의 수수께끼',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타 · 피아노를 맡고 거의 모든 곡을 쓰는 멤버는?', 'ボーカル・ギター・ピアノを担当し、ほぼ全曲を手がけるメンバーは？', 'Who handles vocals, guitar and piano and writes nearly every song?'), a: NY, x: [TY, YS, KA] },
    { q: q('베이스를 맡은 멤버는?', 'ベース担当のメンバーは？', 'Who plays bass?'), a: TY, x: [NY, YS, KA] },
    { q: q('2015년에 국소성 디스토니아로 무기한 휴양에 들어간 드러머는?', '2015年に局所性ジストニアで無期限休養に入ったドラマーは？', 'Which drummer went on indefinite hiatus in 2015 due to focal dystonia?'), a: YS, x: [TY, KA, '森瑞希'] },
    { q: q('2024년 10월에 밴드를 탈퇴한 기타리스트는?', '2024年10月にバンドを脱退したギタリストは？', 'Which guitarist left the band in October 2024?'), a: KA, x: [TY, YS, '斉木祐介'] },
    { q: q('노다 요지로의 솔로 프로젝트 이름은?', '野田洋次郎のソロプロジェクトの名前は？', "What is Yojiro Noda's solo project called?"), a: 'illion', x: ['millennium parade', 'ROTH BART BARON', 'Hi Tide'] },
    { q: q('노다 요지로가 주연을 맡아 「ピクニック」이 주제가로 쓰인 영화는?', '野田洋次郎が主演し「ピクニック」が主題歌となった映画は？', 'Which film starred Yojiro Noda and used "Picnic" as its theme song?'), a: 'トイレのピエタ', x: ['キネマの神様', '余命10年', '空海-KU-KAI- 美しき王妃の謎'] },
    /* 결성 · 데뷔 */
    { q: q('RADWIMPS 가 결성된 해는?', 'RADWIMPSが結成された年は？', 'In what year was RADWIMPS formed?'), a: y(2001), x: [y(1999), y(2003), y(2005)] },
    { q: q('RADWIMPS 의 출신지는?', 'RADWIMPSの出身地は？', 'Where is RADWIMPS from?'), a: '神奈川県', x: ['東京都', '大阪府', '千葉県'] },
    { q: q('2002년 고교생 음악 대회에서 그랑프리를 받은 곡은?', '2002年の高校生音楽フェスティバルでグランプリを獲得した曲は？', 'Which song won the grand prix at a 2002 high-school music festival?'), a: 'もしも', x: ['祈跡', '愛し', 'トレモロ'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was their major-label debut single?'), a: '25コ目の染色体', x: ['もしも', 'イーディーピー 〜飛んで火に入る夏の君〜', 'ふたりごと'] },
    { q: q('메이저 데뷔 날짜는?', 'メジャーデビューした日は？', 'When did they make their major debut?'), a: ymd(2005, 11, 23), x: [ymd(2005, 9, 3), ymd(2006, 2, 15), ymd(2003, 5, 3)] },
    { q: q('메이저 데뷔 때의 레코드 회사는?', 'メジャーデビュー時のレコード会社は？', 'Which label did they debut with?'), a: '東芝EMI', x: ['ソニー・ミュージック', 'ビクター', 'avex'] },
    { q: q('처음으로 오리콘 1위를 차지한 싱글은?', 'オリコン初登場1位を初めて獲得したシングルは？', 'Which was their first single to debut at No. 1 on Oricon?'), a: 'オーダーメイド', x: ['セツナレンサ', 'DADA', '有心論'] },
    /* 공연 */
    { q: q('2007년에 첫 아레나 공연을 연 곳은?', '2007年に初のアリーナ公演を行った会場は？', 'Where did they hold their first arena show in 2007?'), a: '横浜アリーナ', x: ['日本武道館', '幕張メッセ', '東京ドーム'] },
    { q: q('2013년에 연 밴드 첫 야외 원맨 라이브의 이름은?', '2013年に開催したバンド初の野外ライブのタイトルは？', 'What was their first outdoor live in 2013 called?'), a: '青とメメメ', x: ['春ウララレミドソ', 'セプテンバーまだじゃん。', '絶体延命'] },
    { q: q('2019년 밴드 첫 야외 단독 공연을 연 스타디움은?', '2019年にバンド初の野外単独公演を行ったスタジアムは？', 'Which stadium hosted their first solo outdoor stadium show in 2019?'), a: 'ZOZOマリンスタジアム', x: ['東京ドーム', '横浜アリーナ', '幕張メッセ'] },
    { q: q('2017년 도쿄 돔 공연에 게스트로 함께 선 해외 밴드는?', '2017年の東京ドーム来日公演にゲストアクトとして出演した海外バンドは？', 'Which overseas band did they open for at Tokyo Dome in 2017?'), a: 'Coldplay', x: ['Imagine Dragons', 'Maroon 5', 'Linkin Park'] },
    { q: q('2021년 FUJI ROCK FESTIVAL 에서 맡은 자리는?', '2021年のFUJI ROCK FESTIVALで務めたのは？', 'What role did they play at FUJI ROCK FESTIVAL 2021?'), a: { ko: 'GREEN STAGE 헤드라이너', ja: 'GREEN STAGEのヘッドライナー', en: 'GREEN STAGE headliner' }, x: [{ ko: '오프닝 액트', ja: 'オープニングアクト', en: 'Opening act' }, { ko: 'WHITE STAGE 헤드라이너', ja: 'WHITE STAGEのヘッドライナー', en: 'WHITE STAGE headliner' }, { ko: '심사위원', ja: '審査員', en: 'Judge' }] },
    /* 영화 · 타이업 */
    { q: q('『君の名は。』『天気の子』『すずめの戸締まり』의 감독은?', '『君の名は。』『天気の子』『すずめの戸締まり』の監督は？', 'Who directed "Your Name.", "Weathering with You" and "Suzume"?'), a: '新海誠', x: ['細田守', '宮崎駿', '庵野秀明'] },
    { q: q('『君の名は。』의 주제가가 아닌 곡은?', '『君の名は。』の主題歌ではない曲は？', 'Which song was NOT a theme song of "Your Name."?'), a: '愛にできることはまだあるかい', x: ['前前前世', 'スパークル', 'なんでもないや'] },
    { q: q('『すずめの戸締まり』 주제가 「すずめ」 에 피처링한 가수는?', '『すずめの戸締まり』主題歌「すずめ」にフィーチャリングした歌手は？', 'Who featured on "Suzume", the theme of "Suzume"?'), a: '十明', x: ['三浦透子', 'あいみょん', 'ao'] },
    { q: q('NHK 아침 드라마 『あんぱん』 의 주제가는?', 'NHK連続テレビ小説『あんぱん』の主題歌は？', 'Which song was the theme of the NHK morning drama "Anpan"?'), a: '賜物', x: ['命題', 'ピアフ', '正解'] },
    { q: q('2011년 NHK 축구 테마송으로 쓰인 곡은?', '2011年のNHKサッカーテーマソングに起用された曲は？', 'Which song was NHK\'s 2011 football theme?'), a: '君と羊と青', x: ['DADA', '狭心症', 'カタルシスト'] },
    { q: q('후지TV 2018 FIFA 월드컵 테마송은?', 'フジテレビ系「2018 FIFA WORLD CUP」テーマソングは？', "Which song was Fuji TV's 2018 FIFA World Cup theme?"), a: 'カタルシスト', x: ['君と羊と青', 'NEVER EVER ENDER', 'Mountain Top'] },
    { q: q('『ONE PIECE』 쇼트 드라마 「WE ARE ONE.」 의 주제가는?', '『ONE PIECE』ショートドラマ「WE ARE ONE.」の主題歌は？', 'Which song was the theme of the ONE PIECE short drama "WE ARE ONE."?'), a: 'TWILIGHT', x: ['鋼の羽根', '桃源郷', 'MAKAFUKA'] },
    { q: q('「うたかた歌」 에 함께한 배우 겸 가수는?', '「うたかた歌」でコラボした俳優・歌手は？', 'Which actor-singer featured on "Utakata Uta"?'), a: '菅田将暉', x: ['あいみょん', 'Taka', '十明'] },
    { q: q('「泣き出しそうだよ」 에 피처링한 가수는?', '「泣き出しそうだよ」にフィーチャリングした歌手は？', 'Who featured on "Nakidashisou da yo"?'), a: 'あいみょん', x: ['菅田将暉', 'iri', 'Awich'] },
    { q: q('처음으로 CM 에 곡을 써 준 「‘I’ Novel」 의 광고주는?', '初めてCMソングを書き下ろした「‘I’ Novel」の起用先は？', 'Their first commissioned CM song, "\'I\' Novel", was for which company?'), a: { ko: '도쿄 메트로', ja: '東京メトロ', en: 'Tokyo Metro' }, x: [{ ko: '기린', ja: 'キリン', en: 'Kirin' }, { ko: '코카콜라', ja: 'コカ・コーラ', en: 'Coca-Cola' }, { ko: '카로리메이트', ja: 'カロリーメイト', en: 'CalorieMate' }] },
    /* 기록 · 활동 */
    { q: q('동일본 대지진 이후 매년 3월 11일에 새 곡을 발표하는데, 그 첫 곡은? (2012)', '東日本大震災以降毎年3月11日に新曲を発表しているが、その最初の曲は？（2012年）', 'Since the 2011 earthquake they release a song every March 11. What was the first (2012)?'), a: '白日', x: ['ブリキ', 'カイコ', 'あいとわ'] },
    { q: q('『君の名は。』 음악으로 일본 아카데미상에서 받은 상은?', '『君の名は。』の音楽で日本アカデミー賞で受賞したのは？', 'What did they win at the Japan Academy Film Prize for "Your Name."?'), a: { ko: '최우수 음악상', ja: '最優秀音楽賞', en: 'Best Music' }, x: [{ ko: '최우수 주제가상', ja: '最優秀主題歌賞', en: 'Best Theme Song' }, { ko: '신인상', ja: '新人俳優賞', en: 'Newcomer Award' }, { ko: '화제상', ja: '話題賞', en: 'Popularity Award' }] },
    { q: q('2025년 홍백가합전 출전은 몇 번째였을까?', '2025年の紅白歌合戦は何回目の出場？', 'Which NHK Kohaku appearance was their 2025 one?'), a: { ko: '3번째', ja: '3回目', en: '3rd' }, x: [{ ko: '첫 출전', ja: '初出場', en: '1st' }, { ko: '2번째', ja: '2回目', en: '2nd' }, { ko: '5번째', ja: '5回目', en: '5th' }] },
    { q: q('2015년 첫 해외 투어에서 들르지 않은 나라는?', '2015年の初の海外ツアーで訪れなかった国は？', 'Which country was NOT on their first overseas tour in 2015?'), a: { ko: '미국', ja: 'アメリカ', en: 'USA' }, x: [{ ko: '한국', ja: '韓国', en: 'Korea' }, { ko: '프랑스', ja: 'フランス', en: 'France' }, { ko: '대만', ja: '台湾', en: 'Taiwan' }] },
  ];
})();
