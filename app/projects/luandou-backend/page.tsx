const figmaUrl='https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=UEm0NWFAAjYfTr1I-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouBackendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="04" category="ADMIN SYSTEM" title="亂鬥後台｜管理與廣告系統設計" summary="將管理員、內容與廣告操作拆解成一致的任務流程，改善複雜資訊的閱讀順序與日常管理效率。" role="UI / Product Designer" scope="功能重構、廣告系統、後台元件" platform="Desktop Web"/>
    <section className="case-cover" aria-label="亂鬥後台專案封面">
      <img src={sitePath('/luandou-backend/cover.png')} alt="亂鬥後台管理系統介面展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview">
        <p className="case-story-label">CONTEXT</p>
        <div>
          <h2>把複雜的管理工作，<br/>整理成可預期的操作流程。</h2>
          <p>後台同時包含內容、會員、廣告與系統設定等不同任務。設計重點在於建立一致的導覽、列表與操作模式，讓管理者面對大量資料時，仍能快速辨識狀態並完成工作。</p>
        </div>
      </article>

      <div className="case-story-divider"/>

      <section className="case-challenges" aria-labelledby="backend-challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="backend-challenge-title">後台設計的核心挑戰</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>功能分類</h3><p>管理項目多且彼此相關，需要讓導覽結構符合使用者執行任務的思考方式。</p></article>
          <article><span>02</span><h3>資料判讀</h3><p>表格、狀態與操作資訊必須維持清楚層級，降低在大量資料中辨識與比對的負擔。</p></article>
          <article><span>03</span><h3>流程一致性</h3><p>新增、編輯、搜尋、篩選與狀態變更需要共享一致的操作規則與回饋方式。</p></article>
        </div>
      </section>

      <section className="case-approach" aria-labelledby="backend-approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="backend-approach-title">以管理任務建立系統規則。</h2></div>
        <ol>
          <li><span>01</span><div><h3>盤點管理情境</h3><p>依照管理者的主要任務重新整理功能群組，讓入口名稱與使用情境彼此對應。</p></div></li>
          <li><span>02</span><div><h3>統一資料操作模式</h3><p>整理列表、篩選、狀態與批次操作的層級，讓不同模組保有一致的學習經驗。</p></div></li>
          <li><span>03</span><div><h3>規劃可延伸元件</h3><p>建立導覽、表格、表單、標籤與回饋元件，支援後續功能與廣告模組擴充。</p></div></li>
        </ol>
      </section>

      <section className="case-contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div><h2>我負責將後台需求，轉化成一致的管理體驗。</h2><p>工作涵蓋管理功能重構、廣告系統介面、資訊層級、表格與表單狀態，以及共用元件規劃。下方 Figma 保留完整模組與畫面脈絡。</p></div>
      </section>
    </section>
    <div className="figma-section-heading"><p>03 · FINAL DESIGN</p><h2>完整後台介面與功能模組</h2></div>
    <section className="luckmesh-preview">
      <div className="device-label"><span>04</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥後台 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import {sitePath} from '../../site-path';
