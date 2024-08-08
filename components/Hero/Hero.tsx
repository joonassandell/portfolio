import { ArrowRight } from '@/components/Icon';
import { Heading } from '@/components/Heading';
import { headingVariants as headingVars, type HeroProps } from './';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { SCROLL_SPEED, TRANS_TERTIARY_FAST } from '@/lib/config';
import { Stamp } from '@/components/Stamp';
import { TextReveal } from '@/components/TextReveal';
import { useApp } from '@/components/App';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'clsx';

export const Hero = ({
  children,
  className,
  heading,
  headingVariants = headingVars,
  href,
  id,
  onClick,
  stampAddVarsToParent,
  stampOverlay = true,
  themeColor,
  transition,
  transitionStart,
}: HeroProps) => {
  const transitionPre = transition === 'pre';
  const { transition: appTransition, transitionInitial: appTransitionInitial } =
    useApp();
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
  const transitionStartOrDefault = transitionStart ?? !transitionPre;

  // Trigger transition initial only if not in pre transition state
  const transitionInitial = appTransitionInitial && !transitionPre;

  // No transitions state (default state when no transitions should happen)
  const noTransition = !transitionPre && !appTransitionInitial;

  const passedProps = {
    noTransition,
    templateTransition,
    transitionInitial,
    transitionPre,
    transitionStartOrDefault,
  };

  return (
    <m.section
      animate={transitionStart && 'animate'}
      className={classes}
      data-id={id}
      data-theme-color={themeColor}
      initial="initial"
      onAnimationComplete={() => {
        if (transitionPre && transitionStart) {
          push(href as URL['href'], undefined, { scroll: false });
          console.log('Hero: Animation complete');
        }
      }}
      ref={ref}
    >
      <div className="Hero-inner" data-scroll-id={id}>
        <div
          className="Hero-heading wrap"
          {...(transitionPre && { 'aria-hidden': true })}
        >
          <Heading
            className="Hero-heading-inner"
            onClick={onClick}
            size="display"
            // @ts-expect-error Heading should include "asChild" prop eventually
            tag={transitionPre ? m.h2 : m.h1}
            variants={headingVariants}
          >
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={SCROLL_SPEED}
              data-scroll-target={`[data-scroll-id="${id}"]`}
            >
              <TextReveal
                custom={
                  transitionPre && {
                    transition: TRANS_TERTIARY_FAST,
                    y: '60%',
                  }
                }
                text={[heading as string]}
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
                href={href as URL['href']}
                icon={<ArrowRight />}
                onClick={onClick}
                templateTransition={false}
                underline={false}
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
