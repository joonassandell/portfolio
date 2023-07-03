import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className={!process.env.NEXT_PUBLIC_DISABLE_LOADING && 'is-loading'}
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
