"use strict";
// type lowercaseCounter = {
//   counters: { alpha: string, cnt: number; }[];
// }
// type lowercaseCounter = {
//   cnts: Dictionary[];
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.G964_2 = exports.G964_BP = exports.G964 = void 0;
// type comparison = '1' | '2' | '=';
var enmComparison;
(function (enmComparison) {
    enmComparison[enmComparison["one"] = 1] = "one";
    enmComparison[enmComparison["two"] = 2] = "two";
    enmComparison[enmComparison["equal"] = 3] = "equal"; //'='
})(enmComparison || (enmComparison = {}));
var G964 = /** @class */ (function () {
    function G964(name, str) {
        var _this = this;
        this.name = name;
        this.str = str;
        this.count = function () {
            _this.str.split('').forEach(function (c) {
                if (G964.Alphabets.includes(c)) {
                    _this.counter[c] += 1;
                }
            });
        };
        this.counter = G964.initializeCounter();
    }
    G964.range = function (first, last) {
        var firstc = first.charCodeAt(0);
        var lastc = last.charCodeAt(0);
        var result = [];
        for (var i = firstc; i <= lastc; i++) {
            result.push(String.fromCodePoint(i));
        }
        return result;
    };
    // private readonly CharCodeOfa = 'a'.charCodeAt(0);
    G964.Alphabets = G964.range('a', 'z');
    G964.initializeCounter = function () {
        var counter = {};
        G964.Alphabets.forEach(function (v) {
            // const dic: lowercaseCounter = {};
            // dic[v] = 0;
            counter[v] = 0;
        });
        return counter;
    };
    G964.merge = function (counters1, counters2) {
        var mergedcounters = [];
        G964.Alphabets.forEach(function (alpha) {
            var cnts1 = counters1.counter[alpha];
            var cnts2 = counters2.counter[alpha];
            var mergecounter = { alpha: alpha, biggerCnt: 0, comparison: enmComparison.equal };
            if (cnts1 > cnts2) {
                mergecounter.biggerCnt = cnts1;
                mergecounter.comparison = enmComparison.one;
            }
            else if (cnts1 === cnts2) {
                mergecounter.biggerCnt = cnts1;
                mergecounter.comparison = enmComparison.equal;
            }
            else {
                mergecounter.biggerCnt = cnts2;
                mergecounter.comparison = enmComparison.two;
            }
            mergedcounters.push(mergecounter);
        });
        return mergedcounters;
    };
    G964.sort = function (mergedCounter) {
        mergedCounter.sort(function (s1, s2) {
            if (s1.biggerCnt < s2.biggerCnt)
                return 1;
            else if (s1.biggerCnt > s2.biggerCnt)
                return -1;
            if (s1.comparison < s2.comparison)
                return -1;
            else if (s1.comparison > s2.comparison)
                return 1;
            if (s1.alpha > s2.alpha)
                return 1;
            else if (s1.alpha < s2.alpha)
                return -1;
            return 0;
        });
        return mergedCounter;
    };
    G964.mix = function (s1, s2) {
        var counterS1 = new G964('s1', s1);
        counterS1.count();
        var counterS2 = new G964('s2', s2);
        counterS2.count();
        var mergedCounter = G964.merge(counterS1, counterS2);
        var sortedMergedCounter = G964.sort(mergedCounter);
        var result = sortedMergedCounter
            .filter(function (smc) { return smc.biggerCnt > 1; })
            .map(function (smc) {
            var comparison = smc.comparison === enmComparison.equal ?
                '=' : smc.comparison.toString();
            var alpha = __spread(Array(smc.biggerCnt)).map(function (_) { return smc.alpha; }).join('');
            return comparison + ":" + alpha;
        }).join('/');
        return result;
    };
    return G964;
}());
exports.G964 = G964;
var G964_BP = /** @class */ (function () {
    function G964_BP() {
    }
    G964_BP.getOccurences = function (s, sourceName) {
        return s.split('') // split in single chars
            .filter(function (c) { return /[a-z]/.test(c); }) // is char lowercase letter?
            .reduce(function (acc, curr) {
            //! if(acc[curr] == null)
            //!   acc[curr] = {source: sourceName, occ: 1};
            //! else
            //!   acc[curr].occ++;
            return acc;
        }, {});
    };
    G964_BP.merge = function (s1, s2) {
        for (var propname in s2) { // Add all elements from s2 to s1 if they are bigger or change source to '=' if they are equal
            if (s1[propname] == null || s1[propname].occ < s2[propname].occ)
                s1[propname] = s2[propname];
            else if (s1[propname].occ == s2[propname].occ)
                s1[propname].source = '=';
        }
        return Object.keys(s1)
            .map(function (letter) { return (__assign({ letter: letter }, s1[letter])); }) // object key/value pair to array of objects with key as value
            .filter(function (o) { return o.occ > 1; }) // filter out everything that is <= 1
            .map(function (o) { return o.source + ":" + o.letter.repeat(o.occ); }) // To the final string form
            .sort(function (a, b) {
            if (a.length == b.length) {
                if (a < b)
                    return -1;
                if (a > b)
                    return 1;
                return 0;
            }
            else {
                return b.length - a.length;
            }
        }).join('/'); // make one string, joined by '/'
    };
    G964_BP.mix = function (s1, s2) {
        return G964_BP.merge(G964_BP.getOccurences(s1, '1'), G964_BP.getOccurences(s2, '2'));
    };
    return G964_BP;
}());
exports.G964_BP = G964_BP;
// * BP 2
var G964_2 = /** @class */ (function () {
    function G964_2() {
    }
    G964_2.mix = function (s1, s2) {
        return 'abcdefghijklmnopqrstuvwxyz'
            .split('')
            // .reduce((rs, ll) => [...rs, [s1, s2].map(s => s.replace(RegExp(`[^${ll}]`, 'g'), '')).reduce((s1, s2) => s1.length == s2.length ? '=:' + s1 : s1.length > s2.length ? '1:' + s1 : '2:' + s2)], [])
            // .filter(a => a.length >= 4)
            // .sort((a, b) => a.length != b.length
            //   ? b.length - a.length : a.charCodeAt(0) - b.charCodeAt(0))
            .join('/');
    };
    return G964_2;
}());
exports.G964_2 = G964_2;
//# sourceMappingURL=4 kyu Strings Mix.js.map