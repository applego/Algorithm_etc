"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
exports.productArray = void 0;
function productArray(nums) {
    // * why not correct
    // return nums.map((v, i, array) => {
    //   return array
    //     .filter((v, i) => { i !== array.indexOf(v); })
    //     .reduce((a, c) => a * c);
    // });
    var e_1, _a;
    // * from BP
    return nums.map(function (e, i) {
        return __spread(nums).filter(function (e, i2) { return i2 != i; })
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
    try {
        for (var nums_1 = __values(nums), nums_1_1 = nums_1.next(); !nums_1_1.done; nums_1_1 = nums_1.next()) {
            var num = nums_1_1.value;
            _loop_1(num);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nums_1_1 && !nums_1_1.done && (_a = nums_1.return)) _a.call(nums_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.productArray = productArray;
//# sourceMappingURL=7 kyu Product Array (Array Series #5).js.map