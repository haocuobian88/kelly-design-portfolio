import KeyScreens from '../../components/KeyScreens';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/JnjeGruGMCYKj3UcAbwZ9w/Easy-Home-Sport-%E2%80%94-%E5%B1%85%E5%AE%B6%E9%81%8B%E5%8B%95-APP?node-id=0-1&t=QR4essQP207TPWuk-1';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function EasyHomeSportPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="easy-home-sport" category="APP DESIGN" title="Easy Home Sport｜居家運動 App" summary="從課程探索、訓練播放到進度紀錄，打造能降低開始門檻並陪伴使用者建立運動節奏的行動體驗。" role="UI / Product Designer" scope="產品流程、Mobile UI、Design System" platform="Mobile App"/>
    <CaseToc/>
    <section className="case-cover" aria-label="Easy Home Sport 專案封面">
      <img src={sitePath('/easy-home-sport/cover.webp')} alt="Easy Home Sport 居家運動 App 畫面展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div><h2>讓開始運動這件事，<br/>變得更輕鬆一點。</h2><p>Easy Home Sport 面向想在家建立運動習慣、卻容易被時間與複雜流程阻礙的使用者。產品從快速找到合適課程出發，串連訓練播放、進度紀錄與持續鼓勵，降低每一次開始的心理門檻。</p></div>
      </article>
      <div className="case-story-divider"/>
      <section className="case-challenges" id="challenges" aria-labelledby="easyhome-challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="easyhome-challenge-title">把運動目標轉換成容易完成的日常行動。</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>快速選擇</h3><p>課程必須依時間、程度與目標被快速理解，避免選擇過多造成開始前的負擔。</p></article>
          <article><span>02</span><h3>訓練專注</h3><p>播放過程要保留必要資訊與操作，同時減少干擾，讓使用者專注完成動作。</p></article>
          <article><span>03</span><h3>持續動機</h3><p>進度與成就需要被清楚呈現，讓小幅累積也能成為繼續運動的正向回饋。</p></article>
        </div>
      </section>
      <section className="case-approach" id="approach" aria-labelledby="easyhome-approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="easyhome-approach-title">以短而清楚的流程，陪伴每一次訓練。</h2></div>
        <ol>
          <li><span>01</span><div><h3>整理核心使用流程</h3><p>聚焦探索課程、開始訓練與查看進度，減少非必要步驟並建立明確的下一步。</p></div></li>
          <li><span>02</span><div><h3>建立平靜的視覺節奏</h3><p>以自然色彩、清楚留白與易讀資訊層級，降低操作與閱讀上的壓力。</p></div></li>
          <li><span>03</span><div><h3>規劃一致的設計系統</h3><p>整理按鈕、課程卡片、播放控制與進度元件，確保不同功能維持一致體驗。</p></div></li>
        </ol>
      </section>
      <section className="case-contribution" id="contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div><h2>我負責從產品流程到介面系統，建立完整的行動體驗。</h2><p>工作涵蓋功能與流程規劃、主要使用情境、Mobile UI、互動狀態與 Design System，並將課程、訓練與成就紀錄整合成一致的產品語言。</p></div>
      </section>
    </section>
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>完整 App 介面與產品流程</h2></div>
    <KeyScreens slug="easy-home-sport"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('easy-home-sport')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="Easy Home Sport Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <ProjectPager current="easy-home-sport"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import CaseToc from '../../components/CaseToc';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';
