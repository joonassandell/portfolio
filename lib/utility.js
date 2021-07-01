import { sitemap, scrollToDuration, ease } from './config';

const asyncTimeout = (cb, timeout = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

const getSitemap = id => (id ? sitemap.find(key => key.id === id) : sitemap);

export const getImage = (image, images) =>
  images.find(img => {
    const splitSrc = img.src.split('.');
    const fileName = splitSrc[0].split('/').pop();
    return image === fileName;
  });

/**
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (callback, delay) => {
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

const getCSSVarValue = prop => {
  if (prop[0] != '-') prop = `--${prop}`;

  if (typeof window !== 'undefined') {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop}`);
  }
};

const scrollLock = (enable = true) => {
  const el = document.querySelector('html');
  let scrollPosition = 0;

  if (enable) {
    scrollPosition = window.pageYOffset;
    el.style.top = `-${scrollPosition}px`;
    el.classList.add('is-scrollLock');
  } else {
    el.classList.remove('is-scrollLock');
    window.scrollTo(0, scrollPosition);
  }
};

export { asyncTimeout, getCSSVarValue, getSitemap, scrollLock, useInterval };
