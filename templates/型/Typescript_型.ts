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

function isPositive(num:number) :boolean {
    return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);
//型 'boolean' を型 'number' に割り当てることはできません。ts(2322)

/**
 1-2. オブジェクトの型
1人のユーザーのデータを表すオブジェクトは、nameプロパティとageプロパティ、そしてprivateプロパティを持っています。
nameは文字列、ageは数値、privateは真偽値です。ユーザーデータのオブジェクトの型Userを定義してください。
 */

interface User{
    name: string;
    age: number;
    private: boolean;
}

// type でもOK
type UserType = {
    name: string;
    age: number;
    private: boolean;
}

function showUserInfo(user: User) {
    // 省略
}

// 使用例
showUserInfo({
    name: 'john Smith',
    age: 16,
    private: false,
});

// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };

/*
1-3. 関数の型
以下のコードで定義される関数isPositiveは、数値を受け取ってその数値が0以上ならtrueを、0未満ならfalseを返す関数です。以下のコードに合うように適切な型IsPositiveFuncを定義してください。
*/

type IsPositiveFunc = (arg: number) => boolean;

interface IsPositiveFuncI{
    (arg: number): boolean;
}

const isPositive13: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive13(5)

// エラー例
// isPositive13('foo');
// const res: number = isPositive13(123);

// 1-4. 配列の型
// 以下のコードで定義される関数sumOfPosは、数値の配列を受け取って、そのうち0以上の値の和を返す関数です。適切な型アノテーションをつけてください。
function sumOfPos(arr: number[]/* :Array<number> */):number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
