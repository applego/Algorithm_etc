"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_BP_g964 = exports.G964_1229 = void 0;
var G964_1229 = /** @class */ (function () {
    function G964_1229() {
    }
    /**
    - u[8]
      u[7] = 5 and u[6] = 4
      8 - 5 = 3 , 8 - 4 = 4
      u[3] = 2 and u[4] = 3
      2 + 3 = 5
    -
     */
    G964_1229.u = function (n) {
        return n;
    };
    // nまでの間でk以上の値の個数を返す
    G964_1229.lengthSupUK = function (n, k) {
        // your code
        return n;
    };
    // nまでのインデックスの中でuが前の値よりも小さくなった回数を返す
    G964_1229.comp = function (n) {
        // your code
        return n;
    };
    return G964_1229;
}());
exports.G964_1229 = G964_1229;
// 答えみます...
var G964_BP_g964 = /** @class */ (function () {
    function G964_BP_g964() {
    }
    G964_BP_g964.u1 = function (n) {
        var memu = [1, 1];
        var i = 2;
        while (i < n) {
            memu.push(memu[i - memu[i - 1]] + memu[i - memu[i - 2]]);
            i++;
        }
        return memu;
    };
    G964_BP_g964.lengthSupUK = function (n, k) {
        return G964_BP_g964.u1(n).filter(function (x) { return x >= k; }).length;
    };
    G964_BP_g964.comp = function (n) {
        var memu = G964_BP_g964.u1(n);
        var prev = 1, cnt = 0, i = 1;
        while (i < n) {
            var cur = memu[i];
            if (cur < prev)
                cnt++;
            prev = cur;
            i++;
        }
        return cnt;
    };
    return G964_BP_g964;
}());
exports.G964_BP_g964 = G964_BP_g964;
//# sourceMappingURL=5 kyu Fibo akin.js.map