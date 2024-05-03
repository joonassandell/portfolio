import { useRouter } from 'next/router';
import Head from 'next/head';

export const AppHead = () => {
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const { asPath } = useRouter();
  const title = 'Joonas Sandell — Designer & Developer';
  const description =
    'Portfolio of Joonas Sandell, UI/UX designer and creative developer of things that usually appear on screens.';

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
      <meta property="og:image" content={`${ORIGIN}/static/og-image.jpg?v=2`} />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content="Joonas Sandell" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${ORIGIN}${asPath}`} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@joonassandell" />
      <meta
        property="twitter:image"
        content={`${ORIGIN}/static/og-image.jpg?v=2`}
      />
      <meta property="twitter:site" content="@joonassandell" />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        href="/static/apple-touch-icon.png?v=2"
        sizes="180x180"
      />
      <link rel="icon" href="/static/favicon.ico?v=2" sizes="any" />
      <link rel="icon" href="/static/favicon.svg?v=2" type="image/svg+xml" />
      <link rel="mask-icon" color="#F5EDDB" href="/static/favicon.svg?v=2" />

      {/* Web app */}
      <meta name="apple-mobile-web-app-title" content="Joonas Sandell" />
      <meta name="application-name" content="Joonas Sandell" />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joonas Sandell',
            email: 'mailto:me@joonassandell.com',
            jobTitle: 'Designer & Developer',
            url: 'https://joonassandell.com',
            image: `${ORIGIN}/static/joonassandell.jpg`,
          }),
        }}
      />

      {/* Other */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#EEEAE5" key="theme-color" />
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
