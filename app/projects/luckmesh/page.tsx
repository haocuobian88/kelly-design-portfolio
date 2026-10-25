import FigmaEmbed from '../../components/FigmaEmbed';
import KeyScreens from '../../components/KeyScreens';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh?node-id=0-1&p=f&t=k8uWoRISjUFxf8WS-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuckMeshPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="luckmesh" category="WEBSITE DESIGN · 海外招商" title="LuckMesh｜海外招商品牌官網" summary="公司為了在海外招募合作夥伴，需要一個能快速傳達品牌形象與遊戲內容的官網。我負責視覺方向、桌機與手機介面，以及可重複使用的版面元件。" role="UI / Visual Designer" scope="品牌視覺、Web UI、元件規劃" platform="Desktop / Mobile"/>
    <p className="live-site"><span>LIVE SITE</span><a href="https://www.luckmesh.com/en-US" target="_blank" rel="noreferrer">www.luckmesh.com ↗</a></p>
    <CaseToc/>
    <section className="case-cover" aria-label="LuckMesh 專案封面">
      <img src={sitePath('/luckmesh/cover.webp')} alt="LuckMesh 跨裝置遊戲品牌網站展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div><h2>讓海外合作夥伴，<br/>快速看懂 LuckMesh。</h2><p>LuckMesh 是公司為海外招商打造的品牌官網，主要讀者是潛在的合作夥伴，而不是一般玩家。他們通常只會快速瀏覽，所以網站要在很短的時間內傳達品牌形象與遊戲內容的豐富度，並在桌機、平板與手機上都保持清楚的閱讀順序與行動入口。</p></div>
      </article>
      <div className="case-story-divider"/>
      <section className="case-challenges" id="challenges" aria-labelledby="luckmesh-challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="luckmesh-challenge-title">品牌表現與使用體驗必須同時成立。</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>第一印象</h3><p>海外合作夥伴對品牌不熟悉，又只會快速瀏覽，視覺識別必須一眼就被記住，並讓人感受到品牌的規模與質感。</p></article>
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
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>關鍵畫面與完整設計稿</h2></div>
    <KeyScreens slug="luckmesh"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('luckmesh')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <FigmaEmbed src={figmaEmbed} title="LuckMesh Figma design" openUrl={figmaUrl}/>
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
