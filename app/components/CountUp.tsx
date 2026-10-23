'use client';

import {useEffect, useRef} from 'react';

// 捲到畫面中時，數字從 from 跳到 to；若使用者設定「減少動態效果」或沒有 JavaScript，直接顯示最終數字。
export default function CountUp({to,from=0,duration=1400,suffix='',prefix=''}:{to:number,from?:number,duration?:number,suffix?:string,prefix?:string}){
  const ref=useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const render=(n:number)=>{el.textContent=`${prefix}${n}${suffix}`;};
    render(from);
    let raf=0;
    const observer=new IntersectionObserver(entries=>{
      if(!entries.some(entry=>entry.isIntersecting)) return;
      observer.disconnect();
      const start=performance.now();
      const tick=(now:number)=>{
        const t=Math.min(1,(now-start)/duration);
        render(Math.round(from+(to-from)*(1-Math.pow(1-t,3))));
        if(t<1) raf=requestAnimationFrame(tick);
      };
      raf=requestAnimationFrame(tick);
    },{threshold:.6});
    observer.observe(el);
    return ()=>{observer.disconnect();if(raf) cancelAnimationFrame(raf);render(to);};
  },[to,from,duration,prefix,suffix]);
  return <span ref={ref}>{prefix}{to}{suffix}</span>;
}
