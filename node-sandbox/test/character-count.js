const assert = require('chai').assert
const characterCounter = require('../character-count')

describe('characters are counted', function(){
  context('counter', function(){
    it('it can add count characters in a string', function(){
      assert.deepEqual(characterCounter('abc'), { a: 1, b: 1, c: 1 })
    })
  })
})
