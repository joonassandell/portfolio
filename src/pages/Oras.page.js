import Title from "../../components/Title";
import OrasHero from "../../containers/Template/Oras/Hero.js";
import { motion } from "framer-motion";

export default function Oras() {
  return (
    <>
      <Title title="Oras" />
      <motion.section exit={{ opacity: 1 }}>
        <OrasHero />
        <div
          data-id="mummu"
          style={{ height: "200vh", background: "blue" }}
        ></div>
      </motion.section>
    </>
  );
}
