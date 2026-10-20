const figmaUrl='https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=PcqMVCxu2lCifXTG-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouFrontendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="03" category="PLATFORM SYSTEM" title="遊戲大亂鬥｜內容論壇體驗重構" summary="面對大量文章、會員互動與活動入口，重新梳理資訊層級與操作路徑，讓內容探索與核心功能更容易被理解。" role="UI / Product Designer" scope="資訊架構、用戶功能、元件系統" platform="Responsive Web"/>
    <CaseToc/>
    <section className="case-cover" aria-label="遊戲大亂鬥專案封面">
      <img src={sitePath('/luandou-frontend/cover.png')} alt="遊戲大亂鬥桌機與行動版介面展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div>
          <h2>讓高密度內容平台，<br/>仍然能被快速理解。</h2>
          <p>遊戲大亂鬥同時承載文章、熱門內容、會員互動、任務與多種活動入口。這次重構的核心不是單純更換視覺，而是先整理使用者如何找到內容、理解功能，並在不同頁面之間維持一致的操作方式。</p>
        </div>
      </article>

      <div className="case-story-divider"/>

      <section className="case-challenges" id="challenges" aria-labelledby="challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="challenge-title">需要處理的三個核心問題</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>資訊密度</h3><p>首頁與內容頁同時出現多種資訊，需要建立清楚的主次、分區與閱讀節奏。</p></article>
          <article><span>02</span><h3>功能路徑</h3><p>會員、任務、互動與活動入口分散，需要讓常用操作更容易找到與理解。</p></article>
          <article><span>03</span><h3>介面一致性</h3><p>不同內容情境必須共享可延伸的元件規則，避免頁面持續增加後失去一致性。</p></article>
        </div>
      </section>

      <section className="case-approach" id="approach" aria-labelledby="approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="approach-title">從結構開始，而不是先做畫面。</h2></div>
        <ol>
          <li><span>01</span><div><h3>重新整理資訊層級</h3><p>先區分核心內容、輔助資訊與行動入口，再建立能跨頁面延續的版面骨架。</p></div></li>
          <li><span>02</span><div><h3>對齊主要任務流程</h3><p>以閱讀文章、探索內容與會員互動等主要任務為基礎，檢查入口、回饋與下一步是否清楚。</p></div></li>
          <li><span>03</span><div><h3>建立共用元件規則</h3><p>將導覽、內容卡片、標籤、狀態與操作控制整理成可重複使用的介面語言。</p></div></li>
        </ol>
      </section>

      <section className="case-contribution" id="contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div><h2>我負責把功能需求，轉換成一致的產品介面。</h2><p>工作涵蓋主要頁面與使用者功能重構、資訊層級整理、桌機與響應式介面設計，以及共用元件規劃。完整畫面與操作脈絡保留於下方 Figma 檔案。</p></div>
      </section>
    </section>
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>完整介面與畫面流程</h2></div>
    <section className="luckmesh-preview">
      <div className="device-label"><span>03</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥前台 Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <ProjectPager current="luandou-frontend"/>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import CaseToc from '../../components/CaseToc';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';
