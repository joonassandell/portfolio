import Head from 'next/head';
import { useRouter } from 'next/router';

export const AppHead = () => {
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const { asPath } = useRouter();
  const title = 'Joonas Sandell — Designer & Creative developer';
  const description =
    'Portfolio of Joonas Sandell — Designer and developer of things that usually appear on screens. Areas of expertise include Product & Visual design, Web & Mobile services, Branding and Software development.';

  return (
    <Head>
      {/* Common */}
      <title>{title}</title>
      <meta content={description} name="description" key="description" />

      {/* Open Graph */}
      <meta content={title} property="og:title" key="og:title" />
      <meta
        content={description}
        property="og:description"
        key="og:description"
      />
      <meta content="Joonas Sandell" property="og:site_name" />
      <meta content={`${ORIGIN}/static/og-image.jpg`} property="og:image" />
      <meta content="website" property="og:type" />
      <meta content={`${ORIGIN}${asPath}`} property="og:url" />
      <meta content="en" property="og:locale" />

      {/* Twitter */}
      <meta content={title} property="twitter:title" key="twitter:title" />
      <meta
        content={description}
        property="twitter:description"
        key="twitter:description"
      />
      <meta content="summary_large_image" property="twitter:card" />
      <meta
        content={`${ORIGIN}/static/og-image.jpg`}
        property="twitter:image"
      />
      <meta content="@joonassandell" property="twitter:site" />
      <meta content="@joonassandell" property="twitter:creator" />

      {/* Icons */}
      <link
        href="/static/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link color="#f5eddb" href="/static/favicon.svg" rel="mask-icon" />
      {/* <link href="/static/favicon.ico" rel="icon" sizes="any" /> */}
      <link href="/static/favicon.svg" rel="icon" type="image/svg+xml" />

      {/* Other */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="black" key="theme-color" />
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
    </Head>
  );
};
