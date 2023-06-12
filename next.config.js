const path = require('path');

/**
 * 1. This is here to make svgs import properly.
 *    https://nextjs.org/docs/basic-features/image-optimization#disable-static-imports
 */
module.exports = {
  env: {
    NEXT_PUBLIC_ORIGIN:
      process.env.VERCEL_ENV === 'preview' && process.env.LOCAL_DEPLOYMENT
        ? `https://joonassandell-portfolio-joonassandell.vercel.app`
        : process.env.VERCEL_ENV === 'preview'
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_ORIGIN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'stylesheets')],
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'info'],
    },
  },
  experimental: { optimizeCss: true },
  webpack(config, { defaultLoaders }) {
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
