import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'biocode'> = {
  color: 'var(--biocode-primary)',
  id: 'biocode',
  imagesPath: './public/biocode/*.{jpg,png}',
  meta: {
    description:
      'I’m currently working for Biocode as a Lead Product Designer and Front-end Developer. I’m building our brand and website, crafting our design system, developing our software and enhancing the overall direction of our product.',
    ogImage: '/biocode/og.jpg',
    themeColor: '#00081f',
    title: 'Biocode',
  },
  title: 'Biocode',
  url: '/biocode',
  year: new Date().getFullYear(),
};

export default sitemap;
