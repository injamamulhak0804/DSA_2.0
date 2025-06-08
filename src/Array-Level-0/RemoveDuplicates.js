function Remove_Duplicates(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > num[x]) {
      x += 1;
      num[x] = num[i];
    }
  }
  return x + 1;
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const res = Remove_Duplicates(nums);
console.log(res);

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
