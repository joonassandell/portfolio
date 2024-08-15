import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import { m } from 'framer-motion';
import { MQ } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import { useParallax } from '@/lib/useParallax';
import heroImage from '@/public/mediasignal/hero/joonassandell-mediasignal-hero.png';
import Image from 'next/image';

export const MediasignalHero = ({
  onClick,
  transition,
  ...props
}: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.mediasignal;
  const { ref, value: y } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    reverse: true,
    startPosition: transition === 'pre' ? 'negative' : 0,
  });

  return (
    <Hero
      className="Hero--mediasignal"
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
            <m.figure
              className="Hero-figure-figure"
              data-lock-ios
              style={{ y }}
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
            </m.figure>
            <m.div
              className="Hero-figure-bg Hero-figure-bg--animate"
              variants={figureBgVariants}
            />
          </div>
        </div>
      )}
    </Hero>
  );
};
