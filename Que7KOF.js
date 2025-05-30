function multiplyNumbers(a, b) {
  return a * b;
} 
let product = multiplyNumbers.apply(null, [5, 3]);
console.log(product); // output is 15