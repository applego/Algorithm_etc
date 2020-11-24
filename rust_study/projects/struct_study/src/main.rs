struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

fn build_user(email: String, username: String) -> User {
    User {
        email,    // email: email,
        username, // username: username,
        active: true,
        sign_in_count: 1,
    }
}

fn main() {
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");

    //リスト5-6: user1の一部の値を使用しつつ、新しいUserインスタンスを生成する
    let user2 = User {
        email: String::from("another@example.com"),
        username: String::from("anotherusername567"),
        // active: user1.active,
        // sign_in_count: user1.sign_in_count,
        ..user1 // 構造体更新記法
    };
}
