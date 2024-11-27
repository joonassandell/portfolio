import { type ComponentPropsWithRef, type PropsWithChildren } from 'react'
import { type FooterProps } from '@/components/Footer'
import { type SitemapWithoutArrayKeys } from '@/lib/sitemap'

export interface TemplateProps extends PropsWithChildren {
  className?: string
  footerProps?: FooterProps
  id: SitemapWithoutArrayKeys | '404'
  variant?: 'unstyled' | 'default'
}

export interface TemplateAreaProps extends ComponentPropsWithRef<'div'> {
  grid?: boolean
  gridGap?: 'm' | 'l' | false
  gridRowGap?: 'm' | 'l' | false
  pb?: '2xl' | '2xl-5xl' | false
  pt?:
    | 'base'
    | 'm'
    | 'l'
    | 'l-2xl'
    | '2xl'
    | '2xl-5xl'
    | 'grid-gap-row-l'
    | false
  wrap?: boolean
}
