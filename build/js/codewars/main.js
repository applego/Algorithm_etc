"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TestCodewar_1 = __importDefault(require("./TestCodewar"));
// let test = new Test();//__filename
var TimeMeasure_1 = __importDefault(require("./TimeMeasure"));
var chai_1 = require("chai");
////////////////////////////////////////////////////////////////
// 2021/03/16 22:32
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
function testing20210316(strng, num, expected) {
    chai_1.assert.equal(_5_kyu_Phone_Directory_1.G964.phone(strng, num), expected);
}
testing20210316(dr, '48-421-674-8974', 'Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma');
testing20210316(dr, '19-421-674-8974', 'Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000');
testing20210316(dr, '1-921-512-2222', 'Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209');
testing20210316(dr, '1-908-512-2222', "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209");
// 2021/03/08 22:29
var _5_kyu_Mixbonacci_1 = require("./5 kyu Mixbonacci");
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
chai_1.assert.deepStrictEqual(_5_kyu_Mixbonacci_1.mixbonacci(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
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
// 2021/03/04  0:04
var ALDS1_4_D_____1 = require("../AOJ/ALDS1_4_D_\u5272\u308A\u5F53\u3066");
chai_1.assert.deepEqual(ALDS1_4_D_____1.G3.main("5 3\n8\n1\n7\n3\n9"), 10);
chai_1.assert.deepEqual(ALDS1_4_D_____1.G3.main("4 2\n1\n2\n2\n6"), 6);
// 2021/03/03 10:04
var ALDS1_4_C_Dictionary_1 = require("../AOJ/ALDS1_4_C_Dictionary");
chai_1.assert.deepEqual(ALDS1_4_C_Dictionary_1.G2.main("6\ninsert AAA\ninsert AAC\nfind AAA\nfind CCC\ninsert CCC\nfind CCC\ninsert CCC"), "yes\nno\nyes");
chai_1.assert.deepEqual(ALDS1_4_C_Dictionary_1.G2.main("13\ninsert AAA\ninsert AAC\ninsert AGA\ninsert AGG\ninsert TTT\nfind AAA\nfind CCC\nfind CCC\ninsert CCC\nfind CCC\ninsert T\nfind TTT\nfind T"), "yes\nno\nno\nyes\nyes\nyes");
//     assert.deepEqual(
//       G2.main(
//         `15
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
// find CC
// insert T
// find TTT
// find T
// find A`
//       ),
//       `yes
// no
// no
// yes
// no
// yes
// yes
// no`
//     );
// 2021/03/02 20:00
var _____________G______1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AG - \u7D44\u5206\u3051");
chai_1.assert.deepEqual(_____________G______1.G.main("6\n10 10 -10 -10 -10\n10 -10 -10 -10\n-10 -10 -10\n10 -10\n-10"), 40);
chai_1.assert.deepEqual(_____________G______1.G.main("3\n1 1\n1"), 3);
// 2021/03/01 22:17
var _5_kyu_Some_Egyptian_fractions_1 = require("./5 kyu Some Egyptian fractions");
{
    var test_1 = function (arr) {
        return arr.forEach(function (f) {
            var t = function (a, b) {
                var stra = a.toString();
                var strb = b.toString();
                console.log("stra:" + stra + " strb:" + strb);
                // assert.deepEqual()
                console.log(stra + " + " + strb + " = " + a.add(b));
                console.log(stra + " - " + strb + " = " + a.subtract(b));
                console.log(stra + " * " + strb + " = " + a.multiply(b));
                console.log(stra + " / " + strb + " = " + a.divide(b));
            };
            t(f.a, f.b);
            t(f.b, f.a);
        });
    };
    test_1([
        { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(5), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2) },
        { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(2, 3), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 6) },
        { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(1, 2) },
        { a: new _5_kyu_Some_Egyptian_fractions_1.fraction(1 / 3), b: new _5_kyu_Some_Egyptian_fractions_1.fraction(3) },
    ]);
}
function testing_20210301(s, expected) {
    chai_1.assert.deepEqual(_5_kyu_Some_Egyptian_fractions_1.G964.decompose(s), expected);
}
testing_20210301('3/4', ['1/2', '1/4']);
testing_20210301('12/4', ['3']);
testing_20210301('4/5', ['1/2', '1/4', '1/20']);
testing_20210301('21/23', ['1/2', '1/3', '1/13', '1/359', '1/644046']);
testing_20210301('0.66', ['1/2', '1/7', '1/59', '1/5163', '1/53307975']);
testing_20210301('0', []);
//　2021/02/26 12:05
var _6_kyu_Digit_Recovery_1 = require("./6 kyu Digit Recovery");
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('NEO'), '1');
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ONETWO'), '12');
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('TWWTONE'), '21');
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ZYX'), 'No digits found');
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('ONENO'), '11');
chai_1.assert.deepEqual(_6_kyu_Digit_Recovery_1.recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');
// 2021/02/25 21:03
var _____________F___DoubleCamelCase_Sort_1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AF - DoubleCamelCase Sort");
chai_1.assert.deepEqual(_____________F___DoubleCamelCase_Sort_1.answer('FisHDoGCaTAAAaAAbCAC'), 'AAAaAAbCACCaTDoGFisH');
chai_1.assert.deepEqual(_____________F___DoubleCamelCase_Sort_1.answer('AAAAAjhfgaBCsahdfakGZsZGdEAA'), 'AAAAAAAjhfgaBCsahdfakGGdEZsZ');
// 2021/02/25 15:09
var ALDS1_4_B_____1 = require("../AOJ/ALDS1_4_B_\u4E8C\u5206\u63A2\u7D22");
chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("5\n1 2 3 4 5\n3\n3 4 1\n"), "3");
chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("3\n1 2 3\n1\n5\n"), "0");
chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("5\n1 1 2 2 3\n2\n1 2\n"), "2");
chai_1.assert.deepEqual(ALDS1_4_B_____1.answer("30\n0 0 0 0 2 3 3 3 4 5 6 7 8 8 8 9 9 9 10 11 11 12 12 12 12 13 13 7000000 500000000 1000000000\n16\n2 0 5 11 3 16 4 6 1 10 7 14 15 7000000 9 5555555\n"), "11");
// 2021/02/25 14:44
var ALDS1_4_A_____1 = require("../AOJ/ALDS1_4_A_\u7DDA\u5F62\u63A2\u7D22");
var input20210225 = "5\n1 2 3 4 5\n3\n3 4 1\n";
var output20210225 = "3";
chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input20210225), output20210225);
input20210225 = "3\n3 1 2\n1\n5\n";
output20210225 = "0";
chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input20210225), output20210225);
input20210225 = "5\n1 1 2 2 3\n2\n1 2\n";
output20210225 = "2";
chai_1.assert.deepEqual(ALDS1_4_A_____1.linearSearch(input20210225), output20210225);
// 2021/02/24 18:35
var ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1 = require("../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram");
var input20210224 = '\\\\//';
var output20210224 = "4\n1 4";
chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input20210224), output20210224);
input20210224 = '\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\';
output20210224 = "35\n5 4 2 1 19 9";
chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input20210224), output20210224);
input20210224 =
    '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\';
output20210224 = "0\n0";
chai_1.assert.deepEqual(ALDS1_3_D_Areas_on_the_Cross_Section_Diagram_1.answer(input20210224), output20210224);
// 2021/02/23 19:01
var _____________E___SNS____1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AE - SNS \u306E\u30ED\u30B0");
var input20210222 = "6 7\n1 1 2\n1 2 3\n1 3 4\n1 1 5\n1 5 6\n3 1\n2 6\n";
var output20210222 = "NYYNYY\nNNYNNN\nNNNYNN\nNNNNNN\nNNNNNY\nYNNNYN\n";
chai_1.assert.equal(_____________E___SNS____1.recoverFollower(input20210222), output20210222);
// 2021/02/23 10:02
var _____________D_______1 = require("../AtCoder/\u7B2C\u4E00\u56DE\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u6280\u691C\u5B9AD - \u91CD\u8907\u691C\u67FB");
var input = "6\n1\n5\n6\n3\n2\n6\n";
var output = '6 4';
chai_1.assert.equal(_____________D_______1.test20210223BP(input), output);
input = "7\n5\n4\n3\n2\n7\n6\n1\n";
output = 'Correct';
chai_1.assert.equal(_____________D_______1.test20210223BP(input), output);
// 2021/02/17 20:51
var _7_kyu_Maximum_Length_Difference_1 = require("./7 kyu Maximum Length Difference");
function testing_20210217(actual, expected) {
    chai_1.assert.equal(actual, expected);
}
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
var data1 = 'What do you remember? When I looked at his streaky glasses, I wanted ' +
    'to leave him. And before that? He stole those cherries for me at midnight. We were walking ' +
    'in the rain and I loved him. And before that? I saw him coming ' +
    'toward me that time at the picnic, edgy, foreign.';
var data2 = "Some say the world will end in fire, Some say in ice. From what I've tasted of desire " +
    'I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate' +
    ' To say that for destruction ice Is also great And would suffice.';
var data1Sol = '\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n' +
    '\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n' +
    '\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em';
var data2Sol = "fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
    '\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n' +
    '\vuroaf h vi ti o\n\vfent I iotd nfr';
// * 先に↓
// assert.strictEqual(code(data1), data1Sol);
// assert.strictEqual(code(data2), data2Sol);
// assert.strictEqual(code(""), "");
// assert.strictEqual(decode(data2Sol), data2);
// 2021/02/07 23:25
var _6_kyu_Moves_in_squared_strings__III_1 = require("./6 kyu Moves in squared strings (III)");
chai_1.assert.strictEqual(_6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.diag1Sym, 'wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ'), 'weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ');
var a = _6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.rot90Clock, 'rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb');
var b = 'Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle';
console.log(a);
console.log(b);
chai_1.assert.strictEqual(a, b);
a = _6_kyu_Moves_in_squared_strings__III_1.oper(_6_kyu_Moves_in_squared_strings__III_1.selfieAndDiag1, 'NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg');
b =
    'NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg';
console.log(a);
console.log(b);
chai_1.assert.strictEqual(a, b);
// 2021/02/01 18:40
var _4_kyu_Strings_Mix_1 = require("./4 kyu Strings Mix");
function testing(s1, s2, expected) {
    chai_1.assert.deepEqual(_4_kyu_Strings_Mix_1.G964.mix(s1, s2), expected);
}
testing('Are they here', 'yes, they are here', '2:eeeee/2:yy/=:hh/=:rr');
testing('looping is fun but dangerous', 'less dangerous than coding', '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');
testing(' In many languages', " there's a pair of functions", '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt');
// 2021/01/31  3:00
var _8_kyu_Quarter_of_the_year_1 = require("./8 kyu Quarter of the year");
chai_1.assert.equal(_8_kyu_Quarter_of_the_year_1.quarterOf(3), 1);
chai_1.assert.equal(_8_kyu_Quarter_of_the_year_1.quarterOf(8), 3);
chai_1.assert.equal(_8_kyu_Quarter_of_the_year_1.quarterOf(11), 4);
// 2021/01/30 23:44
var _5_kyu_Product_of_consecutive_Fib_numbers_1 = require("./5 kyu Product of consecutive Fib numbers");
function dotest0130(prod, expected) {
    chai_1.assert.deepEqual(_5_kyu_Product_of_consecutive_Fib_numbers_1.G964_20210130_t.productFib(prod), expected);
}
dotest0130(4895, [55, 89, true]);
dotest0130(5895, [89, 144, false]);
//　2021/01/29 22:41
var _8_kyu_Calculate_average_1 = require("./8 kyu Calculate average");
chai_1.assert.strictEqual(_8_kyu_Calculate_average_1.findAverage([1, 1, 1]), 1);
// 2021/01/29 22:34
var _8_kyu_Grasshopper___Messi_goals_function_1 = require("./8 kyu Grasshopper - Messi goals function");
chai_1.assert.equal(_8_kyu_Grasshopper___Messi_goals_function_1.goals(5, 10, 2), 17);
// 2021/01/27 21:37
var _8_kyu_DNA_to_RNA_Conversion_1 = require("./8 kyu DNA to RNA Conversion");
chai_1.assert.equal(_8_kyu_DNA_to_RNA_Conversion_1.DNAtoRNA('TTTT'), 'UUUU');
chai_1.assert.equal(_8_kyu_DNA_to_RNA_Conversion_1.DNAtoRNA('GCAT'), 'GCAU');
chai_1.assert.equal(_8_kyu_DNA_to_RNA_Conversion_1.DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
// assert.strictEqual(josephusSurvivor(7, 3), 4);
// assert.strictEqual(josephusSurvivor(11, 19), 10);
// assert.strictEqual(josephusSurvivor(40, 3), 28);
// assert.strictEqual(josephusSurvivor(14, 2), 13);
// assert.strictEqual(josephusSurvivor(100, 1), 100);
// assert.strictEqual(josephusSurvivor(1, 300), 1);
// assert.strictEqual(josephusSurvivor(2, 300), 1);
// assert.strictEqual(josephusSurvivor(5, 300), 1);
// assert.strictEqual(josephusSurvivor(7, 300), 7);
// assert.strictEqual(josephusSurvivor(300, 300), 265);
// 2021/01/26 12:49
var _8_kyu_How_good_are_you_really_1 = require("./8 kyu How good are you really");
TestCodewar_1.default.assert_equals(_8_kyu_How_good_are_you_really_1.betterThanAverage([2, 3], 5), true);
TestCodewar_1.default.assert_equals(_8_kyu_How_good_are_you_really_1.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
TestCodewar_1.default.assert_equals(_8_kyu_How_good_are_you_really_1.betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true);
// 2021/01/25 21:45
var _7_kyu_Exes_and_Ohs_1 = require("./7 kyu Exes and Ohs");
// assert.strictEqual(xo('xo'),true);
// assert.strictEqual(xo("xxOo"),true);
// assert.strictEqual(xo("xxxm"),false);
// assert.strictEqual(xo("Oo"),false);
// assert.strictEqual(xo("ooom"), false);
chai_1.assert.strictEqual(_7_kyu_Exes_and_Ohs_1.xo('xxxoo'), false);
chai_1.assert.strictEqual(_7_kyu_Exes_and_Ohs_1.xo('XOoXoXxoxOOXOOoXOXXxoxXOooxOo'), false);
// 2021/01/21 23:36
var _6_kyu_Sum_of_Digits__Digital_Root_1 = require("./6 kyu Sum of Digits  Digital Root");
chai_1.assert.equal(_6_kyu_Sum_of_Digits__Digital_Root_1.digitalRoot(16), 7);
chai_1.assert.equal(_6_kyu_Sum_of_Digits__Digital_Root_1.digitalRoot(456), 6);
// 2021/01/20 19:12
var _7_kyu_Get_the_Middle_Character_1 = require("./7 kyu Get the Middle Character");
function test(string, expected) {
    chai_1.assert.strictEqual(_7_kyu_Get_the_Middle_Character_1.Challenge.getMiddle(string), expected);
}
test('test', 'es');
test('testing', 't');
// 2021/01/18 21:55
var _7_kyu_Count_the_Digit_1 = require("./7 kyu Count the Digit");
// Test.assert_equals(nbDig(10, 1), 4);
// Test.assert_equals(nbDig(25, 1), 11);
TestCodewar_1.default.assert_equals(_7_kyu_Count_the_Digit_1.nbDig(5750, 0), 4700);
// Test.assert_equals(nbDig(11011, 2), 9481);
// Test.assert_equals(nbDig(12224, 8), 7733);
// Test.assert_equals(nbDig(11549, 1), 11905);
// 2021/01/18 21:27
// 5 kyu Function Cache.js
// 2021/01/14 21:02
var _6_kyu_Find_the_unique_number_1 = require("./6 kyu Find the unique number");
chai_1.assert.strictEqual(_6_kyu_Find_the_unique_number_1.findUniq([1, 1, 1, 2, 1, 1]), 2);
chai_1.assert.strictEqual(_6_kyu_Find_the_unique_number_1.findUniq([0, 0, 0.55, 0, 0]), 0.55);
// 2021/01/13 13:18
// 7 kyu Jaden Casing Strings
var _5_kyu_Second_Variation_on_Caesar_Cipher_1 = require("./5 kyu Second Variation on Caesar Cipher");
var u, v;
u = 'I should have known that you would have a perfect answer for me!!!';
v = [
    'ijJ tipvme ibw',
    'f lopxo uibu z',
    'pv xpvme ibwf ',
    'b qfsgfdu botx',
    'fs gps nf!!!',
];
TestCodewar_1.default.assert_equals(_5_kyu_Second_Variation_on_Caesar_Cipher_1.G964_20210110.encodeStr(u, 1), v);
TestCodewar_1.default.assert_equals(_5_kyu_Second_Variation_on_Caesar_Cipher_1.G964_20210110.decode(v), u);
// 2021/01/07 20:52
var _7_kyu_Calculate_Parity_bit_1 = require("./7 kyu Calculate Parity bit!");
TestCodewar_1.default.assert_equals(_7_kyu_Calculate_Parity_bit_1.checkParity('even', '101010'), 1);
TestCodewar_1.default.assert_equals(_7_kyu_Calculate_Parity_bit_1.checkParity('odd', '101010'), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Calculate_Parity_bit_1.checkParity('even', '101011'), 0);
TestCodewar_1.default.assert_equals(_7_kyu_Calculate_Parity_bit_1.checkParity('odd', '101011'), 1);
// 2021/01/06 22:06
var _7_kyu_Beginner_Series__3_Sum_of_Numbers_1 = require("./7 kyu Beginner Series #3 Sum of Numbers");
chai_1.assert.strictEqual(_7_kyu_Beginner_Series__3_Sum_of_Numbers_1.getSum(0, -1), -1);
chai_1.assert.strictEqual(_7_kyu_Beginner_Series__3_Sum_of_Numbers_1.getSum(0, 1), 1);
// 2021/01/06 12:48
var _4_kyu_Sum_Strings_as_Numbers_1 = require("./4 kyu Sum Strings as Numbers");
TestCodewar_1.default.assert_equals(_4_kyu_Sum_Strings_as_Numbers_1.sumStrings('123', '456'), '579');
// - Expected: '1757330826245818554540160790849',
//   instead got: '1.7573308262458186e+30'
TestCodewar_1.default.assert_equals(_4_kyu_Sum_Strings_as_Numbers_1.sumStrings('915381589456908955396757569014', '841949236788909599143403221835'), '1757330826245818554540160790849');
// 2021/01/05 12:38
var _5_kyu_Directions_Reduction_1 = require("./5 kyu Directions Reduction");
chai_1.assert.deepEqual(_5_kyu_Directions_Reduction_1.dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
chai_1.assert.deepEqual(_5_kyu_Directions_Reduction_1.dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']), []);
// 2021/01/04 21:06
//  上から書いていくスタイルにチェンジ
var _5_kyu_Sum_of_pairs_1 = require("./5 kyu Sum of pairs");
var l1 = [1, 4, 8, 7, 3, 15], l2 = [1, -2, 3, 0, -6, 1], l3 = [20, -13, 40], l4 = [1, 2, 3, 4, 1, 0], l5 = [10, 5, 2, 3, 7, 5], l6 = [4, -2, 3, 3, 4], l7 = [0, 2, 0], l8 = [5, 9, 13, -3];
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l1, 8), [1, 7], 'Basic: [' + l1 + '] should return [1, 7] for sum = 8');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l2, -6), [0, -6], 'Negatives: [' + l2 + '] should return [0, -6] for sum = -6');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l3, -7), undefined, 'No Match: [' + l3 + '] should return undefined for sum = -7');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l4, 2), [1, 1], 'First Match From Left: [' + l4 + '] should return [1, 1] for sum = 2 ');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs_BP(l5, 10), [3, 7], 'First Match From Left REDUX!: [' +
    l5 +
    '] should return [3, 7] for sum = 10 ');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l5, 10), [3, 7], 'First Match From Left REDUX!: [' +
    l5 +
    '] should return [3, 7] for sum = 10 ');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l6, 8), [4, 4], 'Duplicates: [' + l6 + '] should return [4, 4] for sum = 8');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l7, 0), [0, 0], 'Zeroes: [' + l7 + '] should return [0, 0] for sum = 0');
chai_1.assert.deepEqual(_5_kyu_Sum_of_pairs_1.sumPairs(l8, 10), [13, -3], 'Subtraction: [' + l8 + '] should return [13, -3] for sum = 10');
var speedOfPetals = require("./8 kyu The falling speed of petals");
// speedOfPetals.sakuraFall(0);
// speedOfPetals.sakuraFall(5);
speedOfPetals.sakuraFall(10);
// speedOfPetals.sakuraFall(-1);
// speedOfPetals.sakuraFall(200);
// console.log(speedOfPetals.f(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000, 'ペソ')); // "1,000ペソ"
var isograms = require("./7 kyu Isograms");
TestCodewar_1.default.assert_equals(isograms.isIsogram('Dermatoglyphics'), true); // isograms.isIsogram("Dermatoglyphics")//, true );
// Test.assert_equals(isograms.isIsogram("isogram"), true );
// Test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assert_equals(isograms.isIsogram("isIsogram"), false );
// Test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");
var _7_kyu_Vowel_Count_1 = require("./7 kyu Vowel Count");
TestCodewar_1.default.assert_equals(_7_kyu_Vowel_Count_1.Kata.getCount('abracadabra'), 5);
var shark = require("./8 kyu Holiday VI - Shark Pontoon");
TestCodewar_1.default.assert_equals(shark.shark(12, 50, 4, 8, true), 'Alive!');
TestCodewar_1.default.assert_equals(shark.shark(7, 55, 4, 16, true), 'Alive!');
TestCodewar_1.default.assert_equals(shark.shark(24, 0, 4, 8, true), 'Shark Bait!');
TestCodewar_1.default.assert_equals(shark.shark(40, 35, 3, 20, true), 'Shark Bait!');
TestCodewar_1.default.assert_equals(shark.shark(7, 8, 3, 4, true), 'Alive!');
var nextid = require("./8 kyu Smallest unused ID");
TestCodewar_1.default.assert_equals(nextid.nextId([0, 1, 2, 3, 5]), 4);
TestCodewar_1.default.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
var _8_kyu_Convert_a_Number_to_a_String_1 = require("./8 kyu Convert a Number to a String!");
TestCodewar_1.default.assert_equals(_8_kyu_Convert_a_Number_to_a_String_1.numberToString(67), '67');
var _8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1 = require("./8 kyu Convert boolean values to strings 'Yes' or 'No'");
TestCodewar_1.default.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(true), 'Yes');
TestCodewar_1.default.assert_equals(_8_kyu_Convert_boolean_values_to_strings__Yes__or__No_1.boolToWord(false), 'No');
var _8_kyu_Counting_sheep___1 = require("./8 kyu Counting sheep...");
var array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    undefined,
    true,
    false,
    null,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];
var result1 = _8_kyu_Counting_sheep___1.countSheeps(array1);
TestCodewar_1.default.assert_equals(result1, 17, 'There are 17 sheeps in total, not ' + result1);
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
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount(''), 0);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount('abcde'), 0);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount('aabbcde'), 2);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount('aabBcde'), 2, 'should ignore case');
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount('Indivisibility'), 1);
TestCodewar_1.default.assert_equals(_6_kyu_Counting_Duplicates_1.duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent');
// Test.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");
var _5_kyu_Primes_in_numbers_1 = require("./5 kyu Primes in numbers");
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7775460, '(2**2)(3**3)(5)(7)(11**2)(17)');
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 7919, '(7919)');
TestCodewar_1.default.assert_equals_param_func(_5_kyu_Primes_in_numbers_1.G964.primeFactors, 17 * 17 * 93 * 677, '(3)(17**2)(31)(677)');
var _6_kyu_Find_the_odd_int_1 = require("./6 kyu Find the odd int");
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [10], 10);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
TestCodewar_1.default.assert_equals_param_func(_6_kyu_Find_the_odd_int_1.findOdd, [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// Test.assert_equals(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
var _6_kyu_Your_order__please_1 = require("./6 kyu Your order, please");
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
TestCodewar_1.default.assert_equals(_6_kyu_Your_order__please_1.order(''), '');
//かんたんなの
var _8_kyu_Returning_Strings_1 = require("./8 kyu Returning Strings");
TestCodewar_1.default.assert_equals(_8_kyu_Returning_Strings_1.greet('Ryan'), 'Hello, Ryan how are you doing today?');
TestCodewar_1.default.assert_equals(_8_kyu_Returning_Strings_1.greet('Shingles'), 'Hello, Shingles how are you doing today?');
var _8_kyu_Gravity_Flip_1 = require("./8 kyu Gravity Flip");
TestCodewar_1.default.assert_equals(_8_kyu_Gravity_Flip_1.flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
TestCodewar_1.default.assert_equals(_8_kyu_Gravity_Flip_1.flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
var _8_kyu_A_wolf_in_sheep_s_clothing_1 = require("./8 kyu A wolf in sheep_s clothing");
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
]), 'Oi! Sheep number 2! You are about to be eaten by a wolf!');
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 5! You are about to be eaten by a wolf!');
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 6! You are about to be eaten by a wolf!');
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!');
TestCodewar_1.default.assert_equals(_8_kyu_A_wolf_in_sheep_s_clothing_1.warnTheSheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep');
//一旦飛ばす
var _6_kyu_Are_they_the__same__1 = require("./6 kyu Are they the \"same\"?");
var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), true);
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
    11 * 21,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), false);
a1 = [2, 2, 3];
a2 = [4, 9, 9];
TestCodewar_1.default.assert_equals(_6_kyu_Are_they_the__same__1.comp(a1, a2), false);
//* 拡張メソッド fizzBuzzOutput(30)
var _6_kyu_Valid_Braces_1 = require("./6 kyu Valid Braces");
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('()'), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('[(])'), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('(){}[]'), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('([{}])'), true);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('(}'), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('[(])'), false);
TestCodewar_1.default.assert_equals(_6_kyu_Valid_Braces_1.validBraces('[({})](]'), false);
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
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
TestCodewar_1.default.assert_equals(_7_kyu_Two_to_One_1.G9642.longest('lordsofthefallen', 'gamekult'), 'adefghklmnorstu');
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
TestCodewar_1.default.assert_equals(_5_kyu_Diophantine_Equation_1.solequa(90005), [
    [45003, 22501],
    [9003, 4499],
    [981, 467],
    [309, 37],
]);
// 2020/11/03  0:18
var _6_kyu_Multiplication_table_1 = require("./6 kyu Multiplication table");
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(1), [[1]]);
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(2), [
    [1, 2],
    [2, 4],
]);
TestCodewar_1.default.assert_equals(_6_kyu_Multiplication_table_1.multiplicationTable(3), [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
]);
// 2020/11/04 22:37
var _6_kyu_Irreducible_Sum_of_Rationals_1 = require("./6 kyu Irreducible Sum of Rationals");
TimeMeasure_1.default.measure('sumFracts', function () {
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [
        [1, 2],
        [1, 3],
        [1, 4],
    ], '[13, 12]');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [
        [1, 3],
        [5, 3],
    ], '2');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [
        [12, 3],
        [15, 3],
    ], '9');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts, [
        [2, 7],
        [1, 3],
        [1, 12],
    ], '[59, 84]');
});
TimeMeasure_1.default.measure('sumFracts1', function () {
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [
        [1, 2],
        [1, 3],
        [1, 4],
    ], '[13, 12]');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [
        [1, 3],
        [5, 3],
    ], '2');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [
        [12, 3],
        [15, 3],
    ], '9');
    TestCodewar_1.default.assert_equals_param_func(_6_kyu_Irreducible_Sum_of_Rationals_1.G96422.sumFracts1, [
        [2, 7],
        [1, 3],
        [1, 12],
    ], '[59, 84]');
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
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords('hello world!'), 'world! hello');
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords('foobar'), 'foobar');
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords('kata editor'), 'editor kata');
    TestCodewar_1.default.assert_equals(_8_kyu_Reversed_Words_1.reversedWords('row row row your boat'), 'boat your row row row');
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
// 2020/11/26 21:16
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
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([13, 10, 5, 2, 9]), [
    900,
    1170,
    2340,
    5850,
    1300,
]);
TestCodewar_1.default.assert_equals(_7_kyu_Product_Array__Array_Series__5_1.productArray([16, 17, 4, 3, 5, 2]), [
    2040,
    1920,
    8160,
    10880,
    6528,
    16320,
]);
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
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.dec2FactString(3628800054), '76A0000021000');
// Test.assert_equals(G964_1208.factString2Dec("341010"), 463);
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208.factString2Dec('76A0000021000'), 3628800054);
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.dec2FactString(3628800054), '76A0000021000');
TestCodewar_1.default.assert_equals(_5_kyu_Decimal_to_Factorial_and_Back_1.G964_1208_BP.factString2Dec('76A0000021000'), 3628800054);
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
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(545709101), 545709110);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBigger(95322050), 95322500);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBiggerBP(545709101), 545709110);
TestCodewar_1.default.assert_equals(_4_kyu_Next_bigger_number_with_the_same_digits_1.nextBiggerBP(95322050), 95322500);
// 2020/12/13  0:05
var _7_kyu_Row_Weights_Array_Series__8__1 = require("./7 kyu Row Weights(Array Series #8?)");
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([80]), [80, 0]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([100, 50]), [100, 50]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([50, 60, 70, 80]), [120, 140]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([13, 27, 49]), [62, 27]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([70, 58, 75, 34, 91]), [236, 92]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([0]), [0, 0]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([100, 51, 50, 100]), [150, 151]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
TestCodewar_1.default.assert_equals(_7_kyu_Row_Weights_Array_Series__8__1.rowWeights([0, 1, 0]), [0, 1]);
// 2020/12/13 17:30
var _4_kyu_Matrix_Determinant_1 = require("./4 kyu Matrix Determinant");
var m1 = [
    [1, 3],
    [2, 5],
];
var m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
];
chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant([[1]])).to.equal(1);
chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant(m1)).to.equal(-1);
chai_1.expect(_4_kyu_Matrix_Determinant_1.determinant(m2)).to.equal(-20);
// 2020/12/15 16:43 Rustで提出しようと思う
var _8_kyu_Reversed_Strings_1 = require("./8 kyu Reversed Strings");
chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('world'), 'dlrow');
chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('hello'), 'olleh');
chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution(''), '');
chai_1.assert.equal(_8_kyu_Reversed_Strings_1.solution('h'), 'h');
// 2020/12/21  0:23
var _5_kyu_Binary_Genetic_Algorithms_1 = require("./5 kyu Binary Genetic Algorithms");
var geneticAlgorithm = new _5_kyu_Binary_Genetic_Algorithms_1.GeneticAlgorithm();
// function testing(s:any, expected:any) {
//   Test.assert_equals(G964_20201221.decompose(s), expected)
// }
// testing("3/4", ["1/2", "1/4"]);
// testing("12/4", ["3"]);
// testing("4/5", ["1/2", "1/4", "1/20"]);
// testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
// 2020/12/21 21:44
var _5_kyu_Help_your_granny_1 = require("./5 kyu Help your granny!");
var friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
var fTowns1 = [
    ['A1', 'X1'],
    ['A2', 'X2'],
    ['A3', 'X3'],
    ['A4', 'X4'],
];
var distTable1 = ['X1', 100.0, 'X2', 200.0, 'X3', 250.0, 'X4', 300.0];
TestCodewar_1.default.assert_equals(_5_kyu_Help_your_granny_1.G964_20201222.tour(friends1, fTowns1, distTable1), 889);
friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
fTowns1 = [
    ['A1', 'X1'],
    ['A2', 'X2'],
    ['A3', 'X3'],
    ['A4', 'X4'],
    ['A5', 'X5'],
];
distTable1 = ['X1', 100, 'X2', 200, 'X3', 250, 'X4', 300, 'X5', 320];
TestCodewar_1.default.assert_equals(_5_kyu_Help_your_granny_1.G964_20201222.tour(friends1, fTowns1, distTable1), 1020);
// 2020/12/24  0:57
var _7_kyu_Mumbling_1 = require("./7 kyu Mumbling");
chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
chai_1.assert.strictEqual(_7_kyu_Mumbling_1.accum('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
// 2020/12/25  0:40
var _7_kyu_Drying_Potatoes_1 = require("./7 kyu Drying Potatoes");
chai_1.assert.strictEqual(_7_kyu_Drying_Potatoes_1.potatoes(82, 127, 80), 114);
chai_1.assert.strictEqual(_7_kyu_Drying_Potatoes_1.potatoes(93, 129, 91), 100);
chai_1.assert.strictEqual(_7_kyu_Drying_Potatoes_1.potatoes(84, 65, 80), 52);
chai_1.assert.strictEqual(_7_kyu_Drying_Potatoes_1.potatoes(83, 105, 79), 85);
// 2020/12/27 23:52
var _5_kyu_Integers__Recreation_One_1 = require("./5 kyu Integers: Recreation One");
TestCodewar_1.default.assert_equals(_5_kyu_Integers__Recreation_One_1.G964_1227.listSquared(1, 250), [
    [1, 1],
    [42, 2500],
    [246, 84100],
]);
TestCodewar_1.default.assert_equals(_5_kyu_Integers__Recreation_One_1.G964_1227.listSquared(42, 250), [
    [42, 2500],
    [246, 84100],
]);
TestCodewar_1.default.assert_equals(_5_kyu_Integers__Recreation_One_1.G964_1227.listSquared(250, 500), [[287, 84100]]);
TestCodewar_1.default.assert_equals(_5_kyu_Integers__Recreation_One_1.G964_1227.listSquared(300, 600), []);
// 2020/12/30  0:05
var _5_kyu_Fibo_akin_1 = require(".//5 kyu Fibo akin");
function dotest1(n, k, res) {
    chai_1.assert.equal(_5_kyu_Fibo_akin_1.G964_1229.lengthSupUK(n, k), res);
}
function dotest2(n, res) {
    chai_1.assert.equal(_5_kyu_Fibo_akin_1.G964_1229.comp(n), res);
}
dotest1(50, 25, 2);
dotest1(3332, 973, 1391);
dotest1(2941, 862, 1246);
dotest1(3177, 573, 2047);
dotest1(1745, 645, 474);
dotest2(74626, 37128);
dotest2(71749, 35692);
dotest2(56890, 28281);
dotest2(60441, 30054);
dotest2(21361, 10581);
//# sourceMappingURL=main.js.map