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
} from "../../lib/config";
import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
  useCycle,
  useAnimation,
  usePresence,
} from "framer-motion";
import { ButtonArrow } from "../../components/Button";
import { useState, useRef, useEffect, useCallback } from "react";
import { asyncTimeout } from "../../lib/utility";

/**
 * TODO:
 * - Add faster tansitions for other links than nav link by editing the
 *   mutating the `enterExitAnimButtonText` obj
 * - Try to get exit anim work better e.g. not so fast by somehow delaying the
 *   mask animation but not slowing down the entire flow
 */

const enterExitAnimButtonText = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -16,
  },
  exit: {
    opacity: 0,
    y: 16,
    // , delay: 0.3 or any slower transition breaks the mask anim
    transition: { ...transSecondaryFastest },
  },
  transition: { ...transSecondaryFastest },
};

const enterExitAnimBtnArrow = {
  // ...enterExitAnimButtonText,
  // transition: { ...transSecondaryFast, delay: 0.74, duration: 0.4 },
  // exit: {
  //   opacity: 0,
  //   y: 16,
  //   transition: { ...transSecondaryFastest, delay: 0 },
  // },
  // transition: { ...transSecondaryFast, delay: 0, duration: 0.4 },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -16,
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { ...transSecondaryFastest },
  },
  transition: { ...transSecondaryFastest, delay: 0.6 },
};

const navVariant = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariant = {
  open: {
    opacity: 1,
    transition: transPrimaryFast,
    y: 0,
  },
  closed: {
    opacity: 0,
    transition: transSecondaryFast,
    y: 88,
  },
};

const ctrlVariant = {
  open: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
  closed: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const ctrlItemOutVariant = {
  open: {
    transition: transSecondaryFast,
    y: -36,
  },
  closed: {
    transition: transPrimaryFast,
    y: 0,
  },
};

const ctrlItemInVariant = {
  open: {
    transition: transPrimaryFast,
    y: 0,
  },
  closed: {
    transition: transSecondaryFast,
    // transition: { ...transSecondaryFastest, duration: 0.2 },
    y: 36,
  },
};

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
      {/* <Link href={props.href}> */}
      <a className="Header-nav-link" href={props.href} onClick={props.onClick}>
        {props.name}
      </a>
      {/* </Link> */}
    </motion.li>
  );
};

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setOpen] = useCycle(false, true);
  const [hover, setHover] = useState(false);
  const [tmpReveal, setTmpReveal] = useState(false);
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

  const beforeClick = async ({ title, href }) => {
    open({ withMask: false });
    btnArrowInnerAnim.start({
      opacity: 0,
      transition: transSecondaryFast,
      y: -36,
    });
    router.push(href);
    // if (btnTxtMainSpan.current.innerText.length > title.length) {
    //   setTmpReveal(props.navTitle);
    // }
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
      console.log("closed");
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
    // console.log(isPresent);
    if (refresh) {
      console.log("refresh");
      // (async () => {
      setMask("openReset");
      // await asyncTimeout(() => {
      // setTmpReveal(false);
      // console.log(props.navTitle);
      // setRevealTitle(props.navTitle);
      setRefresh(false);
      // }, 100);
      // })();
    } else {
      (async () => {
        console.log("lol");
        setMask("closed");
        // await asyncTimeout(() => {
        //   btnArrowInnerAnim.start({
        //     opacity: 1,
        //     transition: { ...transSecondaryFastest, delay: 3 },
        //     y: 0,
        //   });
        // }, 300);

        // console.log(props.navTitle);
        setRevealTitle(props.navTitle);
      })();
    }
  }, [refresh]);

  useEffect(() => {
    if (!refresh) {
      console.log(props.navTitle);
      setRevealTitle(props.navTitle);
    }
  }, [props.navTitle]);

  useEffect(() => {
    setOpenReveal(true);
  }, [isOpen]);

  return (
    <motion.header
      animate={isOpen ? "open" : "closed"}
      className={c("Header", {
        "is-negative": isOpen,
      })}
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
                  // key="Header-button-text-main"
                  variants={ctrlItemOutVariant}
                >
                  <span ref={btnTxtMainSpan}>{props.navTitle}</span>
                </motion.div>
                {/* {tmpReveal && (
                  <motion.div className="Header-button-text-tmp">
                    <span>{tmpReveal}</span>
                  </motion.div>
                )} */}
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
              <NavItem
                onClick={(e) => {
                  e.preventDefault();
                  beforeClick({
                    title: "Oras",
                    href: "/projects/oras",
                  });
                }}
                i={1}
                key={1}
                name="Oras"
                href="/projects/oras"
              />
              <NavItem i={2} key={2} name="Biocode" href="/projects/biocode" />
              <NavItem i={3} key={3} name="Omoroi" href="/projects/omoroi" />
              <NavItem
                i={4}
                key={4}
                name="Mediasignal"
                href="/projects/mediasignal"
              />
              <NavItem
                i={5}
                key={5}
                name="Hankkija"
                href="/projects/hankkija"
              />
              <NavItem i={6} key={6} name="Hukka" href="/projects/hukka" />
              <NavItem
                i={7}
                key={7}
                name="HW-Company"
                href="/projects/hw-company"
              />
              <NavItem
                i={8}
                key={8}
                name="Dribbbles"
                href="/projects/dribbbles"
              />
              <NavItem
                onClick={(e) => {
                  e.preventDefault();

                  beforeClick({
                    title: "Selected works",
                    href: "/",
                  });
                }}
                i={9}
                key={9}
                name="Browse all"
                href="/"
              />
            </ul>
          </motion.nav>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
