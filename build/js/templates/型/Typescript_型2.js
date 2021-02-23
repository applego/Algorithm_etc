"use strict";
// 続き
// https://qiita.com/uhyo/items/e4f54ef3b87afdd65546?utm_content=buffer525a1&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR0x2JkKQDEtSLd-qEoaBiL7TfetyMHHEX0Q7fjt7YN9_XtmMvDw29Qoegk
// 難易度：★★☆☆　基本レベル
// よく使う機能を一通り知っていれば解ける問題たちです。
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
// 2-1. ジェネリクス
// 以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。myFilter関数に適切な型アノテーションを付けてください。
// myFilter関数は色々な型の配列を受け取れる点に注意してください。必要に応じてmyFilterに型引数を追加しても構いません。
function myFilter(arr, predicate) {
    var e_1, _a;
    var result = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var elm = arr_1_1.value;
            if (predicate(elm)) {
                result.push(elm);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
// 使用例
var res = myFilter([1, 2, 3, 4, 5], function (num) { return num % 2 === 0; });
var res2 = myFilter(['foo', 'hoge', 'bar'], function (str) { return str.length >= 4; });
console.log(res);
console.log(res2);
// 追記 enum は使わない方が良いらしい（Tree-shakingの観点で（使ってないけど
// → Union Types > const enum > enum
var SPEED = {
    SLOW: 'slow',
    MEDIUM: 'medium',
    FAST: 'fast'
};
function getSpeed(speed) {
    switch (speed) {
        case "slow":
            return 10;
        case "medium":
            return 50;
        case "fast":
            return 200;
        default:
            return 0;
    }
}
// 使用例
var slowSpeed = getSpeed("slow");
var mediumSpeed = getSpeed("medium");
var fastSpeed = getSpeed("fast");
// 使用例
addEventListener("foobar", function () { });
addEventListener("event", function () { }, true);
addEventListener("event2", function () { }, {});
addEventListener("event3", function () { }, {
    capture: true,
    once: false
});
// エラー例
// addEventListener("foobar", () => { }, "string");
// addEventListener("hoge", () => { }, {
//     capture: true,
//     once: false,
//     excess: true
// });
/**
 2-4. プロパティを1つ増やす関数
下のコードで定義されるgiveId関数は、オブジェクトを受け取って、それに新しい文字列型のプロパティidを足してできる新しいオブジェクトを返す関数です。この関数に適切な型を付けてください。なお、簡単のために、giveIdに渡されるオブジェクトobjが既にidプロパティを持っている場合は考えなくて構いません。
 */
function giveId(obj) {
    var id = "本当はランダムがいいけどここではただの文字列";
    return __assign(__assign({}, obj), { id: id });
}
// 使用例
var obbj1 = giveId({ foo: 123 });
var obj2 = giveId({
    num: 0,
    hoge: true
});
// 使用例
// number型のステートを宣言(numStateはnumber型)
var _a = __read(useState(0), 2), numState = _a[0], setNumState = _a[1];
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(function (state) { return state + 10; });
// 型引数を明示することも可能
var _b = __read(useState(null), 2), anotherState = _b[0], setAnotherState = _b[1];
setAnotherState(100);
// 使用例
// number型のステートを宣言 (numStateはnumber型)
var _c = __read(useState2(0), 2), numState2 = _c[0], setNumState2 = _c[1];
// setNumStateは新しい値で呼び出せる
setNumState2(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState2(function (state) { return state + 10; });
// 型引数を明示することも可能
var _d = __read(useState2(null), 2), anotherState2 = _d[0], setAnotherState2 = _d[1];
setAnotherState2(100);
// エラー例
// setNumState2('foobar');
//# sourceMappingURL=Typescript_型2.js.map