'use strict';
/* Vaundy 월드컵 영상 (공식 채널 라이브) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 각 영상 제목 · 설명란 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'vaundy');
  a.viewsAt = '2026-11-19';
  const HORO = 'Vaundy ASIA ARENA TOUR 2026 "HORO"', SILENCE = 'Vaundy DOME TOUR 2026 "SILENCE"', FUSION = 'one man live ARENA tour "FUSION"', HEADSHOT = 'one man live "HEADSHOT"';
  a.lives = [["しわあわせ", "NuPVr1BxqU8", HORO, "2026", "INSPIRE ARENA (Seoul)", ""],
    ["怪獣の花唄", "I3_jV2zO0l0", HORO, "2026", "INSPIRE ARENA (Seoul)", ""],
    ["CHAINSAW BLOOD", "ZtxQ3rxatzw", SILENCE, "2026", "東京ドーム", ""],
    ["怪獣の花唄", "ci2lGX16f7Y", SILENCE, "2026", "東京ドーム", ""],
    ["そんなbitterな話", "-whYClibMks", "WOWOW×Vaundy LIVE in London", "2024", "", ""],
    ["常熱", "9UnIdLcfeAw", HEADSHOT, "2024", "幕張メッセ", ""],
    ["ホムンクルス", "Zo0LfdRwzjk", HEADSHOT, "2024", "幕張メッセ", ""],
    ["泣き地蔵", "hJaEZb9nk08", FUSION, "2025", "さいたまスーパーアリーナ", ""],
    ["恋風邪にのせて", "KwqzixPGDtg", FUSION, "2025", "さいたまスーパーアリーナ", ""],
    ["風神", "4jkPGGRwvuc", FUSION, "2025", "さいたまスーパーアリーナ", ""],
    ["soramimi", "Q8AnlRrhQSE", 'one man live tour "replica"', "2023", "", ""],
    ["逆光", "Cb451mDRWp4", "Vaundy one man live", "2023", "横浜アリーナ", ""],
    ["灯火", "nrLZ-vTiQa4", 'one man live at BUDOKAN "深呼吸"', "2022", "日本武道館", ""],
    ["Tokimeki", "mZMJyNyWRk0", 'one man live VAWS hall tour "little punk"', "2025", "", ""],
  ];
  a.views = {"東京フラッシュ":["SIuF37EWaLU",126495838],"不可幸力":["Gbz2C2gQREI",154442451],"僕は今日も":["LKyx3EYVlkA",14354834],"life hack":["Tzyt91TYjLA",48586822],"Bye by me":["b3H5RvRHiYs",10164409],"怪獣の花唄":["UM9XNpgrqVk",210598491],"soramimi":["Jh_0EW6G3gQ",7132205],"世界の秘密":["xFoTFCHU70s",27629604],"融解sink":["B383PElQMHo",11647782],"しわあわせ":["JwmGruvGt_I",36825839],"benefits":["HH1g5faSLTY",4346349],"花占い":["onhBN0qkUcE",55107126],"Tokimeki":["-_PKhPMXMDY",30878956],"泣き地蔵":["XQTM2M5iD_I",12322444],"踊り子":["7HgJIAUtICU",159014206],"HERO":["hfwfAxkK_YU",6314816],"恋風邪にのせて":["1FIhcdocT-k",37455074],"走馬灯":["3Dy4EbMPkY0",10353503],"mabataki":["6h6AQbdTkaE",20232342],"CHAINSAW BLOOD":["FL1QjjkZVm4",20769117],"瞳惚れ":["XEEXE8Ei5SA",13480790],"忘れ物":["tQq8C7irREk",7961512],"置き手紙":["B50A9Nf5FCE",11864119],"まぶた":["fjx_uy5eD8g",11718359],"そんなbitterな話":["V-gxqhWEbxI",41535657],"ZERO":["Fs7MW0rx9Cw",6497176],"トドメの一撃":["7xRWOylrLfI",20644370],"呼吸のように":["68dmvGPR8JE",7214109],"カーニバル":["WEINueQJxbE",6080026],"1リッター分の愛をこめて":["HffHAUk7Um0",2747718],"replica":["Uv67h_E7xsM",3098603],"pained":["beIC4qyuCo8",2289345],"タイムパラドックス":["ewhRE-BvJCg",58294629],"ホムンクルス":["ZhUa0CumyxQ",14416678],"Gift":["sADskV54iNc",5065294],"GORILLA芝居":["QTYjA7QV7tY",4333742],"風神":["yiU0I0tvt6s",29786354],"走れSAKAMOTO":["jbgG5tzgP9k",8673247],"僕にはどうしてわかるんだろう":["x4aWXNWPrtY",12167871],"再会":["WcaSSvtHFeM",16755703],"ずっとラブソング":["wriTi0J_-1A",6237373],"偉生人":["aDaWuvpB_Kw",8880346],"呼び声":["CI2x2aSi8aI",7322656],"The SILENCE":["trfICAvffBs",2600105],"飛ぶ時":["ARj1adoUoEU",16218220],"イデアが溢れて眠れない":["0u_zA8BJG6A",4976637],"かげろう":["gY-7i-T76o0",13771863]};
})();
