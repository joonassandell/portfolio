import { SCROLL_SPEED } from '@/lib/config';
import { headingVariants as headingVars } from './Hero.animations';
import { m } from 'framer-motion';
import { useAppContext } from '@/components/App';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import { Link } from '@/components/Link';
import { Stamp } from '@/components/Stamp';

export const Hero = ({
  children,
  className,
  heading,
  headingVariants = headingVars,
  href,
  id,
  onClick,
  stampOverlay = true,
  stampAddVarsToParent,
  transitionStart,
  transition,
}) => {
  const transitionPre = transition === 'pre';
  const { appState } = useAppContext();
  const { transitionInitial: appTransitionInitial } = appState;
  const { push } = useRouter();
  const ref = useRef(null);
  const Heading = transitionPre ? m.h2 : m.h1;
  const classes = c(
    'Hero',
    {
      '-transition:pre': transitionPre,
      'is-transition': transitionStart,
    },
    className,
  );

  /**
   * Pre transition: Transition before router change
   * Default state: On mount (e.g. after pre transition) or at page load
   * Initial state: Default state and appState.transitionInitial === true
   */
  // Default state
  const transitionDefault = !transitionPre && !appTransitionInitial;

  // Is ready for pre or initial transition
  const transitionPreOrInitial = transitionPre || appTransitionInitial;

  // At transition start or at default state
  const transitionStartOrDefault = transitionStart || !transitionPre;

  // Trigger transition initial only if not in pre transition state
  const transitionInitial = appTransitionInitial && !transitionPre;

  const passedProps = {
    initialDelay: transitionInitial ? 0.75 : null,
    transitionPre,
    transitionDefault,
    transitionInitial,
    transitionPreOrInitial,
    transitionStartOrDefault,
  };

  return (
    <m.section
      animate={transitionStart ? 'animate' : false}
      className={classes}
      data-id={id}
      onAnimationComplete={() => {
        if (transitionPre && transitionStart) {
          push(href, null, { scroll: false });
          console.log('Hero: Animation complete');
        }
      }}
      initial="initial"
      ref={ref}
    >
      <div data-scroll-id={id} className="Hero-inner">
        <div
          className="Hero-heading wrap"
          {...(transitionPre && { 'aria-hidden': true })}
        >
          <Heading
            className="Hero-heading-inner Heading Heading--display"
            onClick={onClick}
            variants={headingVariants}
          >
            <div
              data-scroll
              data-scroll-target={`[data-scroll-id="${id}"]`}
              data-scroll-speed={SCROLL_SPEED}
              data-scroll-direction="horizontal"
            >
              {heading}
            </div>
          </Heading>
        </div>
        {children(passedProps)}
        {transitionPre && (
          <div className="Hero-link wrap grid -place:end">
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
    </m.section>
  );
};
