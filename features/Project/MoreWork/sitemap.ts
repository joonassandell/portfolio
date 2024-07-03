import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork = {
  color: 'var(--more-work-primary)',
  id: 'more-work',
  imagesPath: './public/more-work/*.{jpg,png}',
  meta: {
    themeColor: '#CCCFC9',
    title: 'More work',
  },
  title: 'More work',
  url: '/more-work',
  year: `2010–${new Date().getFullYear()}`,
};

export default sitemap;
