"use strict";
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
exports.linearSearch = void 0;
// * test.ts用
exports.linearSearch = function (input) {
    var e_1, _a, e_2, _b;
    var lines = input.trim().split('\n');
    var n = lines.shift();
    var S = lines.shift();
    var q = lines.shift();
    var T = lines.shift();
    if (S === undefined || T == undefined)
        throw new Error('undefined');
    var arrS = S.split(' ');
    var arrT = T.split(' ');
    var count = 0;
    try {
        for (var arrT_1 = __values(arrT), arrT_1_1 = arrT_1.next(); !arrT_1_1.done; arrT_1_1 = arrT_1.next()) {
            var t = arrT_1_1.value;
            try {
                for (var arrS_1 = (e_2 = void 0, __values(arrS)), arrS_1_1 = arrS_1.next(); !arrS_1_1.done; arrS_1_1 = arrS_1.next()) {
                    var s = arrS_1_1.value;
                    if (s === t) {
                        count++;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (arrS_1_1 && !arrS_1_1.done && (_b = arrS_1.return)) _b.call(arrS_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arrT_1_1 && !arrT_1_1.done && (_a = arrT_1.return)) _a.call(arrT_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return count.toString();
};
// * 提出用
// (function (input) {
//   const lines = input.trim().split('\n');
//   const n = lines.shift();
//   const S = lines.shift();
//   const q = lines.shift();
//   const T = lines.shift();
//   if (S === undefined || T === undefined) throw new Error('undefined');
//   const arrS = S.split(' ');
//   const arrT = T.split(' ');
//   let count = 0;
//   for (const t of arrT) {
//     for (const s of arrS) {
//       if (s === t) {
//         count++;
//         break;
//       }
//     }
//   }
//   console.log(count);
//   return count.toString();
// })(require('fs').readFileSync('/dev/stdin', 'utf8'));
//* BP
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var Arr = input.trim().split('\n');
// var a = Arr[1].split(' ').map(Number);
// var b = Arr[3].split(' ').map(Number);
// var cnt = 0;
// var len = a.length;
// for (var i = 0; i < b.length; i++) {
//   if (linearSearch(b[i])) cnt++;
// }
// console.log(cnt);
// function linearSearch(key) {
//   var i = 0;
//   a[len] = key;
//   while (a[i] != key) {
//     i++;
//     if (i >= len) return false;
//   }
//   return true;
// }
//# sourceMappingURL=ALDS1_4_A_線形探索.js.map