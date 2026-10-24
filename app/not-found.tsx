import type {Metadata} from 'next';
import ProfileSidebar from './components/ProfileSidebar';
import TopBar from './components/TopBar';
import SiteFooter from './components/SiteFooter';
import {sitePath} from './site-path';
import {profile, projects, projectNumber} from './site-data';

export const metadata: Metadata = {
  title: `找不到頁面 — ${profile.name}`,
  robots: {index: false},
};

export default function NotFound(){
  const featured=projects.filter(project=>project.featured);
  return <main>
    <ProfileSidebar/>
    <div className="site-content">
      <TopBar current="projects"/>
      <section className="not-found">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>這一頁找不到了。</h1>
        <p className="not-found-lead">網址可能打錯了，或這個頁面已經搬家。可以從這裡繼續看看：</p>
        <div className="not-found-actions">
          <a className="not-found-primary" href={sitePath('/')}>回到首頁 <span aria-hidden="true">→</span></a>
          <a href={sitePath('/projects/')}>全部作品</a>
          <a href={sitePath('/resume/')}>履歷</a>
        </div>
        <div className="not-found-featured">
          <p>精選案例</p>
          <ul>{featured.map(project=><li key={project.slug}><a href={sitePath(`/projects/${project.slug}/`)}><span>{projectNumber(project.slug)}</span>{project.title}<i aria-hidden="true">→</i></a></li>)}</ul>
        </div>
      </section>
      <SiteFooter/>
    </div>
  </main>;
}
