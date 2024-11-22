import { AnimatePresence, m } from 'motion/react';
import { ArrowDown, ArrowUp } from '@/components/Icon';
import { forwardRef } from 'react';
import {
  type HeaderButtonProps,
  MAIN_ITEM_IN_VARIANT,
  MAIN_ITEM_OUT_VARIANT,
} from './';
import { useRouter } from 'next/router';

export const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonProps>(
  (
    {
      arrow,
      enterExit,
      isDefaultNavTitle,
      mqM,
      navRevealTitle,
      navTitle,
      open,
      openReveal,
      setFocusVisible,
      toggleOpen,
    }: HeaderButtonProps,
    forwardedRef,
  ) => {
    const router = useRouter();
    const { asPath } = router;

    return (
      <button
        className="Header-button"
        onClick={() => toggleOpen()}
        onKeyDown={() => setFocusVisible(true)}
        ref={forwardedRef}
      >
        <div className="Header-button-textMobile" hidden>
          <m.div variants={MAIN_ITEM_OUT_VARIANT}>Menu</m.div>
          {openReveal && (
            <m.div
              className="Header-button-textMobile-reveal"
              variants={MAIN_ITEM_IN_VARIANT}
            >
              Menu
            </m.div>
          )}
        </div>
        <div className="Header-button-text">
          <AnimatePresence initial={false} mode="wait">
            <m.div
              className="Header-button-text-item"
              key={!isDefaultNavTitle ? asPath : undefined}
              {...enterExit.text}
              {...(open && { hidden: true })}
            >
              <m.div variants={MAIN_ITEM_OUT_VARIANT}>{navTitle}</m.div>
            </m.div>
          </AnimatePresence>
          {openReveal && (
            <div className="Header-button-text-item Header-button-text-item--reveal">
              <m.div variants={MAIN_ITEM_IN_VARIANT}>{navRevealTitle}</m.div>
            </div>
          )}
        </div>
        <AnimatePresence initial={false} mode="wait">
          <m.div
            aria-hidden
            className="Header-button-arrow Button"
            key={mqM && !isDefaultNavTitle ? asPath : undefined}
            ref={arrow}
            {...(mqM && { ...enterExit.arrow })}
          >
            <span className="Header-button-bg" />
            <span className="Header-button-icon--default Button-icon">
              <ArrowDown />
            </span>
            <span className="Header-button-icon--reveal Button-icon">
              <ArrowDown />
            </span>
            <span className="Header-button-icon--close Button-icon">
              <ArrowUp />
            </span>
          </m.div>
        </AnimatePresence>
      </button>
    );
  },
);

HeaderButton.displayName = 'HeaderButton';
