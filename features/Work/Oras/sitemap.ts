import { type SitemapItemWork } from '@/lib/sitemap'

const sitemap: SitemapItemWork<'oras'> = {
  color: 'var(--oras-primary)',
  id: 'oras',
  imagesPath: './public/oras/*.{jpg,png}',
  meta: {
    description:
      'Oras is a significant developer and manufacturer of faucets. We were asked to create an extensive web service for Europe’s leading faucet manufacturer.',
    ogImage: '/oras/og.jpg',
    themeColor: '#fefefe',
    title: 'Oras',
  },
  title: 'Oras',
  url: '/oras',
  year: 2016,
}

export default sitemap
