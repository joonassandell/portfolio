import "../stylesheets/index.scss";

import App, { useAppContext } from "../containers/App";

import { AnimatePresence } from "framer-motion";
import Header from "../containers/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function NextApp({ Component, pageProps, router }) {
  const containerRef = useRef(null);

  return (
    <App>
      <Header navTitle={pageProps.navTitle} />
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          smooth: true,
        }}
        watch={[router.route]}
      >
        <main className="App-main" data-scroll-container ref={containerRef}>
          <AnimatePresence>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </main>
      </LocomotiveScrollProvider>
    </App>
  );
}

export default NextApp;
