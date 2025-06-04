function Pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += " *";
    }
    console.log(row);
  }
}

// Pattern1(5);

function Pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += " *";
    }
    console.log(row);
  }
}

// Pattern2(5);

function Pattern3(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

// Pattern3(5);

function Pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// Pattern4(5);

function Pattern5(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// Pattern5(5);

function Pattern6(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " *";
    }
    console.log(row);
  }
}

// Pattern6(5);

function Pattern7(n) {
  for (let i = 0; i < n; i++) {
    let print = "";

    //space
    for (let j = 0; j < n - (i + 1); j++) {
      print += "-";
    }

    for (let j = 0; j < i + 1; j++) {
      print += "*";
    }

    console.log(print);
  }
}

// Pattern7(5);

function Pattern8(n) {
  let printValue = 1;
  for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j <= i; j++) {
      print += printValue;
      printValue = printValue == 1 ? 0 : 1;
    }

    console.log(print);
  }
}

Pattern8(5);
