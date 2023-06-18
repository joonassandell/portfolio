const path = require('path');

const {
  ANALYZE,
  VERCEL_ENV,
  VERCEL_URL,
  NEXT_PUBLIC_ORIGIN,
  LOCAL_DEPLOYMENT,
} = process.env;
const preview = VERCEL_ENV === 'preview';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

const config = {
  env: {
    NEXT_PUBLIC_ORIGIN:
      preview && LOCAL_DEPLOYMENT
        ? `https://joonassandell-portfolio-joonassandell.vercel.app`
        : preview
        ? `https://${VERCEL_URL}`
        : NEXT_PUBLIC_ORIGIN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'stylesheets')],
  },
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
