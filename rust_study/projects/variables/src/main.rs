fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);

    // 変数と定数(constants)の違い
    const MAX_POINTS: u32 = 100_000;

    // シャドーイング
    let x2 = 5;
    let x2 = x2 + 1;
    let x2 = x2 * 2;
    println!("The value of x2 is: {}", x2);

    let spaces = "   ";
    println!("The value of spaces is: {}", spaces);
    let spaces = spaces.len();
    println!("The value of spaces is: {}", spaces);

    // let mut spaces_ng = "   ";
    // spaces_ng = spaces.len();// これはできない
}
