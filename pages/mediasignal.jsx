import { MediasignalPage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

export default function Page({ ...props }) {
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
