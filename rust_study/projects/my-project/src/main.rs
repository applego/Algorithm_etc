use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(1, 2);

    // ベクタで一連の値を保持する
    let v: Vec<i32> = Vec::new();
    println!("{:?}", v);
    let v = vec![1, 2, 3];
    println!("{:?}", v);

    let mut v = Vec::new();
    v.push(5);
    v.push(6);
    v.push(7);
    v.push(8);
    println!("{:?}", v);

    // リスト8-5: 添字記法かgetメソッドを使用してベクタの要素にアクセスする
    let v = vec![1, 2, 3, 4, 5];
    let third: &i32 = &v[2];
    let third: Option<&i32> = v.get(2);

    // リスト8-6: 5つの要素を含むベクタの添え字100の要素にアクセスしようとする
    // let does_not_exist = &v[100];
    let does_not_exist = v.get(100);

    //同一スコープ上では、
    //可変と不変な参照を同時には存在させられないというルールを思い出してください。

    // error[E0502]: cannot borrow `v` as mutable because it is also borrowed as immutable
    //   --> src/main.rs:33:5
    //    |
    // 32 |     let first = &v[0];
    //    |                  - immutable borrow occurs here
    // 33 |     v.push(6);
    //    |     ^^^^^^^^^ mutable borrow occurs here
    // 34 |     println!("The first element is: {}", first);
    //    |                                          ----- immutable borrow later used here

    // let mut v = vec![1, 2, 3, 4, 5];
    // let first = &v[0];
    // v.push(6);
    // println!("The first element is: {}", first);

    // リスト8-8: forループで要素を走査し、ベクタの要素を出力する
    let v = vec![100, 32, 57];
    for i in &v {
        println!("{}", i);
    }

    // リスト8-9: ベクタの要素への可変な参照を走査する
    let mut v = vec![100, 32, 57];
    for i in &mut v {
        *i += 50;
    }

    // リスト8-10: enumを定義して、一つのベクタに異なる型の値を保持する
    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];
}

enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}
