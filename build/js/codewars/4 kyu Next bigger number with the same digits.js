"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger = void 0;
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
    var strSlicedNum = n.toString().slice(-1 * startIdx);
    if (!isMax(strSlicedNum)) {
        var strResult = n.toString().slice(0, -1 * startIdx);
        // slicedNumの中の最大値を左端へ
        var arrSlicedNum = strSlicedNum.split('').map(function (v) { return parseInt(v); });
        // 最大値ではなく元の左端の次に大きい数
        // let maxNumInSlicedNum: number = Math.max(...arrSlicedNum);
        var leftestNum_1 = Number(strSlicedNum[0]);
        var nextBiggerNum_1 = Number(arrSlicedNum.filter(function (v) { return v > leftestNum_1; }).sort(function (a, b) { return a - b; }).toString()[0])
            || leftestNum_1;
        strResult += nextBiggerNum_1.toString();
        arrSlicedNum.splice(arrSlicedNum.findIndex(function (v) { return v === nextBiggerNum_1; }), 1);
        strResult += getMinStr(arrSlicedNum);
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
var getMinStr = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    return arr.join('');
};
//# sourceMappingURL=4 kyu Next bigger number with the same digits.js.map
