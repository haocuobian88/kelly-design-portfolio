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

    // 等頁面載入完成、瀏覽器閒置後才載入 GA，避免和首屏內容搶頻寬與主執行緒；
    // 在這之前的 gtag 呼叫會先排在 dataLayer，載入後一併送出
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.googleAnalytics = MEASUREMENT_ID;
    let idleId: number | undefined;
    let timer: number | undefined;
    const inject = () => document.head.appendChild(script);
    const schedule = () => {
      if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(inject, {timeout: 4000});
      else timer = globalThis.setTimeout(inject, 1500) as unknown as number;
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, {once: true});

    return () => {
      window.removeEventListener('load', schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timer !== undefined) globalThis.clearTimeout(timer);
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
