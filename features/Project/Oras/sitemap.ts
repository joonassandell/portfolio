import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork = {
  color: 'var(--oras-primary)',
  id: 'oras',
  imagesPath: './public/oras/*.{jpg,png}',
  meta: {
    title: 'Oras',
  },
  title: 'Oras',
  url: '/oras',
  year: 2016,
};

export default sitemap;
