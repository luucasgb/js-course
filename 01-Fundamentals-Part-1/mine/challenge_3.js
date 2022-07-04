let dolphinsAvg;
let koalasAvg;

// data 1
dolphinsAvg = (96 + 108 + 89) / 3;
koalasAvg = (88 + 91 + 110) / 3;
if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win!");
} else {
  console.log("Draw");
}

//data bonus 1
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 123) / 3;
if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log("Koalas win!");
} else {
  console.log("Draw");
}

// data bonus 2
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;
if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log("Dolphins win!");
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log("Koalas win!");
} else if (
  koalasAvg === dolphinsAvg &&
  dolphinsAvg >= 100 &&
  koalasAvg >= 100
) {
  console.log("Draw");
} else {
  console.log("Spectators lost lol");
}
