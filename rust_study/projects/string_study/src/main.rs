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

    //リスト8-15: push_strメソッドでStringに文字列スライスを追記する
    let mut s = String::from("foo");
    s.push_str("bar");

    // リスト8-16: 中身をStringに追加した後に、文字列スライスを使用する
    /*
    もし、push_strメソッドがs2の所有権を奪っていたら、最後の行でその値を出力することは不可能でしょう。 ところが、このコードは予想通りに動きます！
        → push_strメソッドは必ずしも引数の所有権を得なくていいので、文字列スライスを取ります。
         */
    let mut s1 = String::from("foo");
    let s2 = "bar";
    s1.push_str(s2);
    println!("s2 is {}", s2);

    // リスト8-17: pushでString値に1文字を追加する
    let mut s = String::from("lo");
    s.push('l');

    // リスト8-18: +演算子を使用して二つのString値を新しいString値にする
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // s1はムーブされ、もう使用できないことに注意
                       // +演算子イコール fn add(self, s: &str) -> String {
}
