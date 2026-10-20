const figmaUrl='https://www.figma.com/design/McFhXePpGqJ4OX27vk4wCf/%E6%98%9F%E5%9F%8EEN--Copy-?node-id=0-1&t=vV3JKGISWzZreDXA-1';
const figmaEmbed=`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

export default function XinchengEnPage(){
  return <main><ProfileSidebar/><div className="site-content luckmesh-page">
    <CaseNav/>
    <CaseStudyIntro index="02" category="WEBSITE DESIGN" title="星城 EN｜娛樂平台品牌官網" summary="以高密度娛樂內容為基礎，建立清楚的品牌視覺、內容導覽與跨裝置介面規則。" role="UI / Visual Designer" scope="品牌官網、RWD、元件規劃" platform="Desktop / Mobile"/>
    <section className="luckmesh-preview">
      <div className="device-label"><span>02</span><strong>FIGMA DESIGN</strong><a href={figmaUrl} target="_blank" rel="noreferrer">OPEN IN FIGMA ↗</a></div>
      <iframe src={figmaEmbed} title="星城 EN Figma design" allowFullScreen allow="fullscreen"/>
    </section>
    <footer><div><span>KELLY LEI</span><span>VISUAL &amp; PRODUCT DESIGNER</span></div><div><span>TAIPEI, TAIWAN</span><span>© 2026</span></div></footer>
  </div></main>
}
import ProfileSidebar from '../../components/ProfileSidebar';
import CaseNav from '../../components/CaseNav';
import CaseStudyIntro from '../../components/CaseStudyIntro';
