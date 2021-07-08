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
  transition: false,
  templateTransition: false,
});

export function App({ children }) {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const router = useRouter();
  const [delay, setDelay] = useState(100);
  const mobile = useIsMobile();
  const { templateTransition, transition, loadingEnd } = appState;
  const classes = c('App', {
    'is-transition': templateTransition || transition,
  });

  const setTransition = value => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }));
  };

  const setTemplateTransition = value => {
    setAppState(prevState => ({
      ...prevState,
      templateTransition: value,
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
    if (mobile && templateTransition) {
      setScrollLock(true);
    }
  }, [templateTransition]);

  useEffect(() => {
    router.beforePopState(({ url }) => {
      setTimeout(() => {
        setDelay(1000);
        setTemplateTransition(true);
        router.push(url, null, { scroll: false });
        return false;
      }, delay);
    });

    return () => {
      setTimeout(() => {
        setDelay(100);
      }, 1000);
    };
  }, [delay]);

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
          setTemplateTransition,
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
