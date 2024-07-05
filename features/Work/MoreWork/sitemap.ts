import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'moreWork'> = {
  color: 'var(--more-work-primary)',
  id: 'moreWork',
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
