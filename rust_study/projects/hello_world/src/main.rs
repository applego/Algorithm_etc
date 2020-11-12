fn main(){
    println!("Hello, world!");

    // 変数束縛
    let _x1 = 5;

    // パターン
    let (_x2,_y2) = (1,2);

    // 型アノテーション
    let _x3: i32 = 5;

    // 可変性

    // エラー
    // let x = 5;
    // x = 10;

    let mut _x4 = 5;  // mut x: i32
    _x4 = 10;

    // 束縛を初期化する
    let _x5:i32;
    // println!("The value of _x5 is: {}",_x5);
    //                                 ^ use of possibly-uninitialized `_x5`

    // スコープとシャドーイング
    let x6 : i32 = 17;
    {
        let y6:i32 = 3;
        println!("The value of x6 is {} and value of y6 is {}",x6, y6);
    }
    // println!("The value of x6 is {} and value of y6 is {}",x6, y6);
                                                    // cannot find value `y6` in this scope
    let x7:i32 = 8;
    {
        println!("{}",x7);// "8"を印字する
        let x7=12;
        println!("{}",x7);// "12"を印字する
    }
    println!("{}",x7); // "8"印字する
    let x7=42;
    println!("{}",x7); // "42"を印字する

    let mut x8:i32 = 1;
    println!("x8:{}",x8);
    x8=7;
    println!("x8:{}",x8);
    let _x8=x8; // x8はイミュータブルになって7に束縛されました
    println!("x8:{}",x8);

    let _y8 = 4;
    let _y8 = "I can also be boud to text!"; // yは違う型になりました
}
