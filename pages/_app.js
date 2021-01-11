import '../stylesheets/index.scss';
import Header from '../containers/Header';
import App from '../containers/App';
import { AnimatePresence } from 'framer-motion';

function NextApp({ Component, pageProps, router }) {
  console.log(pageProps, router);

  return (
    <App>
      <Header navTitle={pageProps.navTitle} />      
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </App>
  )
}

export default NextApp;
