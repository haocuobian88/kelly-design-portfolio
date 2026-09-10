import {sitePath} from '../site-path';

export default function CaseNav(){
  return <header className="case-nav"><nav><a href={sitePath('/')}>返回首頁</a><a href={sitePath('/#about')}>ABOUT</a><a href="mailto:kellylei9@gmail.com">CONTACT</a></nav></header>;
}
