import Link from "next/link";
import { useRouter } from "next/router";
import c from "classnames";
import {
  transPrimary,
  transPrimaryFast,
  transSecondary,
  transSecondaryFast,
} from "../../lib/config";
import { motion, useCycle } from "framer-motion";
import { ButtonArrow } from "../../components/Button";
import { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";

const anim = {
  navButton: {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: 24,
    },
    exit: {
      y: -24,
      opacity: 0,
    },
    transition: { ...transSecondary, duration: 0.5 },
  },
};

const navVariant = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: transPrimaryFast,
  },
  closed: {
    y: 48,
    opacity: 0,
    transition: transPrimaryFast,
  },
};

const ctrlVariant = {
  open: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
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
};

// const bg = {
//   open: (props = { x: 0, y: 0 }) => ({
//     clipPath: `circle(1100px at ${props.x}px ${props.y}px)`,
//     transition: transPrimary,
//   }),
//   closed: (props = { x: 0, y: 0 }) => ({
//     clipPath: `circle(10px at ${props.x}px ${props.y}px)`,
//     transition: { ...transSecondary, delay: 0.2 },
//   }),
// };

const NavItem = (props) => {
  const router = useRouter();
  return (
    <motion.li
      variants={navItemVariant}
      className={c("Header-main-item", {
        "is-active": router.pathname === props.href,
      })}
    >
      <Link href={props.href}>{props.name}</Link>
    </motion.li>
  );
};

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setOpen] = useCycle(false, true);
  const [hover, setHover] = useState(false);
  const [openReveal, setOpenReveal] = useState(false);
  const arrowIcon = useRef();
  const [arrowIconPosition, setArrowIconPosition] = useState({ y: 0, x: 0 });

  useEffect(() => {
    // Hmm, why timeout needed, some mounting/loading thing?
    setTimeout(() => {
      setArrowIconPosition({
        y: arrowIcon.current.offsetTop + arrowIcon.current.offsetHeight / 2,
        x: arrowIcon.current.offsetLeft + arrowIcon.current.offsetWidth / 2,
      });
    }, 50);

    const resize = debounce(() => {
      setArrowIconPosition({
        y: arrowIcon.current.offsetTop + arrowIcon.current.offsetHeight / 2,
        x: arrowIcon.current.offsetLeft + arrowIcon.current.offsetWidth / 2,
      });
    }, 100);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <header
        className={c("Header", {
          "is-negative": isOpen,
        })}
      >
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`Header-main Header-wrap wrap ${arrowIconPosition.x} ${arrowIconPosition.y}`}
          onAnimationComplete={() => !isOpen && setOpenReveal(false)}
        >
          {/* <AnimatePresence initial={false} exitBeforeEnter> */}
          <motion.div variants={ctrlVariant} className="Header-ctrl">
            <motion.div className="Header-logo">
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
            </motion.div>
            <motion.div className="Header-separator">
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
            </motion.div>
            <motion.button
              className="Header-button resetButton"
              onClick={() => {
                setOpen();
                setOpenReveal(true);
              }}
              onHoverStart={() => setHover("start")}
              onHoverEnd={() => setHover("end")}
              key={router.route}

              // {...anim.navButton}
            >
              <div className="Header-button-text-mobile">Menu</div>
              <div className="Header-button-text">
                <motion.div variants={ctrlItemOutVariant} initial={false}>
                  <span>{props.navTitle}</span>
                </motion.div>
                {openReveal && (
                  <motion.div
                    className="Header-button-text-reveal"
                    initial={{ y: 36 }}
                    variants={ctrlItemInVariant}
                  >
                    <span>{props.navTitle}</span>
                  </motion.div>
                )}
              </div>
              <ButtonArrow
                active={isOpen}
                className="Header-button-arrow"
                hoverEnd={hover === "end" ? true : false}
                hoverStart={hover === "start" ? true : false}
                innerRef={arrowIcon}
              />
            </motion.button>
          </motion.div>

          {/* </AnimatePresence> */}
          {/* <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              key={router.route}
              className="Header-button"
              {...anim.navButton}
            >
              <div className="Header-logo">Joonas Sandell</div>
              <div className="Header-button-text">{props.navTitle}</div>
              <motion.div key={router.route} {...anim.navButton}>
                <ArrowDown className="Header-button-icon" />
              </motion.div>
            </motion.div>
          </AnimatePresence> */}
          <motion.nav variants={navVariant} className="Header-nav">
            <ul>
              <NavItem i={0} key={0} name="Selected works" href="/" />
              <NavItem i={1} key={1} name="Oras" href="/projects/oras" />
            </ul>
          </motion.nav>
        </motion.div>
      </header>
      {/* 
        Currently the clipPath animates on mount
      */}
      <motion.div
        animate={
          isOpen
            ? {
                clipPath: `circle(1100px at ${arrowIconPosition.x}px ${arrowIconPosition.y}px)`,
                transition: transPrimary,
              }
            : {
                clipPath: `circle(0px at ${arrowIconPosition.x}px ${arrowIconPosition.y}px)`,
                transition: { ...transSecondary, delay: 0.2 },
              }
        }
        className="Header-bg"
        style={{
          clipPath: `circle(0px at ${arrowIconPosition.x}px ${arrowIconPosition.y}px)`,
        }}
      />
    </>
  );
}
