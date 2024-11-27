import { type SitemapItem } from '@/lib/sitemap'

const sitemap: Omit<SitemapItem<'404'>, 'url'> = {
  id: '404',
  meta: {
    title: 'Page not found',
  },
  title: 'Page not found',
}

export default sitemap
