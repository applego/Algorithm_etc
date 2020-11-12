https://doc.rust-jp.rs/the-rust-programming-language-ja/1.6/book/getting-started.html

↓（上記サイト抜粋）

# Cargo へ変換

```
$ mkdir src
$ mv main.rs src/main.rs
$ rm main  # Windowsなら'del main.exe'になります
```

# 設定ファイル

Cargo.toml

```
[package]

name = "hello_world"
version = "0.0.1"
authors = [ "あなたの名前 <you@example.com>" ]
```

# Cargo プロジェクトのビルドと実行

Cargo.toml をプロジェクトのルートディレクトリに置いたら、Hello World プログラムのビルドと実行の準備が整っているはずです! 以下のコマンドを入力しましょう。

```
$ cargo build
   Compiling hello_world v0.0.1 (file:///home/yourname/projects/hello_world)
$ ./target/debug/hello_world
Hello, world!
```

cargo build でプロジェクトをビルドして ./target/debug/hello_world でそれを実行したのですが、実は次のように cargo run 一発でそれらを実行できます。

```
$ cargo run
     Running `target/debug/hello_world`
Hello, world!
```

# リリースビルド

プロジェクトがリリースできる状態になったら cargo build --release を使うことで、最適化をかけてプロジェクトをコンパイルできます。 最適化することで、Rust のコードは速くなりますが、コンパイル時間は長くなります。 このような理由から、開発の時用と、ユーザへ配布する最終版プログラムを作る時用の、2 つのプロファイルが存在するのです。

このコマンドを走らせると Cargo.lock という新しいファイルも出来ます。 中身はこのようになっています。

```
[root]
name = "hello_world"
version = "0.0.1"
```

Cargo は Cargo.lock でアプリケーションの依存を追跡します。 これは Hello World プロジェクトの Cargo.lock ファイルです。 このプロジェクトは依存を持たないので、ファイルの中身はほとんどありません。 実際には自身でこのファイルに触ることはありません。Cargo に任せてしまいます。

できました!ここまでついて来たなら Cargo で hello_world をビルドする所までできたはずです。

このプロジェクトはとてもシンプルですが、これから Rust を使っていく上で実際に使うことになるツール類を色々使っています。 実際、事実上全ての Rust プロジェクトに取り掛かる際に、以下のようなコマンドを使うことになります。

```
$ git clone someurl.com/foo
$ cd foo
$ cargo build
```

The Rust Programming Language 日本語版
まえがき
導入

1. 事始め
   1.1. インストール
   1.2. Hello, World!
   1.3. Hello, Cargo!
2. 数当てゲームをプログラムする
3. 一般的なプログラミングの概念
   3.1. 変数と可変性
   3.2. データ型
   3.3. 関数
   3.4. コメント
   3.5. フロー制御
4. 所有権を理解する
   4.1. 所有権とは？
   4.2. 参照と借用
   4.3. スライス型
5. 構造体を使用して関係のあるデータを構造化する
   5.1. 構造体を定義し、インスタンス化する
   5.2. 構造体を使ったプログラム例
   5.3. メソッド記法
6. Enum とパターンマッチング
   6.1. Enum を定義する
   6.2. match フロー制御演算子
   6.3. if let で簡潔なフロー制御
7. 肥大化していくプロジェクトをパッケージ、クレート、モジュールを利用して管理する
   7.1. パッケージとクレート
   7.2. モジュールを定義して、スコープとプライバシーを制御する
   7.3. モジュールツリーの要素を示すためのパス
   7.4. use キーワードでパスをスコープに持ち込む
   7.5. モジュールを複数のファイルに分割する
8. 一般的なコレクション
   8.1. ベクタで一連の値を保持する
   8.2. 文字列で UTF-8 でエンコードされたテキストを保持する
   8.3. キーとそれに紐づいた値をハッシュマップに格納する
9. エラー処理
   9.1. panic!で回復不能なエラー
   9.2. Result で回復可能なエラー
   9.3. panic!すべきかするまいか
10. ジェネリック型、トレイト、ライフタイム
    10.1. ジェネリックなデータ型
    10.2. トレイト：共通の振る舞いを定義する
    10.3. ライフタイムで参照を検証する
11. 自動テストを書く
    11.1. テストの記述法
    11.2. テストの実行のされ方を制御する
    11.3. テストの体系化
12. 入出力プロジェクト：コマンドラインプログラムを構築する
    12.1. コマンドライン引数を受け付ける
    12.2. ファイルを読み込む
    12.3. リファクタリンクしてモジュール性とエラー処理を向上させる
    12.4. テスト駆動開発でライブラリの機能を開発する
    12.5. 環境変数を取り扱う
    12.6. 標準出力ではなく標準エラーにエラーメッセージを書き込む
13. 関数型言語の機能：イテレータとクロージャ
    13.1. クロージャ：環境をキャプチャできる匿名関数
    13.2. 一連の要素をイテレータで処理する
    13.3. 入出力プロジェクトを改善する
    13.4. パフォーマンス比較：ループ VS イテレータ
14. Cargo と Crates.io についてより詳しく
    14.1. リリースプロファイルでビルドをカスタマイズする
    14.2. Crates.io にクレートを公開する
    14.3. Cargo のワークスペース
    14.4. cargo install で Crates.io からバイナリをインストールする
    14.5. 独自のコマンドで Cargo を拡張する
15. スマートポインタ
    15.1. ヒープのデータを指す Box を使用する
    15.2. Deref トレイトでスマートポインタを普通の参照のように扱う
    15.3. Drop トレイトで片付け時にコードを走らせる
    15.4. Rc は、参照カウント方式のスマートポインタ
    15.5. RefCell と内部可変性パターン
    15.6. 循環参照は、メモリをリークすることもある
16. 恐れるな！並行性
    16.1. スレッドを使用してコードを同時に走らせる
    16.2. メッセージ受け渡しを使ってスレッド間でデータを転送する
    16.3. 状態共有並行性
    16.4. Sync と Send トレイトで拡張可能な並行性
17. Rust のオブジェクト指向プログラミング機能
    17.1. オブジェクト指向言語の特徴
    17.2. トレイトオブジェクトで異なる型の値を許容する
    17.3. オブジェクト指向デザインパターンを実装する
18. パターンとマッチング
    18.1. パターンが使用されることのある箇所全部
    18.2. 論駁可能性：パターンが合致しないかどうか
    18.3. パターン記法
19. 高度な機能
    19.1. Unsafe Rust
    19.2. 高度なトレイト
    19.3. 高度な型
    19.4. 高度な関数とクロージャ
    19.5. マクロ
20. 最後のプロジェクト：マルチスレッドの Web サーバを構築する
    20.1. シングルスレッドの Web サーバを構築する
    20.2. シングルスレッドサーバをマルチスレッド化する
    20.3. 正常なシャットダウンと片付け
21. 付録
    21.1. 付録 A：キーワード
    21.2. 付録 B：演算子と記号
    21.3. 付録 C：導出可能なトレイト
    21.4. 付録 D：便利な開発ツール
    21.5. 付録 E：Edition
    21.6. 付録 F：本の翻訳
    21.7. 付録 G：Rust の作られ方と“Nightly Rust”

The Rust Programming Language 日本語版
数当てゲームをプログラムする
実物のプロジェクトに一緒に取り組むことで、Rust の世界へ飛び込みましょう！ この章では、実際のプログラム内で使用しながらいくつかの一般的な Rust の概念に触れます。 let、match、メソッド、関連関数、外部クレートの使用などについて学ぶでしょう！ 後ほどの章でこれらの概念について深く知ることになります。この章では、基礎部分だけにしましょう。

古典的な初心者向けのプログラミング問題を実装してみましょう: 数当てゲームです。 これは以下のように動作します: プログラムは 1 から 100 までの乱数整数を生成します。 そしてプレーヤーに予想を入力するよう促します。予想を入力したら、プログラムは、 その予想が小さすぎたか大きすぎたかを出力します。予想が当たっていれば、ゲームは祝福メッセージを表示し、 終了します。

新規プロジェクトの立ち上げ
新規プロジェクトを立ち上げるには、第 1 章で作成した projects ディレクトリに行き、 Cargo を使って新規プロジェクトを作成します。以下のように:

$ cargo new guessing_game --bin
$ cd guessing_game
最初のコマンド cargo new は、プロジェクト名を第 1 引数に取ります(guessing_game ですね)。 --bin というフラグは、Cargo にバイナリ生成プロジェクトを作成させます。第 1 章のものと似ていますね。 2 番目のコマンドで新規プロジェクトのディレクトリに移動します。

生成された Cargo.toml ファイルを見てください:

ファイル名: Cargo.toml

[package]
name = "guessing_game"
version = "0.1.0"
authors = ["名前 <you@example.com>"]

[dependencies]
もし、Cargo があなたの環境から取得した作者情報が間違っていたら、 ファイルを編集して保存し直してください。

第 1 章でも見かけたように、cargo new コマンドは、"Hello, world!"プログラムを生成してくれます。 src/main.rs ファイルをチェックしてみましょう:

ファイル名: src/main.rs

fn main() {
println!("Hello, world!");
}
さて、この"Hello, world!"プログラムをコンパイルし、cargo run コマンドを使用して、 以前と同じように動かしてみましょう:

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 1.50 secs
Running `target/debug/guessing_game`
Hello, world!
run コマンドは、プロジェクトに迅速に段階を踏んで取り掛かる必要がある場合に有用であり、 次のステップに進む前に各段階を急速にテストして、このゲームではそれを行います。

再度 src/main.rs ファイルを開きましょう。ここにすべてのコードを書いていきます。

予想を処理する
数当てプログラムの最初の部分は、ユーザに入力を求め、その入力を処理し、予期した形式になっていることを確認します。 手始めに、プレーヤーが予想を入力できるようにしましょう。 リスト 2-1 のコードを src/main.rs に入力してください。

ファイル名: src/main.rs

use std::io;

fn main() {
println!("Guess the number!"); // 数を当ててごらん

    println!("Please input your guess.");   // ほら、予想を入力してね

    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");     // 行の読み込みに失敗しました

    println!("You guessed: {}", guess);     // 次のように予想しました: {}

}
リスト 2-1: ユーザに予想を入力してもらい、それを出力するコード

注釈: The programming language Rust 第 1 版の翻訳者によると、 ソースコードのコメント中以外に日本語文字があるとコンパイルに失敗することがあるそうなので、文字列の英語は、コメントに和訳を載せます。 また、重複する内容の場合には、最初の 1 回だけ掲載するようにします。

このコードには、たくさんの情報が詰め込まれていますね。なので、行ごとに見ていきましょう。 ユーザ入力を受け付け、結果を出力するためには、io(入/出力)ライブラリをスコープに導入する必要があります。 io ライブラリは、標準ライブラリ(std として知られています)に存在します:

use std::io;
デフォルトでは、prelude に存在するいくつかの型のみ使えます。 もし、使用したい型が prelude にない場合は、use 文で明示的にその型をスコープに導入する必要があります。 std::io ライブラリを使用することで、ユーザ入力を受け付ける能力などの実用的な機能の多くを使用することができます。

第 1 章で見た通り、main 関数がプログラムへのエントリーポイント(脚注: スタート地点)になります:

fn main() {
fn 構文が関数を新しく宣言し、かっこの()は引数がないことを示し、波括弧の{が関数本体のスタート地点になります。

また、第 1 章で学んだように、println!は、文字列を画面に表示するマクロになります:

println!("Guess the number!");

println!("Please input your guess.");
このコードは、このゲームが何かを出力し、ユーザに入力を求めています。

値を変数に保持する
次に、ユーザ入力を保持する場所を作りましょう。こんな感じに:

let mut guess = String::new();
さあ、プログラムが面白くなってきましたね。このたった 1 行でいろんなことが起きています。 これが let 文であることに注目してください。これを使用して変数を生成しています。 こちらは、別の例です:

let foo = bar;
この行では、foo という名前の新しい変数を作成し、bar の値に束縛しています。 Rust では、変数は標準で不変(immutable)です。この概念について詳しくは、 第 3 章の「変数と可変性」節で議論します。以下の例には、 変数名の前に mut をつけて変数を可変にする方法が示されています:

let foo = 5; // immutable
let mut bar = 5; // mutable
注釈: //という記法は、行末まで続くコメントを記述します。 コンパイラは、コメントを一切無視し、これについても第 3 章で詳しく議論します。

数当てゲームのプログラムに戻りましょう。さあ、let mut guess が guess という名前の可変変数を導入するとわかりましたね。 イコール記号(=)の反対側には、変数 guess が束縛される値があります。この値は、 String::new 関数の呼び出し結果であり、この関数は、String 型のオブジェクトを返します。 String 型は、標準ライブラリによって提供される文字列型で、 サイズ可変、UTF-8 エンコードされたテキスト破片になります。

::new 行にある::という記法は、new が String 型の関連関数であることを表しています。 関連関数とは、String 型の特定のオブジェクトよりも型(この場合は String)に対して 実装された関数のことであり、静的(スタティック)メソッドと呼ばれる言語もあります。

この new 関数は、新しく空の文字列を生成します。new 関数は、いろんな型に見られます。 なぜなら、何らかの新規値を生成する関数にとってありふれた名前だからです。

まとめると、let mut guess = String::new();という行は、現在、新たに空の String オブジェクトに束縛されている 可変変数を作っているわけです。ふう！

プログラムの 1 行目で、use std::io として、標準ライブラリから入/出力機能を取り込んだことを思い出してください。 今度は、io 型の stdin 関連関数を呼び出しましょう:

io::stdin().read_line(&mut guess)
.expect("Failed to read line");
仮に、プログラムの冒頭で use std::io としていなければ、この関数呼び出しは、std::io::stdin と記述していたでしょう。 この stdin 関数は、 std::io::Stdin オブジェクトを返し、この型は、 ターミナルの標準入力へのハンドルを表す型になります。

その次のコード片、.read_line(&mut guess)は、標準入力ハンドルの read_line メソッドを呼び出して、ユーザから入力を受け付けます。また、read_line メソッドに対して、&mut guess という引数を一つ渡していますね。

read_line メソッドの仕事は、ユーザが標準入力したものすべてを取り出し、文字列に格納することなので、 格納する文字列を引数として取ります。この文字列引数は、可変である必要があります。 メソッドがユーザ入力を追記して、文字列の中身を変えられるようにということですね。

&という記号は、この引数が参照であることを表し、これのおかげで、データを複数回メモリにコピーせずとも、 コードの複数箇所で同じデータにアクセスできるようになるわけです。参照は複雑な機能であり、 とても安全かつ簡単に参照を使うことができることは、Rust の主要な利点の一つでもあります。 そのような詳細を知らなくても、このプログラムを完成させることはできます。 現時点では、変数のように、参照も標準で不変であることを知っておけばいいでしょう。 故に、&guess と書くのではなく、&mut guess と書いて、可変にする必要があるのです。 (第 4 章で参照についてより詳細に説明します)

Result 型で失敗の可能性を扱う
まだ、この行は終わりではありませんよ。ここまでに議論したのはテキストでは 1 行ですが、コードとしての論理行としては、 まだ所詮最初の部分でしかないのです。2 番目の部分はこのメソッドです:

.expect("Failed to read line");
.foo()という記法で、メソッドを呼び出す時、改行と空白で長い行を分割するのがしばしば賢明です。 今回の場合、こう書くこともできますよね:

io::stdin().read_line(&mut guess).expect("Failed to read line");
しかし、長い行は読みづらいものです。なので、分割しましょう: 2 回のメソッド呼び出しに、2 行です。 さて、この行が何をしているのかについて議論しましょうか。

以前にも述べたように、read_line メソッドは、渡された文字列にユーザが入力したものを入れ込むだけでなく、 値も返します(今回は io::Result です)。 Rust には Result と名のついた型が、 標準ライブラリにたくさんあります: 汎用の Result の他、 io::Result などのサブモジュール用に特化したものまで。

この Result 型は、列挙型であり、普通、enum(イーナム)と呼ばれます。 列挙型とは、固定された種類の値を持つ型のことであり、それらの値は、enum の列挙子(variant)と呼ばれます。 enum については、第 6 章で詳しく解説します。

Result 型に関しては、列挙子は Ok か Err です。Ok 列挙子は、処理が成功したことを表し、 中に生成された値を保持します。Err 列挙子は、処理が失敗したことを意味し、Err は、処理が失敗した過程や、 理由などの情報を保有します。

これら Result 型の目的は、エラー処理の情報をコード化することです。Result 型の値も、他の型同様、 メソッドが定義されています。io::Result オブジェクトには、呼び出し可能な expect メソッドがあります。 この io::Result オブジェクトが Err 値の場合、expect メソッドはプログラムをクラッシュさせ、 引数として渡されたメッセージを表示します。read_line メソッドが Err を返したら、 恐らく根底にある OS によるエラーに起因するのでしょう。 この io::Result オブジェクトが Ok 値の場合、expect メソッドは、Ok 列挙子が保持する 返り値を取り出して、ただその値を返すので、これを使用することができるでしょう。 今回の場合、その返り値とは、ユーザが標準入力に入力したデータのバイト数になります。

もし、expect メソッドを呼び出さなかったら、コンパイルは通るものの、警告が出るでしょう:

\$ cargo build
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
warning: unused `std::result::Result` which must be used
(警告: 使用されなければならない`std::result::Result`が使用されていません)
--> src/main.rs:10:5
|
10 | io::stdin().read_line(&mut guess);
| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
= note: #[warn(unused_must_use)] on by default
コンパイラは、私たちが read_line メソッドから返ってきた Result 値を使用していないと警告してきており、 これは、プログラムがエラーの可能性に対処していないことを示します。

警告を抑制する正しい手段は、実際にエラー対処コードを書くことですが、今は、 問題が起きた時にプロラグムをクラッシュさせたいので、expect を使用できるわけです。 エラーから復旧する方法については、第 9 章で学ぶでしょう。

println!マクロのプレースホルダーで値を出力する
閉じ波かっこを除けば、ここまでに追加されたコードのうち議論すべきものは、残り 1 行であり、それは以下の通りです:

println!("You guessed: {}", guess);
この行は、ユーザ入力を保存した文字列の中身を出力します。1 組の波括弧の{}は、プレースホルダーの役目を果たします: {}は値を所定の場所に保持する小さなカニのはさみと考えてください。波括弧を使って一つ以上の値を出力できます: 最初の波括弧の組は、フォーマット文字列の後に列挙された最初の値に対応し、 2 組目は、2 つ目の値、とそんな感じで続いていきます。1 回の println!の呼び出しで複数の値を出力するコードは、 以下のような感じになります:

let x = 5;
let y = 10;

println!("x = {} and y = {}", x, y);
このコードは、x = 5 and y = 10 と出力するでしょう.

最初の部分をテストする
数当てゲームの最初の部分をテストしてみましょう。cargo run でプログラムを走らせてください:

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 2.53 secs
Running `target/debug/guessing_game`
Guess the number!
Please input your guess.
6
You guessed: 6
ここまでで、ゲームの最初の部分は完成になります: キーボードからの入力を受け付け、出力できています。

秘密の数字を生成する
次に、ユーザが数当てに挑戦する秘密の数字を生成する必要があります。毎回この秘密の数字は、変わるべきです。 ゲームが何回も楽しめるようにですね。ゲームが難しくなりすぎないように、1 から 100 までの乱数を使用しましょう。 Rust の標準ライブラリには、乱数機能はまだ含まれていません。ですが、実は、 Rust の開発チームが rand クレートを用意してくれています。

クレートを使用して機能を追加する
クレートは Rust コードのパッケージであることを思い出してください。私たちがここまで作ってきたプロジェクトは、 バイナリクレートであり、これは実行可能形式になります。rand クレートはライブラリクレートであり、 他のプログラムで使用するためのコードが含まれています。

外部クレートを使用する部分は、Cargo がとても輝くところです。rand を使ったコードを書ける前に、 Cargo.toml ファイルを編集して、rand クレートを依存ファイルとして取り込む必要があります。 今このファイルを開いて、以下の行を Cargo が自動生成した[dependencies]セクションヘッダの一番下に追記しましょう:

ファイル名: Cargo.toml

[dependencies]

rand = "0.3.14"
Cargo.toml ファイルにおいて、ヘッダに続くものは全て、他のセクションが始まるまで続くセクションの一部になります。 [dependecies]セクションは、プロジェクトが依存する外部クレートと必要とするバージョンを記述するところです。 ここでは、rand クレートで、セマンティックバージョン指定子には 0.3.14 を指定します。Cargo は、 バージョンナンバー記述の標準規格であるセマンティックバージョニング (時に SemVer と呼ばれる)を理解します。 0.3.14 という数字は、実際には^0.3.14 の省略記法で、これは、「バージョン 0.3.14 と互換性のある公開 API を持つ任意のバージョン」を意味します。

さて、コードは一切変えずに、リスト 2-2 のようにプロジェクトをビルドしましょう。

\$ cargo build
Updating registry `https://github.com/rust-lang/crates.io-index` (レジストリを更新しています)
Downloading rand v0.3.14 (rand v0.3.14 をダウンロードしています)
Downloading libc v0.2.14 (libc v0.2.14 をダウンロードしています)
Compiling libc v0.2.14 (libc v0.2.14 をコンパイルしています)
Compiling rand v0.3.14 (rand v0.3.14 をコンパイルしています)
Compiling guessing_game v0.1.0 (file:///projects/guessing_game) (guessing_game v0.1.0 をコンパイルしています)
Finished dev [unoptimized + debuginfo] target(s) in 2.53 secs
リスト 2-2: rand クレートを依存として追加した後の cargo build コマンドの出力

もしかしたら、バージョンナンバーは違うかもしれません(でも、互換性はあります、SemVer のおかげでね！)。 そして、行の出力順序も違うかもしれません。

今や、外部依存を持つようになったので、Cargo はレジストリ(registry、登録所)から最新バージョンを拾ってきます。 レジストリとは、Crates.io のデータのコピーです。Crates.io とは、Rust のエコシステムにいる人間が、 他の人が使えるように自分のオープンソースの Rust プロジェクトを投稿する場所です。

レジストリの更新後、Cargo は[dependencies]セクションをチェックし、まだ取得していないクレートを全部ダウンロードします。 今回の場合、rand しか依存ファイルには列挙していませんが、Cargo は libc のコピーも拾ってきます。 rand クレートが libc に依存しているからですね。クレートのダウンロード完了後、コンパイラは依存ファイルをコンパイルし、 依存が利用可能な状態でプロジェクトをコンパイルします。

何も変更せず即座に cargo build コマンドを走らせたら、Finished 行を除いて何も出力されないでしょう。 Cargo は、既に全ての依存をダウンロードしてコンパイル済みであることも、 あなたが Cargo.toml ファイルを弄ってないことも知っているからです。さらに、Cargo はプログラマがコードを変更していないことも検知するので、 再度コンパイルすることもありません。することがないので、ただ単に終了します。

src/main.rs ファイルを開き、些細な変更をし、保存して再度ビルドを行えば、2 行だけ出力があるでしょう:

\$ cargo build
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 2.53 secs
これらの行は、Cargo が src/main.rs ファイルへの取るに足らない変更に対して、ビルドを更新していることを示しています。 依存は変更していないので、Cargo は、既にダウンロードしてコンパイルまで済ませてある依存を使用できると検知します。 自分で書いたコードのみ再ビルドをかけるわけです。

Cargo.lock ファイルで再現可能なビルドを保証する
Cargo は、プログラマが自分のコードを更新するたびに同じ生成物を再構成することを保証してくれるメカニズムを備えています: Cargo は、プログラマが示唆するまで、指定したバージョンの依存のみを使用します。 例として、rand クレートの次週のバージョン 0.3.15 が登場し、重要なバグ修正がなされているけれども、 自分のコードを破壊してしまう互換性破壊があった場合はどうなるでしょう？

この問題に対する回答は、Cargo.lock ファイルであり、このファイルは、初めて cargo build コマンドを 走らせた時に生成され、現在 guessing_game ディレクトリに存在しています。プロジェクトを初めてビルドする際に、 Cargo は判断基準(criteria)に合致するよう全ての依存のバージョンを計算し、Cargo.lock ファイルに記述します。 次にプロジェクトをビルドする際には、Cargo は Cargo.lock ファイルが存在することを確かめ、 再度バージョンの計算の作業を行うのではなく、そこに指定されているバージョンを使用します。 このことにより、自動的に再現可能なビルドを構成できるのです。つまり、明示的にアップグレードしない限り、 プロジェクトが使用するバージョンは 0.3.14 に保たれるのです。Cargo.lock ファイルのおかげでね。

クレートを更新して新バージョンを取得する
クレートを本当にアップグレードする必要が出てきたら、Cargo は別のコマンド(update)を提供します。 これは、Cargo.lock ファイルを無視して、Cargo.toml ファイル内の全ての指定に合致する最新バージョンを計算します。 それがうまくいったら、Cargo はそれらのバージョンを Cargo.lock ファイルに記述します。

しかし標準で Cargo は、0.3.0 より大きく、0.4.0 未満のバージョンのみを検索します。 rand クレートの新バージョンが 2 つリリースされていたら(0.3.15 と 0.4.0 だとします)、 cargo update コマンドを走らせた時に以下のようなメッセージを目の当たりにするでしょう:

\$ cargo update
Updating registry `https://github.com/rust-lang/crates.io-index`
(レジストリ`https://github.com/rust-lang/crates-io-index`を更新しています)
Updating rand v0.3.14 -> v0.3.15
(rand クレートを v0.3.14 -> v0.3.15 に更新しています)
この時点で、Cargo.lock ファイルに書かれている現在使用している rand クレートのバージョンが、 0.3.15 になっていることにも気付くでしょう。

rand のバージョン 0.4.0 または、0.4.x シリーズのどれかを使用したかったら、 代わりに Cargo.toml ファイルを以下のように更新しなければならないでしょう:

[dependencies]

rand = "0.4.0"
次回、cargo build コマンドを走らせたら、Cargo は利用可能なクレートのレジストリを更新し、 rand クレートの必要条件を指定した新しいバージョンに従って再評価します。

まだ第 14 章で議論する Cargo とそのエコシステムについては述べたいことが山ほどありますが、 とりあえずは、これで知っておくべきことは全てです。 Cargo のおかげでライブラリはとても簡単に再利用ができるので、 Rustacean は数多くのパッケージから構成された小規模のプロジェクトを書くことができるのです。

乱数を生成する
Cargo.toml に rand クレートを追加したので、rand クレートを使用開始しましょう。 次のステップは、リスト 2-3 のように src/main.rs ファイルを更新することです。

ファイル名: src/main.rs

extern crate rand;

use std::io;
use rand::Rng;

fn main() {
println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    println!("The secret number is: {}", secret_number);    //秘密の数字は次の通り: {}

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);

}
リスト 2-3: 乱数を生成するコードの追加

まず、コンパイラに rand クレートを外部依存として使用することを知らせる行を追加しています。 これにより、use rand を呼ぶのと同じ効果が得られるので、rand クレートのものを rand::という接頭辞をつけて呼び出せるようになりました。

次に、別の use 行を追加しています: use rand::Rng ですね。Rng トレイトは乱数生成器が実装するメソッドを定義していて、 このトレイトがスコープにないと、メソッドを使用できないのです。トレイトについて詳しくは、 第 10 章で解説します。

また、途中に 2 行追加もしています。rand::thread_rng 関数は、これから使う特定の乱数生成器を返してくれます: この乱数生成器は、実行スレッドに固有で、OS により、シード値を与えられています。 次に、この乱数生成器の gen_range メソッドを呼び出しています。このメソッドは、 use rand::Rng 文でスコープに導入した Rng トレイトで定義されています。gen_range メソッドは二つの数字を引数に取り、 それらの間の乱数を生成してくれます。範囲は下限値を含み、上限値を含まないため、1 と 101 と指定しないと 1 から 100 の範囲の数字は得られません。

注釈: 単純に使用すべきトレイトと、クレートからどのメソッドと関数を呼び出すか知っているわけではないでしょう。 クレートの使用方法は、各クレートのドキュメントにあります。Cargo の別の素晴らしい機能は、 cargo doc --open コマンドを走らせてローカルに存在する依存すべてのドキュメントをビルドし、ブラウザで閲覧できる機能です。 例えば、rand クレートの他の機能に興味があるなら、cargo doc --open コマンドを走らせて、 左側のサイドバーから rand をクリックしてください。

コードに追加した 2 行目は、秘密の数字を出力してくれます。これは、プログラムを開発中にはテストするのに役立ちますが、 最終版からは削除する予定です。プログラムがスタートと同時に答えを出力しちゃったら、ゲームになりませんからね！

試しに何回かプログラムを走らせてみてください:

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 2.53 secs
Running `target/debug/guessing_game`
Guess the number! (何回も出ているので、ここでは和訳は省略します)
The secret number is: 7
Please input your guess.
4
You guessed: 4
\$ cargo run
Running `target/debug/guessing_game`
Guess the number!
The secret number is: 83
Please input your guess.
5
You guessed: 5
毎回異なる乱数が出て、その数字はすべて 1 から 100 の範囲になるはずです。よくやりました！

予想と秘密の数字を比較する
今や、ユーザ入力と乱数生成ができるようになったので、比較することができますね。 このステップはリスト 2-4 に示されています。これから説明するように、このコードは現状ではコンパイルできないことに注意してください。

ファイル名: src/main.rs

extern crate rand;

use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {

    // ---snip---

    println!("You guessed: {}", guess);

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),       //小さすぎ！
        Ordering::Greater => println!("Too big!"),      //大きすぎ！
        Ordering::Equal => println!("You win!"),        //やったね！
    }

}
リスト 2-4: 2 値比較の可能性のある返り値を処理する

最初の新しい点は、別の use 文です。これで、std::cmp::Ordering という型を標準ライブラリからスコープに導入しています。 Result と同じく Ordering も enum です。ただ、Ordering の列挙子は、 Less、Greater、Equal です。これらは、2 値比較した時に発生しうる 3 種類の結果です。

match guess.cmp(&secret_number) {
Ordering::Less => println!("Too small!"),
Ordering::Greater => println!("Too big!"),
Ordering::Equal => println!("You win!"),
}
それから、一番下に新しく 5 行追加して Ordering 型を使用しています。cmp メソッドは、 2 値を比較し、比較できるものに対してなら何に対しても呼び出せます。このメソッドは、 比較したいものへの参照を取ります: ここでは、guess 変数と secret_number 変数を比較しています。 それからこのメソッドは use 文でスコープに導入した Ordering 列挙型の値を返します。 match 式を使用して、guess 変数と secret_number を cmp に渡して返ってきた Ordering の列挙子に基づき、 次の動作を決定しています。

match 式は、複数のアーム(腕)からできています。一つのアームは、 パターンとそのパターンに match 式の冒頭で与えた値がマッチした時に走るコードから構成されています。Rust は、 match に与えられた値を取り、各アームのパターンを順番に照合していきます。match 式とパターンは、 コードを書く際に出くわす様々なシチュエーションを表現させてくれ、 すべてのシチュエーションに対処していることを保証するのを手助けしてくれる Rust の強力な機能です。 これらの機能は、それぞれ、第 6 章と第 18 章で詳しく講義することにします。

ここで使われている match 式でどんなことが起こるかの例をじっくり観察してみましょう！例えば、 ユーザは 50 と予想し、ランダム生成された秘密の数字は今回、38 だったとしましょう。コードが 50 と 38 を比較すると、 cmp メソッドは Ordering::Greater を返します。50 は 38 よりも大きいからですね。 match 式に Ordering::Greater が与えられ、各アームのパターンを吟味し始めます。まず、 最初のアームのパターンと照合します(Ordering::Less ですね)。しかし、 値の Ordering::Greater と Ordering::Less はマッチしないため、このアームのコードは無視され、 次のアームに移ります。次のアームのパターン、Ordering::Greater は見事に Ordering::Greater とマッチします！ このアームに紐づけられたコードが実行され、画面に Too big!が表示されます。 これで match 式の実行は終わりになります。この筋書きでは、最後のアームと照合する必要はもうないからですね。

ところが、リスト 2-4 のコードは、まだコンパイルが通りません。試してみましょう:

\$ cargo build
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
error[E0308]: mismatched types (型が合いません)
--> src/main.rs:23:21
|
23 | match guess.cmp(&secret_number) {
| ^^^^^^^^^^^^^^ expected struct `std::string::String`, found integral variable
| (構造体`std::string::String`を予期したけど、整数型変数が見つかりました)
|
= note: expected type `&std::string::String`
= note: found type `&{integer}`

error: aborting due to previous error (先のエラーのため、処理を中断します)
Could not compile `guessing_game`. (`guessing_game`をコンパイルできませんでした)
このエラーの核は、型の不一致があると言っています。Rust には、強い静的型システムがあります。 しかし、型推論にも対応しています。let guess = String::new()と書いた時、コンパイラは、 guess が String 型であるはずと推論してくれ、その型を明示させられることはありませんでした。 一方で、secret_number 変数は、数値型です。1 から 100 を表すことができる数値型はいくつかあります: i32 は 32 ビットの数字; u32 は 32 ビットの非負数字; i64 は 64 ビットの数字などです。 Rust での標準は、i32 型であり、型情報をどこかに追加して、コンパイラに異なる数値型だと推論させない限り、 secret_number の型はこれになります。エラーの原因は、Rust では、文字列と数値型を比較できないことです。

究極的には、プログラムが入力として読み込む String 型を現実の数値型に変換し、 予想と数値として比較できるようにしたいわけです。これは、以下の 2 行を main 関数の本体に追記することでできます:

ファイル名: src/main.rs

// --snip--

    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = guess.trim().parse()
        .expect("Please type a number!");                 //数値を入力してください！

    println!("You guessed: {}", guess);

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }

}
その 2 行とは:

let guess: u32 = guess.trim().parse()
.expect("Please type a number!");
guess という名前の変数を生成しています。あれ、でも待って。もうプログラムには guess という名前の変数がありませんでしたっけ？ 確かにありますが、Rust では、新しい値で guess の値を覆い隠す(shadow)ことが許されているのです。 この機能は、値を別の型に変換したいシチュエーションでよく使われます。 シャドーイング(shadowing)のおかげで別々の変数を 2 つ作らされることなく、guess という変数名を再利用することができるのです。 guess_str と guess みたいなね(シャドーイングについては、第 3 章でもっと掘り下げます)。

guess を guess.trim().parse()という式に束縛しています。この式中の guess は、 入力が入った String 型の元々の guess を指しています。String オブジェクトの trim メソッドは、 両端の空白をすべて除去します。u32 型は、数字しか含むことができませんが、ユーザは、 read_line の処理を終えるためにエンターを押さなければなりません。 ユーザがエンターを押したら、改行文字が文字列に追加されます。 具体例として、ユーザが 5 を入力して、 エンターを押せば、guess は次のようになります: 5\n。 この\n が「改行」、つまりエンターキーを押した結果を表しているわけです。 trim メソッドは、\n を削除するので、ただの 5 になります。

文字列の parse メソッドは、文字列を解析して何らかの数値にします。 このメソッドは、いろんな数値型を解析できるので、let guess: u32 としてコンパイラに私たちが求めている型をズバリ示唆する必要があるのです。 guess の後のコロン(:)がコンパイラに変数の型を注釈する合図になります。 Rust には、組み込みの数値型がいくつかあります; ここの u32 型は、32 ビットの非負整数です。 u32 型は小さな非負整数のデフォルトの選択肢として丁度良いです。他の数値型については、第 3 章で学ぶでしょう。 付け加えると、このサンプルプログラムの u32 という注釈と secret_number 変数との比較は、 secret_number 変数も u32 型であるとコンパイラが推論することを意味します。 従って、今では比較が同じ型の 2 つの値で行われることになるわけです！

parse メソッドの呼び出しは、エラーになりやすいです。例としては、文字列が A👍%を含んでいたら、 数値に変換できるわけがありません。失敗する可能性があるので、parse メソッドは、 Result 型を返すわけです。ちょうど、(「Result 型で失敗する可能性に対処する」節で先ほど議論した)read_line メソッドのようにというわけですね。 今回も、expect メソッドを使用して Result 型を同じように扱います。この Result を expect メソッドを再度使用して、 同じように扱います。もし、文字列から数値を生成できなかったために、parse メソッドが Result 型の Err 列挙子を返したら、 expect メソッドの呼び出しは、ゲームをクラッシュさせ、与えたメッセージを表示します。 もし、parse メソッドが文字列の数値への変換に成功したら、Result 型の Ok 列挙子を返し、 expect メソッドは、Ok 値から必要な数値を返してくれます。

さあ、プログラムを走らせましょう！

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 0.43 secs
Running `target/debug/guessing_game`
Guess the number!
The secret number is: 58
Please input your guess.
76
You guessed: 76
Too big!
いいですね！予想の前にスペースを追加したにもかかわらず、プログラムはちゃんとユーザが 76 と予想したことを導き出しました。 プログラムを何回か走らせて、異なる入力の色々な振る舞いを確認してください: つまり、 数字を正しく言い当てたり、大きすぎる値を予想したり、小さすぎる数字を入力したりということです。

ここまでで大方ゲームはうまく動くようになりましたが、まだユーザは 1 回しか予想できません。 ループを追加して、その部分を変更しましょう！

ループで複数回の予想を可能にする
loop キーワードは、無限ループを作り出します。これを追加して、ユーザが何回も予想できるようにしましょう:

ファイル名: src/main.rs

// --snip--

    println!("The secret number is: {}", secret_number);

    loop {
        println!("Please input your guess.");

        // --snip--

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => println!("You win!"),
        }
    }

}
見てわかる通り、予想入力部分以降をループに入れ込みました。ループ内の行にインデントを追加するのを忘れないようにして、 またプログラムを走らせてみましょう。新たな問題が発生したことに注目してください。 プログラムが教えた通りに動作しているからですね: 永遠に予想入力を求めるわけです！ これでは、ユーザが終了できないようです！

ユーザは、ctrl-c というキーボードショートカットを使って、いつでもプログラムを強制終了させられます。 しかし、「予想と秘密の数字を比較する」節の parse メソッドに関する議論で触れたように、 この貪欲なモンスターを回避する別の方法があります: ユーザが数字以外の答えを入力すれば、プログラムはクラッシュするのです。 ユーザは、その利点を活かして、終了することができます。以下のようにですね:

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Finished dev [unoptimized + debuginfo] target(s) in 1.50 secs
Running `target/debug/guessing_game`
Guess the number!
The secret number is: 59
Please input your guess.
45
You guessed: 45
Too small!
Please input your guess.
60
You guessed: 60
Too big!
Please input your guess.
59
You guessed: 59
You win!
Please input your guess.
quit
thread 'main' panicked at 'Please type a number!: ParseIntError { kind: InvalidDigit }', src/libcore/result.rs:785
(スレッド'main'は'数字を入力してください！: ParseIntError { kind: InvalidDigit }', src/libcore/result.rs:785 でパニックしました)
note: Run with `RUST_BACKTRACE=1` for a backtrace.
(注釈: `RUST_BACKTRACE=1`で走らせるとバックトレースを見れます)
error: Process didn't exit successfully: `target/debug/guess` (exit code: 101)
(エラー: プロセスは予期なく終了しました)
quit と入力すれば、実際にゲームを終了できるわけですが、別に他の数字以外の入力でもそうなります。 しかしながら、これは最低限度と言えるでしょう。正しい数字が予想されたら、自動的にゲームが停止してほしいわけです。

正しい予想をした後に終了する
break 文を追加して、ユーザが勝った時にゲームが終了するようにプログラムしましょう:

ファイル名: src/main.rs

// --snip--

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }

}
break 文の 1 行を You win!の後に追記することで、ユーザが秘密の数字を正確に予想した時に、 プログラムはループを抜けるようになりました。ついでに、ループを抜けることは、プログラムを終了することを意味します。 ループが main 関数の最後の部分だからですね。

不正な入力を処理する
さらにゲームの振る舞いを改善するために、ユーザが数値以外を入力した時にプログラムをクラッシュさせるのではなく、 非数値を無視してユーザが数当てを続けられるようにしましょう！これは、 guess が String 型から u32 型に変換される行を改変することで達成できます。リスト 2-5 のようにですね。

ファイル名: src/main.rs

// --snip--

io::stdin().read_line(&mut guess)
.expect("Failed to read line");

let guess: u32 = match guess.trim().parse() {
Ok(num) => num,
Err(\_) => continue,
};

println!("You guessed: {}", guess);

// --snip--
リスト 2-5: 非数値の予想を無視し、プログラムをクラッシュさせるのではなく、もう 1 回予想してもらう

expect メソッドの呼び出しから match 式に切り替えることは、 エラーでクラッシュする動作からエラー処理を行う処理に変更する一般的な手段になります。parse メソッドは、 Result 型を返し、Result は Ok か Err の列挙子を取りうる列挙型であることを思い出してください。 ここでは match 式を使っています。cmp メソッドの Ordering という結果のような感じですね。

parse メソッドは、文字列から数値への変換に成功したら、結果の数値を保持する Ok 値を返します。 この Ok 値は、最初のアームのパターンにマッチし、この match 式は parse メソッドが生成し、 Ok 値に格納した num の値を返すだけです。その数値が最終的に、生成している新しい guess 変数として欲しい場所に存在します。

parse メソッドは、文字列から数値への変換に失敗したら、エラーに関する情報を多く含む Err 値を返します。 この Err 値は、最初の match アームの Ok(num)というパターンにはマッチしないものの、 2 番目のアームの Err(*)というパターンにはマッチするわけです。この*は、包括値です; この例では、 保持している情報がどんなものでもいいから全ての Err 値にマッチさせたいと宣言しています。 従って、プログラムは 2 番目のアームのコードを実行し(continue ですね)、これは、 loop の次のステップに移り、再度予想入力を求めるようプログラムに指示します。故に実質的には、 プログラムは parse メソッドが遭遇しうる全てのエラーを無視するようになります！

さて、プログラムの全てがうまく予想通りに動くはずです。試しましょう:

\$ cargo run
Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
Running `target/debug/guessing_game`
Guess the number!
The secret number is: 61
Please input your guess.
10
You guessed: 10
Too small!
Please input your guess.
99
You guessed: 99
Too big!
Please input your guess.
foo
Please input your guess.
61
You guessed: 61
You win!
素晴らしい！最後にひとつまみ変更を加えて、数当てゲームを完了にしましょう。 プログラムが未だに秘密の数字を出力していることを思い出してください。テスト中はうまく動くけど、 ゲームを台無しにしてしまいます。秘密の数字を出力する println!を削除しましょう。 リスト 2-6 が成果物のコードです:

ファイル名: src/main.rs

extern crate rand;

use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }

}
リスト 2-6: 数当てゲームの完全なコード

まとめ
ここまでで、数当てゲームの構築に成功しました。おめでとうございます！

このプロジェクトは、たくさんの新しい Rust の概念に触れる実践的な方法でした: let、match、メソッド、関連関数、外部クレートの使用などなど。 以降の数章で、これらの概念についてより深く学ぶことになるでしょう。 第 3 章では、ほとんどのプログラミング言語に存在する、変数、データ型、関数などの概念について講義し、 それらの Rust での使用方法について示します。 第 4 章では、所有権について見ます。これにより、Rust は他の言語とかけ離れた存在になっています。 第 5 章では、構造体とメソッド記法について議論し、第 6 章では enum の動作法を説明します。
