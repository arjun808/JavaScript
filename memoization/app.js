function memo(fun) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fun(...args);
    }
    return cache[key];
  };
}

function temp(num1, num2) {
  for (let i = 0; i < 5000; i++) {
    // Simulate some work
  }
  return num1 * num2;
}

console.log(temp(1, 2)); // Prints: 2

const memoTemp = memo(temp);

console.log(memoTemp(1, 2)); // Prints: 2 (first call, calculates and caches the result)
console.log(memoTemp(1, 2)); // Prints: 2 (second call, retrieves from cache)
