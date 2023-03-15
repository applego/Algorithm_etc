"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProduct = exports.maxProduct1 = void 0;
function maxProduct1(numbers, size) {
    var max = 1;
    numbers.sort(function (a, b) { return b - a; });
    console.log(numbers);
    for (var i = 0; i < size; i++) {
        max *= numbers[i];
    }
    return max;
}
exports.maxProduct1 = maxProduct1;
function maxProduct(numbers, size) {
    return numbers
        .sort(function (a, b) { return b - a; })
        .slice(0, size)
        .reduce(function (acc, n) { return acc *= n; });
}
exports.maxProduct = maxProduct;
//# sourceMappingURL=7 kyu Product Of Maximums Of Array (Array Series #2).js.map