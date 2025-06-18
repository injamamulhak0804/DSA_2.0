let arr = [1, 2, 3, 4, 5];

function Sum_All_Element_arr(n) {
  if (n == 0) return arr[n];
  return arr[n] + Sum_All_Element_arr(n - 1);
}

console.log(Sum_All_Element_arr(arr.length - 1));
