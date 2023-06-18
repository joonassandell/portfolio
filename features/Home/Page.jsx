import { FADE_OUT_VARIANTS } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { OrasHero, BiocodeHero, MediasignalHero } from '@/features/Project';
import { m } from 'framer-motion';
import { Template } from '@/components/Template';
import { useAppContext } from '@/components/App';
import { useState } from 'react';
import { Link } from '@/components/Link';
import { useScrollTo } from '@/lib/useScrollTo';

const about = getSitemap('about', 'secondary');

export const HomePage = ({ id, title }) => {
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
    <Template name={id} title={title}>
      <m.div
        animate={animationHide ? 'hidden' : ''}
        className="Template-about"
        variants={FADE_OUT_VARIANTS}
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
      </m.div>

      <BiocodeHero
        onClick={handleClick}
        transitionStart={currentHero === 'biocode' && animation}
        transition="pre"
        transitionHideStart={currentHero != 'biocode' && animationHide}
      />

      <OrasHero
        onClick={handleClick}
        transitionStart={currentHero === 'oras' && animation}
        transition="pre"
        transitionHideStart={currentHero != 'oras' && animationHide}
      />

      <MediasignalHero
        onClick={handleClick}
        transitionStart={currentHero === 'mediasignal' && animation}
        transition="pre"
        transitionHideStart={currentHero != 'mediasignal' && animationHide}
      />

      <div data-id="test" onClick={handleClick} style={{ height: '300vh' }} />
    </Template>
  );
};
