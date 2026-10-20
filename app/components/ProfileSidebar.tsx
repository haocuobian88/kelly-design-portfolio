import {sitePath} from '../site-path';
import {profile} from '../site-data';

export default function ProfileSidebar({active='portfolio'}:{active?:'portfolio'|'resume'}){
  return <aside className="profile-sidebar" aria-label="個人資料">
    <div className="profile-avatar" aria-hidden="true"><span>KL</span></div>
    <h2>{profile.name}</h2>
    <p className="profile-role">{profile.title}</p>
    <p className="profile-location">● {profile.location}</p>
    <p className="profile-experience"><b>{profile.years}</b><span>Experience in</span></p>
    <ul className="experience-chips" aria-label="專業領域">{profile.chips.map(chip=><li key={chip}>{chip}</li>)}</ul>
    <nav className="profile-nav" aria-label="作品集與履歷">
      <a className={active==='portfolio'?'active':''} href={sitePath('/#work')}><span aria-hidden="true">○</span> PORTFOLIO</a>
      <a className={active==='resume'?'active':''} href={sitePath('/resume/')}><span aria-hidden="true">○</span> RESUME</a>
    </nav>
    <a className="profile-email" href={`mailto:${profile.email}`}>{profile.email}</a>
  </aside>;
}
