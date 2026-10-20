'use client';
import { useEffect, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import ContactModal from './components/ContactModal';
import {sitePath} from './site-path';

type WorkCategory = '全部' | '網站設計' | '平台系統' | 'APP UI';
const workCategories: WorkCategory[] = ['全部','網站設計','平台系統','APP UI'];
const workProjects = [
  {id:1,category:'網站設計' as WorkCategory,title:'LuckMesh｜跨裝置遊戲品牌體驗',subtitle:'品牌官網、視覺系統與元件規劃',featured:true,source:'/projects/luckmesh',kind:'internal',cover:'/luckmesh/cover.png'},
  {id:2,category:'網站設計' as WorkCategory,title:'星城 EN｜娛樂平台品牌官網',subtitle:'跨裝置介面與品牌視覺規劃',featured:false,source:'/projects/xincheng-en',kind:'internal',cover:'/xincheng-en/cover.png'},
  {id:3,category:'平台系統' as WorkCategory,title:'遊戲大亂鬥｜內容論壇體驗重構',subtitle:'資訊架構、會員功能與元件系統',featured:true,source:'/projects/luandou-frontend',kind:'internal',cover:'/luandou-frontend/cover.png'},
  {id:4,category:'平台系統' as WorkCategory,title:'亂鬥後台｜管理與廣告系統設計',subtitle:'複雜功能流程與後台元件規劃',featured:true,source:'/projects/luandou-backend',kind:'internal',cover:'/luandou-backend/cover.png'},
  {id:5,category:'平台系統' as WorkCategory,title:'BanaBana｜內容平台體驗重構',subtitle:'內容探索、會員功能與介面系統',featured:false,source:'/projects/bana',kind:'internal',cover:'/bana/cover.png'},
  {id:6,category:'APP UI' as WorkCategory,title:'美耶｜到府美業服務 App',subtitle:'預約流程、UI 介面與新功能規劃',featured:false,source:'/projects/app-design',kind:'internal',cover:'/app-design/cover.avif'},
  {id:7,category:'APP UI' as WorkCategory,title:'美耶商家端｜服務管理 App',subtitle:'接單、訂單與服務狀態流程',featured:false,source:'/projects/app-design-backend',kind:'internal',cover:'/app-design-backend/cover.avif'},
  {id:8,category:'網站設計' as WorkCategory,title:'BabyHome｜響應式網站重構',subtitle:'桌機與手機資訊層級重新規劃',featured:false,source:'/projects/website-redesign',preview:'https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A12&show-proto-sidebar=1',kind:'dual',cover:'/website-redesign/cover.avif'},
  {id:9,category:'網站設計' as WorkCategory,title:'小尾巴｜寵物美容預約平台',subtitle:'預約與領養資訊的響應式體驗',featured:false,source:'/projects/little-tail',preview:'https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2',kind:'figma'},
  {id:10,category:'APP UI' as WorkCategory,title:'Easy Home Sport｜居家運動 App',subtitle:'課程探索、訓練與進度紀錄體驗',featured:true,source:'/projects/easy-home-sport',kind:'internal',cover:'/easy-home-sport/cover.png'},
];
const workEmbed=(project:(typeof workProjects)[number])=>`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.preview||project.source)}`;

function ProjectCard({project,index,compact=false}:{project:(typeof workProjects)[number],index:number,compact?:boolean}){
  return <article className={`project work-project-card motion-reveal${compact?' compact-project-card':''}`} style={{'--reveal-delay':`${Math.min(index,5)*70}ms`} as CSSProperties}>
    <a href={project.source.startsWith('/')?sitePath(`${project.source}/`):project.source} target={project.source.startsWith('/')?undefined:'_blank'} rel={project.source.startsWith('/')?undefined:'noreferrer'}>
      <div className="visual work-project-visual">
        <div className="embed-toolbar"><span>{String(project.id).padStart(2,'0')}</span><span>{project.kind==='figma'?'FIGMA EMBED':project.kind==='internal'||project.kind==='dual'?'CASE STUDY':'LIVE WEBSITE'}</span></div>
        <div className="work-project-media">{project.kind==='internal'||project.kind==='dual'?<img src={sitePath(project.cover!)} alt={`${project.title} 作品封面`}/>:project.kind==='figma'?<iframe src={workEmbed(project)} title={project.title} loading="lazy" aria-hidden="true"/>:<div className="live-project-preview"><span>KELLY LEI · WEB DESIGN</span><strong>Little Tail</strong><small>LIVE WEBSITE</small></div>}</div>
      </div>
      <div className="caption"><div>{project.featured&&!compact&&<span className="featured-label">FEATURED CASE</span>}<h3>{project.title}</h3><p>{project.subtitle}</p></div></div>
    </a>
  </article>;
}

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
  const featuredProjects=workProjects.filter(project=>project.featured);
  const otherProjects=workProjects.filter(project=>!project.featured);
  useEffect(()=>{
    const items=document.querySelectorAll<HTMLElement>('.motion-reveal');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }),{threshold:.12,rootMargin:'0px 0px -5%'});
    items.forEach(item=>observer.observe(item));
    return ()=>observer.disconnect();
  },[active]);
  return <main>
    <aside className="profile-sidebar" aria-label="個人資料">
      <div className="profile-avatar" role="img" aria-label="Kelly Lei 的頭像預留位置"><span>KL</span></div>
      <h2>Kelly Lei</h2>
      <p className="profile-role">Visual & Product Designer</p>
      <p className="profile-location">● Taipei, Taiwan</p>
      <p className="profile-experience"><b>10+ Years</b><span>Experience Includes:</span></p>
      <div className="experience-chips" aria-label="專業領域"><span>UI</span><span>WEB</span><span>GRAPHIC</span></div>
      <div className="profile-actions">
        <a className="message-button" href="mailto:kellylei9@gmail.com"><span>✉</span> Message</a>
        <button className="save-button" aria-label="收藏作品集">♡</button>
      </div>
      <nav className="profile-nav">
        <a className="active" href={sitePath('/#work')}><span>○</span> PORTFOLIO</a>
        <a href={sitePath('/resume/')}><span>○</span> RESUME</a>
      </nav>
      <p className="photo-hint">PHOTO PLACEHOLDER</p>
    </aside>
    <div className="site-content">
    <header className="topbar">
      <nav className={menu?'open':''}><a href="#work">WORK</a><a href="#about">ABOUT</a><ContactModal/></nav>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="切換選單">{menu?'CLOSE':'MENU'}</button>
    </header>

    <section className="intro" id="top" style={{backgroundImage:`url(${sitePath('/visual/BG.png')})`}}>
      <p className="hello">KELLY LEI · VISUAL &amp; PRODUCT DESIGN</p>
      <h1><span>Visual</span><br/><i>Designer</i></h1>
      <div className="work-scene" aria-label="設計工具、裝置與靈感物件的動態展示" onPointerMove={repelAssets} onPointerLeave={resetAssets}>
        {[1,2,3,4,5,6,7,8].map(icon=><span key={icon} className={`floating-icon icon-${icon}`} aria-hidden="true"><img src={sitePath(`/visual/icon-${icon}.png`)} alt=""/></span>) }
      </div>
      <p className="intro-note">Designing thoughtful digital experiences<br/>and visual stories from Taipei.</p>
      <a className="hero-cta" href={sitePath('/projects/')}>VIEW PROJECTS <span>→</span></a>
    </section>

    <section className="positioning-statement motion-reveal" aria-label="專業定位">
      <p>UI / PRODUCT DESIGNER · TAIPEI</p>
      <div>
        <h2>把複雜需求整理成<br/>清楚、可使用，也能落地的介面。</h2>
        <p>專注於內容平台、後台系統與跨裝置數位體驗；從資訊架構、操作流程到視覺與元件規範，讓每個設計選擇都回應真正的問題。</p>
      </div>
    </section>

    <section className="portfolio" id="work">
      <div className="work-heading motion-reveal"><p>SELECTED WORK · 4 FEATURED CASES + 6 MORE</p><div><h2>從品牌官網到複雜平台，<br/>把需求整理成可落地的體驗。</h2><p className="work-heading-note">精選案例標示了最能呈現產品思考、系統規劃與跨裝置設計能力的專案。</p></div></div>
      <div className="filters motion-reveal" role="group" aria-label="作品分類">{workCategories.map(c=><button key={c} onClick={()=>setActive(c)} className={active===c?'active':''}>{c}</button>)}</div>
      {active==='全部'?<>
        <section className="portfolio-group" aria-labelledby="featured-work-heading">
          <div className="portfolio-group-heading motion-reveal"><span>01</span><h3 id="featured-work-heading">Featured Cases</h3><p>最能呈現產品思考與系統規劃的四個案例</p></div>
          <div className="masonry featured-projects">{featuredProjects.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div>
        </section>
        <section className="portfolio-group other-work" aria-labelledby="other-work-heading">
          <div className="portfolio-group-heading motion-reveal"><span>02</span><h3 id="other-work-heading">Other Projects</h3><p>更多品牌、網站與行動產品設計</p></div>
          <div className="other-projects">{otherProjects.map((project,index)=><ProjectCard key={project.id} project={project} index={index} compact/>)}</div>
        </section>
      </>:<div className="masonry filtered-projects">{filteredProjects.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div>}
    </section>

    <section className="about motion-reveal" id="about"><p className="label">ABOUT</p><div className="about-copy"><p>我喜歡把複雜的事情，整理成簡單而有感的體驗。從介面、活動網站到行銷視覺，我在意的不只是畫面好不好看，而是每個選擇是否真正回應了問題。保持好奇、反覆推敲，然後留下剛剛好的設計。</p></div></section>
    <footer><div><span>KELLY LEI</span><span>VISUAL & PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>

  </main>
}
