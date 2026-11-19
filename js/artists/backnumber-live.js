'use strict';
/* back number 월드컵 영상 (공식 채널 라이브 영상) 과 Up & Down 조회수 (공식 MV)
 * 2026-11 유튜브 검색으로 모음. lives : [곡, 영상 id, 공연 이름, 연도, 장소, 메모] (공연 정보는 영상 제목 기준)  views : 곡 → [영상 id, 조회수] */
(() => {
  const a = ARTISTS.find((x) => x.id === 'backnumber');
  a.viewsAt = '2026-11-19';
  a.lives = [["チェックのワンピース","JSaGWNPIGA8","anti sleeps tour 2024","2024","さいたまスーパーアリーナ",""],
    ["大不正解","UnVuAq85Lyg","anti sleeps tour 2024","2024","さいたまスーパーアリーナ",""],
    ["クリスマスソング","aavmfBfsTYo","in your humor tour 2023","2023","東京ドーム",""],
    ["水平線","t99kN9nlDFM","in your humor tour 2023","2023","東京ドーム",""],
    ["ブルーアンバー","_SKF2hJAxdo","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["どうしてもどうしても","l86ExFvDSSk","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["青い春","djepiTN-g_0","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["高嶺の花子さん","W5aJ6-gfDyA","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["花束","cUvs_XBWrtE","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["SISTER","gStHhkuvMes","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["ハッピーエンド","hiFsOJUupD4","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["ベルベットの詩","kfeZmhuqO9s","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["スーパースターになったら","m-rl-a_axGA","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["怪盗","ravrfjw7ftw","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["新しい恋人達に","u2n2JYpYeO0","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["幕が上がる","uYGa3sRFosI","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["君の恋人になったら","KjZRacXMWpU","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["MOTTO","MKcjD9bv1uY","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"],
    ["ある未来より愛を込めて","ffx4vPnhX7c","Grateful Yesterdays Tour 2026","2026","日産スタジアム","스타디움 투어"]];
  a.views = {"はなびら":["RJUE8NNsD68",9575881],"花束":["meZPD28Y7xE",68790368],"思い出せなくなるその日まで":["EwLOwWrtULM",16603120],"恋":["ZWdYxQz4UqE",40180736],"日曜日":["VPv5kfyIFkI",16368291],"わたがし":["uy_BaRBJIzQ",36359161],"エンディング":["t3JZnGgxSWg",9902885],"高嶺の花子さん":["SII-S-zCg-c",182809150],"fish":["129hKdV-aXM",14062589],"繋いだ手から":["YKZ5KbClxp8",15298724],"ヒロイン":["VPZK72W4Xxw",82111602],"SISTER":["WOHXFNzfehs",13104656],"手紙":["woRV5VxJDkU",15863846],"クリスマスソング":["7zBeQezaz4U",171160846],"サイレン":["V_CTnqX37yw",2732240],"僕の名前を":["CrjOCe5j91c",11580789],"黒い猫の歌":["PEKpy5_zx0s",2375260],"ハッピーエンド":["T8y_RsF4TSw",166943527],"瞬き":["h-KuoHHjGRs",55925385],"大不正解":["yKIQv4sUTLA",19804882],"オールドファッション":["l0B0js0wCK8",50535742],"HAPPY BIRTHDAY":["IsFs06cw-gY",76552121],"エメラルド":["8TNusrMIdIQ",21298766],"怪盗":["1DPldNasDgY",57443257],"水平線":["iqEr3P78fz8",323255965],"黄色":["EMYa07zHC9w",38422778],"ベルベットの詩":["kNH3eExqWFw",21806435],"アイラブユー":["_k0mJYct4UE",53976258],"怪獣のサイズ":["pVVqODzyujA",4717799],"冬と春":["hu6y1ol9yUg",21525323],"新しい恋人達に":["euBPUj8CkbA",17799739],"ブルーアンバー":["ru6i9lo4zBE",49524769],"ある未来より愛を込めて":["IXHWPQv1JZY",3075225]};
})();
