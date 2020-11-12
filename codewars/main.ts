
import Test from './TestCodewar';
// let test = new Test();//__filename

import TimeMeasure from './TimeMeasure';

import m1 = require("./8 kyu The falling speed of petals");

// m1.sakuraFall(0);
// m1.sakuraFall(5);
m1.sakuraFall(10);
// m1.sakuraFall(-1);
// m1.sakuraFall(200);

// console.log(m1.f(1000)); // "1,000円"
// console.log(m1.f2(1000)); // "1,000円"
// console.log(m1.f2(1000, 'ペソ')); // "1,000ペソ"

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
