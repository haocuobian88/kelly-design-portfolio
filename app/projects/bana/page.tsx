const figmaUrl='https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?node-id=29035-48227&t=yITNoYWb1mhKVruW-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function BanaPage(){
  return <main className="luckmesh-page">
    <header className="case-nav"><a href="/" className="monogram">K.</a><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="luckmesh-intro">
      <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
      <div><p>WEB PLATFORM · UI SYSTEM</p><h1>BANA</h1><p>成人網站｜整體畫面及用戶功能重構、元件規劃</p></div>
    </section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>05</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="BANA Web UI Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
