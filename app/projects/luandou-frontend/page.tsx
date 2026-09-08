const figmaUrl='https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=PcqMVCxu2lCifXTG-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuandouFrontendPage(){
  return <main className="luckmesh-page">
    <header className="case-nav"><a href="/" className="monogram">K.</a><nav><a href="/projects">ALL PROJECTS</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="luckmesh-intro">
      <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
      <div><p>PLATFORM DESIGN · UI SYSTEM</p><h1>亂鬥前台</h1><p>論壇平台｜整體畫面及用戶功能重構、元件規劃</p></div>
    </section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>03</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="亂鬥前台 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
