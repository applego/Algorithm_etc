"use strict";
// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var _7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1 = require("./7 kyu Product Of Maximums Of Array (Array Series #2)");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('maxProduct([4, 3, 5], 2)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([4, 3, 5], 2), 20);
    });
    mocha_1.it('maxProduct([10, 8, 7, 9], 3)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 8, 7, 9], 3), 720);
    });
    mocha_1.it('maxProduct([8, 6, 4, 6], 3)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([8, 6, 4, 6], 3), 288);
    });
    mocha_1.it('maxProduct([10, 2, 3, 8, 1, 10, 4], 5)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600);
    });
    mocha_1.it('maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
    });
    mocha_1.it('maxProduct([-4, -27, -15, -6, -1], 2)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([-4, -27, -15, -6, -1], 2), 4);
    });
    mocha_1.it('maxProduct([-17, -8, -102, -309], 2)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([-17, -8, -102, -309], 2), 136);
    });
    mocha_1.it('maxProduct([10, 3, -27, -1], 3)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 3, -27, -1], 3), -30);
    });
    mocha_1.it('maxProduct([14, 29, -28, 39, -16, -48], 4)', function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([14, 29, -28, 39, -16, -48], 4), -253344);
    });
    mocha_1.it('maxProduct([1], 1)', function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([1], 1), 1); });
});
var _7_kyu_Array_Leaders__Array_Series__3_1 = require("./7 kyu Array Leaders (Array Series #3)");
mocha_1.describe('Basic Tests', function () {
    mocha_1.it('Testing for [1, 2, 3, 4, 0]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([1, 2, 3, 4, 0]), [4]);
    });
    mocha_1.it('Testing for [16, 17, 4, 3, 5, 2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
    });
    mocha_1.it('Testing for [-1, -29, -26, -2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-1, -29, -26, -2]), [-1]);
    });
    mocha_1.it('Testing for [-36, -12, -27]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-36, -12, -27]), [-36, -12]);
    });
    mocha_1.it('Testing for [5, -2, 2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([5, -2, 2]), [5, 2]);
    });
    mocha_1.it('Testing for [0, -1, -29, 3, 2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
    });
});
var _7_kyu_Maximum_Gap__Array_Series__4_1 = require("./7 kyu Maximum Gap (Array Series #4)");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('Testing for [13, 10, 2, 9, 5]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 10, 2, 9, 5]), 4);
    });
    mocha_1.it('Testing for [13, 3, 5]', function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 3, 5]), 8); });
    mocha_1.it('Testing for [24, 299, 131, 14, 26, 25]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([24, 299, 131, 14, 26, 25]), 168);
    });
    mocha_1.it('Testing for [-3, -27, -4, -2]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-3, -27, -4, -2]), 23);
    });
    mocha_1.it('Testing for [-7, -42, -809, -14, -12]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-7, -42, -809, -14, -12]), 767);
    });
    mocha_1.it('Testing for [12, -5, -7, 0, 290]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([12, -5, -7, 0, 290]), 278);
    });
    mocha_1.it('Testing for [-54, 37, 0, 64, -15, 640, 0]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
    });
    mocha_1.it('Testing for [130, 30, 50]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([130, 30, 50]), 80);
    });
    mocha_1.it('Testing for [1, 1, 1]', function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([1, 1, 1]), 0); });
    mocha_1.it('Testing for [-1, -1, -1]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-1, -1, -1]), 0);
    });
});
var _7_kyu_Product_Array__Array_Series__5_1 = require("./7 kyu Product Array (Array Series #5)");
mocha_1.describe('Basic Tests', function () {
    mocha_1.it('Testing for [12, 20]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]);
    });
    mocha_1.it('Testing for [12, 20]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]);
    });
    mocha_1.it('Testing for [3, 27, 4, 2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
    });
    mocha_1.it('Testing for [13, 10, 5, 2, 9]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([13, 10, 5, 2, 9]), [
            900,
            1170,
            2340,
            5850,
            1300,
        ]);
    });
    mocha_1.it('Testing for [16, 17, 4, 3, 5, 2]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([16, 17, 4, 3, 5, 2]), [
            2040,
            1920,
            8160,
            10880,
            6528,
            16320,
        ]);
    });
});
var _4_kyu_Catching_Car_Mileage_Numbers_1 = require("./4 kyu Catching Car Mileage Numbers");
1;
function test(n, awesome, expected) {
    chai_1.assert.strictEqual(_4_kyu_Catching_Car_Mileage_Numbers_1.isInteresting(n, awesome), expected);
}
mocha_1.describe('solution', function () {
    mocha_1.it('should work, dangit!', function () {
        test(3, [1337, 256], 0);
        test(1336, [1337, 256], 1);
        test(1337, [1337, 256], 2);
        test(11208, [1337, 256], 0);
        test(11209, [1337, 256], 1);
        test(11211, [1337, 256], 2);
    });
});
var _7_kyu_Maximum_Triplet_Sum__Array_Series__7_1 = require("./7 kyu Maximum Triplet Sum (Array Series #7)");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('Testing for [3, 2, 6, 8, 2, 3]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([3, 2, 6, 8, 2, 3]), 17);
    });
    mocha_1.it('Testing for [2, 9, 13, 10, 5, 2, 9, 5]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
    });
    mocha_1.it('Testing for [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
    });
    mocha_1.it('Testing for [-3, -27, -4, -2, -27, -2]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
    });
    mocha_1.it('Testing for [-14, -12, -7, -42, -809, -14, -12]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
    });
    mocha_1.it('Testing for [-13, -50, 57, 13, 67, -13, 57, 108, 67]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
    });
    mocha_1.it('Testing for [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
    });
    mocha_1.it('Testing for [-2, 0, 2]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, 0, 2]), 0);
    });
    mocha_1.it('Testing for [-2, -4, 0, -9, 2]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, -4, 0, -9, 2]), 0);
    });
    mocha_1.it('Testing for [-5, -1, -9, 0, 2]', function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-5, -1, -9, 0, 2]), 1);
    });
});
var _5_kyu_Decimal_to_Factorial_and_Back_1 = require("./5 kyu Decimal to Factorial and Back");
function testing1(nb, expected) {
    chai_1.assert.equal(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.dec2FactString(nb), expected);
}
function testing2(nb, expected) {
    chai_1.assert.equal(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.factString2Dec(nb), expected);
}
function testing1BP(nb, expected) {
    chai_1.assert.equal(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.dec2FactString(nb), expected);
}
function testing2BP(nb, expected) {
    chai_1.assert.equal(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.factString2Dec(nb), expected);
}
mocha_1.describe('Fixed Tests', function () {
    mocha_1.it('Basic tests dec2FactString', function () {
        testing1(2982, '4041000');
    });
    mocha_1.it('Basic tests factString2Dec', function () {
        testing2('341010', 463);
    });
    mocha_1.it('Basic tests dec2FactString BP', function () {
        testing1BP(2982, '4041000');
    });
    mocha_1.it('Basic tests factString2Dec BP', function () {
        testing2BP('341010', 463);
    });
});
var _4_kyu_Next_bigger_number_with_the_same_digits_1 = require("./4 kyu Next bigger number with the same digits");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('Small numbers', function () {
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(12), 21);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(513), 531);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(2017), 2071);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(414), 441);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(144), 414);
    });
    mocha_1.it('Bigger numbers', function () {
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(123456789), 123456798);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(1234567890), 1234567908);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9876543210), -1);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9999999999), -1);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(59884848459853), 59884848483559);
    });
});
var _7_kyu_Row_Weights_Array_Series__8__1 = require("./7 kyu Row Weights(Array Series #8?)");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('Testing for [80]', function () { return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([80]), [80, 0]); });
    mocha_1.it('Testing for [100, 50]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([100, 50]), [100, 50]);
    });
    mocha_1.it('Testing for [50, 60, 70, 80]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([50, 60, 70, 80]), [120, 140]);
    });
    mocha_1.it('Testing for [13, 27, 49]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([13, 27, 49]), [62, 27]);
    });
    mocha_1.it('Testing for [70, 58, 75, 34, 91]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([70, 58, 75, 34, 91]), [236, 92]);
    });
    mocha_1.it('Testing for [29, 83, 67, 53, 19, 28, 96]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
    });
    mocha_1.it('Testing for [0]', function () { return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([0]), [0, 0]); });
    mocha_1.it('Testing for [100, 51, 50, 100]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([100, 51, 50, 100]), [150, 151]);
    });
    mocha_1.it('Testing for [39, 84, 74, 18, 59, 72, 35, 61]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
    });
    mocha_1.it('Testing for [0, 1, 0]', function () {
        return chai_1.assert.deepEqual(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([0, 1, 0]), [0, 1]);
    });
});
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
var _4_kyu_Matrix_Determinant_1 = require("./4 kyu Matrix Determinant");
mocha_1.describe('determinant', function () {
    var m1 = [
        [1, 3],
        [2, 5],
    ];
    var m2 = [
        [2, 5, 3],
        [1, -2, -1],
        [1, 3, 4],
    ];
    mocha_1.it('of a 1 x 1 matrix should yield the value of the one element', function () {
        chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant([[1]])).to.equal(1);
    });
    mocha_1.it('should work correctly for 2 x 2 matrix', function () {
        chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant(m1)).to.equal(-1);
    });
    mocha_1.it('should work correctly for 3 x 3 matrix', function () {
        chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant(m2)).to.equal(-20);
    });
});
var _8_kyu_Reversed_Strings_1 = require("./8 kyu Reversed Strings");
mocha_1.describe('Sample Test Cases', function () {
    mocha_1.it('Should return a string', function () {
        chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('world'), 'dlrow');
        chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('hello'), 'olleh');
        chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution(''), '');
        chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('h'), 'h');
    });
});
// 2020/12/20 23:56
// import { fitness } from "./preloaded";
var _5_kyu_Binary_Genetic_Algorithms_1 = require("./5 kyu Binary Genetic Algorithms");
// import { assert } from 'chai';
// TODO: Replace examples and use TDD by writing your own tests
mocha_1.describe('solution', function () {
    mocha_1.it('test', function () {
        // TDD
        var geneticAlgorithm = new _5_kyu_Binary_Genetic_Algorithms_1.GeneticAlgorithm();
        // assert()
    });
});
// 2020/12/21 12:15
var unsolved_5_kyu_Some_Egyptian_fractions_1 = require("./unsolved 5 kyu Some Egyptian fractions");
function testing(s, expected) {
    chai_1.assert.deepEqual(unsolved_5_kyu_Some_Egyptian_fractions_1.G964_20201221.decompose(s), expected);
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
var _7_kyu_Mumbling_1 = require("./7 kyu Mumbling");
mocha_1.describe('Fixed Tests accum', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
        chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
        chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
        chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
        chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
    });
});
// 2021/02/07 23:25
var _6_kyu_Moves_in_squared_strings__III_1 = require("./6 kyu Moves in squared strings (III)");
mocha_1.describe('Fixed Tests', function () {
    mocha_1.it('Basic tests diag1Sym', function () {
        chai_1.assert.strictEqual(_6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.diag1Sym, 'wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ'), 'weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ');
    });
    mocha_1.it('Basic tests rot90Clock', function () {
        chai_1.assert.strictEqual(_6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.rot90Clock, 'rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb'), 'Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle');
    });
    mocha_1.it('Basic tests selfieAndDiag1', function () {
        chai_1.assert.strictEqual(_6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.selfieAndDiag1, 'NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg'), 'NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg');
    });
});
// 2021/02/12 23:09
var _8_kyu_Opposite_number_1 = require("./8 kyu Opposite number");
mocha_1.describe('opposite', function () {
    mocha_1.it('Sample Test', function () {
        chai_1.assert.strictEqual(_8_kyu_Opposite_number_1.Kata_20210212.opposite(1), -1);
    });
    mocha_1.it('Sample Test', function () {
        chai_1.assert.strictEqual(_8_kyu_Opposite_number_1.Kata_20210212.opposite(14), -14);
    });
    mocha_1.it('Sample Test', function () {
        chai_1.assert.strictEqual(_8_kyu_Opposite_number_1.Kata_20210212.opposite(-34), 34);
    });
});
// 2021/02/13 23:33
var _8_kyu_Expressions_Matter_1 = require("./8 kyu Expressions Matter");
mocha_1.describe('Small values', function () {
    mocha_1.it('Should work', function () {
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(2, 1, 2), 6);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(2, 1, 1), 4);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 1, 1), 3);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 2, 3), 9);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 3, 1), 5);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(2, 2, 2), 8);
    });
});
mocha_1.describe('Medium values', function () {
    mocha_1.it('Should work', function () {
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(5, 1, 3), 20);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(3, 5, 7), 105);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(5, 6, 1), 35);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 6, 1), 8);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(2, 6, 1), 14);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(6, 7, 1), 48);
    });
});
mocha_1.describe('Mixed values', function () {
    mocha_1.it('Should work', function () {
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(2, 10, 3), 60);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 8, 3), 27);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(9, 7, 2), 126);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 1, 10), 20);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(9, 1, 1), 18);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(10, 5, 6), 300);
        chai_1.assert.equal(_8_kyu_Expressions_Matter_1.expressionsMatter(1, 10, 1), 12);
    });
});
// 2021 / 02 / 15 22: 43;
var _8_kyu_If_you_can_t_sleep__just_count_sheep_1 = require("./8 kyu If you can't sleep, just count sheep");
mocha_1.describe('Sample Test Cases', function () {
    mocha_1.it('Should return a string', function () {
        chai_1.assert.equal(_8_kyu_If_you_can_t_sleep__just_count_sheep_1.countSheep(1), '1 sheep...');
        chai_1.assert.equal(_8_kyu_If_you_can_t_sleep__just_count_sheep_1.countSheep(2), '1 sheep...2 sheep...');
        chai_1.assert.equal(_8_kyu_If_you_can_t_sleep__just_count_sheep_1.countSheep(3), '1 sheep...2 sheep...3 sheep...');
    });
});
// 2021/02/17 20:51
var _7_kyu_Maximum_Length_Difference_1 = require("./7 kyu Maximum Length Difference");
function testing_20210217(actual, expected) {
    chai_1.assert.equal(actual, expected);
}
mocha_1.describe('Fixed Tests', function () {
    mocha_1.it('Basic tests mxdiflg', function () {
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
        testing_20210217(_7_kyu_Maximum_Length_Difference_1.G964_20210217.mxdiflg(s1, s2), 13);
        s1 = [
            'ejjjjmmtthh',
            'zxxuueeg',
            'aanlljrrrxx',
            'dqqqaaabbb',
            'oocccffuucccjjjkkkjyyyeehh',
        ];
        s2 = ['bbbaaayddqbbrrrv'];
        testing_20210217(_7_kyu_Maximum_Length_Difference_1.G964_20210217.mxdiflg(s1, s2), 10);
    });
});
//# sourceMappingURL=test.js.map