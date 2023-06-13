const path = require('path');

const {
  ANALYZE,
  NODE_ENV,
  VERCEL_ENV,
  VERCEL_URL,
  NEXT_PUBLIC_ORIGIN,
  LOCAL_DEPLOYMENT,
} = process.env;
const preview = VERCEL_ENV === 'preview';
const production = NODE_ENV === 'production';
const localOrPreviewBuild = production && (preview || !VERCEL_ENV);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

/**
 * 1. This is here to make svgs import properly.
 *    https://nextjs.org/docs/basic-features/image-optimization#disable-static-imports
 */
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
  ...(!localOrPreviewBuild && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'info'],
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
  images: {
    disableStaticImages: true, // [1.]
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
