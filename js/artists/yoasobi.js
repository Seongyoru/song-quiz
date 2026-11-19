'use strict';
/* =========================================================
 * YOASOBI 전체 곡 데이터 (EP 『THE BOOK』 시리즈 · 『はじめての - EP』, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 (YOASOBI · THE BOOK · THE BOOK 2 · THE BOOK 3 · THE BOOK for, · はじめての - EP), 2026-11 확인
 * 빠진 것 : 영어 버전 (English Ver.), Prologue · Epilogue · Interlude, 리믹스 · Ballade Ver. · THE FIRST TAKE 버전
 *
 * t      : 원래 제목          ko : 한국어 읽기     en : 로마자 · 영어    alias : 그 밖에 정답으로 받을 말 (| 로 구분)
 * d      : 처음 나온 날 (CD · 배포 중 빠른 쪽)
 * type   : single (CD 싱글 표제곡) / coupling (싱글 커플링) / digital (배포 싱글) / album (정규 앨범곡) / ep (미니 앨범곡) / best (베스트 앨범 신곡)
 * album  : 처음 실린 EP, 없으면 null     track : 그 EP 의 트랙 번호
 * tie    : 위키백과 타이업 목록에 있는 것만 (anime / drama / movie / cm / tv / game / other)
 * ========================================================= */
ARTISTS.push({
  id: 'yoasobi',
  name: 'YOASOBI',
  local: { ko: '요아소비', ja: 'YOASOBI', en: 'YOASOBI' },
  color: '#1c1f4a',
  color2: '#e8467c',
  albums: {
    'THE BOOK': { d: '2021-01-06', kind: 'mini' },
    'THE BOOK 2': { d: '2021-12-01', kind: 'mini' },
    'はじめての - EP': { d: '2023-05-10', kind: 'mini' },
    'THE BOOK 3': { d: '2023-10-04', kind: 'mini' },
    'THE BOOK for,': { d: '2026-06-26', kind: 'mini' },
  },
  songs: [
    /* ---- THE BOOK (2021) ---- */
    { t: '夜に駆ける', ko: '요루니 카케루', en: 'Yoru ni Kakeru', alias: 'よるにかける|밤을 달리다|Into The Night', d: '2019-12-15', type: 'digital', album: 'THE BOOK', track: 8, tie: null },
    { t: 'あの夢をなぞって', ko: '아노 유메오 나좃테', en: 'Ano Yume wo Nazotte', alias: 'あのゆめをなぞって|그 꿈을 덧그려|Tracing A Dream', d: '2020-01-18', type: 'digital', album: 'THE BOOK', track: 4, tie: 'tv', tieName: '情報プレゼンター とくダネ!' },
    { t: 'ハルジオン', ko: '하루지온', en: 'Halzion', alias: '개망초', d: '2020-05-11', type: 'digital', album: 'THE BOOK', track: 3, tie: 'cm', tieName: 'ZONe' },
    { t: 'たぶん', ko: '타분', en: 'Tabun', alias: '아마도|Haven\'t', d: '2020-07-20', type: 'digital', album: 'THE BOOK', track: 5, tie: 'movie', tieName: 'たぶん' },
    { t: '群青', ko: '군조', en: 'Gunjou', alias: 'ぐんじょう|군청|Blue', d: '2020-09-01', type: 'digital', album: 'THE BOOK', track: 6, tie: 'cm', tieName: 'アルフォート' },
    { t: 'ハルカ', ko: '하루카', en: 'Haruka', d: '2020-12-18', type: 'digital', album: 'THE BOOK', track: 7, tie: 'other', tieName: 'アートアクアリウム展2021' },
    { t: 'アンコール', ko: '앙코르', en: 'Encore', alias: '앙코루', d: '2021-01-06', type: 'ep', album: 'THE BOOK', track: 2, tie: 'cm', tieName: 'Google Pixel 5' },
    /* ---- THE BOOK 2 (2021) ---- */
    { t: '怪物', ko: '카이부츠', en: 'Kaibutsu', alias: 'かいぶつ|괴물|Monster', d: '2021-01-06', type: 'digital', album: 'THE BOOK 2', track: 6, tie: 'anime', tieName: 'BEASTARS' },
    { t: '優しい彗星', ko: '야사시이 스이세이', en: 'Yasashii Suisei', alias: 'やさしいすいせい|상냥한 혜성|Comet', d: '2021-01-20', type: 'digital', album: 'THE BOOK 2', track: 5, tie: 'anime', tieName: 'BEASTARS' },
    { t: 'もう少しだけ', ko: '모 스코시다케', en: 'Mou Sukoshi Dake', alias: 'もうすこしだけ|조금만 더|Just a Little Step', d: '2021-05-10', type: 'digital', album: 'THE BOOK 2', track: 4, tie: 'tv', tieName: 'めざましテレビ' },
    { t: '三原色', ko: '산겐쇼쿠', en: 'Sangenshoku', alias: 'さんげんしょく|삼원색|RGB', d: '2021-07-02', type: 'digital', album: 'THE BOOK 2', track: 2, tie: 'cm', tieName: 'ahamo' },
    { t: 'ラブレター', ko: '러브레터', en: 'Love Letter', alias: '라부레타', d: '2021-08-09', type: 'digital', album: 'THE BOOK 2', track: 8, tie: 'cm', tieName: 'ピュレグミ' },
    { t: '大正浪漫', ko: '타이쇼 로만', en: 'Taisho Roman', alias: 'たいしょうろまん|다이쇼 로망|Romance', d: '2021-09-15', type: 'digital', album: 'THE BOOK 2', track: 3, tie: null },
    { t: 'ツバメ', ko: '츠바메', en: 'Tsubame', alias: '제비|The Swallow', d: '2021-10-25', type: 'digital', album: 'THE BOOK 2', track: 1, tie: 'tv', tieName: 'ひろがれ!いろとりどり' },
    { t: 'もしも命が描けたら', ko: '모시모 이노치가 카케타라', en: 'Moshimo Inochi ga Kaketara', alias: 'もしもいのちがかけたら|만약 생명을 그릴 수 있다면|If I Could Draw Life', d: '2021-12-01', type: 'ep', album: 'THE BOOK 2', track: 7, tie: 'other', tieName: '舞台『もしも命が描けたら』' },
    /* ---- はじめての - EP / THE BOOK 3 (2022~2023) ---- */
    { t: 'ミスター', ko: '미스터', en: 'Mister', d: '2022-02-16', type: 'digital', album: 'はじめての - EP', track: 4, tie: 'other', tieName: 'ミュシャ展' },
    { t: '好きだ', ko: '스키다', en: 'Suki da', alias: 'すきだ|좋아해', d: '2022-05-30', type: 'digital', album: 'はじめての - EP', track: 3, tie: 'cm', tieName: 'いち髪' },
    { t: '祝福', ko: '슈쿠후쿠', en: 'Shukufuku', alias: 'しゅくふく|축복|The Blessing', d: '2022-10-01', type: 'digital', album: 'THE BOOK 3', track: 3, tie: 'anime', tieName: '機動戦士ガンダム 水星の魔女' },
    { t: '海のまにまに', ko: '우미노 마니마니', en: 'Umi no Manimani', alias: 'うみのまにまに|바다가 흐르는 대로', d: '2022-11-18', type: 'digital', album: 'はじめての - EP', track: 2, tie: null },
    { t: 'アドベンチャー', ko: '어드벤처', en: 'Adventure', alias: '아도벤챠', d: '2023-02-15', type: 'digital', album: 'THE BOOK 3', track: 9, tie: 'cm', tieName: 'ユニバーサル・スタジオ・ジャパン' },
    { t: 'セブンティーン', ko: '세븐틴', en: 'Seventeen', d: '2023-03-27', type: 'digital', album: 'はじめての - EP', track: 1, tie: null },
    { t: 'アイドル', ko: '아이도루', en: 'Idol', alias: '아이돌', d: '2023-04-12', type: 'digital', album: 'THE BOOK 3', track: 7, tie: 'anime', tieName: '【推しの子】' },
    { t: '勇者', ko: '유샤', en: 'Yuusha', alias: 'ゆうしゃ|용사|The Brave', d: '2023-09-29', type: 'digital', album: 'THE BOOK 3', track: 1, tie: 'anime', tieName: '葬送のフリーレン' },
    /* ---- THE BOOK for, (2026) ---- */
    { t: 'Biri-Biri', ko: '비리비리', en: 'Biri-Biri', alias: 'ビリビリ', d: '2023-11-18', type: 'digital', album: 'THE BOOK for,', track: 8, tie: 'game', tieName: 'ポケットモンスター スカーレット・バイオレット' },
    { t: 'HEART BEAT', ko: '하트 비트', en: 'HEART BEAT', d: '2023-12-26', type: 'digital', album: 'THE BOOK for,', track: 10, tie: 'tv', tieName: 'YOASOBI 18祭' },
    { t: 'UNDEAD', ko: '언데드', en: 'UNDEAD', d: '2024-07-01', type: 'digital', album: 'THE BOOK for,', track: 3, tie: 'anime', tieName: '〈物語〉シリーズ オフ&モンスターシーズン' },
    { t: '舞台に立って', ko: '부타이니 탓테', en: 'Butai ni Tatte', alias: 'ぶたいにたって|무대에 서서', d: '2024-07-26', type: 'digital', album: 'THE BOOK for,', track: 11, tie: 'tv', tieName: 'NHKスポーツテーマ 2024' },
    { t: 'モノトーン', ko: '모노톤', en: 'Monotone', d: '2024-10-01', type: 'digital', album: 'THE BOOK for,', track: 5, tie: 'movie', tieName: 'ふれる。' },
    { t: 'New me', ko: '뉴 미', en: 'New me', d: '2024-11-11', type: 'digital', album: 'THE BOOK for,', track: 9, tie: 'cm', tieName: 'リクルート' },
    { t: 'PLAYERS', ko: '플레이어스', en: 'PLAYERS', d: '2025-03-21', type: 'digital', album: 'THE BOOK for,', track: 4, tie: 'cm', tieName: 'PlayStation「Project: MEMORY CARD」' },
    { t: 'Watch me!', ko: '워치 미', en: 'Watch me!', d: '2025-05-18', type: 'digital', album: 'THE BOOK for,', track: 7, tie: 'anime', tieName: 'ウィッチウォッチ' },
    { t: '劇上', ko: '게키조', en: 'Gekijou', alias: 'げきじょう|극상', d: '2025-10-02', type: 'digital', album: 'THE BOOK for,', track: 12, tie: 'drama', tieName: 'もしもこの世が舞台なら、楽屋はどこにあるのだろう' },
    { t: 'アドレナ', ko: '아드레나', en: 'ADRENA', d: '2026-01-04', type: 'digital', album: 'THE BOOK for,', track: 2, tie: 'anime', tieName: '花ざかりの君たちへ' },
    { t: 'BABY', ko: '베이비', en: 'BABY', d: '2026-01-10', type: 'digital', album: 'THE BOOK for,', track: 6, tie: 'anime', tieName: '花ざかりの君たちへ' },
    { t: 'オリオン', ko: '오리온', en: 'Orion', d: '2026-06-26', type: 'ep', album: 'THE BOOK for,', track: 1, tie: 'game', tieName: 'オーバーウォッチ' },
    /* ---- 그 뒤 배포 싱글 ---- */
    { t: '咲き誇れ', ko: '사키호코레', en: 'Sakihokore', alias: 'さきほこれ|흐드러지게 피어라', d: '2026-10-14', type: 'digital', album: null, tie: 'drama', tieName: 'ブラッサム' },
    { t: 'KILLA', ko: '킬라', en: 'KILLA', d: '2026-11-11', type: 'digital', album: null, tie: null },
  ],
});
