// 案例「關鍵畫面」資料。沒有填任何畫面的案例，頁面上不會顯示這個區塊。
//
// 新增畫面的方式：
// 1. 在 Figma 選取畫面 → 右側 Export → PNG、2x → 匯出
// 2. 圖片放到 public/<案例資料夾>/screens/，例如 public/luandou-backend/screens/merchant-form.png
// 3. 在下方對應案例的陣列加一筆：
//    {src: '/luandou-backend/screens/merchant-form.png', title: '新增商家表單', caption: '一句話說明這個畫面的設計決策。'}
// 4. 前後對照：加上 before 欄位，例如 before: '/luandou-backend/screens/merchant-form-old.png'
//    畫面會並排顯示 Before / After。

export type KeyScreen = {
  src: string;
  title: string;
  caption: string;
  before?: string;
};

export const keyScreens: Record<string, KeyScreen[]> = {
  'luckmesh': [],
  'luandou-frontend': [
    {src: '/luandou-frontend/screens/new-post.webp', title: '新貼文：打開就能寫，一步送出', caption: '發文框固定在動態牆最上方，點開就是標題與內文；圖片、影片、清單與 # 標籤工具就在段落下方，分類放在送出前。進階需求收進「進階發文」，一般會員不用面對複雜選項，就能快速完成一篇文章。'},
    {src: '/luandou-frontend/screens/daily-rewards.webp', title: '每日獎勵：把參與拆成每天做得到的小任務', caption: '搶頭香留言、貼文成就、留言獎勵、成就全壘打，每項都標出完成進度與可得鬥幣；標題列同時顯示今日進度與鬥幣餘額。防洗文的規則直接寫在下方，獎勵清楚，也避免被濫用。'},
    {src: '/luandou-frontend/screens/popularity-pass.webp', title: '發文人氣通行證：寫出有人看的好文章', caption: '以當月文章觀看數解鎖階段獎勵，普通會員與 Lv.10 會員兩條獎勵並列，讓會員看得到升級後能多拿什麼。剩餘時間與下一階門檻放在最上方，達標後「全部領取」一次完成。'},
    {src: '/luandou-frontend/screens/profile.webp', title: '個人頁與會員選單：隨時知道自己有多少獎勵', caption: '鬥幣、寶石餘額與交易紀錄集中在個人資訊卡和頭像選單；每日獎勵、每日簽到、發文人氣通行證與賞品背包都從同一個入口進入，會員累積的獎勵和兌換去處一眼就找得到。'},
  ],
  'luandou-backend': [
    {src: '/luandou-backend/screens/products.webp', title: '商品總覽：狀態與庫存一眼看懂', caption: '上架狀態用色塊標籤區分「進行中／已下架」，庫存歸零以紅字提醒；篩選、搜尋與「商品上架」主要動作固定在表格上方，營運不用翻頁就能判斷哪些商品需要補貨或下架。'},
    {src: '/luandou-backend/screens/redemption.webp', title: '兌換審核：打開就是待處理清單', caption: '以「待審核／已審核／所有」分頁切分工作狀態，客服一進來就只看到要處理的項目；兌換結果用醒目的黃色標籤標示，列表同時帶出商品圖、兌換人與申請時間，不必點進細節就能審核。'},
    {src: '/luandou-backend/screens/notifications.webp', title: '通知中心：同一套結構延伸新功能', caption: '推播、EDM、SMS 三種通道收在同一個模組的次選單，列表直接顯示建立時間、指定發送時間與發送狀態。全站共用可收合的主選單、麵包屑與「篩選列＋表格」結構，新功能直接套用，不必重新設計。'},
  ],
  'easy-home-sport': [],
};
