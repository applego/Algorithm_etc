"use strict";
exports.__esModule = true;
/**
消える魔球
V m/s
T s
S s
D m

T 秒後のボールの位置（ピッチャーからの距離）は V * T
S 秒後のボールの位置（ピッチャーからの距離）は V * S

 */
var fs = require("fs");
var _a = fs
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(' ')
    .map(Number), N = _a[0], X = _a[1];
var arr = fs
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(' ')
    .map(Number);
console.log(N);
console.log(X);
console.log(arr);
