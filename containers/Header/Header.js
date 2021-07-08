import { AnimatePresence, motion, useAnimation, useCycle } from 'framer-motion';
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
  navItemVariant,
  navVariant,
} from './Header.animations';
import { useEffect, useState } from 'react';

import { ButtonArrow } from '@/components/Button';
import Link from '@/components/Link';
import c from 'classnames';
import { debounce } from 'lodash';
import { easeCSS, sitemap } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { useAppContext } from '../App';
import { useCallbackRef } from 'use-callback-ref';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import useScrollTo from '@/lib/useScrollTo';

const about = getSitemap('about');
const contact = getSitemap('contact');

const NavItem = props => {
  const router = useRouter();

  return (
    <motion.li
      className={c('Header-nav-item', {
        'is-active': router.pathname === props.href,
      })}
      variants={navItemVariant}
    >
      <a className="Header-nav-link" href={props.url} onClick={props.onClick}>
        {props.name}
      </a>
    </motion.li>
  );
};

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setOpen] = useCycle(false, true);
  const [hover, setHover] = useState(false);
  const [maskReveal, setMaskReveal] = useState(false);
  const [openReveal, setOpenReveal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [arrowPos, setArrowPos] = useState({ y: 0, x: 0 });
  const maskAnim = useAnimation();
  const [mask, setMask] = useState('closedReset');
  const [navRevealTitle, setNavRevealTitle] = useState(null);
  const [enterExit, setEnterExit] = useState({
    btnText: enterExitBtnText,
    btnArrow: enterExitBtnArrow,
  });
  const { setTemplateTransition, setTransition } = useAppContext();
  const scrollTo = useScrollTo();

  const setArrowPosFromRef = ref => {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = ref;
    setArrowPos({
      y: offsetTop + offsetHeight / 2,
      x: offsetLeft + offsetWidth / 2,
    });
  };

  const btnArrow = useCallbackRef(null, ref => {
    if (ref) {
      setArrowPosFromRef(ref);
    }
  });

  useEffect(() => {
    const resize = debounce(() => setArrowPosFromRef(btnArrow.current), 100);
    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [btnArrow.current]);

  const toggleOpen = ({ withMask = true } = {}) => {
    setOpenReveal(true);
    setDisable(true);
    setNavRevealTitle(props.navTitle);

    /**
     * 1. This delay is here because otherwise the variants properties
     *    (e.g. staggerChildren) from the parent variant (ctrlVariant) aren't
     *    passed to the revealed elements. Couldn't get this to work
     *    w/ AnimatePresence and exit props.
     */
    setTimeout(() => setOpen(), 10); // [1.]

    if (withMask) {
      setMaskReveal(true);
      if (mask === 'closed' || mask === 'closedReset') setMask('open');
      if (mask === 'open' || mask === 'openReset') setMask('closed');
    }
  };

  const handleClick = e => {
    e.preventDefault();
    const url = new URL(e.target.href).pathname;
    const currUrl = router.pathname === url;

    if (!isOpen && currUrl) {
      setTemplateTransition(false);
      scrollTo(0);
      return;
    }

    if (isOpen && currUrl) {
      toggleOpen();
      return;
    }

    if (isOpen) {
      setTransition('instant');
    }

    router.push(url, null, {
      scroll: false,
    });
  };

  useEffect(() => {
    /**
     * Test if connection is slow or header is open and add progress spinner.
     * Polyfill this later or apply better solution.
     *
     * (navigator.connection && navigator.connection.downlink < 3)
     * // console.log('Downlink speed:', navigator.connection.downlink);
     */
    if (isOpen) {
      NProgress.configure({
        easing: easeCSS,
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

  useEffect(() => {
    const closeStart = () => {
      if (isOpen) {
        setTemplateTransition(false);
        setEnterExit({
          btnText: enterExitBtnTextIfNavOpen,
          btnArrow: enterExitBtnArrowIfNavOpen,
        });
      }
    };

    const closeComplete = () => {
      if (isOpen) {
        toggleOpen({ withMask: false });
        setTimeout(() => {
          setEnterExit({
            btnText: enterExitBtnText,
            btnArrow: enterExitBtnArrow,
          });
        }, 500);
        setMask('closed');
      }
    };

    router.events.on('routeChangeStart', closeStart);
    router.events.on('routeChangeError', closeComplete);
    router.events.on('routeChangeComplete', closeComplete);

    return () => {
      router.events.off('routeChangeStart', closeStart);
      router.events.off('routeChangeError', closeComplete);
      router.events.off('routeChangeComplete', closeComplete);
    };
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      if (mask === 'open') {
        await maskAnim.start({
          clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
          ...maskClose,
        });
        setMask('openReset');
      }

      if (mask === 'closed') {
        await maskAnim.start({
          clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
          ...maskOpen,
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
      <motion.header
        animate={isOpen ? 'open' : 'closed'}
        className={c('Header', {
          'is-disabled': disable,
        })}
        initial="initial"
        onAnimationComplete={() => {
          if (!isOpen) {
            setOpenReveal(false);
            setTimeout(() => setDisable(false), 500);
          } else {
            setDisable(false);
          }
        }}
        variants={ctrlVariant}
      >
        <div className="Header-main wrap">
          <div className="Header-ctrl">
            <div className="Header-logo">
              <motion.div variants={ctrlItemOutVariant}>
                <Link href="/" onClick={handleClick}>
                  Joonas Sandell
                </Link>
              </motion.div>
              {openReveal && (
                <motion.div
                  className="Header-logo-reveal"
                  variants={ctrlItemInVariant}
                >
                  <Link
                    href="/"
                    onClick={handleClick}
                    templateTransition={false}
                  >
                    Joonas Sandell
                  </Link>
                </motion.div>
              )}
            </div>
            <div className="Header-separator">
              <motion.div
                className="Header-separator-line"
                variants={ctrlItemOutVariant}
              />
              {openReveal && (
                <motion.div
                  className="Header-separator-line Header-separator-line--reveal"
                  variants={ctrlItemInVariant}
                />
              )}
            </div>
            <motion.button
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
                <motion.div variants={ctrlItemOutVariant}>Menu</motion.div>
                {openReveal && (
                  <motion.div
                    className="Header-button-textMobile-reveal"
                    variants={ctrlItemInVariant}
                  >
                    Menu
                  </motion.div>
                )}
              </div>
              <div className="Header-button-text">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.div
                    className="Header-button-text-item"
                    key={`Header-button-text-${router.route}`}
                    {...enterExit.btnText}
                  >
                    <motion.div variants={ctrlItemOutVariant}>
                      {props.navTitle}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                {openReveal && (
                  <div className="Header-button-text-item Header-button-text-item--reveal">
                    <motion.div variants={ctrlItemInVariant}>
                      {navRevealTitle}
                    </motion.div>
                  </div>
                )}
              </div>
              <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div
                  className="Header-button-arrow"
                  key={`Header-button-arrow-${router.route}`}
                  ref={btnArrow}
                  {...enterExit.btnArrow}
                >
                  <ButtonArrow
                    active={isOpen}
                    hoverEnd={hover === 'end' ? true : false}
                    hoverStart={hover === 'start' ? true : false}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <ul className="Header-secondary">
              <li className="Header-secondary-item">
                <motion.div variants={ctrlItemOutVariant}>
                  <Link
                    href={about.url}
                    isActive={about.url === router.pathname}
                    onClick={handleClick}
                  >
                    {about.navTitle}
                  </Link>
                </motion.div>
                {openReveal && (
                  <motion.div
                    className="Header-secondary-item-reveal"
                    variants={ctrlItemInVariant}
                  >
                    <Link
                      href={about.url}
                      isActive={about.url === router.pathname}
                      onClick={handleClick}
                      templateTransition={false}
                    >
                      {about.navTitle}
                    </Link>
                  </motion.div>
                )}
              </li>
              <li className="Header-secondary-item">
                <motion.div variants={ctrlItemOutVariant}>
                  <Link href={contact.url}>{contact.navTitle}</Link>
                </motion.div>
                {openReveal && (
                  <motion.div
                    className="Header-secondary-item-reveal"
                    variants={ctrlItemInVariant}
                  >
                    <Link href={contact.url}>{contact.navTitle}</Link>
                  </motion.div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </motion.header>
      <motion.div
        animate={maskAnim}
        className={c('Header-mask', {
          'is-open': maskReveal,
        })}
        onAnimationComplete={() => {
          if (!isOpen) {
            setMaskReveal(false);
          }
        }}
      >
        {maskReveal && (
          <div className="wrap">
            <motion.nav
              animate={isOpen ? 'open' : 'closed'}
              className="Header-nav"
              initial="initial"
              variants={navVariant}
            >
              <ul>
                {sitemap.map(item => {
                  if (item.type === 'secondary') return false;
                  return (
                    <NavItem
                      key={item.navTitle}
                      url={item.url}
                      name={item.navTitle}
                      onClick={e => handleClick(e)}
                    />
                  );
                })}
              </ul>
            </motion.nav>
          </div>
        )}
      </motion.div>
    </>
  );
}
