'use strict';
/* 優里 월드컵 영상 (공식 채널 라이브 영상) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'yuuri');
  a.viewsAt = '2026-11-19';
  a.lives = [["ベテルギウス","dcuNCqRhoUI","ROCK IN JAPAN FESTIVAL 2022","2022","",""],
    ["ドライフラワー","dPF7mPr_eVk","Red Bull Jukebox 2023","2023","幕張メッセ",""]];
  a.views = {"かくれんぼ":["7W-6qJnza5w",54346650],"かごめ":["PR52T_fpWO4",13546690],"ピーターパン":["9qfPF4fpiHE",66216357],"ドライフラワー":["kzZ6KXDM1RI",233655483],"飛行船":["38xNKy9e-0A",5443162],"シャッター":["EZ5RGA2UULE",53642734],"ベテルギウス":["cbqvxDTLMps",74354992],"レオ":["uxYLXaXtH9I",77911939],"うぉ":["-0OZ7yueQzA",5294690],"おにごっこ":["m3VnVRHOMZM",15161206],"クリスマスイブ":["ytQhhgHGj_s",12995612],"メリーゴーランド":["eWeSqrRk-gs",18829699],"ビリミリオン":["vUsikBoa8i0",100106963],"恋人じゃなくなった日":["ysqGvafOcaQ",26885716],"アストロノーツ":["TKN3PDIXcV4",4924726],"ライラ":["0BmjEDLs2EY",2483226],"最低な君に贈る歌":["0S3fU2p11Ic",4053983],"世界が終わりました":["MDdiCcehY7I",11626354]};
})();
