'use client';
import ProjectBriefCard from '../../components/ProjectBriefCard';
import SiteFooter from '../../components/SiteFooter';

import {useEffect, useState} from 'react';
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import ProjectPager from '../../components/ProjectPager';
import {sitePath} from '../../site-path';

const consumerSlides=['/app-design/slide-1.webp','/app-design/slide-2.webp','/app-design/slide-3.webp'].map(sitePath);
const consumerGallery=['01','02','04-banner','03','04','05','06','07','08','09','14','10','11','12','16','15'];
const merchantSlides=['/app-design-backend/slide-1.webp','/app-design-backend/slide-2.webp','/app-design-backend/slide-3.webp'].map(sitePath);
const merchantGallery=['01','02','03','04','05','06'];

function PhoneCarousel({slides,label,className=''}:{slides:string[],label:string,className?:string}){
  const [slide,setSlide]=useState(0);
  useEffect(()=>{const timer=window.setInterval(()=>setSlide(value=>(value+1)%slides.length),3200);return()=>window.clearInterval(timer)},[slides.length]);
  return <div className={`phone-carousel ${className}`} aria-label={`${label}主要流程輪播`}>
    {slides.map((src,index)=><img key={src} src={src} alt={`${label}畫面 ${index+1}`} className={slide===index?'active':''}/>) }
    <button className="carousel-prev" onClick={()=>setSlide((slide+slides.length-1)%slides.length)} aria-label="上一張">←</button>
    <button className="carousel-next" onClick={()=>setSlide((slide+1)%slides.length)} aria-label="下一張">→</button>
    <div className="carousel-dots">{slides.map((_,index)=><button key={index} className={slide===index?'active':''} onClick={()=>setSlide(index)} aria-label={`顯示第 ${index+1} 張`}/>)}</div>
  </div>;
}

export default function AppDesignPage(){
  return <main><ProfileSidebar/><div className="site-content case-page">
    <CaseNav/>
    <CaseStudyIntro slug="app-design" category="APP DESIGN · 雙端服務" title="美耶｜到府美業服務 App" summary="同一個到府美業服務的兩端：消費者用「用戶端」探索與預約服務，技術服務人員用「商家端」接單與管理服務狀態。兩個 App 的流程互相對應，讓一筆預約從下單到完成都清楚可循。" role="UI / Product Designer" scope="用戶端與商家端流程、Mobile UI、新功能規劃" platform="iOS / Android"/>
    <ProjectBriefCard slug="app-design"/>

    <div className="figma-section-heading app-part-heading" id="consumer"><p>PART 01 · 用戶端</p><h2>消費者：線上預約到府服務</h2></div>
    <section className="app-case-hero">
      <div className="app-case-copy">
        <h2>完善使用者流程體驗及 UI 介面和新功能規劃</h2>
        <p className="case-description">宅經濟蓬勃發展，為居家生活打造美業外送 APP。以數位推動傳統實體產業，實踐「外送美的各項服務」到家的概念，並以零售電商模式整合可到府服務項目與標準化流程。</p>
        <div className="store-links"><a href="https://apps.apple.com/tw/app/%E7%BE%8E%E8%80%B6/id1619954601" target="_blank" rel="noreferrer"><img src={sitePath('/app-design/app-store.png')} alt="Download on the App Store"/></a><a href="https://play.google.com/store/apps/details?id=com.xapp.n.meijia&hl=en_US&gl=US" target="_blank" rel="noreferrer"><img src={sitePath('/app-design/google-play.png')} alt="Get it on Google Play"/></a></div>
      </div>
      <PhoneCarousel slides={consumerSlides} label="用戶端 APP "/>
    </section>
    <section className="booking-flow">
      <div className="flow-heading"><p>BOOKING FLOW</p><h2>APP 線上預約<br/><i>到府服務</i></h2></div>
      <ol><li><span>STEP 1</span><b>開啟 APP</b></li><li><span>STEP 2</span><b>一鍵預約</b></li><li><span>STEP 3</span><b>專人到府</b></li></ol>
    </section>
    <section className="app-gallery" aria-label="用戶端 APP 完整設計流程">
      {consumerGallery.map((name,index)=><figure key={`${name}-${index}`} className={name==='04-banner'?'wide':index===3||index===4?'half':''}><img src={sitePath(`/app-design/${name}.jpg`)} alt={`用戶端 APP 流程畫面 ${index+1}`} loading="lazy"/><figcaption>{String(index+1).padStart(2,'0')} / {String(consumerGallery.length).padStart(2,'0')}</figcaption></figure>)}
    </section>

    <div className="figma-section-heading app-part-heading" id="merchant"><p>PART 02 · 商家端</p><h2>服務人員：接單與管理服務</h2></div>
    <section className="app-case-hero backend-case">
      <div className="app-case-copy">
        <h2>蒐集商家需求，規劃功能及畫面</h2>
        <p className="case-description">功能對應美耶用戶端 APP，以及技術服務人員接單所需的實際情境。從預約通知、訂單管理到服務狀態，重新整理商家端的操作流程與介面資訊。</p>
        <div className="store-links"><a href="https://apps.apple.com/tw/app/%E7%BE%8E%E8%80%B6%E5%95%86%E5%AE%B6%E7%AB%AF/id1622334158" target="_blank" rel="noreferrer"><img src={sitePath('/app-design-backend/app-store.png')} alt="Download on the App Store"/></a><a href="https://play.google.com/store/apps/details?id=com.xapp.n.meijiastore&hl=af&gl=US" target="_blank" rel="noreferrer"><img src={sitePath('/app-design-backend/google-play.png')} alt="Get it on Google Play"/></a></div>
      </div>
      <PhoneCarousel slides={merchantSlides} label="商家端 APP "/>
    </section>
    <section className="booking-flow backend-flow">
      <div className="flow-heading"><p>SERVICE FLOW</p><h2>接收預約，<br/><i>管理服務</i></h2></div>
      <div className="backend-flow-copy"><p>技術服務人員透過商家端 APP</p><strong>接受消費者<br/>預約服務訂單</strong><span>FROM REQUEST TO COMPLETION</span></div>
    </section>
    <section className="app-gallery" aria-label="商家端 APP 完整設計流程">
      {merchantGallery.map((name,index)=><figure key={name}><img src={sitePath(`/app-design-backend/${name}.jpg`)} alt={`商家端 APP 流程畫面 ${index+1}`} loading="lazy"/><figcaption>{String(index+1).padStart(2,'0')} / {String(merchantGallery.length).padStart(2,'0')}</figcaption></figure>)}
    </section>
    <ProjectPager current="app-design"/>
    <SiteFooter/>
  </div></main>
}
