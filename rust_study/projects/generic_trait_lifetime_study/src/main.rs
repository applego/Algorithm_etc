/*
重複したコードを見分ける。
重複コードを関数本体に抽出し、コードの入力と戻り値を関数シグニチャで指定する。
重複したコードの2つの実体を代わりに関数を呼び出すように更新する。

次は、この同じ手順をジェネリクスでも踏んで異なる方法でコードの重複を減らします。 関数本体が特定の値ではなく抽象的なlistに対して処理できたのと同様に、 ジェネリクスは抽象的な型に対して処理するコードを可能にしてくれます。
例えば、関数が2つあるとしましょう: 1つはi32値のスライスから最大の要素を探し、1つはchar値のスライスから最大要素を探します。 この重複はどう排除するのでしょうか？答えを見つけましょう！
*/

fn largest_i32(list: &[i32]) -> i32 {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn largest_char(list: &[char]) -> char {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// fn largest<T>(list: &[T]) -> T {
//     let mut largest = list[0];

//     for &item in list.iter() {
//         if item > largest {
//             largest = item;
//         }
//     }
//     largest
// }

struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

// リスト10-10: ジェネリックな型引数Tに対して特定の具体的な型がある構造体にのみ適用されるimplブロック
impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

// fn main() {
//     let p = Point { x: 5, y: 10 };

//     println!("p.x = {}", p.x());
// }

// リスト10-11: 構造体定義とは異なるジェネリックな型を使用するメソッド

struct Point2<T, U> {
    x: T,
    y: U,
}

// リスト10-11: 構造体定義とは異なるジェネリックな型を使用するメソッド
impl<T, U> Point2<T, U> {
    fn mixup<V, W>(self, other: Point2<V, W>) -> Point2<T, W> {
        Point2 {
            x: self.x,
            y: other.y,
        }
    }
}

fn main() {
    let p1 = Point2 { x: 5, y: 10.4 };
    let p2 = Point2 { x: "Hello", y: 'c' };

    let p3 = p1.mixup(p2);

    println!("p3.x = {}, p3.y = {}", p3.x, p3.y); //5 'c'

    let integer = Some(5);
    let float = Some(5.0);
    // 単相化
    let integer = Option_i32::Some(5);
    let float = Option_f64::Some(5.0);
}

// 単相化されたバージョンのコードは、以下のようになる
enum Option_i32 {
    Some(i32),
    None,
}

enum Option_f64 {
    Some(f64),
    None,
}

enum Option<T> {
    Some(T),
    None,
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}

// fn main() {
//     let integer = Point { x: 5, y: 10 };
//     let float = Point { x: 1.0, y: 4.0 };

//     let wont_work = Point2 { x: 5, y: 4.0 }; //* Tは同じ型の必要がある
// }

// fn main() {
//     let number_list = vec![34, 50, 25, 100, 65];

//     let result = largest_i32(&number_list);
//     println!("The largest number is {}", result);

//     let char_list = vec!['y', 'm', 'a', 'q'];

//     let result = largest_char(&char_list);
//     println!("The largest char is {}", result);

//     let result = largest(&number_list);
//     println!("The largest number is {}", result);

//     let char_list = vec!['y', 'm', 'a', 'q'];

//     let result = largest(&char_list);
//     println!("The largest char is {}", result);
// }
