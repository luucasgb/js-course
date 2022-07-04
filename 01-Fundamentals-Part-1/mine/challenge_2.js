let markHeight, markMass, johnHeight, johnMass;
let markBMI, johnBMI;
let markHigherBMI;

markHeight = 1.69;
markMass = 78;
johnHeight = 1.95;
johnMass = 92;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
  `John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`;
}
