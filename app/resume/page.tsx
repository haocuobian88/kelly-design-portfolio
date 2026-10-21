import {experience, profile} from '../site-data';
import {sitePath} from '../site-path';
import ProfileSidebar from '../components/ProfileSidebar';
import TopBar from '../components/TopBar';
import SiteFooter from '../components/SiteFooter';

export default function ResumePage(){
  return <main><ProfileSidebar active="resume"/>
    <div className="site-content resume-page"><TopBar current="resume"/>
      <section className="resume-sheet"><div className="resume-sheet-head"><div><p>RESUME · {profile.years.toUpperCase()}</p><h1>{profile.name}</h1><p className="resume-contact">{profile.title}<br/>{profile.email} · {profile.location}<br/>haocuobian88.github.io/kelly-design-portfolio</p></div><div className="resume-head-side"><p>擅長把複雜的產品需求整理成清楚、可落地的介面與設計系統。</p><a className="resume-download" href={sitePath('/kelly-lei-resume.pdf')} download="Kelly-Lei-Resume.pdf">下載 PDF 履歷 <span aria-hidden="true">↓</span></a></div></div><div className="resume-columns"><section className="resume-work"><h2>工作經歷</h2><div className="experience-list">{experience.map(item=><article key={item.company}><div className="job-head"><div><h3>{item.company}</h3><h4>{item.role}</h4></div><p>{item.period}</p></div><p>{item.summary}</p></article>)}</div></section><aside className="resume-side"><section><h2>工具與技能</h2><div className="skill-groups"><article><p>PRODUCT &amp; UI</p><h3>Figma, Adobe XD, Balsamiq</h3><span>Wireframe、User Flow、Prototype、Design System、介面規格與 Design Handoff</span></article><article><p>VISUAL DESIGN</p><h3>Photoshop, Illustrator, InDesign</h3><span>品牌視覺、網頁設計、平面製作物、包裝與行銷素材</span></article><article><p>FRONT-END</p><h3>HTML, CSS, Keynote</h3><span>響應式網頁基礎、開發溝通、視覺提案與跨部門協作</span></article></div></section><section className="resume-education"><h2>教育程度</h2><div className="edu-item"><h3>台北市立大學</h3><p>運動器材科技研究所 · 肄業</p><span>2006.09 — 2007.06</span></div><div className="edu-item"><h3>台北市立大學</h3><p>體育與健康學系 · 畢業</p><span>2003 — 2006</span></div></section></aside></div></section>
      <SiteFooter/>
    </div>
  </main>
}
