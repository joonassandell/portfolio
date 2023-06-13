import { OrasPage } from '@/features/Project';
import { getSitemap } from '@/lib/utility';
import { getImages } from '@/lib/getImages';

const { id, navTitle, title } = getSitemap('oras');

export default function Page({ images }) {
  return <OrasPage id={id} title={title} images={images} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      navTitle,
      images: await getImages(`./public/assets/${id}/*.{jpg,png}`),
    },
  };
};