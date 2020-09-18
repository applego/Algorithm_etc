'use strict';

const assert = require('assert');

export default class Test{
  constructor(public questionname?: string) {

  }
  expect(isCorrect: boolean, msg: string) {
    if (isCorrect)
      console.log('Correct');
    else {
      console.log(msg);
    }
  }
  assert_equals(a: any, b: any,msg?: string) {
    try {
      assert.deepEqual(a, b);
      console.log('○---Correct');
    }
    catch (e) {
      if (msg) {
        console.log(msg);
      } else {
        console.log('✕---Error');
      }
      console.log('ans :'+a);
      console.log('exp :'+b);
    }
  }
}

// module.exports = Test