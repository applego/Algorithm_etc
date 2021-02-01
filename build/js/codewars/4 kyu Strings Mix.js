"use strict";
// type lowercaseCounter = {
//   counters: { alpha: string, cnt: number; }[];
// }
// type lowercaseCounter = {
//   cnts: Dictionary[];
// }
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var enmComparison;
(function (enmComparison) {
    enmComparison[enmComparison["one"] = 1] = "one";
    enmComparison[enmComparison["two"] = 2] = "two";
    enmComparison[enmComparison["equal"] = 3] = "equal"; //'='
})(enmComparison || (enmComparison = {}));
// type mergedCounters = {
//   mergedCounters: mergedCounter[];
// };
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
        var result = 
        // for (let smc of sortedMergedCounter) {
        // }
        sortedMergedCounter
            .filter(function (smc) { return smc.biggerCnt > 0; })
            .map(function (smc) {
            var comparison = smc.comparison === enmComparison.equal ?
                '=' : smc.comparison.toString();
            var alpha = __spreadArrays(Array(smc.biggerCnt)).map(function (_) { return smc.alpha; }).join('');
            return comparison + ":" + alpha;
        }).join('/');
        return result;
    };
    return G964;
}());
exports.G964 = G964;
/*
cntS1 =
{
  a:0,
  b:0,
  .
  .
  .
  y:0,
  z:0
 }
 s1 小文字のカウント

 s2 小文字のカウント

 a〜zまで比較
  - s1 > s2
  - s1 = s2
  - s1 < s2

  cntMerged = {
  'a':
    {
      which:'1',
      cnt:3
    },
  'b':
    {
      which:'=',
      cnt:2
    }
  }

cnt でソート
alphaでソート

`${which}:${Array(cnt).map(alpha).join()}`
.join('/')

*/
//# sourceMappingURL=4 kyu Strings Mix.js.map