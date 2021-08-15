# Joonas Sandell - Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Notes

- In development, hero transitions in homepage etc. may lag because of the blurhash placeholder generation. In production build everything is fine.
- Exit animations work in various components because `_app.js` contains `AnimatePresence` which wraps all the pages/components.

## Links

- [Initial template of this README](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/README-template.md)
- [https://www.framer.com/docs/transition/###damping](https://www.framer.com/docs/transition/###damping)
- [Inspired by: https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js](https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js)
