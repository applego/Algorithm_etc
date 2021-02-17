"use strict";
// const patterns = ['12brackets12add', '23brackets23add', 'nobrackets12add', 'nobrackets12mul'] as const;
// type Patterns = typeof patterns[number];
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressionsMatter = void 0;
var addInBracketsMul = /** @class */ (function () {
    function addInBracketsMul() {
        this.calc = function (a, b, c) {
            return (a + b) * c;
        };
    }
    return addInBracketsMul;
}());
var addAll = /** @class */ (function () {
    function addAll() {
        this.calc = function (a, b, c) {
            return a + b + c;
        };
    }
    return addAll;
}());
var addMul = /** @class */ (function () {
    function addMul() {
        this.calc = function (a, b, c) {
            return a + b * c;
        };
    }
    return addMul;
}());
var mulAddInBrackets = /** @class */ (function () {
    function mulAddInBrackets() {
        this.calc = function (a, b, c) {
            return a * (b + c);
        };
    }
    return mulAddInBrackets;
}());
var mulAll = /** @class */ (function () {
    function mulAll() {
        this.calc = function (a, b, c) {
            return a * b * c;
        };
    }
    return mulAll;
}());
var Calculater = /** @class */ (function () {
    function Calculater(state) {
        var _this = this;
        this.setState = function (state) {
            _this.state = state;
        };
        this.calc = function (a, b, c) {
            return _this.state.calc(a, b, c);
        };
        this.state = state;
    }
    return Calculater;
}());
// const states = [addInBracketsMul, addAll, addMul, mulAddInBrackets] as const;
// type states = typeof states[number];
var testAllState = /** @class */ (function () {
    function testAllState(a, b, c) {
        var _this = this;
        this.a = a;
        this.b = b;
        this.c = c;
        this.getMax = function () {
            var max = Number.MIN_SAFE_INTEGER;
            var calculater = new Calculater(new addInBracketsMul());
            var val = calculater.calc(_this.a, _this.b, _this.c);
            if (val > max)
                max = val;
            calculater.setState(new addAll());
            val = calculater.calc(_this.a, _this.b, _this.c);
            if (val > max)
                max = val;
            calculater.setState(new addMul());
            val = calculater.calc(_this.a, _this.b, _this.c);
            if (val > max)
                max = val;
            calculater.setState(new mulAddInBrackets());
            val = calculater.calc(_this.a, _this.b, _this.c);
            if (val > max)
                max = val;
            calculater.setState(new mulAll());
            val = calculater.calc(_this.a, _this.b, _this.c);
            if (val > max)
                max = val;
            return max;
        };
    }
    return testAllState;
}());
function expressionsMatter(a, b, c) {
    return new testAllState(a, b, c).getMax();
}
exports.expressionsMatter = expressionsMatter;
//# sourceMappingURL=8 kyu Expressions Matter.js.map