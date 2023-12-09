import { m } from 'framer-motion';
import { SCROLL_SPEED, MQ } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/mediasignal/hero/joonassandell-mediasignal-hero.png';

export const MediasignalHero = ({ onClick, ...props }) => {
  const { url, year, id, title, themeColor } = getSitemap('mediasignal');

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
      {({ transitionPre, transitionInitial, noTransition }) => {
        return (
          <div className="wrap grid -gap:l pl:0@until:l">
            <HeroContent
              className="grid-col grid-col:3"
              heading={title}
              href={url}
              onClick={onClick}
              transitionPre={transitionPre}
              role={['UI/UX design', 'Brand design', 'Web development']}
            />
            <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
              <figure
                data-s
                data-s-target={`[data-s-id=${id}]`}
                data-s-speed={-SCROLL_SPEED}
                className="Hero-figure-figure"
              >
                <m.div
                  className="Hero-figure-figure-inner"
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
                    priority
                    sizes={`${MQ.l} 70vw, 90vw`}
                    src={heroImage}
                    quality={95}
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
