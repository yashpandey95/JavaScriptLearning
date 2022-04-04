"use strict";
//arrow functions

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1995));

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));
