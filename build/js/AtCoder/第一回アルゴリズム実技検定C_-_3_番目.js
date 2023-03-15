"use strict";
// import * as fs from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
exports.thirdBiggerNumber = void 0;
// const input = fs
//   .readFileSync('/dev/stdin', 'utf8')
//   .trim()
//   .split(' ')
//   .map(Number);
// input.sort((a, b) => b - a);
// console.log(input[2]);
// input.forEach(v => {
// });
// テスト用関数
exports.thirdBiggerNumber = function (input) {
    var arrNumber = input.split(' ').map(Number);
    arrNumber.sort(function (a, b) { return b - a; });
    return arrNumber[2];
};
//# sourceMappingURL=第一回アルゴリズム実技検定C - 3 番目.js.map