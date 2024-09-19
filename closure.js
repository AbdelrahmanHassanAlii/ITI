function createCounter() {
  let count = 0; // Variable in the outer function's scope

  return function () {
    count++; // Inner function that has access to 'count'
    return count;
  };
}

const counter1 = createCounter(); // Create a new counter
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

const counter2 = createCounter(); // Create another counter
console.log(counter2()); // Output: 1 (separate closure)
console.log(counter2()); // Output: 2
