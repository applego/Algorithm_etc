"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumStrings = void 0;
function sumStrings(a, b) {
    // const nSum = Number(a) + Number(b);
    var nSum = BigInt(Number(a)) + BigInt(Number(b));
    return nSum.toString();
}
exports.sumStrings = sumStrings;
// JSしかないため.jsに移動
//# sourceMappingURL=4 kyu Sum Strings as Numbers.js.map