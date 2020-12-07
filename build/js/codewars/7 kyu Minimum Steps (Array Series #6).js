"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumSteps = void 0;
function minimumSteps(nums, value) {
    var sum = 0;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum >= value) {
            return i;
        }
    }
    return -1;
}
exports.minimumSteps = minimumSteps;
//# sourceMappingURL=7 kyu Minimum Steps (Array Series #6).js.map