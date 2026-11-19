'use strict';
/* 米津玄師 월드컵 영상 (공식 채널 Kenshi Yonezu 米津玄師 라이브 영상 · 라이브 음원) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'yonezu');
  a.viewsAt = '2026-11-19';
  a.lives = [["Lemon","Hn0IiJlBV8Y","Lemon Live Music Video (10億回記念)","2025","",""],
    ["KICK BACK","HSNWJbkIsmo","KICK BACK Live with 常田大希","2023","",""],
    ["地球儀","yanhEf8jK8o","2023 TOUR / 空想","2023","",""],
    ["BOW AND ARROW","9u5OG5vJVTI","2025 TOUR / JUNK","2025","",""],
    ["Plazma","Xgi4Mc-nKgY","2025 TOUR / JUNK","2025","",""],
    ["さよーならまたいつか！","I8Lqr6NeG5o","第75回NHK紅白歌合戦","2024","NHKホール","NHK 방송"],
    ["IRIS OUT","MJ70B_cwnPk","第76回NHK紅白歌合戦","2025","NHKホール","NHK 방송"]];
  a.views = {"1991":["1cnndBdzCAk",18543065],"ゴーゴー幽霊船":["2PqxOytUjz0",82862399],"vivi":["W-Tun8O-Tjk",65611225],"恋と病熱":["GiPdefbPa0k",27261809],"サンタマリア":["KR54fHpcxEQ",39083092],"MAD HEAD LOVE":["xCIJJ2Rb368",67306692],"ポッピンアパシー":["pUDI2x5Y0Wo",15709927],"リビングデッド・ユース":["A2bFukH-TwA",31277559],"WOODEN DOLL":["QA_p90T6oy4",20564792],"アイネクライネ":["-EKxzId_Sj4",382741891],"Flowerwall":["Y4_vXzyOJHE",74473348],"アンビリーバーズ":["naJcqMBbAn4",47415248],"フローライト":["WLEPU7DqLzg",29722421],"メトロノーム":["Qa9PkDZkyHg",83286442],"LOSER":["Dx_fKPBPYUI",370466016],"orion":["lzAyrgSqeeE",199251810],"ピースサイン":["9aJVr5tTTWk",346178462],"春雷":["zkNzxsaCunU",203520415],"灰色と青":["gJX2iy6nhHc",293316631],"Lemon":["SX_ViT4Ra7k",1003338996],"Flamingo":["Uh6dkL1M9DM",196185100],"TEENAGE RIOT":["lwolyOIcCQg",45489701],"海の幽霊":["1s84rIhPuhk",125683935],"馬と鹿":["ptnYBctoexk",224250616],"パプリカ":["s582L3gujnw",154622747],"カムパネルラ":["XeFQJ6-XoD0",45770641],"感電":["UFQEttrn6CQ",272217391],"カナリヤ":["JAMNqRBL_CY",39615913],"Pale Blue":["7WZ1Kt3zraY",83726729],"死神":["8nxaZ69ElEc",56847101],"POP SONG":["mHP6-D-yBEw",54846640],"M八七":["Zhx1n6uvgUE",72057821],"KICK BACK":["M2cckDmNLMI",246455987],"LADY":["DdF-u3fe5pg",57492569],"月を見ていた":["1kUZ0LoUELI",26495906],"地球儀":["VUsURj_OYdA",60941873],"さよーならまたいつか！":["-wb2PAx6aEs",139981768],"毎日":["BYGo5t6rdA8",21460891],"RED OUT":["mKYpA1-5NNs",10791769],"がらくた":["2mUC91bXt60",17422217],"LOST CORNER":["HKMP-WQI9qQ",2072300],"Azalea":["FqWBQv7h_3I",17175249],"Plazma":["fp3F6TqBsAU",42928922],"BOW AND ARROW":["M-Eyhjkepy0",41739136],"IRIS OUT":["LmZD-TU96q4",242223626],"JANE DOE":["sPLqsLsooJY",105418931],"烏":["YjPMupS1Lg4",26299466],"夜鷹":["l2jvIuTp534",10996289]};
})();
