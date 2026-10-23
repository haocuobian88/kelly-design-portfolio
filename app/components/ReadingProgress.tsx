'use client';

import {useEffect, useRef} from 'react';

export default function ReadingProgress(){
  const barRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let frame=0;
    const update=()=>{
      frame=0;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const ratio=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
      barRef.current?.style.setProperty('--progress',String(ratio));
    };
    const onScroll=()=>{if(!frame) frame=requestAnimationFrame(update);};
    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    const resize=new ResizeObserver(onScroll);
    resize.observe(document.body);
    return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);resize.disconnect();if(frame) cancelAnimationFrame(frame);};
  },[]);
  return <div className="reading-progress" aria-hidden="true"><div ref={barRef}/></div>;
}
