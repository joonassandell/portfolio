import { APP_URL } from '@/lib/config'
import { type Entries, type Image } from '@/types'

export const getImage = (image: Image['src'], images?: Image[]) =>
  images?.find(img => {
    const splitSrc = img.src.split('.')
    const fileName = splitSrc[0].split('/').pop()
    return image === fileName
  }) as Image

export const getCSSVarValue = (prop: string) => {
  if (prop[0] != '-') prop = `--${prop}`

  if (!isServer) {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop.trim()}`)
    return value.trim()
  }
}

export const isServer = typeof window === 'undefined'

export const isBrowser = !isServer

export const isBoolean = (value: any): value is boolean =>
  typeof value === 'boolean'

export const isString = (value: any): value is string =>
  typeof value === 'string'

export const isEmptyString = (value: string) => value.trim() === ''

export const getDistMetric = (x: number, y: number, x2: number, y2: number) => {
  const xDiff = x - x2
  const yDiff = y - y2
  return xDiff * xDiff + yDiff * yDiff
}

export const getClosestEdge = (x: number, y: number, w: number, h: number) => {
  const topEdgeDist = getDistMetric(x, y, w / 2, 0)
  const bottomEdgeDist = getDistMetric(x, y, w / 2, h)
  const min = Math.min(topEdgeDist, bottomEdgeDist)
  return min === topEdgeDist ? 'top' : 'bottom'
}

/**
 * Map number x from range [a, b] to [c, d]
 */
export const mapRange = (
  x: number,
  a: number,
  b: number,
  c: number,
  d: number,
) => ((x - a) * (d - c)) / (b - a) + c

export const objectEntries = <T extends object>(object: T): Entries<T> => {
  return Object.entries(object) as Entries<T>
}

export const formatDate = (inputDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }

  return new Intl.DateTimeFormat('en-US', options).format(new Date(inputDate))
}

export const formatDateYear = (inputDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
    year: 'numeric',
  }

  return new Intl.DateTimeFormat('en-US', options).format(new Date(inputDate))
}

export const getMilliSeconds = (number: number) => number * 1000

export const stripUrl = (url: string) => {
  const pattern = /^(https?:\/\/)?(www\.)?/
  return url.replace(pattern, '')
}

export const hasScrollbar = (el: HTMLElement | null) => {
  if (!el) return false
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth
}

export const scrollbarWidth = (() => {
  if (!isBrowser) return
  const scrollDiv = document.createElement('div')
  scrollDiv.style.height = '100px'
  scrollDiv.style.overflow = 'scroll'
  scrollDiv.style.position = 'absolute'
  scrollDiv.style.top = '-999px'
  scrollDiv.style.width = '100px'
  document.documentElement.appendChild(scrollDiv)
  const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.documentElement.removeChild(scrollDiv)
  return scrollBarWidth
})()

export const resetFocusToBody = () => {
  document.body.tabIndex = -1
  document.body.focus()
  document.body.removeAttribute('tabindex')
}

export const scrollIntoView = (
  url: string | URL,
  options?: ScrollIntoViewOptions,
) => {
  const { hash } = new URL(url, APP_URL)

  if (hash) {
    const el = document.querySelector(hash)
    el?.scrollIntoView(options)
  }
}
