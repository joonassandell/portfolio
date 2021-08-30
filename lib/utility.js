import { sitemap, links } from './config';

export const asyncTimeout = (cb, timeout = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

export const getSitemap = (value, type = 'primary', key = 'id') => {
  if (value) return sitemap[type].find(obj => obj[key] === value);
  return [...sitemap.primary, ...sitemap.secondary];
};

export const getLink = (value, type = 'social', key = 'id') => {
  if (value) return links[type].find(obj => obj[key] === value);
  return links;
};

export const getImage = (image, images) =>
  images.find(img => {
    const splitSrc = img.src.split('.');
    const fileName = splitSrc[0].split('/').pop();
    return image === fileName;
  });

/**
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
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

  if (typeof window !== 'undefined') {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop.trim()}`);
    return value.trim();
  }
};

export const isBoolean = value => typeof value === 'boolean';

export const isString = value => typeof value === 'string';

export const isEmptyString = value => value.trim() === '';

export const scrollLock = (enable = true, el) => {
  let scrollPosition = 0;

  if (enable) {
    scrollPosition = window.pageYOffset;
    el.style.top = `-${scrollPosition}px`;
    el.classList.add('is-scrollLock');
  } else {
    el.style.removeProperty('top');
    el.classList.remove('is-scrollLock');
    window.scrollTo(0, scrollPosition);
  }
};

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
 * https://github.com/codrops/RapidImageHoverMenu/blob/master/src/js/utils.js
 */
export const mapRange = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
