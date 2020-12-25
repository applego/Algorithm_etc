// リスト10-12: summarizeメソッドで提供される振る舞いからなるSummaryトレイト
pub trait Summary {
    fn summarize(&self) -> String;
}

// リスト10-13: SummaryトレイトをNewsArticleとTweet型に実装する
pub struct NewsArticle{
    pub headline: String,
    pub location:String,
    pub author:String,
    pub content: String,
}

impl Summary for NewsArticle{
    fn summarize(&self)->String{
        format!("{}, by {} ({}",self.headline,self.author,self.location)
    }
}

pub struct Tweet {
    pub username:String,
    pub content:String,
    pub reply:bool,
    pub retweet:bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}",self.username,self.content)
    }
}

// トレイトを実装後、普通のメソッド同様にNewsArticleやTweetのインスタンスに対してこのメソッドを呼び出せます。 こんな感じで:


//     let tweet = Tweet {
//         username: String::from("horse_ebooks"),
//         content: String::from(
//             // もちろん、ご存知かもしれませんがね、みなさん
//             "of course, as you probably already know, people",
//         ),
//         reply: false,
//         retweet: false,
//     };

//     println!("1 new tweet: {}", tweet.summarize());
// このコードは、1 new tweet: horse_ebooks: of course, as you probably already know, peopleと出力します。
