function count_Digit(num) {
  if (num == 0) return 1;
  let n = Math.abs(num);
  let count = 0;
  while (n > 0) {
    // console.log(n);
    n = Math.round(n / 10);
    count += 1;
  }
  console.log("count: ", count);
}
count_Digit(-120983);
