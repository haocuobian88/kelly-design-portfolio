import {sitePath} from '../site-path';

const projects = [
  {slug:'luckmesh', title:'LuckMesh｜跨裝置遊戲品牌體驗'},
  {slug:'xincheng-en', title:'星城 EN｜娛樂平台品牌官網'},
  {slug:'luandou-frontend', title:'遊戲大亂鬥｜內容論壇體驗重構'},
  {slug:'luandou-backend', title:'亂鬥後台｜管理與廣告系統設計'},
  {slug:'bana', title:'BanaBana｜內容平台體驗重構'},
  {slug:'app-design', title:'美耶｜到府美業服務 App'},
  {slug:'app-design-backend', title:'美耶商家端｜服務管理 App'},
  {slug:'website-redesign', title:'BabyHome｜響應式網站重構'},
  {slug:'little-tail', title:'小尾巴｜寵物美容預約平台'},
  {slug:'easy-home-sport', title:'Easy Home Sport｜居家運動 App'},
];

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
