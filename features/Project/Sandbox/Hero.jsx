import { m } from 'framer-motion';
import { SCROLL_SPEED, MQ } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/sandbox/hero/joonassandell-sandbox-hero.png';

const { url, id, title, year } = getSitemap('sandbox');

export const SandboxHero = ({ onClick, ...props }) => {
  return (
    <Hero
      className="Hero--sandbox"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({ transitionPre, transitionDefault, transitionInitial }) => {
        return (
          <div className="wrap">
            <div className="grid -gap:l">
              <div
                className="
                  Hero-figure grid-col
                  grid-col:7 -start:6
                  grid-col:5@l -start:4@l
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
                    {...(transitionDefault && {
                      initial: 'animate',
                    })}
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
                className="grid-col grid-col:3 -start:9"
                heading={title}
                href={url}
                onClick={onClick}
                transitionPre={transitionPre}
                role={['UI/UX design', 'Concept strategy', 'Web development']}
              />
            </div>
          </div>
        );
      }}
    </Hero>
  );
};
