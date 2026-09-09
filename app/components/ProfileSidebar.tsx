export default function ProfileSidebar(){
  return <aside className="profile-sidebar" aria-label="個人資料">
    <div className="profile-avatar" role="img" aria-label="Kelly Lei 的頭像預留位置"><span>KL</span></div>
    <h2>Kelly Lei</h2>
    <p className="profile-role">Visual &amp; Product Designer</p>
    <p className="profile-location">● Taipei, Taiwan</p>
    <p className="profile-experience"><b>10+ Years</b><span>Experience Includes:</span></p>
    <div className="experience-chips" aria-label="專業領域"><span>UI</span><span>WEB</span><span>GRAPHIC</span></div>
    <nav className="profile-nav"><a className="active" href="/projects"><span>○</span> PORTFOLIO</a><a href="/resume"><span>○</span> RESUME</a></nav>
    <p className="photo-hint">PHOTO PLACEHOLDER</p>
  </aside>;
}
