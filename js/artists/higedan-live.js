'use strict';
/* Official髭男dism 월드컵 영상 (공식 채널 라이브 영상) 과 Up & Down 조회수 (공식 MV · 공식 영상)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'higedan');
  a.viewsAt = '2026-11-19';
  a.lives = [["夕暮れ沿い","KH1eRSxaTJ4","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["たかがアイラブユー","i4h-A0eWPyo","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["Pretender","AeHh0TCxuCE","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["Rowan","Nr8-RFcheOA","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["ビンテージ","7JJB7Yir9lI","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["旅は道連れ","FKOYWp78RDM","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["ラストソング","TC2wYJOSsMM","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["パラボラ","VTs3b5GsKnA","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["Laughter","ArjJj4cuOVo","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["HELLO","_A1EBYfwPDo","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["夏模様の猫","vIFnks1Gb8k","Official髭男dism ONLINE LIVE 2020 - Arena Travelers -","2020","",""],
    ["異端なスター","0T4XlEjijfI","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["ブラザーズ","mXdVPbcSv7o","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["ノーダウト","Hkd6NqfJsXE","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["FIRE GROUND","67un-9ErjfI","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["宿命","OoEoOg7bhg4","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["I LOVE...","WAI1AMKlkGI","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["Universe","bhK02Jyk59o","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["ミックスナッツ","t4rnAcIJ1fs","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["ホワイトノイズ","3X2XHYQ53RY","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["SOULSOUP","ShOskfpej8k","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["Same Blue","tTi6OrzGmgw","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"],
    ["50%","wzuP4nDZV8c","OFFICIAL HIGE DANDISM LIVE at STADIUM 2025","2025","","스타디움 투어"]];
  a.views = {"恋の前ならえ":["n0e0y01w92A",5484868],"SWEET TWEET":["qrtKLNTB71c",33560828],"コーヒーとシロップ":["Vho5jBUfR28",24043948],"What's Going On?":["PB8dUVLPnuo",6181477],"犬かキャットかで死ぬまで喧嘩しよう！":["IzyrINr2Xj4",7792208],"Tell Me Baby":["3IDvi4buNdk",11047469],"ブラザーズ":["1fO0mY5vLA8",4877302],"LADY":["0nzgi6dz8VY",12605293],"ノーダウト":["EHw005ZqCXk",179137467],"Stand By You":["22mOCjkwQjM",52373311],"FIRE GROUND":["sem3UU-EQJs",11859799],"Pretender":["TQ8WlA2GXbk",664785247],"宿命":["-kgOFJG881I",190535853],"イエスタデイ":["DuMqFknYHBs",213767269],"ビンテージ":["cMLTX2FClxw",27343719],"I LOVE...":["bt8wNQJaKAk",241598539],"パラボラ":["pkoxFpmiCWo",44024246],"Laughter":["kff_DXor7jc",58970901],"HELLO":["p1qM75a9FeE",27456980],"Universe":["6lnS-8FVod4",36318909],"Cry Baby":["O1bhZgkC4Gw",189175411],"アポトーシス":["PZX2npwj6jY",28902665],"ペンディング・マシーン":["4BVd6TK8_EQ",5643129],"Anarchy":["H_2jH6XVYU0",19451881],"ミックスナッツ":["CbH2F0kXgTY",151338984],"Choral A":["I8fxhn_l08g",3956470],"Subtitle":["hN5MBlGv2Ac",190579064],"ホワイトノイズ":["_ciQX22n9NE",49498824],"TATTOO":["oLrp9uTa9gw",46806592],"Chessboard":["qo55wGLXcOQ",17012914],"日常":["LbtQM793jn8",17782403],"SOULSOUP":["-H_k7iwrWVY",17921901],"Sharon":["Ssj-NhrKOdg",10956637],"Same Blue":["A7cp6OVa0Qc",30457351],"50%":["Vv2n31gL85I",9962115],"らしさ":["keOnleW2eak",18048615],"Sanitizer":["t-E9h7fJPX4",8429992],"Make Me Wonder":["LU7xD_yx43c",5418906],"エルダーフラワー":["upLTD7DFtng",10550230],"スターダスト":["O4fFTWQzXVE",8460464]};
})();
