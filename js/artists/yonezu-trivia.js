'use strict';
/* =========================================================
 * 米津玄師 팬 퀴즈 (4지선다)
 * 출처 : 일본어 위키백과 「米津玄師」 「米津玄師の作品」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const d = (m, day) => ({ ko: `${m}월 ${day}일`, ja: `${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}` });
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const cm = (k) => ({ ko: `${k}cm`, ja: `${k}cm`, en: `${k} cm` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const A = ARTISTS.find((a) => a.id === 'yonezu');

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '米津玄師': '요네즈 켄시', 'ハチ': '하치', '蛙屋': '카와즈야', 'ナナ': '나나', 'ゴジ': '고지', 'ケン': '켄',
    '徳島県': '도쿠시마현', '大阪府': '오사카부', '北海道': '홋카이도', '東京都': '도쿄도', '福岡県': '후쿠오카현',
    'マトリョシカ': '마트료시카', 'パンダヒーロー': '판다 히어로', 'ドーナツホール': '도넛 홀', '結ンデ開イテ羅刹ト骸': '무슨데 히라이테 라세츠토 무쿠로', 'お姫様は電子音で眠る': '오히메사마와 덴시온데 네무루',
    '初音ミク': '하츠네 미쿠', '巡音ルカ': '메구리네 루카', '鏡音リン': '카가미네 린',
    'ユニバーサルシグマ': '유니버설 시그마', 'ソニー・ミュージック': '소니 뮤직', 'ポニーキャニオン': '포니 캐니언', 'エイベックス': '에이벡스',
    '大塚国際美術館': '오츠카 국제미술관', '名古屋市市政資料館': '나고야시 시정자료관', '東本願寺': '히가시혼간지', '日本武道館': '닛폰 부도칸',
    'アンナチュラル': '언내추럴', 'MIU404': 'MIU404', 'リコカツ': '리코카츠', 'ノーサイド・ゲーム': '노사이드 게임', '虎に翼': '토라니 츠바사',
    'シン・ウルトラマン': '신 울트라맨', '君たちはどう生きるか': '그대들은 어떻게 살 것인가', '海獣の子供': '해수의 아이', 'ラストマイル': '라스트 마일', '打ち上げ花火、下から見るか? 横から見るか?': '쏘아올린 불꽃, 밑에서 볼까? 옆에서 볼까?',
    'チェンソーマン': '체인소 맨', '僕のヒーローアカデミア': '나의 히어로 아카데미아', '3月のライオン': '3월의 라이온', 'メダリスト': '메달리스트', '機動戦士Gundam GQuuuuuuX': '기동전사 건담 지쿠악스',
    '菅田将暉': '스다 마사키', 'DAOKO': '다오코', '野田洋次郎': '노다 요지로', '池田エライザ': '이케다 엘라이자', 'アイナ・ジ・エンド': '아이나 디 엔드', '宇多田ヒカル': '우타다 히카루', '常田大希': '츠네타 다이키',
    'Foorin': '푸린', 'かいじゅうずかん': '카이주 즈칸', '日本レコード大賞': '일본 레코드 대상',
  };

  A.trivia = [
    /* 프로필 */
    { q: q('米津玄師 의 출신지는?', '米津玄師の出身地は？', 'Where is Kenshi Yonezu from?'), a: '徳島県', x: ['大阪府', '北海道', '福岡県'] },
    { q: q('米津玄師 의 생일은?', '米津玄師の誕生日は？', 'When is Kenshi Yonezu\'s birthday?'), a: d(3, 10), x: [d(1, 10), d(10, 3), d(5, 29)] },
    { q: q('米津玄師 가 태어난 해는?', '米津玄師が生まれた年は？', 'What year was Kenshi Yonezu born?'), a: y(1991), x: [y(1989), y(1993), y(1995)] },
    { q: q('공식 프로필에 적힌 키는?', '公式プロフィール上の身長は？', 'How tall is he according to his profile?'), a: cm(188), x: [cm(178), cm(183), cm(192)] },
    { q: q('보카로P 로 활동할 때의 이름은?', 'ボカロPとしての名義は？', 'What name does he use as a Vocaloid producer?'), a: 'ハチ', x: ['ナナ', 'ゴジ', 'ケン'] },
    { q: q('보카로P 로 크게 히트한 곡은?', 'ボカロPとして大ヒットした曲は？', 'Which song was a big hit from his Vocaloid producer days?'), a: 'マトリョシカ', x: ['結ンデ開イテ羅刹ト骸', 'お姫様は電子音で眠る', 'ドーナツホール'] },
    { q: q('보카로 처녀작에 쓴 VOCALOID 는?', 'ボカロ処女作で使用したVOCALOIDは？', 'Which VOCALOID did he use for his first Vocaloid song?'), a: '初音ミク', x: ['巡音ルカ', '鏡音リン', 'GUMI'] },
    { q: q('보카로 처녀작의 제목은?', 'ボカロの処女作のタイトルは？', 'What was his first Vocaloid song?'), a: 'お姫様は電子音で眠る', x: ['マトリョシカ', 'パンダヒーロー', '結ンデ開イテ羅刹ト骸'] },
    /* 데뷔 · 앨범 */
    { q: q('본명으로 처음 낸 앨범은?', '本人名義で初めて発表したアルバムは？', 'What was his first album under his real name?'), a: 'diorama', x: ['YANKEE', 'Bremen', 'BOOTLEG'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was his major-label debut single?'), a: 'サンタマリア', x: ['MAD HEAD LOVE', 'Flowerwall', 'アンビリーバーズ'] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'In what year did he make his major debut?'), a: y(2013), x: [y(2012), y(2014), y(2016)] },
    { q: q('메이저 데뷔 때 레이블은?', 'メジャーデビュー時のレーベルは？', 'Which label did he debut on?'), a: 'ユニバーサルシグマ', x: ['ソニー・ミュージック', 'ポニーキャニオン', 'エイベックス'] },
    { q: q('일본 레코드 대상 최우수 앨범상을 받은 앨범은?', '日本レコード大賞で最優秀アルバム賞を受賞したアルバムは？', 'Which album won Best Album at the Japan Record Awards?'), a: 'BOOTLEG', x: ['Bremen', 'STRAY SHEEP', 'LOST CORNER'] },
    { q: q('오리콘에서 솔로 아티스트 최초로 더블 밀리언을 기록한 앨범은?', 'オリコン合算でソロアーティスト史上初のダブルミリオンを記録したアルバムは？', 'Which album was the first by a solo artist to go double million on Oricon?'), a: 'STRAY SHEEP', x: ['BOOTLEG', 'LOST CORNER', 'YANKEE'] },
    /* 곡 · 기록 */
    { q: q('사상 처음으로 다운로드 300만 장을 넘긴 곡은?', '史上初めてダウンロード300万を超えた曲は？', 'Which song was the first ever to pass 3 million downloads?'), a: 'Lemon', x: ['感電', 'KICK BACK', 'アイネクライネ'] },
    { q: q('「Lemon」이 주제가로 쓰인 드라마는?', '「Lemon」が主題歌となったドラマは？', 'Which drama used "Lemon" as its theme song?'), a: 'アンナチュラル', x: ['MIU404', 'リコカツ', 'ノーサイド・ゲーム'] },
    { q: q('일본어 가사 곡 최초로 미국 RIAA 골드 인증을 받은 곡은?', '日本語詞楽曲として史上初めてRIAAゴールド認定を受けた曲は？', 'Which song was the first Japanese-language song certified Gold by the RIAA?'), a: 'KICK BACK', x: ['Lemon', 'IRIS OUT', 'LOSER'] },
    { q: q('스트리밍 1억 회를 사상 최고 속도로 돌파한 곡은? (2025)', 'ストリーミング再生1億回を史上最速で突破した曲は？（2025年）', 'Which song hit 100 million streams faster than any other (2025)?'), a: 'IRIS OUT', x: ['JANE DOE', 'Plazma', 'BOW AND ARROW'] },
    { q: q('「JANE DOE」를 함께 부른 가수는?', '「JANE DOE」で共演した歌手は？', 'Who sings "JANE DOE" with him?'), a: '宇多田ヒカル', x: ['アイナ・ジ・エンド', 'DAOKO', '池田エライザ'] },
    { q: q('「灰色と青」에 함께 참여한 사람은?', '「灰色と青」に参加したのは？', 'Who features on "Haiiro to Ao"?'), a: '菅田将暉', x: ['野田洋次郎', '常田大希', '池田エライザ'] },
    { q: q('「パプリカ」를 처음 부른 유닛은?', '「パプリカ」をもともと歌っていたユニットは？', 'Which unit originally sang "Paprika"?'), a: 'Foorin', x: ['DAOKO', 'RADWIMPS', 'King Gnu'] },
    { q: q('「地球儀」가 주제가로 쓰인 영화는?', '「地球儀」が主題歌となった映画は？', 'Which film used "Chikyuugi" as its theme song?'), a: '君たちはどう生きるか', x: ['シン・ウルトラマン', '海獣の子供', 'ラストマイル'] },
    { q: q('「M八七」이 주제가로 쓰인 영화는?', '「M八七」が主題歌となった映画は？', 'Which film used "M87" as its theme song?'), a: 'シン・ウルトラマン', x: ['君たちはどう生きるか', 'ラストマイル', '海獣の子供'] },
    { q: q('「月を見ていた」가 테마송으로 쓰인 게임은?', '「月を見ていた」がテーマソングとなったゲームは？', 'Which game used "Tsuki wo Miteita" as its theme song?'), a: 'FINAL FANTASY XVI', x: ['KINGDOM HEARTS III', 'DRAGON QUEST XI', 'DEATH STRANDING'] },
    { q: q('「さよーならまたいつか！」가 주제가로 쓰인 아침 드라마는?', '「さよーならまたいつか！」が主題歌となった連続テレビ小説は？', 'Which NHK morning drama used "Sayonara Mata Itsuka!"?'), a: '虎に翼', x: ['アンナチュラル', 'リコカツ', 'MIU404'] },
    { q: q('「ピースサイン」이 오프닝으로 쓰인 애니메이션은?', '「ピースサイン」がオープニングとなったアニメは？', 'Which anime used "Peace Sign" as its opening?'), a: '僕のヒーローアカデミア', x: ['3月のライオン', 'チェンソーマン', 'メダリスト'] },
    /* 홍백 · 기타 */
    { q: q('처음 나간 NHK 홍백가합전에서 부른 곡은?', '初出場のNHK紅白歌合戦で歌った曲は？', 'Which song did he sing at his first Kohaku?'), a: 'Lemon', x: ['馬と鹿', 'パプリカ', '感電'] },
    { q: q('첫 홍백가합전 무대를 중계한 곳은?', '初出場の紅白歌合戦で中継した場所は？', 'Where was his first Kohaku performance broadcast from?'), a: '大塚国際美術館', x: ['名古屋市市政資料館', '東本願寺', '日本武道館'] },
    { q: q('잡지 『ROCKIN\'ON JAPAN』에 그림과 함께 연재한 코너는?', '雑誌『ROCKIN\'ON JAPAN』で連載したイラスト企画は？', 'What illustrated series did he run in ROCKIN\'ON JAPAN?'), a: 'かいじゅうずかん', x: ['ドーナツホール', 'パンダヒーロー', 'マトリョシカ'] },
  ];
})();
