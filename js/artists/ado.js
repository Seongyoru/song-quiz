'use strict';
/* =========================================================
 * Ado 전체 곡 데이터 (정규 앨범, 배포 싱글, CD 싱글, 『ウタの歌』, 베스트 신곡)
 *
 * 출처 : 일본어 위키백과 (Ado (歌手) · 狂言 · 残夢 · Adoのベストアドバム · ウタの歌 ONE PIECE FILM RED), 2026-11 확인
 * 빠진 것 : 커버곡 (unravel · ブリキノダンス · 愛して愛して愛して · ゲゲゲの鬼太郎 · CAT'S EYE · おどるポンポコリン 등), 리믹스, 피처링 참여곡
 * 베스트 앨범 트랙 번호 : DISC 2 는 20 + 번호
 *
 * 필드 설명은 mga.js 머리말과 같다
 * ========================================================= */
ARTISTS.push({
  id: 'ado',
  name: 'Ado',
  local: { ko: '아도', ja: 'Ado', en: 'Ado' },
  color: '#1f3fae',
  color2: '#5b8cff',
  albums: {
    '狂言': { d: '2022-01-26', kind: 'full' },
    'ウタの歌 ONE PIECE FILM RED': { d: '2022-08-10', kind: 'full' },
    '残夢': { d: '2024-07-10', kind: 'full' },
    'Adoのベストアドバム': { d: '2025-04-09', kind: 'best' },
  },
  songs: [
    /* ---- 2020 - 2021 배포 싱글 ---- */
    { t: 'うっせぇわ', ko: '웃세에와', en: 'Usseewa', alias: '시끄러워', d: '2020-10-23', type: 'digital', album: '狂言', track: 11, tie: null },
    { t: 'レディメイド', ko: '레디메이드', en: 'Readymade', d: '2020-12-24', type: 'digital', album: '狂言', track: 1, tie: 'tv', tieName: 'AbemaPrime' },
    { t: 'ギラギラ', ko: '기라기라', en: 'Giragira', alias: '번쩍번쩍', d: '2021-02-14', type: 'digital', album: '狂言', track: 8, tie: null },
    { t: '踊', ko: '오도', en: 'Odo', alias: 'おど|춤', d: '2021-04-27', type: 'digital', album: '狂言', track: 2, tie: 'tv', tieName: 'NHK MUSIC presents 夜光音楽 ボカロP 5min.' },
    { t: '夜のピエロ', ko: '요루노 피에로', en: 'Yoru no Pierrot', alias: 'よるのぴえろ|밤의 피에로', d: '2021-06-14', type: 'digital', album: '狂言', track: 14, tie: 'drama', tieName: '初情事まであと1時間' },
    { t: '会いたくて', ko: '아이타쿠테', en: 'Aitakute', alias: 'あいたくて|보고 싶어서', d: '2021-08-12', type: 'digital', album: '狂言', track: 6, tie: 'movie', tieName: 'かぐや様は告らせたい ファイナル' },
    { t: '阿修羅ちゃん', ko: '아슈라쨩', en: 'Ashura-chan', alias: 'あしゅらちゃん|아수라짱', d: '2021-10-28', type: 'digital', album: '狂言', track: 9, tie: 'drama', tieName: 'ドクターX〜外科医・大門未知子〜' },
    { t: '心という名の不可解', ko: '코코로토 이우 나노 후카카이', en: 'Kokoro to Iu Na no Fukakai', alias: 'こころというなのふかかい|마음이라는 이름의 불가해', d: '2022-01-17', type: 'digital', album: '狂言', track: 10, tie: 'drama', tieName: 'ドクターホワイト' },
    /* ---- 狂言 (2022) ---- */
    { t: 'ドメスティックでバイオレンス', ko: '도메스틱데 바이올런스', en: 'Domestic de Violence', d: '2022-01-26', type: 'album', album: '狂言', track: 3, tie: null },
    { t: 'FREEDOM', ko: '프리덤', en: 'FREEDOM', d: '2022-01-26', type: 'album', album: '狂言', track: 4, tie: null },
    { t: '花火', ko: '하나비', en: 'Hanabi', alias: 'はなび|불꽃놀이', d: '2022-01-26', type: 'album', album: '狂言', track: 5, tie: 'cm', tieName: 'JR西日本「ハルタビAdo」' },
    { t: 'ラッキー・ブルート', ko: '럭키 브루트', en: 'Lucky Brute', d: '2022-01-26', type: 'album', album: '狂言', track: 7, tie: null },
    { t: 'マザーランド', ko: '마더랜드', en: 'Motherland', d: '2022-01-26', type: 'album', album: '狂言', track: 12, tie: 'tv', tieName: 'TBS系 2022冬季スポーツテーマソング' },
    { t: '過学習', ko: '카가쿠슈', en: 'Kagakushuu', alias: 'かがくしゅう|과학습', d: '2022-01-26', type: 'album', album: '狂言', track: 13, tie: null },
    { t: '永遠のあくる日', ko: '에이엔노 아쿠루히', en: 'Eien no Akuruhi', alias: 'えいえんのあくるひ|영원의 다음 날', d: '2022-03-14', type: 'digital', album: '残夢', track: 10, tie: null },
    /* ---- ウタの歌 ONE PIECE FILM RED (2022) ---- */
    { t: '新時代', ko: '신지다이', en: 'Shinjidai', alias: 'しんじだい|신시대', d: '2022-06-08', type: 'digital', album: 'ウタの歌 ONE PIECE FILM RED', track: 1, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: '私は最強', ko: '와타시와 사이쿄', en: 'Watashi wa Saikyou', alias: 'わたしはさいきょう|나는 최강', d: '2022-06-22', type: 'digital', album: 'ウタの歌 ONE PIECE FILM RED', track: 2, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: '逆光', ko: '갹코', en: 'Gyakkou', alias: 'ぎゃっこう|역광', d: '2022-07-06', type: 'digital', album: 'ウタの歌 ONE PIECE FILM RED', track: 3, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: 'ウタカタララバイ', ko: '우타카타 랄라바이', en: 'Utakata Lullaby', d: '2022-08-06', type: 'digital', album: 'ウタの歌 ONE PIECE FILM RED', track: 4, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: 'Tot Musica', ko: '토트 무지카', en: 'Tot Musica', d: '2022-08-10', type: 'album', album: 'ウタの歌 ONE PIECE FILM RED', track: 5, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: '世界のつづき', ko: '세카이노 츠즈키', en: 'Sekai no Tsuzuki', alias: 'せかいのつづき|세계의 계속', d: '2022-08-10', type: 'album', album: 'ウタの歌 ONE PIECE FILM RED', track: 6, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    { t: '風のゆくえ', ko: '카제노 유쿠에', en: 'Kaze no Yukue', alias: 'かぜのゆくえ|바람의 행방', d: '2022-08-10', type: 'album', album: 'ウタの歌 ONE PIECE FILM RED', track: 7, tie: 'movie', tieName: 'ONE PIECE FILM RED' },
    /* ---- 2022 - 2024 배포 싱글 (残夢) ---- */
    { t: 'リベリオン', ko: '리벨리온', en: 'Rebellion', d: '2022-09-19', type: 'digital', album: '残夢', track: 7, tie: 'movie', tieName: 'カラダ探し' },
    { t: '行方知れず', ko: '유쿠에시레즈', en: 'Yukue Shirezu', alias: 'ゆくえしれず|행방불명', d: '2022-10-10', type: 'digital', album: '残夢', track: 2, tie: 'movie', tieName: 'カラダ探し' },
    { t: 'アタシは問題作', ko: '아타시와 몬다이사쿠', en: 'Atashi wa Mondaisaku', alias: 'あたしはもんだいさく|나는 문제작', d: '2023-02-20', type: 'digital', album: '残夢', track: 6, tie: null },
    { t: 'いばら', ko: '이바라', en: 'Ibara', alias: '가시나무', d: '2023-05-09', type: 'digital', album: '残夢', track: 14, tie: 'tv', tieName: 'めざましテレビ' },
    { t: '向日葵', ko: '히마와리', en: 'Himawari', alias: 'ひまわり|해바라기', d: '2023-07-11', type: 'digital', album: '残夢', track: 9, tie: 'drama', tieName: '18/40〜ふたりなら夢も恋も〜' },
    { t: '唱', ko: '쇼', en: 'Show', alias: 'しょう|창', d: '2023-09-06', type: 'digital', album: '残夢', track: 13, tie: 'cm', tieName: 'ユニバーサル・スタジオ・ジャパン' },
    { t: 'DIGNITY', ko: '디그니티', en: 'DIGNITY', d: '2023-09-18', type: 'digital', album: '残夢', track: 3, tie: 'movie', tieName: '沈黙の艦隊' },
    { t: 'クラクラ', ko: '쿠라쿠라', en: 'Kura Kura', alias: '어질어질', d: '2023-10-05', type: 'digital', album: '残夢', track: 5, tie: 'anime', tieName: 'SPY×FAMILY' },
    { t: 'オールナイトレディオ', ko: '올나이트 레이디오', en: 'All Night Radio', d: '2023-10-14', type: 'digital', album: '残夢', track: 8, tie: 'other', tieName: '舞台『あの夜であえたら』' },
    { t: 'ショコラカタブラ', ko: '쇼콜라카타브라', en: 'Chocolat Cadabra', d: '2024-01-31', type: 'digital', album: '残夢', track: 4, tie: 'cm', tieName: 'ロッテ' },
    { t: 'Value', ko: '밸류', en: 'Value', d: '2024-02-23', type: 'digital', album: '残夢', track: 15, tie: null },
    { t: 'MIRROR', ko: '미러', en: 'MIRROR', d: '2024-05-31', type: 'digital', album: '残夢', track: 11, tie: null },
    { t: 'ルル', ko: '루루', en: 'Lulu', d: '2024-07-05', type: 'digital', album: '残夢', track: 12, tie: 'drama', tieName: 'ビリオン×スクール' },
    /* ---- 残夢 (2024) ---- */
    { t: '抜け空', ko: '누케가라', en: 'Nukegara', alias: 'ぬけがら|허물', d: '2024-07-10', type: 'album', album: '残夢', track: 1, tie: null },
    { t: '0', ko: '제로', en: 'Zero', alias: '영', d: '2024-07-10', type: 'album', album: '残夢', track: 16, tie: null },
    /* ---- 2024 - 2025 ---- */
    { t: '初夏', ko: '쇼카', en: 'Shoka', alias: 'しょか|초여름', d: '2024-10-14', type: 'digital', album: 'Adoのベストアドバム', track: 21, tie: null },
    { t: '桜日和とタイムマシン with 初音ミク', ko: '사쿠라비요리토 타임머신', en: 'Sakurabiyori and Time Machine with Hatsune Miku', alias: '桜日和とタイムマシン|さくらびよりとたいむましん|벚꽃 날씨와 타임머신', d: '2024-10-24', type: 'single', album: 'Adoのベストアドバム', track: 40, tie: null },
    { t: 'きっとコースター', ko: '킷토 코스터', en: 'Kitto Coaster', d: '2024-11-01', type: 'digital', album: null, tie: 'cm', tieName: 'くら寿司' },
    { t: 'Episode X', ko: '에피소드 엑스', en: 'Episode X', d: '2024-12-06', type: 'digital', album: 'Adoのベストアドバム', track: 14, tie: 'movie', tieName: '劇場版ドクターX' },
    { t: 'エルフ', ko: '엘프', en: 'Elf', d: '2025-01-24', type: 'digital', album: 'Adoのベストアドバム', track: 32, tie: 'drama', tieName: 'クジャクのダンス、誰が見た?' },
    { t: 'わたしに花束', ko: '와타시니 하나타바', en: 'Watashi ni Hanataba', alias: 'わたしにはなたば|나에게 꽃다발', d: '2025-03-10', type: 'digital', album: 'Adoのベストアドバム', track: 38, tie: 'cm', tieName: 'ジョージア' },
    { t: 'ロックスター', ko: '록스타', en: 'Rockstar', d: '2025-04-09', type: 'best', album: 'Adoのベストアドバム', track: 16, tie: 'cm', tieName: '丸紅' },
    { t: 'Hello Signals', ko: '헬로 시그널스', en: 'Hello Signals', d: '2025-04-09', type: 'best', album: 'Adoのベストアドバム', track: 22, tie: 'cm', tieName: 'ソフトバンク' },
    { t: '風と私の物語', ko: '카제토 와타시노 모노가타리', en: 'Kaze to Watashi no Monogatari', alias: 'かぜとわたしのものがたり|바람과 나의 이야기', d: '2025-09-26', type: 'digital', album: null, tie: 'movie', tieName: '沈黙の艦隊 北極海大海戦' },
    { t: 'MAGIC', ko: '매직', en: 'MAGIC', d: '2025-10-31', type: 'digital', album: null, tie: 'anime', tieName: 'キャッツ♥アイ' },
    /* ---- 2026 ---- */
    { t: 'エンゼルシーク', ko: '엔젤 시크', en: 'Angel Seek', d: '2026-01-26', type: 'digital', album: null, tie: 'drama', tieName: 'ヤンドク!' },
    { t: 'ビバリウム', ko: '비바리움', en: 'Vivarium', d: '2026-02-18', type: 'digital', album: null, tie: null },
    { t: 'アイ・アイ・ア', ko: '아이 아이 아', en: 'Ai Ai A', d: '2026-03-16', type: 'digital', album: null, tie: null },
    { t: '綺羅', ko: '키라', en: 'Kira', alias: 'きら|기라', d: '2026-04-22', type: 'digital', album: null, tie: 'cm', tieName: 'adidas サッカー日本代表 2026 ユニフォームソング' },
    { t: '春に舞う', ko: '하루니 마우', en: 'Haru ni Mau', alias: 'はるにまう|봄에 춤추다', d: '2026-05-12', type: 'digital', album: null, tie: 'tv', tieName: '今日、好きになりました。' },
    { t: 'Love me forever!', ko: '러브 미 포에버', en: 'Love me forever!', d: '2026-07-03', type: 'digital', album: null, tie: 'game', tieName: 'リズム天国 ミラクルスターズ' },
    { t: 'モンストロ', ko: '몬스트로', en: 'Monstro', d: '2026-08-07', type: 'digital', album: null, tie: 'movie', tieName: 'ブルーロック' },
    { t: '好きでいて', ko: '스키데이테', en: 'Suki de Ite', alias: 'すきでいて|좋아해 줘', d: '2026-09-06', type: 'digital', album: null, tie: 'tv', tieName: '今日、好きになりました。' },
    { t: 'DND', ko: '디엔디', en: 'DND', d: '2026-09-25', type: 'digital', album: null, tie: 'other', tieName: 'KUROMI コラボ' },
    { t: 'Raven Sky', ko: '레이븐 스카이', en: 'Raven Sky', d: '2026-10-16', type: 'digital', album: null, tie: 'movie', tieName: 'バッド・ルーテナント:トウキョウ' },
    { t: '患者A', ko: '칸자 에이', en: 'Kanja A', alias: 'かんじゃえー|환자A|환자 A', d: '2026-10-24', type: 'digital', album: null, tie: null },
    { t: 'シンカ', ko: '신카', en: 'Shinka', alias: '진화', d: '2026-11-06', type: 'digital', album: null, tie: 'anime', tieName: 'デモンズ・クレスト' },
  ],
});
