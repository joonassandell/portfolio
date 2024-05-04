import { AnimatePresence, m, useAnimation } from 'framer-motion';
import { ButtonArrow } from '@/components/Button';
import { CONTENT, LINKS, MQ, SITEMAP } from '@/lib/config';
import {
  ctrlItemInVariant,
  ctrlItemOutVariant,
  ctrlVariant,
  enterExitBtnArrow,
  enterExitBtnArrowIfNavOpen,
  enterExitBtnText,
  enterExitBtnTextIfNavOpen,
  HeaderNavItem,
  type HeaderProps,
  maskClose,
  maskOpen,
  navItemVariant,
  navVariant,
} from './';
import { debounce } from 'lodash-es';
import { getSitemap } from '@/lib/utility';
import { Link } from '@/components/Link';
import { type LinkEvent } from '@/types';
import { LinkRoll } from '@/components/LinkRoll';
import { urlState } from '@/lib/useUrlState';
import { useAppContext } from '@/components/App';
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

const about = getSitemap('about', 'secondary');
const contact = getSitemap('contact', 'secondary');
const someLinks = LINKS.social;

export const Header = ({ navTitle = CONTENT.defaultNavTitle }: HeaderProps) => {
  const router = useRouter();
  const { asPath, events, push } = router;
  const [isOpen, setOpen] = useState(false);
  const [hover, setHover] = useState<'start' | 'end' | false>(false);
  const [maskIsOpen, setMaskIsOpen] = useState(false);
  const [mask, setMask] = useState('closedReset');
  const [openReveal, setOpenReveal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });
  const maskAnim = useAnimation();
  const [navRevealTitle, setNavRevealTitle] = useState<string>();
  const [btnFocus, setBtnFocus] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [enterExit, setEnterExit] = useState<{
    btnArrow: typeof enterExitBtnArrow;
    btnText: typeof enterExitBtnText;
  }>({
    btnArrow: enterExitBtnArrow,
    btnText: enterExitBtnText,
  });
  const {
    appState: { html },
    setTransition,
    setTransitionInitial,
  } = useAppContext();
  const scrollTo = useScrollTo();
  const maskRef = useRef<HTMLDivElement>(null);
  const mqM = useMedia(MQ.m, true);
  const { scroll } = useLocomotiveScroll();

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
   * states are handled after the animations.
   */
  const toggleOpen = () => {
    isOpen ? setOpen(false) : setOpen(true);
    if (!isOpen) html.classList.add('is-headerOpen');
    if (!isOpen) setOpenReveal(true);
    if (isOpen && btnFocus) btnRef?.current?.blur();

    setDisabled(true);
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

  const handleClick = (e: LinkEvent) => {
    e.preventDefault();

    const {
      active,
      url: { href },
    } = urlState(e.target.href);

    if (!isOpen && active) {
      scrollTo(0);
      return;
    }

    if (isOpen && active) {
      setDisabled(true);
      toggleOpen();
      return;
    }

    if (isOpen) {
      setDisabled(true);
      setTransition(true);
      setTransitionInitial(false);
    }

    /**
     * Add slight delay to wait for the nav link animation to end before routing
     * to new page. This prevents laggy transition which happens when url changes.
     * Note that the :root.is-transition class disables the pointer-events (hover).
     */
    const isNavLink = e.target.classList.contains('Header-nav-link');
    setTimeout(
      () => push(href, undefined, { scroll: false }),
      isNavLink ? 300 : 0,
    );
  };

  /**
   * Handle closing if routes change
   */
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, events]);

  /**
   * Handle closing with ESC key
   */
  useEffect(() => {
    if (isOpen && !disabled) {
      const esc = (e: KeyboardEvent) => e.key === 'Escape' && toggleOpen();
      html.addEventListener('keydown', esc);
      return () => html.removeEventListener('keydown', esc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, disabled, html]);

  /**
   * Disable keydowns if mask is animating
   */
  useEffect(() => {
    if (disabled) {
      const keys = (e: KeyboardEvent) => e.preventDefault();
      html.addEventListener('keydown', keys);
      return () => html.removeEventListener('keydown', keys);
    }
  }, [disabled, html]);

  /**
   * Mask
   */
  useEffect(() => {
    (async () => {
      if (mask === 'open') {
        setMaskIsOpen(true);
        // Timeout because of display property (none/flex) change
        setTimeout(() => maskRef?.current?.scroll({ top: 0 }), 5);
        await maskAnim.start({
          clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
          ...maskOpen,
        });
        setMask('openReset');
      }

      if (mask === 'closed') {
        await maskAnim.start({
          clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
          ...maskClose,
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
    if (mask === 'closedReset' && !disabled) setMaskIsOpen(false);
  }, [mask, disabled]);

  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{ initialFocus: false, returnFocusOnDeactivate: false }}
    >
      <header
        className="Header"
        onMouseDown={() => btnFocus && setBtnFocus(false)}
      >
        <m.div
          animate={isOpen ? 'open' : isOpen === false ? 'closed' : ''}
          className={c('Header-main', { 'is-disabled': disabled })}
          initial="initial"
          onAnimationComplete={() => {
            if (!isOpen) {
              html.classList.remove('is-headerOpen');
              setOpenReveal(false);
              setTimeout(() => {
                if (btnFocus) btnRef?.current?.focus();
                setDisabled(false);
              }, 700);
            } else {
              setDisabled(false);
            }
          }}
          variants={ctrlVariant}
        >
          <div className="Header-wrap wrap">
            <div className="Header-ctrl">
              <div className="Header-logo">
                <m.div variants={ctrlItemOutVariant}>
                  <LinkRoll
                    href="/"
                    onClick={handleClick}
                    {...(isOpen && { hidden: true, tabIndex: -1 })}
                  >
                    Joonas Sandell
                  </LinkRoll>
                </m.div>
                {openReveal && (
                  <m.div
                    className="Header-logo-reveal"
                    variants={ctrlItemInVariant}
                  >
                    <LinkRoll
                      href="/"
                      onClick={handleClick}
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
                  variants={ctrlItemOutVariant}
                />
                {openReveal && (
                  <m.div
                    className="Header-separator-line Header-separator-line--reveal"
                    variants={ctrlItemInVariant}
                  />
                )}
              </div>
              <m.button
                className="Header-button resetButton"
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
                  <m.div variants={ctrlItemOutVariant}>Menu</m.div>
                  {openReveal && (
                    <m.div
                      className="Header-button-textMobile-reveal"
                      variants={ctrlItemInVariant}
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
                      {...(isOpen && { hidden: true })}
                    >
                      <m.div variants={ctrlItemOutVariant}>{navTitle}</m.div>
                    </m.div>
                  </AnimatePresence>
                  {openReveal && (
                    <div className="Header-button-text-item Header-button-text-item--reveal">
                      <m.div variants={ctrlItemInVariant}>
                        {navRevealTitle}
                      </m.div>
                    </div>
                  )}
                </div>
                <AnimatePresence initial={false} mode="wait">
                  <m.div
                    className="Header-button-arrow"
                    key={mqM ? asPath : 'Header-button-arrow'}
                    ref={btnArrow}
                    {...(mqM && { ...enterExit.btnArrow })}
                    suppressHydrationWarning
                  >
                    <ButtonArrow
                      active={isOpen}
                      hoverEnd={hover === 'end'}
                      hoverStart={hover === 'start'}
                    />
                  </m.div>
                </AnimatePresence>
              </m.button>
              <ul className="Header-secondary">
                <li className="Header-secondary-item">
                  <m.div variants={ctrlItemOutVariant}>
                    <LinkRoll
                      href={about.url}
                      onClick={handleClick}
                      underline={urlState(about.url, router).active}
                      {...(isOpen && { hidden: true, tabIndex: -1 })}
                    >
                      {about.navTitle}
                    </LinkRoll>
                  </m.div>
                  {openReveal && (
                    <m.div
                      className="Header-secondary-item-reveal"
                      variants={ctrlItemInVariant}
                    >
                      <LinkRoll
                        href={about.url}
                        onClick={handleClick}
                        templateTransition={false}
                        underline={urlState(about.url, router).active}
                      >
                        {about.navTitle}
                      </LinkRoll>
                    </m.div>
                  )}
                </li>
                <li className="Header-secondary-item">
                  <m.div variants={ctrlItemOutVariant}>
                    <LinkRoll
                      href={contact.url}
                      {...(isOpen && { hidden: true, tabIndex: -1 })}
                    >
                      {contact.navTitle}
                    </LinkRoll>
                  </m.div>
                  {openReveal && (
                    <m.div
                      className="Header-secondary-item-reveal"
                      variants={ctrlItemInVariant}
                    >
                      <LinkRoll href={contact.url}>{contact.navTitle}</LinkRoll>
                    </m.div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </m.div>
        <m.div
          animate={maskAnim}
          className={c('Header-mask scrollbar -color:negative', {
            'is-disabled': disabled,
            'is-open': maskIsOpen,
          })}
          ref={maskRef}
        >
          {maskIsOpen && (
            <>
              <m.nav
                animate={isOpen ? 'open' : 'closed'}
                className="Header-nav"
                initial="initial"
                variants={navVariant}
              >
                <ul>
                  {SITEMAP.primary
                    .filter(item => !item.hidden)
                    .map(item => {
                      return (
                        <HeaderNavItem
                          color={item.color}
                          key={item.id}
                          name={item.navTitle}
                          onClick={handleClick}
                          url={item.url}
                          year={item.year}
                        />
                      );
                    })}
                </ul>
              </m.nav>
              <m.footer
                animate={!isOpen ? 'closed' : ''}
                className="Header-footer wrap"
                variants={navItemVariant}
              >
                <ul className="Header-footer-links">
                  {someLinks.map(link => {
                    return (
                      <li key={link.id}>
                        <Link href={link.url} underline>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="Header-footer-right">
                  <ul className="Header-footer-links">
                    {SITEMAP.secondary.map(item => {
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.url}
                            templateTransition={false}
                            underline
                          >
                            {item.navTitle}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="Header-footer-copyright">
                    &copy; {new Date().getFullYear()} <br />
                    Joonas Sandell
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
