const assert = require('chai').assert
const mergeSort = require('../mergeSort.js')

describe('array is sorted', function(){
  it('can sort a numeric array', function(){
    assert.deepEqual(mergeSort([9,1,8]), [1,8,9])
  })

  it('can sort an alphabetic array', function(){
    assert.deepEqual(mergeSort(['c', 'b', 'd']), ['b', 'c', 'd'])
  })
})
