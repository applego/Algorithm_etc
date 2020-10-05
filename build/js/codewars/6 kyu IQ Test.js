"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iqTest_not = exports.iqTest__ = exports.iqTest_ = exports.iqTest = void 0;
function iqTest(numbers) {
    var numbers2 = numbers.split(' ').map(function (n) { return parseInt(n); });
    // console.log(numbers2.findIndex(v => { v % 2 === 0; }));//!v=>{}があると見つからない（ヒットしない）なぜ？
    var cnt_even = numbers2
        .filter(function (n) { return n % 2 === 0; })
        .length;
    if (cnt_even === 1) {
        return numbers2.findIndex(function (val) { return val % 2 === 0; }) + 1;
    }
    else {
        return numbers2.findIndex(function (val) { return val % 2 !== 0; }) + 1;
    }
}
exports.iqTest = iqTest;
//天才　BP
function iqTest_(numbers) {
    var evenness = numbers.split(' ').map(function (x) { return Number(x) % 2; });
    return evenness.reduce(function (a, b) { return a + b; }) == 1 ? evenness.indexOf(1) + 1 : evenness.indexOf(0) + 1;
}
exports.iqTest_ = iqTest_;
//天才　BP2
function iqTest__(numbers) {
    var isEven = numbers.split(" ").map(function (v) { return parseInt(v) % 2 === 0; });
    var oddsCount = isEven.filter(function (v) { return v === true; }).length;
    var evensCount = isEven.filter(function (v) { return v === false; }).length;
    return isEven.indexOf(oddsCount < evensCount) + 1;
}
exports.iqTest__ = iqTest__;
function iqTest_not(numbers) {
    console.log(numbers);
    var evens = [];
    var odds = [];
    var is_even = function (n) {
        return n % 2 == 0 ? true : false;
    };
    //is_found == true &&
    var is_found = false;
    var is_ret_is_even = false;
    for (var str_n in numbers.split(' ')) {
        console.log('---------');
        console.log(str_n);
        console.log(evens);
        console.log(odds);
        var n = parseInt(str_n);
        if (is_found === true) {
            if (is_ret_is_even === true && evens.length > 0)
                return evens[0];
            if (is_ret_is_even === false && odds.length > 0)
                return odds[0];
        }
        if (is_even(n)) {
            if (is_found && is_ret_is_even) {
                return n;
            }
            if (evens.length > 0) {
                is_found = true;
                is_ret_is_even = false;
                if (odds.length > 0) {
                    return odds[0];
                }
            }
            evens.push(n);
        }
        else {
            if (is_found && !is_ret_is_even) {
                return n;
            }
            if (odds.length > 0) {
                is_found = true;
                is_ret_is_even = true;
                if (evens.length > 0) {
                    return evens[0];
                }
            }
            odds.push(n);
        }
    }
    return 0;
}
exports.iqTest_not = iqTest_not;
// enum AnimalType {Notdecided,Decided};
var IqTest = /** @class */ (function () {
    function IqTest(targetnum) {
        this.targetnum = targetnum;
        this._is_found = false;
        this._is_returnval_is_even = false;
        this.evens = [];
        this.odds = [];
    }
    IqTest.prototype.isEven = function (num) {
        return num % 2 == 0 ? true : false;
    };
    IqTest.prototype.push_even = function (num) {
        this.evens.push(num);
    };
    IqTest.prototype.push_odd = function (num) {
        this.odds.push(num);
    };
    Object.defineProperty(IqTest.prototype, "is_found", {
        get: function () {
            return this._is_found;
        },
        set: function (is_found) {
            this._is_found = is_found;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IqTest.prototype, "is_returnval_is_even", {
        get: function () {
            return this._is_returnval_is_even;
        },
        set: function (is_even) {
            this._is_returnval_is_even = is_even;
        },
        enumerable: false,
        configurable: true
    });
    IqTest.prototype.iqTest = function (numbers) {
        for (var strnum in numbers.split(' ')) {
            if (this.is_found) {
                if (this.is_returnval_is_even) {
                }
            }
            var num = parseInt(strnum);
            if (this.isEven(num)) {
                if (this.evens.length >= this.targetnum) {
                    this.is_found = true;
                    if (this.odds[this.targetnum - 1]) {
                        return this.odds[this.targetnum - 1];
                    }
                    else {
                        continue;
                    }
                }
                else
                    this.push_even(num);
            }
            else {
                if (this.odds.length >= this.targetnum) {
                    console.log(this.evens[this.targetnum - 1]);
                    return this.evens[this.targetnum - 1];
                }
                else
                    this.push_odd(num);
            }
        }
    };
    return IqTest;
}());
exports.default = IqTest;
//# sourceMappingURL=6 kyu IQ Test.js.map