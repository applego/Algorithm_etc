The Rust Programming Language 日本語版
まえがき

The Rust Programming Language 日本語版
参照と借用
リスト 4-5 のタプルコードの問題は、String 型を呼び出し元の関数に戻さないと、calculate_length を呼び出した後に、 String オブジェクトが使えなくなることであり、これは String オブジェクトが calculate_length にムーブされてしまうためでした。

ここで、値の所有権をもらう代わりに引数としてオブジェクトへの参照を取る calculate_length 関数を定義し、 使う方法を見てみましょう:

ファイル名: src/main.rs

fn main() {
let s1 = String::from("hello");

    let len = calculate_length(&s1);

    // '{}'の長さは、{}です
    println!("The length of '{}' is {}.", s1, len);

}

fn calculate_length(s: &String) -> usize {
s.len()
}
まず、変数宣言と関数の戻り値にあったタプルコードは全てなくなったことに気付いてください。 2 番目に、&s1 を calcuate_length に渡し、その定義では、String 型ではなく、&String を受け取っていることに注目してください。

これらのアンド記号が参照であり、これのおかげで所有権をもらうことなく値を参照することができるのです。 図 4-5 はその図解です。

文字列 s1 を指す&String 型の s
図 4-5: String s1 を指す&String s の図表

注釈: &による参照の逆は、参照外しであり、参照外し演算子の\*で達成できます。 第 8 章で参照外し演算子の使用例を眺め、第 15 章で参照外しについて詳しく議論します。

ここの関数呼び出しについて、もっと詳しく見てみましょう:

let s1 = String::from("hello");

let len = calculate_length(&s1);
この&s1 という記法により、s1 の値を参照する参照を生成することができますが、これを所有することはありません。 所有してないということは、指している値は、参照がスコープを抜けてもドロップされないということです。

同様に、関数のシグニチャでも、&を使用して引数 s の型が参照であることを示しています。 説明的な注釈を加えてみましょう:

fn calculate_length(s: &String) -> usize { // s は String への参照
s.len()
} // ここで、s はスコープ外になる。けど、参照しているものの所有権を持っているわけではないので
// 何も起こらない
変数 s が有効なスコープは、あらゆる関数の引数のものと同じですが、所有権はないので、s がスコープを抜けても、 参照が指しているものをドロップすることはありません。関数が実際の値の代わりに参照を引数に取ると、 所有権をもらわないので、所有権を返す目的で値を返す必要はありません。

関数の引数に参照を取ることを借用と呼びます。現実生活のように、誰かが何かを所有していたら、 それを借りることができます。用が済んだら、返さなきゃいけないわけです。

では、借用した何かを変更しようとしたら、どうなるのでしょうか？リスト 4-6 のコードを試してください。 ネタバレ注意: 動きません！

ファイル名: src/main.rs

fn main() {
let s = String::from("hello");

    change(&s);

}

fn change(some_string: &String) {
some_string.push_str(", world");
}
リスト 4-6: 借用した値を変更しようと試みる

これがエラーです:

error[E0596]: cannot borrow immutable borrowed content `*some_string` as mutable
(エラー: 不変な借用をした中身`*some_string`を可変で借用できません)
--> error.rs:8:5
|
7 | fn change(some_string: &String) {
| ------- use `&mut String` here to make mutable
8 | some_string.push_str(", world");
| ^^^^^^^^^^^ cannot borrow as mutable
変数が標準で不変なのと全く同様に、参照も不変なのです。参照している何かを変更することは叶わないわけです。

可変な参照
一捻り加えるだけでリスト 4-6 のコードのエラーは解決します:

ファイル名: src/main.rs

fn main() {
let mut s = String::from("hello");

    change(&mut s);

}

fn change(some_string: &mut String) {
some_string.push_str(", world");
}
始めに、s を mut に変えなければなりませんでした。そして、&mut s で可変な参照を生成し、 some_string: &mut String で可変な参照を受け入れなければなりませんでした。

ところが、可変な参照には大きな制約が一つあります: 特定のスコープで、ある特定のデータに対しては、 一つしか可変な参照を持てないことです。こちらのコードは失敗します:

ファイル名: src/main.rs

let mut s = String::from("hello");

let r1 = &mut s;
let r2 = &mut s;
これがエラーです:

error[E0499]: cannot borrow `s` as mutable more than once at a time
(エラー: 一度に`s`を可変として 2 回以上借用することはできません)
--> borrow_twice.rs:5:19
|
4 | let r1 = &mut s;
| - first mutable borrow occurs here
| (最初の可変な参照はここ)
5 | let r2 = &mut s;
| ^ second mutable borrow occurs here
| (二つ目の可変な参照はここ)
6 | }
| - first borrow ends here
| (最初の借用はここで終わり)
この制約は、可変化を許可するものの、それを非常に統制の取れた形で行えます。これは、新たな Rustacean にとっては、 壁です。なぜなら、多くの言語では、いつでも好きな時に可変化できるからです。

この制約がある利点は、コンパイラがコンパイル時にデータ競合を防ぐことができる点です。 データ競合とは、競合条件と類似していて、これら 3 つの振る舞いが起きる時に発生します:

2 つ以上のポインタが同じデータに同時にアクセスする。
少なくとも一つのポインタがデータに書き込みを行っている。
データへのアクセスを同期する機構が使用されていない。
データ競合は未定義の振る舞いを引き起こし、実行時に追いかけようとした時に特定し解決するのが難しい問題です。 しかし、Rust は、データ競合が起こるコードをコンパイルさえしないので、この問題が発生しないようにしてくれるわけです。

いつものように、波かっこを使って新しいスコープを生成し、同時並行なものでなく、複数の可変な参照を作ることができます。

let mut s = String::from("hello");

{
let r1 = &mut s;

} // r1 はここでスコープを抜けるので、問題なく新しい参照を作ることができる

let r2 = &mut s;
可変と不変な参照を組み合わせることに関しても、似たような規則が存在しています。このコードはエラーになります:

let mut s = String::from("hello");

let r1 = &s; // 問題なし
let r2 = &s; // 問題なし
let r3 = &mut s; // 大問題！
これがエラーです:

error[E0502]: cannot borrow `s` as mutable because it is also borrowed as
immutable
(エラー: `s`は不変で借用されているので、可変で借用できません)
--> borrow_thrice.rs:6:19
|
4 | let r1 = &s; // no problem
| - immutable borrow occurs here
5 | let r2 = &s; // no problem
6 | let r3 = &mut s; // BIG PROBLEM
| ^ mutable borrow occurs here
7 | }
| - immutable borrow ends here
ふう！さらに不変な参照をしている間は、可変な参照をすることはできません。不変参照の使用者は、 それ以降に値が突然変わることなんて予想してません！しかしながら、複数の不変参照をすることは可能です。 データを読み込んでいるだけの人に、他人がデータを読み込むことに対して影響を与える能力はないからです。

これらのエラーは、時としてイライラするものではありますが、Rust コンパイラがバグの可能性を早期に指摘してくれ(それも実行時ではなくコンパイル時に)、 問題の発生箇所をズバリ示してくれるのだと覚えておいてください。そうして想定通りにデータが変わらない理由を追いかける必要がなくなります。

宙に浮いた参照
ポインタのある言語では、誤ってダングリングポインタを生成してしまいやすいです。ダングリングポインタとは、 他人に渡されてしまった可能性のあるメモリを指すポインタのことであり、その箇所へのポインタを保持している間に、 メモリを解放してしまうことで発生します。対照的に Rust では、コンパイラが、 参照がダングリング参照に絶対ならないよう保証してくれます: つまり、何らかのデータへの参照があったら、 コンパイラは参照がスコープを抜けるまで、データがスコープを抜けることがないよう確認してくれるわけです。

ダングリング参照作りを試してみますが、コンパイラはこれをコンパイルエラーで阻止します:

ファイル名: src/main.rs

fn main() {
let reference_to_nothing = dangle();
}

fn dangle() -> &String {
let s = String::from("hello");

    &s

}
こちらがエラーです:

error[E0106]: missing lifetime specifier
(エラー: ライフタイム指定子がありません)
--> main.rs:5:16
|
5 | fn dangle() -> &String {
| ^ expected lifetime parameter
|
= help: this function's return type contains a borrowed value, but there is no
value for it to be borrowed from
(助言: この関数の戻り値型は、借用した値を含んでいますが、借用される値がどこにもありません)
= help: consider giving it a 'static lifetime
('static ライフタイムを与えることを考慮してみてください)
このエラーメッセージは、まだ講義していない機能について触れています: ライフタイムです。 ライフタイムについては第 10 章で詳しく議論しますが、ライフタイムに関する部分を無視すれば、 このメッセージは、確かにこのコードが問題になる理由に関する鍵を握っています:

this function's return type contains a borrowed value, but there is no value
for it to be borrowed from.
dangle コードの各段階で一体何が起きているのかを詳しく見ていきましょう:

ファイル名: src/main.rs

fn dangle() -> &String { // dangle は String への参照を返す

    let s = String::from("hello"); // sは新しいString

    &s // String sへの参照を返す

} // ここで、s はスコープを抜け、ドロップされる。そのメモリは消される。
// 危険だ
s は、dangle 内で生成されているので、dangle のコードが終わったら、s は解放されてしまいますが、 そこへの参照を返そうとしました。つまり、この参照は無効な String を指していると思われるのです。 よくないことです！コンパイラは、これを阻止してくれるのです。

ここでの解決策は、String を直接返すことです:

fn no_dangle() -> String {
let s = String::from("hello");

    s

}
これは何の問題もなく動きます。所有権はムーブされ、何も解放されることはありません。

参照の規則
参照について議論したことを再確認しましょう:

任意のタイミングで、一つの可変参照か不変な参照いくつでものどちらかを行える。
参照は常に有効でなければならない。
次は、違う種類の参照を見ていきましょう: スライスです。
