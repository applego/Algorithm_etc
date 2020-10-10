

import m1 = require("./8 kyu The falling speed of petals");

// m1.sakuraFall(0);
// m1.sakuraFall(5);
m1.sakuraFall(10);
// m1.sakuraFall(-1);
// m1.sakuraFall(200);

// console.log(m1.f(1000)); // "1,000円"
// console.log(m1.f2(1000)); // "1,000円"
// console.log(m1.f2(1000, 'ペソ')); // "1,000ペソ"

import MyTest from './TestCodewar';
// let test = new MyTest();//__filename

import isograms = require('./7 kyu Isograms');
MyTest.assert_equals(isograms.isIsogram("Dermatoglyphics"), true);// isograms.isIsogram("Dermatoglyphics")//, true );
// MyTest.assert_equals(isograms.isIsogram("isogram"), true );
// MyTest.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// MyTest.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// MyTest.assert_equals(isograms.isIsogram("isIsogram"), false );
// MyTest.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");

import { Kata } from './7 kyu Vowel Count';

MyTest.assert_equals(Kata.getCount("abracadabra"), 5);

import shark = require('./8 kyu Holiday VI - Shark Pontoon');

MyTest.assert_equals(shark.shark(12, 50, 4, 8, true), "Alive!");
MyTest.assert_equals(shark.shark(7, 55, 4, 16, true), "Alive!");
MyTest.assert_equals(shark.shark(24, 0, 4, 8, true), "Shark Bait!");
MyTest.assert_equals(shark.shark(40, 35, 3, 20, true), "Shark Bait!");
MyTest.assert_equals(shark.shark(7, 8, 3, 4, true), "Alive!");

import nextid = require('./8 kyu Smallest unused ID');

MyTest.assert_equals(nextid.nextId([0,1,2,3,5]), 4);
MyTest.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);

import { numberToString } from './8 kyu Convert a Number to a String!';

MyTest.assert_equals(numberToString(67), '67');

import { boolToWord } from "./8 kyu Convert boolean values to strings 'Yes' or 'No'";

MyTest.assert_equals(boolToWord(true), "Yes");
MyTest.assert_equals(boolToWord(false), "No");


import { countSheeps } from "./8 kyu Counting sheep...";

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  undefined,
  true,  false, null, true ,
  true,  true,  true,  true ,
  false, false, true, true];

const result1 = countSheeps(array1);
MyTest.assert_equals(result1, 17, "There are 17 sheeps in total, not " + result1);

import { reverseWords } from "./7 kyu Reverse words";
MyTest.assert_equals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
MyTest.assert_equals(reverseWords('apple'), 'elppa');
MyTest.assert_equals(reverseWords('a b c d'), 'a b c d');
MyTest.assert_equals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';

// const iqtest = new IqTest(1);
// MyTest.assert_equals(iqMyTest.iqTest('2 4 7 8 10'),3);
// MyTest.assert_equals(iqMyTest.iqTest('1 2 2'),1);
//* methodのみ
import { iqTest } from './6 kyu IQ Test';

MyTest.assert_equals(iqTest('2 4 7 8 10'),3);
MyTest.assert_equals(iqTest('1 2 2'), 1);

import { duplicateCount} from './6 kyu Counting Duplicates';//,duplicateCount_

MyTest.assert_equals(duplicateCount(""), 0);
MyTest.assert_equals(duplicateCount("abcde"), 0);
MyTest.assert_equals(duplicateCount("aabbcde"), 2);
MyTest.assert_equals(duplicateCount("aabBcde"), 2,"should ignore case");
MyTest.assert_equals(duplicateCount("Indivisibility"), 1);
MyTest.assert_equals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");

// MyTest.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");

import { G964 } from './5 kyu Primes in numbers';

MyTest.assert_equals_param_func(G964.primeFactors,7775460,"(2**2)(3**3)(5)(7)(11**2)(17)");
MyTest.assert_equals_param_func(G964.primeFactors,7919,"(7919)");
MyTest.assert_equals_param_func(G964.primeFactors, 17 * 17 * 93 * 677, "(3)(17**2)(31)(677)");

import { findOdd } from "./6 kyu Find the odd int";

MyTest.assert_equals_param_func(findOdd, [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
MyTest.assert_equals_param_func(findOdd, [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
MyTest.assert_equals_param_func(findOdd, [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
MyTest.assert_equals_param_func(findOdd, [10], 10);
MyTest.assert_equals_param_func(findOdd, [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
MyTest.assert_equals_param_func(findOdd, [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// MyTest.assert_equals(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

import { order } from './6 kyu Your order, please';

MyTest.assert_equals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
MyTest.assert_equals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
MyTest.assert_equals(order(""), "");
