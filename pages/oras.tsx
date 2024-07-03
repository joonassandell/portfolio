import { getImages } from '@/lib/getImages';
import { OrasPage } from '@/features/Project/Oras';
import { type PageProps } from '@/types';
import sitemap from '@/features/Project/Oras/sitemap';

export default function Page({ images }: PageProps) {
  return <OrasPage images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
    },
  };
};
