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
      <meta name="description" content={description} key="description" />

      {/* Open Graph */}
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:site_name" content="Joonas Sandell" />
      <meta property="og:image" content={`${ORIGIN}/static/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${ORIGIN}${asPath}`} />
      <meta property="og:locale" content="en" />

      {/* Twitter */}
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content={`${ORIGIN}/static/og-image.jpg`}
      />
      <meta property="twitter:site" content="@joonassandell" />
      <meta property="twitter:creator" content="@joonassandell" />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        href="/static/apple-touch-icon.png"
        sizes="180x180"
      />
      <link rel="mask-icon" color="#f5eddb" href="/static/favicon.svg" />
      <link rel="icon" href="/static/favicon.ico" sizes="any" />
      <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />

      {/* Other */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="black" key="theme-color" />
      <link
        rel="preload"
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Regular.woff2"
        type="font/woff2"
      />
      <link
        rel="preload"
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Light.woff2"
        type="font/woff2"
      />
    </Head>
  );
};
