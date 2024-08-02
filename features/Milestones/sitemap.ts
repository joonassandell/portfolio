import { type SitemapItem } from '@/lib/sitemap';

const sitemap: SitemapItem<'milestones'> = {
  id: 'milestones',
  meta: {
    description:
      'A compilation of milestones from my professional activities, including project launches, feature releases, achievements, album releases, recognitions, and career progress.',
    title: 'Milestones',
  },
  title: 'Milestones',
  url: '/milestones',
};

export default sitemap;
