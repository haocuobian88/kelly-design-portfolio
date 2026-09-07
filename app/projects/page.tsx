type ProjectCategory = '網站設計' | '平台系統' | 'APP UI';

const projects = [
  {id:1,category:'網站設計' as ProjectCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh--Copy-?node-id=305-3431&t=vV3JKGISWzZreDXA-1',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:2,category:'網站設計' as ProjectCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'https://www.figma.com/design/McFhXePpGqJ4OX27vk4wCf/%E6%98%9F%E5%9F%8EEN?node-id=0-1&p=f&t=Uvd6ud0BfwyAjsrY-0',kind:'figma'},
  {id:3,category:'平台系統' as ProjectCategory,title:'論壇平台｜整體畫面及用戶功能重構、元件規劃',source:'https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=vV3JKGISWzZreDXA-1',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:4,category:'平台系統' as ProjectCategory,title:'後台｜管理員功能重構、廣告系統、元件規劃',source:'https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=WKE1NNHbFawxEF6s-0',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:5,category:'平台系統' as ProjectCategory,title:'成人網站｜整體畫面及用戶功能重構、元件規劃',source:'https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?t=HWUBJb5IZLureJua-0',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:6,category:'APP UI' as ProjectCategory,title:'APP UI 前台',source:'https://kellylei9.wixsite.com/portfolio/app-landing-page',kind:'website'},
  {id:7,category:'APP UI' as ProjectCategory,title:'APP UI 後台',source:'https://kellylei9.wixsite.com/portfolio/app-landing-page-1',kind:'website'},
  {id:8,category:'網站設計' as ProjectCategory,title:'網站重構',source:'https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-4857&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4857',kind:'figma'},
  {id:9,category:'網站設計' as ProjectCategory,title:'小尾巴寵物美容｜預約與領養資訊平台',source:'https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2',external:'https://little-tail-booking.kellylei9.chatgpt.site/',kind:'figma'},
];

const embedUrl=(project:(typeof projects)[number])=>project.kind==='figma'?`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.source)}`:project.source;

export default function ProjectsPage(){
  return <main>
    <aside className="profile-sidebar" aria-label="個人資料">
      <div className="profile-avatar" role="img" aria-label="Kelly Lei 的頭像預留位置"><span>KL</span></div>
      <div className="availability"><i/> OPEN TO WORK</div>
      <h2>Kelly Lei</h2>
      <p className="profile-role">Visual &amp; Product Designer</p>
      <p className="profile-location">● Taipei, Taiwan</p>
      <p className="profile-experience"><b>10+ Years</b><span>Experience Includes:</span></p>
      <div className="experience-chips"><span>UI</span><span>WEB</span><span>GRAPHIC</span></div>
      <div className="profile-actions"><a className="message-button" href="mailto:hello@example.com"><span>✉</span> Message</a><button className="save-button" aria-label="收藏作品集">♡</button></div>
      <nav className="profile-nav"><a href="/#about"><span>◎</span> Profile</a><a className="active" href="/projects"><span>▣</span> Portfolio</a></nav>
      <p className="photo-hint">PHOTO PLACEHOLDER</p>
    </aside>
    <div className="site-content">
      <header className="topbar"><a href="/" className="monogram">K.</a><nav><a href="/projects">WORK</a><a href="/#play">PLAY</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
      <section className="projects-page">
        <a className="projects-back" href="/">← BACK HOME</a>
        <div className="projects-page-head"><p>FIGMA &amp; LIVE PROJECTS · 01—09</p><h1>Designed in Figma.<br/><i>Built for the real world.</i></h1></div>
        <div className="embed-grid">
          {projects.map(project=><article key={project.id} className="embed-project">
            <div className="embed-square"><div className="embed-toolbar"><span>0{project.id}</span><span>{project.kind==='figma'?'FIGMA EMBED':'FULL PAGE'}</span></div><iframe src={embedUrl(project)} title={project.title} loading="lazy" allowFullScreen allow="fullscreen"/></div>
            <div className="embed-caption"><div><p>{project.category}</p><h2>{project.title}</h2></div><div className="project-links">{project.external&&<a href={project.external} target="_blank" rel="noreferrer">LIVE SITE ↗</a>}<a href={project.source} target="_blank" rel="noreferrer">{project.kind==='figma'?'FIGMA ↗':'OPEN ORIGINAL ↗'}</a></div></div>
          </article>)}
        </div>
      </section>
      <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="mailto:hello@example.com">hello@example.com</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>
  </main>
}
