const figmaUrl='https://www.figma.com/design/McFhXePpGqJ4OX27vk4wCf/%E6%98%9F%E5%9F%8EEN--Copy-?node-id=0-1&t=vV3JKGISWzZreDXA-1';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function XinchengEnPage(){
  return <main className="luckmesh-page">
    <header className="case-nav"><a href="/" className="monogram">K.</a><nav><a href="/projects">ALL PROJECTS</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="luckmesh-intro">
      <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
      <div><p>WEB DESIGN · UI SYSTEM</p><h1>星城 EN</h1><p>品牌官網｜整體視覺設計、元件規劃</p></div>
    </section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>02</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="星城 EN Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
