import { ArrowDown, Cross } from "../../components/Icon";
import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
} from "../../lib/config";
import c from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function ButtonArrow({
  active = false,
  hoverStart = false,
  hoverEnd = false,
  innerRef = null,
  ...props
}) {
  const [arrowInVisible, setArrowInVisible] = useState(false);
  const [crossVisible, setCrossVisible] = useState(false);
  const [activeState, setActive] = useState("start");
  const button = useAnimation();
  const bg = useAnimation();
  const arrow = useAnimation();
  const arrowIn = useAnimation();
  const cross = useAnimation();
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
        await setCrossVisible(true);
        button.set({ backgroundColor: "rgba(255,255,255,0)" });
        arrow.start({
          transition: transPrimaryFast,
          y: 36,
        });
        arrowIn.start({
          transition: transPrimaryFast,
          y: 36,
        });
        bg.start({
          transition: transPrimaryFast,
          y: 0,
        });
        await cross.start({
          transition: transPrimaryFast,
          y: 0,
        });
        setActive("end");
      }

      if (!active && activeState == "end") {
        bg.start({
          transition: transPrimary,
          y: "-77%",
        });
        cross.start({
          transition: { ...transPrimary, delay: 0.2 },
          y: 36,
        });
        button.start({
          backgroundColor: "#ffffff",
          transition: { ...transPrimaryFast, delay: 0.2 },
        });
        await arrow.start({
          transition: transPrimary,
          y: 0,
        });
        setActive("start");
        setArrowInVisible(false);
        setCrossVisible(false);
      }
    })();
  }, [hoverStart, hoverEnd, active]);

  return (
    <motion.div
      animate={button}
      className={c("Button Button--arrow", props.className)}
      ref={innerRef}
    >
      {arrowInVisible && (
        <motion.span
          animate={arrowIn}
          initial={false}
          className="Button-icon Button-icon--in"
        >
          <ArrowDown />
        </motion.span>
      )}
      {crossVisible && (
        <motion.span
          animate={cross}
          initial={{ y: -36 }}
          className="Button-icon Button-icon--cross"
        >
          <Cross />
        </motion.span>
      )}
      <motion.span animate={arrow} initial={false} className="Button-icon">
        <ArrowDown />
      </motion.span>
      <motion.span
        animate={bg}
        initial={{
          y: "77%",
        }}
        className="Button-bg"
      />
    </motion.div>
  );
}
