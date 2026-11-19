'use strict';
/* ロクデナシ 월드컵 영상과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. 공식 채널에 올라온 라이브 영상이 없어 lives 는 비워 둔다 (월드컵은 MV 로 진행). views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'rokudenashi');
  a.viewsAt = '2026-11-19';
  a.lives = [];
  a.views = {"三時のキス":["BrxNOiQFKbc",10224431],"まちぼうけ":["FlVh_MuPueo",4302670],"ただ声一つ":["5GUaMOpfmr8",239226592],"知らないままで":["ZAJ3nfQTw4A",8799326],"ブリザード":["2SLTBvHZ1JM",1583172],"愛が灯る":["_XeE2aEiPHk",77077018],"ばいばいまたあした":["4euwConref0",2407166],"スピカ":["Ol1o3dgPIbI",51392201],"子供騙し":["V43z-Ygk7SE",2658531],"眼差し":["J4hdiW-V5no",9731475],"リインカーネーション":["c6UxW4yo7I8",3596804],"星寂夜":["kwaMeEJCwFs",10214332],"あやふや":["_63ShFaYFFw",10540824],"ユリイカ":["Bv1meSYlrqE",7464450],"About you":["7fqAoOs_v3E",3725457],"アルビレオ":["ihcyqbFxC_4",20742877],"草々不一":["vc3-2Uydvs4",5816838],"言の刃":["5cZ4EUhei2g",4177185],"心の奥":["JQjnJ8ZAjzI",5913036],"脈拍":["wkRMEv1LcNs",1602445],"雨景色":["TfZUcD7mwck",10793394],"イオ":["RjhLcPQ2EWg",2994587],"カロン":["Okz5mY2dMDE",1768300],"鯨の落ちる街":["7iVgomOU4Kk",3277273],"生活の":["sxaK-9eXmp8",1907418],"言葉の続き":["S0WRUA8JewY",2157370],"ホウキボシ":["p7TZdvXJRtk",2765816],"星を巡る":["5yXXgMCcrK0",1675724]};
})();
