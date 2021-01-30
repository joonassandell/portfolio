import Link from "next/link";
import { useRouter } from "next/router";
import c from "classnames";
import {
  transPrimary,
  transPrimaryFast,
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
import { debounce } from "lodash";

const enterExitAnimButtonText = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -36,
  },
  exit: {
    opacity: 0,
    y: -36,
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
    transition: transSecondaryFast,
    y: 36,
  },
  exit: {
    transition: transSecondaryFast,
    y: -36,
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
    >
      {/* <Link href={props.href}> */}
      <a className="Header-nav-link" href={props.href} onClick={props.onClick}>
        {props.name}
      </a>
      {/* </Link> */}
    </motion.li>
  );
};

const setAsyncTimeout = (cb, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setOpen] = useCycle(false, true);
  const [hover, setHover] = useState(false);
  const [openReveal, setOpenReveal] = useState(false);
  const buttonArrow = useRef();
  const [buttonArrowPosition, setButtonArrowPos] = useState({ y: 0, x: 0 });

  const buttonArrowInnerAnim = useAnimation();
  const maskAnim = useAnimation();
  const [mask, setMask] = useState(false);
  const [maskReset, setMaskReset] = useState(false);
  const [title, setTitle] = useState(null);
  const btnTxtMainSpan = useRef();
  const [btnTextWidth, setBtnTextWidth] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const open = () => {
    setOpen();
    if (mask == "closed" || !mask) setMask("open");
    if (mask == "open") setMask("closed");
  };

  const beforeClick = async ({ title, href }) => {
    open();
    await buttonArrowInnerAnim.start({
      opacity: 0,
      transition: transSecondaryFastest,
      y: -36,
    });

    await setAsyncTimeout(() => {
      if (btnTxtMainSpan.current.innerText.length > title.length) {
        setBtnTextWidth(btnTxtMainSpan.current.offsetWidth);
      }
    }, 300);

    // await setAsyncTimeout(() => {
    //   setMaskReset();
    // }, 100);

    await setAsyncTimeout(() => {
      setRefresh(refresh + 1);
      router.push(href);
    }, 0);
  };

  useEffect(() => {
    console.log("maskposreset");

    setButtonArrowPos({
      y: buttonArrow.current.offsetTop + buttonArrow.current.offsetHeight / 2,
      x: buttonArrow.current.offsetLeft + buttonArrow.current.offsetWidth / 2,
    });
    if (mask === "open") {
      console.log("open");
      maskAnim.set({
        clipPath: `circle(150% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
      });
    }
    if (mask === "closed") {
      console.log("closed");
      maskAnim.set({
        clipPath: `circle(0% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
      });
    }
  }, [maskReset]);

  useEffect(() => {
    if (mask === "open") {
      maskAnim.start({
        clipPath: `circle(150% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
        transition: transPrimary,
      });
    }

    if (mask === "closed") {
      maskAnim.start({
        clipPath: `circle(0% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
        transition: transPrimary,
      });
    }
  }, [mask]);

  useEffect(() => {
    console.log("use effect render");

    if (refresh) {
      setBtnTextWidth("unset");
      setTimeout(() => {
        setTitle(props.navTitle);
        buttonArrowInnerAnim.start({
          opacity: 1,
          transition: { ...transSecondaryFast },
          y: 0,
        });
      }, 300);
    } else {
      setTitle(props.navTitle);
    }

    /**
     * Hmm, why timeout needed, some mounting/loading thing?
     */
    // setTimeout(() => {
    //   resetMaskPos();
    // }, 500);

    // const resize = debounce(() => {
    //   resetMaskPos();
    // }, 100);

    // window.addEventListener("resize", resize);

    // return () => {
    //   window.removeEventListener("resize", resize);
    // };
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
        // !isOpen && setAnimating(false);

        // console.log("end animation");
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
              ></motion.div>
            )}
          </div>
          <motion.button
            className="Header-button resetButton"
            onClick={() => {
              open();
            }}
            // onHoverStart={() => setHover("start")}
            // onHoverEnd={() => {
            //   setHover("end");
            //   setTimeout(() => setHover(false), 100);
            // }}
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
              // ref={buttonText}
              // key={`Header-button-text-${router.route}`}
              style={{
                width: btnTextWidth ? btnTextWidth : "unset",
              }}
              // {...enterExitAnimButtonText}
            >
              <motion.div
                className="Header-button-text-main"
                variants={ctrlItemOutVariant}
              >
                <span ref={btnTxtMainSpan}>{props.navTitle}</span>
              </motion.div>
              <AnimatePresence initial={false} exitBeforeEnter>
                {/* {openReveal && ( */}
                <motion.div
                  className="Header-button-text-reveal"
                  initial={{ y: 36 }}
                  // key={`Header-button-text-${router.route}`}
                  key="Header-button-text-reveal"
                  variants={ctrlItemInVariant}
                  data-id={props.navTitle}
                  // {...enterExitAnimButtonText}
                >
                  <span>{title}</span>
                </motion.div>
                {/* )} */}
              </AnimatePresence>
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
      <motion.div
        animate={maskAnim}
        className="Header-mask"
        style={{
          clipPath: `circle(0% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
        }}
      >
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
