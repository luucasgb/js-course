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

// Equality operators: == vs ===

// Logical operators

// Switch statement

// Ternary operator
