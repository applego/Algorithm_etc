'use strict';

const assert = require('assert');

class Test{
  constructor() {
    this.question = 'test';
  }
  expect(isCorrect, msg) {
    if (isCorrect)
      console.log('Correct');
    else {
      console.log(msg);
    }
  }
  assert_equals(a, b) {
    try {
      assert.deepEqual(a, b);
      console.log('Correct');
    }
    catch (e) {
      console.log('Error');
      console.log(a);
      console.log(b);
    }
  }
}

module.exports = Test