import Link from "next/link";
import { useRouter } from "next/router";
import c from "classnames";
import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
  sitemap,
} from "../../lib/config";
import { AnimatePresence, motion, useCycle, useAnimation } from "framer-motion";
import {
  enterExitBtnTextVariant,
  enterExitBtnTextIfNavOpenVariant,
  enterExitBtnArrowVariant,
  enterExitBtnArrowIfNavOpenVariant,
  navVariant,
  navItemVariant,
  ctrlVariant,
  ctrlItemOutVariant,
  ctrlItemInVariant,
} from "./variants";
import { ButtonArrow } from "../../components/Button";
import { useState, useRef, useEffect, useCallback } from "react";
// import { asyncTimeout } from "../../lib/utility";

/**
 * TODO:
 * - Add faster transitions for other links than nav link by editing the
 *   mutating the `enterExitButtonText` obj
 * - Try to get exit anim work better e.g. not so fast by somehow delaying the
 *   mask animation but not slowing down the entire flow
 */
const NavItem = (props) => {
  const router = useRouter();

  return (
    <motion.li
      variants={navItemVariant}
      className={c("Header-nav-item", {
        "is-active": router.pathname === props.href,
      })}
      initial={{
        opacity: 0,
        transition: transSecondaryFast,
        y: 88,
      }}
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

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const btnArrow = useCallback((node) => {
    if (node !== null) {
      setX(node.offsetLeft + node.offsetWidth / 2);
      setY(node.offsetTop + node.offsetHeight / 2);
    }
  }, []);

  const btnArrowInnerAnim = useAnimation();
  const maskAnim = useAnimation();
  const [mask, setMask] = useState("closedReset");
  const [revealTitle, setRevealTitle] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [variant, setVariant] = useState({
    enterExitBtnText: enterExitBtnTextVariant,
    enterExitBtnArrow: enterExitBtnArrowVariant,
  });
  const btnTxtMainSpan = useRef();

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
    setVariant({
      enterExitBtnText: enterExitBtnTextIfNavOpenVariant,
      enterExitBtnArrow: enterExitBtnArrowIfNavOpenVariant,
    });
    router.push(link);
    setRefresh(true);
  };

  const handleDefaultClick = (e) => {
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
        clipPath: `circle(150% at ${x}px ${y}px)`,
        transition: transPrimary,
      });
    }

    if (mask === "closedReset") {
      maskAnim.set({
        clipPath: `circle(0% at ${x}px ${y}px)`,
      });
    }

    if (mask === "closed") {
      maskAnim.start({
        clipPath: `circle(0% at ${x}px ${y}px)`,
        transition: transPrimary,
      });
    }

    if (mask === "openReset") {
      maskAnim.set({
        clipPath: `circle(150% at ${x}px ${y}px)`,
      });
    }
  }, [mask, x, y]);

  useEffect(() => {
    if (refresh) {
      setMask("openReset");
      setRefresh(false);
    } else {
      setTimeout(() => {
        setVariant({
          enterExitBtnText: enterExitBtnTextVariant,
          enterExitBtnArrow: enterExitBtnArrowVariant,
        });
      }, 500);
      setMask("closed");
      setRevealTitle(props.navTitle);
    }
  }, [refresh]);

  useEffect(() => {
    if (!refresh) {
      setRevealTitle(props.navTitle);
    }
  }, [props.navTitle]);

  useEffect(() => {
    setOpenReveal(true);
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
              <a href="/" onClick={(e) => handleDefaultClick(e)}>
                Joonas Sandell
              </a>
            </motion.div>
            {openReveal && (
              <motion.div
                className="Header-logo-reveal"
                initial={{ y: 36 }}
                variants={ctrlItemInVariant}
              >
                <a href="/" onClick={(e) => handleDefaultClick(e)}>
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
            <div className="Header-button-text Header-button-text--mobile">
              <span>Menu</span>
              {openReveal && (
                <motion.div
                  className="Header-button-text-reveal"
                  initial={{ y: 36 }}
                  variants={ctrlItemInVariant}
                >
                  <span>Menu</span>
                </motion.div>
              )}
            </div>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                className="Header-button-text"
                key={`Header-button-text-${router.route}`}
                {...variant.enterExitBtnText}
              >
                <motion.div
                  className="Header-button-text-main"
                  variants={ctrlItemOutVariant}
                >
                  <span ref={btnTxtMainSpan}>{props.navTitle}</span>
                </motion.div>
                {openReveal && (
                  <motion.div
                    className="Header-button-text-reveal"
                    initial={{ y: 36 }}
                    variants={ctrlItemInVariant}
                  >
                    <span>{revealTitle}</span>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                className="Header-button-arrow"
                key={`Header-button-arrow-${router.route}`}
                ref={btnArrow}
                {...variant.enterExitBtnArrow}
              >
                <motion.div
                  animate={btnArrowInnerAnim}
                  className="Header-button-arrow-inner"
                >
                  <ButtonArrow
                    active={isOpen}
                    hoverEnd={hover === "end" ? true : false}
                    hoverStart={hover === "start" ? true : false}
                  />
                </motion.div>
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
