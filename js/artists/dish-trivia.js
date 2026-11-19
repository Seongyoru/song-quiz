'use strict';
/* =========================================================
 * DISH// 스래셔 퀴즈 : 멤버 · 그룹 (4지선다)
 * 출처 : 일본어 위키백과 「DISH//」 본문 (2026-11-19 확인). 공개된 활동 정보만 쓴다
 * q : 질문 {ko, ja, en}   a : 정답   x : 오답 3개   (보기 하나가 문자열이면 모든 언어 공통, 객체면 언어별)
 * ========================================================= */
(() => {
  const y = (n) => ({ ko: `${n}년`, ja: `${n}年`, en: String(n) });
  const ymd = (n, m, day) => ({ ko: `${n}년 ${m}월 ${day}일`, ja: `${n}年${m}月${day}日`, en: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]} ${day}, ${n}` });
  const q = (ko, ja, en) => ({ ko, ja, en });
  const o = (ko, ja, en) => ({ ko, ja, en });
  const KT = '北村匠海', YB = '矢部昌暉', TC = '橘柊生', IZ = '泉大智', KR = '小林龍二';
  const A = ARTISTS.find((a) => a.id === 'dish');

  // 팬 퀴즈 탭 이름과 팬 이름 (만점 문구에 쓴다)
  A.quizName = { ko: '스래셔 퀴즈', ja: 'スラッシャークイズ', en: 'Slasher Quiz' };
  A.fanName = 'スラッシャー';

  // 한국어 화면에서 한자 · 가나 옆에 붙이는 한글 읽기 (곡 제목은 곡 목록의 한글 표기를 쓴다)
  A.readings = {
    '北村匠海': '기타무라 타쿠미', '矢部昌暉': '야베 마사키', '橘柊生': '타치바나 토이', '泉大智': '이즈미 다이치', '小林龍二': '코바야시 류지',
    'カスタマイZ': '커스터마이즈', 'さくらしめじ': '사쿠라시메지',
    'スターダストプロモーション': '스타더스트 프로모션', 'アミューズ': '아뮤즈', 'ホリプロ': '호리프로',
    'スラッシャー': '스래셔', 'ディッシャー': '디셔', '皿組': '사라구미', 'サラダ': '사라다',
    'ジャニーズJr.': '쟈니즈 주니어',
    '銀魂': '긴타마', '僕のヒーローアカデミア': '보쿠노 히어로 아카데미아', '逃げ上手の若君': '니게죠즈노 와카기미',
    'NARUTO -ナルト- 疾風伝': '나루토 질풍전', 'ゾイドワイルド': '조이드 와일드', '二月の勝者': '니가츠노 쇼샤',
    '再青': '사이세이', '再会': '사이카이', '青春': '세이슌', '再始動': '사이시도',
    '九十九里町': '구주쿠리마치', '銚子市': '조시시', '館山市': '다테야마시', '熱海市': '아타미시',
  };

  A.trivia = [
    /* 멤버 */
    { q: q('보컬 · 기타를 맡은 멤버는?', 'ボーカル・ギター担当のメンバーは？', 'Who is on vocals and guitar?'), a: KT, x: [YB, TC, IZ] },
    { q: q('드럼을 맡은 멤버는?', 'ドラムス担当のメンバーは？', 'Who plays drums?'), a: IZ, x: [KT, YB, TC] },
    { q: q('DJ · 키보드 · 랩을 맡은 멤버는?', 'DJ・キーボード・ラップ担当のメンバーは？', 'Who is on DJ, keyboards and rap?'), a: TC, x: [KT, YB, IZ] },
    { q: q('기타 · 코러스를 맡은 멤버는?', 'ギター・コーラス担当のメンバーは？', 'Who is on guitar and chorus?'), a: YB, x: [TC, IZ, KR] },
    { q: q('리더는?', 'リーダーは？', 'Who is the leader?'), a: KT, x: [YB, TC, IZ] },
    { q: q('2017년 1월 1일 무도관 공연에서 새로 들어온다고 발표된 멤버는?', '2017年1月1日の武道館公演で加入が発表されたメンバーは？', 'Whose joining was announced at the Budokan show on Jan 1, 2017?'), a: IZ, x: [KR, YB, TC] },
    { q: q('2018년 3월에 탈퇴한 멤버는?', '2018年3月に脱退したメンバーは？', 'Who left the group in March 2018?'), a: KR, x: [YB, TC, IZ] },
    { q: q('泉大智가 예전에 드러머로 있던 그룹은?', '泉大智が以前ドラマーとして在籍していたグループは？', 'Which group was Daichi Izumi a drummer in before?'), a: 'カスタマイZ', x: ['M!LK', 'SUPER★DRAGON', 'さくらしめじ'] },
    /* 결성 · 소속 */
    { q: q('결성한 해는?', '結成した年は？', 'In which year was the group formed?'), a: y(2011), x: [y(2010), y(2012), y(2013)] },
    { q: q('멤버들이 뽑혀 나온 스타더스트의 남성 그룹 프로젝트는?', 'メンバーが選抜されたスターダストの男性アーティスト集団は？', 'Which Stardust collective were the members selected from?'), a: 'EBiDAN', x: ['ジャニーズJr.', 'EXPG', 'BOYS AND MEN'] },
    { q: q('소속 사무소는?', '所属事務所は？', 'Which agency are they with?'), a: 'スターダストプロモーション', x: ['アミューズ', 'ホリプロ', 'LDH JAPAN'] },
    { q: q('악기를 연주하면서 춤추는 그들의 스타일은?', '楽器を演奏しながら踊る彼らのスタイルは？', 'What do they call their style of dancing while playing instruments?'), a: o('댄스 록 밴드', 'ダンスロックバンド', 'Dance rock band'), x: [o('비주얼계 밴드', 'ヴィジュアル系バンド', 'Visual kei band'), o('아카펠라 그룹', 'アカペラグループ', 'A cappella group'), o('힙합 크루', 'ヒップホップクルー', 'Hip-hop crew')] },
    { q: q('팬을 부르는 이름은?', 'ファンの呼称は？', 'What are the fans called?'), a: 'スラッシャー', x: ['ディッシャー', '皿組', 'サラダ'] },
    /* 작품 */
    { q: q('인디 데뷔 싱글은?', 'インディーズデビューシングルは？', 'What was their indie debut single?'), a: "It's alright", x: ['ピーターパンシンドローム', 'ギブミーチョコレート!', 'I Can Hear'] },
    { q: q('메이저 데뷔 싱글은?', 'メジャーデビューシングルは？', 'What was their major debut single?'), a: 'I Can Hear', x: ['晴れるYA!', 'FREAK SHOW', "It's alright"] },
    { q: q('메이저 데뷔한 해는?', 'メジャーデビューした年は？', 'In which year did they debut on a major label?'), a: y(2013), x: [y(2012), y(2014), y(2015)] },
    { q: q('「猫」가 실린 원래 싱글은?', '「猫」がカップリングとして収録されたシングルは？', 'Which single originally included "Neko" as a B-side?'), a: '僕たちがやりました', x: ["I'm FISH//", '勝手にMY SOUL', 'Starting Over'] },
    { q: q('2021년에 나온 4번째 앨범은?', '2021年発売の4thアルバムは？', 'What is the 4th album released in 2021?'), a: 'X', x: ['CIRCLE', 'TRIANGLE', 'aRange'] },
    { q: q('결성 10주년 기념으로 옛 곡을 다시 녹음한 프로젝트 이름은?', '結成10周年を記念して過去曲をリテイクしたプロジェクト名は？', 'What was the 10th-anniversary retake project called?'), a: '再青', x: ['再会', '青春', '再始動'] },
    /* 타이업 */
    { q: q('애니메이션 『銀魂』 오프닝 곡은?', 'アニメ『銀魂』のオープニングテーマは？', 'Which song was an opening of "Gintama"?'), a: '勝手にMY SOUL', x: ['Starting Over', 'No.1', "I'm FISH//"] },
    { q: q('애니메이션 『僕のヒーローアカデミア』 5기 오프닝 곡은?', 'アニメ『僕のヒーローアカデミア』第5期のオープニングテーマは？', 'Which song opened "My Hero Academia" season 5?'), a: 'No.1', x: ['勝手にMY SOUL', 'プランA', '沈丁花'] },
    { q: q('애니메이션 『逃げ上手の若君』 오프닝 곡은?', 'アニメ『逃げ上手の若君』のオープニングテーマは？', 'Which song opens "The Elusive Samurai"?'), a: 'プランA', x: ['No.1', '躍りゃんせ', 'ヒーロー'] },
    { q: q('메이저 데뷔곡이 엔딩으로 쓰인 애니메이션은?', 'メジャーデビュー曲がエンディングテーマになったアニメは？', 'Their major debut song was an ending theme of which anime?'), a: 'NARUTO -ナルト- 疾風伝', x: ['銀魂', 'ゾイドワイルド', '僕のヒーローアカデミア'] },
    { q: q('애니메이션 『ゾイドワイルド』 오프닝 곡은?', 'アニメ『ゾイドワイルド』のオープニングテーマは？', 'Which song opened "Zoids Wild"?'), a: 'Starting Over', x: ['勝手にMY SOUL', 'JUMPer', 'FREAK SHOW'] },
    { q: q('드라마 『二月の勝者』 주제가는?', 'ドラマ『二月の勝者』の主題歌は？', 'Which song was the theme of the drama "Nigatsu no Shousha"?'), a: '沈丁花', x: ['しわくちゃな雲を抱いて', '五明後日', 'Replay'] },
    /* 라이브 · 기록 */
    { q: q('처음으로 일본 무도관 단독 공연을 연 날은?', '初の日本武道館単独公演の日は？', 'When was their first solo show at the Nippon Budokan?'), a: ymd(2015, 1, 1), x: [ymd(2014, 5, 11), ymd(2016, 1, 1), ymd(2013, 12, 25)] },
    { q: q('THE FIRST TAKE 영상이 그 채널 최초로 1억 회를 넘긴 곡은?', 'THE FIRST TAKEで同チャンネル初の1億回再生を突破した曲は？', 'Which song became THE FIRST TAKE\'s first video to pass 100 million views?'), a: '猫', x: ['沈丁花', 'No.1', 'birds'] },
    { q: q('「猫 ~THE FIRST TAKE ver.~」 로 일본 레코드 대상에서 받은 상은?', '「猫 〜THE FIRST TAKE ver.〜」で日本レコード大賞の何を受賞した？', 'What did "Neko ~THE FIRST TAKE ver.~" win at the Japan Record Awards?'), a: o('우수작품상', '優秀作品賞', 'Excellent Work Award'), x: [o('대상', '大賞', 'Grand Prix'), o('최우수 신인상', '最優秀新人賞', 'Best New Artist'), o('작곡상', '作曲賞', 'Composition Award')] },
    { q: q('NHK 홍백가합전에 처음 나간 해는?', 'NHK紅白歌合戦に初出場した年は？', 'In which year did they first appear on NHK Kohaku?'), a: y(2021), x: [y(2020), y(2022), y(2023)] },
    { q: q('2015년에 첫 관광대사를 맡은 곳은?', '2015年に初代観光大使に就任した町は？', 'In 2015 they became the first tourism ambassadors of which town?'), a: '九十九里町', x: ['銚子市', '館山市', '熱海市'] },
  ];
})();
