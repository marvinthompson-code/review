const { arr } = require("./arr");
const binarySearch = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let current = Math.floor((left + right) / 2);
    if (arr[current] === true && arr[current - 1] === false) return current;
    if (arr[current] === false) {
      left = current + 1;
    } else {
      right = current - 1;
    }
  }
  return -1;
};
console.log(binarySearch(arr));
