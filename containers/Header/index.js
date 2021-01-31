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
} from "framer-motion";
import { ButtonArrow } from "../../components/Button";
import { useState, useRef, useEffect } from "react";
import { asyncTimeout } from "../../lib/utility";

const enterExitAnimButtonText = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -24,
  },
  exit: {
    opacity: 0,
    y: 24,
  },
  transition: { ...transSecondaryFastest },
};

const enterExitAnimButtonArrow = {
  ...enterExitAnimButtonText,
  transition: { ...transSecondaryFast, delay: 0.74, duration: 0.4 },
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
    transition: { ...transSecondaryFastest, duration: 0.2 },
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
  const buttonArrow = useRef();

  const buttonArrowInnerAnim = useAnimation();
  const maskAnim = useAnimation();
  const [mask, setMask] = useState(false);
  const [revealTitle, setRevealTitle] = useState(null);
  const btnTxtMainSpan = useRef();
  const [refresh, setRefresh] = useState(0);

  const open = ({ withMask = true } = {}) => {
    setOpen();

    if (withMask) {
      if (mask == "closed" || !mask) {
        openCloseMask("open");
        setMask("open");
      }

      if (mask == "open") {
        openCloseMask("close");
        setMask("closed");
      }
    }
  };

  const beforeClick = async ({ title, href }) => {
    open({ withMask: false });
    await buttonArrowInnerAnim.start({
      opacity: 0,
      transition: transSecondaryFastest,
      y: -36,
    });
    if (btnTxtMainSpan.current.innerText.length > title.length) {
      setTmpReveal(props.navTitle);
    }
    setRefresh(refresh + 1);
    router.push(href);
  };

  const openCloseMask = (state = "close") => {
    const x =
      buttonArrow.current.offsetLeft + buttonArrow.current.offsetWidth / 2;
    const y =
      buttonArrow.current.offsetTop + buttonArrow.current.offsetHeight / 2;
    console.log(buttonArrow.current.offsetTop);
    console.log(buttonArrow.current.offsetLeft);

    if (state === "open") {
      console.log("open");
      maskAnim.set({
        clipPath: `circle(0% at ${x}px ${y}px)`,
      });
      maskAnim.start({
        clipPath: `circle(150% at ${x}px ${y}px)`,
        transition: transPrimary,
      });
    }

    if (state === "close") {
      console.log("close");
      maskAnim.set({
        clipPath: `circle(150% at ${x}px ${y}px)`,
      });
      maskAnim.start({
        clipPath: `circle(0% at ${x}px ${y}px)`,
        transition: transPrimary,
      });
    }
  };

  useEffect(() => {
    if (refresh) {
      (async () => {
        if (tmpReveal) {
          await asyncTimeout(() => {
            setTmpReveal(false);
            openCloseMask("close");
            setMask("closed");
          }, 300);
        } else {
          openCloseMask("close");
          setMask("closed");
        }
        await asyncTimeout(() => {
          buttonArrowInnerAnim.start({
            opacity: 1,
            transition: transSecondaryFast,
            y: 0,
          });
        }, 500);
        await asyncTimeout(() => {
          setRevealTitle(props.navTitle);
          setRefresh(false);
        }, 100);
      })();
    } else {
      setRevealTitle(props.navTitle);
    }
  }, [refresh, props.navTitle]);

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
        {/* <AnimatePresence initial={false} exitBeforeEnter> */}
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
            {/* <AnimatePresence initial={false} exitBeforeEnter> */}
            <motion.div
              className="Header-button-text"
              key={`Header-button-text-${router.route}`}
              // {...enterExitAnimButtonText}
            >
              <motion.div
                className="Header-button-text-main"
                variants={ctrlItemOutVariant}
              >
                <span ref={btnTxtMainSpan}>{props.navTitle}</span>
              </motion.div>
              {tmpReveal && (
                <motion.div
                  className="Header-button-text-tmp"
                  // initial={{ y: 0 }}
                  // variants={ctrlItemTmpInVariant}
                >
                  <span>{tmpReveal}</span>
                </motion.div>
              )}
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
            {/* </AnimatePresence> */}
            {/* <AnimatePresence initial={false} exitBeforeEnter> */}
            <motion.div
              className="Header-button-arrow"
              key={`Header-button-arrow-${router.route}`}
              ref={buttonArrow}
              // {...enterExitAnimButtonArrow}
            >
              <motion.div
                animate={buttonArrowInnerAnim}
                className="Header-button-arrow-inner"
                key={`Header-button-arrow-inner-${router.route}`}
                initial={
                  refresh && {
                    opacity: 0,
                    y: -36,
                  }
                }
              >
                <ButtonArrow
                  active={isOpen}
                  // hoverEnd={hover === "end" ? true : false}
                  // hoverStart={hover === "start" ? true : false}
                />
              </motion.div>
            </motion.div>
            {/* </AnimatePresence> */}
          </motion.button>
        </motion.div>
      </div>
      {/* 
        Currently the clipPath animates on mount which is unwanted
      */}
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
