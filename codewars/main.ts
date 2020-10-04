

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
let test = new MyTest();//__filename

import isograms = require('./7 kyu Isograms');
test.assert_equals(isograms.isIsogram("Dermatoglyphics"), true);// isograms.isIsogram("Dermatoglyphics")//, true );
// test.assert_equals(isograms.isIsogram("isogram"), true );
// test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// test.assert_equals(isograms.isIsogram("isIsogram"), false );
// test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");

import { Kata } from './7 kyu Vowel Count';

test.assert_equals(Kata.getCount("abracadabra"), 5);

import shark = require('./8 kyu Holiday VI - Shark Pontoon');

test.assert_equals(shark.shark(12, 50, 4, 8, true), "Alive!");
test.assert_equals(shark.shark(7, 55, 4, 16, true), "Alive!");
test.assert_equals(shark.shark(24, 0, 4, 8, true), "Shark Bait!");
test.assert_equals(shark.shark(40, 35, 3, 20, true), "Shark Bait!");
test.assert_equals(shark.shark(7, 8, 3, 4, true), "Alive!");

import nextid = require('./8 kyu Smallest unused ID');

test.assert_equals(nextid.nextId([0,1,2,3,5]), 4);
test.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);

import { numberToString } from './8 kyu Convert a Number to a String!';

test.assert_equals(numberToString(67), '67');

import { boolToWord } from "./8 kyu Convert boolean values to strings 'Yes' or 'No'";

test.assert_equals(boolToWord(true), "Yes");
test.assert_equals(boolToWord(false), "No");


import { countSheeps } from "./8 kyu Counting sheep...";

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  undefined,
  true,  false, null, true ,
  true,  true,  true,  true ,
  false, false, true, true];

const result1 = countSheeps(array1);
test.assert_equals(result1, 17, "There are 17 sheeps in total, not " + result1);

import { reverseWords } from "./7 kyu Reverse words";
test.assert_equals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
test.assert_equals(reverseWords('apple'), 'elppa');
test.assert_equals(reverseWords('a b c d'), 'a b c d');
test.assert_equals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';

// const iqtest = new IqTest(1);
// test.assert_equals(iqtest.iqTest('2 4 7 8 10'),3);
// test.assert_equals(iqtest.iqTest('1 2 2'),1);
//* methodのみ
import { iqTest } from './6 kyu IQ Test';

test.assert_equals(iqTest('2 4 7 8 10'),3);
test.assert_equals(iqTest('1 2 2'),1);