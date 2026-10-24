import type {Metadata} from 'next';
import {profile, projects} from './site-data';

// 每一頁自己的標題、簡介與分享預覽圖；案例頁的預覽圖在 public/og/<slug>.jpg。
const SITE='https://haocuobian88.github.io/kelly-design-portfolio';

export function pageMetadata({title,description,path,image='/og.png?v=3'}:{title:string,description:string,path:string,image?:string}):Metadata{
  const fullTitle=`${title} — ${profile.name}`;
  const url=`${SITE}${path}`;
  const images=[`${SITE}${image}`];
  return {
    title:fullTitle,
    description,
    alternates:{canonical:url},
    openGraph:{title:fullTitle,description,url,images,type:'website',locale:'zh_TW',siteName:`${profile.name} 作品集`},
    twitter:{card:'summary_large_image',title:fullTitle,description,images},
  };
}

export function caseMetadata(slug:string):Metadata{
  const project=projects.find(item=>item.slug===slug);
  if(!project) throw new Error(`Unknown project: ${slug}`);
  const tags=[project.category, project.sideProject?'自主練習':null, project.role].filter(Boolean).join(' · ');
  return pageMetadata({
    title:project.title,
    description:`${project.subtitle}。${tags}｜${profile.name} 的 UI / Product Design 作品集。`,
    path:`/projects/${slug}/`,
    image:`/og/${slug}.jpg`,
  });
}
