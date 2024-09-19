//sorting array in ascending order
let array = [64, 34, 25, 12, 222, 222, 11, 11, 90];
let sortedArray = [...new Set(array)].sort((a, b) => a - b);
console.log(
  "sorted array ascending",
  array.sort((a, b) => a - b)
); // [11, 11, 12, 25, 34, 64, 90, 222, 222]
console.log("unique set", new Set(array.sort((a, b) => a - b))); // Set {11, 12, 25, 34, 64, 90, 222}
console.log("sorted unique array", sortedArray); // [11, 12, 25, 34, 64, 90, 222]

// The sort() method takes two elements from the array, compares them using the function a - b,
//  and then places them in order based on the result.
// Ascending order means smaller values should come first.
// If a - b is negative (a < b), a will be placed before b.
// If a - b is positive (a > b), a will be placed after b.
// If a - b is zero (a === b), their relative positions stay the same.

//sorting array in descending order
console.log(
  "sorted array descending",
  array.sort((a, b) => b - a)
);

// Now, if b - a is positive, b comes before a, sorting the array in descending order.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // < if you want to sort in descending order, > if you want to sort in ascending order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array)); // [11, 11, 12, 25, 34, 64, 90, 222, 222]

function bubbleSortAndRemoveDuplicates(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Filter out duplicates directly during sorting
  let index = 0;
  while (index < arr.length - 1) {
    if (arr[index] === arr[index + 1]) {
      arr.splice(index, 1); // Remove duplicate
    } else {
      index++;
    }
  }

  return arr;
}
console.log(bubbleSortAndRemoveDuplicates(array)); //[11, 12, 25, 34, 64, 90, 222]
