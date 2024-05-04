import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { MediasignalPage } from '@/features/Project';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <MediasignalPage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('mediasignal');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
