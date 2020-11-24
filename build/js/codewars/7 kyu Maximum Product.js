"use strict";
/**
 * Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjacentElementsProduct = void 0;
function adjacentElementsProduct(arr) {
    var maximumProduct = Number.MIN_SAFE_INTEGER;
    for (var i = 1; i < arr.length; i++) {
        var n = arr[i - 1] * arr[i];
        // console.log(n);
        maximumProduct = Math.max(maximumProduct, n);
    }
    return maximumProduct;
}
exports.adjacentElementsProduct = adjacentElementsProduct;
//# sourceMappingURL=7 kyu Maximum Product.js.map