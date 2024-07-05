import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'mediasignal'> = {
  color: 'var(--mediasignal-primary)',
  id: 'mediasignal',
  imagesPath: './public/mediasignal/*.{jpg,png}',
  meta: {
    themeColor: '#C8D9E1',
    title: 'Mediasignal',
  },
  title: 'Mediasignal',
  url: '/mediasignal',
  year: 2019,
};

export default sitemap;
