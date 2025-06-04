var reverse = function (x) {
  let xCopy = x;
  let rev = 0;
  x = Math.abs(x);
  while (x > 0) {
    let lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;

  return xCopy > 0 ? rev : -rev;
};
reverse(-12233);

// rember the [32 bit, -32 bit - 1] thing
