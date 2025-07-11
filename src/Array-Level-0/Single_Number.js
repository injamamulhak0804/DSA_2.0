function SingleNumber(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  //   console.log("hash length: ", hash);

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == 1) {
      console.log(arr[i]);
    }
  }
}


SingleNumber([1, 2, 3, 4, 3, 2, 1]);
