# Joonas Sandell - Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=joonassandell-portfolio&style=for-the-badge)

# Notes

Things good to know and remember when developing.

- When previewing app, set development origin in [.env.local](.env.local) to `http://localhost:3000`. If previewing in LAN, then apply our LAN origin (e.g. `http://192.168.0.110:3000`).
- In development, hero transitions in homepage etc. may lag because of the blurhash placeholder generation. In production build everything is fine.
- Exit animations work in various components (e.g. `Template.js`) because `App.js` contains `AnimatePresence` which wraps all the pages/components.

## Links

- [Initial template of this README](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/README-template.md)
- [https://www.framer.com/docs/transition/###damping](https://www.framer.com/docs/transition/###damping)
- [https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js](https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js)
