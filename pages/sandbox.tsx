import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { type PageProjectProps } from '@/types';
import { SandboxPage } from '@/features/Project';

export default function Page({ ...props }: PageProjectProps) {
  return <SandboxPage {...props} />;
}

export const getStaticProps = async () => {
  const { imagesPath, ...sitemap } = getSitemap('sandbox');
  return {
    props: {
      images: await getImages(imagesPath),
      ...sitemap,
    },
  };
};
