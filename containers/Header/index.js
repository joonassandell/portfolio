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
  enterExitAnimButtonText,
  enterExitAnimBtnArrow,
  navVariant,
  navItemVariant,
  ctrlVariant,
  ctrlItemOutVariant,
  ctrlItemInVariant,
} from "./variants";
import { ButtonArrow } from "../../components/Button";
import { useState, useRef, useEffect, useCallback } from "react";

/**
 * TODO:
 * - Add faster tansitions for other links than nav link by editing the
 *   mutating the `enterExitAnimButtonText` obj
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
  const btnTxtMainSpan = useRef();
  const [refresh, setRefresh] = useState(0);

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

  const beforeClick = async ({ link }) => {
    open({ withMask: false });
    btnArrowInnerAnim.start({
      opacity: 0,
      transition: transSecondaryFast,
      y: -36,
    });
    router.push(link);
    setRefresh(true);
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
      (async () => {
        setMask("closed");
        setRevealTitle(props.navTitle);
      })();
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
              <Link href="/">Joonas Sandell</Link>
            </motion.div>
            {openReveal && (
              <motion.div
                className="Header-logo-reveal"
                initial={{ y: 36 }}
                variants={ctrlItemInVariant}
              >
                <Link href="/">Joonas Sandell</Link>
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
                {...enterExitAnimButtonText}
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
                {...enterExitAnimBtnArrow}
              >
                <motion.div
                  animate={btnArrowInnerAnim}
                  className="Header-button-arrow-inner"
                  // key={`Header-button-arrow-inner-${router.route}`}
                  // initial={
                  //   refresh && {
                  //     opacity: 0,
                  //     y: -36,
                  //   }
                  // }
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
                  onClick={(e) => {
                    e.preventDefault();
                    beforeClick({
                      link: item.link,
                    });
                  }}
                  key={i}
                  name={item.title}
                  link={item.link}
                />
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
