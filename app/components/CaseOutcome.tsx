import {caseDetails} from '../case-details';

export default function CaseOutcome({slug}:{slug:string}){
  const detail=caseDetails[slug];
  if(!detail) return null;
  return <section className="case-outcome" id="outcome" aria-labelledby={`${slug}-outcome-title`}>
    <div className="case-section-heading">
      <p className="case-story-label">OUTCOME</p>
      <h2 id={`${slug}-outcome-title`}>設計帶來的成果</h2>
    </div>
    <ol className="case-outcome-list">
      {detail.outcomes.map((item,index)=><li key={item.title}>
        <span>{String(index+1).padStart(2,'0')}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </li>)}
    </ol>
  </section>;
}
