import { figureBgVariants, Hero, type HeroProps } from '@/components/Hero';
import { figureInnerVariants } from '@/features/Work/Mediasignal/Hero.animations';
import { m } from 'framer-motion';
import { MQ } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import { useParallax } from '@/lib/useParallax';
import heroImage from '@/public/archive/hero/joonassandell-archive-hero.png';
import Image from 'next/image';

export const ArchiveHero = ({ onClick, ...props }: HeroProps) => {
  const { id, title, url, year } = SITEMAP.archive;
  const { ref, value: y } = useParallax({
    offset: 'start-start',
    reverse: true,
  });

  return (
    <Hero
      className="Hero--mediasignal Hero--archive"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      {...props}
    >
      {({ noTransition, transitionInitial }) => (
        <div className="wrap grid -gap:l pl:0@until:l">
          <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
            <m.figure className="Hero-figure-figure" style={{ y }}>
              <m.div
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
                  quality={60}
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
