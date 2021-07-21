import '@/stylesheets/index.scss';

import App, { useAppContext } from '@/containers/App';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';

import { AnimatePresence } from 'framer-motion';
import Header from '@/containers/Header';
import Splash from '@/containers/Splash';
import smoothscroll from 'smoothscroll-polyfill';
import { useRef, useEffect } from 'react';

const Main = ({ Component, pageProps, innerKey }) => {
  const {
    appState: { templateTransition, scrollLock, transition, loadingEnd },
    setTransition,
    setScrollLock,
    setTemplateTransition,
  } = useAppContext();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (loadingEnd && scroll) {
      setTimeout(() => {
        scroll.update();
      }, 10);
    }
  }, [loadingEnd]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (scrollLock) setScrollLock(false);
        if (templateTransition) setTemplateTransition(false);
        if (transition) setTransition(false);
        if (scroll) {
          scroll.destroy();
          scroll.init();
        }
      }}
    >
      <Component {...pageProps} key={innerKey} />
    </AnimatePresence>
  );
};

function NextApp({ Component, pageProps, router }) {
  if (typeof window !== 'undefined') smoothscroll.polyfill();
  const containerRef = useRef(null);

  /**
   * Remove this crap and portto.js once published
   */
  const production = !process.env.NEXT_PUBLIC_ENVIRONMENT;
  useEffect(() => {
    if (
      production &&
      router.route === '/portto' &&
      typeof window !== 'undefined'
    ) {
      localStorage.setItem('portto', '/');
      window.location.href = '/';
    }
  }, []);

  if (typeof window !== 'undefined') {
    const _ = localStorage.getItem('portto');
    if (!_ && production) return <></>;
  }

  return (
    <>
      <App>
        <Splash />
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
          watch={['Done manually I presume?']} // router.route
        >
          <Header navTitle={pageProps.navTitle} />
          <main className="App-main" data-scroll-container ref={containerRef}>
            <Main
              Component={Component}
              innerKey={router.route}
              pageProps={pageProps}
            />
          </main>
        </LocomotiveScrollProvider>
      </App>
    </>
  );
}

export default NextApp;
