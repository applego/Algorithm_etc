"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
exports.answer = function (input) {
    //
    // let arr = input.split(/(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/);
    var arr = [];
    var left = 0;
    var upperSequence = 0;
    input.split('').forEach(function (v, i) {
        if (/^[A-Z]+$/g.test(v)) {
            //　Upper
            upperSequence++;
        }
        if (upperSequence === 2) {
            arr.push(input.slice(left, i + 1));
            left = i + 1;
            upperSequence = 0;
        }
    });
    arr.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b)
            return -1;
        else if (a > b)
            return 1;
        return 0;
    });
    // console.log(arr);
    return arr.join('');
};
// * 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// console.log(answer(input));
//# sourceMappingURL=第一回アルゴリズム実技検定F - DoubleCamelCase Sort.js.map