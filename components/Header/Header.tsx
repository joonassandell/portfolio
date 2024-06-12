import { AnimatePresence, m, useAnimation } from 'framer-motion';
import { ButtonArrow } from '@/components/Button';
import { CONTENT, LINKS, MQ, SITEMAP } from '@/lib/config';
import { debounce } from 'lodash-es';
import {
  enterExitBtnArrow,
  enterExitBtnArrowIfNavOpen,
  enterExitBtnText,
  enterExitBtnTextIfNavOpen,
  HeaderMaskNavItem,
  HeaderNavItem,
  type HeaderProps,
  mainItemInVariant,
  mainItemOutVariant,
  mainItemVariant,
  maskCloseTransition,
  maskNavItemVariant,
  maskNavVariant,
  maskOpenTransition,
} from './';
import { getLink, getSitemap } from '@/lib/utils';
import { Link } from '@/components/Link';
import { type LinkEvent } from '@/types';
import { LinkRoll } from '@/components/LinkRoll';
import { urlState } from '@/lib/useUrlState';
import { useApp } from '@/components/App';
import { useCallbackRef } from 'use-callback-ref';
import { useEffect, useRef, useState } from 'react';
import {
  useLocomotiveScroll,
  useScrollTo,
} from '@/components/LocomotiveScroll';
import { useMedia } from 'react-use';
import { useRouter } from 'next/router';
import c from 'clsx';
import FocusTrap from 'focus-trap-react';

const contact = getSitemap('contact', 'common');
const source = getLink('source', 'common');

export const Header = ({ navTitle = CONTENT.defaultNavTitle }: HeaderProps) => {
  const router = useRouter();
  const { asPath, events, push } = router;
  const { html, setTransition, setTransitionInitial } = useApp();
  const { scroll } = useLocomotiveScroll();
  const scrollTo = useScrollTo();
  const mqM = useMedia(MQ.m, true);

  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [openReveal, setOpenReveal] = useState(false);
  const [navRevealTitle, setNavRevealTitle] = useState<string>(navTitle);

  const [maskOpen, setMaskOpen] = useState(false);
  const [mask, setMask] = useState('closedReset');
  const maskRef = useRef<HTMLDivElement>(null);
  const maskAnim = useAnimation();

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [btnFocus, setBtnFocus] = useState(false);
  const [hover, setHover] = useState<'start' | 'end' | false>(false);
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });
  const [enterExit, setEnterExit] = useState<{
    btnArrow: typeof enterExitBtnArrow;
    btnText: typeof enterExitBtnText;
  }>({
    btnArrow: enterExitBtnArrow,
    btnText: enterExitBtnText,
  });

  const setArrowPosFromRef = (ref: HTMLDivElement | null) => {
    if (!ref) return;
    const { offsetHeight, offsetLeft, offsetTop, offsetWidth } = ref;
    setArrowPos({
      x: offsetLeft + offsetWidth / 2,
      y: offsetTop + offsetHeight / 2,
    });
  };

  const btnArrow = useCallbackRef(null, ref => {
    if (ref) setArrowPosFromRef(ref);
  });

  useEffect(() => {
    const resize = debounce(() => setArrowPosFromRef(btnArrow.current), 100);
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [btnArrow]);

  /**
   * Handle open/close states. Note that in onAnimationComplete(s) some of the
   * states are handled after the animation finishes.
   */
  const toggleOpen = () => {
    setOpen(!open);
    if (!open) html.classList.add('is-headerOpen');
    if (!open) setOpenReveal(true);
    if (open && btnFocus) btnRef?.current?.blur();

    setAnimating(true);
    setNavRevealTitle(navTitle);

    /**
     * Scroll could be triggered e.g. w/ pgUp/pgDown so disable/enable it if
     * Header is open/closed. Note that scroll will stay stopped if header links
     * are clicked but App takes care of enabling it after route change.
     */
    scroll && !scroll.scroll.stop ? scroll.stop() : scroll?.start();

    if (mask === 'closed' || mask === 'closedReset') setMask('open');
    if (mask === 'open' || mask === 'openReset') setMask('closed');
  };

  /**
   * Handle all link clicks with a single handler. This could also be done
   * without preventDefault() since the link components handle routing but
   * there's slight modifications needed for some links below. Note that closing
   * of the header is handled below with router events after routes change.
   */
  const handleLinkClick = (e: LinkEvent) => {
    e.preventDefault();

    const {
      active,
      url: { href },
    } = urlState(e.target.href);

    // Only scroll to top if header isn't open and current link is active page
    if (!open && active) {
      scrollTo(0);
      return;
    }

    // Only close header (without routing) if current link is active page
    if (open && active) {
      toggleOpen();
      return;
    }

    // Set proper page transitions before routing
    if (open) {
      setTransition(true);
      setTransitionInitial(false);
    }

    /**
     * Add slight delay to wait for the nav link animation to end before routing
     * to new page. This prevents laggy transition which happens when url changes.
     * Note that the :root.is-transition class disables the pointer-events (hover).
     */
    const isMaskNavLink = e.target.classList.contains('Header-mask-nav-link');
    setTimeout(
      () => push(href, undefined, { scroll: false }),
      isMaskNavLink ? 300 : 0,
    );
  };

  /**
   * Handle closing if routes change
   */
  useEffect(() => {
    if (!open) return;

    const changeStart = () => {
      setEnterExit({
        btnArrow: enterExitBtnArrowIfNavOpen,
        btnText: enterExitBtnTextIfNavOpen,
      });
    };

    const changeComplete = () => {
      toggleOpen();
      setEnterExit({
        btnArrow: enterExitBtnArrow,
        btnText: enterExitBtnText,
      });
    };

    events.on('routeChangeStart', changeStart);
    events.on('routeChangeError', changeComplete);
    events.on('routeChangeComplete', changeComplete);

    return () => {
      events.off('routeChangeStart', changeStart);
      events.off('routeChangeError', changeComplete);
      events.off('routeChangeComplete', changeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, events]);

  /**
   * Handle closing with ESC key
   */
  useEffect(() => {
    if (open && !animating) {
      const esc = (e: KeyboardEvent) => e.key === 'Escape' && toggleOpen();
      html.addEventListener('keydown', esc);
      return () => html.removeEventListener('keydown', esc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, animating, html]);

  /**
   * Disable keydowns if mask is animating
   */
  useEffect(() => {
    if (animating) {
      const keys = (e: KeyboardEvent) => e.preventDefault();
      html.addEventListener('keydown', keys);
      return () => html.removeEventListener('keydown', keys);
    }
  }, [animating, html]);

  /**
   * Mask
   */
  useEffect(() => {
    (async () => {
      if (mask === 'open') {
        setMaskOpen(true);
        // Timeout because of display property (none/flex) change
        setTimeout(() => maskRef?.current?.scroll({ top: 0 }), 5);
        await maskAnim.start({
          clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
          transition: maskOpenTransition,
        });
        setMask('openReset');
      }

      if (mask === 'closed') {
        await maskAnim.start({
          clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
          transition: maskCloseTransition,
        });
        setMask('closedReset');
      }

      if (mask === 'openReset') {
        maskAnim.set({
          clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
        });
      }

      if (mask === 'closedReset') {
        maskAnim.set({
          clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
        });
      }
    })();
  }, [mask, arrowPos.x, arrowPos.y, maskAnim]);

  useEffect(() => {
    if (mask === 'closedReset' && !animating) setMaskOpen(false);
  }, [mask, animating]);

  return (
    <FocusTrap
      active={open}
      focusTrapOptions={{ initialFocus: false, returnFocusOnDeactivate: false }}
    >
      <header
        className={c('Header', {
          'is-animating': animating,
          'is-open': maskOpen,
        })}
        onMouseDown={() => btnFocus && setBtnFocus(false)}
      >
        <m.div
          animate={open ? 'open' : 'closed'}
          className="Header-main"
          initial="initial"
          onAnimationComplete={() => {
            if (!open) {
              html.classList.remove('is-headerOpen');
              setOpenReveal(false);
              setTimeout(() => {
                if (btnFocus) btnRef?.current?.focus();
                setAnimating(false);
              }, 700);
            } else {
              setAnimating(false);
            }
          }}
          variants={mainItemVariant}
        >
          <div className="Header-wrap wrap">
            <div className="Header-logo">
              <m.div variants={mainItemOutVariant}>
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
                  variants={mainItemInVariant}
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
                variants={mainItemOutVariant}
              />
              {openReveal && (
                <m.div
                  className="Header-separator-line Header-separator-line--reveal"
                  variants={mainItemInVariant}
                />
              )}
            </div>
            <m.button
              className="Header-button"
              onBlur={() => {
                setHover('end');
                setTimeout(() => setHover(false), 100);
              }}
              onClick={() => toggleOpen()}
              onFocus={() => {
                setHover('start');
                setBtnFocus(true);
              }}
              onHoverEnd={() => {
                setHover('end');
                setTimeout(() => setHover(false), 100);
              }}
              onHoverStart={() => setHover('start')}
              ref={btnRef}
            >
              <div className="Header-button-textMobile" hidden>
                <m.div variants={mainItemOutVariant}>Menu</m.div>
                {openReveal && (
                  <m.div
                    className="Header-button-textMobile-reveal"
                    variants={mainItemInVariant}
                  >
                    Menu
                  </m.div>
                )}
              </div>
              <div className="Header-button-text">
                <AnimatePresence initial={false} mode="wait">
                  <m.div
                    className="Header-button-text-item"
                    key={asPath}
                    {...enterExit.btnText}
                    {...(open && { hidden: true })}
                  >
                    <m.div variants={mainItemOutVariant}>{navTitle}</m.div>
                  </m.div>
                </AnimatePresence>
                {openReveal && (
                  <div className="Header-button-text-item Header-button-text-item--reveal">
                    <m.div variants={mainItemInVariant}>{navRevealTitle}</m.div>
                  </div>
                )}
              </div>
              <AnimatePresence initial={false} mode="wait">
                <m.div
                  className="Header-button-arrow"
                  key={mqM ? asPath : 'Header-button-arrow'}
                  ref={btnArrow}
                  {...(mqM && { ...enterExit.btnArrow })}
                >
                  <ButtonArrow
                    active={open}
                    hoverEnd={hover === 'end'}
                    hoverStart={hover === 'start'}
                  />
                </m.div>
              </AnimatePresence>
            </m.button>
            <ul className="Header-nav">
              {SITEMAP.common
                .filter(item => item.id != 'contact' && !item.hidden)
                .map(item => {
                  return (
                    <HeaderNavItem
                      href={item.url}
                      isOpen={open}
                      key={item.id}
                      onClick={handleLinkClick}
                      openReveal={openReveal}
                      title={item.navTitle}
                    />
                  );
                })}
              <HeaderNavItem
                href={contact.url}
                isOpen={open}
                openReveal={openReveal}
                target="_self"
                title={contact.navTitle}
              />
            </ul>
          </div>
        </m.div>
        <m.div
          animate={maskAnim}
          className="Header-mask scrollbar -color:negative"
          ref={maskRef}
        >
          {maskOpen && (
            <>
              <m.nav
                animate={open ? 'open' : 'closed'}
                className="Header-mask-nav"
                initial="initial"
                variants={maskNavVariant}
              >
                <ul>
                  {SITEMAP.project
                    .filter(item => !item.hidden)
                    .map(item => {
                      return (
                        <HeaderMaskNavItem
                          color={item.color}
                          href={item.url}
                          key={item.id}
                          onClick={handleLinkClick}
                          title={item.navTitle}
                          year={item.year}
                        />
                      );
                    })}
                </ul>
              </m.nav>
              <m.footer
                animate={!open ? 'closed' : ''}
                className="Header-footer wrap"
                variants={maskNavItemVariant}
              >
                <ul className="Header-footer-links">
                  {LINKS.social.map(link => {
                    return (
                      <li key={link.id}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="Header-footer-right">
                  <ul className="Header-footer-links">
                    {SITEMAP.common
                      .filter(item => !item.hidden)
                      .map(item => {
                        return (
                          <li key={item.id}>
                            <Link href={item.url} templateTransition={false}>
                              {item.navTitle}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                  <p className="Header-footer-copyright">
                    &copy; {new Date().getFullYear()} <br />
                    Joonas Sandell <br />
                    <Link href={`${source.url}`}>{source.title}</Link>
                  </p>
                </div>
              </m.footer>
            </>
          )}
        </m.div>
      </header>
    </FocusTrap>
  );
};
