import { ArrowRight } from '@/components/Icon';
import { Heading } from '@/components/Heading';
import { headingVariants as headingVars, type HeroProps } from './';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { Stamp } from '@/components/Stamp';
import { TextReveal } from '@/components/TextReveal';
import { TRANS_TERTIARY_FAST } from '@/lib/config';
import { useApp } from '@/components/App';
import { useParallax } from '@/lib/useParallax';
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
  innerRef,
  onClick,
  stampAddVarsToParent,
  stampOverlay = true,
  themeColor,
  transition,
  transitionStart,
}: HeroProps) => {
  const ref = useRef(null);
  const transitionPre = transition === 'pre';
  const { transition: appTransition, transitionInitial: appTransitionInitial } =
    useApp();
  const templateTransition = appTransition === 'template';
  const { push } = useRouter();
  const classes = c(
    'Hero',
    {
      '-transition:pre': transitionPre,
      'is-transition': transitionStart,
    },
    className,
  );
  const { value: x } = useParallax({
    offset: transitionPre ? 'start-end' : 'start-start',
    ref: innerRef,
    startPosition: transitionPre ? 'negative' : 0,
  });

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
        }
      }}
      ref={ref}
    >
      <div className="Hero-inner" ref={innerRef}>
        <div className="Hero-heading wrap">
          <Heading
            className="Hero-heading-inner"
            onClick={onClick}
            size="display"
            tag={transitionPre ? 'h2' : 'h1'}
            variants={headingVariants}
          >
            <m.div data-lock-ios style={{ x }}>
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
            </m.div>
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
