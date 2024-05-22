const totalTrip = 1500;
const fuelCost = 3;
const mpgAt55 = 30;
const mpgAt60 = 28;
const mpgAt75 = 23;
const budget = 175;

//Calculating trip duration

const durationAt55 = totalTrip / 55;
const durationAt60 = totalTrip / 60;
const durationAt75 = totalTrip / 75;
console.log(
  "Travelling at 55 mph, the trip will take " +
    durationAt55.toFixed(0) +
    "hours"
);
console.log(
  "Travelling at 60 mph, the trip will take " + durationAt60 + "hours"
);
console.log(
  "Travelling at 75 mph, the trip will take " + durationAt75 + "hours"
);

//Calculating gallons used

const gasUsageAt55 = totalTrip / mpgAt55;
const gasUsageAt60 = totalTrip / mpgAt60;
const gasUsageAt75 = totalTrip / mpgAt75;

console.log(
  gasUsageAt55.toFixed(1) +
    " gallons of gas will be needed to travel at 55 mph "
);
console.log(
  gasUsageAt60.toFixed(1) + " gallons of gas will be needed to travel at 60 mph"
);
console.log(
  gasUsageAt75.toFixed(1) + " gallons of gas will be needed to travel at 75mph"
);

//Calculating fuel cost

const fuelCost55 = gasUsageAt55 * fuelCost;
const fuelCost60 = gasUsageAt60 * fuelCost;
const fuelCost75 = gasUsageAt75 * fuelCost;

console.log(
  "You will spend: " + fuelCost55.toFixed(0) + " $ if you travel at 55 mph"
);
console.log(
  "You will spend: " + fuelCost60.toFixed(0) + " $ if you travel at 60 mph"
);
console.log(
  "You will spend: " + fuelCost75.toFixed(0) + " $ if you travel at 75 mph"
);

//Will the gas budget be enough?

switch (true) {
  case fuelCost55 <= budget:
    console.log("Driving at 55 is within budget");
    break;
  case fuelCost60 <= budget:
    console.log("Driving at 60 is within budget");
    break;
  case fuelCost75 <= budget:
    console.log("Driving at 75 is within budget");
    break;
  default:
    console.log("none of the fuel costs is within budet");
}
