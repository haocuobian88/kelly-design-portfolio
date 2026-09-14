'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

const MEASUREMENT_ID = 'G-H5WGM43CQB';
const PRODUCTION_HOST = 'haocuobian88.github.io';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hostname !== PRODUCTION_HOST) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag('js', new Date());

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.googleAnalytics = MEASUREMENT_ID;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (window.location.hostname !== PRODUCTION_HOST || !window.gtag) return;

    const query = window.location.search.slice(1);
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag('config', MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
