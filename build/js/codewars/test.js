"use strict";
// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var _7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1 = require("./7 kyu Product Of Maximums Of Array (Array Series #2)");
mocha_1.describe("Basic tests", function () {
    mocha_1.it("maxProduct([4, 3, 5], 2)", function () { return chai_1.assert.strictEqual(_7_kyu_Product_Of_Maximums_Of_Array__Array_Series__2_1.maxProduct([4, 3, 5], 2), 20); });
    // it("maxProduct([10, 8, 7, 9], 3)", () => assert.strictEqual(maxProduct([10, 8, 7, 9], 3), 720));
    // it("maxProduct([8, 6, 4, 6], 3)", () => assert.strictEqual(maxProduct([8, 6, 4, 6], 3), 288));
    // it("maxProduct([10, 2, 3, 8, 1, 10, 4], 5)", () => assert.strictEqual(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600));
    // it("maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)", () =>
    //   assert.strictEqual(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375));
    // it("maxProduct([-4, -27, -15, -6, -1], 2)", () => assert.strictEqual(maxProduct([-4, -27, -15, -6, -1], 2), 4));
    // it("maxProduct([-17, -8, -102, -309], 2)", () => assert.strictEqual(maxProduct([-17, -8, -102, -309], 2), 136));
    // it("maxProduct([10, 3, -27, -1], 3)", () => assert.strictEqual(maxProduct([10, 3, -27, -1], 3), -30));
    // it("maxProduct([14, 29, -28, 39, -16, -48], 4)", () => assert.strictEqual(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344));
    // it("maxProduct([1], 1)", () => assert.strictEqual(maxProduct([1], 1), 1));
});
//# sourceMappingURL=test.js.map