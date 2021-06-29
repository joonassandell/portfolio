import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '../../lib/config';
import { getSitemap } from '../../lib/utility';
import { ButtonEnter } from '../../components/Button';
import {
  bgVariants,
  headingVariants,
  dropVariants,
  dropVariants2,
  dropVariants3,
} from './OrasHero.animations';
import Image from 'next/image';
import c from 'classnames';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const oras = getSitemap('oras');

export default function OrasHero({
  animationStart = false,
  animationHideStart = false,
  animationState = 'initial', // preAnimation, initial
  id,
  onClick,
  priority = false,
}) {
  const initial = animationState === 'initial';
  const preAnimation = animationState === 'preAnimation';
  const classes = c('OrasHero', {
    '-preAnimation': preAnimation,
    '-initial': initial,
  });
  const router = useRouter();
  const Heading = preAnimation ? motion.h2 : motion.h1;

  useEffect(() => {
    if (animationStart) router.push(oras.url, null, { scroll: false });
  }, [animationStart]);

  return (
    <motion.section
      animate={animationHideStart}
      className={classes}
      id={id}
      variants={fadeOutVariants}
    >
      <div className="OrasHero-wrap wrap">
        <div className="grid">
          <div
            className="
              OrasHero-figure grid-col
              grid-col:7 -start:6
              grid-col:6@s -start:7@s
              grid-col:4@l -start:7@l
            "
          >
            <figure
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-1.5"
              className="OrasHero-figure-img"
            >
              <Image
                alt="Oras faucet"
                draggable="false"
                height={2552}
                layout="responsive"
                onClick={onClick}
                sizes="33vw"
                src="/assets/oras/joonassandell-oras-hero.png"
                width={2192}
                quality="90"
                {...(priority && { priority: true })}
              />
            </figure>
            <motion.div
              animate={animationStart}
              className="OrasHero-figure-bg"
              exit="exit"
              variants={bgVariants}
            />
            <motion.div
              animate={animationStart}
              className="OrasHero-drop OrasHero-drop--1"
              exit="exit"
              variants={dropVariants}
              {...(preAnimation && { initial: 'preAnimation' })}
            >
              <Image
                aria-hidden="true"
                draggable="false"
                height={256}
                layout="responsive"
                sizes="10vw"
                src="/assets/oras/drop.png"
                width={256}
                {...(priority && { priority: true })}
              />
            </motion.div>
          </div>
          {preAnimation && (
            <motion.div
              animate={animationStart}
              exit="exit"
              className="OrasHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l"
              variants={fadeOutVariants}
            >
              <h2 className="OrasHero-content-heading Text -l">Oras</h2>
              <p className="OrasHero-content-text Text -s">
                UI, UX design <br />
                Web development <br />
                Concept strategy
              </p>
              <ButtonEnter
                className="OrasHero-content-button"
                href={oras.url}
                onClick={onClick}
              >
                View Oras project
              </ButtonEnter>
            </motion.div>
          )}
        </div>
      </div>
      <motion.div
        animate={animationStart}
        className="OrasHero-drop OrasHero-drop--2"
        exit="exit"
        variants={dropVariants2}
        {...(preAnimation && { initial: 'preAnimation' })}
      >
        <Image
          aria-hidden="true"
          draggable="false"
          height={256}
          layout="responsive"
          sizes="10vw"
          src="/assets/oras/drop.png"
          width={256}
          {...(priority && { priority: true })}
        />
      </motion.div>
      <motion.div
        animate={animationStart}
        className="OrasHero-drop OrasHero-drop--3"
        exit="exit"
        variants={dropVariants3}
        {...(preAnimation && { initial: 'preAnimation' })}
      >
        <div
          data-scroll
          data-scroll-delay="0.4"
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          <Image
            aria-hidden="true"
            draggable="false"
            height={256}
            layout="responsive"
            sizes="10vw"
            src="/assets/oras/drop.png"
            width={256}
            {...(priority && { priority: true })}
          />
        </div>
      </motion.div>
      <Heading
        animate={animationStart}
        className="OrasHero-heading Heading Heading--display"
        exit="exit"
        onClick={onClick}
        variants={headingVariants}
        {...(preAnimation && { 'aria-hidden': 'true' })}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-position="top"
          data-scroll-offset="-10%"
          data-scroll-speed={scrollSpeed}
        >
          Oras—2016
        </div>
      </Heading>
      {preAnimation && (
        <motion.div
          animate={animationStart}
          className="OrasHero-buttonMobile wrap"
          exit="exit"
          variants={fadeOutVariants}
        >
          <div className="grid -placeEnd">
            <div className="grid-col">
              <ButtonEnter href={oras.url} onClick={onClick}>
                View Oras project
              </ButtonEnter>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
