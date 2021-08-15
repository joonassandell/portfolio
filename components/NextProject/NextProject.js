import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import LinkRoll from '@/components/LinkRoll';
import { useEffect, useState, useRef } from 'react';
import useMeasureDirty from 'react-use/lib/useMeasureDirty';
import { useMouseHovered, useMeasure } from 'react-use';
import { clamp } from 'lodash';
import { mapRange, getSitemap } from '@/lib/utility';
import Image from 'next/image';

// let prevMousePosX = 0;

const NextProject = ({ id }) => {
  const sitemap = getSitemap(id);
  const href = sitemap.url;
  const src = `/assets/${id}/joonassandell-${id}-thumbnail.jpg`;
  const ref = useRef(null);
  const { width, height } = useMeasureDirty(ref);
  const [figureRef, { width: figureWidth, height: figureHeight }] =
    useMeasure();
  const figureWidthHalf = figureWidth / 2;
  const figureHeightHalf = figureHeight / 2;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const r = useMotionValue(0);
  let { elX: mousePosX, elY: mousePosY } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });
  const [mouseLeave, setMouseLeave] = useState(false);
  const prevMousePosX = x.current + figureWidthHalf;
  const direction = mousePosX < prevMousePosX ? 'left' : 'right';
  const mouseDistanceX = clamp(Math.abs(prevMousePosX - mousePosX), 0, 100);
  // let direction = mousePosX < prevMousePosX ? 'left' : 'right';
  // const mouseDistanceX = clamp(Math.abs(prevMousePosX - mousePosX), 0, 100);

  const spring = {
    damping: 120,
    stiffness: 800, // 1200,
  };
  const moveXtrans = useTransform(
    x,
    [-figureWidthHalf, width],
    [-figureWidthHalf, width],
  );
  const moveX = useSpring(moveXtrans, spring);
  const moveYtrans = useTransform(
    y,
    [-figureHeightHalf, height],
    [-figureHeightHalf, height],
  );
  const moveY = useSpring(moveYtrans, spring);
  const rotateTrans = useTransform(r, [-1, 0, 1], [-30, 0, 30]);
  const rotate = useSpring(rotateTrans, spring);

  useEffect(() => {
    if (mousePosX) {
      x.set(mousePosX - figureWidthHalf);
    }
    if (mousePosY) {
      y.set(mousePosY - figureHeightHalf);
    }

    const rotateAmount = mapRange(
      mouseDistanceX,
      0,
      100,
      0,
      direction === 'left' ? 1 : -1,
    );
    r.set(rotateAmount);

    // prevMousePosX = mousePosX;
  }, [mousePosX, mousePosY]);

  /**
   * Set initial and mouse out state. Initials won't animate because the
   * rotate/x/y.current conditions in style attrs below are zero initially
   */
  useEffect(() => {
    if ((width && !mousePosX) || mouseLeave) {
      r.set(-0.5);
      x.set(width - figureWidthHalf * 1.75);
      y.set(height - figureHeightHalf);
    }
  }, [mousePosX, width, mouseLeave]);

  return (
    <div className="NextProject">
      <div
        ref={ref}
        className="NextProject-inner"
        onMouseEnter={() => setMouseLeave(false)}
        onMouseLeave={() => setMouseLeave(true)}
      >
        <LinkRoll className="NextProject-link" href={href}>
          Next project
        </LinkRoll>
        <motion.figure
          aria-hidden="true"
          className="NextProject-figure"
          ref={figureRef}
          style={{
            rotate: rotate.current ? rotate : rotateTrans,
            y: y.current ? moveY : moveYtrans,
            x: x.current ? moveX : moveXtrans,
          }}
        >
          <Image
            src={src}
            height={1920}
            width={1440}
            draggable="false"
            sizes="50vw"
            priority
            layout="responsive"
          />
        </motion.figure>
      </div>
    </div>
  );
};

export default NextProject;
