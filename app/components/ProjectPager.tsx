import {sitePath} from '../site-path';
import {projects} from '../site-data';

export default function ProjectPager({current}:{current:string}){
  const index=Math.max(0, projects.findIndex(project=>project.slug===current));
  const previous=projects[(index-1+projects.length)%projects.length];
  const next=projects[(index+1)%projects.length];

  return <nav className="project-pager" aria-label="作品導覽">
    <a className="project-pager-link project-pager-previous" href={sitePath(`/projects/${previous.slug}/`)}>
      <span>← PREVIOUS PROJECT</span><strong>{previous.title}</strong>
    </a>
    <a className="project-pager-all" href={sitePath('/#work')}>ALL PROJECTS</a>
    <a className="project-pager-link project-pager-next" href={sitePath(`/projects/${next.slug}/`)}>
      <span>NEXT PROJECT →</span><strong>{next.title}</strong>
    </a>
  </nav>;
}
