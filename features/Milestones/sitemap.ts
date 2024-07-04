import { type SitemapItem } from '@/lib/sitemap';

const sitemap: SitemapItem<'milestones'> = {
  id: 'milestones',
  meta: {
    title: 'Milestones',
  },
  title: 'Milestones',
  url: '/milestones',
  visible: {
    headerNav: true,
  },
};

export default sitemap;
