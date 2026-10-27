'use client';

import {useCallback, useEffect, useRef, useState} from 'react';

const sections=[
  {id:'overview', label:'Overview'},
  {id:'challenges', label:'Challenges'},
  {id:'approach', label:'Approach'},
  {id:'contribution', label:'Contribution'},
  {id:'outcome', label:'Outcome'},
  {id:'final-design', label:'Final Design'},
];

const prefersReducedMotion=()=>typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function CaseToc(){
  const [active, setActive]=useState('overview');
  const [edges, setEdges]=useState({left:false,right:false});
  const navRef=useRef<HTMLElement>(null);

  // 依捲動位置標示目前章節
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    }, {rootMargin:'-22% 0px -58%', threshold:[0,.15,.4,.75]});
    sections.forEach(({id})=>{const element=document.getElementById(id); if(element) observer.observe(element);});
    return ()=>observer.disconnect();
  },[]);

  // 導覽可以往左／右滑動時，顯示對應的漸層與箭頭提示
  const updateEdges=useCallback(()=>{
    const nav=navRef.current; if(!nav) return;
    const left=nav.scrollLeft>4;
    const right=nav.scrollLeft+nav.clientWidth<nav.scrollWidth-4;
    setEdges(prev=>prev.left===left&&prev.right===right?prev:{left,right});
  },[]);

  useEffect(()=>{
    const nav=navRef.current; if(!nav) return;
    const frame=requestAnimationFrame(updateEdges);
    nav.addEventListener('scroll',updateEdges,{passive:true});
    window.addEventListener('resize',updateEdges);
    return ()=>{cancelAnimationFrame(frame);nav.removeEventListener('scroll',updateEdges);window.removeEventListener('resize',updateEdges);};
  },[updateEdges]);

  // 切換章節時，把目前章節捲進導覽列的可見範圍
  useEffect(()=>{
    const nav=navRef.current; if(!nav||nav.scrollWidth<=nav.clientWidth) return;
    const link=nav.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`); if(!link) return;
    const target=link.offsetLeft-(nav.clientWidth-link.offsetWidth)/2;
    nav.scrollTo({left:Math.max(0,target),behavior:prefersReducedMotion()?'auto':'smooth'});
  },[active]);

  const scrollNext=()=>{
    const nav=navRef.current; if(!nav) return;
    nav.scrollBy({left:nav.clientWidth*.6,behavior:prefersReducedMotion()?'auto':'smooth'});
  };

  return <div className={`case-toc-shell${edges.left?' can-left':''}${edges.right?' can-right':''}`}>
    <nav ref={navRef} className="case-toc" aria-label="案例章節">
      <span>ON THIS PAGE</span>
      {sections.map(section=><a key={section.id} className={active===section.id?'active':''} aria-current={active===section.id?'true':undefined} href={`#${section.id}`} onClick={()=>setActive(section.id)}>{section.label}</a>)}
    </nav>
    <button type="button" className="case-toc-more" onClick={scrollNext} aria-label="查看更多章節" tabIndex={edges.right?0:-1} aria-hidden={!edges.right}>›</button>
  </div>;
}
