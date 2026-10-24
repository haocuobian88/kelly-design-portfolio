import {pageMetadata} from '../page-metadata';
export const metadata=pageMetadata({title:'全部作品',description:'Kelly Lei 的 UI / Product Design 作品：內容平台、後台系統、品牌官網與 App 設計，共 9 個案例。',path:'/projects/'});
import {sitePath} from '../site-path';
import {projects, projectNumber} from '../site-data';
import ProfileSidebar from '../components/ProfileSidebar';
import TopBar from '../components/TopBar';
import SiteFooter from '../components/SiteFooter';

export default function ProjectsPage(){
  return <main>
    <ProfileSidebar/>
    <div className="site-content">
      <TopBar current="projects"/>
      <section className="projects-page">
        <a className="projects-back" href={sitePath('/')}>← BACK HOME</a>
        <div className="projects-page-head"><p>ALL PROJECTS · 01—{String(projects.length).padStart(2,'0')}</p><h1>全部作品<br/><i>從需求到可落地的介面。</i></h1></div>
        <div className="embed-grid">
          {projects.map(project=><article key={project.slug} className="embed-project">
            <div className="embed-square">
              <div className="embed-toolbar"><span>{projectNumber(project.slug)}</span><span>CASE STUDY</span></div>
              <a className="project-cover" href={sitePath(`/projects/${project.slug}/`)}><img src={sitePath(project.cover)} alt={`${project.title} 作品封面`} loading="lazy"/><span>VIEW PROJECT →</span></a>
            </div>
            <div className="embed-caption">
              <div><p>{project.category} · {project.role}</p><h2><a href={sitePath(`/projects/${project.slug}/`)}>{project.title}</a></h2></div>
              <div className="project-links"><a href={sitePath(`/projects/${project.slug}/`)}>VIEW PROJECT →</a></div>
            </div>
          </article>)}
        </div>
      </section>
      <SiteFooter/>
    </div>
  </main>
}
