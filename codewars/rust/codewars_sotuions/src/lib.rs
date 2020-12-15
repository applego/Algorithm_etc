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
}
