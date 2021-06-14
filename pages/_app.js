import '../stylesheets/index.scss';

import App, { useAppContext } from '../containers/App';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';

import { AnimatePresence } from 'framer-motion';
import Header from '../containers/Header';
import smoothscroll from 'smoothscroll-polyfill';
import { useRef, useEffect, useState } from 'react';

const Main = ({ Component, pageProps, innerKey }) => {
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;
  const [utils, setUtils] = useState();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    /**
     * 1. Fix locomotive scroll to trigger in iOS on page load/after anim.
     */
    (async () => {
      const utils = await import('../lib/detect');
      setUtils(utils);
    })();
  }, []);

  useEffect(() => {
    // !window.scrollY > 0 &&
    scroll && utils && utils.isIOS && scroll.scrollTo(-1); // [1.]
  }, [scroll, utils]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (templateTransition) {
          setTemplateTransition(false);
        }

        if (scroll) {
          scroll.destroy();
          scroll.init();
          utils.isIOS && scroll.scrollTo(-1); // [1.]
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

  return (
    <App>
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{ smooth: true }}
        watch={['Done manually I presume?']}
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
  );
}

export default NextApp;
