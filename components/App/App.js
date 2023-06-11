import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { getSitemap, scrollLock } from '@/lib/utility';
import { useIsMobile } from '@/lib/useIsMobile';
import { Splash } from '@/components/Splash';
import { Header } from '@/components/Header';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';
import smoothscroll from 'smoothscroll-polyfill';

const sitemap = getSitemap();

const AppContext = createContext({
  doc: null,
  html: null,
  history: [],
  loading: true,
  loadingEnd: false,
  scrollLock: false,
  transition: false, // 'template', false, true
  transitionInitial: false,
});

export const App = ({ Component, pageProps, router }) => {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const mobile = useIsMobile();
  const { doc, html, loading, loadingEnd, transition } = appState;
  const containerRef = useRef(null);
  const { asPath } = router;

  /* ======
   * App set state functions
   * ====== */

  const setTransition = value => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }));
  };

  const setTransitionInitial = value => {
    setAppState(prevState => ({
      ...prevState,
      transitionInitial: value,
    }));
  };

  const setScrollLock = enable => {
    setAppState(prevState => ({
      ...prevState,
      scrollLock: enable,
    }));

    if (enable) {
      scrollLock(true, html);
    } else {
      scrollLock(false, html);
    }
  };

  const setLoadingEnd = value => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }));
  };

  /* ======
   * Initialize stuff on load etc.
   * ====== */

  useEffect(() => {
    smoothscroll.polyfill();

    if (process.env.NODE_ENV === 'production') {
      // prettier-ignore
      console.info(
        `Made by me with Next.js, TypeScript, Rebirth and tears. 🥲

https://github.com/joonassandell/rebirth My styleguide in development
https://nextjs.org I really recommend this
https://www.typescriptlang.org And this one too
      `
      );
    }

    sitemap.map(site => {
      if (site.url === '/oras') {
        router.prefetch(site.url);
      }
    });

    setAppState(prevState => ({
      ...prevState,
      doc: document.documentElement,
      html: document.querySelector('html'),
      loading: false,
    }));
  }, []);

  /* ======
   * History
   * ====== */

  useEffect(() => {
    setAppState(prevState => ({
      ...prevState,
      history: [...prevState.history, asPath],
    }));
  }, [router.route]);

  /* ======
   * Various
   * ====== */

  useEffect(() => {
    if (!doc) return;

    const rootHeight = () =>
      doc.style.setProperty('--vh', `${window.innerHeight}px`);
    window.addEventListener('resize', rootHeight);
    rootHeight();

    () => window.removeEventListener('resize', rootHeight);
  }, [doc]);

  useEffect(() => {
    if (!html) return;
    (async () => {
      const { isWindows } = await import('@/lib/detect');
      if (isWindows) html.classList.add('is-windows');
    })();
  }, [html]);

  useEffect(() => {
    if (!html) return;
    if (loadingEnd) html.classList.remove('is-loading');
  }, [html, loadingEnd]);

  /**
   * Disable scrolling in mobile (non smooth) devices during template transition.
   * Scrolling is enabled after the transition in <AppMain />
   */
  useEffect(() => {
    if (mobile && transition === 'template') {
      setScrollLock(true);
    }
  }, [transition]);

  useEffect(() => {
    if (!html || !loadingEnd) return;
    if (transition) {
      html.classList.add('is-transition', 'is-transition:withDelay');
    }

    if (!transition) {
      html.classList.remove('is-transition');
      setTimeout(() => html.classList.remove('is-transition:withDelay'), 300);
    }
  }, [html, transition]);

  /**
   * Set template transition by default when navigating back/forward
   */
  useEffect(() => {
    router.beforePopState(({ url, as }) => {
      if (transition === 'template') {
        setTimeout(() => {
          setTransition('template');
          router.push(url, as, { scroll: false });
        }, 500);
        return false;
      } else {
        setTransition('template');
        return true;
      }
    });
  }, [transition]);

  /**
   * Set initial transitions ready for animation (e.g. for Hero)
   */
  useEffect(() => {
    if (transition === 'template') setTransitionInitial(true);
  }, [transition]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          as="font"
          crossOrigin=""
          href="/fonts/Px-Grotesk-Regular.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin=""
          href="/fonts/Px-Grotesk-Light.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <Splash loading={loading} setLoadingEnd={setLoadingEnd} />
      <AppContext.Provider
        value={{
          appState,
          setLoadingEnd,
          setScrollLock,
          setTransition,
          setTransitionInitial,
        }}
      >
        <LocomotiveScrollProvider
          containerRef={containerRef}
          options={{
            multiplier:
              typeof window !== 'undefined' &&
              window.navigator &&
              window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1
                ? 3
                : 1,
            smooth: true,
          }}
          watch={['Done manually']}
        >
          <div className="App">
            <Header navTitle={pageProps.navTitle} />
            <main className="App-main" data-scroll-container ref={containerRef}>
              <AppMain
                Component={Component}
                html={html}
                innerKey={router.route}
                loadingEnd={loadingEnd}
                pageProps={pageProps}
                scrollLock={appState.scrollLock}
                setScrollLock={setScrollLock}
                setTransition={setTransition}
                transition={transition}
              />
            </main>
          </div>
        </LocomotiveScrollProvider>
      </AppContext.Provider>
    </>
  );
};

const AppMain = ({
  Component,
  innerKey,
  pageProps,
  loadingEnd,
  scrollLock,
  setScrollLock,
  setTransition,
  transition,
  html,
}) => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (loadingEnd && scroll) setTimeout(() => scroll.update(), 10);
  }, [loadingEnd]);

  const hackClass = 'is-transition:template:after';

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (scrollLock) setScrollLock(false);
        if (scroll) {
          if (transition === 'template') {
            html.classList.add(hackClass);
            setTimeout(() => {
              html.classList.remove(hackClass);
            }, 300);
          }

          scroll.destroy();
          scroll.init();
        }
        if (transition) setTransition(false);
      }}
    >
      <Component {...pageProps} key={innerKey} />
    </AnimatePresence>
  );
};

export const useAppContext = () => useContext(AppContext);
