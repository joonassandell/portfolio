import { type SitemapItem } from '@/lib/sitemap';

const sitemap: SitemapItem<'contact'> = {
  id: 'contact',
  meta: {
    description:
      'I enjoy connecting with new people online and participating in events. The easiest way to reach me is via email but alternatively feel free to send me a message through Twitter.',
    themeColor: '#c1c0b6',
    title: 'Contact',
  },
  title: 'Contact',
  url: '/contact',
};

export default sitemap;
