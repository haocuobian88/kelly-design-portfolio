import ProjectBriefCard from '../../components/ProjectBriefCard';
import SiteFooter from '../../components/SiteFooter';
const webPrototype='https://www.figma.com/proto/jG1udIPMgzfBrN73lw9J1B/bbh%E9%A6%96%E9%A0%81?node-id=1-12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A12&show-proto-sidebar=1';
const mobilePrototype='https://www.figma.com/proto/EcJYwX66u2FOwGFmm5N56K/bbh_M%E7%89%88?node-id=0-3788&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A3788&show-proto-sidebar=1';
const embed=(url:string)=>`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

export default function WebsiteRedesignPage(){
  return <main><ProfileSidebar/><div className="site-content redesign-page">
    <CaseNav/>
    <CaseStudyIntro slug="website-redesign" category="WEBSITE REDESIGN" title="BabyHome｜響應式網站重構" summary="針對桌機與手機的不同閱讀情境，重新規劃資訊層級、導覽與響應式行為，讓同一套內容在不同裝置維持清楚的使用體驗。" role="UI / UX Designer" scope="資訊架構、RWD、Prototype" platform="Desktop / Mobile"/>
    <ProjectBriefCard slug="website-redesign"/>
    <section className="device-previews">
      <article className="device-preview web-preview"><div className="device-label"><span>01</span><strong>WEB PREVIEW</strong><a href={webPrototype} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div><div className="browser-frame"><iframe src={embed(webPrototype)} title="網站重構 Web prototype" allowFullScreen allow="fullscreen"/></div></article>
      <article className="device-preview mobile-preview"><div className="device-label"><span>02</span><strong>MOBILE PREVIEW</strong><a href={mobilePrototype} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div><div className="phone-frame"><iframe src={embed(mobilePrototype)} title="網站重構 Mobile prototype" allowFullScreen allow="fullscreen"/></div></article>
    </section>
    <section className="redesign-links"><p>MORE CONTEXT</p><div><a href="https://babyhome.com.tw/" target="_blank" rel="noreferrer">ORIGINAL WEBSITE ↗</a><a href="https://kellylei9.wixsite.com/portfolio/bbh-vision2" target="_blank" rel="noreferrer">PREVIOUS CASE PAGE ↗</a></div></section>
    <ProjectPager current="website-redesign"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import ProjectPager from '../../components/ProjectPager';
