const figmaUrl='https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh?node-id=0-1&p=f&t=k8uWoRISjUFxf8WS-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuckMeshPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="01" category="WEBSITE DESIGN" title="LuckMesh｜跨裝置遊戲品牌體驗" summary="以品牌識別一致性與跨裝置閱讀為核心，重新整理官網的視覺層級、內容區塊與可重複使用元件。" role="UI / Visual Designer" scope="品牌視覺、Web UI、元件規劃" platform="Desktop / Mobile"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>01</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="LuckMesh Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <ProjectPager current="luckmesh"/>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
import ProjectPager from '../../components/ProjectPager';
