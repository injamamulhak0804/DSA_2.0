//search element in an array

function searchElement(arr, num) {
  let lengthOfArray = arr.length;
  for (let i = 0; i < lengthOfArray; i++) {
    if (num == arr[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(searchElement([12, 23, 54, 21, 45, 22, 6], 12));
// console.log(searchElement([12, 23, 54, 21, 45, 22, 6], 6));
// console.log(searchElement([12, 23, 54, 21, 45, 22, 6], 60));

// return the number of -ve number in a array.

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// console.log(countNegatives([23, -67, 23, 676, -2, 54, 23, 0]));

// return largest number in an array

function findLargest(arr) {
  let largestNum = -Infinity; // -1 -Infinity arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

// console.log(findLargest([-3, -67, -23, -90]));

function findSmallest(arr) {
  let smallestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

// console.log(findSmallest([67, 23, 90]));
