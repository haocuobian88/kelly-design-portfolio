// 全站共用資料：職稱、聯絡方式、案例順序都只在這裡改一次。

export const profile = {
  name: 'Kelly Lei',
  title: 'UI / Product Designer',
  heroTitle: ['Product', 'Designer'],
  location: 'Taipei, Taiwan',
  email: 'kellylei9@gmail.com',
  years: '9+ Years',
  chips: ['UI', 'WEB', 'GRAPHIC'],
};

export type WorkCategory = '網站設計' | '平台系統' | 'APP UI';

export type Project = {
  slug: string;
  category: WorkCategory;
  title: string;
  subtitle: string;
  role: string;
  featured: boolean;
  sideProject?: boolean;
  cover: string;
};

// 陣列順序 = 首頁顯示順序 = 案例編號 = 上一個／下一個專案的順序。
// 想依投遞產業調整精選順序，只要搬動這裡的項目即可。
export const projects: Project[] = [
  // Featured Cases
  {slug: 'luandou-frontend', category: '平台系統', title: '遊戲大亂鬥｜內容論壇體驗重構', subtitle: '資訊架構、會員功能與元件系統', role: 'UI / Product Designer', featured: true, cover: '/luandou-frontend/cover.webp'},
  {slug: 'easy-home-sport', category: 'APP UI', title: 'Easy Home Sport｜居家運動 App', subtitle: '課程探索、訓練與進度紀錄體驗', role: 'UI / Product Designer', featured: true, sideProject: true, cover: '/easy-home-sport/cover.webp'},
  {slug: 'luandou-backend', category: '平台系統', title: '亂鬥後台｜管理與廣告系統設計', subtitle: '複雜功能流程與後台元件規劃', role: 'UI / Product Designer', featured: true, cover: '/luandou-backend/cover.webp'},
  {slug: 'luckmesh', category: '網站設計', title: 'LuckMesh｜海外招商品牌官網', subtitle: '品牌視覺、跨裝置介面與元件規劃', role: 'UI / Visual Designer', featured: true, cover: '/luckmesh/cover.webp'},
  // Other Projects
  {slug: 'xincheng-en', category: '網站設計', title: '星城 EN｜娛樂平台品牌官網', subtitle: '跨裝置介面與品牌視覺規劃', role: 'UI / Visual Designer', featured: false, cover: '/xincheng-en/cover.webp'},
  {slug: 'bana', category: '平台系統', title: 'BanaBana｜內容平台體驗重構', subtitle: '內容探索、會員功能與介面系統', role: 'UI / Product Designer', featured: false, cover: '/bana/cover.webp'},
  {slug: 'app-design', category: 'APP UI', title: '美耶｜到府美業服務 App', subtitle: '用戶端預約與商家端接單的雙端服務體驗', role: 'UI / Product Designer', featured: false, cover: '/app-design/cover.avif'},
  {slug: 'website-redesign', category: '網站設計', title: 'BabyHome｜響應式網站重構', subtitle: '桌機與手機資訊層級重新規劃', role: 'UI / UX Designer', featured: false, cover: '/website-redesign/cover.avif'},
  {slug: 'little-tail', category: '網站設計', title: '小尾巴｜寵物美容預約平台', subtitle: '預約與領養資訊的響應式體驗', role: 'UI / UX Designer', featured: false, sideProject: true, cover: '/little-tail/cover.jpg'},
];

export const projectNumber = (slug: string) => {
  const index = projects.findIndex(project => project.slug === slug);
  return String(index + 1).padStart(2, '0');
};

export const experience = [
  {period:'2023.05 — PRESENT',role:'UI 設計師',company:'華義國際數位娛樂股份有限公司',summary:'負責論壇核心功能、編輯器、分類標籤、會員制度與搜尋篩選等 UI／UX 規劃，建立並維護 Design System，與產品及工程團隊共同完成規格與開發交付。'},
  {period:'2022.01 — 2023.02',role:'UI 設計師',company:'樂約科技股份有限公司',summary:'規劃產品資訊架構、Wireframe、User Flow 與介面規格，處理多變需求下的產品優化，並以完整 Design Handoff 支援前端開發與測試。'},
  {period:'2019.07 — 2021.12',role:'平面／網頁設計',company:'BabyHome 寶貝家庭親子網',summary:'主導官方網站 UI 改版與互動原型，也負責行銷活動頁、品牌廣告素材及線上線下視覺，兼顧專案時程與跨部門合作。'},
  {period:'2018.05 — 2019.07',role:'美術設計',company:'智趣王數位科技股份有限公司',summary:'負責活動網站前端維護、行銷視覺與圖稿產出、線下展覽規劃，維持品牌在數位與實體接觸點的一致性。'},
  {period:'2017.09 — 2018.05',role:'美術／電商設計',company:'釣生股份有限公司',summary:'規劃企業視覺識別與品牌策略，執行產品包裝、插畫與實體設計，並與工程、市場及製程團隊共同評估可行性與成本。'},
];

export const skills = ['Figma','Design System','資訊架構','User Flow','Wireframe','Prototype','Design Handoff','響應式網頁','品牌視覺','Photoshop','Illustrator','HTML / CSS'];

// 履歷頁「工具與技能」分類；次要工具另外列在最下方。
export const resumeSkillGroups = [
  {label: 'PRODUCT DESIGN', items: ['Figma', 'Wireframe', 'User Flow', 'Prototype', 'Design System', '資訊架構']},
  {label: 'VISUAL DESIGN', items: ['Photoshop', 'Illustrator', 'InDesign', '品牌視覺', '行銷素材']},
  {label: 'COLLABORATION & DELIVERY', items: ['Design Handoff', 'HTML / CSS', 'Keynote', '跨部門協作']},
];
export const resumeSecondaryTools = ['Adobe XD', 'Balsamiq'];
