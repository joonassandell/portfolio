import {
  easing,
  transPrimary,
  transPrimaryFast,
  transSecondary,
  transSecondaryFast,
} from "../../lib/config";
import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";

import Title from "../../components/Title";
import c from "classnames";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Template = ({ children, name, title }) => {
  const { scroll } = useLocomotiveScroll();
  const isPresent = useIsPresent();
  const [animState, setAnimState] = useState(null);

  useEffect(() => {
    if (!isPresent) {
      console.log(`${name} has been removed.`);
      setAnimState("animExit");
    }

    if (isPresent) {
      console.log(`${name} has been added.`);
      setAnimState("animStart");
    }
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        animate={{
          y: 0,
        }}
        className={c("Template", {
          [`Template--${name}`]: name,
        })}
        exit={{
          position: "fixed",
          y: "-50vh",
        }}
        initial={{
          y: "100vh",
        }}
        transition={transPrimary}
        onAnimationStart={() => {
          if (animState === "animStart") {
            console.log("Animation start");
            if (scroll) scroll.destroy();
          }
        }}
        onAnimationComplete={() => {
          if (animState === "animExit") {
            console.log("Animation complete");
            if (scroll) scroll.init();
          }
        }}
      >
        {children}
        {animState === "animExit" && (
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
