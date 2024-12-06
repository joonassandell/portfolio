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
    hasThemeColor: boolean
    hasTouch: boolean
    isIos: boolean
    isSafari: boolean
    isSafariDesktop: boolean
    isSafariIphone: boolean
    isWindows: boolean
  }
  loading: boolean
  loadingEnd: boolean
  lockRootScroll: (enable?: boolean) => void
  lockTemplate: () => void
  root: Document['documentElement']
  setTemplateRef: (value: AppContextProps['templateRef']) => void
  setThemeColor: Dispatch<SetStateAction<AppHeadProps['themeColor']>>
  setTransition: (value: AppContextProps['transition']) => void
  setTransitionInitial: (value: AppContextProps['transitionInitial']) => void
  templateRef: RefObject<HTMLDivElement | null> | null
  transition: boolean | 'template' | 'instant'
  transitionInitial: boolean
}

export interface AppHeadProps {
  themeColor?: `#${string}` | undefined
}
