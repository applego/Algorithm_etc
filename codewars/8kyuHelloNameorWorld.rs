#[cfg(test)]

fn hello(name: &str) -> String {
  if name.is_empty() {
    return "Hello, World!".to_string();
  }else{
    let mut v: Vec<char> = name.chars().collect();
    //1文字目大文字へ
    v[0] = v[0].to_uppercase().nth(0).unwrap();
    for (i,c) in name.to_string().as_str().chars().enumerate(){
      if i > 0{
        v[i] = v[i].to_lowercase().nth(0).unwrap();
      }
    }

    let firstletterupper_name: String = v.into_iter().collect();
    return format!("Hello, {name}!",name=firstletterupper_name).to_string();

    // for (i,c) in name.chars().enumerate() {
    //   if i < 0{
    //     s.push(c.to_lowercase());
    //     v[i] = v[i].to_lowercase().unwrap();
    //   }
    // }

    // s.push(name.chars().nth(0).to_uppercase());
    // // name.chars().enumerate().filter(|$(i,_)|i>0).fold()
    // for (i,c) in name.chars().enumerate() {
    //   if i < 0{
    //     s.push(c.to_lowercase());
    //   }
    // }
    // return format!("Hello, {name}!",name=s).to_string();
  }
}


fn main() {

  // 世界よ、こんにちは
  println!("Hello, world!");
  assert_eq!(hello("johN"), "Hello, John!");
  assert_eq!(hello("alice"), "Hello, Alice!");
  assert_eq!(hello("маРия"), "Hello, Мария!");
  assert_eq!(hello(""), "Hello, World!");
}
