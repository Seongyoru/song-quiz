'use strict';
/* King Gnu 월드컵 영상 (공식 채널 라이브) 과 Up & Down 조회수 (공식 MV · PERIMETRON 채널 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 각 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'kinggnu');
  a.viewsAt = '2026-11-19';
  const TGU = 'King Gnu Dome Tour THE GREATEST UNKNOWN', AW21 = 'King Gnu Live Tour 2021 AW';
  a.lives = [["SPECIALZ", "5MZo9otAWAw", TGU, "2024", "東京ドーム", ""],
    ["硝子窓", "WT6rSEmrv-I", TGU, "2024", "東京ドーム", ""],
    ["白日", "YDmtypavhYc", TGU, "2024", "東京ドーム", ""],
    ["逆夢", "nqKJ2GOSxJQ", TGU, "2024", "東京ドーム", ""],
    ["BOY", "-oGQBxJXOpQ", TGU, "2024", "東京ドーム", ""],
    ["一途", "TbbJUbrkJrg", TGU, "2024", "東京ドーム", ""],
    ["Flash!!!", "wl33YNfVdpA", TGU, "2024", "東京ドーム", ""],
    ["):阿修羅:(", "7EjiVGBAcUw", TGU, "2024", "東京ドーム", ""],
    ["Stardom", "3Gk9Lk7QF2M", TGU, "2024", "東京ドーム", ""],
    ["Slumberland", "2VGccqqO6-A", TGU, "2024", "東京ドーム", ""],
    ["2 Μ Ο Я Ο", "j4fha-cF698", TGU, "2024", "東京ドーム", ""],
    ["IKAROS", "ko7YcL60x8Y", TGU, "2024", "東京ドーム", ""],
    ["Vinyl", "sCgsEtxZJGY", TGU, "2024", "東京ドーム", ""],
    ["三文小説", "dYbe15-UhbE", TGU, "2024", "東京ドーム", ""],
    ["W●RKAHOLIC", "FcNIWA-j75c", TGU, "2024", "東京ドーム", ""],
    ["AIZO", "mcsB7sG43GE", "King Gnu CEN+RAL Tour 2026", "2026", "有明アリーナ", ""],
    ["三文小説", "iJo5MTPt8_k", "King Gnu Live Tour 2020 AW “CEREMONY”", "2020", "幕張メッセ", ""],
    ["白日", "ctQ5mSWV10E", AW21, "2021", "国立代々木競技場第一体育館", ""],
    ["一途", "g2GMVhVXdZs", AW21, "2021", "国立代々木競技場第一体育館", ""],
    ["The hole", "b2loI23h3bo", AW21, "2021", "国立代々木競技場第一体育館", ""],
    ["飛行艇", "IPzOxKW3fSA", "King Gnu Streaming Live 2020", "2020", "", ""],
  ];
  a.views = {"Tokyo Rendez-Vous":["XDiuwqJg8pU",16990784],"McDonald Romance":["YeBt1NhOJtA",9651615],"あなたは蜃気楼":["g3VNX7518UU",12039471],"Vinyl":["RLAw8Ct9k48",49845794],"Flash!!!":["j_NHrPC3ij8",33517801],"Prayer X":["L-Bzhpm8h0o",53409366],"Slumberland":["C66yySFa48A",35642142],"It's a small world":["JBmzU_qn_G8",26913161],"The hole":["BjI0HIn46l0",45718710],"白日":["ony539T074w",566686403],"飛行艇":["MSv7NbfbtU8",105973788],"どろん":["gc0_Acq8dV4",43932223],"Teenager Forever":["XPUN-w543bc",80219625],"三文小説":["Y8HeOA95UzQ",70005599],"千両役者":["YOYeJn4mz8M",26779090],"泡":["jSf6S6ny6-A",15062720],"BOY":["n0QNaym0jDI",53784590],"一途":["hm1na9R2uYA",148210017],"逆夢":["M6gcoDN9jBc",178951007],"カメレオン":["BOrdMrh4uKg",86223935],"雨燦々":["C47K1TX9PAA",44094320],"Stardom":["k7rHDHJG1jA",18609991],"SPECIALZ":["fhzKLBZJC3w",210533352],"硝子窓":["DAzN019hKhc",22463497],"ねっこ":["jz8O2t2r8Gs",28551145],"TWILIGHT!!!":["qIcIpSyHcyM",32264532],"SO BAD":["d4st4aEjQ28",14590154],"AIZO":["zz2a9Q2Wru0",87385121],"GO GHOST":["PmkN1iH4Ci4",9972757]};
})();
