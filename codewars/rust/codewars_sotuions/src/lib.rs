mod solutions;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    // 2020/12/15 17:15
    use crate::solutions::eight_reversed_strings;
    #[test]
    fn sample_test() {
        assert_eq!(eight_reversed_strings::solution("world"), "dlrow");
    }

    // 2020/12/16 19:13
    use crate::solutions::eight_convert_a_string_to_a_number::string_to_number;
    #[test]
    fn returns_expected() {
      assert_eq!(string_to_number("1234"), 1234);
      assert_eq!(string_to_number("605"), 605);
      assert_eq!(string_to_number("1405"), 1405);
      assert_eq!(string_to_number("-7"), -7);
    }
}
