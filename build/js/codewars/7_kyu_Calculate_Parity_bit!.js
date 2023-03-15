"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParity = void 0;
function checkParity(parity, bin) {
    var cntOf1 = count(bin, '1');
    var cntOf1IsEven = cntOf1 % 2 === 0;
    if (cntOf1IsEven) {
        return parity === 'even' ? 0 : 1;
    }
    else {
        return parity === 'even' ? 1 : 0;
    }
}
exports.checkParity = checkParity;
function count(bin, countChar) {
    return bin.split('')
        .filter(function (s) { return s === countChar; })
        .length;
}
//# sourceMappingURL=7 kyu Calculate Parity bit!.js.map