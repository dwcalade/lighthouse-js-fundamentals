function ageCalculator(name, yearOfBirth, currentYear) {
  let age = 0;
  age = currentYear - yearOfBirth;
  let ageString = name + ' is ' + age + ' years old.';
  return ageString;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));