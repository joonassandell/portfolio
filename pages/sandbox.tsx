import { getImages } from '@/lib/getImages';
import { type GetStaticProps } from 'next';
import { type PageProps } from '@/types';
import { SandboxPage } from '@/features/Project/Sandbox';
import sitemap from '@/features/Project/Sandbox/sitemap';

export default function Page({ images }: PageProps) {
  return <SandboxPage images={images} />;
}

export const getStaticProps = (async () => {
  return {
    props: {
      images: await getImages(sitemap.imagesPath),
      navTitle: sitemap.title,
    },
  };
}) satisfies GetStaticProps<PageProps>;
