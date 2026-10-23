'use client';
import { useEffect, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import ProfileSidebar from './components/ProfileSidebar';
import TopBar from './components/TopBar';
import SiteFooter from './components/SiteFooter';
import {sitePath} from './site-path';
import {profile, projects, projectNumber, experience, skills, type Project, type WorkCategory} from './site-data';

type Filter = '全部' | WorkCategory;
const filters: Filter[] = ['全部','網站設計','平台系統','APP UI'];

function ProjectCard({project,index,compact=false}:{project:Project,index:number,compact?:boolean}){
  return <article className={`project work-project-card motion-reveal${compact?' compact-project-card':''}`} style={{'--reveal-delay':`${Math.min(index,5)*70}ms`} as CSSProperties}>
    <a href={sitePath(`/projects/${project.slug}/`)}>
      <div className="visual work-project-visual">
        <div className="embed-toolbar"><span>{projectNumber(project.slug)}</span><span>CASE STUDY</span></div>
        <div className="work-project-media"><img src={sitePath(project.cover)} alt={`${project.title} 作品封面`} loading="lazy"/></div>
      </div>
      <div className="caption"><div>
        <div className="card-labels">{project.featured&&!compact&&<span className="featured-label">FEATURED CASE</span>}{project.sideProject&&<span className="featured-label side-label">SIDE PROJECT</span>}</div>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <p className="caption-meta">{project.category} · {project.sideProject?'自主練習 · ':''}{project.role}</p>
      </div></div>
    </a>
  </article>;
}

export default function Home(){
  const [active,setActive]=useState<Filter>('全部');
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
  const filteredProjects=active==='全部'?projects:projects.filter(project=>project.category===active);
  const featuredProjects=projects.filter(project=>project.featured);
  const otherProjects=projects.filter(project=>!project.featured);
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
    <ProfileSidebar/>
    <div className="site-content">
    <TopBar/>

    <section className="intro" id="top" style={{backgroundImage:`url(${sitePath('/visual/hero-bg.jpg')})`}}>
      <div className="work-scene" aria-hidden="true" onPointerMove={repelAssets} onPointerLeave={resetAssets}>
        {[1,2,3,4,5,6,7,8].map(icon=><span key={icon} className={`floating-icon icon-${icon}`}><img src={sitePath(`/visual/icon-${icon}.webp`)} alt=""/></span>) }
      </div>
      <div className="intro-copy">
        <p className="hello">{profile.name.toUpperCase()} · {profile.title.toUpperCase()}</p>
        <h1><span>{profile.heroTitle[0]}</span> <span>{profile.heroTitle[1]}</span></h1>
        <p className="intro-note">在台北，設計用心的數位體驗<br/>與視覺故事。</p>
        <a className="hero-cta" href="#work">VIEW PROJECTS <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section className="portfolio" id="work">
      <div className="work-heading motion-reveal">
        <p>{profile.title.toUpperCase()} · SELECTED WORK</p>
        <div>
          <h2>把複雜需求，<br/>整理成清楚、可落地的介面。</h2>
          <p className="work-heading-note">專注於內容平台、後台系統與跨裝置數位體驗；從資訊架構、操作流程到視覺與元件規範，讓每個設計選擇都回應真正的問題。</p>
        </div>
      </div>
      <div className="filters motion-reveal" role="group" aria-label="作品分類">{filters.map(c=><button key={c} type="button" onClick={()=>setActive(c)} className={active===c?'active':''} aria-pressed={active===c}>{c}<span className="filter-count">{c==='全部'?projects.length:projects.filter(project=>project.category===c).length}</span></button>)}</div>
      {active==='全部'?<>
        <section className="portfolio-group" aria-labelledby="featured-work-heading">
          <div className="portfolio-group-heading motion-reveal"><span>01</span><h3 id="featured-work-heading">精選案例</h3><p>最能呈現產品思考與系統規劃的四個案例</p></div>
          <div className="masonry featured-projects">{featuredProjects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div>
        </section>
        <section className="portfolio-group other-work" aria-labelledby="other-work-heading">
          <div className="portfolio-group-heading motion-reveal"><span>02</span><h3 id="other-work-heading">其他作品</h3><p>更多品牌、網站與行動產品設計</p></div>
          <div className="other-projects">{otherProjects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index} compact/>)}</div>
        </section>
      </>:<div className="masonry filtered-projects">{filteredProjects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div>}
    </section>

    <section className="about motion-reveal" id="about" aria-labelledby="about-title">
      <p className="label">ABOUT</p>
      <div className="about-body">
        <h2 id="about-title">我喜歡把複雜的事情，<br/>整理成簡單而有感的體驗。</h2>
        <p className="about-lead">從介面、活動網站到行銷視覺，我在意的不只是畫面好不好看，而是每個選擇是否真正回應了問題。保持好奇、反覆推敲，然後留下剛剛好的設計。</p>
        <div className="about-grid">
          <section aria-labelledby="about-experience">
            <h3 id="about-experience">經歷</h3>
            <ol className="about-timeline">{experience.map(item=><li key={item.company}><span>{item.period}</span><div><strong>{item.company}</strong><em>{item.role}</em></div></li>)}</ol>
          </section>
          <section aria-labelledby="about-skills">
            <h3 id="about-skills">擅長領域與工具</h3>
            <ul className="about-skills">{skills.map(skill=><li key={skill}>{skill}</li>)}</ul>
            <div className="about-links">
              <a href={sitePath('/resume/')}>完整履歷 <span aria-hidden="true">→</span></a>
              <a href={sitePath('/kelly-lei-resume.pdf')} download="Kelly-Lei-Resume.pdf">下載 PDF <span aria-hidden="true">↓</span></a>
              <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">→</span></a>
            </div>
          </section>
        </div>
      </div>
    </section>
    <SiteFooter/>
    </div>
  </main>
}
