'use client';
import { useState, type PointerEvent as ReactPointerEvent } from 'react';

type Category = '全部' | '網站設計' | '平台系統' | 'APP UI';
const categories: Category[] = ['全部', '網站設計', '平台系統', 'APP UI'];
const projects = [
  {id:1,category:'網站設計' as Category,title:'品牌官網｜整體視覺設計、元件規劃',source:'https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh--Copy-?node-id=305-3431&t=vV3JKGISWzZreDXA-1',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:2,category:'網站設計' as Category,title:'品牌官網｜整體視覺設計、元件規劃',source:'https://www.figma.com/design/McFhXePpGqJ4OX27vk4wCf/%E6%98%9F%E5%9F%8EEN?node-id=0-1&p=f&t=Uvd6ud0BfwyAjsrY-0',kind:'figma'},
  {id:3,category:'平台系統' as Category,title:'論壇平台｜整體畫面及用戶功能重構、元件規劃',source:'https://www.figma.com/design/NJ9sytsTnmPb5vvCAXkRGn/%E4%BA%82%E9%AC%A5%E5%89%8D%E5%8F%B0-%E6%A1%8C%E6%A9%9F%E7%89%88?node-id=376-139615&t=vV3JKGISWzZreDXA-1',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:4,category:'平台系統' as Category,title:'後台｜管理員功能重構、廣告系統、元件規劃',source:'https://www.figma.com/design/IZstlpMcHwZrNR23u7W1qO/%E4%BA%82%E9%AC%A5%E5%BE%8C%E5%8F%B0?t=WKE1NNHbFawxEF6s-0',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:5,category:'平台系統' as Category,title:'成人網站｜整體畫面及用戶功能重構、元件規劃',source:'https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?t=HWUBJb5IZLureJua-0',external:'https://mei-ya.com.tw/',kind:'figma'},
  {id:6,category:'APP UI' as Category,title:'APP UI 前台',source:'https://kellylei9.wixsite.com/portfolio/app-landing-page',kind:'website'},
  {id:7,category:'APP UI' as Category,title:'APP UI 後台',source:'https://kellylei9.wixsite.com/portfolio/app-landing-page-1',kind:'website'},
  {id:8,category:'網站設計' as Category,title:'網站重構',source:'https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-4857&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4857',kind:'figma'},
  {id:9,category:'網站設計' as Category,title:'小尾巴寵物美容｜預約與領養資訊平台',source:'https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2',external:'https://little-tail-booking.kellylei9.chatgpt.site/',kind:'figma'},
];
const embedUrl=(project:(typeof projects)[number])=>project.kind==='figma'?`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.source)}`:project.source;

export default function Home(){
  const [active,setActive]=useState<Category>('全部');
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
  const filtered=active==='全部'?projects:projects.filter(p=>p.category===active);
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
        <a className="active" href="#work"><span>▣</span> Portfolio</a>
      </nav>
      <p className="photo-hint">PHOTO PLACEHOLDER</p>
    </aside>
    <div className="site-content">
    <header className="topbar">
      <a href="#top" className="monogram">K.</a>
      <nav className={menu?'open':''}><a href="#work">WORK</a><a href="#play">PLAY</a><a href="#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav>
      <button onClick={()=>setMenu(!menu)} aria-label="切換選單">{menu?'CLOSE':'MENU'}</button>
    </header>

    <section className="intro" id="top">
      <p className="hello">KELLY LEI · VISUAL &amp; PRODUCT DESIGN</p>
      <h1><span>Visual</span><br/><i>Designer</i></h1>
      <div className="work-scene" aria-label="設計工具、裝置與靈感物件的動態展示" onPointerMove={repelAssets} onPointerLeave={resetAssets}>
        {[1,2,3,4,5,6,7,8].map(icon=><span key={icon} className={`floating-icon icon-${icon}`} aria-hidden="true"><img src={`/visual/icon-${icon}.png`} alt=""/></span>) }
      </div>
      <p className="intro-note">Designing thoughtful digital experiences<br/>and visual stories from Taipei.</p>
      <a className="hero-cta" href="#work">VIEW PROJECTS <span>→</span></a>
    </section>

    <section className="portfolio" id="work">
      <div className="work-heading"><p>SELECTED WORK · 2024—2026</p><h2>Projects, experiments<br/>and things I care about.</h2></div>
      <div className="filters" role="group" aria-label="作品分類">{categories.map(c=><button key={c} onClick={()=>setActive(c)} className={active===c?'active':''}>{c}</button>)}</div>
      <div className="embed-grid">
        {filtered.map(project=><article key={project.id} className="embed-project">
          <div className="embed-square">
            <div className="embed-toolbar"><span>0{project.id}</span><span>{project.kind==='figma'?'FIGMA EMBED':'FULL PAGE'}</span></div>
            <iframe src={embedUrl(project)} title={project.title} loading="lazy" allowFullScreen allow="fullscreen"/>
          </div>
          <div className="embed-caption"><div><p>{project.category}</p><h3>{project.title}</h3></div><div className="project-links">{project.external&&<a href={project.external} target="_blank" rel="noreferrer">LIVE SITE ↗</a>}<a href={project.source} target="_blank" rel="noreferrer">{project.kind==='figma'?'FIGMA ↗':'OPEN ORIGINAL ↗'}</a></div></div>
        </article>)}
      </div>
    </section>

    <section className="play" id="play"><p>PLAYGROUND</p><div className="ticker">TYPE · COLOR · MOTION · IDEAS · TYPE · COLOR · MOTION · IDEAS ·</div></section>
    <section className="about" id="about"><p className="label">ABOUT</p><h2>我喜歡把複雜的事情，<br/><i>整理成簡單而有感的體驗。</i></h2><div className="about-copy"><p>從介面、活動網站到行銷視覺，我在意的不只是畫面好不好看，而是每個選擇是否真正回應了問題。保持好奇、反覆推敲，然後留下剛剛好的設計。</p><a href="mailto:hello@example.com">LET’S WORK TOGETHER ↗</a></div></section>
    <footer><div><span>KELLY LEI</span><span>VISUAL & PRODUCT DESIGNER</span></div><a href="mailto:hello@example.com">hello@example.com</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>

  </main>
}
