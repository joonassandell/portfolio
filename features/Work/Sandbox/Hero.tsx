import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import { m } from 'framer-motion';
import { SITEMAP } from '@/lib/sitemap';
import { useParallax } from '@/lib/useParallax';
import heroImage from '@/public/sandbox/hero/joonassandell-sandbox-hero.png';
import Image from 'next/image';

export const SandboxHero = ({ onClick, transition, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.sandbox;
  const { ref, value: y } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    reverse: true,
    startPosition: transition === 'pre' ? 'negative' : 0,
  });

  return (
    <Hero
      className="Hero--sandbox"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      themeColor={themeColor}
      transition={transition}
      {...props}
    >
      {({ noTransition, transitionInitial, transitionPre }) => (
        <div className="wrap">
          <div className="grid -gap:l">
            <div
              className="
                  Hero-figure grid-col
                  grid-col:7 -start:6
                  grid-col:4@l -start:6@l
                "
            >
              <m.figure className="Hero-figure-figure" style={{ y }}>
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
              </m.figure>
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
      )}
    </Hero>
  );
};
