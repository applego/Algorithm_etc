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

    // 参照と借用
    references_and_borrow();
    /*
    これらのアンド記号が参照であり、
    これのおかげで所有権をもらうことなく値を参照することができるのです。 図4-5はその図解です。
     */

    borrow_de_nanika_wo_henkousiyoutositara();

    //ダングリング参照を阻止
    let reference_to_nothing = dangle();
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

fn references_and_borrow() {
    let s1 = String::from("hello");

    let len = calculate_length_ref(&s1);

    // '{}'の長さは、{}です
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length_ref(s: &String) -> usize {
    // sはStringへの参照
    s.len()
} // ここで、sはスコープ外になる。けど、参照しているものの所有権を持っているわけではないので
  //  何も起こらない

fn borrow_de_nanika_wo_henkousiyoutositara() {
    let s = String::from("hello");

    change(&s);

    // (エラー: 一度に`s`を可変として2回以上借用することはできません) のはずだがコンパイル通るっぽい?
    let mut s2 = String::from("hello");

    let r1 = &mut s2;
    let r2 = &mut s2;

    let mut s3 = String::from("hello");
    {
        let r3 = &mut s3;
    } // r3はここでスコープを抜けるので、問題なく新しい参照を作ることができる
    let r4 = &mut s3;

    let mut s4 = String::from("hello4");

    let r5 = &s4; // 問題なし
    let r6 = &s4; // 問題なし
    let r7 = &mut s4; // 大問題!

    println!("{}", r7);
}

fn change(some_string: &String) {
    // some_string.push_str(", world");
    /*
        cannot borrow immutable borrowed content `*some_string` as mutable
    (エラー: 不変な借用をした中身`*some_string`を可変で借用できません)
         */
}

fn dangle() -> String {
    //解決策 ↑

    //&String {
    // expected named lifetime parameter
    let s = String::from("hello");

    // &s
    s // 解決策
}
