// 精選案例的補充資訊：TIMELINE、TEAM 與 OUTCOME。
// 內容只取自既有專案資料與本人提供的說明；沒有正式數據的地方使用可驗證的質性成果，
// 不寫月份、人數、百分比或公司內部資料。

export type CaseDetail = {
  timeline: string;
  team: string;
  outcomes: {title: string; text: string}[];
};

export const caseDetails: Record<string, CaseDetail> = {
  'luandou-frontend': {
    timeline: '持續迭代',
    team: 'UI 兼 PM，與前後端工程師協作',
    outcomes: [
      {title: '建立並維護 Design System', text: '導覽、內容卡片、標籤與狀態整理成共用元件，前台新功能都從同一套規則延伸。'},
      {title: '設計與工程交付更一致', text: '工程師直接沿用同一套元件實作，畫面在桌機與手機版維持相同的操作方式。'},
      {title: '前後台串成同一個循環', text: '前台的發文獎勵與鬥幣兌換，對應到後台的鬥幣商品與兌換審核，流程從會員端一路接到營運端。'},
    ],
  },
  'easy-home-sport': {
    timeline: '疫情期間的個人練習',
    team: '個人獨立完成',
    outcomes: [
      {title: '完整的核心使用流程', text: '從課程探索、開始訓練到查看進度，三個主要情境串成一條沒有斷點的流程。'},
      {title: '一套可延伸的元件', text: '按鈕、課程卡片、播放控制與進度元件整理成 Design System，新增功能可直接組合。'},
      {title: '一致的視覺語言', text: '以自然色彩、留白與清楚的資訊層級，讓不同功能頁維持相同的閱讀感受。'},
    ],
  },
  'luandou-backend': {
    timeline: '時程緊湊的重構專案',
    team: 'UI 兼 PM，與前後端工程師協作',
    outcomes: [
      {title: '新後台上線、回饋良好', text: '營運、客服、站務與商家小編改用同一套後台，上線後各角色的整體回饋不錯。'},
      {title: '元件被工程端沿用', text: '表格、表單、篩選與彈窗元件由工程師直接重複使用，設計與開發交付更一致。'},
      {title: '後續畫面直接套用', text: '序號兌換、通知中心等之後的需求沿用同一套版型與規則，不必重新設計。'},
    ],
  },
  'luckmesh': {
    timeline: '專案制，官網已上線',
    team: '產品、設計與工程協作',
    outcomes: [
      {title: '建立品牌視覺語言', text: '深色基底、紫色光感與明確的字級層級，延伸到首頁、遊戲、服務與聯絡頁。'},
      {title: '模組化的版面區塊', text: 'Hero、遊戲卡片、服務介紹與聯絡表單整理成可重複使用的區塊，新增內容不必重做版面。'},
      {title: '桌機與手機一致', text: '同一套版面規則依裝置調整資訊密度與互動尺寸，讓跨裝置的品牌體驗保持一致。'},
    ],
  },
};
