import { AnimatePresence, domAnimation, LazyMotion } from 'motion/react';
import {
  type AppContextProps,
  AppHead,
  type AppHeadProps,
  type AppProps,
} from './';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  DISABLE_LOADING,
  EASE_CSS,
  PRODUCTION,
  SLOW_NETWORK_DELAY,
} from '@/lib/config';
import { Header } from '@/components/Header';
import {
  isBrowser,
  resetFocusToBody,
  scrollbarWidth,
  scrollIntoView,
} from '@/lib/utils';
import { ReactLenis, useLenis } from 'lenis/react';
import { SkipNav } from '@/components/SkipNav';
import { Splash } from '@/components/Splash';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

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
      | 'setTemplateRef'
      | 'lockTemplate'
      | 'lockScroll'
    >
  >({
    detect: {},
    html: (isBrowser && document.documentElement) as AppContextProps['html'],
    loading: DISABLE_LOADING ? false : true,
    loadingEnd: DISABLE_LOADING ? true : false,
    templateRef: null,
    transition: false,
    transitionInitial: false,
  });
  const { html, loading, loadingEnd, templateRef, transition } = appState;
  const { asPath, beforePopState, events, push } = useRouter();
  const [animationComplete, setAnimationComplete] = useState<
    string | undefined
  >();
  const lenis = useLenis();

  /* =======================================
   * App state functions
   * ======================================= */

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

  const setTemplateRef = (value: AppContextProps['templateRef']) => {
    setAppState(prevState => ({
      ...prevState,
      templateRef: value,
    }));
  };

  const [themeColor, setThemeColor] = useState<AppHeadProps['themeColor']>();

  const lockScroll = useCallback(
    (enable = false) => {
      if (!lenis) return;

      if (enable) {
        lenis.stop();
        html.classList.add('is-lock');
        html.style.setProperty('--scrollbar-width-lock', `${scrollbarWidth}px`);
      } else {
        lenis.start();
        html.classList.remove('is-lock');
        html.style.removeProperty('--scrollbar-width-lock');
      }
    },
    [lenis, html],
  );

  const lockTemplate = useCallback(() => {
    if (!templateRef?.current) return;
    templateRef.current.style.inset = `-${window.scrollY}px 0 0 0`;
    templateRef.current.style.position = 'fixed';
  }, [templateRef]);

  /* =======================================
   * Setup
   * ======================================= */

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

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }));

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, [html]);

  useEffect(() => {
    if (!lenis) return;
    if (loadingEnd) {
      lockScroll(false);
      html.classList.remove('is-loading');
    } else {
      lockScroll(true);
    }
  }, [loadingEnd, lockScroll, lenis, html]);

  useEffect(() => {
    if (transition) html.classList.add('is-transition');

    if (transition === 'instant' || transition === 'template') {
      lockTemplate();
    }

    /**
     * Set initial transitions ready for animations (e.g. for Hero)
     */
    if (transition === 'template') setTransitionInitial(true);

    if (!transition) {
      html.classList.remove('is-transition');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    if (!animationComplete) return;
    lenis?.isStopped && lenis.start();
    resetFocusToBody();
    scrollIntoView(asPath);
    if (transition) setTransition(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationComplete]);

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
          lockScroll,
          lockTemplate,
          setTemplateRef,
          setThemeColor,
          setTransition,
          setTransitionInitial,
        }}
      >
        <ReactLenis options={{ autoRaf: true }} root>
          <div className="App">
            <SkipNav href="#skip-nav">Skip to content</SkipNav>
            <Header navTitle={navTitle} />
            <main id="skip-nav">
              <AnimatePresence
                initial={false}
                onExitComplete={() => setAnimationComplete(asPath)}
              >
                <Component {...pageProps} key={asPath} />
              </AnimatePresence>
            </main>
          </div>
        </ReactLenis>
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
