import Head from 'next/head';
import { useRouter } from 'next/router';

export const AppHead = () => {
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const { asPath } = useRouter();

  return (
    <Head>
      <link
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Regular.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Light.woff2"
        rel="preload"
        type="font/woff2"
      />
      <meta content="Joonas Sandell" property="og:site_name" />
      <meta content={`${ORIGIN}/static/og-image.jpg`} property="og:image" />
      <meta content="website" property="og:type" />
      <meta content={`${ORIGIN}${asPath}`} property="og:url" />
      <meta content="en" property="og:locale" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`${ORIGIN}/static/og-image.jpg`} name="twitter:image" />
      <meta content="@joonassandell" name="twitter:site" />
      <link
        href="/static/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link color="#f5eddb" href="/static/favicon.svg" rel="mask-icon" />
      <link href="/static/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/static/favicon.ico" rel="icon" sizes="any" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};
