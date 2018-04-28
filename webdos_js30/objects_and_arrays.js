// Objects and Array - Reference vs Copy

// start with strings, numbers, and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;

console.log(name, name2);
name = 'wesley';

console.log(name, name2);

// Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];


// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do somethiling like this:

team[3] = 'Lux';

// the above changes the array team and the original, refrenced array players.

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!


// Why? It's beacuse that is an array reference, not an array copy/ They both pint to the same array!

// So, how do we fix this? We take a copy instead!

// one day

//or create a new array and concat the old one in

const team2 = players.slice();
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];


const team5 = Array.from(players)

// the same thing goes for objects, let's say we have a person object

// with objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99});
console.log(cap2);

//

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
dev.name = 'Wesley';
dev.social.twitter = '@coffee';
// the above changes wes.social.twitter as well

// only does one level deep
// if you need a deep level clone. cloneDeep is a method to do such.

// Poor man's deepClone
const dev2 = JSON.parse(JSON.stringify(wes));
