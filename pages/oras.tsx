import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { OrasPage } from '@/features/Project';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <OrasPage {...props} />;
}

export const getStaticProps = async () => {
  const { imagesPath, ...sitemap } = getSitemap('oras');
  return {
    props: {
      images: await getImages(imagesPath),
      ...sitemap,
    },
  };
};
