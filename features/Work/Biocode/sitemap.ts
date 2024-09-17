import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'biocode'> = {
  color: 'var(--biocode-primary)',
  id: 'biocode',
  imagesPath: './public/biocode/*.{jpg,png}',
  meta: {
    description:
      'Biocode is the carbon footprint calculator for food brands and producers. It’s an easy tool for calculating emissions and clearly communicating environmental values to end customers.',
    ogImage: '/biocode/og.jpg',
    themeColor: '#00081f',
    title: 'Biocode',
  },
  new: true,
  title: 'Biocode',
  url: '/biocode',
  year: new Date().getFullYear(),
};

export default sitemap;
