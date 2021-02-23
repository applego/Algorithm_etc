"use strict";
// // 2021/02/23 10:00
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test20210223BP = exports.test20210223 = exports.test20210223_ = void 0;
// import * as fs from 'fs';
// const input = fs
//   .readFileSync('/dev/stdin', 'utf8')
//   .trim()
//   .split('\n')
//   .map(Number);
function test20210223_(input) {
    //
    var a = input.trim().split('\n').map(Number);
    var n = a.shift();
    // a.sort();
    var correct = Array.from(new Array(n)).map(function (v, i) { return i + 1; });
    // Intersection
    var x = new Set(a);
    var y = new Set(correct);
    var intersection = new Set(__spread(x).filter(function (e) { return y.has(e); }));
    if (intersection.size === 0)
        return 'Correct';
    // Difference
    var difference = new Set(__spread(x).filter(function (e) { return !y.has(e); }));
    console.log(difference);
    console.log(intersection);
    return intersection.values() + " " + difference.values;
}
exports.test20210223_ = test20210223_;
function test20210223(input) {
    //
    var a = input.trim().split('\n').map(Number);
    var n = a.shift();
    // a.sort();
    var correct = Array.from(new Array(n)).map(function (v, i) { return i + 1; });
    var b = a.filter(function (x, i, self) {
        return self.indexOf(x) === i && i !== self.lastIndexOf(x);
    });
    if (b.length === 0)
        return 'Correct';
    // const x = new Set(a);
    // const y = new Set(correct);
    // const difference = new Set([...x].filter((e) => !y.has(e)));
    // return `${b[0]} ${difference.values}`;
    var y = new Set(a);
    console.log(y);
    var c = correct.filter(function (v) { return !y.has(v); })[0];
    return b[0] + " " + c;
}
exports.test20210223 = test20210223;
function test20210223BP(input) {
    var lines = input.trim().split('\n').map(Number);
    var N = lines.shift();
    var backets = Array(N).fill(0);
    lines.forEach(function (l) {
        backets[l - 1]++;
    });
    var lac = backets.indexOf(0) + 1;
    var dup = backets.indexOf(2) + 1;
    return lac === 0 ? 'Correct' : dup + " " + lac;
}
exports.test20210223BP = test20210223BP;
// 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// let a = input.trim().split('\n').map(Number);
// const n = a.shift();
// const correct = Array.from(new Array(n)).map((v, i) => i + 1);
// const b = a.filter(function (x, i, self) {
//   return self.indexOf(x) === i && i !== self.lastIndexOf(x);
// });
// if (b.length === 0) {
//   console.log('Correct');
//   return;
// }
// const y = new Set(a);
// const c = correct.filter((v) => !y.has(v))[0];
// console.log(`${b[0]} ${c}`);
// 提出用　BP
var fs = __importStar(require("fs"));
var input = fs.readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n').map(Number);
var N = lines.shift();
var backets = Array(N).fill(0);
lines.forEach(function (l) {
    backets[l - 1]++;
});
var lac = backets.indexOf(0) + 1;
var dup = backets.indexOf(2) + 1;
console.log(lac === 0 ? 'Correct' : dup + " " + lac);
// return lac === 0 ? 'Correct' : `${dup} ${lac}`;
//# sourceMappingURL=第一回アルゴリズム実技検定D - 重複検査.js.map