import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork = {
  color: 'var(--biocode-primary)',
  id: 'biocode',
  imagesPath: './public/biocode/*.{jpg,png}',
  meta: {
    themeColor: '#00081F',
    title: 'Biocode',
  },
  title: 'Biocode',
  url: '/biocode',
  year: new Date().getFullYear(),
};

export default sitemap;
