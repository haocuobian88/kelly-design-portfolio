import {projectNumber} from '../site-data';

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
  return <section className="case-study-intro">
    <div className="case-study-heading">
      <p>{projectNumber(slug)} · {category}</p>
      <h1>{title}</h1>
      <p className="case-study-summary">{summary}</p>
    </div>
    <dl className="case-study-meta">
      <div><dt>ROLE</dt><dd>{role}</dd></div>
      <div><dt>SCOPE</dt><dd>{scope}</dd></div>
      <div><dt>PLATFORM</dt><dd>{platform}</dd></div>
    </dl>
  </section>;
}
