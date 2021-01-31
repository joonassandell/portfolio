const asyncTimeout = (cb, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

export { asyncTimeout };
