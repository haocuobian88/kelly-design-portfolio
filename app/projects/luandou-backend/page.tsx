const figmaUrl='https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=UEm0NWFAAjYfTr1I-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouBackendPage(){
  return <main className="luckmesh-page">
    <header className="case-nav"><a href="/" className="monogram">K.</a><nav><a href="/projects">ALL PROJECTS</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="luckmesh-intro">
      <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
      <div><p>ADMIN PLATFORM · UI SYSTEM</p><h1>亂鬥後台</h1><p>後台｜管理員功能重構、廣告系統、元件規劃</p></div>
    </section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>04</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥後台 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
