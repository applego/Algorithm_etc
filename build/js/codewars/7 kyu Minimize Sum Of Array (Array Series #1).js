"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minSum = void 0;
/**
 * 掛け算の和の最小値を返す
 * ソート
 * 大きい数と小さい数をかける
 */
function minSum(arr) {
    arr.sort(function (a, b) { return a - b; });
    //* 一応テストデータはクリアしたけど、、、
    // return arr.reduce((a: number, c: number, idx: number,arr: number[]) => {
    //   if (idx >= arr.length / 2)
    //     return a;
    //   return a + (c * arr[arr.length - idx - 1]);
    // },0)
    var minSum = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        minSum += arr[i] * arr[arr.length - i - 1];
    }
    return minSum;
}
exports.minSum = minSum;
//# sourceMappingURL=7 kyu Minimize Sum Of Array (Array Series #1).js.map
