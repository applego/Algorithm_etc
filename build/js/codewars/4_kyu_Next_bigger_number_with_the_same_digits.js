"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBiggerBP = exports.nextBigger = void 0;
/**
  // 1. 並べ替えて元の数の次に大きい数を返す
  // 2. 元の数が最大値の場合-1を返す
 */
function nextBigger(n) {
    if (isMax(n.toString()))
        return -1;
    return nextBigger_(n, 2);
}
exports.nextBigger = nextBigger;
var nextBigger_ = function (n, startIdx) {
    if (startIdx === void 0) { startIdx = 2; }
    // const slicedNum: number = Number(n.toString().slice(-1 * startIdx));
    var strEnd = n.toString().slice(-1 * startIdx);
    if (!isMax(strEnd)) {
        var strResult = n.toString().slice(0, -1 * startIdx);
        // slicedNumの中の最大値を左端へ
        var arrEnd = strEnd.split('').map(function (v) { return parseInt(v); });
        // 最大値ではなく元の左端の次に大きい数
        // let maxNumInSlicedNum: number = Math.max(...arrEnd);
        var leftestNumOfstrEnd_1 = Number(strEnd[0]);
        var nextBiggerNum_1 = Number(arrEnd.filter(function (v) { return v > leftestNumOfstrEnd_1; }).sort(function (a, b) { return a - b; }).toString()[0])
            || leftestNumOfstrEnd_1;
        strResult += nextBiggerNum_1.toString();
        arrEnd.splice(arrEnd.findIndex(function (v) { return v === nextBiggerNum_1; }), 1);
        strResult += getMinAsStr(arrEnd);
        return Number(strResult);
    }
    else {
        return nextBigger_(n, ++startIdx);
    }
    //? 最大値かどうか
    //* true
    //! -1を返す　end
    //? 下2桁で作れる最大値かどうか
    //* false
    //! 下2桁を入れ替える end(//! 下2桁の一番左を下2桁の中の最大の数にし、下1桁を最小値にする end)
    //* true
    //? 下3桁で作れる最大値かどうか
    //* false
    //! 下3桁の一番左を下3桁の中の最大の数にし、下2桁を最小値にする end
    //* true
    //? 下N桁で作れる最大値かどうか
    // * false
    //! 下N桁の一番左を下N桁の中の最大の数にし、下N-1桁を最小値にする　end
    // * true
    // 下N+1桁に続く
};
var isMax = function (strN) {
    // return n.toString().split('').map(v=>parseInt(v)).every((val, i, arr) => {
    return strN.split('').map(function (v) { return parseInt(v); }).every(function (val, i, arr) {
        if (i < 1)
            return true;
        return val <= arr[i - 1];
    });
};
var getMinAsStr = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    return arr.join('');
};
/**
 * BP
 */
exports.nextBiggerBP = function (n) {
    var max = maxify(n);
    while (++n <= max) {
        if (maxify(n) === max) {
            return n;
        }
    }
    return -1;
};
var maxify = function (n) {
    // +[...`${n}`]
    return +n.toString().split('')
        .map(function (n) { return +n; })
        .sort(function (a, b) { return b - a; })
        .join('')
        .replace(/^(0+)([1-9])/, '$2$1');
};
//# sourceMappingURL=4 kyu Next bigger number with the same digits.js.map