import { AnimatePresence, m } from 'motion/react'
import { ArrowDown, ArrowUp } from '@/components/Icon'
import { forwardRef } from 'react'
import {
  type HeaderButtonProps,
  MAIN_ITEM_IN_VARIANT,
  MAIN_ITEM_OUT_VARIANT,
} from './'
import { useRouter } from 'next/router'

export const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonProps>(
  (
    {
      arrowRef,
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
    const router = useRouter()
    const { asPath } = router

    return (
      <button
        aria-label="Open menu"
        className="Header-button flex align-items:center gap:s"
        onClick={() => toggleOpen()}
        onKeyDown={() => setFocusVisible(true)}
        ref={forwardedRef}
      >
        <div className="Header-button-text relative">
          <AnimatePresence initial={false} mode="wait">
            <m.div
              className="Header-button-text-item"
              key={!isDefaultNavTitle ? asPath : undefined}
              {...enterExit.text}
              {...(open && { 'aria-hidden': true })}
            >
              <m.div variants={MAIN_ITEM_OUT_VARIANT}>{navTitle}</m.div>
            </m.div>
          </AnimatePresence>
          {openReveal && (
            <div className="Header-button-text-item Header-button-text-item--reveal absolute">
              <m.div variants={MAIN_ITEM_IN_VARIANT}>{navRevealTitle}</m.div>
            </div>
          )}
        </div>
        <AnimatePresence initial={false} mode="wait">
          <m.div
            aria-hidden
            className="Header-button-arrow Button"
            key={mqM && !isDefaultNavTitle ? asPath : undefined}
            ref={arrowRef}
            {...(mqM && { ...enterExit.arrow })}
          >
            <div className="Header-button-bg" />
            <div className="Header-button-icon--default Button-icon absolute">
              <ArrowDown />
            </div>
            <div className="Header-button-icon--reveal Button-icon absolute">
              <ArrowDown />
            </div>
            <div className="Header-button-icon--close Button-icon absolute">
              <ArrowUp />
            </div>
          </m.div>
        </AnimatePresence>
      </button>
    )
  },
)

HeaderButton.displayName = 'HeaderButton'
