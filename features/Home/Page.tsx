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
import { useLenis } from '@studio-freight/react-lenis';
import { useScrollTo } from '@/lib/useScrollTo';
import { useState } from 'react';
import c from 'clsx';

export const HomePage = () => {
  const { id, meta } = SITEMAP.home;
  useSetThemeColor(meta.themeColor);
  const scrollTo = useScrollTo({ lock: true, stopOnComplete: true });
  const lenis = useLenis();
  const {
    detect: { isIos },
    lockTemplate,
    setThemeColor,
    setTransition,
    setTransitionInitial,
  } = useApp();
  const [animation, setAnimation] = useState(false);
  const [extraSpace, setExtraSpace] = useState(false);
  const [currentHero, setCurrentHero] = useState<SitemapWithoutArrayKeys>();

  const lockIos = (el: HTMLElement) => {
    if (!isIos) return;
    const els = el.querySelectorAll('[data-lock-ios]');
    els.forEach(el => el.classList.add('transform-none'));
  };

  const handleClick = (e: LinkEvent) => {
    e.preventDefault();
    setTransition(true);
    setTransitionInitial(false);

    const el = e.currentTarget.closest('[data-id]') as HTMLElement;

    const needsExtraSpace = lenis?.limit < el?.offsetTop;
    if (needsExtraSpace) {
      setExtraSpace(true);
      lenis?.resize();
    }

    setThemeColor(el.dataset.themeColor as AppHeadProps['themeColor']);
    setCurrentHero(el.dataset.id as SitemapWithoutArrayKeys);
    setAnimation(true);

    setTimeout(
      () => {
        scrollTo(el, () => {
          setTimeout(() => {
            lockIos(el);
            lockTemplate();
          }, 0);
        });
      },
      needsExtraSpace ? 350 : 0,
    );
  };

  return (
    <Template
      className={c({ 'is-extraSpace': extraSpace })}
      footerProps={{ border: false }}
      id={id}
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
