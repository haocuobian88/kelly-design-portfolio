'use client';

import {useEffect, useState} from 'react';

const slides=['/app-design-backend/slide-1.png','/app-design-backend/slide-2.png','/app-design-backend/slide-3.png'];
const gallery=['01','02','03','04','05','06'];

export default function AppDesignBackendPage(){
  const [slide,setSlide]=useState(0);
  useEffect(()=>{const timer=window.setInterval(()=>setSlide(value=>(value+1)%slides.length),3200);return()=>window.clearInterval(timer)},[]);
  return <main className="case-page backend-case">
    <header className="case-nav"><nav><a href="/">返回首頁</a><a href="/#about">ABOUT</a><a href="mailto:hello@example.com">CONTACT</a></nav></header>
    <section className="app-case-hero">
      <div className="app-case-copy">
        <a className="projects-back" href="/projects">← BACK TO PROJECTS</a>
        <p className="case-kicker">MERCHANT APP UI / UX · 2022</p>
        <h1>APP<br/><i>Design</i></h1>
        <h2>蒐集商家需求，<br/>規劃功能及畫面</h2>
        <p className="case-description">功能對應美耶用戶端 APP，以及技術服務人員接單所需的實際情境。從預約通知、訂單管理到服務狀態，重新整理商家端的操作流程與介面資訊。</p>
        <div className="store-links"><a href="https://apps.apple.com/tw/app/%E7%BE%8E%E8%80%B6%E5%95%86%E5%AE%B6%E7%AB%AF/id1622334158" target="_blank" rel="noreferrer"><img src="/app-design-backend/app-store.png" alt="Download on the App Store"/></a><a href="https://play.google.com/store/apps/details?id=com.xapp.n.meijiastore&hl=af&gl=US" target="_blank" rel="noreferrer"><img src="/app-design-backend/google-play.png" alt="Get it on Google Play"/></a></div>
      </div>
      <div className="phone-carousel" aria-label="商家端 APP 主要流程輪播">
        {slides.map((src,index)=><img key={src} src={src} alt={`商家端 APP 畫面 ${index+1}`} className={slide===index?'active':''}/>) }
        <button className="carousel-prev" onClick={()=>setSlide((slide+slides.length-1)%slides.length)} aria-label="上一張">←</button>
        <button className="carousel-next" onClick={()=>setSlide((slide+1)%slides.length)} aria-label="下一張">→</button>
        <div className="carousel-dots">{slides.map((_,index)=><button key={index} className={slide===index?'active':''} onClick={()=>setSlide(index)} aria-label={`顯示第 ${index+1} 張`}/>)}</div>
      </div>
    </section>
    <section className="booking-flow backend-flow">
      <div className="flow-heading"><p>SERVICE FLOW</p><h2>接收預約，<br/><i>管理服務</i></h2></div>
      <div className="backend-flow-copy"><p>技術服務人員透過商家端 APP</p><strong>接受消費者<br/>預約服務訂單</strong><span>FROM REQUEST TO COMPLETION</span></div>
    </section>
    <section className="app-gallery" aria-label="商家端 APP Design 完整設計流程">
      {gallery.map((name,index)=><figure key={name}><img src={`/app-design-backend/${name}.jpg`} alt={`商家端 APP Design 流程畫面 ${index+1}`} loading="lazy"/><figcaption>{String(index+1).padStart(2,'0')} / 06</figcaption></figure>)}
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><a href="/projects">ALL PROJECTS</a><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </main>
}
