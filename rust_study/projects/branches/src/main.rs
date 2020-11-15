fn main() {
    let number = 3;
    is_greater_than_five(number);
    let number = 7;
    is_greater_than_five(number);

    let condition = true;
    five_or_six(condition);
    assert_eq!(five_or_six(condition),5);
    let condition = false;
    assert_eq!(five_or_six(condition),6);
}

fn is_greater_than_five(number:i32) -> bool {
    if number < 5 {
        println!("condition was true");
        return true;
    } else {
        println!("condition was false");
        return false;
    }
}

fn five_or_six(is_five:bool)->i32{
    let number = if is_five {
        5
    } else{
        6
    };

    println!("The value of number is: {}",number);
    return number;
}
