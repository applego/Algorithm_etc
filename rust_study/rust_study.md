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
