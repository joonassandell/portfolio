import { FEED, FeedPage, type PageProps } from '@/features/Feed'
import { getImages } from '@/lib/getImages'
import { type GetStaticProps } from 'next'
import sitemap from '@/features/Feed/sitemap'

export default function Page({ data }: PageProps) {
  return <FeedPage data={data} />
}

export const getStaticProps = (async () => {
  const images = await getImages(sitemap.imagesPath)

  return {
    props: {
      data: FEED.map(item => {
        const image = images?.find(img => img.src.includes(item.image.src))

        return {
          ...item,
          image: {
            ...item.image,
            ...image,
          },
        }
      }),
    },
  }
}) satisfies GetStaticProps<PageProps>
