fn solution_draft(phrase: &str) -> String {
    let phase1 = phrase.chars().rev();
    println!("{:?}",phase1);
    let phase2 = phase1.collect();
    return phase2;
    // unimplemented!();
}


pub fn string_to_number(s: &str) -> i32 {
    return s.parse().unwrap();
    //BP
    // return s.parse::<i32>().unwrap_or(0);
}
