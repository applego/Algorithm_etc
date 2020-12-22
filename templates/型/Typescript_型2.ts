// 続き
// https://qiita.com/uhyo/items/e4f54ef3b87afdd65546?utm_content=buffer525a1&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR0x2JkKQDEtSLd-qEoaBiL7TfetyMHHEX0Q7fjt7YN9_XtmMvDw29Qoegk
// 難易度：★★☆☆　基本レベル
// よく使う機能を一通り知っていれば解ける問題たちです。

// 2-1. ジェネリクス
// 以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。myFilter関数に適切な型アノテーションを付けてください。
// myFilter関数は色々な型の配列を受け取れる点に注意してください。必要に応じてmyFilterに型引数を追加しても構いません。

function myFilter<T>(arr: Array<T>, predicate: (elm: T) => boolean): Array<T>{
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);
console.log(res);
console.log(res2);

// エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

// 2-2. いくつかの文字列を受け取れる関数
// 以下のコードで定義されるgetSpeedは、'slow', 'medium', 'fast'のいずれかの文字列を受け取って数値を返す関数です。この関数に他の文字列を渡すのは型エラーとしたいです。この条件を満たすように型Speedを定義してください。

type Speed = 'slow'|'medium'|'fast';

// 追記 enum は使わない方が良いらしい（Tree-shakingの観点で（使ってないけど
// → Union Types > const enum > enum
const SPEED = {
    SLOW: 'slow',
    MEDIUM: 'medium',
    FAST: 'fast'
} as const;
type SPEED = typeof SPEED[keyof typeof SPEED]; // 'slow' | 'medium' | 'fast'

function getSpeed(speed: Speed): number {
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
const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");

// エラー例
// getSpeed("veryfast");
