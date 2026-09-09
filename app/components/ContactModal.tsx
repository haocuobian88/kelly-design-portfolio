'use client';

import {FormEvent, useRef, useState} from 'react';

const formspreeEndpoint='https://formspree.io/f/xwlkaldd';

export default function ContactModal(){
  const dialogRef=useRef<HTMLDialogElement>(null);
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const open=()=>{setStatus('idle');dialogRef.current?.showModal()};
  const close=()=>dialogRef.current?.close();
  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!formspreeEndpoint)return;
    setStatus('sending');
    const form=event.currentTarget;
    try{
      const response=await fetch(formspreeEndpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    }catch{setStatus('error')}
  };

  return <>
    <button className="contact-trigger" type="button" onClick={open}>CONTACT</button>
    <dialog className="contact-dialog" ref={dialogRef} onClick={event=>{if(event.target===event.currentTarget)close()}}>
      <div className="contact-panel">
        <div className="contact-head">
          <div><p>CONTACT</p><h2>與我聯繫</h2></div>
          <button type="button" onClick={close} aria-label="關閉聯絡表單">CLOSE ×</button>
        </div>
        {status==='success'?<div className="contact-success" role="status"><p>訊息已成功送出，謝謝你的聯繫。</p><button type="button" onClick={close}>關閉</button></div>:<form onSubmit={submit}>
          <label><span>聯絡人</span><input name="聯絡人" required autoComplete="name" placeholder="請輸入您的稱呼"/></label>
          <label><span>Email</span><input type="email" name="email" required autoComplete="email" inputMode="email" placeholder="請輸入可回覆的 Email"/></label>
          <label><span>聯絡標題</span><input name="聯絡標題" required placeholder="請簡單說明聯絡主題"/></label>
          <label><span>聯絡內容</span><textarea name="聯絡內容" required rows={7} placeholder="請輸入想與我討論的內容"/></label>
          <input type="hidden" name="_subject" value="作品集網站的新聯絡訊息"/>
          {status==='error'&&<p className="contact-error" role="alert">目前無法送出，請稍後再試。</p>}
          <button className="contact-submit" type="submit" disabled={status==='sending'||!formspreeEndpoint}>{status==='sending'?'傳送中…':'送出訊息 →'}</button>
        </form>}
      </div>
    </dialog>
  </>;
}
