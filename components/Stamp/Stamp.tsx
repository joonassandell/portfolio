import { debounce } from 'es-toolkit'
import { getPointerPosition } from '@/lib/utils'
import { m, useMotionValue, useSpring, useTransform } from 'motion/react'
import {
  OVERLAY_VARIANTS,
  STAMP_TRANSITION,
  STAMP_VARIANTS,
  type StampProps,
  SVG_VARIANTS,
} from './'
import { TRANS_MOVE } from '@/lib/config'
import { useEffect, useRef } from 'react'
import { useInView } from '@/lib/useInView'
import c from 'clsx'
import StampSvg from './stamp.svg'
import useMeasure from 'react-use-measure'

export const Stamp = ({
  addVarsToParent = false,
  className,
  href,
  onClick,
  overlay = true,
  parentRef,
  transitionStart,
  ...props
}: StampProps) => {
  const [ref, { height, width }] = useMeasure()
  const innerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(innerRef, 0, false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const moveX = useSpring(
    useTransform(x, [0, -32, width / 2, width], [0, -32, 0, 32]),
    TRANS_MOVE.slow,
  )
  const moveY = useSpring(
    useTransform(y, [0, -32, height / 2, height], [0, -32, 0, 32]),
    TRANS_MOVE.slow,
  )

  const setParentAttributes = (moveX = 0, moveY = 0) => {
    if (!parentRef.current || !innerRef.current) return

    const {
      offsetHeight: height,
      offsetLeft: x,
      offsetTop: y,
      offsetWidth: width,
    } = innerRef.current
    const posX = `${x + width / 2 + moveX}px`
    const posY = `${y + height / 2 + moveY}px`

    parentRef.current.setAttribute(
      'style',
      `--Stamp-center-x: ${posX}; --Stamp-center-y: ${posY};`,
    )
  }

  /**
   * Track pointer position relative to the parent without re-rendering
   */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!parentRef.current) return
      const { x, y } = getPointerPosition(e, parentRef.current)
      mouseX.set(x)
      mouseY.set(y)
    }
    document.addEventListener('pointermove', onMove)
    return () => document.removeEventListener('pointermove', onMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!inView || transitionStart) return
    x.set(mouseX.get())
    y.set(mouseY.get())
    const unsubX = mouseX.on('change', v => x.set(v))
    const unsubY = mouseY.on('change', v => y.set(v))
    return () => {
      unsubX()
      unsubY()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, transitionStart])

  useEffect(() => {
    if (!addVarsToParent) return
    if (!inView || transitionStart) return
    const update = () => setParentAttributes(moveX.get(), moveY.get())
    update()
    const unsubX = moveX.on('change', update)
    const unsubY = moveY.on('change', update)
    return () => {
      unsubX()
      unsubY()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, transitionStart])

  useEffect(() => {
    if (!addVarsToParent) return
    const resize = debounce(
      () => setParentAttributes(moveX.get(), moveY.get()),
      100,
    )
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  useEffect(() => {
    if (!addVarsToParent) return
    setParentAttributes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={c('Stamp', className)} ref={ref}>
      <m.div
        className="Stamp-inner"
        ref={innerRef}
        style={{
          x: moveX,
          y: moveY,
        }}
      >
        <m.a
          aria-label={props['aria-label']}
          className="Stamp-stamp"
          href={href}
          onClick={onClick}
          tabIndex={-1}
          transition={STAMP_TRANSITION}
          variants={STAMP_VARIANTS}
          whileHover="hover"
          whileTap="tap"
        >
          <m.div
            animate={inView ? 'animate' : ''}
            className="Stamp-svg"
            variants={SVG_VARIANTS}
          >
            <StampSvg />
          </m.div>
        </m.a>
        {transitionStart && overlay && (
          <m.div className="Stamp-overlay" variants={OVERLAY_VARIANTS} />
        )}
      </m.div>
    </div>
  )
}
