import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import { m } from 'framer-motion';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import heroImage from '@/public/mediasignal/hero/joonassandell-mediasignal-hero.png';
import Image from 'next/image';

export const MediasignalHero = ({ onClick, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.mediasignal;

  return (
    <Hero
      className="Hero--mediasignal"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      themeColor={themeColor}
      {...props}
    >
      {({ noTransition, transitionInitial, transitionPre }) => {
        return (
          <div className="wrap grid -gap:l pl:0@until:l">
            <HeroContent
              className="grid-col grid-col:3"
              heading={title}
              href={url}
              onClick={onClick}
              role={['UI/UX design', 'Brand design', 'Web development']}
              transitionPre={transitionPre}
            />
            <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
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
                  custom={{ delay: transitionInitial ? 0.1 : 0 }}
                  variants={figureInnerVariants}
                >
                  <Image
                    alt="Mediasignal homepage sketch in iPad"
                    draggable="false"
                    priority={!transitionPre}
                    quality={85}
                    sizes={`${MQ.l} 60vw, 90vw`}
                    src={heroImage}
                  />
                </m.div>
              </figure>
              <m.div
                className="Hero-figure-bg Hero-figure-bg--animate"
                variants={figureBgVariants}
              />
            </div>
          </div>
        );
      }}
    </Hero>
  );
};
