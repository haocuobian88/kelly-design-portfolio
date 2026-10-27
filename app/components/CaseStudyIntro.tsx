import {projectNumber} from '../site-data';
import {caseDetails} from '../case-details';

type CaseStudyIntroProps = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  scope: string;
  platform: string;
};

export default function CaseStudyIntro({
  slug,
  category,
  title,
  summary,
  role,
  scope,
  platform,
}: CaseStudyIntroProps) {
  const detail=caseDetails[slug];
  return <section className="case-study-intro">
    <div className="case-study-heading">
      <p>{projectNumber(slug)} · {category}</p>
      <h1>{title}</h1>
      <p className="case-study-summary">{summary}</p>
    </div>
    <dl className={`case-study-meta${detail?' has-details':''}`}>
      <div><dt>ROLE</dt><dd>{role}</dd></div>
      <div><dt>SCOPE</dt><dd>{scope}</dd></div>
      <div><dt>PLATFORM</dt><dd>{platform}</dd></div>
      {detail&&<div><dt>TIMELINE</dt><dd>{detail.timeline}</dd></div>}
      {detail&&<div><dt>TEAM</dt><dd>{detail.team.split('，').map((part,index,all)=><span key={part} className="meta-phrase">{part}{index<all.length-1?'，':''}</span>)}</dd></div>}
    </dl>
  </section>;
}
