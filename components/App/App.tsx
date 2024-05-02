import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { isBrowser } from '@/lib/utility';
import { Splash } from '@/components/Splash';
import { Header } from '@/components/Header';
import { LocomotiveScrollProvider } from '@/components/LocomotiveScroll';
import { useRouter } from 'next/router';
import { LazyMotion, domAnimation } from 'framer-motion';
import Script from 'next/script';
import {
  AppHead,
  type AppProps,
  type AppContextProps,
  type AppStateProps,
} from '.';
import { EASE_CSS, SLOW_NETWORK_DELAY } from '@/lib/config';
import NProgress from 'nprogress';

const DISABLE_LOADING = process.env.NEXT_PUBLIC_DISABLE_LOADING;
const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const PRODUCTION = process.env.NODE_ENV === 'production';
let scrollOnUpdateOnce = false;

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const App = ({ Component, pageProps }: AppProps) => {
  const [appState, setAppState] = useState<AppStateProps>({
    detect: {},
    html: (isBrowser && document.documentElement) as AppStateProps['html'],
    loading: DISABLE_LOADING ? false : true,
    loadingEnd: DISABLE_LOADING ? true : false,
    transition: false,
    transitionInitial: false,
  });
  const { html, loading, loadingEnd, transition } = appState;
  const { asPath, beforePopState, push, events } = useRouter();
  const [animationComplete, setAnimationComplete] = useState<
    string | undefined
  >();
  const containerRef = useRef(null);

  /* ======
   * App set state functions
   * ====== */

  const setTransition = (value: AppStateProps['transition']) => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }));
  };

  const setTransitionInitial = (value: AppStateProps['transitionInitial']) => {
    setAppState(prevState => ({
      ...prevState,
      transitionInitial: value,
    }));
  };

  const setLoadingEnd = (value: AppStateProps['loadingEnd']) => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }));
  };

  /* ======
   * Initialize stuff on load etc.
   * ====== */

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.info('Made by me with Next.js, Framer Motion and tears. 🥲');
    }

    (async () => {
      const { isIphoneSafari, isWindows, hasTouch, hasThemeColor } =
        await import('@/lib/detect');
      if (isWindows) html.classList.add('is-windows');
      if (hasThemeColor) html.classList.add('has-themeColor');
      if (isIphoneSafari) html.classList.add('is-iPhoneSafari');

      setAppState(prevState => ({
        ...prevState,
        detect: { hasThemeColor, hasTouch, isWindows },
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

    return () => window.removeEventListener('resize', rootHeight);
  }, [html]);

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
    beforePopState(({ url, as }) => {
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

  /**
   * Send GA page views
   */
  useEffect(() => {
    if (PRODUCTION && GOOGLE_ANALYTICS) {
      const handleRouteChange = (url: string) => {
        window.gtag('config', GOOGLE_ANALYTICS, {
          page_path: url,
        });
      };
      events.on('routeChangeComplete', handleRouteChange);
      return () => events.off('routeChangeComplete', handleRouteChange);
    }
  }, [events]);

  return (
    <LazyMotion features={domAnimation} strict>
      <AppHead />
      {PRODUCTION && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname
              });
            `}
          </Script>
        </>
      )}
      {!DISABLE_LOADING && (
        <Splash loading={loading} setLoadingEnd={setLoadingEnd} />
      )}
      <AppContext.Provider
        value={{
          appState,
          setLoadingEnd,
          setTransition,
          setTransitionInitial,
        }}
      >
        <LocomotiveScrollProvider
          containerRef={containerRef}
          options={{
            class: '@',
            draggingClass: 'is-drag',
            initClass: 'is-init',
            name: 's',
            scrollbarClass: 'ScrollBar',
            scrollingClass: 'is-scroll',
            smartphone: {
              smooth: true,
            },
            smooth: true,
            smoothClass: 'is-smooth',
            tablet: {
              smooth: true,
              breakpoint: 1024,
            },
            touchMultiplier: 4,
          }}
          location={animationComplete}
          watch={[loadingEnd]}
          onLocationChange={scroll => {
            scroll.scroll.stop && scroll.start();
            scroll.scrollTo(0, { duration: 0, disableLerp: true });
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
        >
          <div className="App">
            <Header navTitle={pageProps.navTitle} />
            <main className="App-main" data-s-container ref={containerRef}>
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

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context) return context;
  throw new Error('useAppContext must be used within App');
};
