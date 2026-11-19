'use strict';
/* Tani Yuuki 월드컵 영상 (공식 채널 라이브 영상) 과 Up & Down 조회수 (공식 MV · 공식 영상)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'taniyuuki');
  a.viewsAt = '2026-11-19';
  a.lives = [["Myra","pruLaCxYVNU","Tani Yuuki Presents LIVE \"LOTUS\"","2022","",""],
    ["Unreachable love song","qQfWk1GJ3tA","Tani Yuuki Presents LIVE \"LOTUS\"","2022","",""],
    ["夢喰","zn9VvgVunME","Tani Yuuki Presents LIVE \"LOTUS\"","2022","",""],
    ["もう一度","YFYsRijma-E","Tani Yuuki Presents LIVE \"LOTUS\"","2022","",""],
    ["Over The Time","R75RkXNF3qU","Tani Yuuki Tour 2021 \"Over The Time\" ver.0","2021","Shibuya Club Quattro",""],
    ["非lie心","KO6UVuO18KY","Tani Yuuki Live 2021 \"Memories\"","2021","Shibuya O-EAST",""],
    ["おかえり","vZZivEXjaWY","Tani Yuuki Zepp Tour 2023 \"多面態\"","2023","",""],
    ["生きる偉人たちよ","Elty2sCngGM","Tani Yuuki Zepp Tour 2023 \"多面態\"","2023","",""],
    ["Life goes on","JjwA3aewiEI","Tani Yuuki Zepp Tour 2023 \"多面態\"","2023","",""],
    ["マーメイド","pb5kkYAlg_E","Tani Yuuki Zepp Tour 2023 \"多面態\"","2023","",""],
    ["運命","Evx04S-PMSU","Tani Yuuki Hall Tour 2023 \"kotodama\"","2023","",""],
    ["最後の魔法","AI1-GnsnWCI","Tani Yuuki Hall Tour 2023 \"kotodama\"","2023","",""],
    ["Dear drops","8gJsPJQpOBE","Tani Yuuki Hall Tour 2023 \"kotodama\"","2023","",""],
    ["W/X/Y","KLHk4afkqcs","Tani Yuuki Hall Tour 2024 \"HOMETOWN\"","2024","",""],
    ["I'm home","RVyJZyCwAIg","Tani Yuuki Hall Tour 2024 \"HOMETOWN\"","2024","",""],
    ["Life is beautiful","tSpIfmu0Mig","Tani Yuuki Live Tour 2025 \"Still love... this\"","2025","日本武道館","라이브 리릭 비디오"],
    ["後悔史","eLTPD35_hoM","Tani Yuuki Live Tour 2025 \"Still love... this\"","2025","日本武道館","라이브 리릭 비디오"],
    ["もしものがたり","mfQWCKu1toI","Tani Yuuki Live Tour 2025 \"Still love... this\"","2025","日本武道館","라이브 리릭 비디오"]];
  a.views = {"Life is beautiful":["lwEXJScEG1o",1479902],"決別の唄":["4HOLdlCDeLc",825539],"おかえり":["0ZsP6MVjFIo",45306652],"愛言葉":["VGMsTaGAQ3g",21870163],"自分自信":["YaA7CiqpaLE",1417308],"夢喰":["nudN_HNS8Ls",1876559],"もう一度":["uP8CtPMAd5Q",36425732],"燦々たるや":["puZ4gdj1OD0",1374479],"ワンダーランド":["QsJJTkTMi_o",996010],"Cheers":["d7VPpilCFyE",1416957],"運命":["yXG8qtd_Qag",3378984],"械物":["MTB5bQZgipc",623018],"最後の魔法":["g__KohGGUKY",758105],"kotodama":["WU8W5XA2g4U",859122],"笑い話":["PAmTT9qUl50",1117395],"I'm home":["Hev3WQKXxp4",322900],"がらくた":["EyNs01pyMV4",225015],"メニークリスマス":["qS2PPVqGVF4",574394],"後悔史":["xvme6Q1Em30",983296],"Dear drops":["rPCUUtDnvuk",123933],"万有引力":["JanQ2BfnXYM",260539],"もしものがたり":["hPJD9O3ZRbk",1603115],"アイノウタ":["fZJ8m22M40g",887224],"エイリアンズ":["tJdDGAIoXL0",172877],"Myra":["_FF1gzosv8k",35652461],"W/X/Y":["mp2-w15SXms",217795058],"他人り事":["LICbBUNS3-I",195367]};
})();
