import { createContext, useContext, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

const AppContext = createContext();

export function App({ children }) {
  const [appState, setAppState] = useState({
    history: [],
    templateTransition: true,
  });
  const router = useRouter();

  const setTemplateTransition = (value) => {
    setAppState((prevState) => ({
      ...prevState,
      templateTransition: value,
    }));
  };

  // useEffect(() => {
  //   router.beforePopState(() => {
  //     setTemplateTransition(true);
  //     return true;
  //   });
  // }, []);

  // useEffect(() => {
  //   const { asPath } = router;
  //   setAppState((prevState) => ({
  //     ...prevState,
  //     history: [...prevState.history, asPath],
  //   }));
  // }, [router.route]);

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
