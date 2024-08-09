import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import heroImage from '@/public/sandbox/hero/joonassandell-sandbox-hero.png';
import Image from 'next/image';

export const SandboxHero = ({ onClick, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.sandbox;

  return (
    <Hero
      className="Hero--sandbox"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      themeColor={themeColor}
      {...props}
    >
      {({ noTransition, transitionInitial, transitionPre }) => {
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
                  className="Hero-figure-figure"
                  data-s
                  data-s-speed={-SCROLL_SPEED}
                  data-s-target={`[data-s-id=${id}]`}
                >
                  <m.div
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
                      priority={!transitionPre}
                      quality={80}
                      sizes="33vw"
                      src={heroImage}
                    />
                  </m.div>
                </figure>
                <m.div
                  className="Hero-figure-bg Hero-figure-bg--animate"
                  variants={figureBgVariants}
                />
              </div>
              <HeroContent
                className="grid-col grid-col:3"
                heading={title}
                href={url}
                onClick={onClick}
                role={['Various web service and application concepts']}
                transitionPre={transitionPre}
              />
            </div>
          </div>
        );
      }}
    </Hero>
  );
};
