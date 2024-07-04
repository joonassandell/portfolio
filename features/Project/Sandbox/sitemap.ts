import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'sandbox'> = {
  color: 'var(--sandbox-primary)',
  id: 'sandbox',
  imagesPath: './public/sandbox/*.{jpg,png}',
  meta: {
    themeColor: '#E2BCA7',
    title: 'Sandbox',
  },
  title: 'Sandbox',
  url: '/sandbox',
  year: `2010–${new Date().getFullYear()}`,
};

export default sitemap;
