import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";

import Title from "../../components/Title";
import c from "classnames";
import { transPrimary } from "../../lib/config";
import { useAppContext } from "../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useRouter } from "next/router";

const variants = {
  animate: {
    y: 0,
    position: "relative",
    zIndex: 1,
  },
  exit: {
    position: "fixed",
    y: "-50vh",
    zIndex: 0,
  },
  initial: {
    y: "100vh",
  },
};

const Template = ({ children, name, title }) => {
  const { scroll } = useLocomotiveScroll();
  const isPresent = useIsPresent();
  const [animState, setAnimState] = useState(null);
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;
  const router = useRouter();
  const displayOverlay = animState === "animExit" && templateTransition;

  useEffect(() => {
    router.beforePopState(() => {
      setTemplateTransition(true);
      return true;
    });
  }, []);

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
        animate="animate"
        className={c("Template", {
          [`Template--${name}`]: name,
        })}
        exit="exit"
        initial="initial"
        onAnimationComplete={() => {
          if (animState === "animExit") {
            setTemplateTransition(false);
            if (scroll) scroll.init();
          }
        }}
        onAnimationStart={() => {
          if (animState === "animStart") {
            if (scroll) scroll.destroy();
          }
        }}
        transition={transPrimary}
        {...(templateTransition && { variants: variants })}
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
