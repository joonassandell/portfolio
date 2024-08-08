import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import heroImage from '@/public/more-work/hero/joonassandell-more-work-hero.png';
import heroImage2 from '@/public/more-work/hero/joonassandell-more-work-hero-2.png';
import Image from 'next/image';

export const MoreWorkHero = ({ onClick, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.moreWork;

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
                className="Hero-figure-figure"
                data-scroll
                data-scroll-speed={-SCROLL_SPEED}
                data-scroll-target={`[data-scroll-id=${id}]`}
              >
                <Image
                  alt="Omoroi homepage in phone"
                  draggable="false"
                  priority={!transitionPre}
                  sizes="25vw"
                  src={heroImage}
                />
              </figure>
              <figure
                className="Hero-figure-figure Hero-figure-figure--bottom"
                data-scroll
                data-scroll-speed={SCROLL_SPEED}
                data-scroll-target={`[data-scroll-id=${id}]`}
              >
                <Image
                  alt="Hankkija homepage in phone"
                  draggable="false"
                  priority={!transitionPre}
                  sizes="25vw"
                  src={heroImage2}
                />
              </figure>
              <m.div
                className="Hero-figure-bg Hero-figure-bg--animate"
                variants={figureBgVariants}
              />
            </div>
            <HeroContent
              className="grid-col grid-col:2 -end"
              heading={title}
              href={url}
              onClick={onClick}
              role={['Web services', 'Web applications']}
              transitionPre={transitionPre}
            />
          </div>
        );
      }}
    </Hero>
  );
};
