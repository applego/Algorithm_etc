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
