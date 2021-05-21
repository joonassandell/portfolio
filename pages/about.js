import { Template } from '../containers/Template';
import { getSitemap } from '../lib/utility';

const about = getSitemap('about');
const home = getSitemap('home');

export default function About() {
  return (
    <Template name={about.id} title={about.title}>
      About
    </Template>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: home.title,
    },
  };
}
