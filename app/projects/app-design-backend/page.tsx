import type {Metadata} from 'next';
import {sitePath} from '../../site-path';

// 商家端已合併進「美耶｜到府美業服務 App」，舊網址自動導向合併後案例的商家端段落。
export const metadata: Metadata = {
  title: '美耶商家端已合併｜Kelly Lei',
  robots: {index: false},
};

export default function AppDesignBackendRedirect(){
  const target=sitePath('/projects/app-design/#merchant');
  return <main style={{padding:'80px 24px',fontFamily:'var(--font-zh)'}}>
    <meta httpEquiv="refresh" content={`0; url=${target}`}/>
    <p>美耶商家端已合併到「美耶｜到府美業服務 App」案例中。</p>
    <p><a href={target} style={{borderBottom:'1px solid currentColor'}}>前往美耶案例的商家端段落 →</a></p>
  </main>;
}
