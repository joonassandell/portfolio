import Link from "next/link";
import { useRouter } from "next/router";
import c from "classnames";
import {
  transPrimary,
  transPrimaryFast,
  transSecondary,
  transSecondaryFast,
} from "../../lib/config";
import { AnimatePresence, motion, useCycle } from "framer-motion";
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
    y: 36,
  },
  exit: {
    opacity: 0,
    y: -24,
  },
  transition: { ...transSecondaryFast, duration: 0.4 },
};

const enterExitAnimButtonArrow = {
  ...enterExitAnimButtonText,
  transition: { ...transSecondaryFast, delay: 0.05, duration: 0.4 },
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
      className={c("Header-nav-item", {
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
  const buttonArrow = useRef();
  const [buttonArrowPosition, setButtonArrowPos] = useState({ y: 0, x: 0 });

  useEffect(() => {
    /**
     * Hmm, why timeout needed, some mounting/loading thing?
     */
    setTimeout(() => {
      setButtonArrowPos({
        y: buttonArrow.current.offsetTop + buttonArrow.current.offsetHeight / 2,
        x: buttonArrow.current.offsetLeft + buttonArrow.current.offsetWidth / 2,
      });
    }, 500);

    const resize = debounce(() => {
      setButtonArrowPos({
        y: buttonArrow.current.offsetTop + buttonArrow.current.offsetHeight / 2,
        x: buttonArrow.current.offsetLeft + buttonArrow.current.offsetWidth / 2,
      });
    }, 100);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [props.navTitle]);

  return (
    <motion.header
      animate={isOpen ? "open" : "closed"}
      className={c("Header", {
        "is-negative": isOpen,
      })}
      onAnimationComplete={() => !isOpen && setOpenReveal(false)}
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
              setOpen();
              setOpenReveal(true);
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
                <motion.div variants={ctrlItemOutVariant}>
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
              </motion.div>
            </AnimatePresence>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                className="Header-button-arrow"
                key={`Header-button-arrow-${router.route}`}
                ref={buttonArrow}
                variants={ctrlItemOutVariant}
                {...enterExitAnimButtonArrow}
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
      {/* 
        Currently the clipPath animates on mount
      */}
      <motion.div
        animate={
          isOpen
            ? {
                clipPath: `circle(150% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
                transition: transPrimary,
              }
            : {
                clipPath: `circle(0% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
                transition: { ...transSecondary, duration: 1.2, delay: 0 },
              }
        }
        className="Header-mask"
        style={{
          clipPath: `circle(0% at ${buttonArrowPosition.x}px ${buttonArrowPosition.y}px)`,
        }}
      >
        <div className="wrap">
          <motion.nav variants={navVariant} className="Header-nav">
            <ul>
              <NavItem i={1} key={1} name="Oras" href="/projects/oras" />
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
            </ul>
          </motion.nav>
        </div>
      </motion.div>
    </motion.header>
  );
}
