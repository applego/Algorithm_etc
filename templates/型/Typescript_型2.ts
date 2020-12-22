// 続き
// https://qiita.com/uhyo/items/e4f54ef3b87afdd65546?utm_content=buffer525a1&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR0x2JkKQDEtSLd-qEoaBiL7TfetyMHHEX0Q7fjt7YN9_XtmMvDw29Qoegk
// 難易度：★★☆☆　基本レベル
// よく使う機能を一通り知っていれば解ける問題たちです。

// 2-1. ジェネリクス
// 以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。myFilter関数に適切な型アノテーションを付けてください。
// myFilter関数は色々な型の配列を受け取れる点に注意してください。必要に応じてmyFilterに型引数を追加しても構いません。

function myFilter(arr, predicate) {
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

// エラー例
myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
