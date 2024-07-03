import { getImages } from '@/lib/getImages';
import { MediasignalPage } from '@/features/Project/Mediasignal';
import { type PageProps } from '@/types';
import sitemap from '@/features/Project/Mediasignal/sitemap';

export default function Page({ images }: PageProps) {
  return <MediasignalPage images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
    },
  };
};
