'use client';

import {useState} from 'react';

// 先顯示輕量的預覽卡，使用者點擊後才載入 Figma iframe：頁面更快，
// 公司網路擋 Figma 時也不會只看到一塊空白。
export default function FigmaEmbed({src,title,openUrl,label='互動設計稿'}:{src:string,title:string,openUrl:string,label?:string}){
  const [loaded,setLoaded]=useState(false);
  if(loaded) return <iframe src={src} title={title} allowFullScreen allow="fullscreen"/>;
  return <div className="figma-facade">
    <div className="figma-facade-inner">
      <span className="figma-facade-icon" aria-hidden="true">
        <svg viewBox="0 0 38 57" width="22" height="33"><path fill="currentColor" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"/><path fill="currentColor" opacity=".55" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"/><path fill="currentColor" opacity=".8" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"/><path fill="currentColor" opacity=".4" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"/><path fill="currentColor" opacity=".65" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"/></svg>
      </span>
      <p className="figma-facade-title">{label}</p>
      <p className="figma-facade-desc">載入後可縮放、拖曳，瀏覽完整的設計畫面。</p>
      <div className="figma-facade-actions">
        <button type="button" onClick={()=>setLoaded(true)}>載入設計稿</button>
        <a href={openUrl} target="_blank" rel="noreferrer">在 Figma 開啟 ↗</a>
      </div>
    </div>
  </div>;
}
