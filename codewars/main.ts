
import Test from './TestCodewar';
// let test = new Test();//__filename

import TimeMeasure from './TimeMeasure';
import { describe, it } from "mocha";
import { assert, expect } from   "chai";
////////////////////////////////////////////////////////////////
// 2021/01/13 13:18
// 7 kyu Jaden Casing Strings

import { G964_20210110 } from './5 kyu Second Variation on Caesar Cipher';
var u, v;
u = "I should have known that you would have a perfect answer for me!!!";
v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"];
Test.assert_equals(G964_20210110.encodeStr(u, 1), v);
Test.assert_equals(G964_20210110.decode(v), u);

// 2021/01/07 20:52
import { checkParity } from './7 kyu Calculate Parity bit!';
Test.assert_equals(checkParity('even','101010'), 1);
Test.assert_equals(checkParity('odd','101010'), 0);
Test.assert_equals(checkParity('even','101011'), 0);
Test.assert_equals(checkParity('odd', '101011'), 1);

// 2021/01/06 22:06
import { getSum } from "./7 kyu Beginner Series #3 Sum of Numbers";
assert.strictEqual(getSum(0,-1),-1);
assert.strictEqual(getSum(0, 1), 1);

// 2021/01/06 12:48
import { sumStrings } from './4 kyu Sum Strings as Numbers';
Test.assert_equals(sumStrings('123', '456'), '579');
// - Expected: '1757330826245818554540160790849',
//   instead got: '1.7573308262458186e+30'
Test.assert_equals(sumStrings('915381589456908955396757569014', '841949236788909599143403221835'), '1757330826245818554540160790849');

// 2021/01/05 12:38
import { dirReduc } from './5 kyu Directions Reduction';
assert.deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
assert.deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]), []);

// 2021/01/04 21:06
//  上から書いていくスタイルにチェンジ
import { sumPairs, sumPairs_BP } from "./5 kyu Sum of pairs";
const l1: number[] = [1, 4, 8, 7, 3, 15],
l2: number[] = [1, -2, 3, 0, -6, 1],
l3: number[] = [20, -13, 40],
l4: number[] = [1, 2, 3, 4, 1, 0],
l5: number[] = [10, 5, 2, 3, 7, 5],
l6: number[] = [4, -2, 3, 3, 4],
l7: number[] = [0, 2, 0],
l8: number[] = [5, 9, 13, -3];
assert.deepEqual(sumPairs(l1, 8), [1, 7], "Basic: ["+l1+"] should return [1, 7] for sum = 8");
assert.deepEqual(sumPairs(l2, -6), [0, -6], "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
assert.deepEqual(sumPairs(l3, -7), undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
assert.deepEqual(sumPairs(l4, 2), [1, 1], "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
assert.deepEqual(sumPairs_BP(l5, 10), [3, 7], "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
assert.deepEqual(sumPairs(l5, 10), [3, 7], "First Match From Left REDUX!: [" + l5 + "] should return [3, 7] for sum = 10 ");
assert.deepEqual(sumPairs(l6, 8), [4, 4], "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
assert.deepEqual(sumPairs(l7, 0), [0, 0], "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
assert.deepEqual(sumPairs(l8, 10), [13, -3], "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");

import speedOfPetals = require("./8 kyu The falling speed of petals");
// speedOfPetals.sakuraFall(0);
// speedOfPetals.sakuraFall(5);
speedOfPetals.sakuraFall(10);
// speedOfPetals.sakuraFall(-1);
// speedOfPetals.sakuraFall(200);

// console.log(speedOfPetals.f(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000, 'ペソ')); // "1,000ペソ"

import isograms = require('./7 kyu Isograms');
Test.assert_equals(isograms.isIsogram("Dermatoglyphics"), true);// isograms.isIsogram("Dermatoglyphics")//, true );
// Test.assert_equals(isograms.isIsogram("isogram"), true );
// Test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assert_equals(isograms.isIsogram("isIsogram"), false );
// Test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");

import { Kata } from './7 kyu Vowel Count';

Test.assert_equals(Kata.getCount("abracadabra"), 5);

import shark = require('./8 kyu Holiday VI - Shark Pontoon');

Test.assert_equals(shark.shark(12, 50, 4, 8, true), "Alive!");
Test.assert_equals(shark.shark(7, 55, 4, 16, true), "Alive!");
Test.assert_equals(shark.shark(24, 0, 4, 8, true), "Shark Bait!");
Test.assert_equals(shark.shark(40, 35, 3, 20, true), "Shark Bait!");
Test.assert_equals(shark.shark(7, 8, 3, 4, true), "Alive!");

import nextid = require('./8 kyu Smallest unused ID');

Test.assert_equals(nextid.nextId([0,1,2,3,5]), 4);
Test.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);

import { numberToString } from './8 kyu Convert a Number to a String!';

Test.assert_equals(numberToString(67), '67');

import { boolToWord } from "./8 kyu Convert boolean values to strings 'Yes' or 'No'";

Test.assert_equals(boolToWord(true), "Yes");
Test.assert_equals(boolToWord(false), "No");


import { countSheeps } from "./8 kyu Counting sheep...";

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  undefined,
  true,  false, null, true ,
  true,  true,  true,  true ,
  false, false, true, true];

const result1 = countSheeps(array1);
Test.assert_equals(result1, 17, "There are 17 sheeps in total, not " + result1);

import { reverseWords } from "./7 kyu Reverse words";
Test.assert_equals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
Test.assert_equals(reverseWords('apple'), 'elppa');
Test.assert_equals(reverseWords('a b c d'), 'a b c d');
Test.assert_equals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';

// const iqtest = new IqTest(1);
// Test.assert_equals(iqTest.iqTest('2 4 7 8 10'),3);
// Test.assert_equals(iqTest.iqTest('1 2 2'),1);
//* methodのみ
import { iqTest } from './6 kyu IQ Test';

Test.assert_equals(iqTest('2 4 7 8 10'),3);
Test.assert_equals(iqTest('1 2 2'), 1);

import { duplicateCount} from './6 kyu Counting Duplicates';//,duplicateCount_

Test.assert_equals(duplicateCount(""), 0);
Test.assert_equals(duplicateCount("abcde"), 0);
Test.assert_equals(duplicateCount("aabbcde"), 2);
Test.assert_equals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assert_equals(duplicateCount("Indivisibility"), 1);
Test.assert_equals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");

// Test.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");

import { G964 } from './5 kyu Primes in numbers';

Test.assert_equals_param_func(G964.primeFactors,7775460,"(2**2)(3**3)(5)(7)(11**2)(17)");
Test.assert_equals_param_func(G964.primeFactors,7919,"(7919)");
Test.assert_equals_param_func(G964.primeFactors, 17 * 17 * 93 * 677, "(3)(17**2)(31)(677)");

import { findOdd } from "./6 kyu Find the odd int";

Test.assert_equals_param_func(findOdd, [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
Test.assert_equals_param_func(findOdd, [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
Test.assert_equals_param_func(findOdd, [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
Test.assert_equals_param_func(findOdd, [10], 10);
Test.assert_equals_param_func(findOdd, [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
Test.assert_equals_param_func(findOdd, [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// Test.assert_equals(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

import { order } from './6 kyu Your order, please';

Test.assert_equals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
Test.assert_equals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
Test.assert_equals(order(""), "");

//かんたんなの
import { greet } from './8 kyu Returning Strings';

Test.assert_equals(greet("Ryan"), "Hello, Ryan how are you doing today?");
Test.assert_equals(greet("Shingles"), "Hello, Shingles how are you doing today?");

import { flip } from './8 kyu Gravity Flip';

Test.assert_equals(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
Test.assert_equals(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);

import { warnTheSheep } from './8 kyu A wolf in sheep_s clothing';

Test.assert_equals(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
Test.assert_equals(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
Test.assert_equals(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
Test.assert_equals(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test.assert_equals(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");

//一旦飛ばす
import { comp, fizzBuzzOutput } from './6 kyu Are they the "same"?';

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
Test.assert_equals(comp(a1, a2), true);

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
Test.assert_equals(comp(a1, a2), false);

a1 = [ 2, 2, 3 ];
a2 = [ 4, 9, 9 ];
Test.assert_equals(comp(a1, a2), false);


//* 拡張メソッド fizzBuzzOutput(30)

import { validBraces } from './6 kyu Valid Braces';

Test.assert_equals(validBraces("()"), true);
Test.assert_equals(validBraces("[(])"), false);
Test.assert_equals(validBraces("(){}[]"), true);
Test.assert_equals(validBraces("([{}])"), true);
Test.assert_equals(validBraces("(}"), false);
Test.assert_equals(validBraces("[(])"), false);
Test.assert_equals(validBraces("[({})](]"), false);

// 2020/10/22 16:22
import { solution } from './7 kyu String ends with?';

Test.assert_equals(solution('abcde', 'cde'), true);
Test.assert_equals(solution('abcde', 'abc'), false);
Test.assert_equals(solution('abc', ''), true);

// 2020/10/23 14:35
import { divisors, divisors2 } from './7 kyu Count the divisors of a number';

Test.assert_equals(divisors(1), 1);
Test.assert_equals(divisors(10), 4);
Test.assert_equals(divisors(11), 2);
Test.assert_equals(divisors(54), 8);
Test.assert_equals(divisors(64), 7);

console.log(divisors2(10));

// 2020/10/23 19:47
import { G9642 } from './7 kyu Two to One';

Test.assert_equals(G9642.longest("aretheyhere", "yestheyarehere"), "aehrsty");
Test.assert_equals(G9642.longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
Test.assert_equals(G9642.longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
Test.assert_equals(G9642.longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");

// 2020/10/27 13:29
import { isValidWalk } from './6 kyu Take a Ten Minute Walk';
Test.assert_equals(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
Test.assert_equals(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
Test.assert_equals(isValidWalk(['w']), false);
Test.assert_equals(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);

// 2020/10/30  9:58
import { solequa } from './5 kyu Diophantine Equation';
Test.assert_equals(solequa(5), [[3, 1]]);
Test.assert_equals(solequa(12), [[4, 1]]);
Test.assert_equals(solequa(13), [[7, 3]]);
Test.assert_equals(solequa(16), [[4, 0]]);
Test.assert_equals(solequa(90002), []);
Test.assert_equals(solequa(90005), [[45003, 22501], [9003, 4499], [981, 467], [309, 37]]);

// 2020/11/03  0:18
import { multiplicationTable } from './6 kyu Multiplication table';
Test.assert_equals(multiplicationTable(1), [[1]])
Test.assert_equals(multiplicationTable(2), [[1, 2], [2, 4]])
Test.assert_equals(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])

// 2020/11/04 22:37
import { G96422 } from './6 kyu Irreducible Sum of Rationals';
TimeMeasure.measure('sumFracts', () => {
  Test.assert_equals_param_func(G96422.sumFracts, [[1, 2], [1, 3], [1, 4]], "[13, 12]");
  Test.assert_equals_param_func(G96422.sumFracts, [[1, 3], [5, 3]], "2");
  Test.assert_equals_param_func(G96422.sumFracts, [[12, 3], [15, 3]], "9");
  Test.assert_equals_param_func(G96422.sumFracts, [[2, 7], [1, 3], [1, 12]], "[59, 84]");
});
TimeMeasure.measure('sumFracts1', () => {
  Test.assert_equals_param_func(G96422.sumFracts1, [[1, 2], [1, 3], [1, 4]], "[13, 12]");
  Test.assert_equals_param_func(G96422.sumFracts1, [[1, 3], [5, 3]], "2");
  Test.assert_equals_param_func(G96422.sumFracts1, [[12, 3], [15, 3]], "9");
  Test.assert_equals_param_func(G96422.sumFracts1, [[2, 7], [1, 3], [1, 12]], "[59, 84]");
});

// 2020/11/05 18:31
import { squareSum,squareSum_bp } from './8 kyu Square(n) Sum';
TimeMeasure.measure('squareSum', () => {
  Test.assert_equals(squareSum([1, 2]), 5);
  Test.assert_equals(squareSum([0, 3, 4, 5]), 50);

  Test.assert_equals(squareSum([-1, -2]), 5);
  Test.assert_equals(squareSum_bp([-1, -2]), 5);

});

// 2020/11/09 12:15
import { G964_1109 } from './6 kyu Playing with digits';
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(89, 1), 1);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(92, 1), -1);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(114, 3), 9);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(695, 2), 2);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(46288, 3), 51);
});

// 2020/11/12 21:40
import { reversedWords } from './8 kyu Reversed Words';
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(reversedWords("hello world!"), "world! hello");
  Test.assert_equals(reversedWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
  Test.assert_equals(reversedWords("foobar"), "foobar");
  Test.assert_equals(reversedWords("kata editor"), "editor kata");
  Test.assert_equals(reversedWords("row row row your boat"), "boat your row row row");
});

// 2020/11/16 23:35
import { litres } from './8 kyu Keep Hydrated';
Test.assert_equals(litres(2),1);
Test.assert_equals(litres(1.4),0);
Test.assert_equals(litres(12.3),6);
Test.assert_equals(litres(0.82),0);
Test.assert_equals(litres(11.8),5);
Test.assert_equals(litres(1787),893);
Test.assert_equals(litres(0),0);

// 2020/11/20 22:44
import { setAlarm } from './8 kyu L1 Set Alarm';
Test.assert_equals(setAlarm(true, true), false);
Test.assert_equals(setAlarm(false, true), false);
Test.assert_equals(setAlarm(true, false), true);
Test.assert_equals(setAlarm(false, false), false);

// 2020/11/24 22:48
  //start Playing with lists/arrays https://www.codewars.com/collections/playing-with-lists-slash-arrays
import { adjacentElementsProduct } from './7 kyu Maximum Product';
Test.assert_equals(adjacentElementsProduct([5, 8]), 40);
Test.assert_equals(adjacentElementsProduct([1, 2, 3]), 6);
Test.assert_equals(adjacentElementsProduct([1, 5, 10, 9]), 90);
Test.assert_equals(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
Test.assert_equals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
Test.assert_equals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
Test.assert_equals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
Test.assert_equals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
Test.assert_equals(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
Test.assert_equals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
Test.assert_equals(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
Test.assert_equals(adjacentElementsProduct([1, 2, 3, 0]), 6);

// 2020/11/25 12:39
import { minSum } from './7 kyu Minimize Sum Of Array (Array Series #1)';
Test.assert_equals(minSum([5, 4, 2, 3]), 22);
Test.assert_equals(minSum([12, 6, 10, 26, 3, 24]), 342);
Test.assert_equals(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);

// 2020/11/26 21:16
import { maxProduct } from "./7 kyu Product Of Maximums Of Array (Array Series #2)";

Test.assert_equals(maxProduct([4, 3, 5], 2), 20);

// 2020/11/27 18:02
import { arrayLeaders } from "./7 kyu Array Leaders (Array Series #3)";

Test.assert_equals(arrayLeaders([1, 2, 3, 4, 0]), [4]);
Test.assert_equals(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
Test.assert_equals(arrayLeaders([-1, -29, -26, -2]), [-1]);
Test.assert_equals(arrayLeaders([-36, -12, -27]), [-36, -12]);
Test.assert_equals(arrayLeaders([5, -2, 2]), [5, 2]);
Test.assert_equals(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);

// 2020/11/30 22:40
import { maxGap } from "./7 kyu Maximum Gap (Array Series #4)";
Test.assert_equals(maxGap([13, 10, 2, 9, 5]), 4);
Test.assert_equals(maxGap([13, 3, 5]), 8);
Test.assert_equals(maxGap([24, 299, 131, 14, 26, 25]), 168);
Test.assert_equals(maxGap([-3, -27, -4, -2]), 23);
Test.assert_equals(maxGap([-7, -42, -809, -14, -12]), 767);
Test.assert_equals(maxGap([12, -5, -7, 0, 290]), 278);
Test.assert_equals(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
Test.assert_equals(maxGap([130, 30, 50]), 80);
Test.assert_equals(maxGap([1, 1, 1]), 0);
Test.assert_equals(maxGap([-1, -1, -1]), 0);

// 2020/12/02  0:39
import { productArray } from "./7 kyu Product Array (Array Series #5)";
Test.assert_equals(productArray([12, 20]), [20, 12]);
Test.assert_equals(productArray([12, 20]), [20, 12]);
Test.assert_equals(productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
Test.assert_equals(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]);
Test.assert_equals(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]);

// 2020/12/07 11:37
import { minimumSteps } from "./7 kyu Minimum Steps (Array Series #6)";
Test.assert_equals(minimumSteps([4, 6, 3], 7), 1);
Test.assert_equals(minimumSteps([10, 9, 9, 8], 17), 1);
Test.assert_equals(minimumSteps([8, 9, 10, 4, 2], 23), 3);
Test.assert_equals(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
Test.assert_equals(minimumSteps([4, 6, 3], 2), 0);

// 2020/12/07 18:41
import { isInteresting } from './4 kyu Catching Car Mileage Numbers';
// Test.assert_equals( isInteresting(3, [1337, 256]),     0);
// Test.assert_equals( isInteresting(1336, [1337, 256]),  1);
// Test.assert_equals( isInteresting(1337, [1337, 256]),  2);
// Test.assert_equals( isInteresting(11208, [1337, 256]), 0);
// Test.assert_equals( isInteresting(11209, [1337, 256]), 1);
// Test.assert_equals( isInteresting(11211, [1337, 256]), 2);
// Test.assert_equals(isInteresting(123, []), 2);
// Test.assert_equals( isInteresting(67890, []), 2);
Test.assert_equals( isInteresting(98, []), 1);

// 2020/12/08 16:06
import { maxTriSum } from "./7 kyu Maximum Triplet Sum (Array Series #7)";
Test.assert_equals(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
Test.assert_equals(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
Test.assert_equals(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
Test.assert_equals(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
Test.assert_equals(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
Test.assert_equals(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
Test.assert_equals(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
Test.assert_equals(maxTriSum([-2, 0, 2]), 0);
Test.assert_equals(maxTriSum([-2, -4, 0, -9, 2]), 0);
Test.assert_equals(maxTriSum([-5, -1, -9, 0, 2]), 1);

// 2020/12/08 16:58
import { G964_1208, G964_1208_BP } from './5 kyu Decimal to Factorial and Back';
// const G964_12081:G964_1208 = new G964_1208();
// Test.assert_equals(G964_1208.dec2FactString(463), "341010");
// Test.assert_equals(G964_1208.dec2FactString(2982), "4041000");
// Test.assert_equals(G964_1208.dec2FactString(36288000), "A0000000000");
Test.assert_equals(G964_1208.dec2FactString(3628800054), "76A0000021000");
// Test.assert_equals(G964_1208.factString2Dec("341010"), 463);
Test.assert_equals(G964_1208.factString2Dec("76A0000021000"), 3628800054);
Test.assert_equals(G964_1208_BP.dec2FactString(3628800054), "76A0000021000");
Test.assert_equals(G964_1208_BP.factString2Dec("76A0000021000"), 3628800054);

// 2020/12/09 23:45
import { nextBigger, nextBiggerBP } from "./4 kyu Next bigger number with the same digits";
// Test.assert_equals(isMaxAtFirst(1234567890), false);
// Test.assert_equals(isMaxAtFirst(9876543210), true);
// Test.assert_equals(isMaxAtFirst(9999999999), true);

Test.assert_equals(nextBigger(12), 21);
Test.assert_equals(nextBigger(513), 531);
Test.assert_equals(nextBigger(2017), 2071);
Test.assert_equals(nextBigger(414), 441);
Test.assert_equals(nextBigger(144), 414);

Test.assert_equals(nextBigger(123456789), 123456798);
Test.assert_equals(nextBigger(1234567890), 1234567908);
Test.assert_equals(nextBigger(9876543210), -1);
Test.assert_equals(nextBigger(9999999999), -1);
Test.assert_equals(nextBigger(59884848459853), 59884848483559);

Test.assert_equals(nextBigger(545709101), 545709110);
Test.assert_equals(nextBigger(95322050), 95322500);

Test.assert_equals(nextBiggerBP(545709101), 545709110);
Test.assert_equals(nextBiggerBP(95322050), 95322500);

// 2020/12/13  0:05
import { rowWeights } from './7 kyu Row Weights(Array Series #8?)';
Test.assert_equals(rowWeights([80]), [80, 0]);
Test.assert_equals(rowWeights([100, 50]), [100, 50]);
Test.assert_equals(rowWeights([50, 60, 70, 80]), [120, 140]);
Test.assert_equals(rowWeights([13, 27, 49]), [62, 27]);
Test.assert_equals(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
Test.assert_equals(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
Test.assert_equals(rowWeights([0]), [0, 0]);
Test.assert_equals(rowWeights([100, 51, 50, 100]), [150, 151]);
Test.assert_equals(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
Test.assert_equals(rowWeights([0, 1, 0]), [0, 1]);

// 2020/12/13 17:30
import { determinant } from './4 kyu Matrix Determinant';
const m1 = [[1, 3], [2, 5]];
const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];
expect(determinant([[1]])).to.equal(1);
expect(determinant(m1)).to.equal(-1);
expect(determinant(m2)).to.equal(-20);

// 2020/12/15 16:43 Rustで提出しようと思う
import { solution as solution1225 } from './8 kyu Reversed Strings';
assert.equal(solution1225('world'), 'dlrow');
assert.equal(solution1225('hello'), 'olleh');
assert.equal(solution1225(''), '');
assert.equal(solution1225('h'), 'h');

// 2020/12/21  0:23
import { GeneticAlgorithm } from './5 kyu Binary Genetic Algorithms';
const geneticAlgorithm = new GeneticAlgorithm();
// geneticAlgorithm.run(fitness, 10, 0.6, 0.002, 100);

// 2020/12/21 12:15
import { G964_20201221 } from './5 kyu Some Egyptian fractions';
// function testing(s:any, expected:any) {
//   Test.assert_equals(G964_20201221.decompose(s), expected)
// }
// testing("3/4", ["1/2", "1/4"]);
// testing("12/4", ["3"]);
// testing("4/5", ["1/2", "1/4", "1/20"]);
// testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);

// 2020/12/21 21:44
import { G964_20201222 } from './5 kyu Help your granny!';
var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
Test.assert_equals(G964_20201222.tour(friends1, fTowns1, distTable1), 889);
friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
fTowns1 = [['A1', 'X1'],
['A2', 'X2'],
['A3', 'X3'],
['A4', 'X4'],
['A5', 'X5']];
distTable1 = ['X1', 100, 'X2', 200, 'X3', 250, 'X4', 300, 'X5', 320];
Test.assert_equals(G964_20201222.tour(friends1, fTowns1, distTable1), 1020);

// 2020/12/24  0:57
import { accum } from './7 kyu Mumbling';
assert.strictEqual(
    accum("ZpglnRxqenU"),
    "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
  );
assert.strictEqual(
  accum("NyffsGeyylB"),
  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
);
assert.strictEqual(
  accum("MjtkuBovqrU"),
  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);
assert.strictEqual(
  accum("EvidjUnokmM"),
  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
);
assert.strictEqual(
  accum("HbideVbxncC"),
  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
);

// 2020/12/25  0:40
import {potatoes} from './7 kyu Drying Potatoes';
assert.strictEqual(potatoes(82, 127, 80), 114);
assert.strictEqual(potatoes(93, 129, 91), 100);
assert.strictEqual(potatoes(84, 65, 80), 52);
assert.strictEqual(potatoes(83, 105, 79), 85);

// 2020/12/27 23:52
import { G964_1227 } from './5 kyu Integers: Recreation One';
Test.assert_equals(G964_1227.listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
Test.assert_equals(G964_1227.listSquared(42, 250), [[42, 2500], [246, 84100]]);
Test.assert_equals(G964_1227.listSquared(250, 500), [[287, 84100]]);
Test.assert_equals(G964_1227.listSquared(300, 600), []);

// 2020/12/30  0:05
import { G964_1229 } from './/5 kyu Fibo akin';
function dotest1(n: number, k:number, res:number) {
    assert.equal(G964_1229.lengthSupUK(n, k), res)
}
function dotest2(n:number, res:number) {
    assert.equal(G964_1229.comp(n), res)
}
dotest1(50, 25, 2);
dotest1(3332, 973, 1391);
dotest1(2941, 862, 1246);
dotest1(3177, 573, 2047);
dotest1(1745, 645, 474);

dotest2(74626, 37128);
dotest2(71749, 35692);
dotest2(56890, 28281);
dotest2(60441, 30054);
dotest2(21361, 10581);
