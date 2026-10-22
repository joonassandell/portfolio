import { useEffect, useRef } from 'react'

/**
 * Pulls each item up under the previous item in the same column, so a grid
 * with uneven item heights lays out like a masonry. The layout is measured
 * again whenever an item changes size (image load, font load, resize), since
 * item heights are usually not final on mount.
 */
export const useMasonry = () => {
  const masonryContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = masonryContainer.current
    if (!container) return

    const layout = () => {
      const items = Array.from(container.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement,
      )
      const gap = parseInt(getComputedStyle(container).rowGap) || 0

      // Reset first so every measurement is made from the plain grid layout
      items.forEach(el => (el.style.marginTop = ''))

      items.forEach((el, i) => {
        const { left, top } = el.getBoundingClientRect()

        for (let j = i - 1; j >= 0; j--) {
          const prev = items[j].getBoundingClientRect()
          if (prev.left === left) {
            el.style.marginTop = `${-(top - prev.bottom - gap)}px`
            break
          }
        }
      })
    }

    let frame = 0
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(layout)
    })

    Array.from(container.children).forEach(el => observer.observe(el))

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return masonryContainer
}
