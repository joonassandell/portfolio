import { createContext, useContext, useEffect, useState } from 'react';

import Head from 'next/head';
import { sitemap } from '@/lib/config';
import { scrollLock } from '@/lib/utility';
import useIsMobile from '@/lib/useIsMobile';
import { useRouter } from 'next/router';
import c from 'classnames';

const AppContext = createContext({
  history: [],
  transition: false,
  templateTransition: false,
});

export function App({ children }) {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const router = useRouter();
  const [delay, setDelay] = useState(100);
  const mobile = useIsMobile();
  const { templateTransition, transition } = appState;
  const transitions = templateTransition || transition;
  const classes = c('App', {
    'is-transition': transitions,
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
  }, []);

  /**
   * Disable scrolling in mobile (non smooth) devices during transitions
   */
  useEffect(() => {
    if (mobile) {
      if (transitions) {
        setTimeout(() => {
          scrollLock(true);
        }, 700);
      } else {
        scrollLock(false);
      }
    }
  }, [transitions]);

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
              document.documentElement.className = document.documentElement.className.replace(/(^|\s)no-js(\s|$)/,'has-js');
            `,
          }}
        />
      </Head>
      <AppContext.Provider
        value={{ appState, setTransition, setTemplateTransition }}
      >
        <div className={classes}>{children}</div>
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
