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

const 

// Array Cardio Day 2

// Objects and Arrays

// Tally String Times with Reduce
