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
  easing,
} from "../../lib/config";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { ButtonArrow } from "../../components/Button";
import { useState } from "react";

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
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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
    y: 50,
    opacity: 0,
    transition: transPrimaryFast,
  },
};

const bg = {
  open: (height = 1100) => ({
    clipPath: `circle(${height}px at 463px 67px)`,
    transition: transPrimary,
  }),
  closed: {
    clipPath: "circle(0px at 463px 67px)",
    transition: { ...transSecondary, delay: 0.2 },
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
    transition: transPrimaryFastest,
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
    transition: transPrimaryFastest,
    y: 36,
  },
};

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

  return (
    <>
      <header
        className={c("Header", {
          "is-negative": isOpen,
        })}
      >
        {/* <div className="Header-wrap wrap"> */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="Header-main Header-wrap wrap"
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
                  variants={ctrlItemInVariant}
                  initial={false}
                  className="Header-logo-reveal"
                >
                  <Link href="/">Joonas Sandell</Link>
                </motion.div>
              )}
            </motion.div>
            <motion.div className="Header-separator">
              <motion.div
                variants={ctrlItemOutVariant}
                initial={false}
                className="Header-separator-line"
              />
              {openReveal && (
                <motion.div
                  variants={ctrlItemInVariant}
                  initial={false}
                  className="Header-separator-line Header-separator-line--reveal"
                ></motion.div>
              )}
            </motion.div>
            <motion.button
              key={router.route}
              className="Header-button resetButton"
              onHoverEnd={() => setHover("end")}
              onHoverStart={() => setHover("start")}
              // {...anim.navButton}
              onClick={() => {
                setOpen();
                setOpenReveal(true);
              }}
            >
              <div className="Header-button-text-mobile">Menu</div>
              <div className="Header-button-text">
                <motion.div variants={ctrlItemOutVariant} initial={false}>
                  <span>{props.navTitle}</span>
                </motion.div>
                {openReveal && (
                  <motion.div
                    variants={ctrlItemInVariant}
                    initial={false}
                    className="Header-button-text-reveal"
                  >
                    <span>{props.navTitle}</span>
                  </motion.div>
                )}
              </div>
              <ButtonArrow
                className="Header-button-arrow"
                active={isOpen}
                hoverStart={hover === "start" ? true : false}
                hoverEnd={hover === "end" ? true : false}
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
        {/* </div> */}
      </header>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="Header-bg"
        variants={bg}
        initial={false}
      ></motion.div>
    </>
  );
}
