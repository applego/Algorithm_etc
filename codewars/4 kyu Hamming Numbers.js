function hamming(n) {
    const bases = [2, 3, 5];
    let expos = [0, 0, 0];
    let hamms = [1];
    for (let _ = 1; _ < n; _++) {
        const candi_next_hamms = expos.map((el, idx, array) => {
            return bases[idx] * hamms[expos[idx]];
        });
        const next_hamm = candi_next_hamms.reduce((prev, cur, idx, array) => {
            return Math.min(prev, cur);
        });
        // const next_hamm = expos.map((el, idx, array) => {
        //     return bases[idx] * hamms[expos[idx]];
        // }).reduce((prev, cur, idx, array) => {
        //     return Math.min(prev, cur);
        // });
        // console.log(next_hamm);
        hamms.push(next_hamm);
        candi_next_hamms.map((val, idx, array) => {
            if (candi_next_hamms[idx] == next_hamm)
                return idx;
            else
                return -1;
        }).map((val, idx, array) => {
            if (val !== -1)
                expos[val] += 1;
        });
    };
    console.log('ret' + hamms.slice(-1)[0]);
    return hamms.slice(-1)[0];
}

let Test = require('./TestCodewar.js');
let test = new Test();
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
