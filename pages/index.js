import { fadeOutVariants } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { HeroOras, HeroBiocode } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Template } from '@/components/Template';
import { useAppContext } from '@/components/App';
import { useState } from 'react';
import { Link } from '@/components/Link';
import { useScrollTo } from '@/lib/useScrollTo';

const home = getSitemap('home');
const about = getSitemap('about', 'secondary');

const Home = () => {
  const { setTransition, setTransitionInitial } = useAppContext();
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState('');
  const scrollTo = useScrollTo({
    scrollLock: true,
  });

  const handleClick = e => {
    e.preventDefault();
    setTransition(true);
    setTransitionInitial(false);

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

      <HeroBiocode
        id="biocode"
        onClick={handleClick}
        transitionStart={currentHero === 'biocode' && animation}
        transition="pre"
        transitionHideStart={currentHero != 'biocode' && animationHide}
      />

      <HeroOras
        id="oras"
        onClick={handleClick}
        transitionStart={currentHero === 'oras' && animation}
        transition="pre"
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
