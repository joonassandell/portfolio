import { type SitemapItem } from '@/lib/sitemap';

const sitemap: SitemapItem = {
  id: 'about',
  meta: {
    description:
      "I'm UI/UX designer and creative front-end developer of things that usually appear on screens.",
    themeColor: '#eeeae5',
    title: 'About',
  },
  title: 'About',
  url: '/about',
  visible: {
    headerNav: true,
  },
};

export default sitemap;
