import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import useIsMobile from '@/lib/useIsMobile';
import { ButtonEnter } from '@/components/Button';
import Link from '@/components/Link';
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

const OrasHero = ({
  animationStart = false,
  animationHideStart = false,
  animationState = 'initial', // preAnimation, initial
  id,
  onClick,
  priority = false,
}) => {
  const mobile = useIsMobile();
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
      <Heading
        className="OrasHero-heading Heading Heading--display"
        onClick={onClick}
        custom={mobile}
        {...(animationStart && { exit: 'exit' })}
        {...(animationStart && { variants: headingVariants })}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-offset="-10%"
          data-scroll-position="top"
          data-scroll-speed={scrollSpeed}
          // {...(preAnimation && { 'data-scroll-speed': 3 })}
          {...(preAnimation && { 'data-scroll-direction': 'horizontal' })}
        >
          Oras \ 2016
          {/* Oras — 2016 */}
        </div>
      </Heading>
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
              data-scroll-speed={-scrollSpeed}
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
              className="OrasHero-figure-bg"
              custom={mobile}
              variants={bgVariants}
              {...(animationStart && { exit: 'exit' })}
              {...(animationStart && { variants: bgVariants })}
            />
            <motion.div
              className="OrasHero-drop OrasHero-drop--1"
              custom={mobile}
              variants={dropVariants}
              {...(animationStart && { exit: 'exit' })}
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
              className="OrasHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l"
              {...(animationStart && { exit: 'exit' })}
              {...(animationStart && { variants: fadeOutVariants })}
            >
              <p aria-hidden="true" className="OrasHero-content-heading h5">
                Oras 
              </p>
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
        className="OrasHero-drop OrasHero-drop--2"
        custom={mobile}
        variants={dropVariants2}
        {...(animationStart && { exit: 'exit' })}
        {...(animationStart && { variants: dropVariants2 })}
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
        className="OrasHero-drop OrasHero-drop--3"
        custom={mobile}
        variants={dropVariants3}
        {...(preAnimation && { initial: 'preAnimation' })}
        {...(animationStart && { exit: 'exit' })}
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

      {preAnimation && (
        <motion.div
          className="OrasHero-link wrap"
          {...(animationStart && { exit: 'exit' })}
          {...(animationStart && { variants: fadeOutVariants })}
        >
          <div className="grid -placeEnd">
            <div className="grid-col">
              <Link
                arrow
                href={oras.url}
                onClick={onClick}
                templateTransition={false}
                underline
              >
                View project
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default OrasHero;
