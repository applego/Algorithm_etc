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
    let does_not_exist = &v[100];
    let does_not_exist = v.get(100);

    //同一スコープ上では、
    //可変と不変な参照を同時には存在させられないというルールを思い出してください。
    let mut v = vec![1, 2, 3, 4, 5];
    let first = &v[0];
    v.push(6);
    println!("The first element is: {}", first);
}
