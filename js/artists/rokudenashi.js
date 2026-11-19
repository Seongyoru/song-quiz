'use strict';
/* =========================================================
 * ロクデナシ 전체 곡 데이터 (배포 싱글, 싱글 커플링, 정규 앨범 · 미니 앨범 · EP 수록곡)
 *
 * 출처 : 일본어 위키백과 「ロクデナシ (音楽プロジェクト)」 (디스코그래피 · 전 오리지널 곡 표), 2026-11 확인
 * 형식은 mga.js 머리말과 같다
 * ========================================================= */
ARTISTS.push({
  id: 'rokudenashi',
  name: 'ロクデナシ',
  local: { ko: '로쿠데나시', ja: 'ロクデナシ', en: 'Rokudenashi' },
  color: '#5b7fc4',
  color2: '#f2bfd3',
  albums: {
    '愛ニ咲花': { d: '2023-12-27', kind: 'full' },
    '溜息': { d: '2025-02-05', kind: 'mini' },
    '日陰': { d: '2025-07-23', kind: 'mini' },
    '六花': { d: '2025-12-24', kind: 'full' },
  },
  songs: [
    /* ---- 배포 싱글 (2021 - 2022) ---- */
    { t: '三時のキス', ko: '산지노 키스', en: "Sanji no Kiss", alias: 'さんじのきす|세 시의 키스', d: '2021-06-28', type: 'digital', album: null, tie: null },
    { t: 'まちぼうけ', ko: '마치보케', en: 'Machibouke', alias: '바람맞이', d: '2021-10-26', type: 'digital', album: null, tie: null },
    { t: 'ただ声一つ', ko: '타다 코에 히토츠', en: 'Tada Koe Hitotsu', alias: 'ただこえひとつ|그저 목소리 하나|One Voice', d: '2021-12-22', type: 'digital', album: null, tie: null },
    { t: '知らないままで', ko: '시라나이 마마데', en: 'Shiranai Mama de', alias: 'しらないままで|모르는 채로', d: '2022-06-17', type: 'digital', album: null, tie: null },
    { t: 'ブリザード', ko: '블리자드', en: 'Blizzard', d: '2022-09-14', type: 'digital', album: null, tie: null },
    /* ---- 愛ニ咲花 (2023) ---- */
    { t: '眼差し', ko: '마나자시', en: 'Manazashi', alias: 'まなざし|눈빛', d: '2023-10-25', type: 'digital', album: '愛ニ咲花', track: 1, tie: null },
    { t: '星寂夜', ko: '세이자쿠야', en: 'Seijakuya', alias: 'せいじゃくや|별이 고요한 밤', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 2, tie: null },
    { t: '僕らの在り処', ko: '보쿠라노 아리카', en: 'Bokura no Arika', alias: 'ぼくらのありか|우리가 있는 곳', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 3, tie: null },
    { t: '逢瀬のままにあなたのもとへ', ko: '오세노 마마니 아나타노 모토에', en: 'Ouse no Mama ni Anata no Moto e', alias: 'おうせのままにあなたのもとへ', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 4, tie: null },
    { t: 'スピカ', ko: '스피카', en: 'Spica', d: '2023-06-07', type: 'digital', album: '愛ニ咲花', track: 5, tie: null },
    { t: 'Slowly', ko: '슬로울리', en: 'Slowly', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 6, tie: null },
    { t: '愛が灯る', ko: '아이가 토모루', en: 'Ai ga Tomoru', alias: 'あいがともる|사랑이 켜지다', d: '2023-02-15', type: 'digital', album: '愛ニ咲花', track: 7, tie: null },
    { t: 'リインカーネーション', ko: '리인카네이션', en: 'Reincarnation', alias: 'リインカネーション', d: '2023-11-29', type: 'digital', album: '愛ニ咲花', track: 8, tie: null },
    { t: 'ばいばいまたあした', ko: '바이바이 마타 아시타', en: 'Bye Bye Mata Ashita', alias: '안녕 또 내일', d: '2023-04-19', type: 'digital', album: '愛ニ咲花', track: 9, tie: null },
    { t: '子供騙し', ko: '코도모다마시', en: 'Kodomodamashi', alias: 'こどもだまし|애들 속임수', d: '2023-08-23', type: 'digital', album: '愛ニ咲花', track: 10, tie: null },
    { t: '水仙', ko: '스이센', en: 'Suisen', alias: 'すいせん|수선화', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 11, tie: null },
    { t: 'アマネゾラ', ko: '아마네조라', en: 'Amanezora', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 12, tie: null },
    { t: '靴擦れ', ko: '쿠츠즈레', en: 'Kutsuzure', alias: 'くつずれ', d: '2023-12-27', type: 'album', album: '愛ニ咲花', track: 13, tie: null },
    /* ---- 溜息 (2025) ---- */
    { t: 'あやふや', ko: '아야후야', en: 'Ayafuya', alias: '애매모호', d: '2024-02-07', type: 'digital', album: '溜息', track: 7, tie: null },
    { t: 'ユリイカ', ko: '유리이카', en: 'Eureka', alias: '유레카', d: '2024-04-02', type: 'digital', album: '溜息', track: 6, tie: 'anime', tieName: '終末トレインどこへいく?' },
    { t: 'About you', ko: '어바웃 유', en: 'About you', d: '2024-06-19', type: 'coupling', rel: 'ユリイカ', album: null, tie: null },
    { t: 'アルビレオ', ko: '알비레오', en: 'Albireo', d: '2024-09-04', type: 'digital', album: '溜息', track: 5, tie: null },
    { t: '草々不一', ko: '소소후이츠', en: 'Sousou Fuitsu', alias: 'そうそうふいつ', d: '2024-11-04', type: 'digital', album: '溜息', track: 2, tie: 'drama', tieName: '【推しの子】' },
    { t: '言の刃', ko: '코토노하', en: 'Koto no Ha', alias: 'ことのは|말의 칼날', d: '2025-01-08', type: 'digital', album: '溜息', track: 4, tie: null },
    { t: '心の奥', ko: '코코로노 오쿠', en: 'Kokoro no Oku', alias: 'こころのおく|마음 깊은 곳', d: '2025-02-05', type: 'digital', album: '溜息', track: 1, tie: null },
    { t: '花泡沫', ko: '하나우타카타', en: 'Hana Utakata', alias: 'はなうたかた', d: '2025-02-05', type: 'ep', album: '溜息', track: 3, tie: null },
    { t: '流星の声', ko: '류세이노 코에', en: 'Ryuusei no Koe', alias: 'りゅうせいのこえ|유성의 목소리', d: '2025-02-05', type: 'ep', album: '溜息', track: 8, tie: null },
    /* ---- 日陰 (2025) ---- */
    { t: '雨景色', ko: '아메게시키', en: 'Amegeshiki', alias: 'あめげしき|비 풍경', d: '2025-07-23', type: 'digital', album: '日陰', track: 1, tie: null },
    { t: '脈拍', ko: '먀쿠하쿠', en: 'Myakuhaku', alias: 'みゃくはく|맥박', d: '2025-05-07', type: 'digital', album: '日陰', track: 2, tie: null },
    { t: '息継ぎ', ko: '이키츠기', en: 'Ikitsugi', alias: 'いきつぎ|숨 고르기', d: '2025-07-23', type: 'ep', album: '日陰', track: 3, tie: null },
    { t: '夏を書き留める', ko: '나츠오 카키토메루', en: 'Natsu wo Kakitomeru', alias: 'なつをかきとめる|여름을 적어 두다', d: '2025-07-23', type: 'ep', album: '日陰', track: 4, tie: null },
    { t: '沁み込む', ko: '시미코무', en: 'Shimikomu', alias: 'しみこむ|스며들다', d: '2025-07-23', type: 'ep', album: '日陰', track: 5, tie: null },
    { t: '遠心力', ko: '엔신료쿠', en: 'Enshinryoku', alias: 'えんしんりょく|원심력', d: '2025-07-23', type: 'ep', album: '日陰', track: 6, tie: null },
    /* ---- 六花 (2025) ---- */
    { t: '鯨の落ちる街', ko: '쿠지라노 오치루 마치', en: 'Kujira no Ochiru Machi', alias: 'くじらのおちるまち|고래가 떨어지는 거리', d: '2025-12-24', type: 'digital', album: '六花', track: 1, tie: null },
    { t: 'カロン', ko: '카론', en: 'Charon', d: '2025-10-22', type: 'digital', album: '六花', track: 2, tie: 'drama', tieName: '娘の命を奪ったヤツを殺すのは罪ですか?' },
    { t: 'Happiness Umbrella', ko: '해피니스 엄브렐라', en: 'Happiness Umbrella', d: '2025-12-24', type: 'album', album: '六花', track: 3, tie: null },
    { t: '眩しすぎた朝', ko: '마부시스기타 아사', en: 'Mabushisugita Asa', alias: 'まぶしすぎたあさ|너무 눈부셨던 아침', d: '2025-12-24', type: 'album', album: '六花', track: 4, tie: null },
    { t: 'エンドロール', ko: '엔드롤', en: 'End Roll', d: '2025-12-24', type: 'album', album: '六花', track: 6, tie: null },
    { t: 'リプレイ', ko: '리플레이', en: 'Replay', d: '2025-12-24', type: 'album', album: '六花', track: 7, tie: null },
    { t: 'イオ', ko: '이오', en: 'Io', d: '2025-08-27', type: 'digital', album: '六花', track: 11, tie: null },
    { t: '煩悩', ko: '본노', en: 'Bonnou', alias: 'ぼんのう|번뇌', d: '2025-12-24', type: 'album', album: '六花', track: 16, tie: null },
    /* ---- 배포 싱글 (2026) ---- */
    { t: '生活の', ko: '세이카츠노', en: 'Seikatsu no', alias: 'せいかつの|생활의', d: '2026-02-04', type: 'digital', album: null, tie: null },
    { t: '言葉の続き', ko: '코토바노 츠즈키', en: 'Kotoba no Tsuzuki', alias: 'ことばのつづき|말의 다음', d: '2026-04-08', type: 'digital', album: null, tie: null },
    { t: 'ホウキボシ', ko: '호우키보시', en: 'Houkiboshi', alias: 'ほうきぼし|혜성', d: '2026-07-15', type: 'digital', album: null, tie: 'anime', tieName: 'ふつつかな悪女ではございますが ~雛宮蝶鼠とりかえ伝~' },
    { t: '星を巡る', ko: '호시오 메구루', en: 'Hoshi wo Meguru', alias: 'ほしをめぐる|별을 돌다', d: '2026-10-07', type: 'digital', album: null, tie: 'anime', tieName: '世界最強の魔女、始めました' },
  ],
});
