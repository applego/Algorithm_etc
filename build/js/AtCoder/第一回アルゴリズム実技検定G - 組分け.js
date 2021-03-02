"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
/*
using System;
using System.Linq;

class G
{
    static void Main()
    {
        var n = int.Parse(Console.ReadLine());
        var a = new int[n - 1].Select(_ => Console.ReadLine().Split().Select(int.Parse).ToArray()).ToArray();

        var M = int.MinValue;
        Perm(new int[n], 0, g =>
        {
            var r = 0;
            for (int i = 0; i < n; i++)
                for (int j = i + 1; j < n; j++)
                    if (g[i] == g[j]) r += a[i][j - i - 1];
            M = Math.Max(M, r);
        });
        Console.WriteLine(M);
    }

    static void Perm(int[] g, int i, Action<int[]> action)
    {
        for (int x = 0; x < 3; x++)
        {
            g[i] = x;
            if (i == g.Length - 1) action(g);
            else Perm(g, i + 1, action);
        }
    }
}
*/
var G = /** @class */ (function () {
    function G() {
    }
    G.main = function (input) {
        var inputArr = input.split('\n');
        var n = Number(inputArr.shift());
        var a = inputArr.map(function (_) { return _.split(' ').map(Number); });
        console.log(a);
        var m = Number.MIN_SAFE_INTEGER;
        G.perm(Array(n), 0, function (g) {
            var r = 0;
            for (var i = 0; i < n; i++) {
                for (var j = i + 1; j < n; j++) {
                    if (g[i] === g[j])
                        r += a[i][j - i - 1];
                }
            }
            m = Math.max(m, r);
        });
        console.log(m);
        return m;
    };
    G.perm = function (g, i, action) {
        for (var x = 0; x < 3; x++) {
            g[i] = x;
            if (i === g.length - 1)
                action(g);
            else
                this.perm(g, i + 1, action);
        }
    };
    return G;
}());
exports.G = G;
// * 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// G.Main(input);
//# sourceMappingURL=第一回アルゴリズム実技検定G - 組分け.js.map