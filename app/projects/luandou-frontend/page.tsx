import CountUp from '../../components/CountUp';
import KeyScreens from '../../components/KeyScreens';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=PcqMVCxu2lCifXTG-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouFrontendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="luandou-frontend" category="PLATFORM SYSTEM" title="遊戲大亂鬥｜內容論壇體驗重構" summary="論壇的目標是提高會員參與度與停留率：讓發文變簡單、發文能得到獎勵、獎勵能兌換真實商品，同時讓廣告多次曝光又不打擾閱讀，而且手機和網頁版都要好讀、好操作。" role="UI Designer / PM" scope="論壇功能、編輯器、Design System" platform="Responsive Web"/>
    <CaseToc/>
    <section className="case-cover" aria-label="遊戲大亂鬥專案封面">
      <img src={sitePath('/luandou-frontend/cover.webp')} alt="遊戲大亂鬥桌機與行動版介面展示"/>
    </section>
    <section className="case-story">
      <article className="case-story-overview" id="overview">
        <p className="case-story-label">CONTEXT</p>
        <div>
          <h2>讓會員願意發文、<br/>也願意留下來。</h2>
          <p>遊戲大亂鬥是遊戲社群論壇，同時承載文章、熱門內容、會員互動、任務與活動入口。這次改版的目標很明確：提高會員的參與度與停留率。要做到這點，發文必須夠簡單，發文之後要能得到回饋，回饋還要有實際用處；同時，平台也需要廣告帶來曝光與點閱。</p>
          <ul className="platform-stats" aria-label="平台規模">
            <li><strong><CountUp to={120} suffix=" 萬+"/></strong><span>每月活躍使用者</span></li>
            <li><strong>前 <CountUp to={30} from={100} duration={1200}/> 名</strong><span>台灣電玩遊戲類網站</span></li>
            <li><strong><CountUp to={2012} from={1990} duration={1200}/></strong><span>年創立的電競影音社群</span></li>
          </ul>
          <p className="platform-stats-source">平台數據來源：<a href="https://www.league-funny.com/about" target="_blank" rel="noreferrer">遊戲大亂鬥官網「關於我們」</a></p>
        </div>
      </article>

      <div className="case-story-divider"/>

      <section className="case-challenges" id="challenges" aria-labelledby="challenge-title">
        <div className="case-section-heading"><p className="case-story-label">01 · CHALLENGES</p><h2 id="challenge-title">參與度、廣告效益與閱讀體驗，要同時成立。</h2></div>
        <div className="case-card-grid">
          <article><span>01</span><h3>參與度與停留率</h3><p>會員看完文章就離開，缺少持續發文、互動和回訪的理由。</p></article>
          <article><span>02</span><h3>廣告不能擾人</h3><p>廣告要多次曝光、帶來點閱，但不能打斷閱讀，否則會反過來把會員趕走。</p></article>
          <article><span>03</span><h3>手機與網頁都要好用</h3><p>內容密度高，手機和桌機的閱讀方式不同，兩種裝置都要好閱讀、好操作。</p></article>
        </div>
      </section>

      <section className="case-approach" id="approach" aria-labelledby="approach-title">
        <div className="case-section-heading"><p className="case-story-label">02 · APPROACH</p><h2 id="approach-title">建立「發文、回饋、兌換」的參與循環。</h2></div>
        <ol>
          <li><span>01</span><div><h3>讓發文變簡單</h3><p>整理編輯器與分類標籤，讓會員能快速寫好一篇文章、選對分類並發佈，降低開始發文的門檻。</p></div></li>
          <li><span>02</span><div><h3>發文有回饋，回饋能兌換</h3><p>發文與互動可以獲得鬥幣獎勵，鬥幣能在平台兌換遊戲點數、實況主周邊與廠商互惠商品。參與有了實際回報，會員就有理由持續發文、再回到平台。</p></div></li>
          <li><span>03</span><div><h3>廣告融入內容節奏</h3><p>把廣告規劃在與內容一致的版位裡，讓它在瀏覽過程中多次曝光，卻不打斷閱讀，兼顧點閱效益與使用體驗。</p></div></li>
          <li><span>04</span><div><h3>一套規則，手機與網頁共用</h3><p>以共用元件建立導覽、內容卡片、標籤與狀態的規則，依裝置調整資訊密度與操作尺寸，讓兩種版本都好讀、好操作。</p></div></li>
        </ol>
      </section>

      <section className="case-contribution" id="contribution">
        <p className="case-story-label">MY CONTRIBUTION</p>
        <div>
          <h2>UI 兼 PM：把功能需求，轉換成一致的產品介面。</h2>
          <p>我負責論壇核心功能、文章編輯器、分類標籤、會員制度與搜尋篩選的 UI／UX 規劃。收到需求後，先把功能與畫面規劃出來，和後端工程師討論資料與流程的可行性，修正後再交給前端切版與串接。時程很趕，所以每個決定都以「不同使用者都好操作、好理解」為優先，並同步建立與維護 Design System。前台的鬥幣獎勵與兌換，也對應到我規劃的<a className="inline-link" href={sitePath('/projects/luandou-backend/')}>亂鬥後台</a>中的鬥幣商品與兌換審核。</p>
          <ul className="case-results">
            <li><strong>建立 Design System</strong><span>導覽、內容卡片、標籤與狀態整理成共用元件，持續維護。</span></li>
            <li><strong>元件被工程端沿用</strong><span>工程師直接重複使用同一套元件實作。</span></li>
            <li><strong>後續畫面直接套用</strong><span>新功能有些畫面可以直接沿用，不必重新設計。</span></li>
          </ul>
        </div>
      </section>
    </section>
    <div className="figma-section-heading" id="final-design"><p>03 · FINAL DESIGN</p><h2>關鍵畫面與完整設計稿</h2></div>
    <KeyScreens slug="luandou-frontend"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('luandou-frontend')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥前台 Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <ProjectPager current="luandou-frontend"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import CaseToc from '../../components/CaseToc';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';
