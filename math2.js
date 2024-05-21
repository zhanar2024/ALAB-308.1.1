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
  "Travelling at 55 mph, the trip will take " + durationAt55 + "hours"
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

console.log(gasUsageAt55.toFixed(1) + " will be used to travel at " + mpgAt55);
console.log(gasUsageAt60.toFixed(1) + " will be used to travel at " + mpgAt60);
console.log(gasUsageAt75.toFixed(1) + " will be used to travel at " + mpgAt75);
