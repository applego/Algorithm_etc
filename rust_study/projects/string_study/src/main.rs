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
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    let s = s1 + "-" + &s2 + "-" + &s3;

    // format!を使用したコードの方がはるかに読みやすく、 引数の所有権を奪いません。
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");
    let s = format!("{}-{}-{}", s1, s2, s3);

    // リスト8-19: 文字列に対して添え字記法を試みる
    let s1 = String::from("hello");
    // let h = s1[0];
    //　!       `std::string::String` cannot be indexed by `{integer}`

    // 内部表現
    // StringはVec<u8>のラッパ
    let len = String::from("Hola").len();
    // この場合、lenは4になり、これは、文字列”Hola"を保持するベクタの長さが4バイトであることを意味します。
    // これらの各文字は、UTF-8でエンコードすると、１バイトになるのです。

    let len = String::from("Здравствуйте").len();
    // UTF-8でエンコードすると、24になる。書くUnicodeスカラー値は、２バイトの領域を取るから。

    let hello = "Здравствуйте";
    // let answer = &hello[0];
    //　! UTF-8エンコードされた時、3の最初のバイトは208、２番めは151になるので、answerは実際、208に
    //　! なるべきですが、208は単独では有効な文字でッハありません。
    //　! Rusthaこのコードを全くコンパイルせず、開発過程の早い段階で誤解を防いでくれるのです。

    let hello = "Здравствуйте";
    let s = &hello[0..4];

    // let ss = &hello[0..1];
    //thread 'main' panicked at 'byte index 1 is not a char boundary; it is inside 'З' (bytes 0..2) of `Здравствуйте`', /Users/tokoshige_mac/.rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/src/rust/src/libcore/str/mod.rs:1942:47

    // 文字列を走査するメソッド郡

    //もし、個々のUnicodeスカラー値に対して処理を行う必要があったら、最適な方法はcharsメソッドを使用するものです。
    for c in "नमस्ते".chars() {
        println!("{}", c);
    }

    // bytesメソッドは、各バイトをそのまま帰すので、最適になることもあるかもしれません
    for b in "नमस्ते".bytes() {
        println!("{}", b);
    }

    // 新規ハッシュマップを作成する
    use std::collections::HashMap;

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let teams = vec![String::from("Blue"), String::from("Yellow")];
    let initial_scores = vec![10, 50];

    let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();

    // # ハッシュマップと所有権
    // i32のようなCopyトレイトを実装する方について、値はハッシュマップにコピーされます。
    // Stringのような所有権のある値なら、値はムーブされ、リスト8-22でデモされているように、
    // ハッシュマップっはそれらの値の所有者になるでしょう。

    // use std::collections::HashMap;
    let field_name = String::from("Favorite color");
    let field_value = String::from("Blue");

    let mut map = HashMap::new();
    map.insert(field_name, field_value);
    // println!("{}", field_name);
    //borrow of moved value: `field_value`
    // println!("{}", field_value);
    //borrow of moved value: `field_value`

    // # ハッシュマップの値にアクセスする
    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let team_name = String::from("Blue");
    let score = scores.get(&team_name); //* 戻り値の型はOption<&V>
                                        // ベクタのように、forループでハッシュマップのキーと値のペアを走査することができる
    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }

    // # ハッシュマップを更新する
    // ## 値を上書きする
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Blue"), 25);
    println!("{:?}", scores);
    // ## キーに値がなかったときのみ値を挿入する
    scores.entry(String::from("Yellow")).or_insert(50);
    scores.entry(String::from("Blue")).or_insert(50); // Blueはいるのでinsertされない
    println!("{:?}", scores);
    // ## 古い値に基づいて値を更新する
    let text = "hello world wonderful world";
    let mut map = HashMap::new();
    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1; // * or_insert関数は実際、このキーに対する値への可変参照(&mut V)を返す
                     // * ここでその可変参照をcount変数にっ保持しているので、その値に代入数rには、まずアスタリスク*でcountを参照外ししなければならない。
                     // * この可変参照は、forループの終端でスコープを抜けるので、これらの変更はすべて安全であり、借用規則により許可されるのです。
    }
    println!("{:?}", map);
    // ## ハッシュ関数
}
