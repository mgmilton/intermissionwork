function fibonacciSequence(iterations){
  let num1 = 0
  let num2 = 1
  let num3 = 0
  for (var i =0; i < iterations; i++){
    num3 = num2 + num1;
    console.log(num1, num2, num3);
    num1 = num2;
    num2 = num3;
  }
}

console.log( fibonacciSequence(15) );
module.exports = fibonacciSequence
