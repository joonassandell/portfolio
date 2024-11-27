import { type Dispatch, type RefObject, type SetStateAction } from 'react'
import { type HeaderProps } from '@/components/Header'
import type { AppProps as NextAppProps } from 'next/app'

export interface AppProps extends Omit<NextAppProps, 'router'> {
  pageProps: {
    navTitle: HeaderProps['navTitle']
  }
}

export interface AppContextProps {
  detect: {
    [key: string]: boolean
  }
  html: Document['documentElement']
  loading: boolean
  loadingEnd: boolean
  lockScroll: (enable?: boolean) => void
  lockTemplate: () => void
  setTemplateRef: (value: AppContextProps['templateRef']) => void
  setThemeColor: Dispatch<SetStateAction<AppHeadProps['themeColor']>>
  setTransition: (value: AppContextProps['transition']) => void
  setTransitionInitial: (value: AppContextProps['transitionInitial']) => void
  templateRef: RefObject<HTMLDivElement> | null
  transition: boolean | 'template' | 'instant'
  transitionInitial: boolean
}

export interface AppHeadProps {
  themeColor?: `#${string}` | undefined
}
