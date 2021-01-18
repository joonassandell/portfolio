import OrasHero from "./Hero.js";
import { motion } from "framer-motion";

export default function Oras() {
  return (
    <motion.main exit={{ opacity: 1 }} className="Template Template--oras">
      <OrasHero />
      <div
        data-id="mummu"
        style={{ height: "200vh", background: "white" }}
      ></div>
    </motion.main>
  );
}
