"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TestCodewar_1 = __importDefault(require("./TestCodewar"));
// let test = new Test();//__filename
var TimeMeasure_1 = __importDefault(require("./TimeMeasure"));
var m1 = require("./8 kyu The falling speed of petals");
// m1.sakuraFall(0);
// m1.sakuraFall(5);
m1.sakuraFall(10);
// m1.sakuraFall(-1);
// m1.sakuraFall(200);
// console.log(m1.f(1000)); // "1,000円"
// console.log(m1.f2(1000)); // "1,000円"
// console.log(m1.f2(1000, 'ペソ')); // "1,000ペソ"
var isograms = require("./7 kyu Isograms");
TestCodewar_1.default.assert_equals(isograms.isIsogram("Dermatoglyphics"), true); // isograms.isIsogram("Dermatoglyphics")//, true );
// Test.assert_equals(isograms.isIsogram("isogram"), true );
// Test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assert_equals(isograms.isIsogram("isIsogram"), false );
// Test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");
var _7_kyu_Vowel_Count_1 = require("./7 kyu Vowel Count");
TestCodewar_1.default.assert_equals(_7_kyu_Vowel_Count_1.Kata.getCount("abracadabra"), 5);
var shark = require("./8 kyu Holiday VI - Shark Pontoon");
TestCodewar_1.default.assert_equals(shark.shark(12, 50, 4, 8, true), "Alive!");
TestCodewar_1.default.assert_equals(shark.shark(7, 55, 4, 16, true), "Alive!");
TestCodewar_1.default.assert_equals(shark.shark(24, 0, 4, 8, true), "Shark Bait!");
TestCodewar_1.default.assert_equals(shark.shark(40, 35, 3, 20, true), "Shark Bait!");
TestCodewar_1.default.assert_equals(shark.shark(7, 8, 3, 4, true), "Alive!");
var nextid = require("./8 kyu Smallest unused ID");
TestCodewar_1.default.assert_equals(nextid.nextId([0, 1, 2, 3, 5]), 4);
TestCodewar_1.default.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
var _8_kyu_Convert_a_Number_to_a_String_1 = require("./8 kyu Convert a Number to a String!");
TestCodewar_1.default.assert_equals(_8_kyu_Convert_a_Number_to_a_String_1.numberToString(67), '67');
var _8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1 = require("./8 kyu Convert boolean values to strings 'Yes' or 'No'");
TestCodewar_1.default.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(true), "Yes");
TestCodewar_1.default.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(false), "No");
var _8_kyu_Counting_sheep___1 = require("./8 kyu Counting sheep...");
var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, undefined,
    true, false, null, true,
    true, true, true, true,
    false, false, true, true];
var result1 = _8_kyu_Counting_sheep___1.countSheeps(array1);
TestCodewar_1.default.assert_equals(result1, 17, "There are 17 sheeps in total, not " + result1);
var _7_kyu_Reverse_words_1 = require("./7 kyu Reverse words");
TestCodewar_1.default.assert_equals(_7_kyu_Reverse_words_1.reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
TestCodewar_1.default.assert_equals(_7_kyu_Reverse_words_1.reverseWords('apple'), 'elppa');
TestCodewar_1.default.assert_equals(_7_kyu_Reverse_words_1.reverseWords('a b c d'), 'a b c d');
TestCodewar_1.default.assert_equals(_7_kyu_Reverse_words_1.reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';
// const iqtest = new IqTest(1);
// Test.assert_equals(iqTest.iqTest('2 4 7 8 10'),3);
// Test.assert_equals(iqTest.iqTest('1 2 2'),1);
//* methodのみ
var _6_kyu_IQ_Test_1 = require("./6 kyu IQ Test");
TestCodewar_1.default.assert_equals(_6_kyu_IQ_Test_1.iqTest('2 4 7 8 10'), 3);
TestCodewar_1.default.assert_equals(_6_kyu_IQ_Test_1.iqTest('1 2 2'), 1);
var _6_kyu_Counting_Duplicates_1 = require("./6 kyu Counting Duplicates"); //,duplicateCount_
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount(""), 0);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("abcde"), 0);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("aabbcde"), 2);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("aabBcde"), 2, "should ignore case");
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("Indivisibility"), 1);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");
// Test.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");
var _5_kyu_Primes_in_numbers_1 = require("./5 kyu Primes in numbers");
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7775460, "(2**2)(3**3)(5)(7)(11**2)(17)");
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7919, "(7919)");
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 17 * 17 * 93 * 677, "(3)(17**2)(31)(677)");
var _6_kyu_Find_the_odd_int_1 = require("./6 kyu Find the odd int");
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [10], 10);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// Test.assert_equals(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
var _6_kyu_Your_order__please_1 = require("./6 kyu Your order, please");
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order(""), "");
//かんたんなの
var _8_kyu_Returning_Strings_1 = require("./8 kyu Returning Strings");
TestCodewar_1.default.assert_equals(_8_kyu_Returning_Strings_1.greet("Ryan"), "Hello, Ryan how are you doing today?");
TestCodewar_1.default.assert_equals(_8_kyu_Returning_Strings_1.greet("Shingles"), "Hello, Shingles how are you doing today?");
var _8_kyu_Gravity_Flip_1 = require("./8 kyu Gravity Flip");
TestCodewar_1.default.assert_equals(_8_kyu_Gravity_Flip_1.flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
TestCodewar_1.default.assert_equals(_8_kyu_Gravity_Flip_1.flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
var _8_kyu_A_wolf_in_sheep_s_clothing_1 = require("./8 kyu A wolf in sheep_s clothing");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
//一旦飛ばす
var _6_kyu_Are_they_the__same__1 = require("./6 kyu Are they the \"same\"?");
var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), true);
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), false);
a1 = [2, 2, 3];
a2 = [4, 9, 9];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), false);
//* 拡張メソッド fizzBuzzOutput(30)
var _6_kyu_Valid_Braces_1 = require("./6 kyu Valid Braces");
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("()"), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("[(])"), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("(){}[]"), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("([{}])"), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("(}"), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("[(])"), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces("[({})](]"), false);
// 2020/10/22 16:22
var _7_kyu_String_ends_with_1 = require("./7 kyu String ends with?");
TestCodewar_1.default.assert_equals(_7_kyu_String_ends_with_1.solution('abcde', 'cde'), true);
TestCodewar_1.default.assert_equals(_7_kyu_String_ends_with_1.solution('abcde', 'abc'), false);
TestCodewar_1.default.assert_equals(_7_kyu_String_ends_with_1.solution('abc', ''), true);
// 2020/10/23 14:35
var _7_kyu_Count_the_divisors_of_a_number_1 = require("./7 kyu Count the divisors of a number");
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_divisors_of_a_number_1.divisors(1), 1);
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_divisors_of_a_number_1.divisors(10), 4);
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_divisors_of_a_number_1.divisors(11), 2);
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_divisors_of_a_number_1.divisors(54), 8);
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_divisors_of_a_number_1.divisors(64), 7);
console.log(_7_kyu_Count_the_divisors_of_a_number_1.divisors2(10));
// 2020/10/23 19:47
var _7_kyu_Two_to_One_1 = require("./7 kyu Two to One");
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest("aretheyhere", "yestheyarehere"), "aehrsty");
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
// 2020/10/27 13:29
var _6_kyu_Take_a_Ten_Minute_Walk_1 = require("./6 kyu Take a Ten Minute Walk");
TestCodewar_1.default.assert_equals(_6_kyu_Take_a_Ten_Minute_Walk_1.isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
TestCodewar_1.default.assert_equals(_6_kyu_Take_a_Ten_Minute_Walk_1.isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), false);
TestCodewar_1.default.assert_equals(_6_kyu_Take_a_Ten_Minute_Walk_1.isValidWalk(['w']), false);
TestCodewar_1.default.assert_equals(_6_kyu_Take_a_Ten_Minute_Walk_1.isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), false);
// 2020/10/30  9:58
var _5_kyu_Diophantine_Equation_1 = require("./5 kyu Diophantine Equation");
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(5), [[3, 1]]);
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(12), [[4, 1]]);
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(13), [[7, 3]]);
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(16), [[4, 0]]);
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(90002), []);
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(90005), [[45003, 22501], [9003, 4499], [981, 467], [309, 37]]);
// 2020/11/03  0:18
var _6_kyu_Multiplication_table_1 = require("./6 kyu Multiplication table");
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(1), [[1]]);
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(2), [[1, 2], [2, 4]]);
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
// 2020/11/04 22:37
var _6_kyu_Irreducible_Sum_of_Rationals_1 = require("./6 kyu Irreducible Sum of Rationals");
TimeMeasure_1.default.measure('sumFracts', function () {
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [[1, 2], [1, 3], [1, 4]], "[13, 12]");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [[1, 3], [5, 3]], "2");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [[12, 3], [15, 3]], "9");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [[2, 7], [1, 3], [1, 12]], "[59, 84]");
});
TimeMeasure_1.default.measure('sumFracts1', function () {
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [[1, 2], [1, 3], [1, 4]], "[13, 12]");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [[1, 3], [5, 3]], "2");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [[12, 3], [15, 3]], "9");
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [[2, 7], [1, 3], [1, 12]], "[59, 84]");
});
// 2020/11/05 18:31
var _8_kyu_Square_n__Sum_1 = require("./8 kyu Square(n) Sum");
TimeMeasure_1.default.measure('squareSum', function () {
    TestCodewar_1.default.assert_equals(_8_kyu_Square_n__Sum_1.squareSum([1, 2]), 5);
    TestCodewar_1.default.assert_equals(_8_kyu_Square_n__Sum_1.squareSum([0, 3, 4, 5]), 50);
    TestCodewar_1.default.assert_equals(_8_kyu_Square_n__Sum_1.squareSum([-1, -2]), 5);
    TestCodewar_1.default.assert_equals(_8_kyu_Square_n__Sum_1.squareSum_bp([-1, -2]), 5);
});
// 2020/11/09 12:15
var _6_kyu_Playing_with_digits_1 = require("./6 kyu Playing with digits");
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_6_kyu_Playing_with_digits_1.G964_1109.digPow(89, 1), 1);
});
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_6_kyu_Playing_with_digits_1.G964_1109.digPow(92, 1), -1);
});
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_6_kyu_Playing_with_digits_1.G964_1109.digPow(114, 3), 9);
});
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_6_kyu_Playing_with_digits_1.G964_1109.digPow(695, 2), 2);
});
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_6_kyu_Playing_with_digits_1.G964_1109.digPow(46288, 3), 51);
});
// 2020/11/12 21:40
var _8_kyu_Reversed_Words_1 = require("./8 kyu Reversed Words");
TimeMeasure_1.default.measure('dig_pow', function () {
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("hello world!"), "world! hello");
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("foobar"), "foobar");
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("kata editor"), "editor kata");
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("row row row your boat"), "boat your row row row");
});
// 2020/11/16 23:35
var _8_kyu_Keep_Hydrated_1 = require("./8 kyu Keep Hydrated");
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(2), 1);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(1.4), 0);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(12.3), 6);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(0.82), 0);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(11.8), 5);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(1787), 893);
TestCodewar_1.default.assert_equals(_8_kyu_Keep_Hydrated_1.litres(0), 0);
// 2020/11/20 22:44
var _8_kyu_L1_Set_Alarm_1 = require("./8 kyu L1 Set Alarm");
TestCodewar_1.default.assert_equals(_8_kyu_L1_Set_Alarm_1.setAlarm(true, true), false);
TestCodewar_1.default.assert_equals(_8_kyu_L1_Set_Alarm_1.setAlarm(false, true), false);
TestCodewar_1.default.assert_equals(_8_kyu_L1_Set_Alarm_1.setAlarm(true, false), true);
TestCodewar_1.default.assert_equals(_8_kyu_L1_Set_Alarm_1.setAlarm(false, false), false);
// 2020/11/24 22:48
//start Playing with lists/arrays https://www.codewars.com/collections/playing-with-lists-slash-arrays
var _7_kyu_Maximum_Product_1 = require("./7 kyu Maximum Product");
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([5, 8]), 40);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([1, 2, 3]), 6);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([1, 5, 10, 9]), 90);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Product_1.adjacentElementsProduct([1, 2, 3, 0]), 6);
// 2020/11/25 12:39
var _7_kyu_Minimize_Sum_Of_Array__Array_Series__1_1 = require("./7 kyu Minimize Sum Of Array (Array Series #1)");
TestCodewar_1.default.assert_equals(_7_kyu_Minimize_Sum_Of_Array__Array_Series__1_1.minSum([5, 4, 2, 3]), 22);
TestCodewar_1.default.assert_equals(_7_kyu_Minimize_Sum_Of_Array__Array_Series__1_1.minSum([12, 6, 10, 26, 3, 24]), 342);
TestCodewar_1.default.assert_equals(_7_kyu_Minimize_Sum_Of_Array__Array_Series__1_1.minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
var _7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1 = require("./7 kyu Product Of Maximums Of Array (Array Series #2)");
TestCodewar_1.default.assert_equals(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([4, 3, 5], 2), 20);
// 2020/11/27 18:02
var _7_kyu_Array_Leaders__Array_Series__3_1 = require("./7 kyu Array Leaders (Array Series #3)");
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([1, 2, 3, 4, 0]), [4]);
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-1, -29, -26, -2]), [-1]);
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-36, -12, -27]), [-36, -12]);
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([5, -2, 2]), [5, 2]);
TestCodewar_1.default.assert_equals(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
// 2020/11/30 22:40
var _7_kyu_Maximum_Gap__Array_Series__4_1 = require("./7 kyu Maximum Gap (Array Series #4)");
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 10, 2, 9, 5]), 4);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 3, 5]), 8);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([24, 299, 131, 14, 26, 25]), 168);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-3, -27, -4, -2]), 23);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-7, -42, -809, -14, -12]), 767);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([12, -5, -7, 0, 290]), 278);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([130, 30, 50]), 80);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([1, 1, 1]), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-1, -1, -1]), 0);
// 2020/12/02  0:39
var _7_kyu_Product_Array__Array_Series__5_1 = require("./7 kyu Product Array (Array Series #5)");
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]);
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]);
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]);
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]);
// 2020/12/07 11:37
var _7_kyu_Minimum_Steps__Array_Series__6_1 = require("./7 kyu Minimum Steps (Array Series #6)");
TestCodewar_1.default.assert_equals(_7_kyu_Minimum_Steps__Array_Series__6_1.minimumSteps([4, 6, 3], 7), 1);
TestCodewar_1.default.assert_equals(_7_kyu_Minimum_Steps__Array_Series__6_1.minimumSteps([10, 9, 9, 8], 17), 1);
TestCodewar_1.default.assert_equals(_7_kyu_Minimum_Steps__Array_Series__6_1.minimumSteps([8, 9, 10, 4, 2], 23), 3);
TestCodewar_1.default.assert_equals(_7_kyu_Minimum_Steps__Array_Series__6_1.minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
TestCodewar_1.default.assert_equals(_7_kyu_Minimum_Steps__Array_Series__6_1.minimumSteps([4, 6, 3], 2), 0);
// 2020/12/07 18:41
var _4_kyu_Catching_Car_Mileage_Numbers_1 = require("./4 kyu Catching Car Mileage Numbers");
// Test.assert_equals( isInteresting(3, [1337, 256]),     0);
// Test.assert_equals( isInteresting(1336, [1337, 256]),  1);
// Test.assert_equals( isInteresting(1337, [1337, 256]),  2);
// Test.assert_equals( isInteresting(11208, [1337, 256]), 0);
// Test.assert_equals( isInteresting(11209, [1337, 256]), 1);
// Test.assert_equals( isInteresting(11211, [1337, 256]), 2);
// Test.assert_equals(isInteresting(123, []), 2);
// Test.assert_equals( isInteresting(67890, []), 2);
TestCodewar_1.default.assert_equals(_4_kyu_Catching_Car_Mileage_Numbers_1.isInteresting(98, []), 1);
// 2020/12/08 16:06
var _7_kyu_Maximum_Triplet_Sum__Array_Series__7_1 = require("./7 kyu Maximum Triplet Sum (Array Series #7)");
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([3, 2, 6, 8, 2, 3]), 17);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, 0, 2]), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, -4, 0, -9, 2]), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-5, -1, -9, 0, 2]), 1);
// 2020/12/08 16:58
var _5_kyu_Decimal_to_Factorial_and_Back_1 = require("./5 kyu Decimal to Factorial and Back");
// const G964_12081:G964_1208 = new G964_1208();
// Test.assert_equals(G964_1208.dec2FactString(463), "341010");
// Test.assert_equals(G964_1208.dec2FactString(2982), "4041000");
// Test.assert_equals(G964_1208.dec2FactString(36288000), "A0000000000");
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.dec2FactString(3628800054), "76A0000021000");
// Test.assert_equals(G964_1208.factString2Dec("341010"), 463);
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.factString2Dec("76A0000021000"), 3628800054);
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.dec2FactString(3628800054), "76A0000021000");
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.factString2Dec("76A0000021000"), 3628800054);
// 2020/12/09 23:45
var _4_kyu_Next_bigger_number_with_the_same_digits_1 = require("./4 kyu Next bigger number with the same digits");
// Test.assert_equals(isMaxAtFirst(1234567890), false);
// Test.assert_equals(isMaxAtFirst(9876543210), true);
// Test.assert_equals(isMaxAtFirst(9999999999), true);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(12), 21);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(513), 531);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(2017), 2071);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(414), 441);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(144), 414);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(123456789), 123456798);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(1234567890), 1234567908);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9876543210), -1);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9999999999), -1);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(59884848459853), 59884848483559);
//# sourceMappingURL=main.js.map