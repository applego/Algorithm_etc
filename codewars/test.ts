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

// 2021/03/08 22:29
import { mixbonacci } from './5 kyu Mixbonacci';
describe('Example Tests', () => {
  it('should work with example tests', () => {
    assert.deepStrictEqual(mixbonacci([], 10), []);
    assert.deepStrictEqual(mixbonacci(['fib'], 0), []);
    assert.deepStrictEqual(mixbonacci(['fib'], 10), [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
    ]);
    assert.deepStrictEqual(mixbonacci(['pad'], 10), [
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      2,
      2,
    ]);
    assert.deepStrictEqual(mixbonacci(['jac'], 10), [
      0,
      1,
      1,
      3,
      5,
      11,
      21,
      43,
      85,
      171,
    ]);
    assert.deepStrictEqual(mixbonacci(['pel'], 10), [
      0,
      1,
      2,
      5,
      12,
      29,
      70,
      169,
      408,
      985,
    ]);
    assert.deepStrictEqual(mixbonacci(['tri'], 10), [
      0,
      0,
      1,
      1,
      2,
      4,
      7,
      13,
      24,
      44,
    ]);
    assert.deepStrictEqual(mixbonacci(['tet'], 10), [
      0,
      0,
      0,
      1,
      1,
      2,
      4,
      8,
      15,
      29,
    ]);
    assert.deepStrictEqual(mixbonacci(['fib', 'tet'], 10), [
      0,
      0,
      1,
      0,
      1,
      0,
      2,
      1,
      3,
      1,
    ]);
    assert.deepStrictEqual(mixbonacci(['jac', 'jac', 'pel'], 10), [
      0,
      1,
      0,
      1,
      3,
      1,
      5,
      11,
      2,
      21,
    ]);
    // assert.deepStrictEqual(mixbonacci(['pel'], 59), [
    //   0,
    //   1,
    //   2,
    //   5,
    //   12,
    //   29,
    //   70,
    //   169,
    //   408,
    //   985,
    //   2378,
    //   5741,
    //   13860,
    //   33461,
    //   80782,
    //   195025,
    //   470832,
    //   1136689,
    //   2744210,
    //   6625109,
    //   15994428,
    //   38613965,
    //   93222358,
    //   225058681,
    //   543339720,
    //   1311738121,
    //   3166815962,
    //   7645370045,
    //   18457556052,
    //   44560482149,
    //   107578520350,
    //   259717522849,
    //   627013566048,
    //   1513744654945,
    //   3654502875938,
    //   8822750406821,
    //   21300003689580,
    //   51422757785981,
    //   124145519261542,
    //   299713796309065,
    //   723573111879672,
    //   1746860020068409,
    //   4217293152016490,
    //   10181446324101388,
    //   24580185800219264,
    //   59341817924539920,
    //   143263821649299100,
    //   345869461223138200,
    //   835002744095575400,
    //   2015874949414289000,
    //   4866752642924153000,
    //   11749380235262595000,
    //   28365513113449340000,
    //   68480406462161280000,
    //   165326326037771900000,
    //   399133058537705100000,
    //   963592443113182100000,
    //   2.3263179447640693e21,
    //   5.616228332641321e21,
    // ]);
  });
});

// 2021/03/10 22:49
import { wallpaper } from './7 kyu Easy wallpaper';
describe('Fixed Tests wallpaper', function () {
  it('Basic tests', function () {
    assert.strictEqual(wallpaper(6.3, 4.5, 3.29), 'sixteen');
    assert.strictEqual(wallpaper(6.3, 5.8, 3.13), 'seventeen');
    assert.strictEqual(wallpaper(6.1, 6.7, 2.81), 'sixteen');
    assert.strictEqual(wallpaper(6.1, 2.0, 3.15), 'twelve');
    assert.strictEqual(wallpaper(4.4, 3.0, 2.75), 'ten');
  });
});

// 最近Golangやっとった
// 久々TS 2021/03/16 12:53
import { findNeedle } from './8 kyu A Needle in the Haystack';

describe('findNeedle', () => {
  it('basic tests', () => {
    assert.strictEqual(
      findNeedle([
        '3',
        '123124234',
        null,
        'needle',
        'world',
        'hay',
        2,
        '3',
        true,
        false,
      ]),
      'found the needle at position 3'
    );
    assert.strictEqual(
      findNeedle([
        '283497238987234',
        'a dog',
        'a cat',
        'some random junk',
        'a piece of hay',
        'needle',
        'something somebody lost a while ago',
      ]),
      'found the needle at position 5'
    );
    assert.strictEqual(
      findNeedle([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        8,
        7,
        5,
        4,
        3,
        4,
        5,
        6,
        67,
        5,
        5,
        3,
        3,
        4,
        2,
        34,
        234,
        23,
        4,
        234,
        324,
        324,
        'needle',
        1,
        2,
        3,
        4,
        5,
        5,
        6,
        5,
        4,
        32,
        3,
        45,
        54,
      ]),
      'found the needle at position 30'
    );
    assert.strictEqual(
      findNeedle([
        'needle',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        8,
        7,
        5,
        4,
        3,
        4,
        5,
        6,
        67,
        5,
        5,
        3,
        3,
        4,
        2,
        34,
        234,
        23,
        4,
        234,
        324,
        324,
        1,
        2,
        3,
        4,
        5,
        5,
        6,
        5,
        4,
        32,
        3,
        45,
        54,
      ]),
      'found the needle at position 0'
    );
    assert.strictEqual(
      findNeedle([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        8,
        7,
        5,
        4,
        3,
        4,
        5,
        6,
        67,
        5,
        5,
        3,
        3,
        4,
        2,
        34,
        234,
        23,
        4,
        234,
        324,
        324,
        1,
        2,
        3,
        4,
        5,
        5,
        6,
        5,
        4,
        32,
        3,
        45,
        54,
        'needle',
      ]),
      'found the needle at position 43'
    );
  });
});
