import { sitemap, scrollToDuration, ease } from './config';

const asyncTimeout = (cb, timeout = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

const getSitemap = id => (id ? sitemap.find(key => key.id === id) : sitemap);

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
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

// https://stackoverflow.com/a/55686711
function scrollTo(offset, scroll, mq, callback) {
  if (mq) {
    scroll &&
      scroll.scrollTo(offset, {
        duration: scrollToDuration,
        ease,
        callback: () => {
          callback ? callback() : false;
        },
      });
  } else {
    window.scroll({ top: offset, behavior: 'smooth' });
    callback ? callback() : false;
  }
}

// const mq = (query = "xxs") => {
//   for (const prop in mediaQueries) {
//     if (query === prop) {
//       return useMedia(`${mediaQueries[prop]}`);
//     }
//   }
// };

const getCSSVarValue = prop => {
  if (prop[0] != '-') prop = `--${prop}`;

  if (typeof window !== 'undefined') {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop}`);
  }
};

export { asyncTimeout, getSitemap, useInterval, scrollTo, getCSSVarValue };
