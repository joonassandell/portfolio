import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className={
        !process.env.NEXT_PUBLIC_DISABLE_LOADING ? 'is-loading' : undefined
      }
      lang="en"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
