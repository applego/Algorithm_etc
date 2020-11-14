// pub fn reverse_words_my(str:&str) -> String {
//     return str.rsplit(" ")
//         .collect()
//         .connect(" ")
//         .to_string();
//     assert_eq!(ans,["world!", "hello"]);
//     // println!("The value of ans is: {}",ans.to_string());
//         // .connect(" ");
//     // return ans;
// }

fn reverse_words_my2(str:&str) -> String {
    return str.rsplit(" ")
        .collect::<Vec<_>>()
        .join(" ");
}

pub fn reverse_words(str:&str) -> String {
    // return str.split_whitespace()
    //     .rev()
    return str.rsplit(" ")
        // .rev()
        .collect::<Vec<_>>()
        .join(" ");
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
