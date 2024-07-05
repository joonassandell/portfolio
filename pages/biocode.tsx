import { BiocodePage } from '@/features/Work/Biocode';
import { getImages } from '@/lib/getImages';
import { type GetStaticProps } from 'next';
import { type PageProps } from '@/types';
import sitemap from '@/features/Work/Biocode/sitemap';

export default function Page({ images }: PageProps) {
  return <BiocodePage images={images} />;
}

export const getStaticProps = (async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
      navTitle: sitemap.title,
    },
  };
}) satisfies GetStaticProps<PageProps>;
