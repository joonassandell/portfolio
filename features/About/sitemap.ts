import { type SitemapItem } from '@/lib/sitemap';

const sitemap: SitemapItem<'about'> = {
  id: 'about',
  meta: {
    description:
      "I'm UI/UX designer and creative front-end developer of things that usually appear on screens.",
    themeColor: '#eeeae5',
    title: 'About',
  },
  title: 'About',
  url: '/about',
};

export default sitemap;
