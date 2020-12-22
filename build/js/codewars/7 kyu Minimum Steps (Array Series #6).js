"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumStepsBP = exports.minimumSteps = void 0;
function minimumSteps(nums, value) {
    var sum = 0;
    nums.sort(function (a, b) { return a - b; });
    if (nums[0] >= value)
        return 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum >= value) {
            return i;
        }
    }
    return -1;
}
exports.minimumSteps = minimumSteps;
function minimumStepsBP(nums, value) {
    var level = 0;
    var count = 0;
    nums = nums.sort(function (a, b) { return a - b; });
    while (level < value)
        level += nums[count++];
    return --count;
}
exports.minimumStepsBP = minimumStepsBP;
//# sourceMappingURL=7 kyu Minimum Steps (Array Series #6).js.map