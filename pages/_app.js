import "../stylesheets/index.scss";

import App, { useAppContext } from "../containers/App";

import { AnimatePresence } from "framer-motion";
import Header from "../containers/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const Test = ({ Component, pageProps, innerKey }) => {
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;

  if (templateTransition) {
    return (
      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          // setTemplateTransition(false);
        }}
      >
        <Component {...pageProps} key={innerKey} />
        <div className="test">TemplateTransition</div>
      </AnimatePresence>
    );
  } else {
    return (
      <Component {...pageProps} key={innerKey}>
        <div className="test">No TemplateTransition</div>
      </Component>
    );
  }
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
        }}
        watch={[router.route]}
      >
        <main className="App-main" data-scroll-container>
          <Test
            Component={Component}
            pageProps={pageProps}
            innerKey={router.route}
          />
          {/* <AnimatePresence initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence> */}
        </main>
      </LocomotiveScrollProvider>
    </App>
  );
}

export default NextApp;
