'use client';

import {useEffect, useState} from 'react';

export default function BackToTop(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setVisible(window.scrollY>window.innerHeight*1.2);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  return <button type="button" className={`back-to-top${visible?' is-visible':''}`} aria-label="回到頂端" tabIndex={visible?0:-1}
    onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}>↑</button>;
}
