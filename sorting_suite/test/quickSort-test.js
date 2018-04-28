const assert = require('chai').assert
const quickSort = require('../quickSort.js')

describe('array is sorted', function(){
  it('can sort a numeric array', function(){
    assert.deepEqual(quickSort([9,1,8]), [1,8,9])
  })

  it('can sort an alphabetic array', function(){
    assert.deepEqual(quickSort(['c', 'b', 'd']), ['b', 'c', 'd'])
  })
})
