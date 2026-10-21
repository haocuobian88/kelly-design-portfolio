import ProjectBriefCard from '../../components/ProjectBriefCard';
import {projectNumber} from '../../site-data';
import SiteFooter from '../../components/SiteFooter';
const figmaUrl='https://www.figma.com/design/9Mpx9dHmKYeCprfpULwxrM/BANA-Web-UI?node-id=29035-48227&t=yITNoYWb1mhKVruW-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function BanaPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro slug="bana" category="CONTENT PLATFORM" title="BanaBana｜內容平台體驗重構" summary="針對內容探索、會員操作與高密度資訊呈現重新規劃介面，建立更一致的瀏覽節奏與元件系統。" role="UI / Product Designer" scope="內容架構、用戶功能、元件規劃" platform="Responsive Web"/>
    <ProjectBriefCard slug="bana"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>{projectNumber('bana')}</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="BANA Web UI Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <ProjectPager current="bana"/>
    <SiteFooter/>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import ProjectPager from '../../components/ProjectPager';
