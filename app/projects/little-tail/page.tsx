import FigmaEmbed from '../../components/FigmaEmbed';
import ProjectBriefCard from '../../components/ProjectBriefCard';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import ProjectPager from '../../components/ProjectPager';

const figmaUrl='https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LittleTailPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="little-tail" category="WEBSITE DESIGN · SIDE PROJECT" title="小尾巴｜寵物美容預約平台" summary="自主練習專案。整合美容服務預約與領養資訊，讓使用者能在不同裝置上快速理解服務內容並完成下一步。" role="UI / UX Designer" scope="預約體驗、資訊架構、RWD" platform="Desktop / Mobile"/>
    <ProjectBriefCard slug="little-tail"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('little-tail')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <FigmaEmbed src={figmaEmbed} title="小尾巴寵物美容 Figma design" openUrl={figmaUrl}/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <ProjectPager current="little-tail"/>
    <SiteFooter/>
  </div></main>
}
