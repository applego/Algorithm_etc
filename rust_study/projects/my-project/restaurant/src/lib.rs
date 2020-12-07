#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}

        fn sead_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}

//use でモジュールをスコープに持ち込む
// use crate::front_of_house::hosting;
// モジュールをuseと相対パスを使ってスコープに持ち込む
use self::front_of_house::hosting;
// add_to_waitlist 関数をuseスコープで持ち込む。このやりかたは慣例的ではない
use crate::front_of_house::hosting::add_to_waitlist;

pub fn eat_at_restaurant() {
    // Absolute path
    // 絶対パス
    // crate::front_of_house::hosting::add_to_waitlist();
    //* ↓ useでモジュールをスコープに持ち込む
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();

    // 慣例的ではない
    add_to_waitlist();

    // Relative path
    // 相対パス
    front_of_house::hosting::add_to_waitlist();

    // Order a breakfast in the summer with Rye toast
    let mut meal = back_of_house::Breakfast::summer("Rye");
    // Change our mid about what bread we'd like
    meal.toast = String::from("wheat");
    println!("I'd like {} toast please", meal.toast);

    // The next line wont't compile if we uncomment it; we're not allowed
    // to see or modify the seasonal fruit that comes with the meal
    // meal.seasonal_fruit = String::from("blueberries");

    // pub enum
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}

fn serve_order() {}

mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }

    fn fix_incorrent_order() {
        cook_order();
        super::serve_order();
    }

    fn cook_order() {}

    // enumを公開に指定することはそのヴァリアントをすべて公開にする
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

// 同じ名前を持つ２つのお型を同じスコープに持ち込むには親モジュールを使わないといけない
use std::fmt;
use std::io;

fn function1()-> fmt::Result{
    // --snip--
    // (略)
}

fn function2()-> io::Result<()>{
    // --snip--
}
