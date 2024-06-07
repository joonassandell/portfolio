import { type AppHeadProps } from './';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const AppHead = ({ themeColor }: AppHeadProps) => {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
  const { asPath } = useRouter();
  const title = 'Joonas Sandell — Designer & Developer';
  const description =
    'Portfolio of Joonas Sandell, UI/UX designer and creative developer of things that usually appear on screens.';

  return (
    <Head>
      {/* Common */}
      <title>{title}</title>
      <meta content={description} key="description" name="description" />

      {/* Open Graph */}
      <meta content={title} key="og:title" property="og:title" />
      <meta
        content={description}
        key="og:description"
        property="og:description"
      />
      <meta
        content={`${APP_URL}/static/og-image.jpg?v=2`}
        property="og:image"
      />
      <meta content="en" property="og:locale" />
      <meta content="Joonas Sandell" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content={`${APP_URL}${asPath}`} property="og:url" />

      {/* Twitter */}
      <meta content={title} key="twitter:title" property="twitter:title" />
      <meta
        content={description}
        key="twitter:description"
        property="twitter:description"
      />
      <meta content="summary_large_image" property="twitter:card" />
      <meta content="@joonassandell" property="twitter:creator" />
      <meta
        content={`${APP_URL}/static/og-image.jpg?v=2`}
        property="twitter:image"
      />
      <meta content="@joonassandell" property="twitter:site" />

      {/* Icons */}
      <link
        href="/static/apple-touch-icon.png?v=2"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link href="/static/favicon.ico?v=2" rel="icon" sizes="any" />
      <link href="/static/favicon.svg?v=2" rel="icon" type="image/svg+xml" />
      <link color="#F5EDDB" href="/static/favicon.svg?v=2" rel="mask-icon" />

      {/* Web app */}
      <meta content="Joonas Sandell" name="apple-mobile-web-app-title" />
      <meta content="Joonas Sandell" name="application-name" />

      {/* Schema.org */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            email: 'mailto:me@joonassandell.com',
            image: `${APP_URL}/static/joonassandell.jpg`,
            jobTitle: 'UI/UX designer and Front-end developer',
            name: 'Joonas Sandell',
            url: 'https://joonassandell.com',
          }),
        }}
        type="application/ld+json"
      />

      {/* Other */}
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <meta
        content={themeColor ? themeColor : '#000000'}
        key="theme-color"
        name="theme-color"
      />
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
        href="/static/fonts/Px-Grotesk-Regular-Italic.woff2"
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
