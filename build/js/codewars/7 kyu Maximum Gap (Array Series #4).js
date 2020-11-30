"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxGap = void 0;
function maxGap(nums) {
    nums.sort(function (a, b) { return b - a; });
    var maxGap = Number.MIN_SAFE_INTEGER;
    for (var n = 1; n < nums.length; n++) {
        var currentDiff = nums[n - 1] - nums[n];
        if (currentDiff > maxGap)
            maxGap = currentDiff;
    }
    return maxGap;
    // return nums.reduce((previousValue, currentValue, currendIndex,array) => {
    //   let currentDiff = currentValue - array[currendIndex - 1];
    //   return Math.max(currentDiff, previousValue);
    // },Number.MIN_SAFE_INTEGER)
}
exports.maxGap = maxGap;
//# sourceMappingURL=7 kyu Maximum Gap (Array Series #4).js.map