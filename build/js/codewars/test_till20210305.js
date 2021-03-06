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
// 2021/02/19 21:38
var _8_kyu_Even_or_Odd_1 = require("./8 kyu Even or Odd");
mocha_1.describe('solution', function () {
    mocha_1.it('basicTests', function () {
        chai_1.assert.equal(_8_kyu_Even_or_Odd_1.even_or_odd(2), 'Even');
        chai_1.assert.equal(_8_kyu_Even_or_Odd_1.even_or_odd(0), 'Even');
        chai_1.assert.equal(_8_kyu_Even_or_Odd_1.even_or_odd(7), 'Odd');
        chai_1.assert.equal(_8_kyu_Even_or_Odd_1.even_or_odd(1), 'Odd');
    });
});
// 2021/02/19 22:10
var _____________C___3___1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AC - 3 \u756A\u76EE");
mocha_1.describe('AtCoder/第一回アルゴリズム実技検定C - 3 番目', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.equal(_____________C___3___1.thirdBiggerNumber('4 18 25 20 9 13'), 18);
        chai_1.assert.equal(_____________C___3___1.thirdBiggerNumber('95 96 97 98 99 100'), 98);
        chai_1.assert.equal(_____________C___3___1.thirdBiggerNumber('19 92 3 35 78 1'), 35);
    });
});
// 2021/02/22 23:45
var _8_kyu_Function_1___hello_world_1 = require("./8 kyu Function 1 - hello world");
mocha_1.describe('hello world', function () {
    return mocha_1.it('greeting', function () { return chai_1.assert.equal(_8_kyu_Function_1___hello_world_1.greet(), 'hello world!'); });
});
var _8_kyu_Grasshopper___Terminal_game_move_function_1 = require("./8 kyu Grasshopper - Terminal game move function");
mocha_1.describe('Fixed tests', function () {
    mocha_1.it('move(0, 4)', function () { return chai_1.assert.strictEqual(_8_kyu_Grasshopper___Terminal_game_move_function_1.move(0, 4), 8); });
    mocha_1.it('move(3, 6)', function () { return chai_1.assert.strictEqual(_8_kyu_Grasshopper___Terminal_game_move_function_1.move(3, 6), 15); });
    mocha_1.it('move(2, 5)', function () { return chai_1.assert.strictEqual(_8_kyu_Grasshopper___Terminal_game_move_function_1.move(2, 5), 12); });
});
// 2021/02/22 23:54
var _7_kyu_Growth_of_a_Population_1 = require("./7 kyu Growth of a Population");
function testing20210222(p0, percent, aug, p, expected) {
    chai_1.assert.equal(_7_kyu_Growth_of_a_Population_1.G964_20210222.nbYear(p0, percent, aug, p), expected);
}
mocha_1.describe('Fixed Tests', function () {
    mocha_1.it('Basic tests nbYear', function () {
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
var _____________E___SNS____1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AE - SNS \u306E\u30ED\u30B0");
mocha_1.describe('../AtCoder/第一回アルゴリズム実技検定E - SNS のログ', function () {
    mocha_1.it('Basic tests', function () {
        var input = "6 7\n1 1 2\n1 2 3\n1 3 4\n1 1 5\n1 5 6\n3 1\n2 6\n";
        var output = "NYYNYY\nNNYNNN\nNNNYNN\nNNNNNN\nNNNNNY\nYNNNYN";
        chai_1.assert.equal(_____________E___SNS____1.recoverFollower(input), output);
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
var _8_kyu_Sum_without_highest_and_lowest_number_1 = require("./8 kyu Sum without highest and lowest number");
mocha_1.describe('KataTest', function () {
    mocha_1.it('BasicTests', function () {
        chai_1.assert.deepEqual(_8_kyu_Sum_without_highest_and_lowest_number_1.sumArray([6, 2, 1, 8, 10]), 16);
        chai_1.assert.deepEqual(_8_kyu_Sum_without_highest_and_lowest_number_1.sumArray([6, 0, 1, 10, 10]), 17);
    });
});
// 2021/02/24 18:35
var ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1 = require("../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram");
mocha_1.describe('../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram.js', function () {
    mocha_1.it('BasicTests', function () {
        var input = '\\\\//';
        var output = "4\n1 4";
        chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input), output);
        input = '\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\';
        output = "35\n5 4 2 1 19 9";
        chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input), output);
    });
    mocha_1.it('SubmitTests', function () {
        var input = '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\';
        var output = "0\n0";
        chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input), output);
    });
});
// 2021/02/25 14:44
var ALDS1_4_A_____1 = require("../AOJ/ALDS1_4_A_\u7DDA\u5F62\u63A2\u7D22");
mocha_1.describe('../AOJ/ALDS1_4_A_線形探索', function () {
    mocha_1.it('BasicTests', function () {
        var input = "5\n1 2 3 4 5\n3\n3 4 1\n";
        var output = "3";
        chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input), output);
        input = "3\n3 1 2\n1\n5\n";
        output = "0";
        chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input), output);
        input = "5\n1 1 2 2 3\n2\n1 2\n";
        output = "2";
        chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input), output);
    });
});
// 2021/02/25 15:09
var ALDS1_4_B_____1 = require("../AOJ/ALDS1_4_B_\u4E8C\u5206\u63A2\u7D22");
mocha_1.describe('../AOJ/ALDS1_4_B_二分探索', function () {
    mocha_1.it('BasicTests', function () {
        chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("5\n1 2 3 4 5\n3\n3 4 1\n"), "3");
        chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("3\n1 2 3\n1\n5\n"), "0");
        chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("5\n1 1 2 2 3\n2\n1 2\n"), "2");
    });
});
// 2021/02/25 20:43
var _8_kyu_Convert_number_to_reversed_array_of_digits_1 = require("./8 kyu Convert number to reversed array of digits");
// chai.config.truncateThreshold = 0;
mocha_1.describe('digitize', function () {
    mocha_1.it('Sample test', function () {
        chai_1.assert.deepEqual(_8_kyu_Convert_number_to_reversed_array_of_digits_1.digitize(35231), [1, 3, 2, 5, 3]);
    });
});
// 2021/02/25 21:03
var _____________F___DoubleCamelCase_Sort_1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AF - DoubleCamelCase Sort");
mocha_1.describe('../AtCoder/第一回アルゴリズム実技検定F - DoubleCamelCase Sort', function () {
    mocha_1.it('Sample test', function () {
        chai_1.assert.deepEqual(_____________F___DoubleCamelCase_Sort_1.answer('FisHDoGCaTAAAaAAbCAC'), 'AAAaAAbCACCaTDoGFisH');
    });
    mocha_1.it('Sample test2', function () {
        chai_1.assert.deepEqual(_____________F___DoubleCamelCase_Sort_1.answer('AAAAAjhfgaBCsahdfakGZsZGdEAA'), 'AAAAAAAjhfgaBCsahdfakGGdEZsZ');
    });
});
//　2021/02/26 12:05
var _6_kyu_Digit_Recovery_1 = require("./6 kyu Digit Recovery");
mocha_1.describe('./6 kyu Digit Recovery', function () {
    mocha_1.it('Sample test', function () {
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('NEO'), '1');
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ONETWO'), '12');
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('TWWTONE'), '21');
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ZYX'), 'No digits found');
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ONENO'), '11');
        chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');
    });
});
// 2021/02/27  0:22
var _7_kyu_Number_of_People_in_the_Bus_1 = require("./7 kyu Number of People in the Bus");
mocha_1.describe('number', function () {
    mocha_1.it('basic tests', function () {
        chai_1.assert.equal(_7_kyu_Number_of_People_in_the_Bus_1.number([
            [10, 0],
            [3, 5],
            [5, 8],
        ]), 5);
        chai_1.assert.equal(_7_kyu_Number_of_People_in_the_Bus_1.number([
            [3, 0],
            [9, 1],
            [4, 10],
            [12, 2],
            [6, 1],
            [7, 10],
        ]), 17);
        chai_1.assert.equal(_7_kyu_Number_of_People_in_the_Bus_1.number([
            [3, 0],
            [9, 1],
            [4, 8],
            [12, 2],
            [6, 1],
            [7, 8],
        ]), 21);
        chai_1.assert.equal(_7_kyu_Number_of_People_in_the_Bus_1.number([[0, 0]]), 0);
    });
});
// 2021/03/01 19:30
var _5_kyu_Some_Egyptian_fractions_1 = require("./5 kyu Some Egyptian fractions");
mocha_1.describe('分数クラスのテスト', function () {
    mocha_1.it('Basic', function () {
        var test = function (arr) {
            return arr.forEach(function (f) {
                var t = function (a, b) {
                    var stra = a.toString();
                    var strb = b.toString();
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
        };
        test([
            { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(5), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2) },
            { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(2, 3), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 6) },
            { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2) },
            { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(1 / 3), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(3) },
        ]);
    });
});
function testing_20210301(s, expected) {
    chai_1.assert.deepEqual(_5_kyu_Some_Egyptian_fractions_1.G964.decompose(s), expected);
}
mocha_1.describe('Fixed Tests decompose', function () {
    mocha_1.it('Basic tests', function () {
        testing_20210301('3/4', ['1/2', '1/4']);
        testing_20210301('12/4', ['3']);
        testing_20210301('4/5', ['1/2', '1/4', '1/20']);
        testing_20210301('21/23', ['1/2', '1/3', '1/13', '1/359', '1/644046']);
        testing_20210301('0.66', ['1/2', '1/7', '1/59', '1/5163', '1/53307975']);
    });
    mocha_1.it('Attempt tests', function () {
        testing_20210301('0', []);
    });
});
// 2021/03/02 20:00
var _____________G______1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AG - \u7D44\u5206\u3051");
mocha_1.describe('Fixed Tests decompose2', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.deepEqual(_____________G______1.G.main("6\n10 10 -10 -10 -10\n10 -10 -10 -10\n-10 -10 -10\n10 -10\n-10"), 40);
        chai_1.assert.deepEqual(_____________G______1.G.main("3\n1 1\n1"), 3);
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
var ALDS1_4_D_____1 = require("../AOJ/ALDS1_4_D_\u5272\u308A\u5F53\u3066");
mocha_1.describe('../AOJ/ALDS1_4_D_割り当て', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.deepEqual(ALDS1_4_D_____1.G3.main("5 3\n8\n1\n7\n3\n9"), 10);
        chai_1.assert.deepEqual(ALDS1_4_D_____1.G3.main("4 2\n1\n2\n2\n6"), 6);
    });
});
// 2021/03/04 21:19
var _7_kyu_The_Coupon_Code_1 = require("./7 kyu The Coupon Code");
mocha_1.describe('./7 kyu The Coupon Code', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.equal(_7_kyu_The_Coupon_Code_1.checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
        chai_1.assert.equal(_7_kyu_The_Coupon_Code_1.checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
    });
});
// 2021/03/05 21:54
var abc002A______1 = require("../AtCoder/abc002A - \u6B63\u76F4\u8005");
mocha_1.describe('../AtCoder/abc002A - 正直者.ts', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.deepEqual(abc002A______1.answer('10 11'), 11);
        chai_1.assert.deepEqual(abc002A______1.answer('100000000 10000000'), 100000000);
    });
});
//# sourceMappingURL=test_till20210305.js.map