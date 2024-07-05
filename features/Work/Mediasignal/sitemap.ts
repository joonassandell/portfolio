import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'mediasignal'> = {
  color: 'var(--mediasignal-primary)',
  id: 'mediasignal',
  imagesPath: './public/mediasignal/*.{jpg,png}',
  meta: {
    description:
      "Mediasignal is building digital services and customer experiences according to their customer’s vision. The company is renewing digital business' and strengthening brands with a creative touch.",
    themeColor: '#C8D9E1',
    title: 'Mediasignal',
  },
  title: 'Mediasignal',
  url: '/mediasignal',
  year: 2019,
};

export default sitemap;
