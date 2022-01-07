import { motion } from 'framer-motion';
import { scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import Hero, { HeroContent } from '@/components/Hero';
import {
  figureBgVariants,
  dropVariants,
  dropVariants2,
  dropVariants3,
} from './HeroOras.animations';
import Image from 'next/image';

const oras = getSitemap('oras');

const HeroOras = ({
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transitionState = null,
}) => {
  return (
    <Hero
      childrenAfter={({
        displayAtStartOrInitially,
        initialDelay,
        transitionInitial,
        transitionPre,
        transitionPreOrInitial,
        transitionStartOrInitial,
      }) => {
        return (
          <>
            {displayAtStartOrInitially && (
              <motion.div
                className="Hero-drop Hero-drop--2"
                {...(transitionPreOrInitial && {
                  animate: 'animate',
                  custom: transitionInitial ? initialDelay : 0,
                  initial: 'initial',
                  variants: dropVariants2,
                })}
              >
                <Image
                  aria-hidden="true"
                  draggable="false"
                  height={256}
                  layout="responsive"
                  priority
                  sizes="10vw"
                  src="/assets/oras/joonassandell-oras-drop.png"
                  width={256}
                  quality="90"
                />
              </motion.div>
            )}
            <motion.div
              className="Hero-drop Hero-drop--3"
              {...(transitionPreOrInitial && {
                animate: transitionStartOrInitial ? 'animate' : '',
                custom: transitionInitial ? initialDelay : 0,
                initial: 'initial',
                variants: dropVariants3,
              })}
            >
              <div
                data-scroll
                data-scroll-delay="0.15"
                data-scroll-target={`[data-scroll-id=${oras.id}]`}
                data-scroll-speed="1"
              >
                <Image
                  aria-hidden="true"
                  draggable="false"
                  height={256}
                  layout="responsive"
                  priority
                  sizes="10vw"
                  src="/assets/oras/joonassandell-oras-drop.png"
                  width={256}
                  quality="90"
                />
              </div>
            </motion.div>
          </>
        );
      }}
      className="Hero--oras"
      heading="Oras — 2016"
      href={oras.url}
      id={oras.id}
      irisColor="var(--oras-primary)"
      onClick={onClick}
      transitionHideStart={transitionHideStart}
      transitionStart={transitionStart}
      transitionState={transitionState}
    >
      {({
        displayAtStartOrInitially,
        initialDelay,
        transitionInitial,
        transitionPre,
        transitionPreOrInitial,
        transitionStartOrInitial,
      }) => {
        return (
          <div className="grid">
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
                className="Hero-figure-img"
              >
                <Image
                  alt="Oras faucet"
                  draggable="false"
                  height={2552}
                  layout="responsive"
                  priority
                  quality="90"
                  sizes="33vw"
                  src="/assets/oras/joonassandell-oras-hero.png"
                  width={2192}
                />
              </figure>
              <motion.div
                className="Hero-figure-bg"
                variants={figureBgVariants}
              />
              {displayAtStartOrInitially && (
                <motion.div
                  className="Hero-drop Hero-drop--1"
                  {...(transitionPreOrInitial && {
                    animate: transitionStartOrInitial ? 'animate' : '',
                    custom: transitionInitial ? initialDelay : 0,
                    initial: 'initial',
                    variants: dropVariants,
                  })}
                >
                  <Image
                    aria-hidden="true"
                    draggable="false"
                    height={256}
                    layout="responsive"
                    priority
                    sizes="10vw"
                    src="/assets/oras/joonassandell-oras-drop.png"
                    width={256}
                    quality="90"
                  />
                </motion.div>
              )}
            </div>
            <HeroContent
              className="grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l"
              heading={oras.title}
              href={oras.url}
              onClick={onClick}
              transitionPre={transitionPre}
              role={['UI, UX design', 'Web development', 'Concept strategy']}
            />
          </div>
        );
      }}
    </Hero>
  );
};

export default HeroOras;
