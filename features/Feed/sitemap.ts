import { type SitemapItem } from '@/lib/sitemap'

const sitemap: SitemapItem<'feed'> = {
  id: 'feed',
  imagesPath: './public/feed/*.{jpg,png}',
  meta: {
    description:
      'A space for sharing my latest designs, explorations, and work-in-progress shots. Think of it as my personal Dribbble — a place for ideas, experiments, and the things I’m currently building.',
    themeColor: '#000000',
    title: 'Feed',
  },
  title: 'Feed',
  url: '/feed',
}

export default sitemap
