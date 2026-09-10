const figmaUrl='https://www.figma.com/design/l1W4U9Ef6lxadEqfwlLfPW/LuckMesh?node-id=0-1&p=f&t=k8uWoRISjUFxf8WS-0';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LuckMeshPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <section className="case-summary"><p>品牌官網｜整體視覺設計、元件規劃</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>01</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="LuckMesh Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
