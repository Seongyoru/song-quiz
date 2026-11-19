'use strict';
/* =========================================================
 * Hump Back 전체 곡 데이터 (정규 · 미니 앨범, EP, 싱글 표제곡 · 커플링)
 *
 * 출처 : 일본어 위키백과 (Hump Back · 拝啓、少年よ · 涙のゆくえ · 人間なのさ 문서), 2026-11 확인
 * 빠진 것 : 자주 제작반 · 林萌々子 솔로 작품, 커버 (湯気), 앨범 버전 다시 녹음
 *
 * 필드 설명은 mga.js 머리말과 같다
 * ========================================================= */
ARTISTS.push({
  id: 'humpback',
  name: 'Hump Back',
  local: { ko: '험프백', ja: 'Hump Back', en: 'Hump Back' },
  color: '#e8553a',
  color2: '#f2b84b',
  albums: {
    '夜になったら': { d: '2016-12-07', kind: 'mini' },
    hanamuke: { d: '2017-11-22', kind: 'mini' },
    '人間なのさ': { d: '2019-07-17', kind: 'full' },
    ACHATTER: { d: '2021-08-04', kind: 'full' },
    'AGE OF LOVE': { d: '2022-08-10', kind: 'mini' },
    'Hump Back': { d: '2025-03-26', kind: 'full' },
    'やわらかな洞窟': { d: '2026-10-14', kind: 'mini' },
  },
  songs: [
    /* ---- 夜になったら (2016) ---- */
    { t: '月まで', ko: '츠키마데', en: 'Tsuki Made', alias: 'つきまで|달까지', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 1, tie: 'tv', tieName: '音流〜On Ryu〜' },
    { t: '短編小説', ko: '탄펜 쇼세츠', en: 'Tanpen Shousetsu', alias: 'たんぺんしょうせつ|단편소설', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 2, tie: null },
    { t: 'チープマンデー', ko: '치프 먼데이', en: 'Cheap Monday', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 3, tie: null },
    { t: '嫌になる', ko: '이야니 나루', en: 'Iya ni Naru', alias: 'いやになる|싫어져', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 4, tie: null },
    { t: 'ヒーロー', ko: '히어로', en: 'Hero', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 5, tie: null },
    { t: 'ぎんのうた', ko: '긴노 우타', en: 'Gin no Uta', alias: '은의 노래', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 6, tie: null },
    { t: '夢の途中', ko: '유메노 토추', en: 'Yume no Tochuu', alias: 'ゆめのとちゅう|꿈의 도중', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 7, tie: null },
    { t: 'いつか', ko: '이츠카', en: 'Itsuka', alias: '언젠가', d: '2016-12-07', type: 'ep', album: '夜になったら', track: 8, tie: null },
    /* ---- hanamuke (2017) ---- */
    { t: '星丘公園', ko: '호시가오카 코엔', en: 'Hoshigaoka Kouen', alias: 'ほしがおかこうえん|호시가오카 공원', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 1, tie: 'tv', tieName: '1ch Music' },
    { t: '高速道路にて', ko: '코소쿠도로니테', en: 'Kousoku Douro nite', alias: 'こうそくどうろにて|고속도로에서', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 2, tie: null },
    { t: 'サーカス', ko: '서커스', en: 'Circus', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 3, tie: null },
    { t: 'うたいたいこと', ko: '우타이타이 코토', en: 'Utaitai Koto', alias: '부르고 싶은 것', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 4, tie: null },
    { t: 'ボーイズ・ドント・クライ', ko: '보이즈 돈트 크라이', en: "Boys Don't Cry", d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 5, tie: null },
    { t: '卒業', ko: '소츠교', en: 'Sotsugyou', alias: 'そつぎょう|졸업', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 6, tie: null },
    { t: 'ゆれる', ko: '유레루', en: 'Yureru', alias: '흔들려', d: '2017-11-22', type: 'ep', album: 'hanamuke', track: 7, tie: null },
    /* ---- 拝啓、少年よ (2018) ---- */
    { t: '拝啓、少年よ', ko: '하이케이 쇼넨요', en: 'Haikei Shounen yo', alias: 'はいけいしょうねんよ|친애하는 소년이여|배계 소년이여', d: '2018-06-20', type: 'single', album: '人間なのさ', track: 2, tie: 'tv', tieName: 'バズリズム02' },
    { t: 'ナイトシアター', ko: '나이트 시어터', en: 'Night Theater', d: '2018-06-20', type: 'coupling', rel: '拝啓、少年よ', album: '人間なのさ', track: 10, tie: null },
    { t: '今日が終わってく', ko: '쿄가 오왓테쿠', en: 'Kyou ga Owatteku', alias: 'きょうがおわってく|오늘이 끝나가', d: '2018-06-20', type: 'coupling', rel: '拝啓、少年よ', album: null, tie: null },
    { t: 'VANS', ko: '반스', en: 'VANS', d: '2018-06-20', type: 'coupling', rel: '拝啓、少年よ', album: null, tie: null },
    /* ---- 涙のゆくえ (2018) ---- */
    { t: '生きて行く', ko: '이키테 유쿠', en: 'Ikite Yuku', alias: 'いきてゆく|살아가', d: '2018-12-05', type: 'single', album: '人間なのさ', track: 5, tie: 'other', tieName: 'セレッソ大阪 創設25周年記念動画' },
    { t: 'クジラ', ko: '쿠지라', en: 'Kujira', alias: '고래', d: '2018-12-05', type: 'coupling', rel: '生きて行く', album: '人間なのさ', track: 8, tie: 'movie', tieName: '真っ赤な星' },
    { t: 'のらりくらり', ko: '노라리쿠라리', en: 'Norari Kurari', d: '2018-12-05', type: 'coupling', rel: '生きて行く', album: null, tie: null },
    { t: '悲しみのそばに', ko: '카나시미노 소바니', en: 'Kanashimi no Soba ni', alias: 'かなしみのそばに|슬픔 곁에', d: '2018-12-05', type: 'coupling', rel: '生きて行く', album: null, tie: null },
    /* ---- 人間なのさ (2019) ---- */
    { t: 'LILLY', ko: '릴리', en: 'LILLY', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 1, tie: 'tv', tieName: 'スッキリ' },
    { t: 'サンデーモーニング', ko: '선데이 모닝', en: 'Sunday Morning', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 3, tie: null },
    { t: 'コジレタ', ko: '코지레타', en: 'Kojireta', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 4, tie: null },
    { t: 'オレンジ', ko: '오렌지', en: 'Orange', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 6, tie: null },
    { t: 'Adm', ko: '에이디엠', en: 'Adm', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 7, tie: null },
    { t: '恋をしよう', ko: '코이오 시요', en: 'Koi wo Shiyou', alias: 'こいをしよう|사랑을 하자', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 9, tie: 'drama', tieName: '猪又進と8人の喪女〜私の初めてもらってください〜' },
    { t: '僕らは今日も車の中', ko: '보쿠라와 쿄모 쿠루마노 나카', en: 'Bokura wa Kyou mo Kuruma no Naka', alias: 'ぼくらはきょうもくるまのなか|우리는 오늘도 차 안', d: '2019-07-17', type: 'album', album: '人間なのさ', track: 11, tie: null },
    /* ---- ティーンエイジサンセット (2020) ---- */
    { t: 'ティーンエイジサンセット', ko: '틴에이지 선셋', en: 'Teenage Sunset', d: '2020-08-19', type: 'single', album: null, tie: 'tv', tieName: 'a-NN♪' },
    { t: '閃光', ko: '센코', en: 'Senkou', alias: 'せんこう|섬광', d: '2020-08-19', type: 'coupling', rel: 'ティーンエイジサンセット', album: 'ACHATTER', track: 10, tie: null },
    { t: 'また会う日まで', ko: '마타 아우 히마데', en: 'Mata Au Hi made', alias: 'またあうひまで|다시 만날 날까지', d: '2020-08-19', type: 'coupling', rel: 'ティーンエイジサンセット', album: null, tie: null },
    /* ---- ACHATTER (2021) ---- */
    { t: '宣誓', ko: '센세이', en: 'Sensei', alias: 'せんせい|선서', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 1, tie: null },
    { t: '番狂わせ', ko: '반쿠루와세', en: 'Bankuruwase', alias: 'ばんくるわせ|이변', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 2, tie: 'tv', tieName: '島でめっちゃ稼ぐ人' },
    { t: 'プレイリスト', ko: '플레이리스트', en: 'Playlist', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 3, tie: null },
    { t: 'スリーピース', ko: '스리피스', en: 'Three Piece', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 4, tie: null },
    { t: '新しい朝', ko: '아타라시이 아사', en: 'Atarashii Asa', alias: 'あたらしいあさ|새로운 아침', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 5, tie: null },
    { t: 'あいまい', ko: '아이마이', en: 'Aimai', alias: '애매', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 6, tie: null },
    { t: 'ヘイベビ', ko: '헤이 베비', en: 'Hey Baby', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 7, tie: null },
    { t: 'ひまつぶし', ko: '히마츠부시', en: 'Himatsubushi', alias: '심심풀이', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 8, tie: null },
    { t: 'きみは春', ko: '키미와 하루', en: 'Kimi wa Haru', alias: '너는 봄', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 9, tie: null },
    { t: 'HIRO', ko: '히로', en: 'HIRO', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 11, tie: null },
    { t: '遊覧船', ko: '유란센', en: 'Yuuransen', alias: 'ゆうらんせん|유람선', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 12, tie: null },
    { t: 'マイユー', ko: '마이 유', en: 'My You', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 13, tie: null },
    { t: 'きれいなもの', ko: '키레이나 모노', en: 'Kireina Mono', alias: '예쁜 것', d: '2021-08-04', type: 'album', album: 'ACHATTER', track: 14, tie: null },
    /* ---- AGE OF LOVE (2022) ---- */
    { t: '僕らの時代', ko: '보쿠라노 지다이', en: 'Bokura no Jidai', alias: 'ぼくらのじだい|우리들의 시대', d: '2022-08-10', type: 'ep', album: 'AGE OF LOVE', track: 1, tie: null },
    { t: 'がらくた讃歌', ko: '가라쿠타 산카', en: 'Garakuta Sanka', alias: 'がらくたさんか|잡동사니 찬가', d: '2022-08-10', type: 'ep', album: 'AGE OF LOVE', track: 2, tie: 'tv', tieName: 'お願い！ランキング presents そだてれび' },
    { t: '犬猫人間', ko: '이누네코 닌겐', en: 'Inuneko Ningen', alias: 'いぬねこにんげん|개고양이 인간', d: '2022-08-10', type: 'ep', album: 'AGE OF LOVE', track: 3, tie: null },
    { t: 'しょうもない', ko: '쇼모나이', en: 'Shoumonai', alias: '시시해', d: '2022-08-10', type: 'ep', album: 'AGE OF LOVE', track: 4, tie: null },
    { t: '君は僕のともだち', ko: '키미와 보쿠노 토모다치', en: 'Kimi wa Boku no Tomodachi', alias: 'きみはぼくのともだち|너는 나의 친구', d: '2022-08-10', type: 'ep', album: 'AGE OF LOVE', track: 5, tie: null },
    /* ---- tour/Linger (2023) ---- */
    { t: 'tour', ko: '투어', en: 'tour', d: '2023-06-21', type: 'single', album: null, tie: 'cm', tieName: '洋服の青山' },
    { t: 'Linger', ko: '링거', en: 'Linger', d: '2023-06-21', type: 'single', album: null, tie: null },
    /* ---- Hump Back (2025) ---- */
    { t: 'オーマイラブ', ko: '오 마이 러브', en: 'Oh My Love', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 1, tie: null },
    { t: '3036', ko: '삼공삼육', en: '3036', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 2, tie: null },
    { t: 'ロケンロ', ko: '로큰로', en: 'Rokenro', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 3, tie: null },
    { t: 'coda', ko: '코다', en: 'coda', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 4, tie: null },
    { t: 'もしも僕が', ko: '모시모 보쿠가', en: 'Moshimo Boku ga', alias: '만약 내가', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 5, tie: null },
    { t: '十七歳と坂道と', ko: '쥬나나사이토 사카미치토', en: 'Juunanasai to Sakamichi to', alias: 'じゅうななさいとさかみちと|열일곱 살과 언덕길과', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 6, tie: null },
    { t: 'woman', ko: '우먼', en: 'woman', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 7, tie: null },
    { t: 'ヤドカリ', ko: '야도카리', en: 'Yadokari', alias: '소라게', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 8, tie: null },
    { t: 'たね', ko: '타네', en: 'Tane', alias: '씨앗', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 9, tie: null },
    { t: 'イスタンブール', ko: '이스탄불', en: 'Istanbul', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 10, tie: null },
    { t: '明るい葬式', ko: '아카루이 소시키', en: 'Akarui Soushiki', alias: 'あかるいそうしき|밝은 장례식', d: '2025-03-26', type: 'album', album: 'Hump Back', track: 11, tie: null },
    /* ---- やわらかな洞窟 (2026) ---- */
    { t: 'あの街まで', ko: '아노 마치마데', en: 'Ano Machi made', alias: 'あのまちまで|그 거리까지', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 1, tie: null },
    { t: 'Gurled', ko: '걸드', en: 'Gurled', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 2, tie: null },
    { t: '漂着は終着', ko: '효차쿠와 슈차쿠', en: 'Hyouchaku wa Shuuchaku', alias: 'ひょうちゃくはしゅうちゃく|표착은 종착', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 3, tie: null },
    { t: 'マミーブレイン', ko: '마미 브레인', en: 'Mommy Brain', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 4, tie: null },
    { t: 'メリーゴーランド', ko: '메리고라운드', en: 'Merry-Go-Round', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 5, tie: null },
    { t: '人生で一度もしっかりしたことがありません', ko: '진세데 이치도모 식카리시타 코토가 아리마센', en: 'Jinsei de Ichido mo Shikkari Shita Koto ga Arimasen', alias: '인생에서 한 번도 제대로 한 적이 없습니다', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 6, tie: null },
    { t: 'あいとロッケンロール', ko: '아이토 록큰롤', en: 'Ai to Rock n Roll', alias: '사랑과 로큰롤', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 7, tie: 'tv', tieName: 'シナぷしゅ' },
    { t: '橙光', ko: '토코', en: 'Toukou', alias: 'とうこう|등광', d: '2026-10-14', type: 'ep', album: 'やわらかな洞窟', track: 8, tie: null },
  ],
});
