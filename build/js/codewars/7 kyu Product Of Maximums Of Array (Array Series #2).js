"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProduct = void 0;
function maxProduct(numbers, size) {
    var max = 1;
    numbers.sort(function (a, b) { return b - a; });
    console.log(numbers);
    for (var i = 0; i < size; i++) {
        max *= numbers[i];
    }
    return max;
}
exports.maxProduct = maxProduct;
//# sourceMappingURL=7 kyu Product Of Maximums Of Array (Array Series #2).js.map