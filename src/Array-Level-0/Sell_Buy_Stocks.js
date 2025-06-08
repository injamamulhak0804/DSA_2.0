// function Buy_Sell_Stocks(num) {
//   let max_profit = 0;
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i; j < num.length; j++) {
//       let profit = num[j] - num[i];
//       if (profit > max_profit) {
//         max_profit = profit;
//       }
//     }
//   }
//   console.log("max_profit", max_profit);
// }

// Buy_Sell_Stocks([7, 1, 5, 3, 6, 4]);

function Buy_Sell_Stocks(num) {
  let max_profit = 0;
  let min_Buy = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] < min_Buy) {
      min_Buy = num[i];
    }
    let profit = num[i] - min_Buy;
    if (profit > max_profit) max_profit = profit;
  }
  console.log("max_profit", max_profit);
}

Buy_Sell_Stocks([7, 1, 5, 3, 6, 4]);
