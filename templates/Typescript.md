// 型の種類
// Boolean
var x1: boolean = false;
// Number
var x2: number = 1;
// String
var x3: string = 'hello';
// Any
// 型なしを示す。ノーチェックでコンパイルを通過するためできる限り使わない。

var x4: any;
// 型を省略すると勝手にanyになる
var x5;
// 宣言と代入を同時に行うと型推論が動いてしまう
var x6:any = 123; // number

// anyにしたい時は2行に分ける
var y1:any;
y1 = 123; // 数値を持ったany
// Array
var x11: number[] = [1,2,3];
var y11: string[] = ['a','b'];
var x12: any[] = [1,'hello',true];
// Enum
enum Color {Blue,Red};
var x13: Color = Color.Red;
// Enumの値で比較できる
console.log(x === Color.Red); // true

// 0からの連番で扱われる
console.log(x === 1); // true
// キーになる数値を振る
enum Color {Blue=100,Red=200};
console.log(Color.Red); // 200
// Void
// 値を返さない関数の戻り値として使用する

function f1(): void{
    alert('message');
}
// 関数の書き方
// 引数・戻り値に型を定義する(省略しても可)
function f2(x: number): string {
    return x.toLocaleString() + '円';
}
console.log(f2(1000)); // "1,000円"
// 省略可能な引数は?を使う
function f3(x: number, y?: string = '円'): string {
    return x.toLocaleString() + y;
}
console.log(f3(1000)); // "1,000円"
console.log(f3(1000, 'ペソ')); // "1,000ペソ"
// アロー関数式
var add = (x: number): number => x + 1;
// {}を使ってもOK
var add = (x: number): number => {
    return x + 1;
}
// クラス
// 書き方
class A1 extends [super] implements [interface] {}

var x33: A1;
x33 = new A1();
// アクセシビリティ
// private/publicの2択

class A2 {
    private x: number;
    public y: number;
}
// デフォルトはpublic
class A3 {
    x: number;
}
// コンストラクタ
class Person {
    constructor(public id: number) {
        // this.number=id; は自動的に行われるので省略
    }
}
// set/getアクセサ
class Person2 {
    private firstName;
    private lastName;

    set fullName(name: string) {
        var names = name.split(' ');
        this.firstName = names[1];
        this.lastName = names[0];
    }
    get fullName(): string {
        return this.lastName + this.firstName + 'さん';
    }
}

var p: Person2;
p = new Person2();
p.fullName = '小田 花子';
console.log(p.fullName); // "小田花子さん"
// 注意
// es5の機能を使うため $ tsc --target es5 [file] とする必要がある

// 継承
// super キーワードで親クラスを呼び出し

class A4 {
    f(){}
}

class B4 extends A4 {
    constructor(){
        super();
    }

    f(){
        // 親クラスに存在するメソッドを呼べる(privateも可)
        super.f();
    }
}
// インターフェース
interface Ai {
    id: number;
    f(n: number): number;
}

class Bc implements Ai {
    public id = 1;
    public f(n: number) {
        return n * 1;
    }
}
// 複数インターフェース
interface Aii {}
interface Bii {}

class X1 implements Aii,Bii {}
// インターフェースを継承したインターフェース
interface Aiii {}
interface Biii extends Aiii {}

class Ciii implements Biii {}
// オーバーロード
class Aover{
    f(x:string): string;
    f(x:number): number {
        if (typeof x === 'string') {
            return x + ' abc';
        } else {
            return x + 1;
        }
    }
}

var x44:Aover;
x = new Aover();
console.log(x.f('a')); // "a abc"
console.log(x.f(1)); // 2
// ジェネリック
// 実行時まで型が確定しない場合に仮の型を宣言できる。
// 型名にはT,U,V,T1,T2,T3...を使うのが一般的。

function fgene<T>(x: T) {
    console.log(x);
}

func<string>('abc'); // "abc"
func<number>(123); // 123
func(123); // 省略も可
// 継承の制約として使用
function fgeneE<T extends A>(p:T) {
    console.log(p.value);
}
// クラスの先頭で使用すると全体で使用できる
class Asentou<T> {
    private field: T;
    public f(x: T) {}
}
// インターフェースで使用する例
interface Aisentou<T>{
    f(x: T);
}
// 例1)クラスで型を指定
class C implements Aisentou<number> {
    f(x: number){}
}

var y: C;
y = new C();
y.f(123);
// 例2)クラスは仮の型Tのまま
class B implements Aisentou<T> {
    f(x: T){}
}

// インスタンス作成時に型を指定
var x55: B<string>;
x = new B();
x.f('abc');
static
class A {
    static id: number = 1;
    static f(): number { return 100; }
}
// インスタンスから呼び出せない
var x: A;
x = new A();
console.log(x.id); // undefined
console.log(x.f()); // Error: not a function
// 静的な参照のみ
console.log(A.id); // 1
console.log(A.f()); // 100
// モジュール
// 内部モジュール
module A {
    export function a(){
        console.log('a');
    }
}

module B {
    export function b(){
        A.a();
        console.log('b');
    }
}

B.b();
// a
// b
// ネストも可
module A {
    module B {}
}
// 分割も可(別ファイルでもOK)
module A {
    function a1(){}
}

module A {
    function a2(){}
}
// タプル
// 複数要素のセットを表現する

var x: [number, string] = [1, 'hello'];
x[0].toFixed();
x[1].charAt(0);
// 共有型
// 複数の型を持つことができる

// 関数の戻り値で使用
function f(x: number): number | string {
    if (x >= 0) {
        return 1;
    } else {
        return 'error';
    }
}
// 変数に使用
var x: (number | string)[] = [];
// typeguard
// 型により処理を分岐する

// プリミティブ
var x: (number | string);
// ...
if (typeof x === 'string') {...}
// クラス
var x: (ClassA | ClassB);
// ...
if (x instanceof ClassA) {...}
// 型のエイリアス
type NumberOrString = number | string;
// 変数で使用
var x: NumberOrString;

x = 1;
x = 'abc';
// 関数で使用
function f(x: number): NumberOrString {
    if (x >= 0) {
        return 1;
    } else {
        return 'error';
    }
}
// エイリアスを使用すると思われるのは、タプルまたは共有型
// 他は可能な限りinterfaceを定義したほうが良い
// TypeScriptで使用可能なES6構文
// let
// スコープ内だけ生存する変数を宣言

let x = 1;
{
    let x = 2;
}
console.log(x); // 1
// 関数でも同じ
let x = 1;
function f(){
    let x = 2;
}
console.log(x); // 1
const
// 定数

const x = 123;
x = 456; // コンパイルエラー
template literals
var text = `
複数行の
テキストが
書ける
`;
var html = `
<p>HTMLに</p>
<p>便利</p>
`;
// ${}を使うとリテラル内に式を埋め込むことができる

var x: number = 1;
var text = `
答えは${x + 100}
`;
console.log(text); // "答えは101"
${}のリテラルを関数に渡すと変数と分割できる

// HTMLのエスケープ処理などに使用できる
function tag(literal, ...values: any[]) {
    console.log(literal); // ["朝食は","","","","です"]
    console.log(values); // ["カレー","ラーメン","うどん"]
}
tag `朝食は${'カレー'}${'ラーメン'}${'うどん'}です`;
shorthand properties
これはtsc1.6.2では使用できなかった
いつか使えると思うのでメモとして残す

var x = {id,name};
console.log(x);
destructring
オブジェクトや配列を構造化(脱構造化)する

var x = {id:1,name:'abc'};
var {id,name} = x;

console.log(id); // 1
console.log(name); "abc"
var x:number[] = [100,200];
var [y1, y2] = x;

console.log(y1); // 100
console.log(y2); // 200
// 引数に別名を付けることができる
function f({x: id, y: name}: {x: number, y: string}) {
    return '${id},${name}';
}

var x = {x:1, y:'abc'};
console.log(f(x)); // 1 abc
spread operator
// 可変長の変数を配列に変換

f(1,2,3);

function f(...args: string[]) {
    console.log(args); // [1,2,3]
}
// 逆(配列を可変長)もできる

var x = [1,2,3];
f2(...x);

function f2(a,b,c) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}
// for...of
// 普通のJavaScriptのfor...inはプロパティ名が返る。

for (var i in ['a','b','c']) {
    console.log(i);
}
// 0,1,2
// for...ofは値が返る。


for (var i of ['a','b','c']) {
    console.log(i);
}
// 'a','b','c'