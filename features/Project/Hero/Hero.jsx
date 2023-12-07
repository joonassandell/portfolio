import { SCROLL_SPEED, TRANS_TERTIARY_FAST } from '@/lib/config';
import { headingVariants as headingVars } from './Hero.animations';
import { m } from 'framer-motion';
import { useAppContext } from '@/components/App';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'clsx';
import { Link } from '@/components/Link';
import { Stamp } from '@/features/Project/Stamp';
import { Heading } from '@/components/Heading';
import { TextReveal } from '@/components/TextReveal';

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
  themeColor,
  transitionStart,
  transition,
}) => {
  const transitionPre = transition === 'pre';
  const { appState } = useAppContext();
  const { transitionInitial: appTransitionInitial, transition: appTransition } = appState;
  const templateTransition = appTransition === 'template';
  const { push } = useRouter();
  const ref = useRef(null);
  const classes = c(
    'Hero',
    {
      '-transition:pre': transitionPre,
      'is-transition': transitionStart,
    },
    className,
  );

  /**
   * Default state: On mount (e.g. after pre transition or at page load)
   * Pre transition: Transition before router change
   * Initial state: Default state and appState.transitionInitial === true
   */
  // At transition start or at default state
  const transitionStartOrDefault = transitionStart || !transitionPre;

  // Trigger transition initial only if not in pre transition state
  const transitionInitial = appTransitionInitial && !transitionPre;

  // No transitions state (default state when no transitions should happen)
  const noTransition = !transitionPre && !appTransitionInitial;

  const passedProps = {
    noTransition,
    transitionInitial,
    transitionPre,
    transitionStartOrDefault,
    templateTransition,
  };

  return (
    <m.section
      animate={transitionStart && 'animate'}
      className={classes}
      data-id={id}
      data-theme-color={themeColor}
      onAnimationComplete={() => {
        if (transitionPre && transitionStart) {
          push(href, null, { scroll: false });
          console.log('Hero: Animation complete');
        }
      }}
      initial="initial"
      ref={ref}
    >
      <div data-s-id={id} className="Hero-inner">
        <div
          className="Hero-heading wrap"
          {...(transitionPre && { 'aria-hidden': true })}
        >
          <Heading
            className="Hero-heading-inner"
            onClick={onClick}
            size="display"
            tag={transitionPre ? m.h2 : m.h1}
            variants={headingVariants}
          >
            <div
              data-s
              data-s-target={`[data-s-id="${id}"]`}
              data-s-speed={SCROLL_SPEED}
              data-s-direction="horizontal"
            >
              <TextReveal
                custom={...transitionPre && {
                  y: '60%',
                  transition: TRANS_TERTIARY_FAST,
                }}
                text={[heading]}
                {...(noTransition && { initial: 'animate' })}
              />
            </div>
          </Heading>
        </div>
        {typeof children === 'function' ? children(passedProps) : children}
        {transitionPre && (
          <div className="Hero-link wrap grid -place:end">
            <div className="grid-col">
              <Link
                arrow
                href={href}
                onClick={onClick}
                transitionTemplate={false}
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
