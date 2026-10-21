import {projectBriefs} from '../project-briefs';

export default function ProjectBriefCard({slug}:{slug:string}){
  const brief=projectBriefs[slug];
  if(!brief) return null;
  const items=[
    {label:'背景', text:brief.context},
    {label:'我負責', text:brief.role},
    {label:'設計重點', text:brief.focus},
  ];
  return <section className="project-brief" aria-label="專案摘要">
    {items.map(item=><div key={item.label}><h2>{item.label}</h2><p>{item.text}</p></div>)}
  </section>;
}
