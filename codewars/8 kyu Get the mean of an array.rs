
fn get_average(marks: &[f32]) -> f32 {
  (marks.iter().sum::<f32>()/marks.len() as f32).floor()
}

// Add your tests here.
// See https://doc.rust-lang.org/stable/rust-by-example/testing/unit_testing.html

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_average() {
        assert_eq!(get_average(&[2., 2., 2., 2.]), 2.);
        assert_eq!(get_average(&[1., 5., 87., 45., 8., 8.]), 25.);
        assert_eq!(get_average(&[2.,5.,13.,20.,16.,16.,10.]), 11.);
        assert_eq!(get_average(&[1.,2.,15.,15.,17.,11.,12.,17.,17.,14.,13.,15.,6.,11.,8.,7.]), 11.);
    }
}
