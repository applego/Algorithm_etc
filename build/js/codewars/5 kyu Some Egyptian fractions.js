"use strict";
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
exports.G964_ = exports.fraction = exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.decompose = function (n) {
        console.log(n);
        var arr = n.split('/');
        // if (arr[0] === undefined) throw new Error('arr[0] is undefined');
        var tmpDenominator = Number.isNaN(Number(arr[1])) ? 1 : Number(arr[1]);
        var a = new fraction(Number(arr[0]), tmpDenominator);
        if (a.isNumeratorOne())
            return [];
        if (a.isInteger())
            return [a.toString()];
        var result = [];
        if (a.valueOf() > 1) {
            var seisuu = Math.floor(a.valueOf());
            result.push(seisuu.toString());
            a = a.subtract(new fraction(seisuu));
        }
        // ここから少数部分のはず
        for (var i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
            // const tmpA = new fraction(a.numerator, a.denominator);
            var tmpA = a.copy();
            // tmpA = tmpA.add(new fraction(1, 1));
            console.log(a.toString());
            var target = new fraction(1, i);
            if (tmpA.subtract(target).valueOf() > 0) {
                a = a.subtract(target);
                result.push(target.toString());
            }
            if (a.isNumeratorOne()) {
                result.push(a.toString());
                break;
            }
        }
        return result;
    };
    return G964;
}());
exports.G964 = G964;
//* 分数クラス
var fraction = /** @class */ (function () {
    function fraction(numerator, denominator) {
        if (numerator === void 0) { numerator = 0; }
        if (denominator === void 0) { denominator = 1; }
        this.numerator = numerator;
        this.denominator = denominator;
        fraction._reduce(this);
    }
    /** 約分 */
    fraction._reduce = function (o) {
        var m = fraction._integerizable(o.numerator, o.denominator);
        if (!m)
            throw new Error('m:return value of _integerizable was undefined');
        (o.numerator *= m), (o.denominator *= m); //　少数が渡されたら分子分母を整数化
        var g = fraction._gcm(o.numerator, o.denominator);
        (o.numerator /= g), (o.denominator /= g); // 最大公約数で除算
    };
    fraction._gcm = function (numerator, denominator) {
        for (var i = Math.min(numerator, denominator); i > 1; i--)
            if (numerator % i == 0 && denominator % i == 0)
                return i;
        return 1;
    };
    fraction._integerizable = function (numerator, denominator) {
        for (var m = 1; m < Number.MAX_SAFE_INTEGER; m++) {
            if ((m * numerator) % 1 == 0 && (m * denominator) % 1 == 0)
                return m;
        }
        throw new Error("overflow thile reducing (" + numerator + " , " + denominator + ")");
    };
    fraction.prototype.toString = function () {
        return (this.numerator + (this.denominator > 1 ? '/' + this.denominator : ''));
    };
    fraction.prototype.numerize = function () {
        return this.numerator / this.denominator;
    };
    fraction.prototype.valueOf = function () {
        return this.numerize();
    };
    fraction.prototype.isInteger = function () {
        return Number.isInteger(this.numerize());
    };
    fraction.prototype.isNumeratorOne = function () {
        return this.numerator === 1;
    };
    fraction.prototype.copy = function () {
        return new fraction(this.numerator, this.denominator);
    };
    /** 計算 */
    fraction.prototype.add = function (other) {
        return new fraction(this.numerator * other.denominator + other.numerator * this.denominator, other.denominator * this.denominator);
    };
    fraction.prototype.subtract = function (other) {
        return this.add(new fraction(other.numerator * -1, other.denominator));
    };
    fraction.prototype.multiply = function (other) {
        return new fraction(this.numerator * other.numerator, this.denominator * other.denominator);
    };
    fraction.prototype.divide = function (other) {
        return this.multiply(other.reciprocal());
    };
    fraction.prototype.reciprocal = function () {
        return new fraction(this.denominator, this.numerator);
    };
    return fraction;
}());
exports.fraction = fraction;
//* ステート的... 頓挫
var G964_ = /** @class */ (function () {
    function G964_() {
    }
    G964_.decompose = function (n) {
        // your code
        var decomposer = new decomposerFactory().create(n);
        return decomposer.decopose(n);
    };
    return G964_;
}());
exports.G964_ = G964_;
var decimalDecoposer = /** @class */ (function () {
    function decimalDecoposer(n) {
        this.n = n;
    }
    decimalDecoposer.prototype.decopose = function (n) {
        return new Array();
    };
    return decimalDecoposer;
}());
var integerDecoposer = /** @class */ (function () {
    function integerDecoposer(n, ans) {
        this.n = n;
        this.ans = ans;
    }
    integerDecoposer.prototype.decopose = function (n) {
        return new Array(this.ans.toString());
    };
    return integerDecoposer;
}());
var OtherDecoposer = /** @class */ (function () {
    function OtherDecoposer(n) {
        this.n = n;
    }
    OtherDecoposer.prototype.decopose = function (n) {
        return new Array();
    };
    return OtherDecoposer;
}());
var decomposerFactory = /** @class */ (function () {
    function decomposerFactory() {
    }
    decomposerFactory.prototype.create = function (n) {
        if (n.indexOf('.') > -1) {
            return new decimalDecoposer(n);
        }
        var tmpArr = n.split('/');
        var _a = __read(__spread(n.split('/').map(Number)), 2), numerator = _a[0], denominator = _a[1]; //[tmpArr[0], tmpArr[1]];
        if (Number.isInteger(numerator / denominator)) {
            return new integerDecoposer(n, numerator / denominator);
        }
        return new OtherDecoposer(n);
    };
    return decomposerFactory;
}());
//# sourceMappingURL=5 kyu Some Egyptian fractions.js.map