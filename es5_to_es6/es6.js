const add3 = (number) => number + 3;

console.log(add3(19));

const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(2,1));

const averageOfArray = array => array.reduce( (total, number) => total + number) / array.length;

console.log(averageOfArray([5,10,15]))
