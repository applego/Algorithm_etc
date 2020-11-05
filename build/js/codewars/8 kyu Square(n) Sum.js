"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum_bp = exports.squareSum = void 0;
function squareSum(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers.reduce(function (previousValue, currentValue, currendIndex) {
        console.log(previousValue, currentValue, currendIndex);
        return currendIndex === 1 ? Math.pow(previousValue, 2) + Math.pow(currentValue, 2) : previousValue + Math.pow(currentValue, 2);
    });
}
exports.squareSum = squareSum;
// BP
function squareSum_bp(numbers) {
    return numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue * currentValue;
    }, 0);
}
exports.squareSum_bp = squareSum_bp;
//# sourceMappingURL=8 kyu Square(n) Sum.js.map