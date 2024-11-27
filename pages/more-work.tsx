import { getImages } from '@/lib/getImages'
import { type GetStaticProps } from 'next'
import { MoreWorkPage } from '@/features/Work/MoreWork'
import { type PageProps } from '@/types'
import sitemap from '@/features/Work/MoreWork/sitemap'

export default function Page({ images }: PageProps) {
  return <MoreWorkPage images={images} />
}

export const getStaticProps = (async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
      navTitle: sitemap.title,
    },
  }
}) satisfies GetStaticProps<PageProps>
