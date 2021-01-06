"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = void 0;
function getSum(a, b) {
    if (a === b)
        return a;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    var sum = 0;
    for (var n = min; n <= max; n++) {
        sum += n;
    }
    return sum;
}
exports.getSum = getSum;
//# sourceMappingURL=7 kyu Beginner Series #3 Sum of Numbers.js.map