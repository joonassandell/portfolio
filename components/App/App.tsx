import { AnimatePresence, domMax, LazyMotion } from 'motion/react'
import {
  type AppContextProps,
  AppHead,
  type AppHeadProps,
  type AppProps,
} from './'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  DISABLE_LOADING,
  EASE_CSS,
  PRODUCTION,
  SLOW_NETWORK_DELAY,
} from '@/lib/config'
import { Header } from '@/components/Header'
import {
  isBrowser,
  resetFocusToBody,
  scrollbarWidth,
  scrollIntoView,
} from '@/lib/utils'
import { ReactLenis, useLenis } from 'lenis/react'
import { SkipNav } from '@/components/SkipNav'
import { Splash } from '@/components/Splash'
import { urlState } from '@/lib/useUrlState'
import { useRouter } from 'next/router'
import { useScrollTo } from '@/lib/useScrollTo'
import NProgress from 'nprogress'

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const App = ({
  Component,
  pageProps: { navTitle, ...pageProps },
}: AppProps) => {
  const [appState, setAppState] = useState<
    Omit<
      AppContextProps,
      | 'setLoadingEnd'
      | 'setTransition'
      | 'setTransitionInitial'
      | 'setThemeColor'
      | 'setTemplateRef'
      | 'lockTemplate'
      | 'lockRootScroll'
    >
  >({
    detect: {
      hasThemeColor: false,
      hasTouch: false,
      isIos: false,
      isSafari: false,
      isSafariDesktop: false,
      isSafariIphone: false,
      isWindows: false,
    },
    loading: DISABLE_LOADING ? false : true,
    loadingEnd: DISABLE_LOADING ? true : false,
    root: (isBrowser && document.documentElement) as AppContextProps['root'],
    templateRef: null,
    transition: false,
    transitionComplete: false,
    transitionInitial: false,
  })
  const { loading, loadingEnd, root, templateRef, transition } = appState
  const { asPath, beforePopState, events, pathname, push } = useRouter()
  const lenis = useLenis()

  /* =======================================
   * App state functions
   * ======================================= */

  const setTransition = (value: AppContextProps['transition']) => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }))
  }

  const setTransitionInitial = (
    value: AppContextProps['transitionInitial'],
  ) => {
    setAppState(prevState => ({
      ...prevState,
      transitionInitial: value,
    }))
  }

  const setLoadingEnd = (value: AppContextProps['loadingEnd']) => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }))
  }

  const setTemplateRef = (value: AppContextProps['templateRef']) => {
    setAppState(prevState => ({
      ...prevState,
      templateRef: value,
    }))
  }

  const [transitionComplete, setTransitionComplete] =
    useState<AppContextProps['transitionComplete']>(false)

  const [themeColor, setThemeColor] = useState<AppHeadProps['themeColor']>()

  const lockRootScroll = useCallback(
    (enable = false, { handleLenis = true } = {}) => {
      if (enable) {
        if (handleLenis) lenis?.stop()
        root.classList.add('is-lock')
        root.style.setProperty(
          '--root-scrollbar-width-lock',
          `${scrollbarWidth}px`,
        )
      } else {
        if (handleLenis) lenis?.start()
        root.classList.remove('is-lock')
        root.style.removeProperty('--root-scrollbar-width-lock')
      }
    },
    [lenis, root],
  )

  const lockTemplate = useCallback(() => {
    if (!templateRef?.current) return
    templateRef.current.style.inset = `-${window.scrollY}px 0 0 0`
    templateRef.current.style.position = 'fixed'
  }, [templateRef])

  /* =======================================
   * Setup
   * ======================================= */

  useEffect(() => {
    if (PRODUCTION) {
      console.info('Made by me with Next.js, TypeScript, Motion and tears. 🥲')
    }

    ;(async () => {
      const {
        hasThemeColor,
        hasTouch,
        isIos,
        isSafari,
        isSafariDesktop,
        isSafariIphone,
        isWindows,
      } = await import('@/lib/detect')
      if (isWindows) root.classList.add('is-windows')
      if (hasThemeColor) root.classList.add('has-themeColor')
      if (isIos) root.classList.add('is-ios')
      if (isSafari) root.classList.add('is-safari')
      if (isSafariIphone) root.classList.add('is-safari:iphone')
      if (isSafariDesktop) root.classList.add('is-safari:desktop')

      setAppState(prevState => ({
        ...prevState,
        detect: {
          hasThemeColor,
          hasTouch,
          isIos,
          isSafari,
          isSafariDesktop,
          isSafariIphone,
          isWindows,
        } satisfies AppContextProps['detect'],
      }))
    })()

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }))

    // Handle manually because of template transitions
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
  }, [root])

  /**
   * Handle loading. Notes about the root scroll handling on load:
   *
   * - During load, scrolling is disabled with pre applied `:root.is-loading`
   *   class and lenis is enabled but with disabled wheel events
   * - During load, if there's `#hash` in the url, browser will natively scroll
   *   to its target but scrolling is still disabled
   * - After loading ends, obviously scrolling is enabled and lenis' wheel
   *   events are enabled in <ReactLenis />
   * - Although the `lockRootScroll` adds the `:root.is-lock` class, it has no
   *   specific effect during load
   */
  useEffect(() => {
    if (loadingEnd) {
      lockRootScroll(false, { handleLenis: false })
      root.classList.remove('is-loading')
    } else {
      lockRootScroll(true, { handleLenis: false })
    }
  }, [loadingEnd, lockRootScroll, root])

  /**
   * Fix scrolling to hashlinks correctly on load. Note that the browser first
   * scrolls natively and this scrolls again slightly. Not really sure what
   * causes the altering scroll gaps on load, probably related to
   * `scroll-behavior: smooth` and some loading of the app.
   */
  useEffect(() => {
    const {
      url: { hash },
    } = urlState(asPath)
    if (hash) {
      setTimeout(() => scrollIntoView(hash, { behavior: 'instant' }), 150)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Handle page transition logic
   */
  useEffect(() => {
    if (transition) root.classList.add('is-transition')

    if (transition === 'instant' || transition === 'template') {
      lockTemplate()
    }

    // Set initial transitions ready for animations (e.g. for Hero)
    if (transition === 'template') setTransitionInitial(true)

    if (!transition) root.classList.remove('is-transition')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transition, root])

  /**
   * Add loader with nprogress for slow networks
   */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    NProgress.configure({
      easing: EASE_CSS,
      showSpinner: false,
    })

    const changeStart = () => {
      timeout = setTimeout(() => NProgress.start(), SLOW_NETWORK_DELAY)
    }

    const changeComplete = () => {
      clearTimeout(timeout)
      if (NProgress.status) NProgress.done()
    }

    events.on('routeChangeStart', changeStart)
    events.on('routeChangeError', changeComplete)
    events.on('routeChangeComplete', changeComplete)

    return () => {
      clearTimeout(timeout)
      events.off('routeChangeStart', changeStart)
      events.off('routeChangeError', changeComplete)
      events.off('routeChangeComplete', changeComplete)
    }
  }, [events])

  /**
   * Set template transition by default when navigating back/forward and apply
   * some delay between the transitions. Also handle hash links.
   */
  const transTimeout = useRef<ReturnType<typeof setTimeout>>()
  const scrollTo = useScrollTo()

  useEffect(() => {
    beforePopState(({ as, options, url }) => {
      options.scroll = false
      const {
        url: { hash, pathname: newPathname },
      } = urlState(as)
      const currentPathname = pathname

      if (hash && newPathname === currentPathname) {
        scrollTo(hash)
        return false
      }

      if (newPathname != currentPathname) {
        if (transition === 'template') {
          if (transTimeout.current) clearTimeout(transTimeout.current)
          transTimeout.current = setTimeout(() => {
            setTransition('template')
            push(url, as, { scroll: false })
          }, 800)

          return false
        } else {
          setTransition('template')
          return true
        }
      } else {
        return false
      }
    })
  }, [transition, beforePopState, push, scrollTo, pathname])

  useEffect(() => {
    if (!transitionComplete) return
    if (lenis?.isStopped) lenis.start()
    resetFocusToBody()
    scrollIntoView(asPath)
    setTransition(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionComplete, lenis])

  return (
    <LazyMotion features={domMax} strict>
      <AppHead themeColor={loadingEnd ? themeColor : undefined} />
      {!DISABLE_LOADING && (
        <Splash
          loading={loading}
          onAnimationComplete={() => setLoadingEnd(true)}
        />
      )}
      <AppContext.Provider
        value={{
          ...appState,
          lockRootScroll,
          lockTemplate,
          setTemplateRef,
          setThemeColor,
          setTransition,
          setTransitionInitial,
          transitionComplete,
        }}
      >
        <ReactLenis options={{ autoRaf: true, smoothWheel: loadingEnd }} root>
          <div className="App">
            <SkipNav href="#skip-nav">Skip to content</SkipNav>
            <Header navTitle={navTitle} />
            <main id="skip-nav">
              <AnimatePresence
                initial={false}
                onExitComplete={() => setTransitionComplete(asPath)}
              >
                <Component {...pageProps} key={asPath} />
              </AnimatePresence>
            </main>
          </div>
        </ReactLenis>
      </AppContext.Provider>
    </LazyMotion>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (context) return context
  throw new Error('useApp must be used within App')
}

export const useSetThemeColor = (
  themeColor: AppHeadProps['themeColor'] = '#fefefe',
) => {
  const { setThemeColor } = useApp()

  useEffect(() => {
    if (themeColor) setThemeColor(themeColor)
  }, [setThemeColor, themeColor])
}
