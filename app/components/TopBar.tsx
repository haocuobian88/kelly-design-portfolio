'use client';

import {useState} from 'react';
import {sitePath} from '../site-path';
import ContactModal from './ContactModal';

type Current = 'home' | 'projects' | 'resume';

export default function TopBar({current='home'}:{current?:Current}){
  const [menu,setMenu]=useState(false);
  const links=[
    {key:'work', label:'WORK', href:current==='home'?'#work':sitePath('/#work')},
    {key:'about', label:'ABOUT', href:current==='home'?'#about':sitePath('/#about')},
    {key:'resume', label:'RESUME', href:sitePath('/resume/')},
  ];
  return <header className="topbar">
    <nav id="site-menu" className={menu?'open':''}>
      {links.map(link=><a key={link.key} href={link.href} onClick={()=>setMenu(false)} aria-current={current==='resume'&&link.key==='resume'?'page':undefined}>{link.label}</a>)}
      <ContactModal/>
    </nav>
    <button className="menu-toggle" type="button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="site-menu">{menu?'CLOSE':'MENU'}</button>
  </header>;
}
