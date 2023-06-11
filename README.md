# Joonas Sandell — Portfolio

> Portfolio of Joonas Sandell hosted in [Vercel](http://joonassandell.com). This [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [The Portfolio 🚀](http://joonassandell.com)
- [Documentation](https://www.notion.so/joonassandell/Readme-690a861b326e430395ddcae8d017cbf6?pvs=4)
- [Todo & Issues](https://www.notion.so/joonassandell/09255e8ef2934c50ae4cd8994bad29d6?v=3ac6de3229434d31b434db726dc4b0fc&pvs=4)
- [Next.js Documentation](https://nextjs.org/docs)

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=joonassandell-portfolio&style=for-the-badge)

## Development

Aside from this readme, there is additional information about the whole project in [documentation](https://www.notion.so/joonassandell/Readme-690a861b326e430395ddcae8d017cbf6?pvs=4).

### Getting started

1. Clone this repository `git clone git@github.com:joonassandell/joonassandell-portfolio.git` and navigate to the directory
2. `npm install`
3. `npm run dev`

### Scripts

- `npm run dev`: Run a Next.js development server and open [http://localhost:3000](http://localhost:3000) with your browser to see the result
- `npm run build`: Build the application
- `npm run preview`: Build the application and preview it locally. When previewing app, set `NEXT_PUBLIC_ORIGIN` in [.env.local](.env.local) to `http://localhost:3000`. If previewing in LAN, then apply LAN origin (e.g. `http://192.168.0.110:3000`).
- `npm run start`: Start the application in production mode. The application should be compiled with next build first.
- `npm run deploy:preview`: [Deploy preview](https://vercel.com/docs/concepts/deployments/preview-deployments) of the application to Vercel (preview is like "staging"). Note that this deploys your local copy no matter of the git commit state.

### Issues

- Oras, last drop is not animated to the end. Possibly related to locomotive-scroll/react-locomotive-scroll updates. Noticed in production.

### Notes

- Previews are deployed always locally so that the preview url stays the same. `urlState` fn needs the origin url (`NEXT_PUBLIC_ORIGIN`) which needs to match the domain it's used in. Couldn't figure out how to get the origin (= protocol & domain) server side so the env variable was created.
- In development, project pages etc. may take a while because of the blurhash placeholder generation. After build build everything is fine.
- Exit animations work in various components (e.g. `Template.js`) because `App.js` contains `AnimatePresence` which wraps all the pages/components.

## Links

- [https://www.framer.com/docs/transition/###damping](https://www.framer.com/docs/transition/###damping)
- [https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js](https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js)
- [Initial template of this README](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/js/README-template.md)
- [Learn Next.js](https://nextjs.org/learn)
