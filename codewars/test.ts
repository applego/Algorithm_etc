// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test
// 2021/03/05 ファイル名変更 test_till20210305.ts

import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

// 2021/03/05 21:54
import { answer as a20210305_2 } from '../AtCoder/abc002B - 罠';
describe('../AtCoder/abc002B - 罠.ts', () => {
  it('Basic tests', () => {
    assert.deepEqual(a20210305_2('chokudai'), 'chkd');
    assert.deepEqual(a20210305_2('okanemochi'), 'knmch');
    assert.deepEqual(a20210305_2('aoki'), 'k');
    assert.deepEqual(a20210305_2('mazushii'), 'mzsh');
  });
});

// 2021/03/05 22:26
import { findSmallestInt } from './8 kyu Find the smallest integer in the array';
describe('Smallest Integer Tests', function () {
  it('Fixed Tests', function () {
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 8]),
      8,
      'Should return the smallest int 8'
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 18]),
      12,
      'Should return the smallest int 12'
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 412, 228]),
      56,
      'Should return the smallest int 56'
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 0]),
      0,
      'Should return the smallest int 0'
    );
    assert.strictEqual(
      findSmallestInt([1, 56, 232, 12, 8]),
      1,
      'Should return the smallest int 1'
    );
  });
});
