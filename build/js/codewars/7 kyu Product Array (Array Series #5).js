"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = void 0;
function productArray(nums) {
    // * why not correct
    // return nums.map((v, i, array) => {
    //   return array
    //     .filter((v, i) => { i !== array.indexOf(v); })
    //     .reduce((a, c) => a * c);
    // });
    // * from BP
    return nums.map(function (e, i) {
        return __spreadArrays(nums).filter(function (e, i2) { return i2 != i; })
            .reduce(function (a, c) { return a * c; }, 1);
    });
    var result = [];
    var _loop_1 = function (num) {
        // * try1
        // let el: number = nums.splice(nums.indexOf(num), 1, 1)
        //   .reduce((acc, val) => acc * val);
        // result.push(el);
        // let nums2: number[] = nums.splice(nums.indexOf(num), 1, 1);
        // let el2: number = nums2.reduce((acc, val) => acc * val);
        // result.push(el2);
        // * try2
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