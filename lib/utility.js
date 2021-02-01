import { sitemap } from "./config";

const asyncTimeout = (cb, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

const getSitemap = (id) =>
  id ? sitemap.find((key) => key.id === id) : sitemap;

export { asyncTimeout, getSitemap };
