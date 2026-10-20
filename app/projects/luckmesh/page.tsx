import KeyScreens from '../../components/KeyScreens';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh?node-id=0-1&p=f&t=k8uWoRISjUFxf8WS-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuckMeshPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="luckmesh" category="WEBSITE DESIGN" title="LuckMesh｜跨裝置遊戲品牌體驗" summary="以品牌識別一致性與跨裝置閱讀為核心，重新整理官網的視覺層級、內容區塊與可重複使用元件。" role="UI / Visual Designer" scope="品牌視覺、Web UI、元件規劃" platform="Desktop / Mobile"/>
    <CaseToc/>
    <section className="case-cover" aria-label="LuckMesh 專案封面">
      <img src={sitePath('/luckmesh/cover.webp')} alt="LuckMesh 跨裝置遊戲品牌網站展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div><h2>讓多元遊戲內容，<br/>共享清楚的品牌體驗。</h2><p>LuckMesh 需要同時承載遊戲介紹、品牌資訊與跨裝置內容。設計重點是建立鮮明但不干擾閱讀的視覺語言，並讓使用者在桌機、平板與手機上都能快速理解內容與行動入口。</p></div>
      </article>
      <div className="case-story-divider"/>
      <section className="case-challenges" id="challenges" aria-labelledby="luckmesh-challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="luckmesh-challenge-title">品牌表現與使用體驗必須同時成立。</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>品牌辨識</h3><p>在競爭強烈的遊戲市場中，需要建立一致且能被快速記住的視覺識別。</p></article>
          <article><span>02</span><h3>內容層級</h3><p>活動、遊戲與品牌資訊並存，需要控制畫面焦點並維持清楚的閱讀順序。</p></article>
          <article><span>03</span><h3>跨裝置延伸</h3><p>高張力視覺必須能回應不同螢幕比例，避免縮放後失去重點或操作性。</p></article>
        </div>
      </section>
      <section className="case-approach" id="approach" aria-labelledby="luckmesh-approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="luckmesh-approach-title">用一致規則，保留品牌的張力。</h2></div>
        <ol>
          <li><span>01</span><div><h3>定義品牌視覺語言</h3><p>以深色基底、紫色光感與清楚的字級層級，建立能延伸至不同頁面的品牌氛圍。</p></div></li>
          <li><span>02</span><div><h3>模組化內容區塊</h3><p>將 Hero、遊戲卡片、內容導覽與行動按鈕整理為可重複使用的版面模組。</p></div></li>
          <li><span>03</span><div><h3>驗證響應式行為</h3><p>依照桌機、平板與手機情境調整資訊密度、內容順序與互動尺寸。</p></div></li>
        </ol>
      </section>
      <section className="case-contribution" id="contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div><h2>我負責將品牌概念，轉換成可延伸的跨裝置介面。</h2><p>工作涵蓋整體視覺方向、主要頁面 UI、響應式版面與共用元件規劃，並以 Figma 整理完整畫面與設計規則。</p></div>
      </section>
    </section>
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>完整品牌介面與跨裝置畫面</h2></div>
    <KeyScreens slug="luckmesh"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('luckmesh')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="LuckMesh Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <ProjectPager current="luckmesh"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import CaseToc from '../../components/CaseToc';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';
