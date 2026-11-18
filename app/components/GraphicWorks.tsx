'use client';

import {useCallback, useEffect, useRef, useState, type CSSProperties} from 'react';
import {sitePath} from '../site-path';
import {graphicWorks} from '../graphic-works';

// 把每件作品的圖片攤平成一條序列，燈箱可以一路往下看完全部平面作品
const slides=graphicWorks.flatMap((work,workIndex)=>work.images.map((image,imageIndex)=>({work,workIndex,image,imageIndex})));

export default function GraphicWorks({headingNumber}:{headingNumber?:string}){
  const dialogRef=useRef<HTMLDialogElement>(null);
  const [open,setOpen]=useState<number|null>(null);
  const [zoomed,setZoomed]=useState(false);

  const show=(workIndex:number)=>{setOpen(slides.findIndex(slide=>slide.workIndex===workIndex));setZoomed(false);dialogRef.current?.showModal();};
  const close=useCallback(()=>dialogRef.current?.close(),[]);
  const step=useCallback((delta:number)=>{setZoomed(false);setOpen(index=>index===null?index:(index+delta+slides.length)%slides.length);},[]);

  useEffect(()=>{
    const dialog=dialogRef.current; if(!dialog) return;
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==='ArrowRight'){event.preventDefault();step(1);}
      if(event.key==='ArrowLeft'){event.preventDefault();step(-1);}
    };
    const onClose=()=>setOpen(null);
    dialog.addEventListener('keydown',onKey);
    dialog.addEventListener('close',onClose);
    return ()=>{dialog.removeEventListener('keydown',onKey);dialog.removeEventListener('close',onClose);};
  },[step]);

  const current=open===null?null:slides[open];

  return <section className="portfolio-group graphic-work" aria-labelledby="graphic-work-heading">
    <div className="portfolio-group-heading motion-reveal">{headingNumber&&<span>{headingNumber}</span>}<h3 id="graphic-work-heading">平面設計</h3><p>海報、型錄、展場與行銷素材</p></div>
    <ul className="graphic-grid">
      {graphicWorks.map((work,index)=><li key={work.slug} className="graphic-card motion-reveal" style={{'--reveal-delay':`${Math.min(index,5)*60}ms`} as CSSProperties}>
        <button type="button" onClick={()=>show(index)} aria-label={`查看作品：${work.client} ${work.title}（${work.images.length} 張）`}>
          <span className="graphic-thumb"><img src={sitePath(work.cover??work.images[0].src)} alt="" loading="lazy"/></span>
          {work.images.length>1&&<span className="graphic-count" aria-hidden="true">{work.images.length} 張</span>}
        </button>
        <div className="graphic-caption">
          <p className="graphic-type">{work.type} · {work.client}</p>
          <h4>{work.title}</h4>
          <p>{work.text}</p>
        </div>
      </li>)}
    </ul>

    <dialog ref={dialogRef} className="lightbox graphic-lightbox" aria-label="平面作品放大檢視" onClick={event=>{const target=event.target as HTMLElement;if(target===event.currentTarget||target.classList.contains('lightbox-inner')||target.classList.contains('lightbox-stage'))close();}}>
      {current&&<div className="lightbox-inner">
        <div className="lightbox-bar">
          <span className="graphic-lightbox-title">{current.work.client}｜{current.work.title}<em>{current.imageIndex+1} / {current.work.images.length}</em></span>
          <button type="button" onClick={close} aria-label="關閉">CLOSE ×</button>
        </div>
        <div className={`lightbox-stage${zoomed?' is-zoomed':''}`}>
          <button type="button" className="lightbox-image" onClick={()=>setZoomed(value=>!value)} aria-label={zoomed?'縮小至符合畫面':'放大至原始尺寸'}>
            <img src={sitePath(current.image.src)} alt={`${current.work.title}：${current.image.label}`}/>
          </button>
        </div>
        <p className="lightbox-hint">{zoomed?'點圖片縮小・可拖曳查看':'點圖片放大看細節・← → 切換'}</p>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={()=>step(-1)} aria-label="上一張">←</button>
        <button type="button" className="lightbox-nav lightbox-next" onClick={()=>step(1)} aria-label="下一張">→</button>
        <p className="lightbox-caption">{current.image.label}</p>
      </div>}
    </dialog>
  </section>;
}
