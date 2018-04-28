// Array Cardio Day 1
 const inventors = [
   {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
   {first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
   {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
   {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
   {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
   {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
   {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilarie', 'Bellow, Saul', 'Benchley, Robert', 'Beneson, Peter', 'Ben-Gurrion, David', 'Benhajamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Berman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Toney', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those whose were born in the 1500's
const fifteen_one_line = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))

const fifteen_multiline = inventors.filter(function(inventor){
  if(inventor.year >= 1500 && inventor.year <= 1599){
    return true;
  }
});
console.table(fifteen_multiline)

// Array.prototype.map()
// 2. Return an array of the inventory first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//bubble sort
const bubbleOrdered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(bubbleOrdered)

const bubbleOrderedOneLine = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(bubbleOrderedOneLine)


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var totalYearsForLoop = 0;

for (var i = 0; i < inventors.length; i++) {
    totalYearsForLoop += inventors[i].year
}

console.log(totalYearsForLoop)


const totalYearsReduce = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYearsReduce)

// 5. Sort the inventors by years lived

const inventorsByAge = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);

console.table(inventorsByAge)

const oldest = inventors.sort(function(a, b) {
  const lastPerson = a.passed - a.year;
  const nextPerson = b.passed - b.year;
  return lastPerson > nextPerson ? -1 : 1;
});

console.table(oldest)

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll(''));
//
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.log(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const dataCounter = data.reduce(function(obj, item) {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
