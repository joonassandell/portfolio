import { ArchivePage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

export default function Page({ ...props }) {
  return <ArchivePage {...props} />;
}

export const getStaticProps = async () => {
  const { images, ...sitemap } = getSitemap('archive');
  return {
    props: {
      images: await getImages(images),
      ...sitemap,
    },
  };
};
