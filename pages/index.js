import { easing, scrollToDuration, transPrimary } from "../lib/config";
import { useEffect, useState } from "react";

import { OrasHero } from "../containers/Oras";
import c from "classnames";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState(false);

  /**
   * Quick fix to trigger locomotive scroll to work after enter/exit anims
   */
  // useEffect(() => {
  //   window.dispatchEvent(new Event("resize"));
  // }, []);

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
    <>
      <motion.div
        animate={{
          position: "relative",
          transition: transPrimary,
          y: 0,
        }}
        className={c("Template Template--oras", {
          // "is-animating": anim,
        })}
        exit={{
          transition: transPrimary,
          position: "fixed",
          y: "-100vh",
        }}
        initial={{
          position: "fixed",
          y: "100vh",
        }}
        onAnimationStart={() => {
          // console.log("index.js");
          // setAnim(true);
        }}
        onAnimationComplete={() => {
          window.dispatchEvent(new Event("resize"));
        }}
      >
        <div data-scroll-section>
          <OrasHero
            animationStart={currentHero === "oras" && animation}
            animationState="preAnimation"
            animationHide={currentHero != "oras" && animationHide}
            id="oras"
            onClick={handleClick}
            // onFocus={handleClick}
          />
        </div>
        <div
          data-id="mummu"
          onClick={handleClick}
          style={{ height: "200vh", background: "white" }}
          data-scroll-section
        />
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: "Selected works",
    },
  };
}
