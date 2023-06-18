import { BiocodePage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

const { id, navTitle, ...sitemap } = getSitemap('biocode');

export default function Page({ images }) {
  return <BiocodePage id={id} images={images} {...sitemap} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      navTitle,
      images: await getImages(`./public/${id}/*.{jpg,png}`),
    },
  };
};
