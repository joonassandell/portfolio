import {
  BiocodeHero,
  MediasignalHero,
  MoreWorkHero,
  OrasHero,
  SandboxHero,
} from '@/features/Project';
import { FADE_OUT_VARIANTS } from '@/lib/config';
import { getSitemap } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { type LinkEvent, type PageProps } from '@/types';
import { m } from 'framer-motion';
import { Template, TemplateMain } from '@/components/Template';
import { useAppContext, useSetThemeColor } from '@/components/App';
import {
  useLocomotiveScroll,
  useScrollTo,
} from '@/components/LocomotiveScroll';
import { useState } from 'react';

const about = getSitemap('about', 'common');

export const HomePage = ({ id, themeColor }: PageProps) => {
  useSetThemeColor(themeColor);
  const scrollTo = useScrollTo({ scrollLock: true });
  const { scroll } = useLocomotiveScroll();
  const { setThemeColor, setTransition, setTransitionInitial } =
    useAppContext();
  const [animation, setAnimation] = useState(false);
  const [extraSpace, setExtraSpace] = useState(false);
  const [currentHero, setCurrentHero] = useState<string>();

  const handleClick = (e: LinkEvent) => {
    if (!scroll) return;
    e.preventDefault();
    setTransition(true);
    setTransitionInitial(false);

    const el = e.currentTarget.closest('[data-id]') as HTMLElement;

    const needsExtraSpace = scroll.scroll.instance.limit.y < el?.offsetTop;
    if (needsExtraSpace) {
      setExtraSpace(true);
      scroll.update();
    }

    setThemeColor(el.dataset.themeColor);
    setCurrentHero(el.dataset.id);
    setTimeout(
      () => scrollTo(el, () => setAnimation(true)),
      needsExtraSpace ? 220 : 0,
    );
  };

  return (
    <Template className={extraSpace ? 'is-extraSpace' : ''} id={id}>
      <TemplateMain>
        <m.div
          animate={animation ? 'animate' : ''}
          className="Template-about"
          variants={FADE_OUT_VARIANTS}
        >
          <div className="wrap">
            <div className="Template-about-mobile" hidden>
              <Link href={about.url} orientation="vertical">
                About me
              </Link>
            </div>
            <div className="Template-about-desktop">
              <Heading size={null} tag="h1">
                I'm a designer, creative developer and sometimes even a music
                producer from Helsinki, Finland. Read more{' '}
                <Link href={about.url}>about me</Link> or just keep scrolling
                for selected works.
              </Heading>
            </div>
          </div>
        </m.div>
        <div className="Template-heros">
          <BiocodeHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'biocode' && animation}
          />
          <OrasHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'oras' && animation}
          />
          <MediasignalHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'mediasignal' && animation}
          />
          <SandboxHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'sandbox' && animation}
          />
          <MoreWorkHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'more-work' && animation}
          />
        </div>
      </TemplateMain>
    </Template>
  );
};
