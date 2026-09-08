'use client';
import { useState, type PointerEvent as ReactPointerEvent } from 'react';

type WorkCategory = '全部' | '網站設計' | '平台系統' | 'APP UI';
const workCategories: WorkCategory[] = ['全部','網站設計','平台系統','APP UI'];
const workProjects = [
  {id:1,category:'網站設計' as WorkCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'/projects/luckmesh',kind:'internal',cover:'/luckmesh/cover.png'},
  {id:2,category:'網站設計' as WorkCategory,title:'品牌官網｜整體視覺設計、元件規劃',source:'/projects/xincheng-en',kind:'internal',cover:'/xincheng-en/cover.png'},
  {id:3,category:'平台系統' as WorkCategory,title:'論壇平台｜整體畫面及用戶功能重構、元件規劃',source:'/projects/luandou-frontend',kind:'internal',cover:'/luandou-frontend/cover.png'},
  {id:4,category:'平台系統' as WorkCategory,title:'後台｜管理員功能重構、廣告系統、元件規劃',source:'/projects/luandou-backend',kind:'internal',cover:'/luandou-backend/cover.png'},
  {id:5,category:'平台系統' as WorkCategory,title:'成人網站｜整體畫面及用戶功能重構、元件規劃',source:'https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?t=HWUBJb5IZLureJua-0',kind:'figma'},
  {id:6,category:'APP UI' as WorkCategory,title:'APP Design｜用戶端',source:'/projects/app-design',kind:'internal',cover:'/app-design/cover.avif'},
  {id:7,category:'APP UI' as WorkCategory,title:'APP Design｜商家端',source:'/projects/app-design-backend',kind:'internal',cover:'/app-design-backend/cover.avif'},
  {id:8,category:'網站設計' as WorkCategory,title:'網站重構',source:'/projects/website-redesign',preview:'https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A12&show-proto-sidebar=1',kind:'dual',cover:'/website-redesign/cover.avif'},
  {id:9,category:'網站設計' as WorkCategory,title:'小尾巴寵物美容｜預約與領養資訊平台',source:'https://little-tail-booking.kellylei9.chatgpt.site/',kind:'website'},
];
const workEmbed=(project:(typeof workProjects)[number])=>`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.preview||project.source)}`;
export default function Home(){
  const [active,setActive]=useState<WorkCategory>('全部');
  const [menu,setMenu]=useState(false);
  const repelAssets=(event:ReactPointerEvent<HTMLDivElement>)=>{
    event.currentTarget.querySelectorAll<HTMLElement>('.floating-icon').forEach(asset=>{
      const box=asset.getBoundingClientRect();
      const x=box.left+box.width/2-event.clientX;
      const y=box.top+box.height/2-event.clientY;
      const distance=Math.max(Math.hypot(x,y),1);
      const strength=Math.max(0,1-distance/190)*46;
      asset.style.setProperty('--escape-x',`${x/distance*strength}px`);
      asset.style.setProperty('--escape-y',`${y/distance*strength}px`);
    });
  };
  const resetAssets=(event:ReactPointerEvent<HTMLDivElement>)=>event.currentTarget.querySelectorAll<HTMLElement>('.floating-icon').forEach(asset=>{
    asset.style.setProperty('--escape-x','0px');asset.style.setProperty('--escape-y','0px');
  });
  const filteredProjects=active==='全部'?workProjects:workProjects.filter(project=>project.category===active);
  return <main>
    <aside className="profile-sidebar" aria-label="個人資料">
      <div className="profile-avatar" role="img" aria-label="Kelly Lei 的頭像預留位置"><span>KL</span></div>
      <div className="availability"><i/> OPEN TO WORK</div>
      <h2>Kelly Lei</h2>
      <p className="profile-role">Visual & Product Designer</p>
      <p className="profile-location">● Taipei, Taiwan</p>
      <p className="profile-experience"><b>10+ Years</b><span>Experience Includes:</span></p>
      <div className="experience-chips" aria-label="專業領域"><span>UI</span><span>WEB</span><span>GRAPHIC</span></div>
      <div className="profile-actions">
        <a className="message-button" href="mailto:hello@example.com"><span>✉</span> Message</a>
        <button className="save-button" aria-label="收藏作品集">♡</button>
      </div>
      <nav className="profile-nav">
        <a href="#about"><span>◎</span> Profile</a>
        <a className="active" href="/projects"><span>▣</span> Portfolio</a>
      </nav>
      <p className="photo-hint">PHOTO PLACEHOLDER</p>
    </aside>
    <div className="site-content">
    <header className="topbar">
      <a href="#top" className="monogram">K.</a>
      <nav className={menu?'open':''}><a href="/projects">WORK</a><a href="#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav>
      <button onClick={()=>setMenu(!menu)} aria-label="切換選單">{menu?'CLOSE':'MENU'}</button>
    </header>

    <section className="intro" id="top">
      <p className="hello">KELLY LEI · VISUAL &amp; PRODUCT DESIGN</p>
      <h1><span>Visual</span><br/><i>Designer</i></h1>
      <div className="work-scene" aria-label="設計工具、裝置與靈感物件的動態展示" onPointerMove={repelAssets} onPointerLeave={resetAssets}>
        {[1,2,3,4,5,6,7,8].map(icon=><span key={icon} className={`floating-icon icon-${icon}`} aria-hidden="true"><img src={`/visual/icon-${icon}.png`} alt=""/></span>) }
      </div>
      <p className="intro-note">Designing thoughtful digital experiences<br/>and visual stories from Taipei.</p>
      <a className="hero-cta" href="/projects">VIEW PROJECTS <span>→</span></a>
    </section>

    <section className="portfolio" id="work">
      <div className="work-heading"><p>FIGMA &amp; LIVE PROJECTS · 01—09</p><h2>Designed in Figma.<br/><i>Built for the real world.</i></h2></div>
      <div className="filters" role="group" aria-label="作品分類">{workCategories.map(c=><button key={c} onClick={()=>setActive(c)} className={active===c?'active':''}>{c}</button>)}</div>
      <div className="masonry">
        {filteredProjects.map(project=><article key={project.id} className="project work-project-card">
          <a href={project.source} target={project.kind==='internal'||project.kind==='dual'?undefined:'_blank'} rel={project.kind==='internal'||project.kind==='dual'?undefined:'noreferrer'}>
            <div className="visual work-project-visual">
              <div className="embed-toolbar"><span>{String(project.id).padStart(2,'0')}</span><span>{project.kind==='figma'?'FIGMA EMBED':project.kind==='internal'||project.kind==='dual'?'CASE STUDY':'LIVE WEBSITE'}</span></div>
              <div className="work-project-media">{project.kind==='internal'||project.kind==='dual'?<img src={project.cover} alt={`${project.title} 作品封面`}/>:project.kind==='figma'?<iframe src={workEmbed(project)} title={project.title} loading="lazy" aria-hidden="true"/>:<div className="live-project-preview"><span>KELLY LEI · WEB DESIGN</span><strong>Little Tail</strong><small>LIVE WEBSITE</small></div>}</div>
            </div>
            <div className="caption"><div><h3>{project.title}</h3></div></div>
          </a>
        </article>)}
      </div>
    </section>

    <section className="about" id="about"><p className="label">ABOUT</p><div className="about-copy"><p>我喜歡把複雜的事情，整理成簡單而有感的體驗。從介面、活動網站到行銷視覺，我在意的不只是畫面好不好看，而是每個選擇是否真正回應了問題。保持好奇、反覆推敲，然後留下剛剛好的設計。</p></div></section>
    <footer><div><span>KELLY LEI</span><span>VISUAL & PRODUCT DESIGNER</span></div><a href="mailto:hello@example.com">hello@example.com</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>

  </main>
}
