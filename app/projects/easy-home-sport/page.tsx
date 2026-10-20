const figmaUrl='https://www.figma.com/design/JnjeGruGMCYKj3UcAbwZ9w/Easy-Home-Sport-%E2%80%94-%E5%B1%85%E5%AE%B6%E9%81%8B%E5%8B%95-APP?node-id=0-1&t=QR4essQP207TPWuk-1';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function EasyHomeSportPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="10" category="APP DESIGN" title="Easy Home Sport｜居家運動 App" summary="從課程探索、訓練播放到進度紀錄，打造能降低開始門檻並陪伴使用者建立運動節奏的行動體驗。" role="UI / Product Designer" scope="產品流程、Mobile UI、Design System" platform="Mobile App"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>10</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="Easy Home Sport Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
