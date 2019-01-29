//const companies = [
//{
//name: "Company One",
//category: "Finance",
//start: 1981,
//end: 2003
//},
//{
//name: "Company Two",
//category: "Retail",
//start: 1992,
//end: 2008
//},
//{
//name: "Company Three",
//category: "Auto",
//start: 1999,
//end: 2007
//},
//{
//name: "Company Four",
//category: "Retail",
//start: 1989,
//end: 2010
//},
//{
//name: "Company Five",
//category: "Technology",
//start: 2009,
//end: 2014
//},
//{
//name: "Company Six",
//category: "Finance",
//start: 1987,
//end: 2010
//},
//{
//name: "Company Seven",
//category: "Auto",
//start: 1986,
//end: 1996
//},
//{
//name: "Company Eight",
//category: "Technology",
//start: 2011,
//end: 2016
//},
//{
//name: "Company Nine",
//category: "Retail",
//start: 1981,
//end: 1989
//}
//];

//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// old for loop
//for (let i = 0; i < companies.length; i++) {
//console.log(companies[i]);
//}

//forEach
//companies.forEach(function(company) {
////console.log(company);
//console.log(company.category);
//});

//filter
//let canDrink = [];
//for (let i = 0; i < ages.length; i++) {
//if (ages[i] >= 21) {
//canDrink.push(ages[i]);
//}
//}
//console.log(canDrink);

//const canDrink = ages.filter(function(age) {
//if (age >= 21) {
//return true;
//}
//});

//const canDrink = ages.filter(age => age >= 21);

//console.log(canDrink);

//filter out retail companies
//const isRetail = companies.filter(function(company) {
//if (company.category === "Retail") {
//return true;
//}
//});
//const isRetail = companies.filter(company => company.category === "Retail");

//console.log(isRetail);

//filter 80's companies
//const eightiesComp = companies.filter(function(company) {
//if (company.start < 1990 && company.start > 1979) {
//return true;
//}
//});

//const eightiesComp = companies.filter(
//company => company.start >= 1980 && company.start <= 1989
//);
//console.log(eightiesComp);

// companies that lasted over 10 years

//const lastedTenYears = companies.filter(
//company => company.end - company.start >= 10
//);

//console.log(lastedTenYears);

// map creates new array from current array
// create new array of company names
//const compName = companies.map(function(company) {
//return company.name;
//});
//console.log(compName);

//const testMap = companies.map(function(company) {
//return `${company.name} [${company.start} - ${company.end}]`;
//});

//const testMap = companies.map(
//company => `${company.name} [${company.start} - ${company.end}]`
//);
//console.log(testMap);
//compNames = companies.map(company => company.name);
//console.log(compNames);

// square root of ages array in new array
//const square = ages.map(age => Math.sqrt(age));
//console.log(square);
//ages array times 2
//const timesTwo = ages.map(age => age * 2);
//console.log(timesTwo);
//const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
//console.log(ageMap);

//sort companies from earliest start year
//const sortedCompaines = companies.sort(function(c1, c2) {
//if (c1.start > c2.start) {
//return 1;
//} else {
//return -1;
//}
//});

//const sortedCompaines = companies.sort((c1, c2) =>
//c1.start > c2.start ? 1 : -1
//);
//console.log(sortedCompaines);

// sort ages array low to high
//const sortedAge = ages.sort((a, b) => a - b);
//console.log(sortedAge);

// reduce method
//
// add ages array together
//let ageSum = 0;
//for (let i = 0; i < ages.length; i++) {
//ageSum += ages[i];
//}
//console.log(ageSum);
//const addedAges = ages.reduce(function(total, age) {
//return total + age;
//}, 0);
//console.log(addedAges);

//const addedAges = ages.reduce((total, age) => total + age, 0);
//console.log(addedAges);

// get the total years in business of companies

//const totalYears = companies.reduce(function(total, company) {
//return total + (company.end - company.start);
//}, 0);
//console.log(totalYears);

//const totalYears = companies.reduce(
//(total, company) => total + (company.end - company.start),
//0
//);
//console.log(totalYears);
//
//combine methods
//const combined = ages
//.map(age => age * 2)
//.filter(age => age >= 40)
//.sort((a, b) => a - b)
//.reduce((a, b) => a + b, 0);
//console.log(combined);

//javascript higher order functions - Filter, Map, Sort & Reduce

const startups = [
  {
    name: "Epicop",
    platform: "Mobile dev",
    location: "Chanchalguda",
    year: 95
  },
  { name: "Sizmic", platform: "Web dev", location: "Hyderabad", year: 80 },
  {
    name: "Plugmatter",
    platform: "Wordpress",
    location: "Hyderabad",
    year: 70
  },
  {
    name: "Mazik Global",
    platform: "Desktop dev",
    location: "Bangalore",
    year: 42
  },
  { name: "Ion Tech", platform: "Hybrid dev", location: "Pune", year: 45 }
];

const ages = [33, 43, 18, 16, 15, 10, 25, 30, 40];

//for (let i = 0; i < startups.length; i++) {
//console.log(startups[i]);
//}

//const startup = startups.forEach(function(start) {
//console.log(start);
//});

//const startup = startups.forEach(start => console.log(start));

//filter
//const filteredValue = startups.filter(function(startup) {
//if (startup.year > 85) {
//console.log(startup);
//}
//});
//const filteredValue = startups.filter(startup =>
//startup.year > 60 ? console.log(startup) : console.log("ohh shit!")
//);

// map
//const mapped = startups.map(function(startup) {
//console.log(startup.name);
//});
//const mapped = startups.map(startup =>
//console.log(`${startup.name} [${startup.location} - ${startup.platform}]`)
//);

// sort
//const sorted = ages.sort(function(a, b) {
//if (a > b) {
//console.log("Hurrah: " + a);
//} else {
//console.log("shit: " + b);
//}
//});

//const sorted = ages.sort((a, b) =>
//a > b ? console.log("Greater: " + a) : console.log("Less: " + b)
//);

//REDUCE
//const ageSum = ages.reduce(function(total, age) {
//return total+age;
//}, 0);

//console.log(ageSum);

//const ageSum = ages.reduce((total,age) => total+age,0);

//console.log(ageSum);

// Functional JavaScript: Map,forEach,Reduce,Filter

//const names = ["Theo", "Jeff", "Robert", "Matt"];
//const numbers = [10, 15, 20, 100, -5, -20];

//const upperCaseName = names.map(function(name) {
//return name.toLocaleUpperCase();
//});
//const upperCaseName = names.map(name => name.toUpperCase());

//console.log(upperCaseName);

//const noNeg = numbers.filter(function(num) {
//return num >= 0;
//});

//console.log(noNeg);

//const loopNames = names.forEach(function(name, index, array) {
//console.log("name is " + name + " and index at name is " + index);
//});

//console.log(loopNames);

//const SumNum = numbers.reduce(function(num, index) {
//return num + index;
//});

//console.log(SumNum);

const animals = [
  { name: "dog", legs: 4, mamal: true },
  { name: "dolphin", legs: 0, mamal: true },
  { name: "eagle", legs: 2, mamal: true },
  { name: "elephant", legs: 4, mamal: true },
  { name: "robin", legs: 2, mamal: true },
  { name: "cat", legs: 4, mamal: true },
  { name: "salmon", legs: 0, mamal: false }
];

//const onlyMamals = animals.filter(function(animal) {
//return animal.mamal === true;
//});
//const onlyMamals = animals.filter(animal => animal.mamal === true);

//console.log(onlyMamals);

// mamal only uppercase
//const onlyMamUpper = animals
//.filter(animal => animal.mamal)
//.map(animal => animal.name.toUpperCase());

//console.log(onlyMamUpper);

//same thing but using reduce
//const onlyMamUpper = animals.reduce((acc, animal) => {
//if (animal.mamal) {
//acc.push(animal.name.toUpperCase());
//}
//return acc;
//}, []);

//console.log(onlyMamUpper);

// reduce numbers
const nums = [1, 2, 3, 4, 5];

//let sum = 0;
//for (let num = 0; num < nums.length; num++) {
//sum += element = nums[num];
//}
//const sum = nums.reduce((sum, num) => sum + num, 0);

//console.log(sum);
