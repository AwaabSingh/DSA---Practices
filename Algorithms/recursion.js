let counter = 0;

function inception() {
  if (counter > 3) {
    return 'Done';
  }
  counter++;
  inception();
}
inception();

// Factorial

function findFactorial(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

function factoralRec(number) {
  if (number === 2) return 2;
  return number * factoralRec(number - 1);
}
// findFactorial(3);
// console.log(factoralRec(3));

// Fibonacci

function fibonacciRec(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

function fibonacciLoop(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fibonacciLoop(40));

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');