import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent } from '@/components/Hero';
import { TextReveal } from '@/components/TextReveal';
import { headingVariants as hVariants, maskVariants } from './Hero.animations';
import Image from 'next/image';

const { url, year, id, title } = getSitemap('biocode');

export const BiocodeHero = ({
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transition = null,
}) => {
  const figureClasses =
    'Hero-figure grid-col grid-col:7 -start:6 grid-col:6@s -start:7@s grid-col:5@l -start:7@l -start:6@xl';

  return (
    <Hero
      className="Hero--biocode"
      heading={`Biocode — ${year}`}
      headingVariants={hVariants}
      href={url}
      id={id}
      onClick={onClick}
      stampAddVarsToParent={true}
      stampOverlay={false}
      transition={transition}
      transitionHideStart={transitionHideStart}
      transitionStart={transitionStart}
    >
      {({
        initialDelay,
        preTransition,
        transitionPre,
        transitionPreOrInitial,
        transitionInitial,
        transitionStartOrDefault,
      }) => {
        return (
          <>
            {transitionPre && (
              <div className="Hero-pre wrap grid -gap:l -gap:row:0">
                <div className={figureClasses}>
                  <figure className="Hero-figure-globe Hero-figure-globe--pre">
                    <div
                      data-scroll
                      data-scroll-target={`[data-scroll-id=${id}]`}
                      data-scroll-speed={-SCROLL_SPEED}
                    >
                      <Image
                        alt="Light globe"
                        draggable="false"
                        height={2480}
                        onClick={onClick}
                        priority
                        quality={90}
                        sizes="50vw"
                        src="/biocode/hero/joonassandell-biocode-hero-globe-pre.png"
                        width={2480}
                      />
                    </div>
                  </figure>
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:11 grid-col:2@xl"
                  heading={title}
                  href={url}
                  onClick={onClick}
                  transitionPre={transitionPre}
                  transitionStart={transitionStart}
                  role={[
                    'Product design',
                    'App development',
                    'Web development',
                  ]}
                />
              </div>
            )}
            <m.div
              className="Hero-globe wrap grid -gap:l"
              custom={{ enableInitial: transitionPre }}
              variants={maskVariants}
            >
              <div className={figureClasses}>
                <figure className="Hero-figure-globe Hero-figure-globe--default">
                  <div
                    {...(!preTransition && {
                      'data-scroll': true,
                      'data-scroll-speed': -SCROLL_SPEED,
                      'data-scroll-target': `[data-scroll-id=${id}]`,
                    })}
                  >
                    <Image
                      alt="Globe"
                      draggable="false"
                      height={2480}
                      onClick={onClick}
                      priority
                      quality={100}
                      sizes="50vw"
                      src="/biocode/hero/joonassandell-biocode-hero-globe.png"
                      width={2480}
                    />
                  </div>
                </figure>
              </div>
            </m.div>
            <div className="Hero-icon wrap grid -gap:l">
              <div className={figureClasses}>
                <figure className="Hero-figure-icon">
                  <Image
                    alt="Biocode icon"
                    draggable="false"
                    height={800}
                    priority
                    sizes="25vw"
                    src="/biocode/hero/joonassandell-biocode-icon.png"
                    width={800}
                  />
                </figure>
              </div>
            </div>
            {transitionStartOrDefault && (
              <div className="Hero-textReveal wrap">
                <TextReveal
                  {...(transitionInitial && {
                    animate: 'animate',
                    initial: 'initial',
                  })}
                  custom={{
                    delay: initialDelay ?? 0.3,
                    enableInitial: transitionPreOrInitial,
                  }}
                  className="Hero-textReveal-mobile"
                  text={['We have to', 'reverse global', 'heating']}
                  hidden
                />
                <TextReveal
                  {...(transitionInitial && {
                    animate: 'animate',
                    initial: 'initial',
                  })}
                  custom={{
                    delay: initialDelay ?? 0.3,
                    enableInitial: transitionPreOrInitial,
                  }}
                  className="Hero-textReveal-desktop"
                  text={['We have to reverse', 'global heating']}
                />
              </div>
            )}
            {transitionPre && (
              <div className="Hero-figureBg wrap grid -gap:l">
                <div className={figureClasses}>
                  <div className="Hero-figureBg-bg" />
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
