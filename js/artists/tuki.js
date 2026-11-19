'use strict';
/* =========================================================
 * tuki. 전체 곡 데이터 (정규 앨범곡, 배포 싱글)
 *
 * 출처 : 일본어 위키백과 「tuki.」 (2026-11 정리)
 * 빠진 것 : 弾き語り ver. · ROCK ver. · piano ver. · 라이브 음원
 * 필드 설명은 mga.js 머리말과 같다
 * ========================================================= */
ARTISTS.push({
  id: 'tuki',
  name: 'tuki.',
  local: { ko: '츠키', ja: 'tuki.', en: 'tuki.' },
  color: '#f2c94c',
  color2: '#2b2d5c',
  albums: {
    '15': { d: '2025-01-08', kind: 'full' },
  },
  songs: [
    /* ---- 15 (2025) 수록곡 ---- */
    { t: '晩餐歌', ko: '반산카', en: 'Bansanka', alias: 'ばんさんか|만찬가', d: '2023-09-29', type: 'digital', album: '15', track: 1, tie: null },
    { t: '月面着陸計画', ko: '게츠멘 차쿠리쿠 케이카쿠', en: 'Getsumen Chakuriku Keikaku', alias: 'げつめんちゃくりくけいかく|달 착륙 계획', d: '2025-01-08', type: 'album', album: '15', track: 2, tie: 'cm', tieName: 'スズキ ソリオバンディット' },
    { t: '純恋愛のインゴット', ko: '준렌아이노 잉곳', en: 'Junrenai no Ingot', alias: 'じゅんれんあいのいんごっと|순수한 연애의 잉곳', d: '2025-01-08', type: 'album', album: '15', track: 3, tie: null },
    { t: 'アイモライモ', ko: '아이모라이모', en: 'Aimo Raimo', alias: 'あいもらいも', d: '2024-11-06', type: 'digital', album: '15', track: 4, tie: null },
    { t: 'マルボロ', ko: '마루보로', en: 'Marlboro', alias: '말보로', d: '2025-01-08', type: 'album', album: '15', track: 5, tie: null },
    { t: '星街の駅で', ko: '호시마치노 에키데', en: 'Hoshimachi no Eki de', alias: 'ほしまちのえきで|별 거리의 역에서', d: '2024-06-19', type: 'digital', album: '15', track: 6, tie: null },
    { t: 'シーソー', ko: '시소', en: 'Seesaw', d: '2025-01-08', type: 'album', album: '15', track: 7, tie: null },
    { t: 'サクラキミワタシ', ko: '사쿠라 키미 와타시', en: 'Sakura Kimi Watashi', alias: 'さくらきみわたし|벚꽃 너 나', d: '2024-01-10', type: 'digital', album: '15', track: 8, tie: 'tv', tieName: '今日、好きになりました。卒業編' },
    { t: 'ひゅるりらぱっぱ', ko: '휴루리라팟파', en: 'Hyururira Pappa', d: '2024-07-24', type: 'digital', album: '15', track: 9, tie: 'cm', tieName: 'PlayStation 5' },
    { t: '地獄恋文', ko: '지고쿠 코이부미', en: 'Jigoku Koibumi', alias: 'じごくこいぶみ|インフェルノラブレター|지옥 연애편지|인페르노 러브레터', d: '2024-04-16', type: 'digital', album: '15', track: 10, tie: 'game', tieName: '東京リベンジャーズUNLIMITED' },
    { t: '孤独の鯨', ko: '코도쿠노 쿠지라', en: 'Kodoku no Kujira', alias: 'こどくのくじら|고독의 고래', d: '2025-01-08', type: 'album', album: '15', track: 11, tie: null },
    { t: '一輪花', ko: '이치린카', en: 'Ichirinka', alias: 'いちりんか|한 송이 꽃', d: '2023-11-28', type: 'digital', album: '15', track: 12, tie: null },
    { t: '愛の賞味期限', ko: '아이노 쇼미키겐', en: 'Ai no Shoumikigen', alias: 'あいのしょうみきげん|사랑의 유통기한', d: '2024-09-29', type: 'digital', album: '15', track: 13, tie: null },
    /* ---- 배포 싱글 (앨범 미수록) ---- */
    { t: '騙シ愛', ko: '다마시아이', en: 'Damashiai', alias: 'だましあい|속고 속이는 사랑', d: '2025-04-14', type: 'digital', album: null, tie: 'drama', tieName: 'キャスター' },
    { t: '声命', ko: '세이메이', en: 'Seimei', alias: 'せいめい|목소리의 생명', d: '2025-05-26', type: 'digital', album: null, tie: 'drama', tieName: 'キャスター' },
    { t: 'ストレンジャーズ', ko: '스트레인저즈', en: 'Strangers', d: '2025-06-09', type: 'digital', album: null, tie: 'drama', tieName: 'キャスター' },
    { t: 'ギルティ', ko: '길티', en: 'Guilty', d: '2025-07-30', type: 'digital', album: null, tie: null },
    { t: '最低界隈', ko: '사이테이 카이와이', en: 'Saitei Kaiwai', alias: 'さいていかいわい|최저 동네', d: '2025-08-27', type: 'digital', album: null, tie: null },
    { t: '人生讃歌', ko: '진세이 산카', en: 'Jinsei Sanka', alias: 'じんせいさんか|인생 찬가', d: '2025-10-22', type: 'digital', album: null, tie: 'movie', tieName: '愚か者の身分' },
    { t: 'コトノハ', ko: '코토노하', en: 'Kotonoha', alias: 'ことのは|말의 잎', d: '2026-01-06', type: 'digital', album: null, tie: 'drama', tieName: '夫に間違いありません' },
    { t: '零-zero-', ko: '제로', en: 'Zero', alias: 'れい|零|zero|영', d: '2026-04-04', type: 'digital', album: null, tie: 'anime', tieName: 'スノウボールアース' },
    { t: 'SOS', ko: '에스오에스', en: 'SOS', d: '2026-06-22', type: 'digital', album: null, tie: null },
    { t: '第三惑星', ko: '다이산 와쿠세이', en: 'Daisan Wakusei', alias: 'だいさんわくせい|제3행성', d: '2026-07-24', type: 'digital', album: null, tie: null },
    { t: 'バブル', ko: '바부루', en: 'Bubble', alias: '버블', d: '2026-08-23', type: 'digital', album: null, tie: null },
  ],
});
