import { createContext, useContext, useEffect, useState } from "react";

import Head from "next/head";
import { debounce } from "lodash";
import { useRouter } from "next/router";

const AppContext = createContext({
  history: [],
  templateTransition: false,
});

export function App({ children }) {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const router = useRouter();
  const [delay, setDelay] = useState(200);

  const setTemplateTransition = (value) => {
    setAppState((prevState) => ({
      ...prevState,
      templateTransition: value,
    }));
  };

  useEffect(() => {
    const { asPath } = router;
    setAppState((prevState) => ({
      ...prevState,
      history: [...prevState.history, asPath],
    }));
  }, [router.route]);

  useEffect(() => {
    router.beforePopState(
      debounce(({ url }) => {
        setDelay(1000);
        setTemplateTransition(true);
        router.push(url);
        return false;
      }, delay)
    );

    return () => {
      setTimeout(() => {
        setDelay(200);
      }, 1000);
    };
  }, [delay]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.className = document.documentElement.className.replace(/(^|\s)no-js(\s|$)/,'has-js');
            `,
          }}
        />
      </Head>
      <AppContext.Provider value={{ appState, setTemplateTransition }}>
        <div className="App">{children}</div>
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
