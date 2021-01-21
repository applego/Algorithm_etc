"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
exports.digitalRoot = function (n) {
    while (n.toString().length > 1) {
        n = sumOfDigits(n);
    }
    return n;
};
var sumOfDigits = function (n) {
    return n.toString().split('').reduce(function (sum, digit) { return sum + Number(digit); }, 0);
};
//# sourceMappingURL=6 kyu Sum of Digits  Digital Root.js.map