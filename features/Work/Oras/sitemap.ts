import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'oras'> = {
  color: 'var(--oras-primary)',
  id: 'oras',
  imagesPath: './public/oras/*.{jpg,png}',
  meta: {
    description:
      'Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy.',
    themeColor: '#fefefe',
    title: 'Oras',
  },
  title: 'Oras',
  url: '/oras',
  year: 2016,
};

export default sitemap;
