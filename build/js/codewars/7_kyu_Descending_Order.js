"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function descendingOrder(n) {
    //...
    strArray = __spreadArrays(String(n));
    intArray = [];
    for (var i_1 = 0; i_1 < strArray.length; i_1++) {
        intArray.push(parseInt(strArray[i_1]));
    }
    intArray.sort(function (a, b) {
        return b - a;
    });
    ans = '';
    for (var i_2 = 0; i_2 < intArray.length; i_2++) {
        ans += String(intArray[i_2]);
    }
    return parseInt(ans);
}
//# sourceMappingURL=7 kyu Descending Order.js.map