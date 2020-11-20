pub mod kyu8_keep_hydrated;
pub mod kyu8_reversed_words;

#[cfg(test)]
mod tests {
  #[test]
  fn it_works() {
    assert_eq!(2 + 2, 4);
  }
  #[test]
  fn returns_expected() {
    // 2020/11/15  0:35
    use crate::kyu8_reversed_words::reverse_words;
    assert_eq!(reverse_words("hello world!"), "world! hello");

    // 2020/11/16 23:46
    use crate::kyu8_keep_hydrated::litres;
    assert_eq!(litres(2.), 1);
    assert_eq!(litres(1.4), 0);
    assert_eq!(litres(12.3), 6);
    assert_eq!(litres(0.82), 0);
    assert_eq!(litres(11.8), 5);
    assert_eq!(litres(1787.), 893);
    assert_eq!(litres(0.), 0);
  }
  //　失敗用テスト
  // #[test]
  // fn another(){
  //   panic!("Make thhis test faild");
  // }
}
