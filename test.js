import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

import { answer as answer20210224 } from './AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram';

function run() {
  console.log('Hello world');
  describe('../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram.js', function () {
    it('BasicTests', function () {
      let input = '\\\\//';
      let output = `4
1 4`;
      assert.deepEqual(answer20210224(input), output);
      input = '\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\';
      output = `35
5 4 2 1 19 9`;
      assert.deepEqual(answer20210224(input), output);
    });
  });
}

// 2021/02/24 18:35
