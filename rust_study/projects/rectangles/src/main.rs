#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
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
        rect1.area()
    );

    println!("rect1.width: {}", rect1.width);

    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };

    //rect1にrect2ははまり込む?
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}

// fn area(rectangle: &Rectangle) -> u32 {
//     rectangle.width * rectangle.height
// }
