function createCounter() {
  let count = 0;  
  return {
    increment() {
      return ++count;
    },
    getCount() {
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment()); //output is 1
console.log(counter.increment()); //output is 2
console.log(counter.getCount());  //output is 2