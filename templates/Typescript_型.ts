/*
https://qiita.com/uhyo/items/e4f54ef3b87afdd65546?utm_content=buffer525a1&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR0x2JkKQDEtSLd-qEoaBiL7TfetyMHHEX0Q7fjt7YN9_XtmMvDw29Qoegk

*/

/**
難易度：★☆☆☆　基礎の基礎レベル
基本的な型が分かっていれば解ける問題たちです。

1-1. 関数に型をつけよう
次の関数isPositiveは、数値を受け取ってそれが0以上ならtrue、0未満ならfalseを返す関数です。
この関数に正しく型アノテーションを付けてください。
型アノテーションとは、引数や返り値の型をソースコード中に明示することです。
 */

function isPositive(num) {
    return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
isPositive('123');
// const numVar: number = isPositive(-5);
//型 'boolean' を型 'number' に割り当てることはできません。ts(2322)
