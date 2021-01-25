import Title from "../../../components/Title";
import OrasHero from "../Oras/Hero.js";
import { useState, useContext } from "react";
import { SmoothScrollContext } from "../../../lib/SmoothScroll";
import { easing, scrollToDuration } from "../../../lib/config";
import { motion } from "framer-motion";

export default function Home() {
  const { scroll } = useContext(SmoothScrollContext);
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAnimationHide(true);
    const id = e.currentTarget.closest("[id]").id;
    setCurrentHero(id);
    scroll &&
      scroll.scrollTo(`#${id}`, {
        duration: scrollToDuration,
        easing: easing,
        callback: () => {
          setAnimation(true);
        },
      });
  };

  return (
    <motion.main exit={{ opacity: 1 }} className="Template--home">
      {/* <motion.div exit={{ opacity: 1 }}>
        <OrasHero
          animationStart={currentHero === "oras" && animation}
          animationState="preAnimation"
          animationHide={currentHero != "oras" && animationHide}
          id="oras"
          onClick={handleClick}
          // onFocus={handleClick}
        />
      </motion.div> */}
      <div
        data-id="mummu"
        onClick={handleClick}
        style={{ height: "200vh", background: "white" }}
      ></div>
    </motion.main>
  );
}
