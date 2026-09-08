const experience=[
  {period:'2023.05 — PRESENT',role:'UI 設計師',company:'華義國際數位娛樂股份有限公司',summary:'負責論壇核心功能、編輯器、分類標籤、會員制度與搜尋篩選等 UI／UX 規劃，建立並維護 Design System，與產品及工程團隊共同完成規格與開發交付。'},
  {period:'2022.01 — 2023.02',role:'UI 設計師',company:'樂約科技股份有限公司',summary:'規劃產品資訊架構、Wireframe、User Flow 與介面規格，處理多變需求下的產品優化，並以完整 Design Handoff 支援前端開發與測試。'},
  {period:'2019.07 — 2021.12',role:'平面／網頁設計',company:'BabyHome 寶貝家庭親子網',summary:'主導官方網站 UI 改版與互動原型，也負責行銷活動頁、品牌廣告素材及線上線下視覺，兼顧專案時程與跨部門合作。'},
  {period:'2018.05 — 2019.07',role:'美術設計',company:'智趣王數位科技股份有限公司',summary:'負責活動網站前端維護、行銷視覺與圖稿產出、線下展覽規劃，維持品牌在數位與實體接觸點的一致性。'},
  {period:'2017.09 — 2018.05',role:'美術／電商設計',company:'釣生股份有限公司',summary:'規劃企業視覺識別與品牌策略，執行產品包裝、插畫與實體設計，並與工程、市場及製程團隊共同評估可行性與成本。'},
];

export default function ResumePage(){
  return <main className="resume-page">
    <header className="case-nav"><a href="/" className="monogram">K.</a><nav><a href="/#work">WORK</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="resume-hero"><a className="projects-back" href="/">← BACK HOME</a><div><p>PROFILE · 10+ YEARS</p>
      <h1>Kelly Lei</h1><p className="resume-lead">Visual &amp; Product Designer，擅長把複雜的產品需求整理成清楚、可落地的介面與設計系統。</p></div></section>
    <section className="resume-section"><div className="resume-section-title"><span>01</span><h2>工作經歷</h2></div><div className="experience-list">{experience.map(item=><article key={item.company}><p>{item.period}</p><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p></div></article>)}</div></section>
    <section className="resume-section"><div className="resume-section-title"><span>02</span><h2>工具與技能</h2></div><div className="skill-groups"><article><p>PRODUCT &amp; UI</p><h3>Figma · Adobe XD · Balsamiq</h3><span>Wireframe、User Flow、Prototype、Design System、介面規格與 Design Handoff</span></article><article><p>VISUAL DESIGN</p><h3>Photoshop · Illustrator · InDesign</h3><span>品牌視覺、網頁設計、平面製作物、包裝與行銷素材</span></article><article><p>FRONT-END &amp; PRESENTATION</p><h3>HTML · CSS · Keynote</h3><span>響應式網頁基礎、開發溝通、視覺提案與跨部門協作</span></article></div></section>
    <section className="resume-section education-section"><div className="resume-section-title"><span>03</span><h2>教育程度</h2></div><article><p>2006.09 — 2007.06</p><div><h3>台北市立大學</h3><h4>運動器材科技研究所｜碩士</h4></div></article></section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
