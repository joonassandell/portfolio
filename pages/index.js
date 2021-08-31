import { fadeOutVariants } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { useState } from 'react';
import Link from '@/components/Link';
import OrasHero from '@/containers/Oras';
import { Template } from '@/containers/Template';
import { motion } from 'framer-motion';
import { useAppContext } from '@/containers/App';
import useScrollTo from '@/lib/useScrollTo';
const home = getSitemap('home');
const about = getSitemap('about', 'secondary');

const Home = () => {
  const { setTransition } = useAppContext();
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState('');
  const scrollTo = useScrollTo({
    scrollLock: true,
  });

  const handleClick = e => {
    e.preventDefault();
    setTransition(true);

    const el = e.currentTarget.closest('[data-id]');
    setCurrentHero(el.dataset.id);
    scrollTo(el, () => {
      setAnimationHide(true);
      setAnimation(true);
    });
  };

  return (
    <Template name={home.id} title="Portfolio">
      <motion.div
        animate={animationHide ? 'hidden' : ''}
        className="Template-about"
        variants={fadeOutVariants}
      >
        <div className="wrap">
          <Link
            href={about.url}
            className="Template-about-mobile"
            orientation="vertical"
            underline
          >
            About me
          </Link>
          <div className="Template-about-desktop">
            <h1>
              I'm a designer, creative developer and sometimes even a music
              producer from Helsinki, Finland. Read more{' '}
              <Link href={about.url} underline>
                about me
              </Link>{' '}
              or just keep scrolling for selected works.
            </h1>
          </div>
        </div>
      </motion.div>

      <OrasHero
        id="oras"
        onClick={handleClick}
        transitionStart={currentHero === 'oras' && animation}
        transitionState="pre"
        transitionHideStart={currentHero != 'oras' && animationHide}
      />

      <div data-id="test" onClick={handleClick} style={{ height: '300vh' }} />
    </Template>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      navTitle: home.title,
    },
  };
}
