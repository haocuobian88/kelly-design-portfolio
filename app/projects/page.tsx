import {sitePath} from '../site-path';

type ProjectCategory = '網站設計' | '平台系統' | 'APP UI';

const projects = [
  {id:1,category:'網站設計' as ProjectCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'/projects/luckmesh',kind:'internal',cover:'/luckmesh/cover.png'},
  {id:2,category:'網站設計' as ProjectCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'/projects/xincheng-en',kind:'internal',cover:'/xincheng-en/cover.png'},
  {id:3,category:'平台系統' as ProjectCategory,title:'論壇平台｜整體畫面及用戶功能重構、元件規劃',source:'/projects/luandou-frontend',kind:'internal',cover:'/luandou-frontend/cover.png'},
  {id:4,category:'平台系統' as ProjectCategory,title:'後台｜管理員功能重構、廣告系統、元件規劃',source:'/projects/luandou-backend',kind:'internal',cover:'/luandou-backend/cover.png'},
  {id:5,category:'平台系統' as ProjectCategory,title:'成人網站｜整體畫面及用戶功能重構、元件規劃',source:'/projects/bana',kind:'internal',cover:'/bana/cover.png'},
  {id:6,category:'APP UI' as ProjectCategory,title:'APP Design',source:'/projects/app-design',kind:'internal',cover:'/app-design/cover.avif'},
  {id:7,category:'APP UI' as ProjectCategory,title:'APP Design',source:'/projects/app-design-backend',kind:'internal',cover:'/app-design-backend/cover.avif'},
  {id:8,category:'網站設計' as ProjectCategory,title:'網站重構',source:'/projects/website-redesign',preview:'https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A12&show-proto-sidebar=1',kind:'dual',cover:'/website-redesign/cover.avif'},
  {id:9,category:'網站設計' as ProjectCategory,title:'小尾巴寵物美容｜預約與領養資訊平台',source:'/projects/little-tail',preview:'https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2',external:'https://little-tail-booking.kellylei9.chatgpt.site/',kind:'figma'},
  {id:10,category:'APP UI' as ProjectCategory,title:'App Design｜運動在家 Easy Home Sport',source:'/projects/easy-home-sport',kind:'internal',cover:'/easy-home-sport/cover.png'},
];

const embedUrl=(project:(typeof projects)[number])=>project.kind==='figma'||project.kind==='dual'?`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.preview||project.source)}`:project.source;

export default function ProjectsPage(){
  return <main>
    <aside className="profile-sidebar" aria-label="個人資料">
      <div className="profile-avatar" role="img" aria-label="Kelly Lei 的頭像預留位置"><span>KL</span></div>
      <h2>Kelly Lei</h2>
      <p className="profile-role">Visual &amp; Product Designer</p>
      <p className="profile-location">● Taipei, Taiwan</p>
      <p className="profile-experience"><b>10+ Years</b><span>Experience Includes:</span></p>
      <div className="experience-chips"><span>UI</span><span>WEB</span><span>GRAPHIC</span></div>
      <div className="profile-actions"><a className="message-button" href="mailto:kellylei9@gmail.com"><span>✉</span> Message</a><button className="save-button" aria-label="收藏作品集">♡</button></div>
      <nav className="profile-nav"><a className="active" href={sitePath('/#work')}><span>○</span> PORTFOLIO</a><a href={sitePath('/resume/')}><span>○</span> RESUME</a></nav>
      <p className="photo-hint">PHOTO PLACEHOLDER</p>
    </aside>
    <div className="site-content">
      <header className="topbar"><nav><a href={sitePath('/projects/')}>WORK</a><a href={sitePath('/#about')}>ABOUT</a><a href="mailto:kellylei9@gmail.com">CONTACT</a></nav></header>
      <section className="projects-page">
        <a className="projects-back" href={sitePath('/')}>← BACK HOME</a>
        <div className="projects-page-head"><p>FIGMA &amp; LIVE PROJECTS · 01—10</p><h1>Designed in Figma.<br/><i>Built for the real world.</i></h1></div>
        <div className="embed-grid">
          {projects.map(project=><article key={project.id} className="embed-project">
            <div className="embed-square"><div className="embed-toolbar"><span>{String(project.id).padStart(2,'0')}</span><span>{project.kind==='figma'?'FIGMA EMBED':project.kind==='internal'||project.kind==='dual'?'CASE STUDY':'FULL PAGE'}</span></div>{project.kind==='internal'||project.kind==='dual'?<a className="project-cover" href={sitePath(`${project.source}/`)}><img src={sitePath(project.cover!)} alt={`${project.title} 作品封面`}/><span>VIEW PROJECT →</span></a>:<iframe src={embedUrl(project)} title={project.title} loading="lazy" allowFullScreen allow="fullscreen"/>}</div>
            <div className="embed-caption"><div><p>{project.category}</p><h2><a href={project.source.startsWith('/')?sitePath(`${project.source}/`):project.source} target={project.source.startsWith('/')?undefined:'_blank'} rel={project.source.startsWith('/')?undefined:'noreferrer'}>{project.title}</a></h2></div><div className="project-links">{project.external&&<a href={project.external} target="_blank" rel="noreferrer">LIVE SITE ↗</a>}<a href={project.source.startsWith('/')?sitePath(`${project.source}/`):project.source} target={project.source.startsWith('/')?undefined:'_blank'} rel={project.source.startsWith('/')?undefined:'noreferrer'}>{project.source.startsWith('/')?'VIEW PROJECT →':project.kind==='figma'?'FIGMA ↗':'OPEN ORIGINAL ↗'}</a></div></div>
          </article>)}
        </div>
      </section>
      <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>
  </main>
}
