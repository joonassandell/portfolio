import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { OrasPage } from '@/features/Project';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <OrasPage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('oras');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
