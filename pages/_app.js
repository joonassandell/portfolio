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
import Cookies from 'universal-cookie';

const Main = ({ Component, pageProps, innerKey }) => {
  const {
    appState,
    setTransition,
    setScrollLock,
    setTemplateTransition,
  } = useAppContext();
  const { templateTransition, scrollLock, transition } = appState;
  const { scroll } = useLocomotiveScroll();

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
   * Remove this crap, universal-cookie and portto.js once published.
   */
  const cookies = new Cookies();
  const _ = cookies.get('portto');
  const production = !process.env.NEXT_PUBLIC_ENVIRONMENT;
  useEffect(() => {
    if (
      production &&
      router.route === '/portto' &&
      typeof window !== 'undefined'
    ) {
      const cookies = new Cookies();
      cookies.set('portto', true, {
        path: '/',
      });
      window.location.href = '/';
    }
  }, []);
  if (!_ && production) return <></>;

  return (
    <>
      <Splash />
      <App>
        <LocomotiveScrollProvider
          containerRef={containerRef}
          options={{
            smooth: true,
            multiplier:
              typeof window !== 'undefined' &&
              window.navigator &&
              window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1
                ? 4
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
