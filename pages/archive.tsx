import { ArchivePage } from '@/features/Project';
import { getImages } from '@/lib/getImages';
import { getSitemap } from '@/lib/utility';
import { type PageProjectProps } from '@/types';

export default function Page({ ...props }: PageProjectProps) {
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
