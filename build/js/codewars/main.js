"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var m1 = require("./8 kyu The falling speed of petals");
// m1.sakuraFall(0);
// m1.sakuraFall(5);
m1.sakuraFall(10);
// m1.sakuraFall(-1);
// m1.sakuraFall(200);
// console.log(m1.f(1000)); // "1,000円"
// console.log(m1.f2(1000)); // "1,000円"
// console.log(m1.f2(1000, 'ペソ')); // "1,000ペソ"
var TestCodewar_1 = __importDefault(require("./TestCodewar"));
var test = new TestCodewar_1.default(); //__filename
var isograms = require("./7 kyu Isograms");
test.assert_equals(isograms.isIsogram("Dermatoglyphics"), true); // isograms.isIsogram("Dermatoglyphics")//, true );
// test.assert_equals(isograms.isIsogram("isogram"), true );
// test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// test.assert_equals(isograms.isIsogram("isIsogram"), false );
// test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");
var _7_kyu_Vowel_Count_1 = require("./7 kyu Vowel Count");
test.assert_equals(_7_kyu_Vowel_Count_1.Kata.getCount("abracadabra"), 5);
var shark = require("./8 kyu Holiday VI - Shark Pontoon");
test.assert_equals(shark.shark(12, 50, 4, 8, true), "Alive!");
test.assert_equals(shark.shark(7, 55, 4, 16, true), "Alive!");
test.assert_equals(shark.shark(24, 0, 4, 8, true), "Shark Bait!");
test.assert_equals(shark.shark(40, 35, 3, 20, true), "Shark Bait!");
test.assert_equals(shark.shark(7, 8, 3, 4, true), "Alive!");
var nextid = require("./8 kyu Smallest unused ID");
test.assert_equals(nextid.nextId([0, 1, 2, 3, 5]), 4);
test.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
var _8_kyu_Convert_a_Number_to_a_String_1 = require("./8 kyu Convert a Number to a String!");
test.assert_equals(_8_kyu_Convert_a_Number_to_a_String_1.numberToString(67), '67');
var _8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1 = require("./8 kyu Convert boolean values to strings 'Yes' or 'No'");
test.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(true), "Yes");
test.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(false), "No");
var _8_kyu_Counting_sheep___1 = require("./8 kyu Counting sheep...");
var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, undefined,
    true, false, null, true,
    true, true, true, true,
    false, false, true, true];
var result1 = _8_kyu_Counting_sheep___1.countSheeps(array1);
test.assert_equals(result1, 17, "There are 17 sheeps in total, not " + result1);
var _7_kyu_Reverse_words_1 = require("./7 kyu Reverse words");
test.assert_equals(_7_kyu_Reverse_words_1.reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
test.assert_equals(_7_kyu_Reverse_words_1.reverseWords('apple'), 'elppa');
test.assert_equals(_7_kyu_Reverse_words_1.reverseWords('a b c d'), 'a b c d');
test.assert_equals(_7_kyu_Reverse_words_1.reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';
// const iqtest = new IqTest(1);
// test.assert_equals(iqtest.iqTest('2 4 7 8 10'),3);
// test.assert_equals(iqtest.iqTest('1 2 2'),1);
//* methodのみ
var _6_kyu_IQ_Test_1 = require("./6 kyu IQ Test");
test.assert_equals(_6_kyu_IQ_Test_1.iqTest('2 4 7 8 10'), 3);
test.assert_equals(_6_kyu_IQ_Test_1.iqTest('1 2 2'), 1);
var _6_kyu_Counting_Duplicates_1 = require("./6 kyu Counting Duplicates"); //,duplicateCount_
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount(""), 0);
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("abcde"), 0);
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("aabbcde"), 2);
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("aabBcde"), 2, "should ignore case");
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("Indivisibility"), 1);
test.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");
// test.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");
var _5_kyu_Primes_in_numbers_1 = require("./5 kyu Primes in numbers");
test.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7775460, "(2**2)(3**3)(5)(7)(11**2)(17)");
test.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7919, "(7919)");
test.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 17 * 17 * 93 * 677, "(3)(17**2)(31)(677)");
//# sourceMappingURL=main.js.map