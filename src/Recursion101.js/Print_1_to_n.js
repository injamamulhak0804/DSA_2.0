let n = 10;
let x = 1;
function Recursion(x) {
  if (x > n) return;
  console.log(x);
  Recursion(++x);
}

Recursion(x);
