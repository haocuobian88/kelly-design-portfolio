const figmaUrl='https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?node-id=29035-48227&t=yITNoYWb1mhKVruW-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function BanaPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:kellylei9@gmail.com">CONTACT</a></nav></header>
    <section className="case-summary"><p>成人網站｜整體畫面及用戶功能重構、元件規劃</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>05</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="BANA Web UI Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
