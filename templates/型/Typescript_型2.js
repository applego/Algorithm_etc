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
// 2-1. ジェネリクス
// 以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。myFilter関数に適切な型アノテーションを付けてください。
// myFilter関数は色々な型の配列を受け取れる点に注意してください。必要に応じてmyFilterに型引数を追加しても構いません。
function myFilter(arr, predicate) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elm = arr_1[_i];
        if (predicate(elm)) {
            result.push(elm);
        }
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
// エラー例
// const obj3: {
//     id: string;
//     piyo: string;
// } = giveId({
//     foo: "bar"
// });
