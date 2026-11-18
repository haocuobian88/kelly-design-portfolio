// 平面設計作品。內容取自 Kelly 舊作品集（Wix）上的作品說明，不另外加上未提供的年份或成效。
// 新增作品：圖片放到 public/graphic/，在下方陣列加一筆即可。

export type GraphicImage = {src: string; label: string};
export type GraphicWork = {
  slug: string;
  type: '印刷品' | '展場佈置' | '行銷素材' | '活動主視覺';
  client: string;
  title: string;
  text: string;
  cover?: string;
  images: GraphicImage[];
};

export const graphicWorks: GraphicWork[] = [
  {
    slug: 'panasonic-expo',
    type: '展場佈置',
    client: 'Panasonic',
    title: '家電展大型佈置物輸出',
    text: '家電展的大型佈置物印刷輸出，涵蓋吹風機、淨水器等產品的主視覺、產品說明牆與橫幅。',
    images: [
      {src: '/graphic/expo-0.webp', label: '吹風機主視覺'},
      {src: '/graphic/expo-1.webp', label: '奈米水離子功能橫幅'},
      {src: '/graphic/expo-2.webp', label: '吹風機演進史展示牆'},
      {src: '/graphic/expo-3.webp', label: '整水器橫幅'},
      {src: '/graphic/expo-4.webp', label: '整水器主視覺'},
    ],
  },
  {
    slug: 'babyhome-campaign',
    type: '活動主視覺',
    client: 'BabyHome',
    title: '線上活動主視覺',
    text: '親子社群的線上活動主視覺，依活動主題發展插畫風格、標題字與色彩，一檔活動一個視覺。',
    images: [
      {src: '/graphic/kv-0.webp', label: '機智的抗敏生活｜2021'},
      {src: '/graphic/kv-1.webp', label: '媽媽今日不營業｜2021 母親節'},
      {src: '/graphic/kv-2.webp', label: '戀家生活節｜2021'},
      {src: '/graphic/kv-3.webp', label: '公私立中學討論專區｜2021'},
      {src: '/graphic/kv-4.webp', label: '私房傳授討喜秘訣｜2021 春節'},
      {src: '/graphic/kv-5.webp', label: '體重瘦不下來怎麼辦｜2020'},
    ],
  },
  {
    slug: 'panasonic-rz970',
    type: '印刷品',
    client: 'Panasonic',
    title: 'RZ970 系列投影機型錄',
    text: '商用雷射投影機型錄的設計與輸出，整理產品線、應用情境與規格表。',
    cover: '/graphic/rz970-cover.webp',
    images: [
      {src: '/graphic/rz970-0.webp', label: '封面與封底'},
      {src: '/graphic/rz970-1.webp', label: '內頁：對應各種應用解決方案'},
      {src: '/graphic/rz970-2.webp', label: '內頁：產品特色與雷射技術'},
    ],
  },
  {
    slug: 'biore',
    type: '行銷素材',
    client: '花王 Bioré',
    title: '抗菌洗手慕絲體驗活動',
    text: '體驗活動的行銷素材製作，同一套視覺延伸成不同版位所需的 5 種尺寸。',
    images: [
      {src: '/graphic/biore-2.webp', label: '1200 × 627'},
      {src: '/graphic/biore-3.webp', label: '627 × 627'},
      {src: '/graphic/biore-1.webp', label: '780 × 360'},
      {src: '/graphic/biore-0.webp', label: '600 × 315'},
      {src: '/graphic/biore-4.webp', label: '活動內容圖：洗手 5 時機'},
    ],
  },
  {
    slug: 'panasonic-lumix-poster',
    type: '印刷品',
    client: 'Panasonic',
    title: 'LUMIX G 品牌文宣海報',
    text: '品牌文宣海報的設計與印刷輸出。',
    images: [{src: '/graphic/lumix-0.webp', label: '海報'}],
  },
  {
    slug: 'event-materials',
    type: '活動主視覺',
    client: 'BabyHome 等',
    title: '實體活動製作物',
    text: '線下活動的主視覺與宣傳素材，包含運動會、貴賓之夜與繪本創作比賽。',
    images: [
      {src: '/graphic/event-0.webp', label: 'BabyRun 運動會｜2019'},
      {src: '/graphic/event-1.webp', label: '中華電信 LINE FRIENDS 貴賓之夜｜2018'},
      {src: '/graphic/event-2.webp', label: 'FunPark 創意說故事比賽｜2019'},
    ],
  },
  {
    slug: 'panasonic-video',
    type: '印刷品',
    client: 'Panasonic',
    title: 'HD 視訊會議系統型錄',
    text: '視訊會議系統型錄的設計與印刷輸出。',
    cover: '/graphic/video-cover.webp',
    images: [
      {src: '/graphic/video-0.webp', label: '封面與封底'},
      {src: '/graphic/video-1.webp', label: '內頁：產品系列比較'},
    ],
  },
  {
    slug: 'huggies',
    type: '行銷素材',
    client: '好奇 × LINE FRIENDS',
    title: '裸感好動褲體驗活動',
    text: '體驗活動的行銷素材製作，同一套視覺延伸成 4 種尺寸。',
    images: [
      {src: '/graphic/huggies-1.webp', label: '1200 × 628'},
      {src: '/graphic/huggies-2.webp', label: '780 × 360'},
      {src: '/graphic/huggies-3.webp', label: '375 × 195'},
      {src: '/graphic/huggies-0.webp', label: '300 × 100'},
    ],
  },
  {
    slug: 'panasonic-dm',
    type: '印刷品',
    client: 'Panasonic LUMIX',
    title: '期間限定優惠販促 DM',
    text: '相機期間限定優惠的販促 DM 設計製作，正面為商品與贈品，背面為登錄流程。',
    images: [
      {src: '/graphic/dm-0.webp', label: '正面'},
      {src: '/graphic/dm-1.webp', label: '背面'},
    ],
  },
];
