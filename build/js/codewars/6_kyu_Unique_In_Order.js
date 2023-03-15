"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    array = __spreadArrays(iterable);
    if (array.length === 0)
        return [];
    ans = [array[0]];
    //console.log(ans);
    for (var i_1 = 1; i_1 < array.length; i_1++) {
        if (array[i_1 - 1] === array[i_1])
            continue;
        ans.push(array[i_1]);
    }
    return ans;
};
//# sourceMappingURL=6 kyu Unique In Order.js.map