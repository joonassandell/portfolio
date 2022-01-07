import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { ButtonEnter } from '@/components/Button';
import Stamp from '@/components/Stamp';
import Link from '@/components/Link';
import {
  figureBgVariants,
  headingVariants,
  dropVariants,
  dropVariants2,
  dropVariants3,
} from './OrasHero.animations';
import Image from 'next/image';
import c from 'classnames';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '@/containers/App';

const oras = getSitemap('oras');

const OrasHero = ({
  id,
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transitionState = null,
}) => {
  const transitionPre = transitionState === 'pre';
  const classes = c('OrasHero', {
    '-transition:pre': transitionPre,
    'is-transition': transitionStart,
  });
  const { appState, setTransitionInitial } = useAppContext();
  const { transitionInitial } = appState;
  const router = useRouter();
  const Heading = transitionPre ? motion.h2 : motion.h1;
  const displayAtStartOrInitially = transitionStart || !transitionPre;
  const transitionStartOrInitial =
    transitionStart || (transitionInitial && !transitionPre);
  const transitionPreOrInitial = transitionPre || transitionInitial;
  const ref = useRef(null);
  const [mouseLeave, setMouseLeave] = useState(false);
  const initialDelay = 0.5;

  useEffect(() => {
    return () => {
      if (!transitionPre) setTransitionInitial(true);
    };
  }, []);

  return (
    <motion.section
      animate={
        transitionStart ? 'animate' : transitionHideStart ? 'hidden' : ''
      }
      className={classes}
      data-id={id}
      onAnimationComplete={() => {
        if (transitionPre && transitionStart)
          router.push(oras.url, null, { scroll: false });
      }}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
      ref={ref}
      variants={transitionHideStart ? fadeOutVariants : {}}
    >
      <div className="OrasHero-inner" data-scroll-id="OrasHero-inner">
        <Heading
          className="OrasHero-heading Heading Heading--display"
          onClick={onClick}
          variants={headingVariants}
        >
          <div
            className="Heading-inner"
            data-scroll
            data-scroll-target={`[data-scroll-id="OrasHero-inner"]`}
            data-scroll-speed={scrollSpeed}
            data-scroll-direction="horizontal"
          >
            Oras — 2016
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
              onClick={onClick}
            >
              <figure
                data-scroll
                data-scroll-target={`[data-scroll-id="OrasHero-inner"]`}
                data-scroll-speed={-scrollSpeed}
                className="OrasHero-figure-img"
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
                className="OrasHero-figure-bg"
                variants={figureBgVariants}
              />
              {displayAtStartOrInitially && (
                <motion.div
                  className="OrasHero-drop OrasHero-drop--1"
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
            {transitionPre && (
              <div className="OrasHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l">
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
              </div>
            )}
          </div>
        </div>
        {displayAtStartOrInitially && (
          <motion.div
            className="OrasHero-drop OrasHero-drop--2"
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
          className="OrasHero-drop OrasHero-drop--3"
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
            data-scroll-target={`[data-scroll-id="OrasHero-inner"]`}
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
        {transitionPre && (
          <div className="OrasHero-link wrap">
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
          </div>
        )}
        {transitionPre && (
          <Stamp
            className="OrasHero-stamp"
            href={oras.url}
            iris="var(--oras-primary)"
            mouseLeave={mouseLeave}
            mouseRef={ref}
            onClick={onClick}
            transitionStart={transitionStart}
          />
        )}
      </div>
    </motion.section>
  );
};

export default OrasHero;
