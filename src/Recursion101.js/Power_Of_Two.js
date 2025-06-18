function Power_Of_Two(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;

  return Power_Of_Two(n / 2);
}

console.log(Power_Of_Two(6));
