import ProfileSidebar from '../../components/ProfileSidebar';

const figmaUrl='https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LittleTailPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="case-summary"><p>小尾巴寵物美容｜預約與領養資訊平台</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>09</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="小尾巴寵物美容 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
