import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { scrollLock, isBrowser } from '@/lib/utility';
import { useIsMobile } from '@/lib/useIsMobile';
import { Splash } from '@/components/Splash';
import { Header } from '@/components/Header';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import smoothscroll from 'smoothscroll-polyfill';
import { useRouter } from 'next/router';
import { LazyMotion, domAnimation } from 'framer-motion';

const AppContext = createContext({
  doc: isBrowser && document.documentElement,
  html: isBrowser && document.querySelector('html'),
  loading: true,
  loadingEnd: false,
  transition: false, // 'template', false, true
  transitionInitial: false,
});

export const App = ({ Component, pageProps }) => {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const { doc, html, loading, loadingEnd, transition } = appState;
  const { asPath, beforePopState, push } = useRouter();
  const [animationComplete, setAnimationComplete] = useState();
  const mobile = useIsMobile();
  const containerRef = useRef(null);

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

  const setScrollLock = bool => {
    scrollLock(bool, html);
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
      console.info(
        `Made by me with Next.js, TypeScript, Rebirth and tears. 🥲`,
      );
    }

    (async () => {
      const { isWindows } = await import('@/lib/detect');
      if (isWindows) html.classList.add('is-windows');
    })();

    const rootHeight = () =>
      doc.style.setProperty('--vh', `${window.innerHeight}px`);
    window.addEventListener('resize', rootHeight);
    rootHeight();

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }));

    () => window.removeEventListener('resize', rootHeight);
  }, []);

  /* ======
   * Various
   * ====== */

  useEffect(() => {
    if (loadingEnd) html.classList.remove('is-loading');
  }, [loadingEnd]);

  /**
   * Disable scrolling in mobile (non smooth) devices during template transition.
   * Scrolling is enabled after the transition in onLocationChange. Note that
   * for desktop the scrolling is disabled in Template.
   */
  useEffect(() => {
    if (mobile && transition === 'template') setScrollLock(true);
  }, [mobile, transition]);

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
  }, [transition]);

  /**
   * Set template transition by default when navigating back/forward
   */
  useEffect(() => {
    beforePopState(({ url, as }) => {
      if (transition === 'template') {
        setTimeout(() => {
          setTransition('template');
          push(url, as, { scroll: false });
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
    <LazyMotion features={domAnimation} strict>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1, user-scalable=no"
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
            smooth: true,
          }}
          location={animationComplete}
          watch={['No need for this, just suppress the error.']}
          onLocationChange={scroll => {
            if (scrollLock) setScrollLock(false);

            /**
             * With
             * scroll.scroll.stop && scroll.start();
             * scroll.scrollTo(0, { duration: 0, disableLerp: true });
             * there will be a flash of images and scroll flickers etc. so
             * rather destroy/init in the whole scroll.
             */
            scroll.destroy();
            scroll.init();

            if (transition) setTransition(false);
          }}
        >
          <div className="App">
            <Header navTitle={pageProps.navTitle} />
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

export const useAppContext = () => useContext(AppContext);
