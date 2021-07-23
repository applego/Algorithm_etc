"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = void 0;
function sumDigits(number) {
    return String(number).split('').reduce(function (pre, curr) {
        if (isNaN(Number(curr))) {
            return pre;
        }
        else {
            return pre + Number(curr);
        }
    }, 0);
}
exports.sumDigits = sumDigits;
//# sourceMappingURL=7 kyu Summing a numbers digits.js.map