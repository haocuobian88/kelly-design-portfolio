import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';

const figmaUrl='https://www.figma.com/design/JdyYXjTJFHv4GA74byJ4hj?node-id=190-2';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function LittleTailPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <section className="case-summary"><p>小尾巴寵物美容｜預約與領養資訊平台</p></section>
    <section className="luckmesh-preview">
      <div className="device-label"><span>09</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="小尾巴寵物美容 Figma design" allowFullScreen allow="fullscreen"/>
      <p className="figma-detail-note">想查看更多設計細節與完整畫面流程，歡迎<a href={figmaUrl} target="_blank" rel="noreferrer">進入 Figma 深入瀏覽 ↗</a></p>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
