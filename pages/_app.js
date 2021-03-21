import "../stylesheets/index.scss";

import App, { useAppContext } from "../containers/App";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

import { AnimatePresence } from "framer-motion";
import Header from "../containers/Header";
import smoothscroll from "smoothscroll-polyfill";
import { useRef } from "react";

const Main = ({ Component, pageProps, innerKey }) => {
  if (typeof window !== "undefined") smoothscroll.polyfill();
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;
  const { scroll } = useLocomotiveScroll();

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (templateTransition) {
          setTemplateTransition(false);
        }

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
  const containerRef = useRef(null);

  return (
    <App>
      <Header navTitle={pageProps.navTitle} />
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          smooth: true,
          reloadOnContextChange: true,
        }}
        // watch={[router.route]}
        watch={["Done manually"]}
      >
        <main className="App-main" data-scroll-container ref={containerRef}>
          <Main
            Component={Component}
            pageProps={pageProps}
            innerKey={router.route}
          />
        </main>
      </LocomotiveScrollProvider>
    </App>
  );
}

export default NextApp;
