import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utility';
import { MoreWorkPage } from '@/features/Project';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <MoreWorkPage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('more-work');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
