const figmaUrl='https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=PcqMVCxu2lCifXTG-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouFrontendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="03" category="PLATFORM SYSTEM" title="遊戲大亂鬥｜內容論壇體驗重構" summary="面對大量文章、會員互動與活動入口，重新梳理資訊層級與操作路徑，讓內容探索與核心功能更容易被理解。" role="UI / Product Designer" scope="資訊架構、用戶功能、元件系統" platform="Responsive Web"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>03</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥前台 Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
