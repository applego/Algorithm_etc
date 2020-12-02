"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxGap_bp = exports.maxGap = void 0;
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
// BP
function maxGap_bp(nums) {
    var max = -Infinity;
    nums = nums.sort(function (a, b) { return a - b; });
    for (var _i = 0, _a = nums.slice(0, -1); _i < _a.length; _i++) {
        var n = _a[_i];
        max = Math.max(max, nums[nums.indexOf(n) + 1] - n);
    }
    return max;
}
exports.maxGap_bp = maxGap_bp;
//# sourceMappingURL=7 kyu Maximum Gap (Array Series #4).js.map