import { BiocodePage } from '@/features/Project/Biocode';
import { getImages } from '@/lib/getImages';
import { type PageProps } from '@/types';
import sitemap from '@/features/Project/Biocode/sitemap';

export default function Page({ images }: PageProps) {
  return <BiocodePage images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
    },
  };
};
