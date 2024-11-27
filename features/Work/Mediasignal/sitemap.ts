import { type SitemapItemWork } from '@/lib/sitemap'

const sitemap: SitemapItemWork<'mediasignal'> = {
  color: 'var(--mediasignal-primary)',
  id: 'mediasignal',
  imagesPath: './public/mediasignal/*.{jpg,png}',
  meta: {
    description:
      'Mediasignal is a digital agency where I worked over half a decade and was involved in hundreds of successful projects. Additionally, I was also responsible for refreshing Mediasignal’s brand twice.',
    ogImage: '/mediasignal/og.jpg',
    themeColor: '#C8D9E1',
    title: 'Mediasignal',
  },
  title: 'Mediasignal',
  url: '/mediasignal',
  year: 2019,
}

export default sitemap
