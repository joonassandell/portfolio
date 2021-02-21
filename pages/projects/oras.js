import { useEffect, useState } from "react";

import { OrasHero } from "../../containers/Oras";
import Title from "../../components/Title";
import c from "classnames";
import { motion } from "framer-motion";
import { transPrimary } from "../../lib/config";

export default function Oras() {
  const [anim, setAnim] = useState(false);
  /**
   * Quick fix to trigger locomotive scroll to work after enter/exit anims
   */
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <>
      <Title title="Oras" />
      <motion.div
        animate={{
          position: "relative",
          transition: transPrimary,
          y: 0,
        }}
        className={c("Template Template--oras", {
          "is-animating": anim,
        })}
        exit={{
          transition: transPrimary,
          position: "fixed",
          y: "-100vh",
        }}
        initial={{
          position: "absolute",
          y: "100vh",
        }}
        onAnimationStart={() => {
          // setAnim(true);
        }}
        onAnimationComplete={() => {
          window.dispatchEvent(new Event("resize"));
        }}
      >
        <div data-scroll-section>
          <OrasHero />
          <div
            data-id="mummu"
            style={{ height: "200vh", background: "white" }}
          />
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: "Oras",
    },
  };
}
