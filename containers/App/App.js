import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { getSitemap, scrollLock } from '@/lib/utility';
import useIsMobile from '@/lib/useIsMobile';
import Splash from '@/containers/Splash';
import Header from '@/containers/Header';
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
  transition: false, // template', false, true
});

export const App = ({ Component, pageProps, router }) => {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const mobile = useIsMobile();
  const { doc, html, loading, loadingEnd, transition } = appState;
  const templateTransition = transition === 'template';
  const containerRef = useRef(null);
  const { asPath } = router;

  /* ======
   * App state functions
   * ====== */

  const setTransition = value => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
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
   * Scrolling is enabled after the transition in _app.js
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
   * Set proper transitions w/ delay when navigating back/forward
   */
  useEffect(() => {
    router.beforePopState(({ url, as }) => {
      const defaultTransition = transition && transition != 'template';

      if (defaultTransition) {
        window.location.href = as;
        return false;
      }

      if (transition) {
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

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove('no-js');
              document.documentElement.classList.add('has-js');
            `,
          }}
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
        }}
      >
        <LocomotiveScrollProvider
          containerRef={containerRef}
          options={{
            smooth: true,
            multiplier:
              typeof window !== 'undefined' &&
              window.navigator &&
              window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1
                ? 3
                : 1,
          }}
          watch={['Done manually']}
        >
          <div className="App">
            <Header navTitle={pageProps.navTitle} />
            <main className="App-main" data-scroll-container ref={containerRef}>
              <AppMain
                Component={Component}
                innerKey={router.route}
                loadingEnd={loadingEnd}
                pageProps={pageProps}
                scrollLock={appState.scrollLock}
                setScrollLock={setScrollLock}
                setTransition={setTransition}
                templateTransition={templateTransition}
                transition={transition}
                html={html}
              />
            </main>
          </div>
        </LocomotiveScrollProvider>
      </AppContext.Provider>
    </>
  );
};

const AppMain = ({ ...props }) => {
  const {
    Component,
    innerKey,
    pageProps,
    loadingEnd,
    scrollLock,
    setScrollLock,
    setTransition,
    transition,
    templateTransition,
    html,
  } = props;
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (loadingEnd && scroll) setTimeout(() => scroll.update(), 10);
  }, [loadingEnd]);

  const hackClass = 'is-transition:template:after';
  const hackClassAfterDelay = 'is-transition:template:after:withDelay';

  if (scroll) {
    scroll.on('scroll', () => {
      if (scroll.scroll.isScrolling && html.classList.contains(hackClass)) {
        html.classList.remove(hackClass);
        html.classList.add(hackClassAfterDelay);

        setTimeout(() => {
          html.classList.remove(hackClassAfterDelay);
        }, 100);
      }
    });
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (scrollLock) setScrollLock(false);

        if (scroll) {
          if (templateTransition) {
            html.classList.add(hackClass);
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
