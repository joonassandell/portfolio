import { motion } from 'framer-motion';
import { scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import Hero, { HeroContent } from '@/components/Hero';
import TextReveal from '@/components/TextReveal';
import { headingVariants, maskVariants } from './HeroBiocode.animations';
import Image from 'next/image';

const biocode = getSitemap('biocode');

const HeroBiocode = ({
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
      heading="Biocode — 2023"
      headingVariants={headingVariants}
      href={biocode.url}
      id={biocode.id}
      onClick={onClick}
      stampOverlay={false}
      stampAddVarsToParent={true}
      transition={transition}
      transitionHideStart={transitionHideStart}
      transitionStart={transitionStart}
    >
      {({
        initialDelay,
        preTransition,
        transitionPre,
        transitionPreOrInitial,
        transitionStartOrDefault,
      }) => {
        return (
          <>
            {transitionPre && (
              <div className="Hero-pre wrap grid -size:l">
                <div className={figureClasses}>
                  <figure className="Hero-figure-globe Hero-figure-globe--pre">
                    <div
                      data-scroll
                      data-scroll-target={`[data-scroll-id=${biocode.id}]`}
                      data-scroll-speed={-scrollSpeed}
                    >
                      <Image
                        alt="Light globe"
                        draggable="false"
                        height={2480}
                        layout="responsive"
                        onClick={onClick}
                        priority
                        quality="90"
                        sizes="50vw"
                        src="/assets/biocode/joonassandell-biocode-hero-globe-pre.png"
                        width={2480}
                      />
                    </div>
                  </figure>
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:11 grid-col:2@xl"
                  heading={biocode.title}
                  href={biocode.url}
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
            <motion.div
              animate={transitionStart ? 'animate' : ''}
              initial={transitionPre ? 'initial' : ''}
              className="Hero-globe wrap grid -size:l"
              variants={maskVariants}
            >
              <div className={figureClasses}>
                <figure className="Hero-figure-globe Hero-figure-globe--initial">
                  <div
                    {...(!preTransition && {
                      'data-scroll': true,
                      'data-scroll-speed': -scrollSpeed,
                      'data-scroll-target': `[data-scroll-id=${biocode.id}]`,
                    })}
                  >
                    <Image
                      alt="Globe"
                      draggable="false"
                      height={2480}
                      layout="responsive"
                      onClick={onClick}
                      priority
                      quality="90"
                      sizes="50vw"
                      src="/assets/biocode/joonassandell-biocode-hero-globe-initial.png"
                      width={2480}
                    />
                  </div>
                </figure>
              </div>
            </motion.div>
            <div className="Hero-icon wrap grid -size:l">
              <div className={figureClasses}>
                <figure className="Hero-figure-icon">
                  <Image
                    alt="Biocode icon"
                    draggable="false"
                    height={800}
                    layout="responsive"
                    priority
                    sizes="25vw"
                    src="/assets/biocode/joonassandell-biocode-icon.png"
                    width={800}
                  />
                </figure>
              </div>
            </div>
            {transitionStartOrDefault && (
              <div className="Hero-textReveal wrap">
                <TextReveal
                  animate={{
                    ...(transitionPreOrInitial && {
                      animate: 'in',
                      custom: initialDelay ? initialDelay : 0.3,
                      initial: 'initial',
                    }),
                  }}
                  className="Hero-textReveal-mobile"
                  text={['We have to', 'reverse global', 'heating']}
                  hidden
                />
                <TextReveal
                  animate={{
                    ...(transitionPreOrInitial && {
                      animate: 'in',
                      custom: initialDelay ? initialDelay : 0.3,
                      initial: 'initial',
                    }),
                  }}
                  className="Hero-textReveal-desktop"
                  text={['We have to reverse', 'global heating']}
                />
              </div>
            )}
            {transitionPre && (
              <div className="Hero-figureBg wrap grid -size:l">
                <div className={figureClasses}>
                  <div className="Hero-figureBg-bg" />
                </div>
              </div>
            )}
            <motion.div
              className="Hero-bg"
              animate={transitionStart ? 'animate' : ''}
              initial={transitionPre ? 'initial' : ''}
              variants={maskVariants}
            />
          </>
        );
      }}
    </Hero>
  );
};

export default HeroBiocode;
