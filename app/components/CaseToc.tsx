'use client';

import {useEffect, useState} from 'react';

const sections=[
  {id:'overview', label:'Overview'},
  {id:'challenges', label:'Challenges'},
  {id:'approach', label:'Approach'},
  {id:'contribution', label:'Contribution'},
  {id:'final-design', label:'Final Design'},
];

export default function CaseToc(){
  const [active, setActive]=useState('overview');

  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    }, {rootMargin:'-22% 0px -58%', threshold:[0,.15,.4,.75]});
    sections.forEach(({id})=>{const element=document.getElementById(id); if(element) observer.observe(element);});
    return ()=>observer.disconnect();
  },[]);

  return <nav className="case-toc" aria-label="案例章節">
    <span>ON THIS PAGE</span>
    {sections.map(section=><a key={section.id} className={active===section.id?'active':''} href={`#${section.id}`}>{section.label}</a>)}
  </nav>;
}
