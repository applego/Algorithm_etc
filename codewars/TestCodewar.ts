'use strict';

const assert = require('assert');

export default class Test{
  constructor(public questionname?: string) {

  }
  static expect(isCorrect: boolean, msg: string) {
    if (isCorrect)
      console.log('Correct');
    else {
      console.log(msg);
    }
  }
  static assert_equals(a: any, b: any,msg?: string) {
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
  static assert_equals_param_func(func: (prm: any) => any, n: any, expected: any) {
    this.assert_equals(func(n), expected);
  }
}

// module.exports = Test
