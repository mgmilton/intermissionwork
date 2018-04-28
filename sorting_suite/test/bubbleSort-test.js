const assert = require('chai').assert
const bubbleSort = require('../bubbleSort.js')

describe('array is sorted', function(){
  it('can sort a numeric array', function(){
    assert.deepEqual(bubbleSort([9,1,8]), [1,8,9])
  })

  it('can sort an alphabetic array', function(){
    assert.deepEqual(bubbleSort(['c', 'b', 'd']), ['b', 'c', 'd'])
  })
})
