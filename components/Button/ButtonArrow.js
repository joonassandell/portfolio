import { ArrowDown, ArrowUp } from "../Icon";
import { motion, useAnimation } from "framer-motion";
import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
} from "../../lib/config";
import { useEffect, useState } from "react";

import c from "classnames";

const ButtonArrow = ({
  active = false,
  hoverStart = false,
  hoverEnd = false,
  innerRef = null,
  ...props
}) => {
  const [arrowInVisible, setArrowInVisible] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);
  const [activeState, setActive] = useState("start");
  const button = useAnimation();
  const bg = useAnimation();
  const arrow = useAnimation();
  const arrowIn = useAnimation();
  const close = useAnimation();
  const enableHover = !active && activeState === "start";

  useEffect(() => {
    (async () => {
      if (hoverStart && enableHover) {
        await setArrowInVisible(true);
        arrowIn.set({
          scaleY: 4,
          y: -96,
        });
        bg.set({ y: "77%" });
        bg.start({
          transition: transPrimaryFast,
          y: 0,
        });
        arrowIn.start({
          scaleY: 1,
          transition: transPrimaryFast,
          y: 0,
        });
        await arrow.start({
          transition: transPrimaryFastest,
          y: 36,
        });
      }

      if (hoverEnd && enableHover) {
        arrowInVisible ? arrow.set({ y: -36 }) : "";
        bg.start({
          transition: transPrimaryFast,
          y: "-77%",
        });
        arrow.start({
          transition: transPrimaryFast,
          y: 0,
        });
        await arrowIn.start({
          transition: transPrimaryFast,
          y: 36,
        });
        setArrowInVisible(false);
      }

      if (active && activeState == "start") {
        await setCloseVisible(true);
        close.set({
          scaleY: 4,
          y: -96,
        });
        arrow.start({
          transition: transPrimaryFast,
          scaleY: 4,
          y: 96,
        });
        arrowIn.start({
          transition: transPrimaryFast,
          y: 36,
        });
        bg.start({
          transition: transPrimaryFast,
          y: 0,
        });
        await close.start({
          transition: transPrimaryFast,
          scaleY: 1,
          y: 0,
        });
        setActive("end");
      }

      if (!active && activeState == "end") {
        bg.start({
          transition: { ...transPrimary, delay: 0.6 },
          y: "-77%",
        });
        await close.start({
          transition: { ...transPrimaryFast, delay: 0.5 },
          scaleY: 4,
          y: -96,
        });
        arrow.start({
          transition: transPrimaryFast,
          scaleY: 1,
          y: 0,
        });
        setActive("start");
        setArrowInVisible(false);
        setCloseVisible(false);
      }
    })();
  }, [hoverStart, hoverEnd, active]);

  return (
    <motion.div
      animate={button}
      key={props.key}
      className={c("Button Button--arrow", props.className)}
      ref={innerRef}
    >
      {arrowInVisible && (
        <motion.span
          animate={arrowIn}
          // initial={false}
          className="Button-icon Button-icon--in"
        >
          <ArrowDown />
        </motion.span>
      )}
      {closeVisible && (
        <motion.span
          animate={close}
          // initial={false}
          className="Button-icon Button-icon--close"
        >
          <ArrowUp />
        </motion.span>
      )}
      <motion.span
        animate={arrow}
        // initial={false}
        className="Button-icon"
      >
        <ArrowDown />
      </motion.span>
      <motion.span
        animate={bg}
        // initial={{
        //   y: "77%",
        // }}
        className="Button-bg"
      />
    </motion.div>
  );
};

export default ButtonArrow;
