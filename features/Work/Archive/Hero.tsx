import { figureBgVariants, Hero, type HeroProps } from '@/components/Hero';
import { figureInnerVariants } from '@/features/Work/Mediasignal/Hero.animations';
import { m } from 'framer-motion';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import heroImage from '@/public/archive/hero/joonassandell-archive-hero.png';
import Image from 'next/image';

export const ArchiveHero = ({ onClick, ...props }: HeroProps) => {
  const { id, title, url, year } = SITEMAP.archive;

  return (
    <Hero
      className="Hero--mediasignal Hero--archive"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({ noTransition, transitionInitial }) => {
        return (
          <div className="wrap grid -gap:l pl:0@until:l">
            <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
              <figure
                className="Hero-figure-figure"
                data-scroll
                data-scroll-speed={-SCROLL_SPEED}
                data-scroll-target={`[data-scroll-id=${id}]`}
              >
                <m.div
                  className="Hero-figure-figure-inner"
                  {...(transitionInitial && {
                    animate: 'animate',
                    initial: 'initial',
                  })}
                  {...(noTransition && { initial: 'animate' })}
                  custom={{ delay: 0.1 }}
                  variants={figureInnerVariants}
                >
                  <Image
                    alt="Vapriikki home page sketch in iPad"
                    draggable="false"
                    priority
                    quality="60"
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
