import { ArchivePage } from '@/features/Project/Archive';
import { getImages } from '@/lib/getImages';
import { type PageProps } from '@/types';
import sitemap from '@/features/Project/Archive/sitemap';

export default function Page({ images }: PageProps) {
  return <ArchivePage images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
    },
  };
};
