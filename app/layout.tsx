import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import {sitePath} from './site-path';
import {profile} from './site-data';
import GoogleAnalytics from './google-analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://haocuobian88.github.io/kelly-design-portfolio/'),
  title: `${profile.name} — ${profile.title}`,
  description: 'UI / Product Designer 作品集：專注於內容平台、後台系統與跨裝置數位體驗。',
  icons: {
    icon: [
      {url: sitePath('/favicon.ico'), sizes: 'any'},
      {url: sitePath('/favicon.svg'), type: 'image/svg+xml'},
    ],
  },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: '把想法，設計成有感的體驗。',
    images: ['https://haocuobian88.github.io/kelly-design-portfolio/og.png?v=2'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: '把想法，設計成有感的體驗。',
    images: ['https://haocuobian88.github.io/kelly-design-portfolio/og.png?v=2'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
