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
