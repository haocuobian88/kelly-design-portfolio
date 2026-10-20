import {sitePath} from '../site-path';
import {profile} from '../site-data';

export default function SiteFooter(){
  return <footer className="site-footer">
    <section className="footer-contact" aria-labelledby="footer-contact-title">
      <p className="footer-label">CONTACT</p>
      <div>
        <h2 id="footer-contact-title">正在尋找新的合作機會，<br/>歡迎與我聯繫。</h2>
        <div className="footer-actions">
          <a className="footer-primary" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">→</span></a>
          <a href={sitePath('/resume/')}>查看履歷</a>
          <a href={sitePath('/#work')}>瀏覽作品</a>
        </div>
      </div>
    </section>
    <div className="footer-meta">
      <div><span>{profile.name.toUpperCase()}</span><span>{profile.title.toUpperCase()}</span></div>
      <div><span>{profile.location.toUpperCase()}</span><span>© 2026</span></div>
    </div>
  </footer>;
}
