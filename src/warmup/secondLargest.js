//find the second largest

// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let length = arr.length;
//   let secondlargest = -Infinity;

//   for (let i = 0; i < length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   //   console.log(largest);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < largest && arr[i] > secondlargest) {
//       secondlargest = arr[i];
//     }
//   }

//   return secondlargest;
// }

function findSecondLargest(arr) {
  if (arr.length < 2) return null;
  let largest = -Infinity;
  let length = arr.length;
  let secondlargest = -Infinity;

  for (let i = 0; i < length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    }
    if (arr[i] != largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }

  return secondlargest;
}

console.log(findSecondLargest([12, 90, 22, 22, 23, 6, 90]));
