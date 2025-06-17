function Sum_first_n(num) {
  if (num < 1) return 0;
  return num + Sum_first_n(num - 1);
}

console.log(Sum_first_n(5));
