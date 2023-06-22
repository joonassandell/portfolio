import { FADE_OUT_VARIANTS } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import {
  OrasHero,
  BiocodeHero,
  MediasignalHero,
  MoreWorkHero,
} from '@/features/Project';
import { m } from 'framer-motion';
import { Template, TemplateMain } from '@/components/Template';
import { useAppContext } from '@/components/App';
import { useState } from 'react';
import { Link } from '@/components/Link';
import { useScrollTo } from '@/lib/useScrollTo';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Title } from '@/components/Title';

const about = getSitemap('about', 'secondary');

export const HomePage = ({ id, title }) => {
  const { setTransition, setTransitionInitial } = useAppContext();
  const [animation, setAnimation] = useState(false);
  const [extraSpace, setExtraSpace] = useState(false);
  const [currentHero, setCurrentHero] = useState('');
  const scrollTo = useScrollTo({
    scrollLock: true,
  });
  const { scroll } = useLocomotiveScroll();

  const handleClick = e => {
    e.preventDefault();
    setTransition(true);
    setTransitionInitial(false);

    const el = e.currentTarget.closest('[data-id]');
    const needsExtraSpace = scroll.scroll.instance.limit.y < el.offsetTop;

    if (needsExtraSpace) {
      setExtraSpace(true);
      scroll.update();
    }

    setCurrentHero(el.dataset.id);
    setTimeout(
      () => {
        scrollTo(el, () => setAnimation(true));
      },
      needsExtraSpace ? 220 : 0,
    );
  };

  return (
    <Template className={extraSpace && 'is-extraSpace'} id={id}>
      <Title title={title} />
      <TemplateMain>
        <m.div
          animate={animation ? 'hidden' : false}
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
        <div className="Template-heros">
          <BiocodeHero
            onClick={handleClick}
            transitionStart={currentHero === 'biocode' && animation}
            transition="pre"
          />
          <OrasHero
            onClick={handleClick}
            transitionStart={currentHero === 'oras' && animation}
            transition="pre"
          />
          <MediasignalHero
            onClick={handleClick}
            transitionStart={currentHero === 'mediasignal' && animation}
            transition="pre"
          />
          <MoreWorkHero
            onClick={handleClick}
            transitionStart={currentHero === 'more-work' && animation}
            transition="pre"
          />
        </div>
      </TemplateMain>
    </Template>
  );
};
