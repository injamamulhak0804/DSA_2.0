// function Merge_Sorted_Array(nums1, nums2, m, n) {
//   let p1 = 0;
//   let p2 = 0;
//   let nums1Copy = [...nums1];

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (nums1Copy[p1] < nums2[p2] && p1 < m)) {
//       nums1[i] = nums1Copy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }

//   console.log(nums1);
// }

// function Merge_Sorted_Array(nums1, nums2, m, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;

//   for (let i = m + n - 1; i >= 0; i--) {
//     if (p2 < 0) break;

//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       nums1[i] = nums1[p1];
//       p1--;
//     } else {
//       nums1[i] = nums2[p2];
//       p2--;
//     }
//   }

//   //   console.log(nums1);
// }

// function Merge_Sorted_Array(nums1, nums2, m, n) {
//   let p1 = 0;
//   let p2 = 0;
//   let num1C = [...nums1];

//   while(p1 > m || p2 > n){
//     if(num1C[p1] < nums2[p2]){
//         // nums1[p1] =
//     }
//   }

//   //   console.log(nums1);
// }

// function Merge_Sorted_Array(nums1, nums2, m, n) {
//   let p1 = 0;
//   let p2 = 0;
//   let n1Copy = nums1.slice(0, m);

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (n1Copy[p1] < nums2[p2] && p1 < m)) {
//       nums1[i] = n1Copy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }
//   console.log(nums1);
// }

function Merge_Sorted_Array(nums1, nums2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (nums1[p1] > nums2[p2] && p1 >= 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  console.log(nums1);
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
Merge_Sorted_Array(nums1, nums2, m, n);
