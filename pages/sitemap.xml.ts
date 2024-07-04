import { APP_URL } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import type { GetServerSideProps } from 'next';

const generateSitemap = (sitemap: (typeof SITEMAP)['all']) => {
  const uniqueURLs = (items: typeof sitemap) => {
    const seenUrls = new Set<string>();
    return items.filter(({ url }) => {
      if (seenUrls.has(url)) {
        return false;
      } else {
        seenUrls.add(url);
        return true;
      }
    });
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${uniqueURLs(
    sitemap,
  )
    .map(({ url }) => {
      return `
  <url>
    <loc>${`${APP_URL}${url}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>always</changefreq>
  </url>`;
    })
    .join('')}
</urlset>`;
};

export default function Page() {}

export const getServerSideProps = (async ({ res }) => {
  const data = [...SITEMAP.all];
  const sitemap = generateSitemap(data);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}) satisfies GetServerSideProps;
