function Reverse_String(str) {
  let n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = str[i];
    str[i] = str[n - 1 - i];
    str[n - 1 - i] = temp;
  }
  return str;
}
console.log(Reverse_String(["h", "e", "l", "l", "o"]));
