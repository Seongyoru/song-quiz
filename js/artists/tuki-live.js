'use strict';
/* tuki. 월드컵 영상 (공식 채널 무도관 라이브 영상 · 라이브 음원 · 홍백) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모]  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'tuki');
  a.viewsAt = '2026-11-19';
  a.lives = [
    ["晩餐歌","_l9GO77oKDg","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館",""],
    ["ひゅるりらぱっぱ","NffeFmn0vvQ","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館",""],
    ["最低界隈","Ej5sYrSf0Ns","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館",""],
    ["人生讃歌","f1P0usHs8js","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館",""],
    ["晩餐歌","DHoczq3Z_Eg","第75回NHK紅白歌合戦","2024","NHKホール","NHK 방송"],
    ["月面着陸計画","UjeCaFY_zaU","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["一輪花","xiCiieEtjns","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["星街の駅で","jgD5PZ9jKqk","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["サクラキミワタシ","g1C_cGL2MpE","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["孤独の鯨","JyvbG-6upJw","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["愛の賞味期限","3-YUiSxVtAY","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["シーソー","4UwNj--7ws4","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["マルボロ","-O8IC7fV1dc","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["アイモライモ","j_En7zZ-w2o","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["純恋愛のインゴット","FeuXjFKPekU","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"],
    ["地獄恋文","tE8eLIFM9Wo","tuki. NIPPON BUDOKAN ～承認欲求爆発～","2026","日本武道館","라이브 음원"]];
  a.views = {
    "晩餐歌":["oZpYEEcvu5I",188266804],
    "純恋愛のインゴット":["goCvO7uJhu8",9819125],
    "アイモライモ":["urh7DZp59WU",6075447],
    "星街の駅で":["EeSKlyhYp9w",7150129],
    "シーソー":["Hmvjp4xw7dA",4256439],
    "サクラキミワタシ":["rpVvPAFaoqM",20929530],
    "地獄恋文":["Tghdn998C8w",8241125],
    "孤独の鯨":["agstsXgsxg4",1083217],
    "一輪花":["B5HD_FSyrWY",7322424],
    "愛の賞味期限":["nmeccuUXs4Q",6504618],
    "騙シ愛":["4_Lc458W1EY",5094054],
    "ギルティ":["j8iGq4TO5Fg",4199987],
    "最低界隈":["N0zZKq3RCQo",3833235],
    "人生讃歌":["epFQODCxlxA",3209864],
    "コトノハ":["Tu_Zvj-TRFA",2796486],
    "零-zero-":["iWeRglrNu6E",2291059],
    "第三惑星":["GGZ9q23P8AI",627195],
    "バブル":["5ZdJlEYRTMw",930026],
    "ひゅるりらぱっぱ":["AOfaWrBwo7I",72668105]};
})();
