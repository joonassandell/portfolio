import { sitemap } from "./config";
// import { useMedia } from "react-use";

const asyncTimeout = (cb, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

const getSitemap = (id) =>
  id ? sitemap.find((key) => key.id === id) : sitemap;

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
function scrollTo(offset, callback) {
  // const fixedOffset = offset.toFixed();
  // const onScroll = function () {
  //   if (window.pageYOffset.toFixed() === fixedOffset) {
  //     window.removeEventListener("scroll", onScroll);
  //     callback();
  //   }
  // };

  // window.addEventListener("scroll", onScroll);
  // onScroll();
  // window.scrollTo({
  //   top: offset,
  //   behavior: "smooth",
  // });
  window.scroll({ top: offset, behavior: "smooth" });
}

// const mq = (query = "xxs") => {
//   for (const prop in mediaQueries) {
//     if (query === prop) {
//       return useMedia(`${mediaQueries[prop]}`);
//     }
//   }
// };

export { asyncTimeout, getSitemap, useInterval, scrollTo };
