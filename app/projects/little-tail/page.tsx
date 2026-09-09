import BackButton from '../../components/BackButton';

const figmaUrl='https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LittleTailPage(){
  return <main className="luckmesh-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="luckmesh-intro">
      <BackButton/>
      <div><p>WEBSITE DESIGN · UI / UX</p><h1>Little Tail</h1><p>小尾巴寵物美容｜預約與領養資訊平台</p></div>
    </section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>09</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="小尾巴寵物美容 Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
