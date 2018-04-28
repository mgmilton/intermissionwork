const assert = require('chai').assert
const insertionSort = require('../insertionSort.js')

describe('array is sorted', function(){
  it('can sort a numeric array', function(){
    assert.deepEqual(insertionSort([9,1,8]), [1,8,9])
  })

  it('can sort an alphabetic array', function(){
    assert.deepEqual(insertionSort(['c', 'b', 'd']), ['b', 'c', 'd'])
  })
})
