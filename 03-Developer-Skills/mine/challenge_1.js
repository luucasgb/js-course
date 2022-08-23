// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
  let forecastResult = "...";
  for (let i = 0; i < arr.length; i++) {
    forecastResult += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(forecastResult);
};

console.log("First dataset");
printForecast(data1);
console.log("Second dataset");
printForecast(data2);
