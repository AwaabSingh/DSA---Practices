function fibonacciRec(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}


function fibMaster() {
  let cache = {};
  
  return function fib(n) {
       if(n in cache) {
         return cache[n]
       } else {
          if(n < 2) {
            return n
          } else {
            cache[n] = fib(n-1) + fib(n-2)
            return cache[n]
          }
       }
  }
}

const ff = fibMaster()
console.log(ff(10));