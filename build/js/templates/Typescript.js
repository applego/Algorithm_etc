"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
TypeScriptのチートシート;
Qiita;
tsにするとビルドさせるため.jsに;
// 型の種類
// Boolean
var x1 = false;
// Number
var x2 = 1;
// String
var x3 = 'hello';
// Any
// 型なしを示す。ノーチェックでコンパイルを通過するためできる限り使わない。
var x4;
// 型を省略すると勝手にanyになる
var x5;
// 宣言と代入を同時に行うと型推論が動いてしまう
var x6 = 123; // number
// anyにしたい時は2行に分ける
var y1;
y1 = 123; // 数値を持ったany
// Array
var x11 = [1, 2, 3];
var y11 = ['a', 'b'];
var x12 = [1, 'hello', true];
// Enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
})(Color || (Color = {}));
;
var x13 = Color.Red;
// Enumの値で比較できる
console.log(x === Color.Red); // true
// 0からの連番で扱われる
console.log(x === 1); // true
// キーになる数値を振る
(function (Color) {
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Red"] = 200] = "Red";
})(Color || (Color = {}));
;
console.log(Color.Red); // 200
// Void
// 値を返さない関数の戻り値として使用する
function f1() {
    alert('message');
}
// 関数の書き方
// 引数・戻り値に型を定義する(省略しても可)
function f2(x) {
    return x.toLocaleString() + '円';
}
console.log(f2(1000)); // "1,000円"
// 省略可能な引数は?を使う
function f3(x, y) {
    if (y === void 0) { y = '円'; }
    return x.toLocaleString() + y;
}
console.log(f3(1000)); // "1,000円"
console.log(f3(1000, 'ペソ')); // "1,000ペソ"
// アロー関数式
var add = function (x) { return x + 1; };
// {}を使ってもOK
var add = function (x) {
    return x + 1;
};
// クラス
// 書き方
var A1 = /** @class */ (function (_super) {
    __extends(A1, _super);
    function A1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A1;
}([_super.]));
var x33;
x33 = new A1();
// アクセシビリティ
// private/publicの2択
var A2 = /** @class */ (function () {
    function A2() {
    }
    return A2;
}());
// デフォルトはpublic
var A3 = /** @class */ (function () {
    function A3() {
    }
    return A3;
}());
// コンストラクタ
var Person = /** @class */ (function () {
    function Person(id) {
        this.id = id;
        // this.number=id; は自動的に行われるので省略
    }
    return Person;
}());
// set/getアクセサ
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Object.defineProperty(Person2.prototype, "fullName", {
        get: function () {
            return this.lastName + this.firstName + 'さん';
        },
        set: function (name) {
            var names = name.split(' ');
            this.firstName = names[1];
            this.lastName = names[0];
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var p;
p = new Person2();
p.fullName = '小田 花子';
console.log(p.fullName); // "小田花子さん"
// 注意
// es5の機能を使うため $ tsc --target es5 [file] とする必要がある
// 継承
// super キーワードで親クラスを呼び出し
var A4 = /** @class */ (function () {
    function A4() {
    }
    A4.prototype.f = function () { };
    return A4;
}());
var B4 = /** @class */ (function (_super) {
    __extends(B4, _super);
    function B4() {
        return _super.call(this) || this;
    }
    B4.prototype.f = function () {
        // 親クラスに存在するメソッドを呼べる(privateも可)
        _super.prototype.f.call(this);
    };
    return B4;
}(A4));
var Bc = /** @class */ (function () {
    function Bc() {
        this.id = 1;
    }
    Bc.prototype.f = function (n) {
        return n * 1;
    };
    return Bc;
}());
var X1 = /** @class */ (function () {
    function X1() {
    }
    return X1;
}());
var Ciii = /** @class */ (function () {
    function Ciii() {
    }
    return Ciii;
}());
// オーバーロード
var Aover = /** @class */ (function () {
    function Aover() {
    }
    Aover.prototype.f = function (x) {
        if (typeof x === 'string') {
            return x + ' abc';
        }
        else {
            return x + 1;
        }
    };
    return Aover;
}());
var x44;
x = new Aover();
console.log(x.f('a')); // "a abc"
console.log(x.f(1)); // 2
// ジェネリック
// 実行時まで型が確定しない場合に仮の型を宣言できる。
// 型名にはT,U,V,T1,T2,T3...を使うのが一般的。
function fgene(x) {
    console.log(x);
}
func('abc'); // "abc"
func(123); // 123
func(123); // 省略も可
// 継承の制約として使用
function fgeneE(p) {
    console.log(p.value);
}
// クラスの先頭で使用すると全体で使用できる
var Asentou = /** @class */ (function () {
    function Asentou() {
    }
    Asentou.prototype.f = function (x) { };
    return Asentou;
}());
// 例1)クラスで型を指定
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.f = function (x) { };
    return C;
}());
var y;
y = new C();
y.f(123);
// 例2)クラスは仮の型Tのまま
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.f = function (x) { };
    return B;
}());
// インスタンス作成時に型を指定
var x55;
x = new B();
x.f('abc');
var A = /** @class */ (function () {
    function A() {
    }
    A.f = function () { return 100; };
    A.id = 1;
    return A;
}());
// インスタンスから呼び出せない
var x;
x = new A();
console.log(x.id); // undefined
console.log(x.f()); // Error: not a function
// 静的な参照のみ
console.log(A.id); // 1
console.log(A.f()); // 100
// モジュール
// 内部モジュール
(function (A) {
    function a() {
        console.log('a');
    }
    A.a = a;
})(A || (A = {}));
(function (B) {
    function b() {
        A.a();
        console.log('b');
    }
    B.b = b;
})(B || (B = {}));
B.b();
// 分割も可(別ファイルでもOK)
(function (A) {
    function a1() { }
})(A || (A = {}));
(function (A) {
    function a2() { }
})(A || (A = {}));
// タプル
// 複数要素のセットを表現する
var x = [1, 'hello'];
x[0].toFixed();
x[1].charAt(0);
// 共有型
// 複数の型を持つことができる
// 関数の戻り値で使用
function f(x) {
    if (x >= 0) {
        return 1;
    }
    else {
        return 'error';
    }
}
// 変数に使用
var x = [];
// typeguard
// 型により処理を分岐する
// プリミティブ
var x;
// ...
if (typeof x === 'string') { }
// クラス
var x;
// ...
if (x instanceof ClassA) { }
// 変数で使用
var x;
x = 1;
x = 'abc';
// 関数で使用
function f(x) {
    if (x >= 0) {
        return 1;
    }
    else {
        return 'error';
    }
}
// エイリアスを使用すると思われるのは、タプルまたは共有型
// 他は可能な限りinterfaceを定義したほうが良い
// TypeScriptで使用可能なES6構文
// let
// スコープ内だけ生存する変数を宣言
var x = 1;
{
    var x_1 = 2;
}
console.log(x); // 1
// 関数でも同じ
var x = 1;
function f() {
    var x = 2;
}
console.log(x); // 1
var ;
// 定数
var x = 123;
x = 456; // コンパイルエラー
template;
literals;
var text = "\n\u8907\u6570\u884C\u306E\n\u30C6\u30AD\u30B9\u30C8\u304C\n\u66F8\u3051\u308B\n";
var html = "\n<p>HTML\u306B</p>\n<p>\u4FBF\u5229</p>\n";
// ${}を使うとリテラル内に式を埋め込むことができる
var x = 1;
var text = "\n\u7B54\u3048\u306F" + (x + 100) + "\n";
console.log(text); // "答えは101"
$;
{ }
のリテラルを関数に渡すと変数と分割できる;
// HTMLのエスケープ処理などに使用できる
function tag(literal) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.log(literal); // ["朝食は","","","","です"]
    console.log(values); // ["カレー","ラーメン","うどん"]
}
tag(__makeTemplateObject(["\u671D\u98DF\u306F", "", "", "\u3067\u3059"], ["\u671D\u98DF\u306F", "", "", "\u3067\u3059"]), 'カレー', 'ラーメン', 'うどん');
shorthand;
properties;
これはtsc1;
.6;
.2;
では使用できなかった;
いつか使えると思うのでメモとして残す;
var x = { id: id, name: name };
console.log(x);
destructring;
オブジェクトや配列を構造化(脱構造化);
する;
var x = { id: 1, name: 'abc' };
var id = x.id, name = x.name;
console.log(id); // 1
console.log(name);
"abc";
var x = [100, 200];
var y1 = x[0], y2 = x[1];
console.log(y1); // 100
console.log(y2); // 200
// 引数に別名を付けることができる
function f(_a) {
    var id = _a.x, name = _a.y;
    return '${id},${name}';
}
var x = { x: 1, y: 'abc' };
console.log(f(x)); // 1 abc
spread;
operator;
// 可変長の変数を配列に変換
f(1, 2, 3);
function f() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args); // [1,2,3]
}
// 逆(配列を可変長)もできる
var x = [1, 2, 3];
f2.apply(void 0, x);
function f2(a, b, c) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}
// for...of
// 普通のJavaScriptのfor...inはプロパティ名が返る。
for (var i in ['a', 'b', 'c']) {
    console.log(i);
}
// 0,1,2
// for...ofは値が返る。
for (var _i = 0, _a = ['a', 'b', 'c']; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
// 'a','b','c'
//# sourceMappingURL=Typescript.js.map