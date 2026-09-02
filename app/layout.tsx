import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yu-hsuan-design-portfolio.kellylei9.chatgpt.site'),
  title: 'YU-HSUAN — Visual & Product Designer',
  description: '專注於數位體驗與品牌視覺的設計作品集。',
  openGraph: {
    title: 'YU-HSUAN — Visual & Product Designer',
    description: '把想法，設計成有感的體驗。',
    images: ['https://yu-hsuan-design-portfolio.kellylei9.chatgpt.site/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YU-HSUAN — Visual & Product Designer',
    description: '把想法，設計成有感的體驗。',
    images: ['https://yu-hsuan-design-portfolio.kellylei9.chatgpt.site/og.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
