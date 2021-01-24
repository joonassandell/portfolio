import { ArrowDown, Cross } from "../../components/Icon";
import { transPrimaryFast, transPrimaryFastest } from "../../lib/config";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function ButtonArrow({
  active = false,
  hoverStart = false,
  hoverEnd = false,
}) {
  const [hoverVisible, setHoverVisible] = useState(false);
  const [crossVisible, setCrossVisible] = useState(false);
  const [activeState, setActive] = useState("start");
  const bg = useAnimation();
  const arrow = useAnimation();
  const arrowIn = useAnimation();
  const cross = useAnimation();
  const enableHover = !active && activeState === "start";

  useEffect(() => {
    (async () => {
      if (hoverStart && enableHover) {
        setHoverVisible(true);
        arrowIn.set({
          color: "#ffffff",
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

      if (hoverEnd && enableHover && hoverVisible) {
        arrow.set({ y: -36 });
        console.log("end");
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
        setHoverVisible(false);
      }

      if (active && activeState == "start") {
        setCrossVisible(true);
        bg.start({
          transition: transPrimaryFast,
          y: "-77%",
        });
        arrowIn.start({
          transition: transPrimaryFast,
          y: 36,
        });
        await cross.start({
          transition: transPrimaryFast,
          y: 0,
        });
        setHoverVisible(false);
        setActive("end");
      }

      if (!active && activeState == "end") {
        setHoverVisible(true);
        arrowIn.set({
          color: "#ffffff",
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
        arrow.start({
          transition: transPrimaryFastest,
          y: 36,
        });
        await cross.start({
          transition: transPrimaryFast,
          y: 36,
        });
        setActive("start");
        setCrossVisible(false);
      }
    })();
  }, [hoverVisible, hoverStart, hoverEnd, active]);

  return (
    <motion.div className="Button Button--arrow">
      {hoverVisible && (
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
