fn main(){
    println!("Hello, world!");

    // 変数束縛
    let _x = 5;

    // パターン
    let (_x,_y) = (1,2);

    // 型アノテーション
    let _x: i32 = 5;

    // 可変性

    // エラー
    // let x = 5;
    // x = 10;

    let mut _x = 5;  // mut x: i32
    _x = 10;

    // 束縛を初期化する
    let _x:i32;
    println!("Hello, world!");
}
