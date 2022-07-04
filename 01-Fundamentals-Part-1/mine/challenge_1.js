let markHeight, markMass, johnHeight, johnMass;
let markBMI, johnBMI;
let markHigherBMI;

// test data 1
markHeight = 1.69;
markMass = 78;
johnHeight = 1.95;
johnMass = 92;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// test data 2
markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
