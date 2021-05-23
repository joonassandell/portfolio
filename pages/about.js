import { Template } from '../containers/Template';
import { getSitemap } from '../lib/utility';

const about = getSitemap('about');
const home = getSitemap('home');

export default function About() {
  return (
    <Template name={about.id} title={about.title}>
      <h1>H1 heading dolor sit amet consectetur</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
      <h2>H2 heading dolor sit amet consectetur</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
      <h3>H3 heading dolor sit amet consectetur</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
      <h4>H4 heading dolor sit amet consectetur</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
      <h5>H5 heading dolor sit amet consectetur</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
      <h6>H6 heading</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        labore in nostrum doloribus facilis laudantium provident omnis eos!
        Molestiae, distinctio eos nihil reprehenderit natus quibusdam repellat
        sequi incidunt velit.
      </p>
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
