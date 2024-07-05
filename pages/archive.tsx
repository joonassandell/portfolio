import { ArchivePage } from '@/features/Work/Archive';
import { getImages } from '@/lib/getImages';
import { type GetStaticProps } from 'next';
import { type PageProps } from '@/types';
import sitemap from '@/features/Work/Archive/sitemap';

export default function Page({ images }: PageProps) {
  return <ArchivePage images={images} />;
}

export const getStaticProps = (async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
      navTitle: sitemap.title,
    },
  };
}) satisfies GetStaticProps<PageProps>;
