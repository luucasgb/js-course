let tip, bill;

//value 1
bill = 275;
tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
);

//value 2
bill = 40;
tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
);

//value 3
bill = 430;
tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
);
