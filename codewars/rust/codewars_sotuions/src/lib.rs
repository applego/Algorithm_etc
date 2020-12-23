mod solutions;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    // 2020/12/15 17:15
    use crate::solutions::s_8_kyu_reversed_strings;
    #[test]
    fn sample_test() {
        assert_eq!(s_8_kyu_reversed_strings::solution("world"), "dlrow");
    }

    // 2020/12/16 19:13
    use crate::solutions::s_8_kyu_convert_a_string_to_a_number::string_to_number;
    #[test]
    fn returns_expected() {
        assert_eq!(string_to_number("1234"), 1234);
        assert_eq!(string_to_number("605"), 605);
        assert_eq!(string_to_number("1405"), 1405);
        assert_eq!(string_to_number("-7"), -7);
    }

    // 2020/12/23 23:25
    use crate::solutions::s_7_kyu_mumbling::accum;
    #[test]
    fn basic_tests() {
        assert_eq!(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        assert_eq!(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        assert_eq!(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        assert_eq!(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        assert_eq!(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
    }
}
