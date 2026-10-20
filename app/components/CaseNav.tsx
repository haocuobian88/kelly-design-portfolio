import {sitePath} from '../site-path';
import {profile} from '../site-data';

export default function CaseNav(){
  return <header className="case-nav"><nav><a href={sitePath('/')}>返回首頁</a><a href={sitePath('/#about')}>ABOUT</a><a href={sitePath('/resume/')}>RESUME</a><a href={`mailto:${profile.email}`}>CONTACT</a></nav></header>;
}
