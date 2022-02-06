import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { headingVariants as headingVars } from './Hero.animations';
import { motion } from 'framer-motion';
import { useAppContext } from '@/containers/App';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import Link from '@/components/Link';
import Stamp from '@/components/Stamp';

const Hero = ({
  children,
  childrenAfter = () => null,
  className,
  heading,
  headingVariants = headingVars,
  href,
  id,
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transitionState = null,
}) => {
  const statePre = transitionState === 'pre';
  const classes = c(className, 'Hero', {
    '-transition:pre': statePre,
    'is-transition': transitionStart,
  });
  const { appState, setTransitionInitial } = useAppContext();
  const { transitionInitial } = appState;
  const router = useRouter();
  const Heading = statePre ? motion.h2 : motion.h1;

  // At hero transition start or at default state (= after transition)
  const displayAtStartOrByDefault = transitionStart || !statePre;

  // At hero transition start or at initial state (= default state & appState.transitionInitial === true)
  const transitionStartOrInitial =
    transitionStart || (!statePre && transitionInitial);

  // State before hero transition or at initial state (= usually before template transition)
  const statePreOrStateInitial = statePre || transitionInitial;

  const ref = useRef(null);
  const [mouseLeave, setMouseLeave] = useState(false);

  const passedProps = {
    displayAtStartOrByDefault,
    initialDelay: transitionInitial ? 0.75 : 0,
    transitionStartOrInitial,
    statePreOrStateInitial,
    transitionInitial,
    statePre,
  };

  /**
   * This should re-trigger the animations (statePreOrStateInitial) after the
   * hero transitions but it doesn't which is exactly what I want. Maybe
   * animation won't retrigger because we use the spread etc. don't know.
   */
  useEffect(() => {
    if (!transitionInitial) {
      setTransitionInitial(true);
    }
  }, []);

  return (
    <motion.section
      animate={
        transitionStart ? 'animate' : transitionHideStart ? 'hidden' : ''
      }
      className={classes}
      data-id={id}
      onAnimationComplete={() => {
        if (statePre && transitionStart)
          router.push(href, null, { scroll: false });
      }}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
      ref={ref}
      variants={transitionHideStart ? fadeOutVariants : {}}
    >
      <div className="Hero-inner" data-scroll-id={id}>
        <Heading
          className="Hero-heading Heading Heading--display"
          onClick={onClick}
          variants={headingVariants}
        >
          <div
            className="Heading-inner"
            data-scroll
            data-scroll-target={`[data-scroll-id="${id}"]`}
            data-scroll-speed={scrollSpeed}
            data-scroll-direction="horizontal"
          >
            {heading}
          </div>
        </Heading>
        <div className="Hero-wrap wrap">{children(passedProps)}</div>
        {childrenAfter(passedProps)}
        {statePre && (
          <div className="Hero-link wrap">
            <div className="grid -placeEnd">
              <div className="grid-col">
                <Link
                  arrow
                  href={href}
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
        {statePre && (
          <Stamp
            className="Hero-stamp"
            href={href}
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

export default Hero;
