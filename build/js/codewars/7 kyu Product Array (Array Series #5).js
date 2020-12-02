"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = void 0;
function productArray(nums) {
    return nums.map(function (v, i, array) {
        return array
            .filter(function (v, i) { i !== array.indexOf(v); })
            .reduce(function (a, c) { return a * c; });
    });
    var result = [];
    var _loop_1 = function (num) {
        // let el: number = nums.splice(nums.indexOf(num), 1, 1)
        //   .reduce((acc, val) => acc * val);
        // result.push(el);
        // let nums2: number[] = nums.splice(nums.indexOf(num), 1, 1);
        // let el2: number = nums2.reduce((acc, val) => acc * val);
        // result.push(el2);
        // let el: number = nums.filter((val, idx) => {
        //   idx !== nums.indexOf(num);
        // }).reduce((acc, val) => {
        //   return acc * val;
        // });
        // result.push(el);
        // console.log(num);
        var el = nums
            .filter(function (val, idx) { return idx !== nums.indexOf(num); })
            .reduce(function (a, c) { return a * c; });
        result.push(el);
    };
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        _loop_1(num);
    }
    return result;
}
exports.productArray = productArray;
//# sourceMappingURL=7 kyu Product Array (Array Series #5).js.map