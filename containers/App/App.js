import { createContext, useContext, useEffect, useState } from 'react';

import Head from 'next/head';
import { sitemap } from '@/lib/config';
import { scrollLock } from '@/lib/utility';
import useIsMobile from '@/lib/useIsMobile';
import { useRouter } from 'next/router';
import c from 'classnames';

const AppContext = createContext({
  history: [],
  loading: true,
  loadingEnd: false,
  scrollLock: false,
  transition: false, // 'instant', 'template', false, true
});

export function App({ children }) {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const router = useRouter();
  const mobile = useIsMobile();
  const { transition, loadingEnd } = appState;
  const classes = c('App', {
    'is-transition': transition,
  });

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
      scrollLock(true);
    } else {
      scrollLock(false);
    }
  };

  const setLoadingEnd = value => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }));
  };

  useEffect(() => {
    const { asPath } = router;
    setAppState(prevState => ({
      ...prevState,
      history: [...prevState.history, asPath],
    }));
  }, [router.route]);

  useEffect(() => {
    sitemap.map(site => {
      if (site.url === '/oras') {
        router.prefetch(site.url);
      }
    });

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }));
  }, []);

  useEffect(() => {
    if (loadingEnd) {
      const html = document.querySelector('html');
      html.classList.remove('is-loading');
    }
  }, [loadingEnd]);

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
    router.beforePopState(({ url, as }) => {
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
      <AppContext.Provider
        value={{
          appState,
          setLoadingEnd,
          setScrollLock,
          setTransition,
        }}
      >
        <div className={classes}>{children}</div>
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
