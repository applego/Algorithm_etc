fn main() {
    // 所有権と関数
    shoyuuken_to_kannsuu();

    // 戻り値とスコープ
    return_and_scope();

    // 引数の所有権を返す
    return_tuples();
    /*
    でも、これでは、大袈裟すぎますし、ありふれているはずの概念に対して、作業量が多すぎます。
    私たちにとって幸運なことに、Rustにはこの概念に対する機能があり、参照と呼ばれます。
     */
}

fn shoyuuken_to_kannsuu() {
    // 所有権と関数
    let s = String::from("hello"); // sがスコープに入る

    takes_ownership(s); // sの値が関数にムーブされ...
                        // ... ここではもう有効ではない
                        // println!("{}",s);

    let x = 5;

    makes_copy(x); // xも関数にムーブされるが、
                   // i32はCopyなので、この後にxを使っても
                   // 大丈夫
} // ここでxがスコープを抜け、sもスコープを抜ける.ただしsの値はムーブされているので、何も特別なことは起こらない

fn takes_ownership(some_string: String) {
    // some_string がスコープに入る
    println!("{}", some_string);
} // ここでsome_stringがスコープを抜け、`drop`が呼ばれる。後ろ盾してたメモリが開放される。

fn makes_copy(some_integer: i32) {
    // some_integerがスコープに入る
    println!("{}", some_integer);
} // ここでsome_integerがスコープを抜ける。なにも特別なことはない。

// 戻り値とスコープ
fn return_and_scope() {
    let s1 = gives_ownership(); // gives_ownershipは、戻り値をs1にムーブする

    let s2 = String::from("hello"); // s2がスコープに入る

    let s3 = takes_and_gives_back(s2); // s2はtakes_and_gives_backにムーブされ
                                       // 戻り値もs3にムーブされる
} // ここで、s3はスコープを抜け、ドロップされる。s2もスコープを抜けるが、ムーブされているので、
  // 何も起きない。s1もスコープを抜け、ドロップされる。

fn gives_ownership() -> String {
    // gives_ownershipは、戻り値を
    // 呼び出した関数にムーブする
    let some_string = String::from("hello"); // some_stringがスコープに入る

    some_string // some_stringが返され、呼び出し元関数に
                // ムーブされる
}

// takes_and_gives_backは、Stringを一つ受け取り、返す。
fn takes_and_gives_back(a_string: String) -> String {
    // a_stringがスコープに入る。

    a_string // a_stringが返され、呼び出し元関数にムーブされる
}

// 引数の所有権を返す
fn return_tuples() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    //'{}'の長さは、{}です
    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len()メソッドは、Stringの長さを返します

    (s, length)
}
