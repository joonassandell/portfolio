import { type SitemapItemWork } from '@/lib/sitemap';

const sitemap: SitemapItemWork<'moreWork'> = {
  color: 'var(--more-work-primary)',
  id: 'moreWork',
  imagesPath: './public/more-work/*.{jpg,png}',
  meta: {
    description:
      'This collection brings together a range of designs, primarily focused on websites and applications that I have crafted for a diverse set of clients.',
    ogImage: '/more-work/og.jpg',
    themeColor: '#CCCFC9',
    title: 'More Work',
  },
  title: 'More Work',
  url: '/more-work',
  year: '2015 – 2020',
};

export default sitemap;
