const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins.");
  }
};

//Test 1
let dolphinsAvg = calcAverage(44, 23, 71);
let koalasAvg = calcAverage(65, 64, 49);
let data = checkWinner(dolphinsAvg, koalasAvg);

// Test 2
dolphinsAvg = calcAverage(85, 54, 41);
koalasAvg = calcAverage(23, 34, 27);
data = checkWinner(dolphinsAvg, koalasAvg);
