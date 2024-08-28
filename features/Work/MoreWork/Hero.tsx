import {
  FIGURE_BG_VARIANTS,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { m } from 'framer-motion';
import { SITEMAP } from '@/lib/sitemap';
import { useParallax } from '@/lib/useParallax';
import heroImage from '@/public/more-work/hero/joonassandell-more-work-hero.png';
import heroImage2 from '@/public/more-work/hero/joonassandell-more-work-hero-2.png';
import Image from 'next/image';

export const MoreWorkHero = ({ onClick, transition, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.moreWork;
  const { ref, value: y } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    reverse: true,
    startPosition: transition === 'pre' ? 'negative' : 0,
  });
  const { value: y2 } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    ref,
    startPosition: transition === 'pre' ? 'negative' : 0,
  });

  return (
    <Hero
      className="Hero--moreWork"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      themeColor={themeColor}
      transition={transition}
      {...props}
    >
      {({ transitionPre }) => (
        <div className="wrap grid -gap:l pl:0">
          <div className="Hero-figure grid-col grid-col:6 grid-col:6@l">
            <m.figure
              className="Hero-figure-figure"
              data-lock-ios
              style={{ y }}
            >
              <Image
                alt="Omoroi homepage in phone"
                draggable="false"
                priority={!transitionPre}
                sizes="25vw"
                src={heroImage}
              />
            </m.figure>
            <m.figure
              className="Hero-figure-figure Hero-figure-figure--bottom"
              data-lock-ios
              style={{ y: y2 }}
            >
              <Image
                alt="Hankkija homepage in phone"
                draggable="false"
                priority={!transitionPre}
                sizes="25vw"
                src={heroImage2}
              />
            </m.figure>
            <m.div
              className="Hero-figure-bg Hero-figure-bg--animate"
              variants={FIGURE_BG_VARIANTS}
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
      )}
    </Hero>
  );
};
