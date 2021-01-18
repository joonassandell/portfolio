import Link from "next/link";
import { useRouter } from "next/router";
import c from "classnames";
import {
  transPrimary,
  transPrimaryFast,
  transSecondary,
  transSecondaryFast,
  easing,
} from "../../lib/config";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { ArrowDown } from "../../components/Icon";
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
  // navButtonIcon: {
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   initial: {
  //     opacity: 0,
  //     y: 12,
  //   },
  //   exit: {
  //     y: -12,
  //     opacity: 0,
  //   },
  //   transition: { ...transSecondary, duration: 0.6 },
  // },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariants = {
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

const sidebar = {
  open: (height = 1100) => ({
    clipPath: `circle(${height}px at 463px 67px)`,
    transition: transPrimary,
  }),
  closed: {
    clipPath: "circle(0px at 463px 67px)",
    transition: { ...transSecondary, delay: 0.2 },
  },
};

const ctrlVariants = {
  open: {
    transition: { staggerChildren: 0, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.3,
    },
  },
};

const ctrlItemOutVariants = {
  open: {
    y: -36,
    transition: transPrimaryFast,
  },
  closed: {
    y: 0,
    transition: transPrimaryFast,
  },
};

const ctrlItemInVariants = {
  open: {
    y: 0,
    transition: transPrimaryFast,
  },
  closed: {
    y: 36,
    transition: transPrimaryFast,
  },
};

const NavItem = (props) => {
  const router = useRouter();
  return (
    <motion.li
      variants={navItemVariants}
      className={c("Header-nav-list-item", {
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
  const [displayReveal, setDisplayReveal] = useState(false);

  return (
    <>
      <header
        className={c("Header", {
          "is-negative": isOpen,
        })}
      >
        <div className="Header-wrap wrap">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="Header-nav"
            onAnimationComplete={() => !isOpen && setDisplayReveal(false)}
          >
            {/* <AnimatePresence initial={false} exitBeforeEnter> */}
            <motion.div variants={ctrlVariants} className="Header-nav-ctrl">
              <motion.div className="Header-name">
                <motion.span variants={ctrlItemOutVariants} initial={false}>
                  Joonas Sandell
                </motion.span>
                {displayReveal && (
                  <motion.span
                    variants={ctrlItemInVariants}
                    initial={false}
                    className="Header-name-reveal"
                  >
                    Joonas Sandell
                  </motion.span>
                )}
              </motion.div>
              <div
                key={router.route}
                className="Header-nav-button"
                // {...anim.navButton}
                onClick={() => {
                  setOpen();
                  setDisplayReveal(true);
                }}
              >
                <div className="Header-nav-button-text">{props.navTitle}</div>
                <motion.div className="Header-nav-button-icon">
                  <ArrowDown />
                </motion.div>
              </div>
            </motion.div>

            {/* </AnimatePresence> */}
            {/* <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              key={router.route}
              className="Header-nav-button"
              {...anim.navButton}
            >
              <div className="Header-name">Joonas Sandell</div>
              <div className="Header-nav-button-text">{props.navTitle}</div>
              <motion.div key={router.route} {...anim.navButton}>
                <ArrowDown className="Header-nav-button-icon" />
              </motion.div>
            </motion.div>
          </AnimatePresence> */}
            <motion.ul variants={navVariants} className="Header-nav-list">
              <NavItem i={0} key={0} name="Selected works" href="/" />
              <NavItem i={1} key={1} name="Oras" href="/projects/oras" />
            </motion.ul>
          </motion.nav>
        </div>
      </header>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="background"
        variants={sidebar}
        initial={false}
      ></motion.div>
    </>
  );
}
