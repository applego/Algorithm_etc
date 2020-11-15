fn main() {
    another_function(5,6);

    //expected expression, found statement (`let`)
    // let x = (let y=6);

    // 関数本体は、文と式を含む
    let x =5;
    let y = {
        let x=3;
        x+1
    };

    println!("The value fo y is: {}",y);

    // 戻り値のある関数
    let x = five();
    println!("The value fo x is: {}",x);

    let x = plus_one(5);
    println!("The value fo x is: {}",x);
}

fn another_function(x:i32,y:i32){
    println!("The value of x is:{}",x);
    println!("The value of y is:{}",y);
}

fn five() -> i32{
    5
}

fn plus_one(x:i32)-> i32{
    x + 1
    // x + 1; これはエラーになる
}
