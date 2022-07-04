//JavaScript Fundamentals - Part 1

// Values and Variables
const country = "Brazil";
const continent = "South America";
let population = 212600000;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);

// Data Types
const isIsland = false;
let language;
console.log(`${typeof isIsland}`);
console.log(`${typeof population}`);
console.log(`${typeof country}`);
console.log(`${typeof language}`);

// let, const and var
// let -> mutable
language = "Portuguese";
// const -> immutable
// continent = "Europe";

// Basic operators
let halfPopulation = population / 2;
console.log(`Half of Brazil's population is ${halfPopulation}`);
console.log(population++);
const largerThanFinland = population > 6000000;
console.log(
  `Is Brazil's population larger than Finland's? ${largerThanFinland}`
);
const smallerThanAverage = population < 33000000;
console.log(
  `Is Brazil's population smaller than the average country population? ${smallerThanAverage}`
);
console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}`
);

// Strings and template literals
console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}`
);

// Taking decisions: if/else statements
if (population > 33000000) {
  console.log(`Brazil's population is above average`);
} else {
  console.log(
    `Brazil's population is ${33000000 - population} people below average`
  );
}

// Type conversion and coercion
// '9' - '5'; -> should return 4
console.log("9" - "5");
// '19' - '13' + '17'; -> should return '617'
console.log("19" - "13" + "17");
// '19' - '13' + 17; -> should return 23
console.log("19" - "13" + 17);
// '123' < 57; -> should return false
console.log("123" < 57);
// 5 + 6 + '4' + 9 - 4 - 2; -> should return 1143
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality operators: == vs ===
// let numNeighbours = prompt(
//   "How many neighbour countries does your contry have?"
// );
// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border");
// } else if (Number(numNeighbours) > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders.");
// }

// Logical operators
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

// Switch statement
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd place.");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too.");
    break;
}

// Ternary operator
