const path = require('path');

const { ANALYZE, VERCEL_ENV, VERCEL_URL, NEXT_PUBLIC_ORIGIN } = process.env;
const preview = VERCEL_ENV === 'preview';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

const config = {
  env: {
    NEXT_PUBLIC_ORIGIN: preview ? `https://${VERCEL_URL}` : NEXT_PUBLIC_ORIGIN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
  experimental: { optimizeCss: true },
  ...(VERCEL_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warning', 'info'],
      },
    },
  }),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*).(jpe?g|png|ico|webp|svg|xml|ttf|woff2?)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(config);
