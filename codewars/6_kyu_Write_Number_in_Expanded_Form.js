"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.expandedForm = void 0;
function expandedForm(num) {
    for (var i = 0; i < num.toString().length; i++) { }
    var len = num.toString().length;
    return num
        .toString()
        .split('')
        .reduce(function (acc, curr, idx) {
        if (curr === '0') {
            return acc;
        }
        if (acc.length !== 0) {
            acc += ' + ';
        }
        return acc + curr + getStr0ByCnt(len - (idx + 1));
    }, '');
}
exports.expandedForm = expandedForm;
function getStr0ByCnt(cnt) {
    var zero = '0';
    return __spreadArrays(Array(cnt)).map(function () { return zero; }).join('');
}
