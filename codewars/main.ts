import Test from './TestCodewar';
// let test = new Test();//__filename

import TimeMeasure from './TimeMeasure';
import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
////////////////////////////////////////////////////////////////

// 2021/07/31 22:42
import { expandedForm } from './6 kyu Write Number in Expanded Form';
assert.equal(expandedForm(12), '10 + 2');
assert.equal(expandedForm(42), '40 + 2');
assert.equal(expandedForm(70304), '70000 + 300 + 4');

// 2021/07/23 23:06
import { sumDigits } from './7 kyu Summing a numbers digits';

assert.equal(sumDigits(10), 1);
assert.equal(sumDigits(99), 18);
assert.equal(sumDigits(-32), 5);

// 2021/06/30 16:07
import { G964 as G964_2022_0630 } from './6 kyu Reducing by steps';

function testing_20210630(actual: any, expected: any) {
  assert.deepEqual(actual, expected);
}

var a0630 = [18, 69, -90, -78, 65, 40];
var r = [18, 3, 3, 3, 1, 1];
var op = G964_2022_0630.operArray(G964_2022_0630.gcdi, a0630, a0630[0]);
testing_20210630(op, r);
r = [18, 414, 2070, 26910, 26910, 107640];
op = G964_2022_0630.operArray(G964_2022_0630.lcmu, a0630, a0630[0]);
testing_20210630(op, r);
r = [18, 87, -3, -81, -16, 24];
op = G964_2022_0630.operArray(G964_2022_0630.som, a0630, 0);
testing_20210630(op, r);
r = [18, 18, -90, -90, -90, -90];
op = G964_2022_0630.operArray(G964_2022_0630.mini, a0630, a0630[0]);
testing_20210630(op, r);
r = [18, 69, 69, 69, 69, 69];
op = G964_2022_0630.operArray(G964_2022_0630.maxi, a0630, a0630[0]);
testing_20210630(op, r);

// 2021/03/16 22:32
import { G964 as G964_20210316 } from './5 kyu Phone Directory';
const dr =
  '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n' +
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

const num =
  '1-541-754-3010,1-541-914-3010,1-541-984-3012,1-321-512-2222,1-741-984-3090,' +
  '1-921-333-2222,1-111-544-8973,1-921-512-2222,1-121-544-8974,1-481-512-2222,' +
  '1-121-504-8974,1-681-512-2222,1-421-674-8974,1-908-512-2222,48-421-674-8974,1-098-512-2222,' +
  '19-421-674-8974,1-498-512-2222,1-099-500-8000,1-931-512-4855,5-555-555-5555,' +
  '5-541-754-3010,6-541-914-3010,5-541-984-3012,5-321-512-2222,3-741-984-3090,' +
  '3-921-333-2222,8-111-544-8973,8-921-512-2222,2-121-544-8974,2-481-512-2222,' +
  '7-121-504-8974,7-681-512-2222,9-421-674-8974,2-908-512-2222,8-421-674-8974,' +
  '15-098-512-2222,9-421-674-8974,3-498-512-2222,12-099-500-8000,8-931-512-4855,' +
  '3-098-512-2222';

function testing20210316(strng: string, num: string, expected: string) {
  assert.equal(G964_20210316.phone(strng, num), expected);
}

testing20210316(
  dr,
  '48-421-674-8974',
  'Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma'
);
testing20210316(
  dr,
  '19-421-674-8974',
  'Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000'
);
testing20210316(
  dr,
  '1-921-512-2222',
  'Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209'
);
testing20210316(
  dr,
  '1-908-512-2222',
  "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209"
);

// 2021/03/08 22:29
import { mixbonacci } from './5 kyu Mixbonacci';

assert.deepStrictEqual(mixbonacci([], 10), []);
assert.deepStrictEqual(mixbonacci(['fib'], 0), []);
assert.deepStrictEqual(
  mixbonacci(['fib'], 10),
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
);
assert.deepStrictEqual(mixbonacci(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
assert.deepStrictEqual(
  mixbonacci(['jac'], 10),
  [0, 1, 1, 3, 5, 11, 21, 43, 85, 171]
);
assert.deepStrictEqual(
  mixbonacci(['pel'], 10),
  [0, 1, 2, 5, 12, 29, 70, 169, 408, 985]
);
assert.deepStrictEqual(
  mixbonacci(['tri'], 10),
  [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
);
assert.deepStrictEqual(
  mixbonacci(['tet'], 10),
  [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]
);
assert.deepStrictEqual(
  mixbonacci(['fib', 'tet'], 10),
  [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]
);
assert.deepStrictEqual(
  mixbonacci(['jac', 'jac', 'pel'], 10),
  [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]
);

assert.deepStrictEqual(
  mixbonacci(['pel'], 59),
  [
    0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782,
    195025, 470832, 1136689, 2744210, 6625109, 15994428, 38613965, 93222358,
    225058681, 543339720, 1311738121, 3166815962, 7645370045, 18457556052,
    44560482149, 107578520350, 259717522849, 627013566048, 1513744654945,
    3654502875938, 8822750406821, 21300003689580, 51422757785981,
    124145519261542, 299713796309065, 723573111879672, 1746860020068409,
    4217293152016490, 10181446324101388, 24580185800219264, 59341817924539920,
    143263821649299100, 345869461223138200, 835002744095575400,
    2015874949414289000, 4866752642924153000, 11749380235262595000,
    28365513113449340000, 68480406462161280000, 165326326037771900000,
    399133058537705100000, 963592443113182100000, 2.3263179447640693e21,
    5.616228332641321e21,
  ]
);

// 2021/03/04  0:04
import { G3 } from '../AOJ/ALDS1_4_D_割り当て';
assert.deepEqual(
  G3.main(`5 3
8
1
7
3
9`),
  10
);
assert.deepEqual(
  G3.main(`4 2
1
2
2
6`),
  6
);
// 2021/03/03 10:04
import { G2 } from '../AOJ/ALDS1_4_C_Dictionary';
assert.deepEqual(
  G2.main(
    `6
insert AAA
insert AAC
find AAA
find CCC
insert CCC
find CCC
insert CCC`
  ),
  `yes
no
yes`
);
assert.deepEqual(
  G2.main(
    `13
insert AAA
insert AAC
insert AGA
insert AGG
insert TTT
find AAA
find CCC
find CCC
insert CCC
find CCC
insert T
find TTT
find T`
  ),
  `yes
no
no
yes
yes
yes`
);
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
import { G } from '../AtCoder/第一回アルゴリズム実技検定G - 組分け';

assert.deepEqual(
  G.main(
    `6
10 10 -10 -10 -10
10 -10 -10 -10
-10 -10 -10
10 -10
-10`
  ),
  40
);
assert.deepEqual(
  G.main(
    `3
1 1
1`
  ),
  3
);

// 2021/03/01 22:17
import {
  fraction,
  G964 as G964_20210301,
} from './5 kyu Some Egyptian fractions';
type frac = {
  a: fraction;
  b: fraction;
};
{
  const test = (arr: frac[]) =>
    arr.forEach((f) => {
      const t = (a: fraction, b: fraction) => {
        const stra = a.toString();
        const strb = b.toString();
        console.log(`stra:${stra} strb:${strb}`);
        // assert.deepEqual()
        console.log(`${stra} + ${strb} = ${a.add(b)}`);
        console.log(`${stra} - ${strb} = ${a.subtract(b)}`);
        console.log(`${stra} * ${strb} = ${a.multiply(b)}`);
        console.log(`${stra} / ${strb} = ${a.divide(b)}`);
      };
      t(f.a, f.b);
      t(f.b, f.a);
    });
  test([
    { a: new fraction(5), b: new fraction(1, 2) },
    { a: new fraction(2, 3), b: new fraction(1, 6) },
    { a: new fraction(1, 2), b: new fraction(1, 2) },
    { a: new fraction(1 / 3), b: new fraction(3) },
  ]);
}
function testing_20210301(s: string, expected: string[]) {
  assert.deepEqual(G964_20210301.decompose(s), expected);
}
testing_20210301('3/4', ['1/2', '1/4']);
testing_20210301('12/4', ['3']);
testing_20210301('4/5', ['1/2', '1/4', '1/20']);
testing_20210301('21/23', ['1/2', '1/3', '1/13', '1/359', '1/644046']);
testing_20210301('0.66', ['1/2', '1/7', '1/59', '1/5163', '1/53307975']);

testing_20210301('0', []);

//　2021/02/26 12:05
import { recover } from './6 kyu Digit Recovery';
assert.deepEqual(recover('NEO'), '1');
assert.deepEqual(recover('ONETWO'), '12');
assert.deepEqual(recover('TWWTONE'), '21');
assert.deepEqual(recover('ZYX'), 'No digits found');
assert.deepEqual(recover('ONENO'), '11');
assert.deepEqual(recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');

// 2021/02/25 21:03
import { answer as answer20210225 } from '../AtCoder/第一回アルゴリズム実技検定F - DoubleCamelCase Sort';
assert.deepEqual(
  answer20210225('FisHDoGCaTAAAaAAbCAC'),
  'AAAaAAbCACCaTDoGFisH'
);
assert.deepEqual(
  answer20210225('AAAAAjhfgaBCsahdfakGZsZGdEAA'),
  'AAAAAAAjhfgaBCsahdfakGGdEZsZ'
);

// 2021/02/25 15:09
import { answer as binarySearch } from '../AOJ/ALDS1_4_B_二分探索';

assert.deepEqual(
  binarySearch(
    `5
1 2 3 4 5
3
3 4 1
`
  ),
  `3`
);
assert.deepEqual(
  binarySearch(
    `3
1 2 3
1
5
`
  ),
  `0`
);
assert.deepEqual(
  binarySearch(
    `5
1 1 2 2 3
2
1 2
`
  ),
  `2`
);
assert.deepEqual(
  binarySearch(
    `30
0 0 0 0 2 3 3 3 4 5 6 7 8 8 8 9 9 9 10 11 11 12 12 12 12 13 13 7000000 500000000 1000000000
16
2 0 5 11 3 16 4 6 1 10 7 14 15 7000000 9 5555555
`
  ),
  `11`
);

// 2021/02/25 14:44
import { linearSearch } from '../AOJ/ALDS1_4_A_線形探索';

let input20210225 = `5
1 2 3 4 5
3
3 4 1
`;
let output20210225 = `3`;
assert.deepEqual(linearSearch(input20210225), output20210225);
input20210225 = `3
3 1 2
1
5
`;
output20210225 = `0`;
assert.deepEqual(linearSearch(input20210225), output20210225);
input20210225 = `5
1 1 2 2 3
2
1 2
`;
output20210225 = `2`;
assert.deepEqual(linearSearch(input20210225), output20210225);

// 2021/02/24 18:35
import { answer as answer20210224 } from '../AOJ/ALDS1_3_D_Areas on the Cross-Section Diagram';

let input20210224 = '\\\\//';
let output20210224 = `4
1 4`;
assert.deepEqual(answer20210224(input20210224), output20210224);
input20210224 = '\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\';
output20210224 = `35
5 4 2 1 19 9`;
assert.deepEqual(answer20210224(input20210224), output20210224);
input20210224 =
  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\';

output20210224 = `0
0`;
assert.deepEqual(answer20210224(input20210224), output20210224);

// 2021/02/23 19:01
import { recoverFollower } from '../AtCoder/第一回アルゴリズム実技検定E - SNS のログ';

let input20210222 = `6 7
1 1 2
1 2 3
1 3 4
1 1 5
1 5 6
3 1
2 6
`;
let output20210222 = `NYYNYY
NNYNNN
NNNYNN
NNNNNN
NNNNNY
YNNNYN
`;
assert.equal(recoverFollower(input20210222), output20210222);

// 2021/02/23 10:02
import { test20210223BP } from '../AtCoder/第一回アルゴリズム実技検定D - 重複検査';
let input = `6
1
5
6
3
2
6
`;
let output = '6 4';
assert.equal(test20210223BP(input), output);
input = `7
5
4
3
2
7
6
1
`;
output = 'Correct';
assert.equal(test20210223BP(input), output);

// 2021/02/17 20:51
import { G964_20210217 } from './7 kyu Maximum Length Difference';
function testing_20210217(actual: number, expected: number) {
  assert.equal(actual, expected);
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
testing_20210217(G964_20210217.mxdiflg(s1, s2), 13);
s1 = [
  'ejjjjmmtthh',
  'zxxuueeg',
  'aanlljrrrxx',
  'dqqqaaabbb',
  'oocccffuucccjjjkkkjyyyeehh',
];
s2 = ['bbbaaayddqbbrrrv'];
testing_20210217(G964_20210217.mxdiflg(s1, s2), 10);

// 2021/02/07 23:10
import { code, decode } from './5 kyu Coding with Squared Strings';
const data1 =
  'What do you remember? When I looked at his streaky glasses, I wanted ' +
  'to leave him. And before that? He stole those cherries for me at midnight. We were walking ' +
  'in the rain and I loved him. And before that? I saw him coming ' +
  'toward me that time at the picnic, edgy, foreign.';

const data2 =
  "Some say the world will end in fire, Some say in ice. From what I've tasted of desire " +
  'I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate' +
  ' To say that for destruction ice Is also great And would suffice.';

const data1Sol =
  '\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n' +
  '\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n' +
  '\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em';

const data2Sol =
  "fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
  '\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n' +
  '\vuroaf h vi ti o\n\vfent I iotd nfr';

// * 先に↓
// assert.strictEqual(code(data1), data1Sol);
// assert.strictEqual(code(data2), data2Sol);
// assert.strictEqual(code(""), "");
// assert.strictEqual(decode(data2Sol), data2);

// 2021/02/07 23:25
import {
  rot90Clock,
  diag1Sym,
  selfieAndDiag1,
  oper,
} from './6 kyu Moves in squared strings (III)';

assert.strictEqual(
  oper(diag1Sym, 'wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ'),
  'weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ'
);

let a = oper(rot90Clock, 'rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb');
let b = 'Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle';
console.log(a);
console.log(b);
assert.strictEqual(a, b);

a = oper(selfieAndDiag1, 'NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg');
b =
  'NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg';
console.log(a);
console.log(b);
assert.strictEqual(a, b);

// 2021/02/01 18:40
import { G964 as G964_20210201 } from './4 kyu Strings Mix';
function testing(s1: string, s2: string, expected: string) {
  assert.deepEqual(G964_20210201.mix(s1, s2), expected);
}
testing('Are they here', 'yes, they are here', '2:eeeee/2:yy/=:hh/=:rr');
testing(
  'looping is fun but dangerous',
  'less dangerous than coding',
  '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg'
);
testing(
  ' In many languages',
  " there's a pair of functions",
  '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt'
);

// 2021/01/31  3:00
import { quarterOf } from './8 kyu Quarter of the year';
assert.equal(quarterOf(3), 1);
assert.equal(quarterOf(8), 3);
assert.equal(quarterOf(11), 4);

// 2021/01/30 23:44
import {
  G964_20210130,
  G964_20210130_t,
} from './5 kyu Product of consecutive Fib numbers';
function dotest0130(prod: number, expected: any[]) {
  assert.deepEqual(G964_20210130_t.productFib(prod), expected);
}
dotest0130(4895, [55, 89, true]);
dotest0130(5895, [89, 144, false]);

//　2021/01/29 22:41
import { findAverage } from './8 kyu Calculate average';
assert.strictEqual(findAverage([1, 1, 1]), 1);
// 2021/01/29 22:34
import { goals } from './8 kyu Grasshopper - Messi goals function';
assert.equal(goals(5, 10, 2), 17);
// 2021/01/27 21:37
import { DNAtoRNA } from './8 kyu DNA to RNA Conversion';
assert.equal(DNAtoRNA('TTTT'), 'UUUU');
assert.equal(DNAtoRNA('GCAT'), 'GCAU');
assert.equal(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');

// 2021/01/27 18:08
//* 未
import { josephusSurvivor } from './5 kyu Josephus Survivor';
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
import { betterThanAverage } from './8 kyu How good are you really';
Test.assert_equals(betterThanAverage([2, 3], 5), true);
Test.assert_equals(
  betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75),
  true
);
Test.assert_equals(
  betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69),
  true
);

// 2021/01/25 21:45
import { xo } from './7 kyu Exes and Ohs';
// assert.strictEqual(xo('xo'),true);
// assert.strictEqual(xo("xxOo"),true);
// assert.strictEqual(xo("xxxm"),false);
// assert.strictEqual(xo("Oo"),false);
// assert.strictEqual(xo("ooom"), false);
assert.strictEqual(xo('xxxoo'), false);
assert.strictEqual(xo('XOoXoXxoxOOXOOoXOXXxoxXOooxOo'), false);

// 2021/01/21 23:36
import { digitalRoot } from './6 kyu Sum of Digits  Digital Root';
assert.equal(digitalRoot(16), 7);
assert.equal(digitalRoot(456), 6);

// 2021/01/20 19:12
import { Challenge } from './7 kyu Get the Middle Character';
function test(string: string, expected: string) {
  assert.strictEqual(Challenge.getMiddle(string), expected);
}
test('test', 'es');
test('testing', 't');

// 2021/01/18 21:55
import { nbDig } from './7 kyu Count the Digit';
// Test.assert_equals(nbDig(10, 1), 4);
// Test.assert_equals(nbDig(25, 1), 11);
Test.assert_equals(nbDig(5750, 0), 4700);
// Test.assert_equals(nbDig(11011, 2), 9481);
// Test.assert_equals(nbDig(12224, 8), 7733);
// Test.assert_equals(nbDig(11549, 1), 11905);
// 2021/01/18 21:27
// 5 kyu Function Cache.js

// 2021/01/14 21:02
import { findUniq } from './6 kyu Find the unique number';
assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
assert.strictEqual(findUniq([0, 0, 0.55, 0, 0]), 0.55);

// 2021/01/13 13:18
// 7 kyu Jaden Casing Strings

import { G964_20210110 } from './5 kyu Second Variation on Caesar Cipher';
var u, v;
u = 'I should have known that you would have a perfect answer for me!!!';
v = [
  'ijJ tipvme ibw',
  'f lopxo uibu z',
  'pv xpvme ibwf ',
  'b qfsgfdu botx',
  'fs gps nf!!!',
];
Test.assert_equals(G964_20210110.encodeStr(u, 1), v);
Test.assert_equals(G964_20210110.decode(v), u);

// 2021/01/07 20:52
import { checkParity } from './7 kyu Calculate Parity bit!';
Test.assert_equals(checkParity('even', '101010'), 1);
Test.assert_equals(checkParity('odd', '101010'), 0);
Test.assert_equals(checkParity('even', '101011'), 0);
Test.assert_equals(checkParity('odd', '101011'), 1);

// 2021/01/06 22:06
import { getSum } from './7 kyu Beginner Series #3 Sum of Numbers';
assert.strictEqual(getSum(0, -1), -1);
assert.strictEqual(getSum(0, 1), 1);

// 2021/01/06 12:48
import { sumStrings } from './4 kyu Sum Strings as Numbers';
Test.assert_equals(sumStrings('123', '456'), '579');
// - Expected: '1757330826245818554540160790849',
//   instead got: '1.7573308262458186e+30'
Test.assert_equals(
  sumStrings(
    '915381589456908955396757569014',
    '841949236788909599143403221835'
  ),
  '1757330826245818554540160790849'
);

// 2021/01/05 12:38
import { dirReduc } from './5 kyu Directions Reduction';
assert.deepEqual(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ['WEST']
);
assert.deepEqual(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']),
  []
);

// 2021/01/04 21:06
//  上から書いていくスタイルにチェンジ
import { sumPairs, sumPairs_BP } from './5 kyu Sum of pairs';
const l1: number[] = [1, 4, 8, 7, 3, 15],
  l2: number[] = [1, -2, 3, 0, -6, 1],
  l3: number[] = [20, -13, 40],
  l4: number[] = [1, 2, 3, 4, 1, 0],
  l5: number[] = [10, 5, 2, 3, 7, 5],
  l6: number[] = [4, -2, 3, 3, 4],
  l7: number[] = [0, 2, 0],
  l8: number[] = [5, 9, 13, -3];
assert.deepEqual(
  sumPairs(l1, 8),
  [1, 7],
  'Basic: [' + l1 + '] should return [1, 7] for sum = 8'
);
assert.deepEqual(
  sumPairs(l2, -6),
  [0, -6],
  'Negatives: [' + l2 + '] should return [0, -6] for sum = -6'
);
assert.deepEqual(
  sumPairs(l3, -7),
  undefined,
  'No Match: [' + l3 + '] should return undefined for sum = -7'
);
assert.deepEqual(
  sumPairs(l4, 2),
  [1, 1],
  'First Match From Left: [' + l4 + '] should return [1, 1] for sum = 2 '
);
assert.deepEqual(
  sumPairs_BP(l5, 10),
  [3, 7],
  'First Match From Left REDUX!: [' +
    l5 +
    '] should return [3, 7] for sum = 10 '
);
assert.deepEqual(
  sumPairs(l5, 10),
  [3, 7],
  'First Match From Left REDUX!: [' +
    l5 +
    '] should return [3, 7] for sum = 10 '
);
assert.deepEqual(
  sumPairs(l6, 8),
  [4, 4],
  'Duplicates: [' + l6 + '] should return [4, 4] for sum = 8'
);
assert.deepEqual(
  sumPairs(l7, 0),
  [0, 0],
  'Zeroes: [' + l7 + '] should return [0, 0] for sum = 0'
);
assert.deepEqual(
  sumPairs(l8, 10),
  [13, -3],
  'Subtraction: [' + l8 + '] should return [13, -3] for sum = 10'
);

import speedOfPetals = require('./8 kyu The falling speed of petals');
// speedOfPetals.sakuraFall(0);
// speedOfPetals.sakuraFall(5);
speedOfPetals.sakuraFall(10);
// speedOfPetals.sakuraFall(-1);
// speedOfPetals.sakuraFall(200);

// console.log(speedOfPetals.f(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000)); // "1,000円"
// console.log(speedOfPetals.f2(1000, 'ペソ')); // "1,000ペソ"

import isograms = require('./7 kyu Isograms');
Test.assert_equals(isograms.isIsogram('Dermatoglyphics'), true); // isograms.isIsogram("Dermatoglyphics")//, true );
// Test.assert_equals(isograms.isIsogram("isogram"), true );
// Test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assert_equals(isograms.isIsogram("isIsogram"), false );
// Test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");

import { Kata } from './7 kyu Vowel Count';

Test.assert_equals(Kata.getCount('abracadabra'), 5);

import shark = require('./8 kyu Holiday VI - Shark Pontoon');

Test.assert_equals(shark.shark(12, 50, 4, 8, true), 'Alive!');
Test.assert_equals(shark.shark(7, 55, 4, 16, true), 'Alive!');
Test.assert_equals(shark.shark(24, 0, 4, 8, true), 'Shark Bait!');
Test.assert_equals(shark.shark(40, 35, 3, 20, true), 'Shark Bait!');
Test.assert_equals(shark.shark(7, 8, 3, 4, true), 'Alive!');

import nextid = require('./8 kyu Smallest unused ID');

Test.assert_equals(nextid.nextId([0, 1, 2, 3, 5]), 4);
Test.assert_equals(nextid.nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);

import { numberToString } from './8 kyu Convert a Number to a String!';

Test.assert_equals(numberToString(67), '67');

import { boolToWord } from "./8 kyu Convert boolean values to strings 'Yes' or 'No'";

Test.assert_equals(boolToWord(true), 'Yes');
Test.assert_equals(boolToWord(false), 'No');

import { countSheeps } from './8 kyu Counting sheep...';

const array1 = [
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

const result1 = countSheeps(array1);
Test.assert_equals(result1, 17, 'There are 17 sheeps in total, not ' + result1);

import { reverseWords } from './7 kyu Reverse words';
Test.assert_equals(
  reverseWords('The quick brown fox jumps over the lazy dog.'),
  'ehT kciuq nworb xof spmuj revo eht yzal .god'
);
Test.assert_equals(reverseWords('apple'), 'elppa');
Test.assert_equals(reverseWords('a b c d'), 'a b c d');
Test.assert_equals(
  reverseWords('double  spaced  words'),
  'elbuod  decaps  sdrow'
);

//* class作ったパターンの回答
// import IqTest from './6 kyu IQ Test';

// const iqtest = new IqTest(1);
// Test.assert_equals(iqTest.iqTest('2 4 7 8 10'),3);
// Test.assert_equals(iqTest.iqTest('1 2 2'),1);
//* methodのみ
import { iqTest } from './6 kyu IQ Test';

Test.assert_equals(iqTest('2 4 7 8 10'), 3);
Test.assert_equals(iqTest('1 2 2'), 1);

import { duplicateCount } from './6 kyu Counting Duplicates'; //,duplicateCount_

Test.assert_equals(duplicateCount(''), 0);
Test.assert_equals(duplicateCount('abcde'), 0);
Test.assert_equals(duplicateCount('aabbcde'), 2);
Test.assert_equals(duplicateCount('aabBcde'), 2, 'should ignore case');
Test.assert_equals(duplicateCount('Indivisibility'), 1);
Test.assert_equals(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);

// Test.assert_equals(duplicateCount_("Indivisibilities"), 2, "characters may not be adjacent");

import { G964 } from './5 kyu Primes in numbers';

Test.assert_equals_param_func(
  G964.primeFactors,
  7775460,
  '(2**2)(3**3)(5)(7)(11**2)(17)'
);
Test.assert_equals_param_func(G964.primeFactors, 7919, '(7919)');
Test.assert_equals_param_func(
  G964.primeFactors,
  17 * 17 * 93 * 677,
  '(3)(17**2)(31)(677)'
);

import { findOdd } from './6 kyu Find the odd int';

Test.assert_equals_param_func(
  findOdd,
  [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
  5
);
Test.assert_equals_param_func(
  findOdd,
  [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5],
  -1
);
Test.assert_equals_param_func(
  findOdd,
  [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5],
  5
);
Test.assert_equals_param_func(findOdd, [10], 10);
Test.assert_equals_param_func(findOdd, [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
Test.assert_equals_param_func(findOdd, [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// Test.assert_equals(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

import { order } from './6 kyu Your order, please';

Test.assert_equals(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
Test.assert_equals(
  order('4of Fo1r pe6ople g3ood th5e the2'),
  'Fo1r the2 g3ood 4of th5e pe6ople'
);
Test.assert_equals(order(''), '');

//かんたんなの
import { greet } from './8 kyu Returning Strings';

Test.assert_equals(greet('Ryan'), 'Hello, Ryan how are you doing today?');
Test.assert_equals(
  greet('Shingles'),
  'Hello, Shingles how are you doing today?'
);

import { flip } from './8 kyu Gravity Flip';

Test.assert_equals(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
Test.assert_equals(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);

import { warnTheSheep } from './8 kyu A wolf in sheep_s clothing';

Test.assert_equals(
  warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
  ]),
  'Oi! Sheep number 2! You are about to be eaten by a wolf!'
);
Test.assert_equals(
  warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 5! You are about to be eaten by a wolf!'
);
Test.assert_equals(
  warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 6! You are about to be eaten by a wolf!'
);
Test.assert_equals(
  warnTheSheep(['sheep', 'wolf', 'sheep']),
  'Oi! Sheep number 1! You are about to be eaten by a wolf!'
);
Test.assert_equals(
  warnTheSheep(['sheep', 'sheep', 'wolf']),
  'Pls go away and stop eating my sheep'
);

//一旦飛ばす
import { comp, fizzBuzzOutput } from './6 kyu Are they the "same"?';

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
Test.assert_equals(comp(a1, a2), true);

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
Test.assert_equals(comp(a1, a2), false);

a1 = [2, 2, 3];
a2 = [4, 9, 9];
Test.assert_equals(comp(a1, a2), false);

//* 拡張メソッド fizzBuzzOutput(30)

import { validBraces } from './6 kyu Valid Braces';

Test.assert_equals(validBraces('()'), true);
Test.assert_equals(validBraces('[(])'), false);
Test.assert_equals(validBraces('(){}[]'), true);
Test.assert_equals(validBraces('([{}])'), true);
Test.assert_equals(validBraces('(}'), false);
Test.assert_equals(validBraces('[(])'), false);
Test.assert_equals(validBraces('[({})](]'), false);

// 2020/10/22 16:22
import { solution } from './7 kyu String ends with?';

Test.assert_equals(solution('abcde', 'cde'), true);
Test.assert_equals(solution('abcde', 'abc'), false);
Test.assert_equals(solution('abc', ''), true);

// 2020/10/23 14:35
import { divisors, divisors2 } from './7 kyu Count the divisors of a number';

Test.assert_equals(divisors(1), 1);
Test.assert_equals(divisors(10), 4);
Test.assert_equals(divisors(11), 2);
Test.assert_equals(divisors(54), 8);
Test.assert_equals(divisors(64), 7);

console.log(divisors2(10));

// 2020/10/23 19:47
import { G9642 } from './7 kyu Two to One';

Test.assert_equals(G9642.longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
Test.assert_equals(
  G9642.longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
  'abcdefghilnoprstu'
);
Test.assert_equals(
  G9642.longest('inmanylanguages', 'theresapairoffunctions'),
  'acefghilmnoprstuy'
);
Test.assert_equals(
  G9642.longest('lordsofthefallen', 'gamekult'),
  'adefghklmnorstu'
);

// 2020/10/27 13:29
import { isValidWalk } from './6 kyu Take a Ten Minute Walk';
Test.assert_equals(
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  true
);
Test.assert_equals(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
  false
);
Test.assert_equals(isValidWalk(['w']), false);
Test.assert_equals(
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  false
);

// 2020/10/30  9:58
import { solequa } from './5 kyu Diophantine Equation';
Test.assert_equals(solequa(5), [[3, 1]]);
Test.assert_equals(solequa(12), [[4, 1]]);
Test.assert_equals(solequa(13), [[7, 3]]);
Test.assert_equals(solequa(16), [[4, 0]]);
Test.assert_equals(solequa(90002), []);
Test.assert_equals(solequa(90005), [
  [45003, 22501],
  [9003, 4499],
  [981, 467],
  [309, 37],
]);

// 2020/11/03  0:18
import { multiplicationTable } from './6 kyu Multiplication table';
Test.assert_equals(multiplicationTable(1), [[1]]);
Test.assert_equals(multiplicationTable(2), [
  [1, 2],
  [2, 4],
]);
Test.assert_equals(multiplicationTable(3), [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
]);

// 2020/11/04 22:37
import { G96422 } from './6 kyu Irreducible Sum of Rationals';
TimeMeasure.measure('sumFracts', () => {
  Test.assert_equals_param_func(
    G96422.sumFracts,
    [
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    '[13, 12]'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts,
    [
      [1, 3],
      [5, 3],
    ],
    '2'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts,
    [
      [12, 3],
      [15, 3],
    ],
    '9'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts,
    [
      [2, 7],
      [1, 3],
      [1, 12],
    ],
    '[59, 84]'
  );
});
TimeMeasure.measure('sumFracts1', () => {
  Test.assert_equals_param_func(
    G96422.sumFracts1,
    [
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    '[13, 12]'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts1,
    [
      [1, 3],
      [5, 3],
    ],
    '2'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts1,
    [
      [12, 3],
      [15, 3],
    ],
    '9'
  );
  Test.assert_equals_param_func(
    G96422.sumFracts1,
    [
      [2, 7],
      [1, 3],
      [1, 12],
    ],
    '[59, 84]'
  );
});

// 2020/11/05 18:31
import { squareSum, squareSum_bp } from './8 kyu Square(n) Sum';
TimeMeasure.measure('squareSum', () => {
  Test.assert_equals(squareSum([1, 2]), 5);
  Test.assert_equals(squareSum([0, 3, 4, 5]), 50);

  Test.assert_equals(squareSum([-1, -2]), 5);
  Test.assert_equals(squareSum_bp([-1, -2]), 5);
});

// 2020/11/09 12:15
import { G964_1109 } from './6 kyu Playing with digits';
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(89, 1), 1);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(92, 1), -1);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(114, 3), 9);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(695, 2), 2);
});
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(G964_1109.digPow(46288, 3), 51);
});

// 2020/11/12 21:40
import { reversedWords } from './8 kyu Reversed Words';
TimeMeasure.measure('dig_pow', () => {
  Test.assert_equals(reversedWords('hello world!'), 'world! hello');
  Test.assert_equals(
    reversedWords("yoda doesn't speak like this"),
    "this like speak doesn't yoda"
  );
  Test.assert_equals(reversedWords('foobar'), 'foobar');
  Test.assert_equals(reversedWords('kata editor'), 'editor kata');
  Test.assert_equals(
    reversedWords('row row row your boat'),
    'boat your row row row'
  );
});

// 2020/11/16 23:35
import { litres } from './8 kyu Keep Hydrated';
Test.assert_equals(litres(2), 1);
Test.assert_equals(litres(1.4), 0);
Test.assert_equals(litres(12.3), 6);
Test.assert_equals(litres(0.82), 0);
Test.assert_equals(litres(11.8), 5);
Test.assert_equals(litres(1787), 893);
Test.assert_equals(litres(0), 0);

// 2020/11/20 22:44
import { setAlarm } from './8 kyu L1 Set Alarm';
Test.assert_equals(setAlarm(true, true), false);
Test.assert_equals(setAlarm(false, true), false);
Test.assert_equals(setAlarm(true, false), true);
Test.assert_equals(setAlarm(false, false), false);

// 2020/11/24 22:48
//start Playing with lists/arrays https://www.codewars.com/collections/playing-with-lists-slash-arrays
import { adjacentElementsProduct } from './7 kyu Maximum Product';
Test.assert_equals(adjacentElementsProduct([5, 8]), 40);
Test.assert_equals(adjacentElementsProduct([1, 2, 3]), 6);
Test.assert_equals(adjacentElementsProduct([1, 5, 10, 9]), 90);
Test.assert_equals(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
Test.assert_equals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
Test.assert_equals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
Test.assert_equals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
Test.assert_equals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
Test.assert_equals(
  adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]),
  -14
);
Test.assert_equals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
Test.assert_equals(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
Test.assert_equals(adjacentElementsProduct([1, 2, 3, 0]), 6);

// 2020/11/25 12:39
import { minSum } from './7 kyu Minimize Sum Of Array (Array Series #1)';
Test.assert_equals(minSum([5, 4, 2, 3]), 22);
Test.assert_equals(minSum([12, 6, 10, 26, 3, 24]), 342);
Test.assert_equals(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);

// 2020/11/26 21:16
import { maxProduct } from './7 kyu Product Of Maximums Of Array (Array Series #2)';

Test.assert_equals(maxProduct([4, 3, 5], 2), 20);

// 2020/11/27 18:02
import { arrayLeaders } from './7 kyu Array Leaders (Array Series #3)';

Test.assert_equals(arrayLeaders([1, 2, 3, 4, 0]), [4]);
Test.assert_equals(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
Test.assert_equals(arrayLeaders([-1, -29, -26, -2]), [-1]);
Test.assert_equals(arrayLeaders([-36, -12, -27]), [-36, -12]);
Test.assert_equals(arrayLeaders([5, -2, 2]), [5, 2]);
Test.assert_equals(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);

// 2020/11/30 22:40
import { maxGap } from './7 kyu Maximum Gap (Array Series #4)';
Test.assert_equals(maxGap([13, 10, 2, 9, 5]), 4);
Test.assert_equals(maxGap([13, 3, 5]), 8);
Test.assert_equals(maxGap([24, 299, 131, 14, 26, 25]), 168);
Test.assert_equals(maxGap([-3, -27, -4, -2]), 23);
Test.assert_equals(maxGap([-7, -42, -809, -14, -12]), 767);
Test.assert_equals(maxGap([12, -5, -7, 0, 290]), 278);
Test.assert_equals(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
Test.assert_equals(maxGap([130, 30, 50]), 80);
Test.assert_equals(maxGap([1, 1, 1]), 0);
Test.assert_equals(maxGap([-1, -1, -1]), 0);

// 2020/12/02  0:39
import { productArray } from './7 kyu Product Array (Array Series #5)';
Test.assert_equals(productArray([12, 20]), [20, 12]);
Test.assert_equals(productArray([12, 20]), [20, 12]);
Test.assert_equals(productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
Test.assert_equals(
  productArray([13, 10, 5, 2, 9]),
  [900, 1170, 2340, 5850, 1300]
);
Test.assert_equals(
  productArray([16, 17, 4, 3, 5, 2]),
  [2040, 1920, 8160, 10880, 6528, 16320]
);

// 2020/12/07 11:37
import { minimumSteps } from './7 kyu Minimum Steps (Array Series #6)';
Test.assert_equals(minimumSteps([4, 6, 3], 7), 1);
Test.assert_equals(minimumSteps([10, 9, 9, 8], 17), 1);
Test.assert_equals(minimumSteps([8, 9, 10, 4, 2], 23), 3);
Test.assert_equals(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
Test.assert_equals(minimumSteps([4, 6, 3], 2), 0);

// 2020/12/07 18:41
import { isInteresting } from './4 kyu Catching Car Mileage Numbers';
// Test.assert_equals( isInteresting(3, [1337, 256]),     0);
// Test.assert_equals( isInteresting(1336, [1337, 256]),  1);
// Test.assert_equals( isInteresting(1337, [1337, 256]),  2);
// Test.assert_equals( isInteresting(11208, [1337, 256]), 0);
// Test.assert_equals( isInteresting(11209, [1337, 256]), 1);
// Test.assert_equals( isInteresting(11211, [1337, 256]), 2);
// Test.assert_equals(isInteresting(123, []), 2);
// Test.assert_equals( isInteresting(67890, []), 2);
Test.assert_equals(isInteresting(98, []), 1);

// 2020/12/08 16:06
import { maxTriSum } from './7 kyu Maximum Triplet Sum (Array Series #7)';
Test.assert_equals(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
Test.assert_equals(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
Test.assert_equals(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
Test.assert_equals(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
Test.assert_equals(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
Test.assert_equals(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
Test.assert_equals(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
Test.assert_equals(maxTriSum([-2, 0, 2]), 0);
Test.assert_equals(maxTriSum([-2, -4, 0, -9, 2]), 0);
Test.assert_equals(maxTriSum([-5, -1, -9, 0, 2]), 1);

// 2020/12/08 16:58
import { G964_1208, G964_1208_BP } from './5 kyu Decimal to Factorial and Back';
// const G964_12081:G964_1208 = new G964_1208();
// Test.assert_equals(G964_1208.dec2FactString(463), "341010");
// Test.assert_equals(G964_1208.dec2FactString(2982), "4041000");
// Test.assert_equals(G964_1208.dec2FactString(36288000), "A0000000000");
Test.assert_equals(G964_1208.dec2FactString(3628800054), '76A0000021000');
// Test.assert_equals(G964_1208.factString2Dec("341010"), 463);
Test.assert_equals(G964_1208.factString2Dec('76A0000021000'), 3628800054);
Test.assert_equals(G964_1208_BP.dec2FactString(3628800054), '76A0000021000');
Test.assert_equals(G964_1208_BP.factString2Dec('76A0000021000'), 3628800054);

// 2020/12/09 23:45
import {
  nextBigger,
  nextBiggerBP,
} from './4 kyu Next bigger number with the same digits';
// Test.assert_equals(isMaxAtFirst(1234567890), false);
// Test.assert_equals(isMaxAtFirst(9876543210), true);
// Test.assert_equals(isMaxAtFirst(9999999999), true);

Test.assert_equals(nextBigger(12), 21);
Test.assert_equals(nextBigger(513), 531);
Test.assert_equals(nextBigger(2017), 2071);
Test.assert_equals(nextBigger(414), 441);
Test.assert_equals(nextBigger(144), 414);

Test.assert_equals(nextBigger(123456789), 123456798);
Test.assert_equals(nextBigger(1234567890), 1234567908);
Test.assert_equals(nextBigger(9876543210), -1);
Test.assert_equals(nextBigger(9999999999), -1);
Test.assert_equals(nextBigger(59884848459853), 59884848483559);

Test.assert_equals(nextBigger(545709101), 545709110);
Test.assert_equals(nextBigger(95322050), 95322500);

Test.assert_equals(nextBiggerBP(545709101), 545709110);
Test.assert_equals(nextBiggerBP(95322050), 95322500);

// 2020/12/13  0:05
import { rowWeights } from './7 kyu Row Weights(Array Series #8?)';
Test.assert_equals(rowWeights([80]), [80, 0]);
Test.assert_equals(rowWeights([100, 50]), [100, 50]);
Test.assert_equals(rowWeights([50, 60, 70, 80]), [120, 140]);
Test.assert_equals(rowWeights([13, 27, 49]), [62, 27]);
Test.assert_equals(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
Test.assert_equals(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
Test.assert_equals(rowWeights([0]), [0, 0]);
Test.assert_equals(rowWeights([100, 51, 50, 100]), [150, 151]);
Test.assert_equals(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
Test.assert_equals(rowWeights([0, 1, 0]), [0, 1]);

// 2020/12/13 17:30
import { determinant } from './4 kyu Matrix Determinant';
const m1 = [
  [1, 3],
  [2, 5],
];
const m2 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];
expect(determinant([[1]])).to.equal(1);
expect(determinant(m1)).to.equal(-1);
expect(determinant(m2)).to.equal(-20);

// 2020/12/15 16:43 Rustで提出しようと思う
import { solution as solution1225 } from './8 kyu Reversed Strings';
assert.equal(solution1225('world'), 'dlrow');
assert.equal(solution1225('hello'), 'olleh');
assert.equal(solution1225(''), '');
assert.equal(solution1225('h'), 'h');

// 2020/12/21  0:23
import { GeneticAlgorithm } from './5 kyu Binary Genetic Algorithms';
const geneticAlgorithm = new GeneticAlgorithm();
// geneticAlgorithm.run(fitness, 10, 0.6, 0.002, 100);

// 2020/12/21 12:15
import { G964_20201221 } from './unsolved 5 kyu Some Egyptian fractions';
// function testing(s:any, expected:any) {
//   Test.assert_equals(G964_20201221.decompose(s), expected)
// }
// testing("3/4", ["1/2", "1/4"]);
// testing("12/4", ["3"]);
// testing("4/5", ["1/2", "1/4", "1/20"]);
// testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);

// 2020/12/21 21:44
import { G964_20201222 } from './5 kyu Help your granny!';
var friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
var fTowns1 = [
  ['A1', 'X1'],
  ['A2', 'X2'],
  ['A3', 'X3'],
  ['A4', 'X4'],
];
var distTable1 = ['X1', 100.0, 'X2', 200.0, 'X3', 250.0, 'X4', 300.0];
Test.assert_equals(G964_20201222.tour(friends1, fTowns1, distTable1), 889);
friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
fTowns1 = [
  ['A1', 'X1'],
  ['A2', 'X2'],
  ['A3', 'X3'],
  ['A4', 'X4'],
  ['A5', 'X5'],
];
distTable1 = ['X1', 100, 'X2', 200, 'X3', 250, 'X4', 300, 'X5', 320];
Test.assert_equals(G964_20201222.tour(friends1, fTowns1, distTable1), 1020);

// 2020/12/24  0:57
import { accum } from './7 kyu Mumbling';
assert.strictEqual(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
assert.strictEqual(
  accum('NyffsGeyylB'),
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
);
assert.strictEqual(
  accum('MjtkuBovqrU'),
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
);
assert.strictEqual(
  accum('EvidjUnokmM'),
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
);
assert.strictEqual(
  accum('HbideVbxncC'),
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
);

// 2020/12/25  0:40
import { potatoes } from './7 kyu Drying Potatoes';
assert.strictEqual(potatoes(82, 127, 80), 114);
assert.strictEqual(potatoes(93, 129, 91), 100);
assert.strictEqual(potatoes(84, 65, 80), 52);
assert.strictEqual(potatoes(83, 105, 79), 85);

// 2020/12/27 23:52
import { G964_1227 } from './5 kyu Integers: Recreation One';
Test.assert_equals(G964_1227.listSquared(1, 250), [
  [1, 1],
  [42, 2500],
  [246, 84100],
]);
Test.assert_equals(G964_1227.listSquared(42, 250), [
  [42, 2500],
  [246, 84100],
]);
Test.assert_equals(G964_1227.listSquared(250, 500), [[287, 84100]]);
Test.assert_equals(G964_1227.listSquared(300, 600), []);

// 2020/12/30  0:05
import { G964_1229 } from './/5 kyu Fibo akin';
function dotest1(n: number, k: number, res: number) {
  assert.equal(G964_1229.lengthSupUK(n, k), res);
}
function dotest2(n: number, res: number) {
  assert.equal(G964_1229.comp(n), res);
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
