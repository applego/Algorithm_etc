fn main() {
    let number = 3;
    is_greater_than_five(number);
    let number = 7;
    is_greater_than_five(number);

    let condition = true;
    five_or_six(condition);
    assert_eq!(five_or_six(condition), 5);
    let condition = false;
    assert_eq!(five_or_six(condition), 6);

    // ループでの繰り返し
    loop {
        println!("again!");
        break;
    }

    let mut number = 3;
    while number != 0 {
        println!("{}!", number);
        number = number - 1;
    }
    println!("LIFTOFF!!!");

    // 添字の長さが間違っていたら、エラーが発生するし、コンパイラが字工事ループの各回ごとに境界値チェックを行うようなコードを追加するから遅い！
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("the value is: {}", a[index]);
        index = index + 1;
    }

    // よ理効率的な対立案
    for element in a.iter() {
        println!("the value is: {}", element);
    }

    // 添字を変化させたいときも
    for number in (1..4).rev() {
        println!("the value is: {}", number);
    }
    println!("LIFTOFF!!!");

    matome_no_kadai();
}

fn is_greater_than_five(number: i32) -> bool {
    if number < 5 {
        println!("condition was true");
        return true;
    } else {
        println!("condition was false");
        return false;
    }
}

fn five_or_six(is_five: bool) -> i32 {
    let number = if is_five { 5 } else { 6 };

    println!("The value of number is: {}", number);
    return number;
}

fn matome_no_kadai() {
    kadai_1();

    kadai_2();

    kadai_3();
}

fn kadai_1() {
    // 摂氏と華氏を変換
    let sessi: f64 = 0.0;
    println!("摂氏 {}℃ = {}", sessi, sessi_to_kashi(sessi));
    let sessi: f64 = 15.0;
    println!("摂氏 {}℃ = {}", sessi, sessi_to_kashi(sessi));

    let kashi: f64 = 0.0;
    println!("華氏 {}°F = {}", kashi, kashi_to_sessi(kashi));
    let kashi: f64 = 59.0;
    println!("華氏 {}(°F = {}", kashi, kashi_to_sessi(kashi));
}

fn kashi_to_sessi(kashi: f64) -> f64 {
    (kashi - 32 as f64) / 1.8000
}

fn sessi_to_kashi(sessi: f64) -> f64 {
    (sessi * 1.8000) + 32 as f64
}

fn kadai_2() {
    // フィボナッチ数列のn番目
    let mut fibonacci_nth: i32;
    for n in -1..40 {
        fibonacci_nth = get_fibonacci_nth(n);
        println!("n:{} => fibonacci_nth:{}", n, fibonacci_nth);
    }
}

fn get_fibonacci_nth(n: i32) -> i32 {
    if n < 0 {
        return 0;
    } else if n == 1 || n == 2 {
        return 1;
    } else {
        return get_fibonacci_nth(n - 1) + get_fibonacci_nth(n - 2);
    }
}

fn kadai_3() {
    let n_ths = [
        "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth",
        "tenth", "eleventh", "twelfth",
    ];
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    // let tup:(i32,String,String,String) =
}
