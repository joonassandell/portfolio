import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'archive'> = {
  color: 'var(--archive-primary)',
  hidden: {
    footerNav: true,
    headerMaskNav: true,
  },
  id: 'archive',
  imagesPath: './public/archive/*.{jpg,png}',
  meta: {
    themeColor: '#CCCFC9',
    title: 'Archive',
  },
  title: 'Work archive',
  url: '/archive',
  year: '2010–2016',
};

export default sitemap;
