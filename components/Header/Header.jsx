import { AnimatePresence, m, useAnimation } from 'framer-motion';
import {
  ctrlItemInVariant,
  ctrlItemOutVariant,
  ctrlVariant,
  enterExitBtnArrow,
  enterExitBtnArrowIfNavOpen,
  enterExitBtnText,
  enterExitBtnTextIfNavOpen,
  maskClose,
  maskOpen,
  navVariant,
} from './Header.animations';
import { useEffect, useState, useRef } from 'react';
import { ButtonArrow } from '@/components/Button';
import { LinkRoll } from '@/components/LinkRoll';
import { Link } from '@/components/Link';
import c from 'classnames';
import { debounce } from 'lodash-es';
import { EASE_CSS, SITEMAP, LINKS, CONTENT } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { useAppContext } from '@/components/App';
import { useCallbackRef } from 'use-callback-ref';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useScrollTo } from '@/lib/useScrollTo';
import { NavItem } from './HeaderNavItem';
import { urlState } from '@/lib/useUrlState';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const about = getSitemap('about', 'secondary');
const contact = getSitemap('contact', 'secondary');
const someLinks = LINKS.social;

export const Header = ({ navTitle = CONTENT.defaultNavTitle }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(null);
  const [hover, setHover] = useState(false);
  const [maskIsOpen, setMaskIsOpen] = useState(false);
  const [mask, setMask] = useState('closedReset');
  const [openReveal, setOpenReveal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [arrowPos, setArrowPos] = useState({ y: 0, x: 0 });
  const maskAnim = useAnimation();
  const [navRevealTitle, setNavRevealTitle] = useState(null);
  const [enterExit, setEnterExit] = useState({
    btnText: enterExitBtnText,
    btnArrow: enterExitBtnArrow,
  });
  const {
    appState: { html },
    setTransition,
    setTransitionInitial,
  } = useAppContext();
  const scrollTo = useScrollTo();
  const maskRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  const setArrowPosFromRef = ref => {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = ref;
    setArrowPos({
      y: offsetTop + offsetHeight / 2,
      x: offsetLeft + offsetWidth / 2,
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
  }, [btnArrow.current]);

  /**
   * Handle open/close states. Note that in onAnimationComplete(s) some of the
   * states are handled after the animations.
   */
  const toggleOpen = ({ withMask = true } = {}) => {
    isOpen ? setOpen(false) : setOpen(true);
    if (!isOpen) html.classList.add('is-headerOpen');
    if (!isOpen) setOpenReveal(true);
    setDisabled(true);
    setNavRevealTitle(navTitle);

    /**
     * Scroll could be triggered e.g. w/ pgUp/pgDown so disable/enable it if
     * Header is open/closed. Note that scroll will stay stopped if header links
     * are clicked but App takes care of enabling it after route change.
     */
    scroll && !scroll.scroll.stop ? scroll.stop() : scroll.start();

    if (withMask) {
      if (mask === 'closed' || mask === 'closedReset') setMask('open');
      if (mask === 'open' || mask === 'openReset') setMask('closed');
    }
  };

  const handleClick = e => {
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
      () => router.push(href, null, { scroll: false }),
      isNavLink ? 300 : 0,
    );
  };

  useEffect(() => {
    if (isOpen) {
      NProgress.configure({
        easing: EASE_CSS,
        showSpinner: false,
        speed: 1200,
      });

      const changeStart = () => NProgress.start();
      const changeComplete = () => NProgress.done();

      router.events.on('routeChangeStart', changeStart);
      router.events.on('routeChangeError', changeComplete);
      router.events.on('routeChangeComplete', changeComplete);

      return () => {
        router.events.off('routeChangeStart', changeStart);
        router.events.off('routeChangeError', changeComplete);
        router.events.off('routeChangeComplete', changeComplete);
      };
    }
  }, [isOpen]);

  /**
   * Handle closing if routes change
   */
  useEffect(() => {
    if (isOpen) {
      const closeStart = () => {
        setEnterExit({
          btnText: enterExitBtnTextIfNavOpen,
          btnArrow: enterExitBtnArrowIfNavOpen,
        });
      };

      const closeComplete = () => {
        toggleOpen();
        setEnterExit({
          btnText: enterExitBtnText,
          btnArrow: enterExitBtnArrow,
        });
      };

      router.events.on('routeChangeStart', closeStart);
      router.events.on('routeChangeError', closeComplete);
      router.events.on('routeChangeComplete', closeComplete);

      return () => {
        router.events.off('routeChangeStart', closeStart);
        router.events.off('routeChangeError', closeComplete);
        router.events.off('routeChangeComplete', closeComplete);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      if (mask === 'open') {
        setMaskIsOpen(true);
        // Timeout because of display property (none/flex) change
        setTimeout(() => maskRef.current.scroll({ top: 0 }), 5);
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
  }, [mask, arrowPos]);

  return (
    <>
      <m.header
        animate={isOpen ? 'open' : isOpen === false ? 'closed' : ''}
        className={c('Header', { 'is-disabled': disabled })}
        initial="initial"
        onAnimationComplete={() => {
          if (!isOpen) {
            html.classList.remove('is-headerOpen');
            setOpenReveal(false);
            setTimeout(() => setDisabled(false), 500);
          } else {
            setDisabled(false);
          }
        }}
        variants={ctrlVariant}
      >
        <div className="Header-main wrap">
          <div className="Header-ctrl">
            <div className="Header-logo">
              <m.div variants={ctrlItemOutVariant}>
                <LinkRoll
                  href="/"
                  onClick={handleClick}
                  {...(isOpen && { tabIndex: -1 })}
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
              onFocus={() => setHover('start')}
              onHoverEnd={() => {
                setHover('end');
                setTimeout(() => setHover(false), 100);
              }}
              onHoverStart={() => setHover('start')}
            >
              <div className="Header-button-textMobile">
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
                    key={`Header-button-text-${router.route}`}
                    {...enterExit.btnText}
                  >
                    <m.div variants={ctrlItemOutVariant}>{navTitle}</m.div>
                  </m.div>
                </AnimatePresence>
                {openReveal && (
                  <div className="Header-button-text-item Header-button-text-item--reveal">
                    <m.div variants={ctrlItemInVariant}>{navRevealTitle}</m.div>
                  </div>
                )}
              </div>
              <AnimatePresence initial={false} mode="wait">
                <m.div
                  className="Header-button-arrow"
                  key={router.route}
                  ref={btnArrow}
                  {...enterExit.btnArrow}
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
                    {...(isOpen && { tabIndex: -1 })}
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
                    {...(isOpen && { tabIndex: -1 })}
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
      </m.header>
      <m.div
        animate={maskAnim}
        className={c('Header-mask scrollbar -color:negative', {
          'is-open': maskIsOpen,
          'is-disabled': disabled,
        })}
        onAnimationComplete={() => {
          if (mask === 'closedReset') setMaskIsOpen(false);
        }}
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
                      <NavItem
                        color={item.color}
                        key={item.navTitle}
                        name={item.navTitle}
                        onClick={handleClick}
                        url={item.url}
                        year={item.year}
                      />
                    );
                  })}
              </ul>
            </m.nav>
            <footer className="Header-footer wrap">
              <ul className="Header-links">
                {someLinks.map(link => {
                  return (
                    <li className="Header-links-item" key={link.id}>
                      <Link href={link.url} underline>
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="Header-copyright">
                &copy; {new Date().getFullYear()} <br />
                Joonas Sandell
              </p>
            </footer>
          </>
        )}
      </m.div>
    </>
  );
};
