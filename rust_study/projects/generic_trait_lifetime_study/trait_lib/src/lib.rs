// リスト10-12: summarizeメソッドで提供される振る舞いからなるSummaryトレイト
// pub trait Summary {
//     fn summarize(&self) -> String;
// }

// リスト10-14: summarizeメソッドのデフォルト実装があるSummaryトレイトの定義
pub trait Summary {
    fn summarize_author(&self)->String;

    fn summarize(&self) -> String{
        // "(もっと読む)"
        String::from("(Read more...)")
    }
}

// リスト10-13: SummaryトレイトをNewsArticleとTweet型に実装する
pub struct NewsArticle{
    pub headline: String,
    pub location:String,
    pub author:String,
    pub content: String,
}

impl Summary for NewsArticle{
    fn summarize_author(&self) -> String{
        format!("@{}", self.author)
    }

    fn summarize(&self)->String{
        format!("{}, by {} ({}",self.headline,self.author,self.location)
    }
}
// impl Summary for NewsArticle{}
// let article = NewsArticle{
//     headline:String::from("Penguins win the Stanley Cup Chanpionship!"),
// }

pub struct Tweet {
    pub username:String,
    pub content:String,
    pub reply:bool,
    pub retweet:bool,
}

impl Summary for Tweet {
    fn summarize_author(&self) -> String{
        format!("@{}",self.username)
    }

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


#[cfg(test)]
mod test{

    use super::*;

    #[test]
    fn Tweet(){
        //前準備
        let tweet = Tweet{
            username:String::from("horse_ebooks"),
            content:String::from("of course, as you probably already know, people"),
            reply:false,
            retweet:false,
        };
        assert_eq!(tweet.username, "horse_ebooks");
        println!("1 new tweet: {}", tweet.summarize());
        //実行
        // 検証
    }
    #[test]
    fn NewsArticle(){
        //前準備
        let article = NewsArticle{
            // ペンギンチームがスタンレーカップチャンピオンシップを勝ち取る！
            headline: String::from("Penguins win the Stanley Cup Championship!"),
            // アメリカ、ペンシルベニア州、ピッツバーグ
            location: String::from("Pittsburgh, PA, USA"),
            // アイスバーグ
            author: String::from("Iceburgh"),
            // ピッツバーグ・ペンギンが再度NHL(National Hockey League)で最強のホッケーチームになった
            content: String::from(
                "The Pittsburgh Penguins once again are the best \
                hockey team in the NHL.",
            ),
        };
        assert_eq!(article.location, "Pittsburgh, PA, USA");
        println!("New article available! {}", article.summarize());
    }
    #[test]
    fn TweetDefault(){
        let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    };
    assert_eq!(tweet.username,"horse_ebooks");
    println!("1 new tweet: {}", tweet.summarize());
    }
}
