import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'biocode'> = {
  color: 'var(--biocode-primary)',
  id: 'biocode',
  imagesPath: './public/biocode/*.{jpg,png}',
  meta: {
    description:
      'Carbon footprint calculator that makes sense. I crafted our brand and website, maintained our design system, developed our software and enhanced the overall direction of our product.',
    ogImage: '/biocode/og.jpg',
    themeColor: '#00081f',
    title: 'Biocode',
  },
  new: true,
  title: 'Biocode',
  url: '/biocode',
  year: 2024,
};

export default sitemap;
