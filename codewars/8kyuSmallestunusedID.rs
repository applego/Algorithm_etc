use std::collections::HashSet;

fn next_id(ids: &[usize]) -> usize {
    let mut hash_ids: HashSet<usize> = HashSet::new();
    for id in ids.iter(){
        hash_ids.insert(*id);
    }
    let mut i = 0;
    while hash_ids.contains(&i){
        i+=1;
    }
    i
}

fn main() {
    assert_eq!(next_id(&[0,1,2,4,5]), 3);
    assert_eq!(next_id(&[0,1,2,3,4,5,6,7,8,9,10]), 11);
    println!("Hello, world!");
}