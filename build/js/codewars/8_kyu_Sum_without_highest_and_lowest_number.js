"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
function sumArray(array) {
    if (!array)
        return 0;
    return array
        .sort(function (a, b) { return b - a; })
        .reduce(function (acc, curr, i, self) {
        if (i === 0 || i === self.length - 1)
            return acc;
        return acc + curr;
    }, 0);
}
exports.sumArray = sumArray;
//# sourceMappingURL=8 kyu Sum without highest and lowest number.js.map