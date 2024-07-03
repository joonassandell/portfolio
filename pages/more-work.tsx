import { getImages } from '@/lib/getImages';
import { MoreWorkPage } from '@/features/Project/MoreWork';
import { type PageProps } from '@/types';
import sitemap from '@/features/Project/MoreWork/sitemap';

export default function Page({ images }: PageProps) {
  return <MoreWorkPage images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
    },
  };
};
