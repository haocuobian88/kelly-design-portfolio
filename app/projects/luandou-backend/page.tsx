import KeyScreens from '../../components/KeyScreens';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=UEm0NWFAAjYfTr1I-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouBackendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="luandou-backend" category="ADMIN SYSTEM" title="亂鬥後台｜管理與廣告系統設計" summary="舊後台已經不堪使用，同時又有一番賞、序號兌換、通知中心等新功能要上線。我以 UI 兼 PM 的角色，在很趕的時程內重構整個後台，讓營運、客服、站務與商家小編都能用同一套系統完成工作。" role="UI Designer / PM" scope="後台重構、新功能規劃、元件庫" platform="Desktop / Mobile Web"/>
    <CaseToc/>
    <section className="case-cover" aria-label="亂鬥後台專案封面">
      <img src={sitePath('/luandou-backend/cover.webp')} alt="亂鬥後台管理系統介面展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div>
          <h2>四種角色、背景各不相同，<br/>卻要共用同一套後台。</h2>
          <p>亂鬥後台的使用者包含營運、客服、站務，以及外部合作的商家小編。每個人負責的工作不同，熟悉系統的程度也差很多。舊後台已經難以使用，加上一番賞的物流出貨與金流拆帳、序號兌換、通知中心等新功能都要上線，團隊決定直接重構整個後台。</p>
        </div>
      </article>

      <div className="case-story-divider"/>

      <section className="case-challenges" id="challenges" aria-labelledby="backend-challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="backend-challenge-title">重構與新功能，要在很趕的時程內一起完成。</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>使用者落差大</h3><p>內部營運與外部商家小編對系統的熟悉度不同，同一個畫面必須讓第一次使用的人也看得懂、不容易填錯。</p></article>
          <article><span>02</span><h3>舊系統與新需求並行</h3><p>不只要把舊功能搬到新架構，還要同時規劃一番賞出貨、金流拆帳、商家設定等全新流程。</p></article>
          <article><span>03</span><h3>時程很趕</h3><p>沒有時間每個畫面都從零設計，設計稿必須能快速交給工程師實作，並且能在後續功能直接沿用。</p></article>
        </div>
      </section>

      <section className="case-approach" id="approach" aria-labelledby="backend-approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="backend-approach-title">一個原則：不管哪個角色，都要好操作、好理解。</h2></div>
        <ol>
          <li><span>01</span><div><h3>平台端與商家端分開設計</h3><p>同一個功能依角色拆成不同畫面，例如「金流與拆帳」和「物流出貨」都分成平台版與商家版。商家小編只看到自己需要處理的資料，平台營運則保有完整的管理與設定權限，降低誤操作的風險。</p></div></li>
          <li><span>02</span><div><h3>讓表單自己說明怎麼填</h3><p>必填欄位統一標示，輸入框直接寫出格式範例（例如平台抽成「請輸入 % 數，例如 30」），字數上限即時顯示，目的是讓不熟悉系統的使用者也能一次填對，不必再回頭詢問客服或站務。</p></div></li>
          <li><span>03</span><div><h3>先建元件庫，再組合頁面</h3><p>先整理色彩、按鈕、表單、篩選、表格、分頁籤、彈窗、進度條與桌機／手機版型，所有頁面都用同一套元件組成。新功能可以直接拼裝，工程師也能重複使用同一份元件，壓縮設計與開發時間。</p></div></li>
        </ol>
      </section>

      <section className="case-contribution" id="contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div>
          <h2>UI 兼 PM：從收集需求到交付上線。</h2>
          <p>我先向各角色收集需求，把功能與畫面規劃出來，再和後端工程師逐一討論資料欄位與流程的可行性，修正後交給前端切版與串接。設計與規格由同一個人負責，減少需求在轉手之間走樣，也省下來回溝通的時間。</p>
          <ul className="case-results">
            <li><strong>上線回饋良好</strong><span>新後台上線後，各角色使用的整體回饋不錯。</span></li>
            <li><strong>元件被工程端沿用</strong><span>工程師直接重複使用同一套元件實作。</span></li>
            <li><strong>後續畫面直接套用</strong><span>之後的新需求有些畫面可以直接沿用，不必重新設計。</span></li>
          </ul>
        </div>
      </section>
    </section>
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>完整後台介面與功能模組</h2></div>
    <KeyScreens slug="luandou-backend"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('luandou-backend')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥後台 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <ProjectPager current="luandou-backend"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import CaseToc from '../../components/CaseToc';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';
