import { clamp } from 'lodash-es';
import { getSitemap, mapRange } from '@/lib/utils';
import { LinkRoll } from '@/components/LinkRoll';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MQ, TRANS_PRIMARY_FAST } from '@/lib/config';
import { type NextProjectProps } from './';
import { useApp } from '@/components/App';
import { useEffect, useRef, useState } from 'react';
import { useMeasure, useMouseHovered } from 'react-use';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const NextProject = ({ id }: NextProjectProps) => {
  const { setTransition } = useApp();
  const { push } = useRouter();
  const { title, url } = getSitemap(id);
  const src = `/${id}/joonassandell-${id}-thumbnail.jpg`;
  const ref = useRef<HTMLElement>(null);
  const [innerRef, { height, width }] = useMeasure<HTMLDivElement>();
  const [figureRef, { height: figureHeight, width: figureWidth }] =
    useMeasure<HTMLDivElement>();
  const figureWidthHalf = figureWidth / 2;
  const figureHeightHalf = figureHeight / 2;
  const { elX: mousePosX, elY: mousePosY } = useMouseHovered(ref, {
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
  const prevMousePosX = x.get() + figureWidthHalf;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width, figureWidth, figureHeight]);

  return (
    <section className="NextProject" ref={ref}>
      <div className="NextProject-inner wrap" ref={innerRef}>
        <LinkRoll className="NextProject-link" href={url}>
          Next project
        </LinkRoll>
        <m.figure
          animate={
            initial && {
              opacity: 1,
              transition: TRANS_PRIMARY_FAST,
            }
          }
          aria-hidden="true"
          className="NextProject-figure"
          initial={{ opacity: 0 }}
          onClick={() => {
            setTransition('template');
            push(url, undefined, { scroll: false });
          }}
          ref={figureRef}
          style={{
            rotate,
            x: moveX,
            y: moveY,
          }}
        >
          <Image
            alt={`Next Project: ${title}`}
            draggable="false"
            height={1920}
            priority
            sizes={`${MQ.l} 33vw, 50vw`}
            src={src}
            width={1440}
          />
        </m.figure>
      </div>
    </section>
  );
};
