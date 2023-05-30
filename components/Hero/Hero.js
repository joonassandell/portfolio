import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { headingVariants as headingVars } from './Hero.animations';
import { motion } from 'framer-motion';
import { useAppContext } from '@/containers/App';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import Link from '@/components/Link';
import Stamp from '@/components/Stamp';

const Hero = ({
  children,
  className,
  heading,
  headingVariants = headingVars,
  href,
  id,
  onClick,
  stampOverlay = true,
  stampAddVarsToParent = false,
  transitionHideStart = false,
  transitionStart = false,
  transition = null,
}) => {
  const transitionPre = transition === 'pre';
  const classes = c(className, 'Hero', {
    '-transition:pre': transitionPre,
    'is-transition': transitionStart,
  });
  const { appState } = useAppContext();
  const { transitionInitial: appTransitionInitial } = appState;
  const router = useRouter();
  const ref = useRef(null);
  const Heading = transitionPre ? motion.h2 : motion.h1;

  /**
   * Pre transition: Transition before router change
   * Default state: On mount (e.g. after pre transition) or at page load
   * Initial state: Default state and appState.transitionInitial === true
   */
  // Is ready for pre or initial transition
  const transitionPreOrInitial = transitionPre || appTransitionInitial;

  // At transition start or at default state
  const transitionStartOrDefault = transitionStart || !transitionPre;

  // Trigger transition initial only if in default state
  const transitionInitial = appTransitionInitial && !transitionPre;

  const passedProps = {
    initialDelay: transitionInitial ? 0.75 : null,
    transitionPre,
    transitionInitial,
    transitionPreOrInitial,
    transitionStartOrDefault,
  };

  return (
    <motion.section
      animate={
        transitionStart ? 'animate' : transitionHideStart ? 'hidden' : ''
      }
      className={classes}
      data-id={id}
      onAnimationComplete={() => {
        if (transitionPre && transitionStart) {
          router.push(href, null, { scroll: false });
          console.log('Hero: Animation complete');
        }
      }}
      initial="initial"
      ref={ref}
      variants={transitionHideStart ? fadeOutVariants : {}}
    >
      <div data-scroll-id={id} className="Hero-inner">
        <div className="Hero-heading wrap">
          <Heading
            className="Hero-heading-inner Heading Heading--display"
            onClick={onClick}
            variants={headingVariants}
          >
            <div
              data-scroll
              data-scroll-target={`[data-scroll-id="${id}"]`}
              data-scroll-speed={scrollSpeed}
              data-scroll-direction="horizontal"
            >
              {heading}
            </div>
          </Heading>
        </div>
        {children(passedProps)}
        {transitionPre && (
          <div className="Hero-link wrap">
            <div className="grid -placeEnd">
              <div className="grid-col">
                <Link
                  arrow
                  href={href}
                  onClick={onClick}
                  templateTransition={false}
                >
                  View project
                </Link>
              </div>
            </div>
          </div>
        )}
        {transitionPre && (
          <Stamp
            addVarsToParent={stampAddVarsToParent}
            className="Hero-stamp"
            href={href}
            onClick={onClick}
            overlay={stampOverlay}
            parentRef={ref}
            transitionStart={transitionStart}
          />
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
