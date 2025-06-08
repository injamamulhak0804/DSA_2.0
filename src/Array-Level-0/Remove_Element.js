function Remove_Element(num, val) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] != val) {
      num[x] = num[i];
      x += 1;
    }
  }
  return x;
}
const nums = [3, 2, 2, 3];
let val = 3;
let res = Remove_Element(nums, val);
console.log(res);

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
