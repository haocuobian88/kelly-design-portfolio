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
  'luandou-frontend': [],
  'luandou-backend': [],
  'easy-home-sport': [],
};
