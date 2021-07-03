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
        // assert.deepStrictEqual(mixbonacci(['pel'], 59), [
        //   0,
        //   1,
        //   2,
        //   5,
        //   12,
        //   29,
        //   70,
        //   169,
        //   408,
        //   985,
        //   2378,
        //   5741,
        //   13860,
        //   33461,
        //   80782,
        //   195025,
        //   470832,
        //   1136689,
        //   2744210,
        //   6625109,
        //   15994428,
        //   38613965,
        //   93222358,
        //   225058681,
        //   543339720,
        //   1311738121,
        //   3166815962,
        //   7645370045,
        //   18457556052,
        //   44560482149,
        //   107578520350,
        //   259717522849,
        //   627013566048,
        //   1513744654945,
        //   3654502875938,
        //   8822750406821,
        //   21300003689580,
        //   51422757785981,
        //   124145519261542,
        //   299713796309065,
        //   723573111879672,
        //   1746860020068409,
        //   4217293152016490,
        //   10181446324101388,
        //   24580185800219264,
        //   59341817924539920,
        //   143263821649299100,
        //   345869461223138200,
        //   835002744095575400,
        //   2015874949414289000,
        //   4866752642924153000,
        //   11749380235262595000,
        //   28365513113449340000,
        //   68480406462161280000,
        //   165326326037771900000,
        //   399133058537705100000,
        //   963592443113182100000,
        //   2.3263179447640693e21,
        //   5.616228332641321e21,
        // ]);
    });
});
// 2021/03/10 22:49
var _7_kyu_Easy_wallpaper_1 = require("./7 kyu Easy wallpaper");
mocha_1.describe('Fixed Tests wallpaper', function () {
    mocha_1.it('Basic tests', function () {
        chai_1.assert.strictEqual(_7_kyu_Easy_wallpaper_1.wallpaper(6.3, 4.5, 3.29), 'sixteen');
        chai_1.assert.strictEqual(_7_kyu_Easy_wallpaper_1.wallpaper(6.3, 5.8, 3.13), 'seventeen');
        chai_1.assert.strictEqual(_7_kyu_Easy_wallpaper_1.wallpaper(6.1, 6.7, 2.81), 'sixteen');
        chai_1.assert.strictEqual(_7_kyu_Easy_wallpaper_1.wallpaper(6.1, 2.0, 3.15), 'twelve');
        chai_1.assert.strictEqual(_7_kyu_Easy_wallpaper_1.wallpaper(4.4, 3.0, 2.75), 'ten');
    });
});
// 最近Golangやっとった
// 久々TS 2021/03/16 12:53
var _8_kyu_A_Needle_in_the_Haystack_1 = require("./8 kyu A Needle in the Haystack");
mocha_1.describe('findNeedle', function () {
    mocha_1.it('basic tests', function () {
        chai_1.assert.strictEqual(_8_kyu_A_Needle_in_the_Haystack_1.findNeedle([
            '3',
            '123124234',
            null,
            'needle',
            'world',
            'hay',
            2,
            '3',
            true,
            false,
        ]), 'found the needle at position 3');
        chai_1.assert.strictEqual(_8_kyu_A_Needle_in_the_Haystack_1.findNeedle([
            '283497238987234',
            'a dog',
            'a cat',
            'some random junk',
            'a piece of hay',
            'needle',
            'something somebody lost a while ago',
        ]), 'found the needle at position 5');
        chai_1.assert.strictEqual(_8_kyu_A_Needle_in_the_Haystack_1.findNeedle([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            'needle',
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
        ]), 'found the needle at position 30');
        chai_1.assert.strictEqual(_8_kyu_A_Needle_in_the_Haystack_1.findNeedle([
            'needle',
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
        ]), 'found the needle at position 0');
        chai_1.assert.strictEqual(_8_kyu_A_Needle_in_the_Haystack_1.findNeedle([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            8,
            7,
            5,
            4,
            3,
            4,
            5,
            6,
            67,
            5,
            5,
            3,
            3,
            4,
            2,
            34,
            234,
            23,
            4,
            234,
            324,
            324,
            1,
            2,
            3,
            4,
            5,
            5,
            6,
            5,
            4,
            32,
            3,
            45,
            54,
            'needle',
        ]), 'found the needle at position 43');
    });
});
// 3.8 / dayはきびっし
var _5_kyu_Phone_Directory_1 = require("./5 kyu Phone Directory");
var dr = '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n' +
    '+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n' +
    '+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n' +
    '+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n' +
    '<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n' +
    '<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n' +
    "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" +
    '<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n' +
    '<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n' +
    '+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n' +
    '<P Salinge> Main Street, +1-098-512-2222, Denve\n' +
    '/+5-541-754-3010 156 Alphandria_Street. <Jr Part>\n 1333, Green, Road <F Fulgur> NW-46423 ;+6-541-914-3010!\n' +
    '+5-541-984-3012 <Peter Reeves> /PO Box 5300; Albertville, SC-28573\n :+5-321-512-2222 <Paulo Divino> Boulder Alley ZQ-87209\n' +
    '+3-741-984-3090 <F Flanaghan> _Chicago Av.\n :+3-921-333-2222 <Roland Scorsini> Bellevue_Street DA-67209\n' +
    '+8-111-544-8973 <Laurence Pantow> SA\n +8-921-512-2222 <Raymond Stevenson> Joly Street EE-67209\n' +
    '<John Freeland> Mantow ?+2-121-544-8974 \n <Robert Mitch> Eleonore Street QB-87209 +2-481-512-2222?\n' +
    '<Arthur Paternos> San Antonio $+7-121-504-8974 TT-45121\n <Ray Charles> Stevenson Pk. !+7-681-512-2222! CB-47209,\n' +
    '<JP Gorce> +9-421-674-8974 New-Bern TP-16017\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n' +
    '<Elizabeth Corber> +8-421-674-8974 Via Papa Roma\n <C Saborn> Main Street, +15-098-512-2222, Boulder\n' +
    '<Colin Marshall> *+9-421-674-8974 Edinburgh UK\n <Bernard Povit> +3-498-512-2222; Hill Av.  Cameron\n' +
    '+12-099-500-8000 <Pete Highman> Ontario Bd.\n +8-931-512-4855 <W Mount> Oxford Street CQ-23071\n' +
    '<Donald Drinkaw> Moon Street, +3-098-512-2222, Peterville\n';
var num = '1-541-754-3010,1-541-914-3010,1-541-984-3012,1-321-512-2222,1-741-984-3090,' +
    '1-921-333-2222,1-111-544-8973,1-921-512-2222,1-121-544-8974,1-481-512-2222,' +
    '1-121-504-8974,1-681-512-2222,1-421-674-8974,1-908-512-2222,48-421-674-8974,1-098-512-2222,' +
    '19-421-674-8974,1-498-512-2222,1-099-500-8000,1-931-512-4855,5-555-555-5555,' +
    '5-541-754-3010,6-541-914-3010,5-541-984-3012,5-321-512-2222,3-741-984-3090,' +
    '3-921-333-2222,8-111-544-8973,8-921-512-2222,2-121-544-8974,2-481-512-2222,' +
    '7-121-504-8974,7-681-512-2222,9-421-674-8974,2-908-512-2222,8-421-674-8974,' +
    '15-098-512-2222,9-421-674-8974,3-498-512-2222,12-099-500-8000,8-931-512-4855,' +
    '3-098-512-2222';
function testing_20210316(strng, num, expected) {
    chai_1.assert.equal(_5_kyu_Phone_Directory_1.G964.phone(strng, num), expected);
}
mocha_1.describe('Fixed Tests', function () {
    mocha_1.it('phone', function () {
        testing_20210316(dr, '48-421-674-8974', 'Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma');
        testing_20210316(dr, '19-421-674-8974', 'Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000');
        testing_20210316(dr, '1-921-512-2222', 'Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209');
        testing_20210316(dr, '1-908-512-2222', "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209");
    });
});
var _6_kyu_Most_profit_from_stock_quotes_1 = require("./6 kyu Most profit from stock quotes");
mocha_1.describe('getMostProfitFromStockQuotes basic tests', function () {
    mocha_1.it('getMostProfitFromStockQuotes should return the max profit from stock trading', function () {
        [
            {
                quotes: [1, 2, 3, 4, 5, 6],
                expected: 15,
            },
            {
                quotes: [6, 5, 4, 3, 2, 1],
                expected: 0,
            },
            {
                quotes: [1, 6, 5, 10, 8, 7],
                expected: 18,
            },
        ].forEach(function (data) {
            var actual = _6_kyu_Most_profit_from_stock_quotes_1.getMostProfitFromStockQuotes(data.quotes);
            chai_1.assert.strictEqual(actual, data.expected, "Most profit for [" + data.quotes + "] quotes");
        });
    });
});
var _7_kyu_Factorial_1 = require("./7 kyu Factorial");
mocha_1.describe('Basic tests', function () {
    mocha_1.it('Testing for 0', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial(0), 1); });
    mocha_1.it('Testing for 1', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial(1), 1); });
    mocha_1.it('Testing for 4', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial(4), 24); });
    mocha_1.it('Testing for 7', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial(7), 5040); });
    mocha_1.it('Testing for 17', function () {
        return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial(17), 355687428096000);
    });
});
mocha_1.describe('Basic tests2', function () {
    mocha_1.it('Testing for 0', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial_shorter(0), 1); });
    mocha_1.it('Testing for 1', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial_shorter(1), 1); });
    mocha_1.it('Testing for 4', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial_shorter(4), 24); });
    mocha_1.it('Testing for 7', function () { return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial_shorter(7), 5040); });
    mocha_1.it('Testing for 17', function () {
        return chai_1.assert.strictEqual(_7_kyu_Factorial_1.factorial_shorter(17), 355687428096000);
    });
});
// 2021/06/30 15:55
var _6_kyu_Reducing_by_steps_1 = require("./6 kyu Reducing by steps");
function testing_20210630(actual, expected) {
    chai_1.assert.deepEqual(actual, expected);
}
mocha_1.describe("Fixed Tests gcdi, lcmu, som, mini, maxi", function () {
    mocha_1.it("Basic tests", function () {
        var a = [18, 69, -90, -78, 65, 40];
        var r = [18, 3, 3, 3, 1, 1];
        var op = _6_kyu_Reducing_by_steps_1.G964.operArray(_6_kyu_Reducing_by_steps_1.G964.gcdi, a, a[0]);
        testing_20210630(op, r);
        r = [18, 414, 2070, 26910, 26910, 107640];
        op = _6_kyu_Reducing_by_steps_1.G964.operArray(_6_kyu_Reducing_by_steps_1.G964.lcmu, a, a[0]);
        testing_20210630(op, r);
        r = [18, 87, -3, -81, -16, 24];
        op = _6_kyu_Reducing_by_steps_1.G964.operArray(_6_kyu_Reducing_by_steps_1.G964.som, a, 0);
        testing_20210630(op, r);
        r = [18, 18, -90, -90, -90, -90];
        op = _6_kyu_Reducing_by_steps_1.G964.operArray(_6_kyu_Reducing_by_steps_1.G964.mini, a, a[0]);
        testing_20210630(op, r);
        r = [18, 69, 69, 69, 69, 69];
        op = _6_kyu_Reducing_by_steps_1.G964.operArray(_6_kyu_Reducing_by_steps_1.G964.maxi, a, a[0]);
        testing_20210630(op, r);
    });
});
//# sourceMappingURL=test.js.map