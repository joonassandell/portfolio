import { SandboxPage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
  return <SandboxPage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('sandbox');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
