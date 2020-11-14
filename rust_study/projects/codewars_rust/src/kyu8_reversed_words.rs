pub fn reverse_words(str:&str) -> String {
    let ans:Vec<&str>= str.rsplit(" ")
        .collect();
    println!("The value of ans is: {}",ans);
        // .connect(" ");
    return "fff";
}

// #[cfg(test)]
// mod tests {
//     use super::reverse_words;
//     #[test]
//     fn returns_expected() {
//       assert_eq!(reverse_words("hello world!"), "world! hello");
//     }
//     #[test]
//     fn another(){
//       panic!("Make thhis test faild");
//     }
// }
