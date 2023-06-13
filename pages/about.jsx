import { AboutPage } from '@/features/About';
import { getSitemap } from '@/lib/utility';

const { id, title } = getSitemap('about', 'secondary');
const home = getSitemap('home');

export default function Page() {
  return <AboutPage id={id} title={title} />
};

export async function getStaticProps() {
  return {
    props: {
      navTitle: home.title,
    },
  };
}
