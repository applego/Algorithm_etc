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
//# sourceMappingURL=test.js.map