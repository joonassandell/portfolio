import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utils';
import { type PageProps } from '@/types';
import { SandboxPage } from '@/features/Project/Sandbox';

export default function Page({ ...props }: PageProps) {
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
