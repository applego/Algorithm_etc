"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxTriSum = void 0;
function maxTriSum(nums, sumcount) {
    if (sumcount === void 0) { sumcount = 3; }
    var withoutDuplication = Array.from(new Set(nums));
    return withoutDuplication
        .sort(function (a, b) { return b - a; })
        .slice(0, sumcount)
        .reduce(function (acc, val) { return acc + val; });
}
exports.maxTriSum = maxTriSum;
//# sourceMappingURL=7 kyu Maximum Triplet Sum (Array Series #7).js.map