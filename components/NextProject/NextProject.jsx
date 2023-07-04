import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LinkRoll } from '@/components/LinkRoll';
import { useEffect, useRef, useState } from 'react';
import { useMouseHovered, useMeasure } from 'react-use';
import { clamp } from 'lodash-es';
import { mapRange, getSitemap } from '@/lib/utility';
import { TRANS_PRIMARY_FAST } from '@/lib/config';
import Image from 'next/image';

export const NextProject = ({ id }) => {
  const { url, title } = getSitemap(id);
  const href = url;
  const src = `/${id}/joonassandell-${id}-thumbnail.jpg`;
  const ref = useRef(null);
  const [innerRef, { width, height }] = useMeasure();
  const [figureRef, { width: figureWidth, height: figureHeight }] =
    useMeasure();
  const figureWidthHalf = figureWidth / 2;
  const figureHeightHalf = figureHeight / 2;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const r = useMotionValue(-0.5);
  let { elX: mousePosX, elY: mousePosY } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });
  const prevMousePosX = x.current + figureWidthHalf;
  const direction = mousePosX < prevMousePosX ? 'left' : 'right';
  const mouseDistanceX = clamp(Math.abs(prevMousePosX - mousePosX), 0, 100);
  const spring = {
    damping: 120,
    stiffness: 800,
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
    if (mousePosX) x.set(mousePosX - figureWidthHalf);
    if (mousePosY) y.set(mousePosY - figureHeightHalf);
    if (mouseDistanceX && mousePosX && mousePosY) {
      const rotateAmount = mapRange(
        mouseDistanceX,
        0,
        100,
        0,
        direction === 'left' ? 1 : -1,
      );
      r.set(rotateAmount);
    }
  }, [mousePosX, mousePosY, mouseDistanceX]);

  /**
   * Set initial position
   */
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    if (width && height && figureWidth && figureHeight) {
      x.set(width - figureWidthHalf * 1.75);
      y.set(height - figureHeightHalf * 0.8);
      setTimeout(() => setInitial(true), 500);
    }
  }, [height, width, figureWidth, figureHeight]);

  return (
    <section ref={ref} className="NextProject wrap">
      <div ref={innerRef} className="NextProject-inner">
        <LinkRoll className="NextProject-link" href={href}>
          Next project
        </LinkRoll>
        <m.figure
          aria-hidden="true"
          animate={
            initial && {
              opacity: 1,
              transition: TRANS_PRIMARY_FAST,
            }
          }
          className="NextProject-figure"
          initial={{ opacity: 0 }}
          ref={figureRef}
          style={{
            rotate,
            y: moveY,
            x: moveX,
          }}
        >
          <Image
            alt={`Next Project: ${title}`}
            draggable="false"
            height={1920}
            priority
            sizes="50vw"
            src={src}
            width={1440}
          />
        </m.figure>
      </div>
    </section>
  );
};
