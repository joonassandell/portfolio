import { motion, useIsPresent, usePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import Title from "../../components/Title";
import c from "classnames";
import { transPrimary } from "../../lib/config";
import { useAppContext } from "../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useRouter } from "next/router";

const variants = {
  animate: {
    position: "relative",
    y: 0,
    zIndex: 1,
  },
  exit: {
    position: "fixed",
    y: "-50vh",
    zIndex: 0,
  },
  initial: {
    // position: "fixed",
    y: "100vh",
  },
};

const AnimationWrapper = (props) => {
  const { setTemplateTransition } = useAppContext();
  const { scroll } = useLocomotiveScroll();

  return (
    <motion.div
      animate="animate"
      className={c("Template", {
        [`Template--${props.name}`]: props.name,
      })}
      exit="exit"
      initial="initial"
      onAnimationComplete={() => {
        if (props.animState === "animExit") {
          console.log("enter");
          // setTimeout(() => {
          // setTemplateTransition(false);
          // }, 1000);
          if (scroll) {
            scroll.destroy();
            scroll.init();
          }
        }
      }}
      onAnimationStart={() => {
        if (props.animState === "animStart") {
          console.log("exit");
          if (scroll) scroll.stop();
        }
      }}
      variants={variants}
      transition={transPrimary}
    >
      {props.children}
      {props.displayOverlay && (
        <motion.div
          exit={{
            backgroundColor: "var(--Template-overlayColor)",
            transition: transPrimary,
          }}
          className="Template-overlay"
        />
      )}
    </motion.div>
  );
};

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;
  const router = useRouter();
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
      {/* {templateTransition && ( */}
      <AnimationWrapper
        animState={animState}
        displayOverlay={displayOverlay}
        name={name}
      >
        {children}
        <div className="test">AnimationWrapper</div>
      </AnimationWrapper>
      {/* )} */}
      {/* {!templateTransition && (
        <motion.div
          className={c("Template", {
            [`Template--${name}`]: name,
          })}
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 1,
          }}
          onAnimationComplete={() => {
            // if (animState === "animExit") {
            console.log("enter");
            if (scroll) {
              scroll.destroy();
              scroll.init();
            }
            // }
          }}
          onAnimationStart={() => {
            if (animState === "animStart") {
              console.log("exit");
              if (scroll) {
                scroll.stop();
              }
            }
          }}
        >
          {children}
          <div className="test">No AnimationWrapper</div>
        </motion.div>
      )} */}
    </>
  );
};

export default Template;
