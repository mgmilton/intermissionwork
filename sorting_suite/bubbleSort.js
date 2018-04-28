var array = [5, 0, 2, 6, 9]
function bubbleSorter(array) {
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        var placeholder = array[i];
        array[i] = array[i+1];
        array[i+1] = placeholder;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

module.exports = bubbleSorter
