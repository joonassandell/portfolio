import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import {
  APP_URL,
  DISABLE_LOADING,
  EASE_CSS,
  PRODUCTION,
  SLOW_NETWORK_DELAY,
} from '@/lib/config';
import {
  type AppContextProps,
  AppHead,
  type AppHeadProps,
  type AppProps,
} from './';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { isBrowser } from '@/lib/utils';
import { LocomotiveScrollProvider } from '@/components/LocomotiveScroll';
import { Splash } from '@/components/Splash';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

let scrollOnUpdateOnce = false;

const AppContext = createContext<AppContextProps | undefined>(undefined);

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
    >
  >({
    detect: {},
    html: (isBrowser && document.documentElement) as AppContextProps['html'],
    loading: DISABLE_LOADING ? false : true,
    loadingEnd: DISABLE_LOADING ? true : false,
    transition: false,
    transitionInitial: false,
  });
  const { detect, html, loading, loadingEnd, transition } = appState;
  const { asPath, beforePopState, events, push } = useRouter();
  const [animationComplete, setAnimationComplete] = useState<
    string | undefined
  >();
  const containerRef = useRef(null);

  /* ======
   * App set state functions
   * ====== */

  const setTransition = (value: AppContextProps['transition']) => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }));
  };

  const setTransitionInitial = (
    value: AppContextProps['transitionInitial'],
  ) => {
    setAppState(prevState => ({
      ...prevState,
      transitionInitial: value,
    }));
  };

  const setLoadingEnd = (value: AppContextProps['loadingEnd']) => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }));
  };

  const [themeColor, setThemeColor] = useState<AppHeadProps['themeColor']>();

  /* ======
   * Initialize stuff on load etc.
   * ====== */

  useEffect(() => {
    if (PRODUCTION) {
      console.info(
        'Made by me with Next.js, TypeScript, Framer Motion and tears. 🥲',
      );
    }

    (async () => {
      const {
        hasThemeColor,
        hasTouch,
        isIos,
        isSafari,
        isSafariDesktop,
        isSafariIphone,
        isWindows,
      } = await import('@/lib/detect');
      if (isWindows) html.classList.add('is-windows');
      if (hasThemeColor) html.classList.add('has-themeColor');
      if (isIos) html.classList.add('is-ios');
      if (isSafari) html.classList.add('is-safari');
      if (isSafariIphone) html.classList.add('is-safari:iphone');
      if (isSafariDesktop) html.classList.add('is-safari:desktop');

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
        },
      }));
    })();

    const rootHeight = () =>
      html.style.setProperty('--vh', `${window.innerHeight}px`);
    window.addEventListener('resize', rootHeight);
    rootHeight();

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }));

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    return () => window.removeEventListener('resize', rootHeight);
  }, [html]);

  useEffect(() => {
    /**
     * Fix parallax elements "jump" that might happen during initial
     * touch scroll in iPhone (and in possibly other iOS devices as well)
     */
    if (detect.isIos) {
      window.scrollTo({
        behavior: 'smooth',
        top: 1,
      });
    }
  }, [detect]);

  /* ======
   * Various
   * ====== */

  useEffect(() => {
    if (loadingEnd) html.classList.remove('is-loading');
  }, [loadingEnd, html]);

  useEffect(() => {
    if (transition) {
      html.classList.add('is-transition', 'is-transition:withDelay');
    }

    const hackClass = 'is-transition:template:withDelay';
    if (transition === 'template') html.classList.add(hackClass);

    if (!transition) {
      html.classList.remove('is-transition');
      setTimeout(() => html.classList.remove('is-transition:withDelay'), 300);
      setTimeout(() => html.classList.remove(hackClass), 300);
    }
  }, [transition, html]);

  /**
   * Add loader with nprogress for slow networks
   */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    NProgress.configure({
      easing: EASE_CSS,
      showSpinner: false,
    });

    const changeStart = () => {
      timeout = setTimeout(() => NProgress.start(), SLOW_NETWORK_DELAY);
    };

    const changeComplete = () => {
      clearTimeout(timeout);
      if (NProgress.status) NProgress.done();
    };

    events.on('routeChangeStart', changeStart);
    events.on('routeChangeError', changeComplete);
    events.on('routeChangeComplete', changeComplete);

    return () => {
      clearTimeout(timeout);
      events.off('routeChangeStart', changeStart);
      events.off('routeChangeError', changeComplete);
      events.off('routeChangeComplete', changeComplete);
    };
  }, [events]);

  /**
   * Set template transition by default when navigating back/forward
   */
  const [popStateTimeout, setPopStateTimeout] =
    useState<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    beforePopState(({ as, options, url }) => {
      options.scroll = false;

      if (transition === 'template') {
        setPopStateTimeout(
          setTimeout(() => {
            setTransition('template');
            push(url, as, { scroll: false });
          }, 800),
        );
        return false;
      } else {
        setTransition('template');
        return true;
      }
    });
    return () => popStateTimeout && clearTimeout(popStateTimeout);
  }, [transition, beforePopState, push, popStateTimeout]);

  /**
   * Set initial transitions ready for animation (e.g. for Hero)
   */
  useEffect(() => {
    if (transition === 'template') setTransitionInitial(true);
  }, [transition]);

  return (
    <LazyMotion features={domAnimation} strict>
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
          setThemeColor,
          setTransition,
          setTransitionInitial,
        }}
      >
        <LocomotiveScrollProvider
          containerRef={containerRef}
          location={animationComplete}
          onLocationChange={scroll => {
            scroll.lenisInstance.isStopped && scroll.start();

            const url = new URL(asPath, APP_URL);
            const el = html.querySelector(url.hash || '#null') as HTMLElement;

            if (!el) {
              window.scrollTo(0, 0);
            } else {
              el.scrollIntoView();
            }

            if (transition) setTransition(false);
          }}
          onUpdate={scroll => {
            if (!DISABLE_LOADING) {
              if (!scrollOnUpdateOnce && !loadingEnd) scroll.stop();
              if (!scrollOnUpdateOnce && loadingEnd) {
                scrollOnUpdateOnce = true;
                scroll.start();
              }
            }
          }}
          options={
            {
              // class: '@',
              // draggingClass: 'is-drag',
              // initClass: 'is-init',
              // name: 's',
              // scrollbarClass: 'ScrollBar',
              // scrollingClass: 'is-scroll',
              // smartphone: {
              //   smooth: true,
              // },
              // smooth: true,
              // smoothClass: 'is-smooth',
              // tablet: {
              //   breakpoint: 1024,
              //   smooth: true,
              // },
              // touchMultiplier: 4,
              // lenisOptions: {},
            }
          }
          watch={[loadingEnd]}
        >
          <div className="App">
            <Header navTitle={navTitle} />
            <main className="App-main" data-scroll-container ref={containerRef}>
              <AnimatePresence
                initial={false}
                onExitComplete={() => {
                  console.log('App animation complete');
                  setAnimationComplete(asPath);
                }}
              >
                <Component {...pageProps} key={asPath} />
              </AnimatePresence>
            </main>
          </div>
        </LocomotiveScrollProvider>
      </AppContext.Provider>
    </LazyMotion>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context) return context;
  throw new Error('useApp must be used within App');
};

export const useSetThemeColor = (
  themeColor: AppHeadProps['themeColor'] = '#fefefe',
) => {
  const { setThemeColor } = useApp();

  useEffect(() => {
    if (themeColor) setThemeColor(themeColor);
  }, [setThemeColor, themeColor]);
};
