const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5

const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log("All numbers are divisible by 5: " + allDivisibleBy5);

//Check if the first number is larger than the last
const isLargerThanLast = n1 > n4;
console.log("The first number is larger than the last: " + isLargerThanLast);
