'use strict';
/* RADWIMPS 월드컵 영상 (공식 채널 Official Live Video · 라이브 음원) 과 Up & Down 조회수 (공식 MV · 공식 영상)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'radwimps');
  a.viewsAt = '2026-11-19';
  a.lives = [["セプテンバーさん", "gnmqEaiYfUg", "RADWIMPS 野外LIVE 2013「青とメメメ」", "2013", "", ""],
    ["君と羊と青", "MHDe8QL--go", "RADWIMPS 絶体延命ツアー", "2011", "", ""],
    ["DADA", "eTJQbTYNU-I", "RADWIMPS 絶体延命ツアー", "2011", "", ""],
    ["やどかり", "hNuiYpG_6m8", "RADWIMPS 絶体延命ツアー", "2011", "", ""],
    ["会心の一撃", "8EEKBabOWNk", "RADWIMPS GRAND PRIX 2014 実況生中継", "2014", "", ""],
    ["アイアンバイブル", "D4Cr1TUAvPY", "RADWIMPS GRAND PRIX 2014 実況生中継", "2014", "", ""],
    ["実況中継", "eRG1CjsYHpo", "RADWIMPS GRAND PRIX 2014 実況生中継", "2014", "", ""],
    ["Lights go out", "1QWYvveOdkk", "Human Bloom Tour 2017", "2017", "", ""],
    ["正解", "ow5FBOBAdhU", "ANTI ANTI GENERATION TOUR 2019", "2019", "", ""],
    ["万歳千唱", "2EHkrtTwgJU", "ANTI ANTI GENERATION TOUR 2019", "2019", "", ""],
    ["PAPARAZZI～＊この物語はフィクションです～", "Ocf250q6alo", "ANTI ANTI GENERATION TOUR 2019", "2019", "", ""],
    ["グランドエスケープ", "epQGR34yiTY", "15th Anniversary Special Concert", "2020", "", ""],
    ["25コ目の染色体", "XjDQtUuuc5o", "15th Anniversary Special Concert", "2020", "", ""],
    ["トレモロ", "fdMVCpKfAVQ", "15th Anniversary Special Concert", "2020", "", ""],
    ["桃源郷", "c2esfpOY6Us", "FOREVER IN THE DAZE TOUR 2021-2022", "2022", "", ""],
    ["鋼の羽根", "UNjimzBa9OA", "FOREVER IN THE DAZE TOUR 2021-2022", "2022", "", ""],
    ["SHIWAKUCHA feat.Awich", "gzFq4NtF7Ts", "FOREVER IN THE DAZE TOUR 2021-2022", "2022", "", ""],
    ["なんちって", "cYSp6dPNl0I", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", ""],
    ["me me she", "iLQd9IsuEoI", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", "라이브 음원"],
    ["有心論", "u5pvltFaKyw", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", "라이브 음원"],
    ["俺色スカイ", "Rc9SdTNJaHQ", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", "라이브 음원"],
    ["指切りげんまん", "JVaOjsXInI8", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", "라이브 음원"],
    ["いいんですか？", "86RKY1kaSQI", "BACK TO THE LIVE HOUSE TOUR 2023", "2023", "", "라이브 음원"],
    ["ハイパーベンチレイション", "tJKtccXD-Rk", "BACK TO THE LIVE HOUSE TOUR 2024", "2024", "", ""],
    ["賜物", "sQOqgRtnRXg", "RADWIMPS 20th ANNIVERSARY LIVE TOUR", "2025", "", ""],
    ["トアルハルノヒ", "ypgtn5aFmN0", "RADWIMPS 20th ANNIVERSARY LIVE TOUR", "2025", "", ""]];
  a.views = {"4645":["Bc4USqW4Sgk",2608125],"37458":["ggkKIAbyldE",179063],"セプテンバーさん":["3LNZ1ivIUOA",77979],"イーディーピー 〜飛んで火に入る夏の君〜":["jfEHiYXWvUY",4222622],"おとぎ":["cG0no0ASGkM",2646543],"ふたりごと":["gmLXEmCExIE",62233464],"me me she":["wvvItrHEfRA",52418240],"有心論":["c2y8Ba3WwPY",50522660],"セツナレンサ":["WyS-d1kkCSk",13926205],"いいんですか？":["gkOWPlW-Tb8",32794149],"タユタ":["Z2rSGq7KxLo",4663215],"おしゃかしゃま":["7MaF-bWeLGw",60650722],"オーダーメイド":["CetVGsV6g44",19761546],"叫べ":["P1WnTp9MHzo",7357771],"携帯電話":["IPN9mzWT21E",8928831],"マニフェスト":["smH_qPRe3XM",17859547],"DADA":["Yy6XeGCNkSM",21486649],"君と羊と青":["K1u_MwT6zV8",47089594],"狭心症":["wW4VchHUbws",12952642],"DUGOUT":["MbCoSs5DNn8",75225],"シュプレヒコール":["AyFVBhLS4ak",5196735],"ドリーマーズ・ハイ":["VJbezCOwg_8",8750345],"五月の蝿":["hoyOjMIunkM",20072256],"ラストバージン":["msSGCeCrJos",18583322],"実況中継":["toR7LIGVj0Q",7146116],"DARMA GRAND PRIX":["9SO84HCMgeM",875104],"会心の一撃":["TgxOMybZ_o0",25933490],"Tummy":["-SLuqb588Pc",715155],"記号として":["bZqQttJnj-U",4988067],"‘I’ Novel":["DY-LqP_vN4A",82694],"前前前世":["PDSkFeMVNFs",361411849],"スパークル":["a2GujJZfXpg",309780400],"Lights go out":["BXsYMX-kt5U",182453],"光":["WuU6C8oXzIA",7078390],"AADAAKOODAA":["qQvLxXN8DNM",58147],"Bring me the morning":["x1lsqYMU1WE",40888],"O&O":["xDk7UbcLdpU",145660],"サイハテアイニ":["5jKwQDiwPLY",22962391],"洗脳":["6ngiJtsToH4",16275811],"Mountain Top":["cFpnZldsIXM",4853326],"Shape Of Miracle":["JmrcsHyF3Mk",1611213],"カタルシスト":["czWpz8gH7eY",7934492],"正解":["wTc3jXDTNBo",56117732],"tazuna":["0LoNH_wUjFE",395637],"NEVER EVER ENDER":["gTjLFNnP_2Y",375362],"IKIJIBIKI feat. Taka":["SKcyn6WIQ3I",355650],"そっけない":["R1vmfVpINbk",63824774],"HOCUSPOCUS":["NklEQOx6z1o",55151],"I I U":["u74SLtnwGKc",126245],"泣き出しそうだよ feat. あいみょん":["eKXz9H6-Hao",14649748],"TIE TONGUE feat. Miyachi, Tabu Zombie":["xB2LstUintc",70979],"愛にできることはまだあるかい":["EQ94zflNqn4",154833719],"祝祭":["0JuI1v1eIuM",5499657],"大丈夫":["t6Z0oSm4F-o",35514250],"Light The Light":["BNpcNE2-c6g",2705384],"猫じゃらし":["ACQVA_iZejI",3758324],"ココロノナカ":["SbGFpis3hiw",4553791],"夏のせい":["Owqn2QrtOBU",8884035],"鋼の羽根":["TE-RGGXEmds",7347615],"TWILIGHT":["fKq8u0q4rvQ",2237054],"うたかた歌 feat. 菅田将暉":["b2-6Cn25Hcw",4498193],"SHIWAKUCHA feat.Awich":["9MwGJWQ9nig",1762685],"MAKAFUKA":["oKrexpXBkH4",3139481],"うるうびと":["W0C_VJqjtpw",20688878],"人間ごっこ":["Q-Mha5rJGKc",7847352],"カナタハルカ":["TDi-hGRYX6g",29141301],"KANASHIBARI feat. ao":["k6EkU1jpBQk",2105438],"大団円 feat. ZORN":["s2cz4SODFwc",5790585],"賜物":["4doUQStIgb0",9904151],"命題":["3NepAfC8iKw",1906272],"ワールドエンドガールフレンド":["PgRIBlMIGfo",2050815],"筆舌":["Utzc3Uum9-g",5489191],"夕星 -ゆうづつ-":["L-tQ2lx27t8",4044461],"汝、星のごとく":["WiF5IXtHMX8",1905952],"娑婆堕罵 -Shabadaba-":["N5QSESETuKE",2723163],"25コ目の染色体":["XRnX65LDRoU",19544849],"PAPARAZZI～＊この物語はフィクションです～":["tZcJRFc15LY",5198970],"白日":["cplNlwU5YZI",6432742],"ブリキ":["sY9ollwdXdo",6310524],"カイコ":["iHUnUHA5hek",11609184],"あいとわ":["dyr58XHuRYU",7519436],"春灯":["CW8NjjLQCcE",4102100],"空窓":["-0DZQaxPH5s",5529140],"夜の淵":["WXTENfNj29M",4216936],"世界の果て":["BhJru1zBN00",2712314],"あいたい":["yRGX_W7_2SE",9928804]};
})();
