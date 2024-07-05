import { type AppHeadProps, useApp, useSetThemeColor } from '@/components/App';
import { BiocodeHero } from '@/features/Work/Biocode';
import { FADE_OUT_VARIANTS } from '@/lib/config';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { type LinkEvent } from '@/types';
import { m } from 'framer-motion';
import { MediasignalHero } from '@/features/Work/Mediasignal';
import { MoreWorkHero } from '@/features/Work/MoreWork';
import { OrasHero } from '@/features/Work/Oras';
import { SandboxHero } from '@/features/Work/Sandbox';
import { SITEMAP, type SitemapWithoutArrayKeys } from '@/lib/sitemap';
import { Template, TemplateMain } from '@/components/Template';
import {
  useLocomotiveScroll,
  useScrollTo,
} from '@/components/LocomotiveScroll';
import { useState } from 'react';
import sitemap from './sitemap';

export const HomePage = () => {
  useSetThemeColor(sitemap.meta.themeColor);
  const scrollTo = useScrollTo({ scrollLock: true });
  const { scroll } = useLocomotiveScroll();
  const { setThemeColor, setTransition, setTransitionInitial } = useApp();
  const [animation, setAnimation] = useState(false);
  const [extraSpace, setExtraSpace] = useState(false);
  const [currentHero, setCurrentHero] = useState<SitemapWithoutArrayKeys>();

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

    setThemeColor(el.dataset.themeColor as AppHeadProps['themeColor']);
    setCurrentHero(el.dataset.id as SitemapWithoutArrayKeys);
    setTimeout(
      () => scrollTo(el, () => setAnimation(true)),
      needsExtraSpace ? 220 : 0,
    );
  };

  return (
    <Template
      className={extraSpace ? 'is-extraSpace' : ''}
      id={sitemap.id}
      variant="unstyled"
    >
      <TemplateMain>
        <m.div
          animate={animation ? 'animate' : ''}
          className="Template-about"
          variants={FADE_OUT_VARIANTS}
        >
          <div className="wrap">
            <div className="Template-about-mobile" hidden>
              <Link href={SITEMAP.about.url} orientation="vertical">
                About me
              </Link>
            </div>
            <div className="Template-about-desktop">
              <Heading size="h1">
                I'm a designer, creative developer and sometimes even a music
                producer from Helsinki, Finland. Read more{' '}
                <Link href={SITEMAP.about.url}>about me</Link> or just keep
                scrolling for selected works.
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
            transitionStart={currentHero === 'moreWork' && animation}
          />
        </div>
      </TemplateMain>
    </Template>
  );
};
