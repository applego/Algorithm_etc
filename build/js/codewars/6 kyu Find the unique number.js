"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniq = void 0;
function findUniq(arr) {
    // Do the magic
    var arrSet = Array.from(new Set(arr));
    for (var i = 0; i < arrSet.length; i++) {
        var cnt = 0;
        var _loop_1 = function (j) {
            if (arr[j] === arrSet[i])
                cnt++;
            if (cnt > 1) {
                arr = arr.filter(function (v) { return v !== arr[j]; });
                return "break";
            }
        };
        for (var j = 0; j < arr.length; j++) {
            var state_1 = _loop_1(j);
            if (state_1 === "break")
                break;
        }
        if (cnt > 1)
            continue;
        else
            return arrSet[i];
    }
    return arr[0];
}
exports.findUniq = findUniq;
/**
 * 重複していない数を返す
 * 重複していたら削除
 *
 */
//# sourceMappingURL=6 kyu Find the unique number.js.map