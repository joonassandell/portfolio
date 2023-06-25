import { SandboxPage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

export default function Page({ ...props }) {
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
