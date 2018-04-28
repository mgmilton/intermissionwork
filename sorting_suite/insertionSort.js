function insertionSort(array) {
  var j, key, i, length

  for (j =1, length = array.length; j < length; j++) {
    key = array[j];
    i = j - 1;
    while (i >= 0 && array[i] > key) {
      array[i+1] = array[i];
      i = i -1
    }
    array[i+1] = key
  }
  return array;
}

module.exports = insertionSort
