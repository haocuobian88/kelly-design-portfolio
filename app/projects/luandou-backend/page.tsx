const figmaUrl='https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=UEm0NWFAAjYfTr1I-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouBackendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="04" category="ADMIN SYSTEM" title="亂鬥後台｜管理與廣告系統設計" summary="將管理員、內容與廣告操作拆解成一致的任務流程，改善複雜資訊的閱讀順序與日常管理效率。" role="UI / Product Designer" scope="功能重構、廣告系統、後台元件" platform="Desktop Web"/>
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
