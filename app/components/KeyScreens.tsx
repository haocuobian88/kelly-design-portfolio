'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import {sitePath} from '../site-path';
import {keyScreens} from '../key-screens';

export default function KeyScreens({slug}:{slug:string}){
  const screens=keyScreens[slug]??[];
  const dialogRef=useRef<HTMLDialogElement>(null);
  const [open,setOpen]=useState<number|null>(null);
  const [zoomed,setZoomed]=useState(false);

  const show=(index:number)=>{setOpen(index);setZoomed(false);dialogRef.current?.showModal();};
  const close=useCallback(()=>dialogRef.current?.close(),[]);
  const step=useCallback((delta:number)=>{setZoomed(false);setOpen(index=>index===null?index:(index+delta+screens.length)%screens.length);},[screens.length]);

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

  if(!screens.length) return null;
  const current=open===null?null:screens[open];

  return <>
    <section className="key-screens" aria-label="關鍵畫面">
      {screens.map((screen,index)=><figure key={screen.src} className={`key-screen${screen.before?' key-screen-compare':''}`}>
        <div className="key-screen-media">
          {screen.before&&<div><span className="key-screen-tag">BEFORE</span><img src={sitePath(screen.before)} alt={`${screen.title}（改版前）`} loading="lazy"/></div>}
          <button type="button" className="key-screen-zoom" onClick={()=>show(index)} aria-label={`放大檢視：${screen.title}`}>
            {screen.before&&<span className="key-screen-tag">AFTER</span>}
            <img src={sitePath(screen.src)} alt={screen.title} loading="lazy"/>
            <span className="zoom-hint" aria-hidden="true">點擊放大 ⤢</span>
          </button>
        </div>
        <figcaption>
          <span>{String(index+1).padStart(2,'0')}</span>
          <h3>{screen.title}</h3>
          <p>{screen.caption}</p>
        </figcaption>
      </figure>)}
    </section>

    <dialog ref={dialogRef} className="lightbox" aria-label="關鍵畫面放大檢視" onClick={event=>{const target=event.target as HTMLElement;if(target===event.currentTarget||target.classList.contains('lightbox-inner')||target.classList.contains('lightbox-stage'))close();}}>
      {current&&<div className="lightbox-inner">
        <div className="lightbox-bar">
          <span>{String((open??0)+1).padStart(2,'0')} / {String(screens.length).padStart(2,'0')}　{current.title}</span>
          <button type="button" onClick={close} aria-label="關閉">CLOSE ×</button>
        </div>
        <div className={`lightbox-stage${zoomed?' is-zoomed':''}`}>
          <button type="button" className="lightbox-image" onClick={()=>setZoomed(value=>!value)} aria-label={zoomed?'縮小至符合畫面':'放大至原始尺寸'}>
            <img src={sitePath(current.src)} alt={current.title}/>
          </button>
        </div>
        <p className="lightbox-hint">{zoomed?'點圖片縮小・可拖曳查看':'點圖片放大看細節'}</p>
        {screens.length>1&&<>
          <button type="button" className="lightbox-nav lightbox-prev" onClick={()=>step(-1)} aria-label="上一張">←</button>
          <button type="button" className="lightbox-nav lightbox-next" onClick={()=>step(1)} aria-label="下一張">→</button>
        </>}
        <p className="lightbox-caption">{current.caption}</p>
      </div>}
    </dialog>
  </>;
}
