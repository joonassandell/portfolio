import { Heading } from '@/components/Heading';
import { HEADING_VARIANTS, MASK_VARIANTS } from './config';
import { Hero, HeroContent, type HeroProps } from '@/components/Hero';
import { m } from 'framer-motion';
import { MQ } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import { TextReveal } from '@/components/TextReveal';
import { useMedia } from 'react-use';
import { useParallax } from '@/lib/useParallax';
import heroImage from '@/public/biocode/hero/joonassandell-biocode-hero-globe.png';
import heroImagePre from '@/public/biocode/hero/joonassandell-biocode-hero-globe-pre.webp';
import Image from 'next/image';
import logoMark from '@/public/biocode/hero/joonassandell-biocode-logomark.png';

export const BiocodeHero = ({ onClick, transition, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
  } = SITEMAP.biocode;
  const figureClasses =
    'Hero-figure grid-col grid-col:7 -start:6 grid-col:6@s -start:7@s grid-col:5@l -start:7@l -start:6@xl';
  const mqS = useMedia(MQ.s, false);
  const mqM = useMedia(MQ.m, false);
  const { ref, value: y } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    reverse: true,
    startPosition: transition === 'pre' ? 'negative' : 0,
  });

  return (
    <Hero
      className="Hero--biocode"
      heading={`${title} — ${new Date().getFullYear()}`}
      headingVariants={HEADING_VARIANTS}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      stampAddVarsToParent={true}
      stampOverlay={false}
      themeColor={themeColor}
      transition={transition}
      {...props}
    >
      {({ noTransition, transitionPre, transitionStartOrDefault }) => (
        <>
          {transitionPre && (
            <div className="Hero-pre wrap grid -gap:l -gap:row:0">
              <div className={figureClasses}>
                <m.figure
                  className="Hero-figure-globe Hero-figure-globe--pre"
                  data-lock-ios
                  style={{ y }}
                >
                  <Image
                    alt="Light globe"
                    draggable="false"
                    priority
                    quality={mqM ? 80 : 60}
                    sizes={`${MQ.l} 33vw, 50vw`}
                    src={heroImagePre}
                  />
                </m.figure>
              </div>
              <HeroContent
                className="grid-col grid-col:3 -start:11 grid-col:2@xl"
                heading={title}
                href={url}
                onClick={onClick}
                role={['Product design', 'App development', 'Web development']}
                transitionPre={transitionPre}
              />
            </div>
          )}
          <m.div
            className="Hero-globe wrap grid -gap:l"
            custom={{ enableInitial: transitionPre }}
            variants={MASK_VARIANTS}
          >
            <div className={figureClasses}>
              <m.figure
                className="Hero-figure-globe Hero-figure-globe--default"
                {...(!transitionPre && {
                  style: { y },
                })}
              >
                <Image
                  alt="Globe"
                  draggable="false"
                  priority={!transitionPre}
                  quality={80}
                  sizes={`${MQ.l} 33vw, 50vw`}
                  src={heroImage}
                />
              </m.figure>
            </div>
          </m.div>
          <div className="Hero-icon wrap grid -gap:l">
            <div className={figureClasses}>
              <figure className="Hero-figure-icon">
                <Image
                  alt="Biocode logomark"
                  draggable="false"
                  priority
                  sizes="25vw"
                  src={logoMark}
                />
              </figure>
            </div>
          </div>
          {transitionStartOrDefault && (
            <div className="Hero-textReveal wrap">
              <Heading className="mb:0" size={mqS ? 'h1' : 'h3'} tag="h2">
                <TextReveal
                  custom={{ delay: 0.15 }}
                  text={
                    mqM
                      ? ['We have to reverse ', 'global heating']
                      : ['We have ', 'to reverse ', 'global heating']
                  }
                  {...(noTransition && { initial: 'animate' })}
                />
              </Heading>
            </div>
          )}
          {transitionPre && (
            <div className="wrap grid -gap:l">
              <div className={figureClasses}>
                <div className="Hero-figure-bg" />
              </div>
            </div>
          )}
          <m.div
            className="Hero-bg"
            custom={{ enableInitial: transitionPre }}
            variants={MASK_VARIANTS}
          />
        </>
      )}
    </Hero>
  );
};
