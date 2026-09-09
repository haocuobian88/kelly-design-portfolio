const figmaUrl='https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=PcqMVCxu2lCifXTG-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouFrontendPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:kellylei9@gmail.com">CONTACT</a></nav></header>
    <section className="case-summary"><p>論壇平台｜整體畫面及用戶功能重構、元件規劃</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>03</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥前台 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
