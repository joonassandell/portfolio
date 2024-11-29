import { APP, BUILD_DATE, GIT_COMMIT_SHA, MQ } from '@/lib/config'
import {
  BTN_ENTER_EXIT_ARROW,
  BTN_ENTER_EXIT_ARROW_IF_NAV_OPEN,
  BTN_ENTER_EXIT_TEXT,
  BTN_ENTER_EXIT_TEXT_IF_NAV_OPEN,
  HeaderButton,
  type HeaderButtonProps,
  HeaderMaskNavItem,
  HeaderNavItem,
  type HeaderProps,
  MAIN_ITEM_IN_VARIANT,
  MAIN_ITEM_OUT_VARIANT,
  MAIN_ITEM_VARIANT,
  MASK_CLOSE_TRANSITION,
  MASK_ITEM_VARIANT,
  MASK_NAV_VARIANT,
  MASK_OPEN_TRANSITION,
} from './'
import { debounce } from 'es-toolkit'
import { formatDate, hasScrollbar, isBrowser } from '@/lib/utils'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { Link } from '@/components/Link'
import { type LinkEvent } from '@/types'
import { LinkRoll } from '@/components/LinkRoll'
import { m, useAnimation } from 'motion/react'
import { SomeIcons } from '@/components/SomeIcons'
import { Text } from '@/components/Text'
import { urlState } from '@/lib/useUrlState'
import { useApp } from '@/components/App'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import { useScrollTo } from '@/lib/useScrollTo'
import c from 'clsx'
import FocusTrap from 'focus-trap-react'

const { header } = SITEMAP

export const Header = ({
  navTitle = APP.header.defaultNavTitle,
}: HeaderProps) => {
  const router = useRouter()
  const { events, push } = router
  const { html, lockScroll, setTransition, setTransitionInitial } = useApp()
  const scrollTo = useScrollTo()
  const mqM = useMedia(MQ.m, true)

  const [open, setOpen] = useState(false)
  const [animating, setAnimating] = useState<'open' | 'close' | false>(false)
  const [openReveal, setOpenReveal] = useState(false)
  const [navRevealTitle, setNavRevealTitle] = useState<string>(navTitle)
  const isDefaultNavTitle = APP.header.defaultNavTitle === navTitle

  const [maskOpen, setMaskOpen] = useState(false)
  const [mask, setMask] = useState('closedReset')
  const maskRef = useRef<HTMLDivElement>(null)
  const maskAnim = useAnimation()
  const maskHasScrollbar =
    isBrowser && hasScrollbar(html.querySelector('.Header-mask'))

  const btnRef = useRef<HTMLButtonElement | null>(null)
  const [btnFocusVisible, setBtnFocusVisible] = useState(false)
  const [btnArrowPos, setBtnArrowPos] = useState({ x: 0, y: 0 })
  const [btnEnterExit, setBtnEnterExit] = useState<
    HeaderButtonProps['enterExit']
  >({
    arrow: BTN_ENTER_EXIT_ARROW,
    text: BTN_ENTER_EXIT_TEXT,
  })

  const btnArrowRef = useCallback((ref: HTMLDivElement | null) => {
    if (!ref) return

    const setBtnArrowPosFromRef = (arrowRef: typeof ref) => {
      const { offsetHeight, offsetLeft, offsetTop, offsetWidth } = arrowRef

      setBtnArrowPos({
        x: offsetLeft + offsetWidth / 2,
        y: offsetTop + offsetHeight / 2,
      })
    }

    setBtnArrowPosFromRef(ref)

    const resize = debounce(() => setBtnArrowPosFromRef(ref), 100)
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  /**
   * Handle open/close states. Note that in onAnimationComplete(s) some of the
   * states are handled after the animation finishes.
   */
  const toggleOpen = ({ btnFocus = true } = {}) => {
    setOpen(!open)
    if (!open) setOpenReveal(true)
    if (open && btnFocusVisible) setBtnFocusVisible(false)
    if (open && btnFocus) btnRef.current?.focus()
    !open ? lockScroll(true) : lockScroll(false)
    !open ? setAnimating('open') : setAnimating('close')
    setNavRevealTitle(navTitle)

    if (mask === 'closed' || mask === 'closedReset') setMask('open')
    if (mask === 'open' || mask === 'openReset') setMask('closed')
  }

  /**
   * Handle all link clicks with a single handler. This could also be done
   * without preventDefault() since the link components handle routing but
   * there's slight modifications needed for some links below. Note that closing
   * of the header is handled below with router events after routes change.
   */
  const handleLinkClick = (e: LinkEvent) => {
    e.preventDefault()

    const {
      active,
      url: { href },
    } = urlState(e.target.href)

    // Only scroll to top if header isn't open and current link is active page
    if (!open && active) {
      scrollTo(0)
      return
    }

    // Only close header (without routing) if current link is active page
    if (open && active) {
      toggleOpen()
      return
    }

    // Set proper page transitions before routing
    if (open) {
      setTransition('instant')
      setTransitionInitial(false)
    }

    /**
     * Add slight delay to wait for the nav link animation to end before routing
     * to new page. This prevents laggy transition which happens when url changes.
     * Note that the :root.is-transition class disables the pointer-events (hover).
     */
    const isMaskNavLink = e.target.classList.contains('Header-mask-nav-link')
    setTimeout(
      () => push(href, undefined, { scroll: false }),
      isMaskNavLink ? 300 : 0,
    )
  }

  /**
   * Handle closing if routes change
   */
  useEffect(() => {
    if (!open) return

    const changeStart = () => {
      setBtnEnterExit({
        arrow: BTN_ENTER_EXIT_ARROW_IF_NAV_OPEN,
        text: BTN_ENTER_EXIT_TEXT_IF_NAV_OPEN,
      })
    }

    const changeComplete = () => {
      toggleOpen({ btnFocus: false })
      setBtnEnterExit({
        arrow: BTN_ENTER_EXIT_ARROW,
        text: BTN_ENTER_EXIT_TEXT,
      })
    }

    events.on('routeChangeStart', changeStart)
    events.on('routeChangeError', changeComplete)
    events.on('routeChangeComplete', changeComplete)

    return () => {
      events.off('routeChangeStart', changeStart)
      events.off('routeChangeError', changeComplete)
      events.off('routeChangeComplete', changeComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, events])

  /**
   * Handle closing with ESC key
   */
  useEffect(() => {
    if (open && !animating) {
      const esc = (e: KeyboardEvent) => e.key === 'Escape' && toggleOpen()
      html.addEventListener('keydown', esc)
      return () => html.removeEventListener('keydown', esc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, animating, html])

  /**
   * Disable keydowns if mask is animating
   */
  useEffect(() => {
    if (animating) {
      const keys = (e: KeyboardEvent) => e.preventDefault()
      html.addEventListener('keydown', keys)
      return () => html.removeEventListener('keydown', keys)
    }
  }, [animating, html])

  /**
   * Mask
   */
  useEffect(() => {
    ;(async () => {
      if (mask === 'open') {
        setMaskOpen(true)
        // Timeout because of display property (none/flex) change
        setTimeout(() => maskRef?.current?.scroll({ top: 0 }), 5)
        await maskAnim.start({
          clipPath: `circle(150% at ${btnArrowPos.x}px ${btnArrowPos.y}px)`,
          transition: MASK_OPEN_TRANSITION,
        })
        setMask('openReset')
      }

      if (mask === 'closed') {
        await maskAnim.start({
          clipPath: `circle(0% at ${btnArrowPos.x}px ${btnArrowPos.y}px)`,
          transition: MASK_CLOSE_TRANSITION,
        })
        setMask('closedReset')
      }

      if (mask === 'openReset') {
        maskAnim.set({
          clipPath: `circle(150% at ${btnArrowPos.x}px ${btnArrowPos.y}px)`,
        })
      }

      if (mask === 'closedReset') {
        maskAnim.set({
          clipPath: `circle(0% at ${btnArrowPos.x}px ${btnArrowPos.y}px)`,
        })
      }
    })()
  }, [mask, btnArrowPos.x, btnArrowPos.y, maskAnim])

  useEffect(() => {
    if (mask === 'closedReset' && !animating) setMaskOpen(false)
  }, [mask, animating])

  return (
    <FocusTrap
      active={open}
      focusTrapOptions={{ initialFocus: false, returnFocusOnDeactivate: false }}
    >
      <header
        className={c('Header', {
          'has-scrollbar': maskHasScrollbar,
          'is-animating': animating,
          'is-animating:close': animating === 'close',
          'is-open': maskOpen,
        })}
      >
        <m.div
          animate={open ? 'open' : 'closed'}
          className="Header-main"
          initial="initial"
          onAnimationComplete={() => {
            if (!open) {
              setOpenReveal(false)

              /**
               * Delay the closing after the animation so the arrow button's
               * hover transitions doesn't conflict with the arrow button's
               * closing animations
               */
              setTimeout(() => setAnimating(false), 700)
            } else {
              setAnimating(false)
            }
          }}
          variants={MAIN_ITEM_VARIANT}
        >
          <div className="Header-wrap wrap">
            <div className="Header-logo">
              <m.div variants={MAIN_ITEM_OUT_VARIANT}>
                <LinkRoll
                  href="/"
                  onClick={handleLinkClick}
                  {...(open && { hidden: true, tabIndex: -1 })}
                >
                  Joonas Sandell
                </LinkRoll>
              </m.div>
              {openReveal && (
                <m.div
                  className="Header-logo-reveal"
                  variants={MAIN_ITEM_IN_VARIANT}
                >
                  <LinkRoll
                    href="/"
                    onClick={handleLinkClick}
                    templateTransition={false}
                  >
                    Joonas Sandell
                  </LinkRoll>
                </m.div>
              )}
            </div>
            <div className="Header-separator">
              <m.div
                className="Header-separator-line"
                variants={MAIN_ITEM_OUT_VARIANT}
              />
              {openReveal && (
                <m.div
                  className="Header-separator-line Header-separator-line--reveal"
                  variants={MAIN_ITEM_IN_VARIANT}
                />
              )}
            </div>
            <HeaderButton
              arrowRef={btnArrowRef}
              enterExit={btnEnterExit}
              isDefaultNavTitle={isDefaultNavTitle}
              mqM={mqM}
              navRevealTitle={navRevealTitle}
              navTitle={navTitle}
              open={open}
              openReveal={openReveal}
              ref={btnRef}
              setFocusVisible={setBtnFocusVisible}
              toggleOpen={toggleOpen}
            />
            <ul className="Header-nav">
              {header.nav.map(item => {
                return (
                  <HeaderNavItem
                    href={item.url}
                    isOpen={open}
                    key={item.id}
                    onClick={handleLinkClick}
                    openReveal={openReveal}
                    title={item.title}
                  />
                )
              })}
            </ul>
          </div>
        </m.div>
        <m.div
          animate={maskAnim}
          className="Header-mask scrollbar -dark"
          data-lenis-prevent
          ref={maskRef}
        >
          {maskOpen && (
            <>
              <m.nav
                animate={open ? 'open' : 'closed'}
                className="Header-mask-nav"
                initial="initial"
                variants={MASK_NAV_VARIANT}
              >
                <ul>
                  {header.navMask.map((item, i) => {
                    return (
                      <HeaderMaskNavItem
                        color={item.color}
                        focus={btnFocusVisible && i === 0}
                        href={item.url}
                        key={item.id}
                        onClick={handleLinkClick}
                        title={item.title}
                        year={item.year}
                      />
                    )
                  })}
                  {!mqM &&
                    header.navMaskMobile.map(item => {
                      return (
                        <m.li
                          className="Header-mask-nav-secondary-item wrap hidden@m"
                          custom={{ y: '3rem' }}
                          key={item.id}
                          variants={MASK_ITEM_VARIANT}
                        >
                          <LinkRoll
                            className="Header-mask-nav-secondary-link h6 mb:0"
                            href={item.url}
                            onClick={handleLinkClick}
                            templateTransition={false}
                            underline="active"
                          >
                            {item.title}
                          </LinkRoll>
                        </m.li>
                      )
                    })}
                </ul>
              </m.nav>
              <m.footer
                animate={!open ? 'closed' : ''}
                className="Header-footer wrap"
                variants={MASK_ITEM_VARIANT}
              >
                <Text className="Header-footer-nav visible@m" tag="ul">
                  {header.navMaskFooter.map(item => {
                    return (
                      <li key={item.id}>
                        <LinkRoll
                          href={item.url}
                          onClick={handleLinkClick}
                          templateTransition={false}
                          underline="active"
                        >
                          {item.title}
                        </LinkRoll>
                      </li>
                    )
                  })}
                </Text>
                <div className="Header-footer-right">
                  <SomeIcons />
                  <Text className="visible@m mb:0" size="s" tag="p">
                    Last updated:{' '}
                    <Link
                      href={
                        GIT_COMMIT_SHA
                          ? `${LINK.source.url}/commit/${GIT_COMMIT_SHA}`
                          : `${LINK.source.url}/commits`
                      }
                    >
                      {formatDate(BUILD_DATE)}
                    </Link>
                    {' ✳︎ '}
                    <Link href={LINK.source.url}>{LINK.source.title}</Link>
                  </Text>
                </div>
              </m.footer>
            </>
          )}
        </m.div>
      </header>
    </FocusTrap>
  )
}
