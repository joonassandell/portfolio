import { type AppHeadProps } from '@/components/App'
import {
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
} from 'react'
import { type SitemapWithoutArrayKeys } from '@/lib/sitemap'
import { type Variants } from 'motion/react'

export interface HeroProps {
  children?:
    | ((passedProps: {
        noTransition: boolean
        templateTransition: boolean
        transitionInitial: boolean
        transitionPre: boolean
        transitionStartOrDefault: boolean
      }) => ReactNode)
    | ReactNode
  className?: string
  heading?: string
  headingVariants?: Readonly<Variants>
  href?: URL['href']
  id?: SitemapWithoutArrayKeys
  innerRef?: RefObject<HTMLDivElement | null>
  onClick?: MouseEventHandler<HTMLElement>
  stampAddVarsToParent?: boolean
  stampOverlay?: boolean
  themeColor?: AppHeadProps['themeColor']
  transition?: 'pre'
  transitionStart?: boolean
}

export interface HeroContentProps extends PropsWithChildren {
  className?: string
  heading: HeroProps['heading']
  href: URL['href']
  onClick?: MouseEventHandler<HTMLElement>
  role: string[]
  transitionPre: boolean
}
