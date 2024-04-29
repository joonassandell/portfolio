import { SITEMAP, LINKS } from './config';

export const asyncTimeout = (cb, timeout = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

export const getSitemap = (value, type = 'primary', key = 'id') => {
  if (value) return SITEMAP[type].find(obj => obj[key] === value);
  return [...SITEMAP.primary, ...SITEMAP.secondary];
};

export const getLink = (value, type = 'social', key = 'id') => {
  if (value) return LINKS[type].find(obj => obj[key] === value);
  return LINKS;
};

export const getImage = (image, images) =>
  images.find(img => {
    const splitSrc = img.src.split('.');
    const fileName = splitSrc[0].split('/').pop();
    return image === fileName;
  });

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const getCSSVarValue = prop => {
  if (prop[0] != '-') prop = `--${prop}`;

  if (!isServer) {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop.trim()}`);
    return value.trim();
  }
};

export const isServer = typeof window === 'undefined';

export const isBrowser = !isServer;

export const isBoolean = value => typeof value === 'boolean';

export const isString = value => typeof value === 'string';

export const isEmptyString = value => value.trim() === '';

export const getDistMetric = (x, y, x2, y2) => {
  const xDiff = x - x2;
  const yDiff = y - y2;
  return xDiff * xDiff + yDiff * yDiff;
};

export const getClosestEdge = (x, y, w, h) => {
  const topEdgeDist = getDistMetric(x, y, w / 2, 0);
  const bottomEdgeDist = getDistMetric(x, y, w / 2, h);
  const min = Math.min(topEdgeDist, bottomEdgeDist);
  return min === topEdgeDist ? 'top' : 'bottom';
};

/**
 * Map number x from range [a, b] to [c, d]
 */
export const mapRange = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
