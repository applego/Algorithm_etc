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
//# sourceMappingURL=main.js.map