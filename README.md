# Joonas Sandell — Portfolio

> Portfolio of Joonas Sandell hosted in [Vercel](http://joonassandell.com). This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [The Portfolio 🚀](http://joonassandell.com)
- [Documentation](https://www.notion.so/joonassandell/Readme-690a861b326e430395ddcae8d017cbf6?pvs=4)
- [Todo & Issues](https://www.notion.so/joonassandell/09255e8ef2934c50ae4cd8994bad29d6?v=3ac6de3229434d31b434db726dc4b0fc&pvs=4)
- [Next.js Documentation](https://nextjs.org/docs)

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=joonassandell-portfolio&style=for-the-badge)

## Development

Aside from this readme, there is additional information about the whole project in [documentation](https://www.notion.so/joonassandell/Readme-690a861b326e430395ddcae8d017cbf6?pvs=4).

### Getting started

```
git clone git@github.com:joonassandell/joonassandell-portfolio.git
cd joonassandell-portfolio
npm install
npm run dev
```

### Scripts

- `npm run dev`: Run a development server and open [http://localhost:3000](http://localhost:3000) with your browser to see the result
- `npm run build`: Build the application
- `npm run preview`: Build the application and preview it locally. When previewing app, set `NEXT_PUBLIC_ORIGIN` in [.env.local](.env.local) to `http://localhost:3000`. If previewing in LAN, then apply LAN origin (e.g. `http://192.168.0.110:3000`).
- `npm run start`: Start the application in production mode. The application should be compiled with next build first.
- `npm run deploy:preview`: [Deploy preview](https://vercel.com/docs/concepts/deployments/preview-deployments) of the application to Vercel (preview is like "staging"). Note that this deploys your local copy no matter of the git commit state. [Vercel CLI](https://vercel.com/docs/cli) needs to be installed. Linking and rights to the project are obviously needed as well.

### Notes

- Using scroll offsets with locomotive-scroll seems to be almost impossible because the elements sometimes jump (e.g. Figure) depending on the vieport height and the elements height. I guess this happens because the elements are not in locomotives "in view" and don't know how to calculate the scroll position before that. Even if using scroll targets, no luck.
- `urlState` fn needs the origin url (`NEXT_PUBLIC_ORIGIN`) which needs to match the domain it's used in. Couldn't figure out how to get the origin (= protocol & domain) server side so the env variable was created. `NEXT_PUBLIC_ORIGIN` is set in `next.config.js` to set working origins for each type of deployment. Branch up-to-date views don't set this properly by design, instead, view the unique URLs. Previews that are deployed locally should use the `LOCAL_DEPLOYMENT=true` build env so that the up-to-date preview url matches.
- In development, project pages etc. may take a while because of the blurhash placeholder generation. After build everything works fine.
- Exit animations work in in `Template.js` because `App.js` contains `AnimatePresence`

#### About template transition and AnimatePresence

Template transitions have been tested like in [this article](https://www.notion.so/joonassandell/Next-js-Page-Transitions-with-Framer-Motion-Max-Schmitt-ca79b293fcc54adab0f197a53b7833ad?pvs=4) with `mode="popLayout"`: see the stripped example below. It worked, however, it created issues with the locomotive-scroll resetting the scroll position (removing the transform from `<div className="Template-inner" data-scroll-section />`) for the exiting page which is why the current implementation still exists. If the popLayout needs to be added for some reason, the scroll position probably needs to be forced e.g. w/ [WebKitCSSMatrix](https://stackoverflow.com/questions/42267189/how-to-get-value-translatex-by-javascript).

```jsx
// App.js
<AnimatePresence mode="popLayout">
  <Component {...pageProps} key={asPath} />
</AnimatePresence>;

// Template.js
export const Template = forwardRef((props, forwadedRef) => (
  <m.div ref={forwadedRef} />
));

// some-page.js
const Page = forwardRef((props, ref) => <Template ref={ref} />);
export default Page;
```

## Links

- [https://www.framer.com/docs/transition/###damping](https://www.framer.com/docs/transition/###damping)
- [https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js](https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/menuItem.js)
- [Initial template of this README](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/js/README-template.md)
- [Vercel Generated URLs](https://vercel.com/docs/concepts/deployments/generated-urls)
- [Vercel System Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables)
- [Learn Next.js](https://nextjs.org/learn)
