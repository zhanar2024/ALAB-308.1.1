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

//Arithmetic chain
const result = (n2 - n1) * n3;
console.log("The result of the arithmetic chain is: " + result);

//Finding the remainder
const remainder = result % n4;
console.log(
  "The remainder of the arithmetic chain divided by 4th number is: " + remainder
);

//Checking is over 25
const isOver25 = result > 25;
console.log("The result is greater than 25: " + isOver25);
