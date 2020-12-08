"use strict";
/**
 タスク
2つの関数が必要です。最初の関数は10進数を受け取り、2乗表現の文字列を返します。

2番目の関数は、2乗表現の文字列を受け取り、10進表現を生成します。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_1208 = void 0;
var factorialize_recurse = function (k) {
    if (k <= 1) {
        return 1;
    }
    return k * factorialize_recurse(k - 1);
};
var FactorialList = Array.from(new Array(37))
    .map(function (v, i) {
    return { base: i, value: factorialize_recurse(i) };
});
FactorialList.reverse();
var Alphabets = Array.apply(null, new Array(26)).map(function (v, i) {
    return String.fromCharCode('A'.charCodeAt(0) + i);
});
var G964_1208 = /** @class */ (function () {
    function G964_1208() {
    }
    // factorial_list: Num_and_num[];
    // constructor() {
    //   this.factorial_list = Array.from(new Array(11)).map((v, i): Num_and_num => {
    //     return { base: i, value: this.factorialize_recurse(i) };
    //   });
    //   console.log(this.factorial_list);
    // }
    // private factorialize_recurse = (k: number): number => {
    //   if (k <= 1) {
    //     return 1;
    //   }
    //   return k * this.factorialize_recurse(k - 1);
    // }
    G964_1208.NumToAlphabetic = function (num) {
        if (num <= 9)
            return num.toString();
        return Alphabets[num - 10];
    };
    G964_1208.AlphabeticToNum = function (str) {
        if (G964_1208.isNaNModified(str))
            return parseInt(str);
        return Alphabets.findIndex(function (alpha) { return alpha === str; }) + 10;
    };
    G964_1208.isNaNModified = function (value) {
        // let numericRepr = parseFloat(inputStr);
        // return isNaN(numericRepr) || numericRepr.toString().length != inputStr.length;
        return ((value != null) && !isNaN(Number(value.toString())));
    };
    G964_1208.dec2FactString = function (nb) {
        var result = "";
        var isStart = false;
        var isAlphabetic = true;
        Object.values(FactorialList).forEach(function (Fac) {
            var n = 0;
            while (nb > 0 && nb >= Fac.value) {
                isStart = true;
                if (Fac.base <= 9)
                    isAlphabetic = false;
                nb -= Fac.value;
                n++;
            }
            if (isStart) {
                result += isAlphabetic ? G964_1208.NumToAlphabetic(n) : n.toString();
            }
        });
        return result;
    };
    G964_1208.factString2Dec = function (str) {
        var result = 0;
        str.split('').reverse().forEach(function (val, i) {
            // const n: number = parseInt(val);
            var n = G964_1208.isNaNModified(val) ? parseInt(val) : G964_1208.AlphabeticToNum(val);
            var idxFac = FactorialList.findIndex(function (Fac) { return Fac.base === i; });
            result += FactorialList[idxFac].value * n;
        });
        return result;
    };
    return G964_1208;
}());
exports.G964_1208 = G964_1208;
//# sourceMappingURL=5 kyu Decimal to Factorial and Back.js.map