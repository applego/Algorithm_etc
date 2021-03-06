// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test

import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

import { maxProduct } from './7 kyu Product Of Maximums Of Array (Array Series #2)';
describe('Basic tests', () => {
  it('maxProduct([4, 3, 5], 2)', () =>
    assert.strictEqual(maxProduct([4, 3, 5], 2), 20));
  it('maxProduct([10, 8, 7, 9], 3)', () =>
    assert.strictEqual(maxProduct([10, 8, 7, 9], 3), 720));
  it('maxProduct([8, 6, 4, 6], 3)', () =>
    assert.strictEqual(maxProduct([8, 6, 4, 6], 3), 288));
  it('maxProduct([10, 2, 3, 8, 1, 10, 4], 5)', () =>
    assert.strictEqual(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600));
  it('maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)', () =>
    assert.strictEqual(
      maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5),
      247895375
    ));
  it('maxProduct([-4, -27, -15, -6, -1], 2)', () =>
    assert.strictEqual(maxProduct([-4, -27, -15, -6, -1], 2), 4));
  it('maxProduct([-17, -8, -102, -309], 2)', () =>
    assert.strictEqual(maxProduct([-17, -8, -102, -309], 2), 136));
  it('maxProduct([10, 3, -27, -1], 3)', () =>
    assert.strictEqual(maxProduct([10, 3, -27, -1], 3), -30));
  it('maxProduct([14, 29, -28, 39, -16, -48], 4)', () =>
    assert.strictEqual(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344));
  it('maxProduct([1], 1)', () => assert.strictEqual(maxProduct([1], 1), 1));
});

import { arrayLeaders } from './7 kyu Array Leaders (Array Series #3)';
describe('Basic Tests', function () {
  it('Testing for [1, 2, 3, 4, 0]', () =>
    assert.deepEqual(arrayLeaders([1, 2, 3, 4, 0]), [4]));
  it('Testing for [16, 17, 4, 3, 5, 2]', () =>
    assert.deepEqual(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]));
  it('Testing for [-1, -29, -26, -2]', () =>
    assert.deepEqual(arrayLeaders([-1, -29, -26, -2]), [-1]));
  it('Testing for [-36, -12, -27]', () =>
    assert.deepEqual(arrayLeaders([-36, -12, -27]), [-36, -12]));
  it('Testing for [5, -2, 2]', () =>
    assert.deepEqual(arrayLeaders([5, -2, 2]), [5, 2]));
  it('Testing for [0, -1, -29, 3, 2]', () =>
    assert.deepEqual(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]));
});

import { maxGap } from './7 kyu Maximum Gap (Array Series #4)';
describe('Basic tests', () => {
  it('Testing for [13, 10, 2, 9, 5]', () =>
    assert.strictEqual(maxGap([13, 10, 2, 9, 5]), 4));
  it('Testing for [13, 3, 5]', () => assert.strictEqual(maxGap([13, 3, 5]), 8));
  it('Testing for [24, 299, 131, 14, 26, 25]', () =>
    assert.strictEqual(maxGap([24, 299, 131, 14, 26, 25]), 168));
  it('Testing for [-3, -27, -4, -2]', () =>
    assert.strictEqual(maxGap([-3, -27, -4, -2]), 23));
  it('Testing for [-7, -42, -809, -14, -12]', () =>
    assert.strictEqual(maxGap([-7, -42, -809, -14, -12]), 767));
  it('Testing for [12, -5, -7, 0, 290]', () =>
    assert.strictEqual(maxGap([12, -5, -7, 0, 290]), 278));
  it('Testing for [-54, 37, 0, 64, -15, 640, 0]', () =>
    assert.strictEqual(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576));
  it('Testing for [130, 30, 50]', () =>
    assert.strictEqual(maxGap([130, 30, 50]), 80));
  it('Testing for [1, 1, 1]', () => assert.strictEqual(maxGap([1, 1, 1]), 0));
  it('Testing for [-1, -1, -1]', () =>
    assert.strictEqual(maxGap([-1, -1, -1]), 0));
});

import { productArray } from './7 kyu Product Array (Array Series #5)';

describe('Basic Tests', () => {
  it('Testing for [12, 20]', () =>
    assert.deepEqual(productArray([12, 20]), [20, 12]));
  it('Testing for [12, 20]', () =>
    assert.deepEqual(productArray([12, 20]), [20, 12]));
  it('Testing for [3, 27, 4, 2]', () =>
    assert.deepEqual(productArray([3, 27, 4, 2]), [216, 24, 162, 324]));
  it('Testing for [13, 10, 5, 2, 9]', () =>
    assert.deepEqual(productArray([13, 10, 5, 2, 9]), [
      900,
      1170,
      2340,
      5850,
      1300,
    ]));
  it('Testing for [16, 17, 4, 3, 5, 2]', () =>
    assert.deepEqual(productArray([16, 17, 4, 3, 5, 2]), [
      2040,
      1920,
      8160,
      10880,
      6528,
      16320,
    ]));
});

import { isInteresting } from './4 kyu Catching Car Mileage Numbers';
1;
function test(n: number, awesome: number[], expected: number) {
  assert.strictEqual(isInteresting(n, awesome), expected);
}
describe('solution', function () {
  it('should work, dangit!', function () {
    test(3, [1337, 256], 0);
    test(1336, [1337, 256], 1);
    test(1337, [1337, 256], 2);
    test(11208, [1337, 256], 0);
    test(11209, [1337, 256], 1);
    test(11211, [1337, 256], 2);
  });
});

import { maxTriSum } from './7 kyu Maximum Triplet Sum (Array Series #7)';
describe('Basic tests', () => {
  it('Testing for [3, 2, 6, 8, 2, 3]', () =>
    assert.strictEqual(maxTriSum([3, 2, 6, 8, 2, 3]), 17));
  it('Testing for [2, 9, 13, 10, 5, 2, 9, 5]', () =>
    assert.strictEqual(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32));
  it('Testing for [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]', () =>
    assert.strictEqual(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18));
  it('Testing for [-3, -27, -4, -2, -27, -2]', () =>
    assert.strictEqual(maxTriSum([-3, -27, -4, -2, -27, -2]), -9));
  it('Testing for [-14, -12, -7, -42, -809, -14, -12]', () =>
    assert.strictEqual(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33));
  it('Testing for [-13, -50, 57, 13, 67, -13, 57, 108, 67]', () =>
    assert.strictEqual(
      maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]),
      232
    ));
  it('Testing for [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]', () =>
    assert.strictEqual(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41));
  it('Testing for [-2, 0, 2]', () =>
    assert.strictEqual(maxTriSum([-2, 0, 2]), 0));
  it('Testing for [-2, -4, 0, -9, 2]', () =>
    assert.strictEqual(maxTriSum([-2, -4, 0, -9, 2]), 0));
  it('Testing for [-5, -1, -9, 0, 2]', () =>
    assert.strictEqual(maxTriSum([-5, -1, -9, 0, 2]), 1));
});

import { G964_1208, G964_1208_BP } from './5 kyu Decimal to Factorial and Back';
function testing1(nb: number, expected: string) {
  assert.equal(G964_1208.dec2FactString(nb), expected);
}
function testing2(nb: string, expected: number) {
  assert.equal(G964_1208.factString2Dec(nb), expected);
}
function testing1BP(nb: number, expected: string) {
  assert.equal(G964_1208_BP.dec2FactString(nb), expected);
}
function testing2BP(nb: string, expected: number) {
  assert.equal(G964_1208_BP.factString2Dec(nb), expected);
}
describe('Fixed Tests', function () {
  it('Basic tests dec2FactString', function () {
    testing1(2982, '4041000');
  });
  it('Basic tests factString2Dec', function () {
    testing2('341010', 463);
  });
  it('Basic tests dec2FactString BP', function () {
    testing1BP(2982, '4041000');
  });
  it('Basic tests factString2Dec BP', function () {
    testing2BP('341010', 463);
  });
});

import { nextBigger } from './4 kyu Next bigger number with the same digits';
describe('Basic tests', () => {
  it('Small numbers', () => {
    assert.strictEqual(nextBigger(12), 21);
    assert.strictEqual(nextBigger(513), 531);
    assert.strictEqual(nextBigger(2017), 2071);
    assert.strictEqual(nextBigger(414), 441);
    assert.strictEqual(nextBigger(144), 414);
  });
  it('Bigger numbers', () => {
    assert.strictEqual(nextBigger(123456789), 123456798);
    assert.strictEqual(nextBigger(1234567890), 1234567908);
    assert.strictEqual(nextBigger(9876543210), -1);
    assert.strictEqual(nextBigger(9999999999), -1);
    assert.strictEqual(nextBigger(59884848459853), 59884848483559);
  });
});

import { rowWeights } from './7 kyu Row Weights(Array Series #8?)';
describe('Basic tests', () => {
  it('Testing for [80]', () => assert.deepEqual(rowWeights([80]), [80, 0]));
  it('Testing for [100, 50]', () =>
    assert.deepEqual(rowWeights([100, 50]), [100, 50]));
  it('Testing for [50, 60, 70, 80]', () =>
    assert.deepEqual(rowWeights([50, 60, 70, 80]), [120, 140]));
  it('Testing for [13, 27, 49]', () =>
    assert.deepEqual(rowWeights([13, 27, 49]), [62, 27]));
  it('Testing for [70, 58, 75, 34, 91]', () =>
    assert.deepEqual(rowWeights([70, 58, 75, 34, 91]), [236, 92]));
  it('Testing for [29, 83, 67, 53, 19, 28, 96]', () =>
    assert.deepEqual(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]));
  it('Testing for [0]', () => assert.deepEqual(rowWeights([0]), [0, 0]));
  it('Testing for [100, 51, 50, 100]', () =>
    assert.deepEqual(rowWeights([100, 51, 50, 100]), [150, 151]));
  it('Testing for [39, 84, 74, 18, 59, 72, 35, 61]', () =>
    assert.deepEqual(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]));
  it('Testing for [0, 1, 0]', () =>
    assert.deepEqual(rowWeights([0, 1, 0]), [0, 1]));
});

/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import { determinant } from './4 kyu Matrix Determinant';
describe('determinant', function () {
  const m1 = [
    [1, 3],
    [2, 5],
  ];
  const m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ];

  it('of a 1 x 1 matrix should yield the value of the one element', () => {
    expect(determinant([[1]])).to.equal(1);
  });

  it('should work correctly for 2 x 2 matrix', () => {
    expect(determinant(m1)).to.equal(-1);
  });

  it('should work correctly for 3 x 3 matrix', () => {
    expect(determinant(m2)).to.equal(-20);
  });
});

import { solution } from './8 kyu Reversed Strings';
describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(solution('world'), 'dlrow');
    assert.equal(solution('hello'), 'olleh');
    assert.equal(solution(''), '');
    assert.equal(solution('h'), 'h');
  });
});

// 2020/12/20 23:56
// import { fitness } from "./preloaded";
import { GeneticAlgorithm } from './5 kyu Binary Genetic Algorithms';
// import { assert } from 'chai';
// TODO: Replace examples and use TDD by writing your own tests
describe('solution', () => {
  it('test', () => {
    // TDD
    const geneticAlgorithm = new GeneticAlgorithm();
    // assert()
  });
});

// 2020/12/21 12:15
import { G964_20201221 } from './unsolved 5 kyu Some Egyptian fractions';
function testing(s: any, expected: any) {
  assert.deepEqual(G964_20201221.decompose(s), expected);
}
// describe("Fixed Tests decompose", function(){
//   it("Basic tests", function() {
//     testing("3/4", ["1/2", "1/4"]);
//     testing("12/4", ["3"]);
//     testing("4/5", ["1/2", "1/4", "1/20"]);
//     testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
//   });
// });

// 2020/12/24  0:57
import { accum } from './7 kyu Mumbling';
describe('Fixed Tests accum', function () {
  it('Basic tests', function () {
    assert.strictEqual(
      accum('ZpglnRxqenU'),
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
    );
    assert.strictEqual(
      accum('NyffsGeyylB'),
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
    );
    assert.strictEqual(
      accum('MjtkuBovqrU'),
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
    );
    assert.strictEqual(
      accum('EvidjUnokmM'),
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
    );
    assert.strictEqual(
      accum('HbideVbxncC'),
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
    );
  });
});

// 2021/02/07 23:25
import {
  rot90Clock,
  diag1Sym,
  selfieAndDiag1,
  oper,
} from './6 kyu Moves in squared strings (III)';

describe('Fixed Tests', function () {
  it('Basic tests diag1Sym', function () {
    assert.strictEqual(
      oper(diag1Sym, 'wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ'),
      'weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ'
    );
  });

  it('Basic tests rot90Clock', function () {
    assert.strictEqual(
      oper(rot90Clock, 'rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb'),
      'Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle'
    );
  });

  it('Basic tests selfieAndDiag1', function () {
    assert.strictEqual(
      oper(selfieAndDiag1, 'NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg'),
      'NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg'
    );
  });
});

// 2021/02/12 23:09
import { Kata_20210212 } from './8 kyu Opposite number';
describe('opposite', function () {
  it('Sample Test', function () {
    assert.strictEqual(Kata_20210212.opposite(1), -1);
  });

  it('Sample Test', function () {
    assert.strictEqual(Kata_20210212.opposite(14), -14);
  });

  it('Sample Test', function () {
    assert.strictEqual(Kata_20210212.opposite(-34), 34);
  });
});

// 2021/02/13 23:33
import { expressionsMatter } from './8 kyu Expressions Matter';

describe('Small values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(2, 1, 2), 6);
    assert.equal(expressionsMatter(2, 1, 1), 4);
    assert.equal(expressionsMatter(1, 1, 1), 3);
    assert.equal(expressionsMatter(1, 2, 3), 9);
    assert.equal(expressionsMatter(1, 3, 1), 5);
    assert.equal(expressionsMatter(2, 2, 2), 8);
  });
});

describe('Medium values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(5, 1, 3), 20);
    assert.equal(expressionsMatter(3, 5, 7), 105);
    assert.equal(expressionsMatter(5, 6, 1), 35);
    assert.equal(expressionsMatter(1, 6, 1), 8);
    assert.equal(expressionsMatter(2, 6, 1), 14);
    assert.equal(expressionsMatter(6, 7, 1), 48);
  });
});

describe('Mixed values', function () {
  it('Should work', function () {
    assert.equal(expressionsMatter(2, 10, 3), 60);
    assert.equal(expressionsMatter(1, 8, 3), 27);
    assert.equal(expressionsMatter(9, 7, 2), 126);
    assert.equal(expressionsMatter(1, 1, 10), 20);
    assert.equal(expressionsMatter(9, 1, 1), 18);
    assert.equal(expressionsMatter(10, 5, 6), 300);
    assert.equal(expressionsMatter(1, 10, 1), 12);
  });
});

// 2021 / 02 / 15 22: 43;
import { countSheep } from "./8 kyu If you can't sleep, just count sheep";
describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(countSheep(1), '1 sheep...');
    assert.equal(countSheep(2), '1 sheep...2 sheep...');
    assert.equal(countSheep(3), '1 sheep...2 sheep...3 sheep...');
  });
});

// 2021/02/17 20:51
import { G964_20210217 } from './7 kyu Maximum Length Difference';
function testing_20210217(actual: number, expected: number) {
  assert.equal(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests mxdiflg', function () {
    var s1 = [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ];
    var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
    testing_20210217(G964_20210217.mxdiflg(s1, s2), 13);
    s1 = [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ];
    s2 = ['bbbaaayddqbbrrrv'];
    testing_20210217(G964_20210217.mxdiflg(s1, s2), 10);
  });
});

// 2021/02/19 21:38
import { even_or_odd } from './8 kyu Even or Odd';
describe('solution', function () {
  it('basicTests', function () {
    assert.equal(even_or_odd(2), 'Even');
    assert.equal(even_or_odd(0), 'Even');
    assert.equal(even_or_odd(7), 'Odd');
    assert.equal(even_or_odd(1), 'Odd');
  });
});

// 2021/02/19 22:10
import { thirdBiggerNumber } from '../AtCoder/第一回アルゴリズム実技検定C - 3 番目';
describe('AtCoder/第一回アルゴリズム実技検定C - 3 番目', () => {
  it('Basic tests', () => {
    assert.equal(thirdBiggerNumber('4 18 25 20 9 13'), 18);
    assert.equal(thirdBiggerNumber('95 96 97 98 99 100'), 98);
    assert.equal(thirdBiggerNumber('19 92 3 35 78 1'), 35);
  });
});

// 2021/02/22 23:45
import { greet } from './8 kyu Function 1 - hello world';
describe('hello world', () =>
  it('greeting', () => assert.equal(greet(), 'hello world!')));

import { move } from './8 kyu Grasshopper - Terminal game move function';
describe('Fixed tests', () => {
  it('move(0, 4)', () => assert.strictEqual(move(0, 4), 8));
  it('move(3, 6)', () => assert.strictEqual(move(3, 6), 15));
  it('move(2, 5)', () => assert.strictEqual(move(2, 5), 12));
});

// 2021/02/22 23:54
import { G964_20210222 } from './7 kyu Growth of a Population';
function testing20210222(
  p0: number,
  percent: number,
  aug: number,
  p: number,
  expected: number
) {
  assert.equal(G964_20210222.nbYear(p0, percent, aug, p), expected);
}

describe('Fixed Tests', function () {
  it('Basic tests nbYear', function () {
    testing20210222(1500, 5, 100, 5000, 15);
    testing20210222(1500000, 2.5, 10000, 2000000, 10);
    testing20210222(1500000, 0.25, 1000, 2000000, 94);
    testing20210222(1500000, 0.25, -1000, 2000000, 151);
  });
});

// 2021/02/23 10:02
// import {
//   test20210223,
//   test20210223BP,
// } from '../AtCoder/第一回アルゴリズム実技検定D - 重複検査';
// describe('AtCoder/第一回アルゴリズム実技検定D - 重複検査', () => {
//   it('Basic tests', () => {
//     let input = `6
// 1
// 5
// 6
// 3
// 2
// 6
// `;
//     let output = '6 4';
//     assert.equal(test20210223(input), output);
//     input = `7
// 5
// 4
// 3
// 2
// 7
// 6
// 1
// `;
//     output = 'Correct';
//     assert.equal(test20210223(input), output);
//   });
// });
// describe('AtCoder/第一回アルゴリズム実技検定D - 重複検査', () => {
//   it('Basic tests(BP)', () => {
//     let input = `6
// 1
// 5
// 6
// 3
// 2
// 6
// `;
//     let output = '6 4';
//     assert.equal(test20210223BP(input), output);
//     input = `7
// 5
// 4
// 3
// 2
// 7
// 6
// 1
// `;
//     output = 'Correct';
//     assert.equal(test20210223BP(input), output);
//   });
// });

// 2021/02/23 19:01
import { recoverFollower } from '../AtCoder/第一回アルゴリズム実技検定E - SNS のログ';
describe('../AtCoder/第一回アルゴリズム実技検定E - SNS のログ', () => {
  it('Basic tests', () => {
    let input = `6 7
1 1 2
1 2 3
1 3 4
1 1 5
1 5 6
3 1
2 6
`;
    let output = `NYYNYY
NNYNNN
NNNYNN
NNNNNN
NNNNNY
YNNNYN`;
    assert.equal(recoverFollower(input), output);
    //     input = `7
    // 5
    // 4
    // 3
    // 2
    // 7
    // 6
    // 1
    // `;
    //     output = 'Correct';
    //     assert.equal(test20210223BP(input), output);
  });
});

// 2021/02/24 12:17
import { sumArray } from './8 kyu Sum without highest and lowest number';

describe('KataTest', function () {
  it('BasicTests', function () {
    assert.deepEqual(sumArray([6, 2, 1, 8, 10]), 16);
    assert.deepEqual(sumArray([6, 0, 1, 10, 10]), 17);
  });
});

// 2021/02/24 18:35
import { answer as answer20210224 } from '../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram';
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
  it('SubmitTests', () => {
    let input =
      '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\';

    let output = `0
0`;
    assert.deepEqual(answer20210224(input), output);
  });
});

// 2021/02/25 14:44
import { linearSearch } from '../AOJ/ALDS1_4_A_線形探索';
describe('../AOJ/ALDS1_4_A_線形探索', function () {
  it('BasicTests', function () {
    let input = `5
1 2 3 4 5
3
3 4 1
`;
    let output = `3`;
    assert.deepEqual(linearSearch(input), output);
    input = `3
3 1 2
1
5
`;
    output = `0`;
    assert.deepEqual(linearSearch(input), output);
    input = `5
1 1 2 2 3
2
1 2
`;
    output = `2`;
    assert.deepEqual(linearSearch(input), output);
  });
});

// 2021/02/25 15:09
import { answer as binarySearch } from '../AOJ/ALDS1_4_B_二分探索';
describe('../AOJ/ALDS1_4_B_二分探索', function () {
  it('BasicTests', function () {
    assert.deepEqual(
      binarySearch(
        `5
1 2 3 4 5
3
3 4 1
`
      ),
      `3`
    );
    assert.deepEqual(
      binarySearch(
        `3
1 2 3
1
5
`
      ),
      `0`
    );
    assert.deepEqual(
      binarySearch(
        `5
1 1 2 2 3
2
1 2
`
      ),
      `2`
    );
  });
});

// 2021/02/25 20:43
import { digitize } from './8 kyu Convert number to reversed array of digits';
// chai.config.truncateThreshold = 0;

describe('digitize', function () {
  it('Sample test', function () {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
  });
});

// 2021/02/25 21:03
import { answer as answer20210225 } from '../AtCoder/第一回アルゴリズム実技検定F - DoubleCamelCase Sort';

describe('../AtCoder/第一回アルゴリズム実技検定F - DoubleCamelCase Sort', function () {
  it('Sample test', function () {
    assert.deepEqual(
      answer20210225('FisHDoGCaTAAAaAAbCAC'),
      'AAAaAAbCACCaTDoGFisH'
    );
  });
  it('Sample test2', function () {
    assert.deepEqual(
      answer20210225('AAAAAjhfgaBCsahdfakGZsZGdEAA'),
      'AAAAAAAjhfgaBCsahdfakGGdEZsZ'
    );
  });
});

//　2021/02/26 12:05
import { recover } from './6 kyu Digit Recovery';
describe('./6 kyu Digit Recovery', () => {
  it('Sample test', function () {
    assert.deepEqual(recover('NEO'), '1');
    assert.deepEqual(recover('ONETWO'), '12');
    assert.deepEqual(recover('TWWTONE'), '21');
    assert.deepEqual(recover('ZYX'), 'No digits found');
    assert.deepEqual(recover('ONENO'), '11');
    assert.deepEqual(recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');
  });
});

// 2021/02/27  0:22
import { number } from './7 kyu Number of People in the Bus';

describe('number', () => {
  it('basic tests', () => {
    assert.equal(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ]),
      5
    );
    assert.equal(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ]),
      17
    );
    assert.equal(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ]),
      21
    );
    assert.equal(number([[0, 0]]), 0);
  });
});

// 2021/03/01 19:30
import {
  fraction,
  G964 as G964_20210301,
} from './5 kyu Some Egyptian fractions';

type frac = {
  a: fraction;
  b: fraction;
};
describe('分数クラスのテスト', () => {
  it('Basic', () => {
    const test = (arr: frac[]) =>
      arr.forEach((f) => {
        const t = (a: fraction, b: fraction) => {
          const stra = a.toString();
          const strb = b.toString();
          // console.log(`stra:${stra} strb:${strb}`);
          // // assert.deepEqual()
          // console.log(`${stra} + ${strb} = ${a.add(b)}`);
          // console.log(`${stra} - ${strb} = ${a.subtract(b)}`);
          // console.log(`${stra} * ${strb} = ${a.multiply(b)}`);
          // console.log(`${stra} / ${strb} = ${a.divide(b)}`);
        };
        t(f.a, f.b);
        t(f.b, f.a);
      });
    test([
      { a: new fraction(5), b: new fraction(1, 2) },
      { a: new fraction(2, 3), b: new fraction(1, 6) },
      { a: new fraction(1, 2), b: new fraction(1, 2) },
      { a: new fraction(1 / 3), b: new fraction(3) },
    ]);
  });
});

function testing_20210301(s: string, expected: string[]) {
  assert.deepEqual(G964_20210301.decompose(s), expected);
}
describe('Fixed Tests decompose', function () {
  it('Basic tests', function () {
    testing_20210301('3/4', ['1/2', '1/4']);
    testing_20210301('12/4', ['3']);
    testing_20210301('4/5', ['1/2', '1/4', '1/20']);
    testing_20210301('21/23', ['1/2', '1/3', '1/13', '1/359', '1/644046']);
    testing_20210301('0.66', ['1/2', '1/7', '1/59', '1/5163', '1/53307975']);
  });
  it('Attempt tests', function () {
    testing_20210301('0', []);
  });
});

// 2021/03/02 20:00
import { G } from '../AtCoder/第一回アルゴリズム実技検定G - 組分け';
describe('Fixed Tests decompose2', function () {
  it('Basic tests', function () {
    assert.deepEqual(
      G.main(
        `6
10 10 -10 -10 -10
10 -10 -10 -10
-10 -10 -10
10 -10
-10`
      ),
      40
    );
    assert.deepEqual(
      G.main(
        `3
1 1
1`
      ),
      3
    );
  });
});
// 2021/03/03 10:04
// ! G2 読み込めない謎現象
// import { G2 } from '../AOJ/ALDS1_4_C_Dictionary';
// describe('Fixed Tests decompose3', function () {
//   it('Basic tests', function () {
//     console.log(G2);
//     assert.deepEqual(
//       G2.main(
//         `6
// insert AAA
// insert AAC
// find AAA
// find CCC
// insert CCC
// find CCC
// insert CCC`
//       ),
//       `yes
// no
// yes`
//     );
//     assert.deepEqual(
//       G2.main(
//         `13
// insert AAA
// insert AAC
// insert AGA
// insert AGG
// insert TTT
// find AAA
// find CCC
// find CCC
// insert CCC
// find CCC
// insert T
// find TTT
// find T`
//       ),
//       `yes
// no
// no
// yes
// yes
// yes`
//     );
//   });
// });

// 2021/03/03 12:13
import { G3 } from '../AOJ/ALDS1_4_D_割り当て';
describe('../AOJ/ALDS1_4_D_割り当て', () => {
  it('Basic tests', () => {
    assert.deepEqual(
      G3.main(`5 3
8
1
7
3
9`),
      10
    );
    assert.deepEqual(
      G3.main(`4 2
1
2
2
6`),
      6
    );
  });
});

// 2021/03/04 21:19
import { checkCoupon } from './7 kyu The Coupon Code';
describe('./7 kyu The Coupon Code', () => {
  it('Basic tests', () => {
    assert.equal(
      checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
      true
    );
    assert.equal(
      checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
      false
    );
  });
});

// 2021/03/05 21:54
import { answer as a20210305 } from '../AtCoder/abc002A - 正直者';
describe('../AtCoder/abc002A - 正直者.ts', () => {
  it('Basic tests', () => {
    assert.deepEqual(a20210305('10 11'), 11);
    assert.deepEqual(a20210305('100000000 10000000'), 100000000);
  });
});
