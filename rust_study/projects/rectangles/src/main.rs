#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    // let width1 = 30;
    // let height1 = 50;

    // let rect1 = (30, 50);

    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    // println!("rect1 is {}", rect1);
    // `Rectangle` doesn't implement `std::fmt::Display`
    // `Rectangle` cannot be formatted with the default formatter

    // println!("rect1 is {:?}", rect1);
    // `Rectangle` doesn't implement `std::fmt::Debug`
    // `Rectangle` cannot be formatted using `{:?}`

    // #[derive(Debug)]を先頭に付ける →　OK

    println!("rect1 is {:?}", rect1);

    println!(
        // 長方形の面積は、｛｝平方ピクセルです
        "The area of rectangle is {} aquare pixels.",
        area(&rect1)
    );

    println!("rect1.width: {}", rect1.width);
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}
