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
  const src = `/${id}/joonassandell-${id}-thumbnail.jpg`;
  const ref = useRef(null);
  const [innerRef, { width, height }] = useMeasure();
  const [figureRef, { width: figureWidth, height: figureHeight }] =
    useMeasure();
  const figureWidthHalf = figureWidth / 2;
  const figureHeightHalf = figureHeight / 2;
  let { elX: mousePosX, elY: mousePosY } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });
  const spring = { damping: 120, stiffness: 800 };

  /**
   * Move: Horizontal
   */
  const x = useMotionValue(0);
  const moveX = useSpring(x, spring);

  /**
   * Move: Vertical
   */
  const y = useMotionValue(0);
  const moveY = useSpring(y, spring);

  /**
   * Rotate
   */
  const r = useMotionValue(-0.5);
  const prevMousePosX = x.current + figureWidthHalf;
  const direction = mousePosX < prevMousePosX ? 'left' : 'right';
  const mouseDistanceX = clamp(Math.abs(prevMousePosX - mousePosX), 0, 100);
  const rotateTrans = useTransform(r, [-1, 0, 1], [-30, 0, 30]);
  const rotate = useSpring(rotateTrans, spring);

  /**
   * Transform figure
   */
  useEffect(() => {
    if (mouseDistanceX && mousePosX && mousePosY) {
      x.set(mousePosX - figureWidthHalf);
      y.set(mousePosY - figureHeightHalf);
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
   * Set initial figure position
   */
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    if (width && height && figureWidth && figureHeight) {
      x.set(width - figureWidthHalf);
      y.set(height - figureHeightHalf * 0.8);
      setTimeout(() => setInitial(true), 500);
    }
  }, [height, width, figureWidth, figureHeight]);

  return (
    <section ref={ref} className="NextProject">
      <div ref={innerRef} className="NextProject-inner wrap">
        <LinkRoll className="NextProject-link" href={url}>
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
