import {sitePath} from '../site-path';
import {keyScreens} from '../key-screens';

export default function KeyScreens({slug}:{slug:string}){
  const screens=keyScreens[slug]??[];
  if(!screens.length) return null;
  return <section className="key-screens" aria-label="關鍵畫面">
    {screens.map((screen,index)=><figure key={screen.src} className={`key-screen${screen.before?' key-screen-compare':''}`}>
      <div className="key-screen-media">
        {screen.before&&<div><span className="key-screen-tag">BEFORE</span><img src={sitePath(screen.before)} alt={`${screen.title}（改版前）`} loading="lazy"/></div>}
        <div>{screen.before&&<span className="key-screen-tag">AFTER</span>}<img src={sitePath(screen.src)} alt={screen.title} loading="lazy"/></div>
      </div>
      <figcaption>
        <span>{String(index+1).padStart(2,'0')}</span>
        <h3>{screen.title}</h3>
        <p>{screen.caption}</p>
      </figcaption>
    </figure>)}
  </section>;
}
