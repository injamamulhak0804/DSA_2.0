// function recursion(n) {
//   if (n === 0) return;
//   console.log(n);
//   n = n - 1;
//   recursion(n);
// }
// recursion(10);

function recursion(n) {
  if (n < 1) return;
  console.log(n);
  recursion(--n);
}
recursion(10);
