"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
    var e_1, _a;
    var max = -Infinity;
    nums = nums.sort(function (a, b) { return a - b; });
    try {
        for (var _b = __values(nums.slice(0, -1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            max = Math.max(max, nums[nums.indexOf(n) + 1] - n);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return max;
}
exports.maxGap_bp = maxGap_bp;
//# sourceMappingURL=7 kyu Maximum Gap (Array Series #4).js.map