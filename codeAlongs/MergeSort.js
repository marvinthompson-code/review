// Merge Sort
// Divide and Conquer algorhythm
// Time Complexity O(nlogn)
// Space Complexity O(n)

// const arr = require("./arr");

// divide everything until single element recursively
// the algorhythm will always go left first
// start merging them into the right order via pair
// once pair is merged in right order, do it for the right pair, then order the pairs into one array
// repeat

// Bubble Sort
// Time Complexity O(n^2) quadratic
// Space Complexty is O(1)

// Merge sort is more efficient time wise
// Bubble sort is more efficient space wise

// example !5 = 1*2*3*4*5

// recursion basics
// basecase
const factorialRecursive = (num) => {
  if (num < 0) return -1;
  if (num <= 1) return 1;
  return num * factorialRecursive(num - 1);
};

// console.log(factorialRecursive(5))

const halveArray = (arr) => {
  if (arr.length < 2) return arr;

  // Mid point of the array and halves
  let half = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, half);
  const rightSide = arr.slice(half, arr.length);
  return {
    left: leftSide,
    right: rightSide,
  };
};

// const exampleArr = [6, 5, 3, 1, 8, 7, 2, 4];

// const arr1 = [1, 3, 4, 7];
// const arr2 = [2, 4, 5, 5, 5, 5, 6, 8];

const mergeSortedArrays = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  // while there are still elements to merge
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr2[j]);
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

// console.log(mergeSortedArrays(arr1, arr2));

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  // Mid point of the array and halves
  let half = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, half);
  const rightSide = arr.slice(half, arr.length);
  return mergeSortedArrays(mergeSort(leftSide), mergeSort(rightSide));
};

//   let mergedSortLeft = mergeSort(left)
//   let mergedSortRight = mergeSort(right)

const mergeSort2 = (arr) => {
  if (arr.length < 2) return arr;

  // Mid point of the array and halves
  let half = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, half);
  const rightSide = arr.slice(half, arr.length);

  let sortedLeft = mergeSort(leftSide);
  let sortedRight = mergeSort(rightSide);
  return mergeSortedArrays(sortedLeft, sortedRight);
};

console.log(mergeSort2([6,5,3,1,5,8,7,5,2,5,4]))