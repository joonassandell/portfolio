import { motion } from 'framer-motion';
import { scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import Hero, { HeroContent } from '@/components/Hero';
import TextReveal from '@/components/TextReveal';
import { headingVariants, figurePreVariants } from './HeroBiocode.animations';
import Image from 'next/image';

const biocode = getSitemap('biocode');

const HeroBiocode = ({
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transition = null,
}) => {
  return (
    <Hero
      className="Hero--biocode"
      heading="Biocode — 2023"
      href={biocode.url}
      id={biocode.id}
      onClick={onClick}
      transitionHideStart={transitionHideStart}
      transitionStart={transitionStart}
      transition={transition}
    >
      {({
        transitionStartOrDefault,
        initialDelay,
        transitionPre,
        transitionPreOrTransitionInitial,
      }) => {
        return (
          <>
            {transitionStartOrDefault && (
              <div className="Hero-textReveal">
                <TextReveal
                  animate={{
                    ...(transitionPreOrTransitionInitial && {
                      animate: 'in',
                      initial: 'initial',
                      custom: initialDelay,
                    }),
                  }}
                  // text={['Are you ready', 'for climate', 'smart food?']}
                  text={['We have to', 'reverse global', 'heating']}
                />
              </div>
            )}
            <div className="grid">
              <div
                className="
                  Hero-figure
                  grid-col
                  grid-col:7 -start:6
                  grid-col:6@s -start:7@s
                  grid-col:5@l -start:7@l
                  -start:6@xl
                "
              >
                <div
                  className="Hero-figure-mask"
                  data-scroll
                  data-scroll-position="top"
                  // data-scroll-speed={scrollSpeed * -3}
                  // data-scroll-speed={scrollSpeed * -2}
                >
                  {transitionPre && (
                    <motion.figure
                      animate={transitionStart ? 'exit' : ''}
                      className="Hero-figure-figure Hero-figure-figure--pre"
                      initial="preTransition"
                      variants={figurePreVariants}
                    >
                      <div
                        className="Hero-figure-scroll"
                        data-scroll
                        data-scroll-position="top"
                        // data-scroll-speed={scrollSpeed}
                        data-scroll-speed={scrollSpeed * -5}
                      >
                        <Image
                          alt="Dark landscape of mountains"
                          draggable="false"
                          height={1120}
                          layout="responsive"
                          onClick={onClick}
                          priority
                          quality="90"
                          sizes="33vw"
                          src="/assets/biocode/joonassandell-biocode-hero-pre.jpg"
                          width={880}
                        />
                      </div>
                    </motion.figure>
                  )}
                  {transitionStartOrDefault && (
                    <motion.figure className="Hero-figure-figure Hero-figure-figure--initial">
                      <div
                        className="Hero-figure-scroll"
                        data-scroll
                        data-scroll-position="top"
                        // data-scroll-speed={scrollSpeed}
                        data-scroll-speed={scrollSpeed * -5}
                      >
                        <Image
                          alt="Bright landscape of field"
                          draggable="false"
                          height={1120}
                          layout="responsive"
                          priority
                          quality="90"
                          sizes="33vw"
                          src="/assets/biocode/joonassandell-biocode-hero.jpg"
                          width={880}
                        />
                      </div>
                    </motion.figure>
                  )}
                </div>
                <div className="Hero-figure-bg" />
              </div>
              <HeroContent
                className="grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l"
                heading={biocode.title}
                href={biocode.url}
                onClick={onClick}
                transitionPre={transitionPre}
                role={['UI, UX design', 'App development', 'Web development']}
              />
            </div>
          </>
        );
      }}
    </Hero>
  );
};

export default HeroBiocode;
