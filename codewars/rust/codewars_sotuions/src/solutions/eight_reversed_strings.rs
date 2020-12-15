fn solution_draft(phrase: &str) -> String {
    let phase1 = phrase.chars().rev();
    println!("{:?}",phase1);
    let phase2 = phase1.collect();
    return phase2;
    // unimplemented!();
}

pub fn solution(phrase: &str) -> String {
    return phrase.chars().rev().collect();
}
