"use strict";
function hamming(n) {
    var bases = [2, 3, 5];
    var expos = [0, 0, 0];
    var hamms = [1];
    var _loop_1 = function (_) {
        var candi_next_hamms = expos.map(function (el, idx, array) {
            return bases[idx] * hamms[expos[idx]];
        });
        var next_hamm = candi_next_hamms.reduce(function (prev, cur, idx, array) {
            return Math.min(prev, cur);
        });
        // const next_hamm = expos.map((el, idx, array) => {
        //     return bases[idx] * hamms[expos[idx]];
        // }).reduce((prev, cur, idx, array) => {
        //     return Math.min(prev, cur);
        // });
        // console.log(next_hamm);
        hamms.push(next_hamm);
        candi_next_hamms.map(function (val, idx, array) {
            if (candi_next_hamms[idx] == next_hamm)
                return idx;
            else
                return -1;
        }).map(function (val, idx, array) {
            if (val !== -1)
                expos[val] += 1;
        });
    };
    for (var _ = 1; _ < n; _++) {
        _loop_1(_);
    }
    ;
    console.log('ret' + hamms.slice(-1)[0]);
    return hamms.slice(-1)[0];
}
var Test = require('./TestCodewar.js');
var test = new Test();
// test.expect(hamming(9) == 10, "hamming(9) should be 10");
test.expect(hamming(10) == 12, "hamming(10) should be 12");
test.expect(hamming(11) == 15, "hamming(11) should be 15");
test.expect(hamming(12) == 16, "hamming(12) should be 16");
test.expect(hamming(13) == 18, "hamming(13) should be 18");
test.expect(hamming(14) == 20, "hamming(14) should be 20");
test.expect(hamming(15) == 24, "hamming(15) should be 24");
test.expect(hamming(16) == 25, "hamming(16) should be 25");
test.expect(hamming(17) == 27, "hamming(17) should be 27");
test.expect(hamming(18) == 30, "hamming(18) should be 30");
test.expect(hamming(19) == 32, "hamming(19) should be 32");
test.expect(hamming(145) == 5120, "hamming(145) should be 5120");
//solutions
function hamming(n) {
    var seq = [1];
    var i2 = 0, i3 = 0, i5 = 0;
    for (var i = 1; i < n; i++) {
        var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
        seq.push(x);
        if (2 * seq[i2] <= x)
            i2++;
        if (3 * seq[i3] <= x)
            i3++;
        if (5 * seq[i5] <= x)
            i5++;
    }
    return seq[n - 1];
}
//# sourceMappingURL=4 kyu Hamming Numbers.js.map