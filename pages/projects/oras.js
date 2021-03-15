import { useEffect, useState } from "react";

import { OrasHero } from "../../containers/Oras";
import { Template } from "../../containers/Template";
import c from "classnames";
import { motion } from "framer-motion";
import { transPrimary } from "../../lib/config";

export default function Oras() {
  return (
    <Template name="oras" title="Oras">
      <div data-scroll-section>
        <OrasHero />
        <div data-id="mummu" style={{ height: "200vh", background: "white" }} />
      </div>
    </Template>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: "Oras",
    },
  };
}
