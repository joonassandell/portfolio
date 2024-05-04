import { BiocodePage } from '@/features/Project';
import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <BiocodePage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('biocode');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
