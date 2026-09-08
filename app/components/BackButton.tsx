'use client';

export default function BackButton(){
  const goBack=()=>{
    if(window.history.length>1) window.history.back();
    else window.location.href='/projects';
  };

  return <button type="button" className="projects-back" onClick={goBack}>← 返回前頁</button>;
}
