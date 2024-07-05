import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'sandbox'> = {
  color: 'var(--sandbox-primary)',
  id: 'sandbox',
  imagesPath: './public/sandbox/*.{jpg,png}',
  meta: {
    description:
      "Welcome to the playground. Sandbox is a collection of various concepts I've crafted in my spare time. Although these are sketches, majority of the them are based on real projects.",
    themeColor: '#E2BCA7',
    title: 'Sandbox',
  },
  title: 'Sandbox',
  url: '/sandbox',
  year: `2010–${new Date().getFullYear()}`,
};

export default sitemap;
