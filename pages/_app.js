import "../stylesheets/index.scss";
import Header from "../containers/Header";
import App from "../containers/App";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

function NextApp({ Component, pageProps, router }) {
  return (
    <App>
      <Header navTitle={pageProps.navTitle} />
      {/* <AnimateSharedLayout> */}
      {/* <AnimatePresence exitBeforeEnter> */}
      <div className="App-main" data-scroll-container>
        <Component {...pageProps} key={router.route} />
      </div>
      {/* </AnimatePresence>
      </AnimateSharedLayout> */}
    </App>
  );
}

export default NextApp;
