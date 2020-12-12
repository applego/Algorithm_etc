"use strict";
// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var _7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1 = require("./7 kyu Product Of Maximums Of Array (Array Series #2)");
mocha_1.describe("Basic tests", function () {
    mocha_1.it("maxProduct([4, 3, 5], 2)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([4, 3, 5], 2), 20); });
    mocha_1.it("maxProduct([10, 8, 7, 9], 3)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 8, 7, 9], 3), 720); });
    mocha_1.it("maxProduct([8, 6, 4, 6], 3)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([8, 6, 4, 6], 3), 288); });
    mocha_1.it("maxProduct([10, 2, 3, 8, 1, 10, 4], 5)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600); });
    mocha_1.it("maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)", function () {
        return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
    });
    mocha_1.it("maxProduct([-4, -27, -15, -6, -1], 2)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([-4, -27, -15, -6, -1], 2), 4); });
    mocha_1.it("maxProduct([-17, -8, -102, -309], 2)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([-17, -8, -102, -309], 2), 136); });
    mocha_1.it("maxProduct([10, 3, -27, -1], 3)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([10, 3, -27, -1], 3), -30); });
    mocha_1.it("maxProduct([14, 29, -28, 39, -16, -48], 4)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([14, 29, -28, 39, -16, -48], 4), -253344); });
    mocha_1.it("maxProduct([1], 1)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([1], 1), 1); });
});
var _7_kyu_Array_Leaders__Array_Series__3_1 = require("./7 kyu Array Leaders (Array Series #3)");
mocha_1.describe("Basic Tests", function () {
    mocha_1.it("Testing for [1, 2, 3, 4, 0]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([1, 2, 3, 4, 0]), [4]); });
    mocha_1.it("Testing for [16, 17, 4, 3, 5, 2]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]); });
    mocha_1.it("Testing for [-1, -29, -26, -2]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-1, -29, -26, -2]), [-1]); });
    mocha_1.it("Testing for [-36, -12, -27]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([-36, -12, -27]), [-36, -12]); });
    mocha_1.it("Testing for [5, -2, 2]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([5, -2, 2]), [5, 2]); });
    mocha_1.it("Testing for [0, -1, -29, 3, 2]", function () { return chai_1.assert.deepEqual(_7_kyu_Array_Leaders__Array_Series__3_1.arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]); });
});
var _7_kyu_Maximum_Gap__Array_Series__4_1 = require("./7 kyu Maximum Gap (Array Series #4)");
mocha_1.describe("Basic tests", function () {
    mocha_1.it("Testing for [13, 10, 2, 9, 5]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 10, 2, 9, 5]), 4); });
    mocha_1.it("Testing for [13, 3, 5]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([13, 3, 5]), 8); });
    mocha_1.it("Testing for [24, 299, 131, 14, 26, 25]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([24, 299, 131, 14, 26, 25]), 168); });
    mocha_1.it("Testing for [-3, -27, -4, -2]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-3, -27, -4, -2]), 23); });
    mocha_1.it("Testing for [-7, -42, -809, -14, -12]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-7, -42, -809, -14, -12]), 767); });
    mocha_1.it("Testing for [12, -5, -7, 0, 290]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([12, -5, -7, 0, 290]), 278); });
    mocha_1.it("Testing for [-54, 37, 0, 64, -15, 640, 0]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-54, 37, 0, 64, -15, 640, 0]), 576); });
    mocha_1.it("Testing for [130, 30, 50]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([130, 30, 50]), 80); });
    mocha_1.it("Testing for [1, 1, 1]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([1, 1, 1]), 0); });
    mocha_1.it("Testing for [-1, -1, -1]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Gap__Array_Series__4_1.maxGap([-1, -1, -1]), 0); });
});
var _7_kyu_Product_Array__Array_Series__5_1 = require("./7 kyu Product Array (Array Series #5)");
mocha_1.describe("Basic Tests", function () {
    mocha_1.it("Testing for [12, 20]", function () { return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]); });
    mocha_1.it("Testing for [12, 20]", function () { return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([12, 20]), [20, 12]); });
    mocha_1.it("Testing for [3, 27, 4, 2]", function () { return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([3, 27, 4, 2]), [216, 24, 162, 324]); });
    mocha_1.it("Testing for [13, 10, 5, 2, 9]", function () { return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]); });
    mocha_1.it("Testing for [16, 17, 4, 3, 5, 2]", function () {
        return chai_1.assert.deepEqual(_7_kyu_Product_Array__Array_Series__5_1.productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]);
    });
});
var _4_kyu_Catching_Car_Mileage_Numbers_1 = require("./4 kyu Catching Car Mileage Numbers");
1;
function test(n, awesome, expected) {
    chai_1.assert.strictEqual(_4_kyu_Catching_Car_Mileage_Numbers_1.isInteresting(n, awesome), expected);
}
mocha_1.describe("solution", function () {
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
mocha_1.describe("Basic tests", function () {
    mocha_1.it("Testing for [3, 2, 6, 8, 2, 3]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([3, 2, 6, 8, 2, 3]), 17); });
    mocha_1.it("Testing for [2, 9, 13, 10, 5, 2, 9, 5]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32); });
    mocha_1.it("Testing for [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18); });
    mocha_1.it("Testing for [-3, -27, -4, -2, -27, -2]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-3, -27, -4, -2, -27, -2]), -9); });
    mocha_1.it("Testing for [-14, -12, -7, -42, -809, -14, -12]", function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
    });
    mocha_1.it("Testing for [-13, -50, 57, 13, 67, -13, 57, 108, 67]", function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
    });
    mocha_1.it("Testing for [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]", function () {
        return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
    });
    mocha_1.it("Testing for [-2, 0, 2]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, 0, 2]), 0); });
    mocha_1.it("Testing for [-2, -4, 0, -9, 2]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-2, -4, 0, -9, 2]), 0); });
    mocha_1.it("Testing for [-5, -1, -9, 0, 2]", function () { return chai_1.assert.strictEqual(_7_kyu_Maximum_Triplet_Sum__Array_Series__7_1.maxTriSum([-5, -1, -9, 0, 2]), 1); });
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
mocha_1.describe("Fixed Tests", function () {
    mocha_1.it("Basic tests dec2FactString", function () {
        testing1(2982, "4041000");
    });
    mocha_1.it("Basic tests factString2Dec", function () {
        testing2("341010", 463);
    });
    mocha_1.it("Basic tests dec2FactString BP", function () {
        testing1BP(2982, "4041000");
    });
    mocha_1.it("Basic tests factString2Dec BP", function () {
        testing2BP("341010", 463);
    });
});
var _4_kyu_Next_bigger_number_with_the_same_digits_1 = require("./4 kyu Next bigger number with the same digits");
mocha_1.describe("Basic tests", function () {
    mocha_1.it("Small numbers", function () {
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(12), 21);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(513), 531);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(2017), 2071);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(414), 441);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(144), 414);
    });
    mocha_1.it("Bigger numbers", function () {
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(123456789), 123456798);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(1234567890), 1234567908);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9876543210), -1);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(9999999999), -1);
        chai_1.assert.strictEqual(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(59884848459853), 59884848483559);
    });
});
//# sourceMappingURL=test.js.map