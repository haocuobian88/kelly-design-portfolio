import type { Metadata } from 'next';
import './globals.css';
import {sitePath} from './site-path';
import {profile} from './site-data';
import GoogleAnalytics from './google-analytics';

// Noto Sans TC 的字型 CSS 有上百組中文 unicode-range 宣告，若用一般 <link> 會阻擋首屏繪製。
// 改由這段行內 script 在頁面載入完成後才插入 stylesheet，字型檔不和首屏圖片、程式搶頻寬；
// 字型載入前先用系統字（PingFang TC／微軟正黑體）顯示，載入後再替換。
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@200..700&display=swap';
const loadFontScript = `(function(){function f(){var l=document.createElement('link');l.rel='stylesheet';l.href='${FONT_CSS}';document.head.appendChild(l);}if(document.readyState==='complete')f();else window.addEventListener('load',f,{once:true});})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://haocuobian88.github.io/kelly-design-portfolio/'),
  title: `${profile.name} — ${profile.title}`,
  description: 'UI / Product Designer 作品集：專注於內容平台、後台系統與跨裝置數位體驗。',
  icons: {
    icon: [
      {url: sitePath('/favicon.ico'), sizes: 'any'},
      {url: sitePath('/favicon.svg'), type: 'image/svg+xml'},
    ],
    apple: [{url: sitePath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png'}],
  },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: '把想法，設計成有感的體驗。',
    images: ['https://haocuobian88.github.io/kelly-design-portfolio/og.png?v=3'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: '把想法，設計成有感的體驗。',
    images: ['https://haocuobian88.github.io/kelly-design-portfolio/og.png?v=3'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <script dangerouslySetInnerHTML={{__html: loadFontScript}}/>
        <noscript><link rel="stylesheet" href={FONT_CSS}/></noscript>
      </head>
      <body
        className="antialiased"
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
