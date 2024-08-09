import { Heading } from '@/components/Heading';
import { headingVariants, maskVariants } from './Hero.animations';
import { Hero, HeroContent, type HeroProps } from '@/components/Hero';
import { m } from 'framer-motion';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { SITEMAP } from '@/lib/sitemap';
import { TextReveal } from '@/components/TextReveal';
import { useMedia } from 'react-use';
import heroImage from '@/public/biocode/hero/joonassandell-biocode-hero-globe.png';
import heroImagePre from '@/public/biocode/hero/joonassandell-biocode-hero-globe-pre.webp';
import Image from 'next/image';
import logoMark from '@/public/biocode/hero/joonassandell-biocode-logomark.png';

export const BiocodeHero = ({ onClick, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
  } = SITEMAP.biocode;
  const figureClasses =
    'Hero-figure grid-col grid-col:7 -start:6 grid-col:6@s -start:7@s grid-col:5@l -start:7@l -start:6@xl';
  const mqM = useMedia(MQ.m, false);

  return (
    <Hero
      className="Hero--biocode"
      heading={`${title} — ${new Date().getFullYear()}`}
      headingVariants={headingVariants}
      href={url}
      id={id}
      onClick={onClick}
      stampAddVarsToParent={true}
      stampOverlay={false}
      themeColor={themeColor}
      {...props}
    >
      {({ noTransition, transitionPre, transitionStartOrDefault }) => {
        return (
          <>
            {transitionPre && (
              <div className="Hero-pre wrap grid -gap:l -gap:row:0">
                <div className={figureClasses}>
                  <figure
                    className="Hero-figure-globe Hero-figure-globe--pre"
                    data-s
                    data-s-speed={-SCROLL_SPEED}
                    data-s-target={`[data-s-id=${id}]`}
                  >
                    <Image
                      alt="Light globe"
                      draggable="false"
                      priority
                      quality={mqM ? 80 : 60}
                      sizes={`${MQ.l} 33vw, 50vw`}
                      src={heroImagePre}
                    />
                  </figure>
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:11 grid-col:2@xl"
                  heading={title}
                  href={url}
                  onClick={onClick}
                  role={[
                    'Product design',
                    'App development',
                    'Web development',
                  ]}
                  transitionPre={transitionPre}
                />
              </div>
            )}
            <m.div
              className="Hero-globe wrap grid -gap:l"
              custom={{ enableInitial: transitionPre }}
              variants={maskVariants}
            >
              <div className={figureClasses}>
                <figure
                  className="Hero-figure-globe Hero-figure-globe--default"
                  {...(!transitionPre && {
                    'data-s': true,
                    'data-s-speed': -SCROLL_SPEED,
                    'data-s-target': `[data-s-id=${id}]`,
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
                </figure>
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
                <Heading className="Hero-textReveal-mobile mb:0">
                  <TextReveal
                    hidden
                    text={['We have to', 'reverse global', 'heating']}
                    {...(noTransition && { initial: 'animate' })}
                  />
                </Heading>
                <Heading className="Hero-textReveal-desktop mb:0">
                  <TextReveal
                    text={['We have to reverse', 'global heating']}
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
              variants={maskVariants}
            />
          </>
        );
      }}
    </Hero>
  );
};
