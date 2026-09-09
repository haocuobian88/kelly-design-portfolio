const figmaUrl='https://www.figma.com/design/McFhXePpGqJ4OX27vk4wCf/%E6%98%9F%E5%9F%8EEN--Copy-?node-id=0-1&t=vV3JKGISWzZreDXA-1';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function XinchengEnPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:kellylei9@gmail.com">CONTACT</a></nav></header>
    <section className="case-summary"><p>品牌官網｜整體視覺設計、元件規劃</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>02</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="星城 EN Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
