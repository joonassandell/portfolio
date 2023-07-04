import { m } from 'framer-motion';
import { SCROLL_SPEED, MQ } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, figureBgVariants } from '@/components/Hero';
import { figureInnerVariants } from '@/features/Project/Mediasignal/Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/archive/hero/joonassandell-archive-hero.png';

export const ArchiveHero = ({ onClick, ...props }) => {
  const { url, year, id, title } = getSitemap('archive');

  return (
    <Hero
      className="Hero--mediasignal Hero--archive"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({ transitionInitial }) => {
        return (
          <div className="wrap grid -gap:l pl:0@until:l">
            <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
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
                  custom={{ enableInitial: transitionInitial }}
                  variants={figureInnerVariants}
                >
                  <Image
                    alt="Vapriikki home page sketch in iPad"
                    draggable="false"
                    priority
                    sizes={`${MQ.l} 70vw, 90vw`}
                    src={heroImage}
                  />
                </m.div>
              </figure>
              <m.div
                className="Hero-figureBg Hero-figureBg--animate"
                variants={figureBgVariants}
              />
            </div>
          </div>
        );
      }}
    </Hero>
  );
};
