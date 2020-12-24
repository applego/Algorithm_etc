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

fn largest<T>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest_i32(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest_char(&char_list);
    println!("The largest char is {}", result);

    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest(&char_list);
    println!("The largest char is {}", result);
}
