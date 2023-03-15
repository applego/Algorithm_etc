"use strict";
/**
Fibonacci numbers:
F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Padovan sequence (or Padovan numbers):
  a(n) = a(n-2) + a(n-3) with a(0) = 1, a(1) = a(2) = 0.

Jacobsthal
a(n) = nearest integer to 2^n/3.

Pell numbers:
a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2).

Tribonacci numbers:
a(n) = a(n-1) + a(n-2) + a(n-3)
for n >= 3 with a(0) = a(1) = 0 and a(2) = 1.

Tetranacci numbers:
a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) for n >= 4
with a(0) = a(1) = a(2) = 0 and a(3) = 1.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixbonacci = void 0;
var dicKeyAndCache = {
    fib: {},
    pad: {},
    jac: {},
    pel: {},
    tri: {},
    tet: {},
};
var fibonacci = function (n) {
    if (dicKeyAndCache['fib'] && dicKeyAndCache['fib'][n])
        return dicKeyAndCache['fib'][n];
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var result = fibonacci(n - 2) + fibonacci(n - 1);
    if (dicKeyAndCache['fib'])
        dicKeyAndCache['fib'][n] = result;
    return result;
};
var padovan = function (n) {
    if (dicKeyAndCache['pad'] && dicKeyAndCache['pad'][n])
        return dicKeyAndCache['pad'][n];
    if (n === 0)
        return 1;
    if (n === 1 || n === 2)
        return 0;
    var result = padovan(n - 3) + padovan(n - 2);
    if (dicKeyAndCache['pad'])
        dicKeyAndCache['pad'][n] = result;
    return result;
};
var jacobstahl = function (n) {
    var a = Math.pow(2, n) / 3;
    return Math.round(a);
};
var pell = function (n) {
    if (dicKeyAndCache['pel'] && dicKeyAndCache['pel'][n])
        return dicKeyAndCache['pel'][n];
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var result = pell(n - 2) + 2 * pell(n - 1);
    if (dicKeyAndCache['pel'])
        dicKeyAndCache['pel'][n] = result;
    return result;
};
var tribonacci = function (n) {
    if (dicKeyAndCache['tri'] && dicKeyAndCache['tri'][n])
        return dicKeyAndCache['tri'][n];
    if (n === 0 || n === 1)
        return 0;
    if (n === 2)
        return 1;
    var result = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    if (dicKeyAndCache['tri'])
        dicKeyAndCache['tri'][n] = result;
    return result;
};
var tetranacci = function (n) {
    if (dicKeyAndCache['tet'] && dicKeyAndCache['tet'][n])
        return dicKeyAndCache['tet'][n];
    if (n === 0 || n === 1 || n === 2)
        return 0;
    if (n === 3)
        return 1;
    var result = tetranacci(n - 1) +
        tetranacci(n - 2) +
        tetranacci(n - 3) +
        tetranacci(n - 4);
    if (dicKeyAndCache['tet'])
        dicKeyAndCache['tet'][n] = result;
    return result;
};
var DicKeyAndFunc = {
    fib: fibonacci,
    pad: padovan,
    jac: jacobstahl,
    pel: pell,
    tri: tribonacci,
    tet: tetranacci,
};
function mixbonacci(pattern, length) {
    console.log(pattern);
    console.log(length);
    if (pattern.length === 0 || length === 0)
        return [];
    var DicKeyAndCnt = {
        fib: 0,
        pad: 0,
        jac: 0,
        pel: 0,
        tri: 0,
        tet: 0,
    };
    var result = [];
    for (var i = 0; i < length; i++) {
        var p = pattern[i % pattern.length];
        var e = DicKeyAndFunc[p](DicKeyAndCnt[p]++);
        result.push(e);
    }
    //! これのせいでエラーになる console.log(result);
    return result;
}
exports.mixbonacci = mixbonacci;
//# sourceMappingURL=5 kyu Mixbonacci.js.map