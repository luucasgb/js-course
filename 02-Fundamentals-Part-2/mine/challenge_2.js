"use strict";

const calcTip = (value) => {
  if (value >= 50 && value <= 300) {
    return value * 0.15;
  } else return value * 0.2;
};

// console.log(calcTip(100));
// console.log(calcTip(20));
// console.log(calcTip(500));

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);

console.log(bills);
console.log(tips);
console.log(total);
