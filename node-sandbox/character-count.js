function characterCounter(string) {
  var frequency = {};
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (frequency[character]){
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }
  return frequency
};

console.log(characterCounter('abc'))
module.exports = characterCounter
