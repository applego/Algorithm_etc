"use strict";
// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test
// 2021/03/05 ファイル名変更 test_till20210305.ts
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
// 2021/03/05 21:54
var abc002B____1 = require("../AtCoder/abc002B - \u7F60");
mocha_1.describe('../AtCoder/abc002B - 罠.ts', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.deepEqual(abc002B____1.answer('chokudai'), 'chkd');
        chai_1.assert.deepEqual(abc002B____1.answer('okanemochi'), 'knmch');
        chai_1.assert.deepEqual(abc002B____1.answer('aoki'), 'k');
        chai_1.assert.deepEqual(abc002B____1.answer('mazushii'), 'mzsh');
    });
});
// 2021/03/05 22:26
var _8_kyu_Find_the_smallest_integer_in_the_array_1 = require("./8 kyu Find the smallest integer in the array");
mocha_1.describe('Smallest Integer Tests', function () {
    mocha_1.it('Fixed Tests', function () {
        chai_1.assert.strictEqual(_8_kyu_Find_the_smallest_integer_in_the_array_1.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
        chai_1.assert.strictEqual(_8_kyu_Find_the_smallest_integer_in_the_array_1.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
        chai_1.assert.strictEqual(_8_kyu_Find_the_smallest_integer_in_the_array_1.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
        chai_1.assert.strictEqual(_8_kyu_Find_the_smallest_integer_in_the_array_1.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
        chai_1.assert.strictEqual(_8_kyu_Find_the_smallest_integer_in_the_array_1.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
    });
});
// 2021/03/08 22:29
var _5_kyu_Mixbonacci_1 = require("./5 kyu Mixbonacci");
mocha_1.describe('Example Tests', function () {
    mocha_1.it('should work with example tests', function () {
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci([], 10), []);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['fib'], 0), []);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['fib'], 10), [
            0,
            1,
            1,
            2,
            3,
            5,
            8,
            13,
            21,
            34,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['pad'], 10), [
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            1,
            2,
            2,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['jac'], 10), [
            0,
            1,
            1,
            3,
            5,
            11,
            21,
            43,
            85,
            171,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['pel'], 10), [
            0,
            1,
            2,
            5,
            12,
            29,
            70,
            169,
            408,
            985,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['tri'], 10), [
            0,
            0,
            1,
            1,
            2,
            4,
            7,
            13,
            24,
            44,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['tet'], 10), [
            0,
            0,
            0,
            1,
            1,
            2,
            4,
            8,
            15,
            29,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['fib', 'tet'], 10), [
            0,
            0,
            1,
            0,
            1,
            0,
            2,
            1,
            3,
            1,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['jac', 'jac', 'pel'], 10), [
            0,
            1,
            0,
            1,
            3,
            1,
            5,
            11,
            2,
            21,
        ]);
        chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['pel'], 59), [
            0,
            1,
            2,
            5,
            12,
            29,
            70,
            169,
            408,
            985,
            2378,
            5741,
            13860,
            33461,
            80782,
            195025,
            470832,
            1136689,
            2744210,
            6625109,
            15994428,
            38613965,
            93222358,
            225058681,
            543339720,
            1311738121,
            3166815962,
            7645370045,
            18457556052,
            44560482149,
            107578520350,
            259717522849,
            627013566048,
            1513744654945,
            3654502875938,
            8822750406821,
            21300003689580,
            51422757785981,
            124145519261542,
            299713796309065,
            723573111879672,
            1746860020068409,
            4217293152016490,
            10181446324101388,
            24580185800219264,
            59341817924539920,
            143263821649299100,
            345869461223138200,
            835002744095575400,
            2015874949414289000,
            4866752642924153000,
            11749380235262595000,
            28365513113449340000,
            68480406462161280000,
            165326326037771900000,
            399133058537705100000,
            963592443113182100000,
            2.3263179447640693e21,
            5.616228332641321e21,
        ]);
    });
});
//# sourceMappingURL=test.js.map