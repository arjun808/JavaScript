function memo(fun) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.key) {
      cache[key] = fun(...args);
    } else {
      return cache.key;
    }
  };
}
