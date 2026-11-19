'use strict';
/* Ado 월드컵 영상 (공식 채널 Ado 라이브 영상 · 라이브 음원) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'ado');
  a.viewsAt = '2026-11-19';
  a.lives = [["踊","YGx5fcgEuwA","Ado LIVE 2022「蜃気楼」","2022","さいたまスーパーアリーナ",""],
    ["新時代","v79I6c7fWtA","Ado LIVE 2022「蜃気楼」","2022","さいたまスーパーアリーナ",""],
    ["唱","Igr6jQJEoNs","全国ツアー2023「マーズ」","2023","日本武道館",""],
    ["向日葵","VC10CwlKgtY","全国ツアー2023「マーズ」","2023","日本武道館","라이브 음원"],
    ["いばら","qFP2fD0q7Xw","全国ツアー2023「マーズ」","2023","日本武道館","라이브 음원"],
    ["うっせぇわ","gU4-Ku28jkk","WORLD TOUR 2024「Wish」","2024","Peacock Theater (Los Angeles)","라이브 음원"],
    ["逆光","Ltv4M_1emnA","WORLD TOUR 2024「Wish」","2024","Peacock Theater (Los Angeles)","라이브 음원"],
    ["桜日和とタイムマシン with 初音ミク","Vrr2gFTYMGQ","Ado SPECIAL LIVE 2024「心臓」","2024","国立競技場",""],
    ["心という名の不可解","H-UbEcmIKSc","JAPAN TOUR 2024「モナ・リザの横顔」","2024","K-Arena YOKOHAMA",""],
    ["ルル","prIfzzEGEcw","JAPAN TOUR 2024「モナ・リザの横顔」","2024","K-Arena YOKOHAMA",""],
    ["初夏","McCLLXFEqwE","JAPAN TOUR 2024「モナ・リザの横顔」","2024","K-Arena YOKOHAMA","라이브 음원"],
    ["ロックスター","NVutx0Olj8E","WORLD TOUR 2025「Hibana」","2025","Kia Center (Orlando)",""],
    ["レディメイド","dXebsbFWpuQ","WORLD TOUR 2025「Hibana」","2025","さいたまスーパーアリーナ","라이브 음원"],
    ["クラクラ","PprZsuQjS6g","WORLD TOUR 2025「Hibana」","2025","さいたまスーパーアリーナ","라이브 음원"],
    ["風のゆくえ","iDvuZ7mRiJ0","EXPO 2025 大阪・関西万博","2025","",""],
    ["アイ・アイ・ア","K9xb-JrhG50","Ado 東京ドーム公演","2026","東京ドーム",""],
    ["モンストロ","bVdCJluq0RE","Ado 日産スタジアム公演","2026","日産スタジアム",""],
    ["綺羅","Cjtt_BlQ6Us","Ado WORLD TOUR 2026","2026","Brookside at The Rose Bowl",""]];
  a.views = {"0":["8vm3Tkv43jw",5710893],"うっせぇわ":["Qp3b-RXtz4w",431423124],"レディメイド":["jg09lNupc1s",134564472],"ギラギラ":["sOiMD45QGLs",221412256],"踊":["YnSW8ian29w",248533595],"夜のピエロ":["cSgZxz3le7s",27304596],"会いたくて":["jTVSU-Lr1ew",18187572],"阿修羅ちゃん":["cyq5-StPISU",120821477],"心という名の不可解":["BMb5IetESGE",45194998],"ドメスティックでバイオレンス":["iRMYLKIWyUk",10170580],"FREEDOM":["hgyGhu49sGc",14518291],"花火":["5_-TcIOxm60",5687922],"ラッキー・ブルート":["u-G_zzhLSy8",6024852],"マザーランド":["_wZfYtYwxro",24127280],"過学習":["55W2LxbQoHc",5974347],"永遠のあくる日":["ZHAnZTVF_10",18625438],"新時代":["1FliVTcX8bQ",202109035],"私は最強":["sk1Z-Hqwwog",116869625],"逆光":["gt-v_YCkaMY",176274669],"ウタカタララバイ":["hyV1AJiFNyo",132028647],"Tot Musica":["V9_ZpqfqHFI",120132330],"世界のつづき":["b3GCfyNKeLs",35614623],"風のゆくえ":["YO-rXgQKlF8",38947247],"リベリオン":["0Y8e0LJf0i0",26337906],"行方知れず":["VQtmqpSE64w",7886565],"アタシは問題作":["lZGo8jcEW2M",45613292],"いばら":["oy2WTnhVT2w",11614586],"向日葵":["aOKa-5AHCtU",41265687],"唱":["pgXpM4l_MwI",282913893],"DIGNITY":["Q9X0J_tLHwY",8102068],"クラクラ":["W_fHWaoQwkw",38404621],"オールナイトレディオ":["lfw8W3uWO7s",9115133],"ショコラカタブラ":["c5j7lpWprro",16449472],"Value":["5iAQF_q6FSk",13884879],"MIRROR":["zsBBWBEZkFQ",24944610],"ルル":["0Z_YqhYHhpg",65412740],"抜け空":["JpnqXqy-XMg",3446383],"初夏":["GORsp0gc2Nc",13583155],"桜日和とタイムマシン with 初音ミク":["nIWZfhpnq6M",7789999],"きっとコースター":["nV5SHldicJY",2904892],"Episode X":["9dKZeL2UbUM",12111112],"エルフ":["SbxR25brgoE",27950188],"わたしに花束":["_RAffg8JQ6g",6504091],"ロックスター":["hRJpiCZlLX8",14954595],"Hello Signals":["WEYTjr4z70o",1875487],"風と私の物語":["oAuKa5NOzWE",5221710],"MAGIC":["l0WArCNh6G0",12800828],"エンゼルシーク":["aGSmxr-dUq0",2881528],"ビバリウム":["YvYii6dluM8",20301897],"アイ・アイ・ア":["_8CNByAq1n4",18541069],"綺羅":["qpcz3-iDUP8",5015710],"春に舞う":["xIYfDbkq-SM",2764819],"モンストロ":["4IKHox-DKrM",9242834],"好きでいて":["iTNwVheLpj8",3388691],"Raven Sky":["7DBSMzbPQzc",4728245],"患者A":["JO66tA5Yngs",3133834]};
})();
