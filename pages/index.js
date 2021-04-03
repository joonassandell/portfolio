import { easing, mq, scrollToDuration, transPrimary } from "../lib/config";
import { useEffect, useState } from "react";

import Link from "../components/Link";
import { OrasHero } from "../containers/Oras";
import { Template } from "../containers/Template";
import c from "classnames";
import { motion } from "framer-motion";
import { scrollTo } from "../lib/utility";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useMedia } from "react-use";

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState(false);
  const l = useMedia(mq.l);

  const handleClick = (e) => {
    e.preventDefault();
    setAnimationHide(true);
    const id = e.currentTarget.closest("[id]").id;
    setCurrentHero(id);

    if (l) {
      scroll &&
        scroll.scrollTo(`#${id}`, {
          duration: scrollToDuration,
          easing,
          callback: () => {
            setAnimation(true);
          },
        });
    } else {
      scrollTo(`#${id}`);
      setAnimation(true);
    }
  };

  return (
    <>
      <Template name="home">
        <div data-scroll-section>
          <p className="Template-introduction">
            I'm a designer & developer of things that usually appear on screens.
            Read more <Link href="/projects/oras">about me</Link> or just keep
            scrolling for selected works.
          </p>
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
          style={{ height: "100vh" }}
          data-scroll-section
        />
      </Template>
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
