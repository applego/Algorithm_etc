fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);

    // 変数と定数(constants)の違い
    const MAX_POINTS: u32 = 100_000;
    println!("The value of MAX_POINTS is:{}",MAX_POINTS);

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

    // データ型
    let _guess: u32 = "42".parse().expect("Not a number!");

    //　スカラー型

    // 浮動小数点型
    let _x3 = 2.0; // f64
    let _y: f32 = 3.0; // f32

    // 数値演算
    let _sum = 5 + 10;

    let _difference = 95.5 - 4.3;

    let _product = 4 * 30;

    let _quotient = 56.7 / 32.2;

    let _remainder = 43 % 5;

    // 論理値型
    let _t = true;

    let _f: bool = false; // 明示的型注釈付きで

    // 複合型
    // タプル型
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x_tup, y_tup, z_tup) = tup;
    println!("The value of x_tup is :{}", x_tup);
    println!("The value of y_tup is :{}", y_tup);
    println!("The value of z_tup is :{}", z_tup);

    let _x: (i32, f64, u8) = (500, 6.4, 1);
    let _five_hundred = _x.0;
    let _six_point_four = _x.1;
    let _one = _x.2;

    // 配列型
    /*
     配列によっても、複数の値のコレクションを得ることができます。
     タプルと異なり、配列の全要素は、 同じ型でなければなりません。
     Rustの配列は、他の言語と異なっています。Rustの配列は、 固定長なのです:
      一度宣言されたら、サイズを伸ばすことも縮めることもできません。
    */
    let a = [1, 2, 3, 4, 5];
    let first = a[0];
    let second = a[1];
    println!("The value of first is: {}",first);
    println!("The value of second is: {}",second);

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    for n in 0..months.len(){
        println!("The value of months[n] is: {}",months[n]);
    }


    let index = 4;
    let element = a[index];
    println!("The value of element is:{}", element);
}
