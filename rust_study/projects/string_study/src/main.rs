fn main() {
    println!("Hello, world!");

    //リスト8-11: 新しい空のStringを生成する
    let mut s = String::new();

    //リスト8-12: to_stringメソッドを使用して文字列リテラルからStringを生成する
    let data = "initial contents";

    let s = data.to_string();

    // the method also works on a literal directly:
    let s = "initial contents".to_string();

    //リスト8-13: String::from関数を使って文字列リテラルからStringを作る
    let s = String::from("initial contents");

    // リスト8-14: いろんな言語の挨拶を文字列に保持する
    let hello = String::from("السلام عليكم");
    let hello = String::from("Dobrý den");
    let hello = String::from("Hello");
    let hello = String::from("שָׁלוֹם");
    let hello = String::from("नमस्ते");
    let hello = String::from("こんにちは");
    let hello = String::from("안녕하세요");
    let hello = String::from("你好");
    let hello = String::from("Olá");
    let hello = String::from("Здравствуйте");
    let hello = String::from("Hola");
}
