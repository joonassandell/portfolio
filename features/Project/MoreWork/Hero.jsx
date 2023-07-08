import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import Image from 'next/image';
import heroImage from '@/public/more-work/hero/joonassandell-more-work-hero.png';
import heroImage2 from '@/public/more-work/hero/joonassandell-more-work-hero-2.png';

export const MoreWorkHero = ({ onClick, ...props }) => {
  const { url, year, id, title, themeColor } = getSitemap('more-work');

  return (
    <Hero
      className="Hero--moreWork"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      themeColor={themeColor}
      {...props}
    >
      {({ transitionPre }) => {
        return (
          <div className="wrap grid -gap:l pl:0">
            <div className="Hero-figure grid-col grid-col:6 grid-col:6@l">
              <figure
                data-s
                data-s-target={`[data-s-id=${id}]`}
                data-s-speed={-SCROLL_SPEED}
                className="Hero-figure-figure"
              >
                <Image
                  alt="Omoroi homepage in phone"
                  draggable="false"
                  priority
                  sizes="40vw"
                  src={heroImage}
                />
              </figure>
              <figure
                data-s
                data-s-target={`[data-s-id=${id}]`}
                data-s-speed={SCROLL_SPEED}
                className="Hero-figure-figure Hero-figure-figure--bottom"
              >
                <Image
                  alt="Hankkija homepage in phone"
                  draggable="false"
                  priority
                  sizes="40vw"
                  src={heroImage2}
                />
              </figure>
              <m.div
                className="Hero-figureBg Hero-figureBg--animate"
                variants={figureBgVariants}
              />
            </div>
            <HeroContent
              className="grid-col grid-col:2 -end"
              heading={title}
              href={url}
              onClick={onClick}
              transitionPre={transitionPre}
              role={['Web services', 'Web applications']}
            />
          </div>
        );
      }}
    </Hero>
  );
};
