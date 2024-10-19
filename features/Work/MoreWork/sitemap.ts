import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'moreWork'> = {
  color: 'var(--more-work-primary)',
  id: 'moreWork',
  imagesPath: './public/more-work/*.{jpg,png}',
  meta: {
    description:
      'So you wanted to see more, nice! This collection brings together a range of designs, primarily focused on websites and applications that I’ve crafted for a diverse set of clients.',
    themeColor: '#CCCFC9',
    title: 'More Work',
  },
  title: 'More Work',
  url: '/more-work',
  year: `2010 – 2020`,
};

export default sitemap;
