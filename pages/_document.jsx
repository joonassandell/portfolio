import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className={!process.env.NEXT_PUBLIC_DISABLE_LOADING && 'is-loading'}
      lang="en"
    >
      <Head>
        <link
          as="font"
          crossOrigin=""
          href="/fonts/Px-Grotesk-Regular.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin=""
          href="/fonts/Px-Grotesk-Light.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
