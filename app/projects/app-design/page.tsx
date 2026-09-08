'use client';

import {useEffect, useState} from 'react';

const slides=['/app-design/slide-1.png','/app-design/slide-2.png','/app-design/slide-3.png'];
const gallery=['01','02','04-banner','03','04','05','06','07','08','09','14','10','11','12','16','15'];

export default function AppDesignPage(){
  const [slide,setSlide]=useState(0);
  useEffect(()=>{const timer=window.setInterval(()=>setSlide(value=>(value+1)%slides.length),3200);return()=>window.clearInterval(timer)},[]);
  return <main className="case-page">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="app-case-hero">
      <div className="app-case-copy">
        <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
        <p className="case-kicker">APP UI / UX DESIGN · 2022</p>
        <h1>APP<br/><i>Design</i></h1>
        <h2>完善使用者流程體驗及<br/>UI 介面和新功能規劃</h2>
        <p className="case-description">宅經濟蓬勃發展，為居家生活打造美業外送 APP。以數位推動傳統實體產業，實踐「外送美的各項服務」到家的概念，並以零售電商模式整合可到府服務項目與標準化流程。</p>
        <div className="store-links"><a href="https://apps.apple.com/tw/app/%E7%BE%8E%E8%80%B6/id1619954601" target="_blank" rel="noreferrer"><img src="/app-design/app-store.png" alt="Download on the App Store"/></a><a href="https://play.google.com/store/apps/details?id=com.xapp.n.meijia&hl=en_US&gl=US" target="_blank" rel="noreferrer"><img src="/app-design/google-play.png" alt="Get it on Google Play"/></a></div>
      </div>
      <div className="phone-carousel" aria-label="APP 主要流程輪播">
        {slides.map((src,index)=><img key={src} src={src} alt={`APP 畫面 ${index+1}`} className={slide===index?'active':''}/>) }
        <button className="carousel-prev" onClick={()=>setSlide((slide+slides.length-1)%slides.length)} aria-label="上一張">←</button>
        <button className="carousel-next" onClick={()=>setSlide((slide+1)%slides.length)} aria-label="下一張">→</button>
        <div className="carousel-dots">{slides.map((_,index)=><button key={index} className={slide===index?'active':''} onClick={()=>setSlide(index)} aria-label={`顯示第 ${index+1} 張`}/>)}</div>
      </div>
    </section>
    <section className="booking-flow">
      <div className="flow-heading"><p>BOOKING FLOW</p><h2>APP 線上預約<br/><i>到府服務</i></h2></div>
      <ol><li><span>STEP 1</span><b>開啟 APP</b></li><li><span>STEP 2</span><b>一鍵預約</b></li><li><span>STEP 3</span><b>專人到府</b></li></ol>
    </section>
    <section className="app-gallery" aria-label="APP Design 完整設計流程">
      {gallery.map((name,index)=><figure key={`${name}-${index}`} className={name==='04-banner'?'wide':index===3||index===4?'half':''}><img src={`/app-design/${name}.jpg`} alt={`APP Design 流程畫面 ${index+1}`} loading="lazy"/><figcaption>{String(index+1).padStart(2,'0')} / {String(gallery.length).padStart(2,'0')}</figcaption></figure>)}
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
