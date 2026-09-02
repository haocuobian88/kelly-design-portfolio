'use client';
import { useEffect, useState } from 'react';

type Category = '全部' | 'UI 設計' | '一頁式活動頁' | '行銷製作物';
const categories: Category[] = ['全部', 'UI 設計', '一頁式活動頁', '行銷製作物'];
const projects = [
  { id: 1, category:'UI 設計' as Category, title:'MORI 日常理財 App', en:'A calmer way to understand everyday money.', year:'2026', color:'#cbd7c2', type:'mobile', tall:true },
  { id: 2, category:'一頁式活動頁' as Category, title:'Future Now 創意年會', en:'A digital stage for ideas in motion.', year:'2025', color:'#b9c6e8', type:'web', tall:false },
  { id: 3, category:'行銷製作物' as Category, title:'植物系生活提案', en:'A gentle campaign made to grow.', year:'2025', color:'#d9b8a9', type:'social', tall:false },
  { id: 4, category:'UI 設計' as Category, title:'Nook 空間預約平台', en:'Finding the right space, made effortless.', year:'2024', color:'#d8cfb4', type:'dashboard', tall:true },
];

function Mockup({project}:{project:(typeof projects)[number]}) {
  if(project.type==='mobile') return <div className="mock mobile"><div className="phone back"/><div className="phone front"><small>9:41</small><b>Today</b><strong>$38,560</strong><i/><i/><i/></div></div>;
  if(project.type==='web') return <div className="mock"><div className="browser"><small>FUTURE / NOW</small><b>Ideas<br/>in motion.</b><span>OCT 18—20</span></div></div>;
  if(project.type==='social') return <div className="mock social"><div>GROW<br/><em>WITH</em><br/>CARE</div><div>PLANT<br/>YOUR<br/><em>DAY</em></div><div>綠意<br/>日常</div></div>;
  return <div className="mock"><div className="screen"><small>NOOK</small><b>Find your<br/>perfect space.</b><span/><div><i/><i/><i/></div></div></div>;
}

export default function Home(){
  const [active,setActive]=useState<Category>('全部');
  const [selected,setSelected]=useState<(typeof projects)[number]|null>(null);
  const [menu,setMenu]=useState(false);
  useEffect(()=>{document.body.style.overflow=selected?'hidden':'';return()=>{document.body.style.overflow=''}},[selected]);
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
      <div className="work-scene" aria-label="設計工具、裝置與靈感物件的動態展示">
        {[1,2,3,4,5,6,8].map(icon=><img key={icon} className={`floating-icon icon-${icon}`} src={`/visual/icon-${icon}.png`} alt="" aria-hidden="true"/>) }
      </div>
      <p className="intro-note">Designing thoughtful digital experiences<br/>and visual stories from Taipei.</p>
      <a className="hero-cta" href="#work">VIEW PROJECTS <span>→</span></a>
    </section>

    <section className="portfolio" id="work">
      <div className="work-heading"><p>SELECTED WORK · 2024—2026</p><h2>Projects, experiments<br/>and things I care about.</h2></div>
      <div className="filters" role="group" aria-label="作品分類">{categories.map(c=><button key={c} onClick={()=>setActive(c)} className={active===c?'active':''}>{c}</button>)}</div>
      <div className="masonry">
        {filtered.map((project,index)=><article key={project.id} className={`project ${project.tall?'tall':''}`} tabIndex={0} onClick={()=>setSelected(project)} onKeyDown={e=>e.key==='Enter'&&setSelected(project)}>
          <div className="visual" style={{background:project.color}}><span className="project-no">0{index+1}</span><Mockup project={project}/><span className="open-label">VIEW CASE ↗</span></div>
          <div className="caption"><div><h3>{project.en}</h3><p>{project.title}</p></div><div><span>{project.category}</span><span>{project.year}</span></div></div>
        </article>)}
      </div>
    </section>

    <section className="play" id="play"><p>PLAYGROUND</p><div className="ticker">TYPE · COLOR · MOTION · IDEAS · TYPE · COLOR · MOTION · IDEAS ·</div></section>
    <section className="about" id="about"><p className="label">ABOUT</p><h2>我喜歡把複雜的事情，<br/><i>整理成簡單而有感的體驗。</i></h2><div className="about-copy"><p>從介面、活動網站到行銷視覺，我在意的不只是畫面好不好看，而是每個選擇是否真正回應了問題。保持好奇、反覆推敲，然後留下剛剛好的設計。</p><a href="mailto:hello@example.com">LET’S WORK TOGETHER ↗</a></div></section>
    <footer><div><span>KELLY LEI</span><span>VISUAL & PRODUCT DESIGNER</span></div><a href="mailto:hello@example.com">hello@example.com</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
    </div>

    {selected&&<div className="modal" role="dialog" aria-modal="true" onMouseDown={e=>e.target===e.currentTarget&&setSelected(null)}>
      <div className="modal-card"><button onClick={()=>setSelected(null)} aria-label="關閉">CLOSE ×</button><div className="case-head"><p>{selected.category} · {selected.year}</p><h2>{selected.title}</h2><span>{selected.en}</span></div><div className="figma" style={{background:selected.color}}><div className="figma-bar"><span>● FIGMA PROTOTYPE</span><span>EMBED PREVIEW</span></div><Mockup project={selected}/><p>替換為你的 Figma 分享網址後，可在此直接操作完整原型</p></div></div>
    </div>}
  </main>
}
