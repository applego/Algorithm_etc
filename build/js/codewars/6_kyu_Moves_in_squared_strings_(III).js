"use strict";
/**
 *
 s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

// *
abcd
efgh
ijkl
mnop

aeim
bfjn
cgko
dhlp

0からnまで列をとっていく
配列（\n)区切りの前から

// *
miea
njfb
...
0からnまで列をとっていく
配列（\n)区切りの後ろから

//*
abcd|aeim
efgh|bfjn

もとの文字列からの配列と１つ目の関数の結果からできる配列
組み合わせる

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)

diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)

rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
s = "abcd\nefgh\nijkl\nmnop" -->
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:

selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko
mnop|dhlp


 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.oper____ = exports.selfieAndDiag1____ = exports.diag1Sym____ = exports.rot90Clock____ = exports.oper = exports.selfieAndDiag1 = exports.diag1Sym = exports.rot90Clock = void 0;
/**
 *
 */
function rot90Clock(strng) {
    var arrRev = strng.split('\n').reverse();
    var arrResult = [];
    var _loop_1 = function (i) {
        var elnew = arrRev.map(function (el) {
            return el[i];
        }).join("");
        arrResult.push(elnew);
    };
    for (var i = 0; i < arrRev.length; i++) {
        _loop_1(i);
    }
    return arrResult.join('\n');
}
exports.rot90Clock = rot90Clock;
function diag1Sym(strng) {
    var arr = strng.split('\n');
    // const lenEle = arr[0].length;
    // const lenArr = arr.length;
    // if (lenEle !== lenArr) throw new Error("not match");
    var arrResult = [];
    var _loop_2 = function (i) {
        var elnew = arr.map(function (el) {
            return el[i];
        }).join("");
        arrResult.push(elnew);
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_2(i);
    }
    return arrResult.join('\n');
}
exports.diag1Sym = diag1Sym;
function selfieAndDiag1(strng) {
    var arrSelf = strng.split('\n');
    var arrDiag = diag1Sym(strng).split('\n');
    var arrResult = [];
    for (var i = 0; i < arrSelf.length; i++) {
        var elnew = arrSelf[i] + "|" + arrDiag[i];
        arrResult.push(elnew);
    }
    return arrResult.join('\n');
}
exports.selfieAndDiag1 = selfieAndDiag1;
function oper(fct, s) {
    return fct(s);
}
exports.oper = oper;
// for submit
function rot90Clock____(strng) {
    return strng.split('\n')
        .reverse()
        .map(function (v, i, arr) {
        return arr.map(function (el) { return el[i]; }).join('');
    }).join('\n');
}
exports.rot90Clock____ = rot90Clock____;
function diag1Sym____(strng) {
    return strng.split('\n')
        .map(function (v, i, arr) {
        return arr.map(function (el) { return el[i]; }).join('');
    }).join('\n');
}
exports.diag1Sym____ = diag1Sym____;
function selfieAndDiag1____(strng) {
    var arrSelf = strng.split('\n');
    var arrDiag = diag1Sym(strng).split('\n');
    var arrResult = [];
    for (var i = 0; i < arrSelf.length; i++) {
        var elnew = arrSelf[i] + "|" + arrDiag[i];
        arrResult.push(elnew);
    }
    return arrResult.join('\n');
}
exports.selfieAndDiag1____ = selfieAndDiag1____;
function oper____(fct, s) {
    return fct(s);
}
exports.oper____ = oper____;
//# sourceMappingURL=6 kyu Moves in squared strings (III).js.map