import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/sandbox/hero/joonassandell-sandbox-hero.png';

export const SandboxHero = ({ onClick, ...props }) => {
  const { url, id, title, year } = getSitemap('sandbox');

  return (
    <Hero
      className="Hero--sandbox"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({ transitionPre, noTransition, transitionInitial }) => {
        return (
          <div className="wrap">
            <div className="grid -gap:l">
              <div
                className="
                  Hero-figure grid-col
                  grid-col:7 -start:6
                  grid-col:4@l -start:6@l
                "
              >
                <figure
                  data-scroll
                  data-scroll-target={`[data-scroll-id=${id}]`}
                  data-scroll-speed={-SCROLL_SPEED}
                  className="Hero-figure-figure"
                >
                  <m.div
                    className="Hero-figure-figure-inner"
                    {...(transitionInitial && {
                      animate: 'animate',
                      initial: 'initial',
                    })}
                    {...(noTransition && { initial: 'animate' })}
                    variants={figureInnerVariants}
                  >
                    <Image
                      alt="Box of projects"
                      draggable="false"
                      priority
                      sizes="33vw"
                      src={heroImage}
                      quality={90}
                    />
                  </m.div>
                </figure>
                <m.div
                  className="Hero-figureBg Hero-figureBg--animate"
                  variants={figureBgVariants}
                />
              </div>
              <HeroContent
                className="grid-col grid-col:3"
                heading={title}
                href={url}
                onClick={onClick}
                transitionPre={transitionPre}
                role={['Various concepts of web services and applications']}
              />
            </div>
          </div>
        );
      }}
    </Hero>
  );
};
