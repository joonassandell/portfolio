import { motion } from 'framer-motion';
import { scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent } from '@/components/Hero';
import {
  headingVariants as hVariants,
  figureBgVariants,
  dropVariants,
  dropVariants2,
  dropVariants3,
} from './Hero.animations';
import Image from 'next/image';

const oras = getSitemap('oras');

export const OrasHero = ({
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transition = null,
}) => {
  return (
    <Hero
      className="Hero--oras"
      heading="Oras — 2016"
      headingVariants={hVariants}
      href={oras.url}
      id={oras.id}
      onClick={onClick}
      transition={transition}
      transitionHideStart={transitionHideStart}
      transitionStart={transitionStart}
    >
      {({
        transitionStartOrDefault,
        initialDelay,
        transitionPre,
        transitionPreOrInitial,
        transitionInitial,
      }) => {
        return (
          <>
            <div className="wrap">
              <div className="grid -gap:l">
                <div
                  className="
                  Hero-figure grid-col
                  grid-col:7 -start:6
                  grid-col:6@s -start:7@s
                  grid-col:4@l -start:7@l
                "
                  onClick={onClick}
                >
                  <figure
                    data-scroll
                    data-scroll-target={`[data-scroll-id=${oras.id}]`}
                    data-scroll-speed={-scrollSpeed}
                    className="Hero-figure-faucet"
                  >
                    <Image
                      alt="Oras faucet"
                      draggable="false"
                      height={2552}
                      priority
                      quality="90"
                      sizes="33vw"
                      src="/assets/oras/hero/joonassandell-oras-hero.png"
                      width={2192}
                    />
                  </figure>
                  <motion.div
                    className="Hero-figure-bg"
                    variants={figureBgVariants}
                  />
                  {transitionStartOrDefault && (
                    <motion.div
                      className="Hero-drop Hero-drop--1"
                      {...(transitionInitial && {
                        animate: 'animate',
                        initial: 'initial',
                      })}
                      custom={{
                        delay: initialDelay,
                        enableInitial: transitionPreOrInitial,
                      }}
                      variants={dropVariants}
                    >
                      <Image
                        alt="Oras drop"
                        aria-hidden="true"
                        draggable="false"
                        height={256}
                        priority
                        sizes="10vw"
                        src="/assets/oras/hero/joonassandell-oras-drop.png"
                        width={256}
                        quality="90"
                      />
                    </motion.div>
                  )}
                </div>
                <HeroContent
                  className="grid-col grid-col:2 -start:11"
                  heading={oras.title}
                  href={oras.url}
                  onClick={onClick}
                  transitionPre={transitionPre}
                  role={[
                    'UI, UX design',
                    'Concept strategy',
                    'Web development',
                  ]}
                />
              </div>
            </div>
            {transitionStartOrDefault && (
              <motion.div
                className="Hero-drop Hero-drop--2"
                {...(transitionInitial && {
                  animate: 'animate',
                  initial: 'initial',
                })}
                custom={{
                  delay: initialDelay,
                  enableInitial: transitionPreOrInitial,
                }}
                variants={dropVariants2}
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  height={256}
                  priority
                  sizes="10vw"
                  src="/assets/oras/hero/joonassandell-oras-drop.png"
                  width={256}
                  quality="90"
                />
              </motion.div>
            )}
            <motion.div
              className="Hero-drop Hero-drop--3"
              {...(transitionInitial && {
                animate: 'animate',
                initial: 'initial',
              })}
              custom={{
                delay: initialDelay,
                enableInitial: transitionPreOrInitial,
              }}
              variants={dropVariants3}
            >
              <div
                data-scroll
                data-scroll-delay="0.15"
                data-scroll-target={`[data-scroll-id=${oras.id}]`}
                data-scroll-speed="1"
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  height={256}
                  priority
                  sizes="10vw"
                  src="/assets/oras/hero/joonassandell-oras-drop.png"
                  width={256}
                  quality="90"
                />
              </div>
            </motion.div>
          </>
        );
      }}
    </Hero>
  );
};
