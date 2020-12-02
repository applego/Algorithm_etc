// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test

import { describe, it } from "mocha";
import { assert } from "chai";
import { maxProduct } from "./7 kyu Product Of Maximums Of Array (Array Series #2)";

describe("Basic tests", () => {
  it("maxProduct([4, 3, 5], 2)", () => assert.strictEqual(maxProduct([4, 3, 5], 2), 20));
  it("maxProduct([10, 8, 7, 9], 3)", () => assert.strictEqual(maxProduct([10, 8, 7, 9], 3), 720));
  it("maxProduct([8, 6, 4, 6], 3)", () => assert.strictEqual(maxProduct([8, 6, 4, 6], 3), 288));
  it("maxProduct([10, 2, 3, 8, 1, 10, 4], 5)", () => assert.strictEqual(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600));
  it("maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)", () =>
    assert.strictEqual(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375));
  it("maxProduct([-4, -27, -15, -6, -1], 2)", () => assert.strictEqual(maxProduct([-4, -27, -15, -6, -1], 2), 4));
  it("maxProduct([-17, -8, -102, -309], 2)", () => assert.strictEqual(maxProduct([-17, -8, -102, -309], 2), 136));
  it("maxProduct([10, 3, -27, -1], 3)", () => assert.strictEqual(maxProduct([10, 3, -27, -1], 3), -30));
  it("maxProduct([14, 29, -28, 39, -16, -48], 4)", () => assert.strictEqual(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344));
  it("maxProduct([1], 1)", () => assert.strictEqual(maxProduct([1], 1), 1));
});


import { arrayLeaders } from "./7 kyu Array Leaders (Array Series #3)";

describe("Basic Tests", function() {
  it("Testing for [1, 2, 3, 4, 0]", () => assert.deepEqual(arrayLeaders([1, 2, 3, 4, 0]), [4]));
  it("Testing for [16, 17, 4, 3, 5, 2]", () => assert.deepEqual(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]));
  it("Testing for [-1, -29, -26, -2]", () => assert.deepEqual(arrayLeaders([-1, -29, -26, -2]), [-1]));
  it("Testing for [-36, -12, -27]", () => assert.deepEqual(arrayLeaders([-36, -12, -27]), [-36, -12]));
  it("Testing for [5, -2, 2]", () => assert.deepEqual(arrayLeaders([5, -2, 2]), [5, 2]));
  it("Testing for [0, -1, -29, 3, 2]", () => assert.deepEqual(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]));
});

import { maxGap } from "./7 kyu Maximum Gap (Array Series #4)";

describe("Basic tests", () => {
  it("Testing for [13, 10, 2, 9, 5]", () => assert.strictEqual(maxGap([13, 10, 2, 9, 5]), 4));
  it("Testing for [13, 3, 5]", () => assert.strictEqual(maxGap([13, 3, 5]), 8));
  it("Testing for [24, 299, 131, 14, 26, 25]", () => assert.strictEqual(maxGap([24, 299, 131, 14, 26, 25]), 168));
  it("Testing for [-3, -27, -4, -2]", () => assert.strictEqual(maxGap([-3, -27, -4, -2]), 23));
  it("Testing for [-7, -42, -809, -14, -12]", () => assert.strictEqual(maxGap([-7, -42, -809, -14, -12]), 767));
  it("Testing for [12, -5, -7, 0, 290]", () => assert.strictEqual(maxGap([12, -5, -7, 0, 290]), 278));
  it("Testing for [-54, 37, 0, 64, -15, 640, 0]", () => assert.strictEqual(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576));
  it("Testing for [130, 30, 50]", () => assert.strictEqual(maxGap([130, 30, 50]), 80));
  it("Testing for [1, 1, 1]", () => assert.strictEqual(maxGap([1, 1, 1]), 0));
  it("Testing for [-1, -1, -1]", () => assert.strictEqual(maxGap([-1, -1, -1]), 0));
});

import { productArray } from "./7 kyu Product Array (Array Series #5)";

describe("Basic Tests", () => {
  it("Testing for [12, 20]", () => assert.deepEqual(productArray([12, 20]), [20, 12]));
  it("Testing for [12, 20]", () => assert.deepEqual(productArray([12, 20]), [20, 12]));
  it("Testing for [3, 27, 4, 2]", () => assert.deepEqual(productArray([3, 27, 4, 2]), [216, 24, 162, 324]));
  it("Testing for [13, 10, 5, 2, 9]", () => assert.deepEqual(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]));
  it("Testing for [16, 17, 4, 3, 5, 2]", () =>
    assert.deepEqual(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]));
});
