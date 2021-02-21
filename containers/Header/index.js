import { AnimatePresence, motion, useAnimation, useCycle } from "framer-motion";
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
} from "./Header.animations";
import { useEffect, useState } from "react";

import { ButtonArrow } from "../../components/Button";
import c from "classnames";
import { debounce } from "lodash";
import { sitemap } from "../../lib/config";
import { useCallbackRef } from "use-callback-ref";
import { useRouter } from "next/router";

const NavItem = (props) => {
  const router = useRouter();

  return (
    <motion.li
      className={c("Header-nav-item", {
        "is-active": router.pathname === props.href,
      })}
      initial={navItemVariant.initial}
      variants={navItemVariant}
    >
      <a className="Header-nav-link" href={props.link} onClick={props.onClick}>
        {props.name}
      </a>
    </motion.li>
  );
};

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setOpen] = useCycle(false, true);
  const [hover, setHover] = useState(false);
  const [openReveal, setOpenReveal] = useState(false);
  const [arrowPos, setArrowPos] = useState({ y: 0, x: 0 });
  const maskAnim = useAnimation();
  const [mask, setMask] = useState("closedReset");
  const [navRevealTitle, setNavRevealTitle] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [enterExit, setEnterExit] = useState({
    btnTxt: enterExitBtnText,
    btnArrow: enterExitBtnArrow,
  });
  const setArrowPosFromRef = (ref) => {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = ref;
    setArrowPos({
      y: offsetTop + offsetHeight / 2,
      x: offsetLeft + offsetWidth / 2,
    });
  };
  const btnArrow = useCallbackRef(
    null,
    (ref) => {
      if (ref) setArrowPosFromRef(ref);
    },
    []
  );
  useEffect(() => {
    const resize = debounce(() => {
      setArrowPosFromRef(btnArrow.current);
    }, 100);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [btnArrow.current]);

  const open = ({ withMask = true } = {}) => {
    setOpen();

    if (withMask) {
      if (mask == "closedReset" || mask == "closed") {
        setMask("open");
      }

      if (mask == "open") {
        setMask("closed");
      }
    }
  };

  const beforeClickIfOpen = (link) => {
    open({ withMask: false });
    setEnterExit({
      btnText: enterExitBtnTextIfNavOpen,
      btnArrow: enterExitBtnArrowIfNavOpen,
    });
    router.push(link);
    setRefresh(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const link = new URL(e.target.href).pathname;
    if (isOpen) {
      beforeClickIfOpen(link);
    } else {
      router.push(link);
    }
  };

  useEffect(() => {
    if (mask === "open") {
      maskAnim.start({
        clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
        ...maskClose,
      });
    }

    if (mask === "closedReset") {
      maskAnim.set({
        clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
      });
    }

    if (mask === "closed") {
      maskAnim.start({
        clipPath: `circle(0% at ${arrowPos.x}px ${arrowPos.y}px)`,
        ...maskOpen,
      });
    }

    if (mask === "openReset") {
      maskAnim.set({
        clipPath: `circle(150% at ${arrowPos.x}px ${arrowPos.y}px)`,
      });
    }
  }, [mask, arrowPos]);

  useEffect(() => {
    if (refresh) {
      setMask("openReset");
      setRefresh(false);
    } else {
      setTimeout(() => {
        setEnterExit({
          btnText: enterExitBtnText,
          btnArrow: enterExitBtnArrow,
        });
      }, 500);
      setMask("closed");
    }
  }, [refresh]);

  useEffect(() => {
    if (isOpen) {
      setNavRevealTitle(props.navTitle);
      setOpenReveal(true);
    }
  }, [isOpen]);

  return (
    <motion.header
      animate={isOpen ? "open" : "closed"}
      className="Header"
      onAnimationComplete={() => {
        !isOpen && setOpenReveal(false);
      }}
    >
      <div className="Header-main wrap">
        <motion.div variants={ctrlVariant} className="Header-ctrl">
          <div className="Header-logo">
            <motion.div variants={ctrlItemOutVariant} initial={false}>
              <a href="/" onClick={(e) => handleClick(e)}>
                Joonas Sandell
              </a>
            </motion.div>
            {openReveal && (
              <motion.div
                className="Header-logo-reveal"
                initial={{ y: 36 }}
                variants={ctrlItemInVariant}
              >
                <a href="/" onClick={(e) => handleClick(e)}>
                  Joonas Sandell
                </a>
              </motion.div>
            )}
          </div>
          <div className="Header-separator">
            <motion.div
              className="Header-separator-line"
              initial={false}
              variants={ctrlItemOutVariant}
            />
            {openReveal && (
              <motion.div
                className="Header-separator-line Header-separator-line--reveal"
                initial={{ y: 36 }}
                variants={ctrlItemInVariant}
              />
            )}
          </div>
          <motion.button
            className="Header-button resetButton"
            onClick={() => {
              open();
            }}
            onHoverStart={() => setHover("start")}
            onHoverEnd={() => {
              setHover("end");
              setTimeout(() => setHover(false), 100);
            }}
          >
            <div className="Header-button-textMobile">
              <span>Menu</span>
              {openReveal && (
                <motion.div
                  className="Header-button-textMobile-reveal"
                  initial={{ y: 36 }}
                  variants={ctrlItemInVariant}
                >
                  <span>Menu</span>
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
                    <span>{props.navTitle}</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              {openReveal && (
                <div className="Header-button-text-item Header-button-text-item--reveal">
                  <motion.div variants={ctrlItemInVariant} initial={{ y: 36 }}>
                    <span>{navRevealTitle}</span>
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
                  hoverEnd={hover === "end" ? true : false}
                  hoverStart={hover === "start" ? true : false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
      <motion.div animate={maskAnim} className="Header-mask">
        <motion.div animate={isOpen ? "open" : "closed"} className="wrap">
          <motion.nav variants={navVariant} className="Header-nav">
            <ul>
              {sitemap.map((item, i) => (
                <NavItem
                  key={i}
                  link={item.link}
                  name={item.title}
                  onClick={(e) => {
                    e.preventDefault();
                    beforeClickIfOpen(item.link);
                  }}
                />
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
