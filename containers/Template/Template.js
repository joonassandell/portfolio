import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";

import Title from "../../components/Title";
import c from "classnames";
import { transPrimary } from "../../lib/config";
import { useAppContext } from "../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const variantsWithTransition = {
  animate: {
    position: "relative",
    y: 0,
    zIndex: 1,
  },
  exit: {
    position: "fixed",
    y: "-50vh",
    opacity: 1,
    zIndex: 0,
  },
  initial: {
    y: "100vh",
  },
  transition: transPrimary,
};

// Opacity fixes flash in iOS!
const variantsWithoutTransition = {
  animate: {
    position: "relative",
    y: 0,
    opacity: 1,
  },
  exit: {
    position: "fixed",
    opacity: 1,
    y: 0,
  },
  initial: {
    y: 0,
    opacity: 0,
  },
  transition: {
    duration: 0,
  },
};

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { templateTransition } = appState;
  const displayOverlay = animState === "animExit" && templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) {
      setAnimState("animExit");
    }

    if (isPresent) {
      setAnimState("animStart");
    }
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        className={c("Template", {
          [`Template--${name}`]: name,
          [`is-animating`]: templateTransition,
        })}
        onAnimationStart={() => {
          if (animState === "animStart" && templateTransition) {
            console.log("exit");
            if (scroll) {
              scroll.stop();
            }
          }
        }}
        {...(templateTransition
          ? { ...variantsWithTransition }
          : { ...variantsWithoutTransition })}
      >
        {children}
        {displayOverlay && (
          <motion.div
            exit={{
              backgroundColor: "var(--Template-overlayColor)",
              transition: transPrimary,
            }}
            className="Template-overlay"
          />
        )}
      </motion.div>
    </>
  );
};

export default Template;
