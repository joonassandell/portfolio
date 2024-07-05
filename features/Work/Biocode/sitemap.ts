import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'biocode'> = {
  color: 'var(--biocode-primary)',
  id: 'biocode',
  imagesPath: './public/biocode/*.{jpg,png}',
  meta: {
    description:
      'I’m currently working for Biocode as lead product designer and front-end developer. I’m responsible for crafting our design system and making sure our application’s code stays manageable.',
    themeColor: '#00081F',
    title: 'Biocode',
  },
  title: 'Biocode',
  url: '/biocode',
  year: new Date().getFullYear(),
};

export default sitemap;
