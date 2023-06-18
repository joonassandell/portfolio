import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import { figureInnerVariants } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/mediasignal/hero/joonassandell-mediasignal-hero.png';

const { url, year, id, title } = getSitemap('mediasignal');

export const MediasignalHero = ({ onClick, ...props }) => {
  return (
    <Hero
      className="Hero--mediasignal"
      heading={`Mediasignal — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({ transitionPre }) => {
        return (
          <div className="wrap grid -gap:l pl:0@until:l">
            <HeroContent
              className="grid-col grid-col:3"
              heading={title}
              href={url}
              onClick={onClick}
              transitionPre={transitionPre}
              role={[
                'UI/UX/Brand design',
                'Web development',
                'Concept strategy',
              ]}
            />
            <div
              className="
                  Hero-figure grid-col
                  grid-col:7
                  grid-col:6@s
                  grid-col:5@l -start:4@l
                "
              onClick={onClick}
            >
              <figure
                data-scroll
                data-scroll-target={`[data-scroll-id=${id}]`}
                data-scroll-speed={-SCROLL_SPEED}
                className="Hero-figure-figure"
              >
                <m.div
                  className="Hero-figure-figure-inner"
                  variants={figureInnerVariants}
                >
                  <Image
                    alt="Mediasignal homepage in iPad"
                    draggable="false"
                    priority
                    sizes="33vw"
                    src={heroImage}
                    quality="90"
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
