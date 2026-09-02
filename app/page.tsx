'use client';

import { useEffect, useState } from 'react';

type Category = '全部' | 'UI 設計' | '一頁式活動頁' | '行銷製作物';
const categories: Category[] = ['全部', 'UI 設計', '一頁式活動頁', '行銷製作物'];
const projects = [
  { id: 1, category: 'UI 設計' as Category, title: 'MORI 日常理財 App', subtitle: 'Product Design · 2026', description: '重新梳理記帳到財務洞察的流程，讓複雜數字變得直覺、安心。', color: '#d9ff57', type: 'mobile' },
  { id: 2, category: '一頁式活動頁' as Category, title: 'Future Now 創意年會', subtitle: 'Web Design · 2025', description: '以大膽排版與動態節奏，打造一頁式活動報名體驗。', color: '#ff6b4a', type: 'web' },
  { id: 3, category: '行銷製作物' as Category, title: '植物系生活提案', subtitle: 'Campaign · 2025', description: '從社群貼文到數位廣告，建立一致而有溫度的活動視覺。', color: '#b8c8ff', type: 'social' },
  { id: 4, category: 'UI 設計' as Category, title: 'Nook 空間預約平台', subtitle: 'UX/UI Design · 2024', description: '簡化搜尋、比較與預約路徑，讓找到理想空間更有效率。', color: '#f5c6e8', type: 'dashboard' },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>→</span>; }
function Mockup({ project }: { project: (typeof projects)[number] }) {
  if (project.type === 'mobile') return <div className="mock-stage mobile-stage"><div className="phone phone-back"><span /><i /><i /><i /></div><div className="phone phone-front"><small>下午 9:41</small><b>今天過得如何？</b><em>NT$ 38,560</em><i /><i /><i /></div></div>;
  if (project.type === 'web') return <div className="mock-stage web-stage"><div className="browser-frame"><span className="browser-dots">•••</span><strong>FUTURE<br/>NOW.</strong><small>CREATIVE CONFERENCE 2025</small><button>立即報名 ↗</button></div></div>;
  if (project.type === 'social') return <div className="mock-stage social-stage"><div className="post p1">GROW<br/>WITH<br/>CARE</div><div className="post p2"><span>PLANT<br/>YOUR<br/>DAY</span></div><div className="post p3">綠意<br/>日常</div></div>;
  return <div className="mock-stage dashboard-stage"><div className="laptop"><div className="dash-nav"/><div className="dash-hero"><b>Find your<br/>perfect space.</b><span /></div><div className="dash-cards"><i/><i/><i/></div></div></div>;
}

export default function Home() {
  const [active, setActive] = useState<Category>('全部');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = selected ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selected]);
  const filtered = active === '全部' ? projects : projects.filter((p) => p.category === active);
  return <main>
    <header className="site-header"><a className="brand" href="#top" aria-label="回到首頁">YH<span>®</span></a><nav className={menuOpen ? 'nav open' : 'nav'} aria-label="主要導覽"><a href="#works" onClick={() => setMenuOpen(false)}>作品</a><a href="#about" onClick={() => setMenuOpen(false)}>關於我</a><a href="mailto:hello@example.com">聯絡我 <Arrow diagonal /></a></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="開啟選單" aria-expanded={menuOpen}>{menuOpen ? '關閉' : '選單'}</button></header>
    <section className="hero" id="top"><p className="eyebrow"><span /> AVAILABLE FOR SELECTED PROJECTS</p><h1>把想法，設計成<br/><span className="outline-word">有感的體驗。</span></h1><div className="hero-bottom"><p>嗨，我是 YU-HSUAN，一位專注於數位體驗與品牌視覺的設計師。喜歡把複雜的事情，變得簡單、好看又好用。</p><a className="round-link" href="#works" aria-label="瀏覽作品"><Arrow /></a></div><div className="orbit" aria-hidden="true"><span>IDEAS</span><i>×</i><span>DESIGN</span><i>×</i><span>IMPACT</span></div></section>
    <section className="works" id="works"><div className="section-head"><div><p className="section-index">01 — SELECTED WORKS</p><h2>精選作品</h2></div><p>從策略、視覺到互動，<br/>每個專案都是一場完整的思考旅程。</p></div><div className="filters" role="group" aria-label="作品分類">{categories.map((category) => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}<span>{category === '全部' ? projects.length : projects.filter(p => p.category === category).length}</span></button>)}</div><div className="project-grid">{filtered.map((project) => <article className="project-card" key={project.id} onClick={() => setSelected(project)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}><div className="project-visual" style={{ background: project.color }}><span className="view-label">VIEW PROJECT <Arrow diagonal /></span><Mockup project={project}/></div><div className="project-info"><div><p>{project.subtitle}</p><h3>{project.title}</h3></div><span className="card-arrow"><Arrow diagonal /></span></div></article>)}</div></section>
    <section className="about" id="about"><p className="section-index">02 — ABOUT</p><div className="about-grid"><h2>好設計，始於<br/>真正的理解。</h2><div><p>我相信設計不只關乎畫面，更關乎溝通與感受。從釐清問題、建立脈絡，到發展出兼具美感與功能的解法，我享受每一個把模糊變清楚的過程。</p><a href="mailto:hello@example.com">一起聊聊你的專案 <Arrow diagonal /></a></div></div></section>
    <footer><div><p>HAVE A PROJECT IN MIND?</p><a href="mailto:hello@example.com">Let’s make<br/>something great. <Arrow diagonal /></a></div><div className="footer-row"><span>© 2026 YU-HSUAN</span><span>TAIPEI, TAIWAN · 25.03° N</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    {selected && <div className="modal" role="dialog" aria-modal="true" aria-label={`${selected.title} 作品預覽`} onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}><div className="modal-panel"><button className="modal-close" onClick={() => setSelected(null)} aria-label="關閉預覽">×</button><div className="modal-copy"><p>{selected.category} · CASE STUDY</p><h2>{selected.title}</h2><span>{selected.description}</span></div><div className="figma-embed" style={{ background: selected.color }}><div className="figma-top"><span><i/> Figma prototype</span><small>你的設計可嵌入此處</small></div><Mockup project={selected}/><div className="figma-hint">替換為 Figma 分享網址後，即可直接操作完整原型</div></div></div></div>}
  </main>;
}
