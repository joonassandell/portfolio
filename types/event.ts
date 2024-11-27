import { type MouseEvent } from 'react'

export type LinkEvent = MouseEvent<HTMLAnchorElement> & {
  target: HTMLLinkElement
}

export type ButtonEvent = MouseEvent<HTMLButtonElement> & {
  target: HTMLButtonElement
}
