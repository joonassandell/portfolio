import c from "classnames";
import { transPrimary, transSecondary } from "../../../lib/config";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useTransform,
  useMotionValue,
  animate,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";

export default function OrasHero({
  animationStart = false,
  animationHideStart = false,
  animationState = "initial", // preAnimation, initial
  ...props
}) {
  const router = useRouter();
  const headline = useAnimation();
  const bg = useAnimation();
  const bgGradientValue = useMotionValue(0);
  const bgGradientInput = [0, 100];
  const bgGradient = useTransform(bgGradientValue, bgGradientInput, [
    "linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 1) 100%)",
    "linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 0) 100%)",
  ]);
  const initial = animationState === "initial";
  const preAnimation = animationState === "preAnimation";

  useEffect(() => {
    if (animationStart) {
      (async () => {
        animate(bgGradientValue, 100, transSecondary);
        bg.start({
          // scaleY: 3,
          height: "100vh",
          transition: transSecondary,
        });
        await headline.start({
          y: "-200%",
          transition: transPrimary,
        });
        router.push("/projects/oras");
      })();
    }
  });

  return (
    <motion.section
      exit={
        animationHideStart && {
          opacity: 0,
        }
      }
      id={props.id}
      className={c("Oras-hero", {
        ["-preAnimation"]: preAnimation,
        ["-initial"]: initial,
      })}
    >
      <div className={"Oras-hero-wrap wrap"}>
        <div className="grid">
          <div className={"Oras-hero-figure grid-col grid-col4 -start7"}>
            <figure
              data-scroll
              data-scroll-speed="-1"
              data-scroll-position="top"
              className="Oras-hero-figure-img"
            >
              <img
                onClick={props.onClick}
                src="/images/oras/faucet.png"
                alt="Oras faucet"
                // layout="fill"
                // layout="responsive"
                height={1276}
                width={1096}
              />
            </figure>
            {/* <motion.img 
              animate={animationStart && {
                opacity: 1,
                transition: {...transition, delay: 0.5},
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -24,
              }}
              className={'Oras-hero-drop -drop--3'} 
              src="/images/oras/drop.png" 
            /> */}
          </div>
        </div>
      </div>
      <div className={"Oras-hero-wrap Oras-hero-wrap--bg wrap"}>
        <div className="grid">
          <div className="Oras-hero-figure grid-col grid-col4 -start7">
            <motion.div
              className="Oras-hero-figure-bg"
              animate={bg}
              aria-hidden="true"
              style={
                preAnimation && {
                  background: bgGradient,
                }
              }
            />
          </div>
        </div>
      </div>
      <motion.img
        animate={
          animationStart && {
            opacity: 1,
            transition: {
              delay: 0.2,
              damping: 30,
              type: "spring",
            },
            y: 0,
          }
        }
        initial={
          preAnimation && {
            opacity: 0,
            y: -96,
          }
        }
        className={"Oras-hero-drop -drop--1"}
        src="/images/oras/drop.png"
        aria-hidden="true"
        // layoutId="drop-1"
      />
      <motion.img
        animate={
          animationStart && {
            opacity: 1,
            transition: {
              delay: 0.5,
              damping: 25,
              type: "spring",
            },
            y: 0,
          }
        }
        initial={
          preAnimation && {
            opacity: 0,
            y: -120,
          }
        }
        className={"Oras-hero-drop -drop--2"}
        src="/images/oras/drop.png"
        aria-hidden="true"
        // layoutId="drop-2"
        key="drop-2"
        // exit={
        //   initial && {
        //     opacity: 0,
        //   }
        // }
      />
      <a
        href="/projects/oras"
        data-id={props.id}
        onFocus={props.onFocus}
        onClick={props.onClick}
      >
        <span className="hideVisually">Oras project</span>
      </a>
      <motion.h2 animate={headline} className={"Oras-hero-headline Headline"}>
        <div
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
          // data-scroll-delay="0.1"
        >
          Oras—2016
        </div>
      </motion.h2>
    </motion.section>
  );
}
