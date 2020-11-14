
pub mod kyu8_reversed_words;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
    // 2020/11/15  0:35
    use crate::kyu8_reversed_words::reverse_words;
    #[test]
    fn returns_expected() {
      assert_eq!(reverse_words("hello world!"), "world! hello");
    }
    //　失敗用テスト
    // #[test]
    // fn another(){
    //   panic!("Make thhis test faild");
    // }
}
