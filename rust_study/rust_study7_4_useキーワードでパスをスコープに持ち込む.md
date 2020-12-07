The Rust Programming Language 日本語版
use キーワードでパスをスコープに持ち込む
これまで関数呼び出しのために書いてきたパスは、長く、繰り返しも多くて不便なものでした。 例えば、Listing 7-7 においては、絶対パスを使うか相対パスを使うかにかかわらず、add_to_waitlist 関数を呼ぼうと思うたびに front_of_house と hosting も指定しないといけませんでした。 ありがたいことに、この手続きを簡単化する方法があります。 use キーワードを使うことで、パスを一度スコープに持ち込んでしまえば、それ以降はパス内の要素がローカルにあるかのように呼び出すことができるのです。

Listing 7-11 では、crate::front_of_house::hosting モジュールを eat_at_restaurant 関数のスコープに持ち込むことで、eat_at_restaurant において、hosting::add_to_waitlist と指定するだけで add_to_waitlist 関数を呼び出せるようにしています。

ファイル名: src/lib.rs

mod front_of_house {
pub mod hosting {
pub fn add_to_waitlist() {}
}
}

use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
hosting::add_to_waitlist();
hosting::add_to_waitlist();
hosting::add_to_waitlist();
}
Listing 7-11: use でモジュールをスコープに持ち込む

use とパスをスコープに追加することは、ファイルシステムにおいてシンボリックリンクを張ることに似ています。 use crate::front_of_house::hosting をクレートルートに追加することで、hosting はこのスコープで有効な名前となり、まるで hosting はクレートルートで定義されていたかのようになります。 スコープに use で持ち込まれたパスも、他のパスと同じようにプライバシーがチェックされます。

use と相対パスで要素をスコープに持ち込むこともできます。 Listing 7-12 は Listing 7-11 と同じふるまいを得るためにどう相対パスを書けば良いかを示しています。

ファイル名: src/lib.rs

mod front_of_house {
pub mod hosting {
pub fn add_to_waitlist() {}
}
}

use self::front_of_house::hosting;

pub fn eat_at_restaurant() {
hosting::add_to_waitlist();
hosting::add_to_waitlist();
hosting::add_to_waitlist();
}
Listing 7-12: モジュールを use と相対パスを使ってスコープに持ち込む

慣例に従った use パスを作る
Listing 7-11 を見て、なぜ use crate::front_of_house::hosting と書いて eat_at_restaurant 内で hosting::add_to_waitlist と呼び出したのか不思議に思っているかもしれません。Listing 7-13 のように、use で add_to_waitlist までのパスをすべて指定しても同じ結果が得られるのに、と。

ファイル名: src/lib.rs

mod front_of_house {
pub mod hosting {
pub fn add_to_waitlist() {}
}
}

use crate::front_of_house::hosting::add_to_waitlist;

pub fn eat_at_restaurant() {
add_to_waitlist();
add_to_waitlist();
add_to_waitlist();
}
Listing 7-13: add_to_waitlist 関数を use でスコープに持ち込む。このやりかたは慣例的ではない

Listing 7-11 も 7-13 もおなじ仕事をしてくれますが、関数をスコープに use で持ち込む場合、Listing 7-11 のほうが慣例的なやり方です。 関数の親モジュールを use で持ち込むことで、関数を呼び出す際、毎回親モジュールを指定しなければならないようにすれば、フルパスを繰り返して書くことを抑えつつ、関数がローカルで定義されていないことを明らかにできます。 Listing 7-13 のコードではどこで add_to_waitlist が定義されたのかが不明瞭です。

一方で、構造体や enum その他の要素を use で持ち込むときは、フルパスを書くのが慣例的です。 Listing 7-14 は標準ライブラリの HashMap 構造体をバイナリクレートのスコープに持ち込む慣例的なやり方を示しています。

ファイル名: src/main.rs

use std::collections::HashMap;

fn main() {
let mut map = HashMap::new();
map.insert(1, 2);
}
Listing 7-14: HashMap を慣例的なやり方でスコープに持ち込む

こちらの慣例の背後には、はっきりとした理由はありません。自然に発生した慣習であり、みんな Rust のコードをこのやり方で読み書きするのに慣れてしまったというだけです。

同じ名前の 2 つの要素を use でスコープに持ち込むのは Rust では許されないので、そのときこの慣例は例外的に不可能です。 Listing 7-15 は、同じ名前を持つけれど異なる親モジュールを持つ 2 つの Result 型をスコープに持ち込み、それらを参照するやり方を示しています。

ファイル名: src/lib.rs

use std::fmt;
use std::io;

fn function1() -> fmt::Result {
// --snip--
// （略）
}

fn function2() -> io::Result<()> {
// --snip--
// （略）
}
Listing 7-15: 同じ名前を持つ 2 つの型を同じスコープに持ち込むには親モジュールを使わないといけない。

このように、親モジュールを使うことで 2 つの Result 型を区別できます。 もし use std::fmt::Result と use std::io::Result と書いていたとしたら、2 つの Result 型が同じスコープに存在することになり、私達が Result を使ったときにどちらのことを意味しているのか Rust はわからなくなってしまいます。

新しい名前を as キーワードで与える
同じ名前の 2 つの型を use を使って同じスコープに持ち込むという問題には、もう一つ解決策があります。パスの後に、as と型の新しいローカル名、即ちエイリアスを指定すればよいのです。 Listing 7-16 は、Listing 7-15 のコードを、2 つの Result 型のうち一つを as を使ってリネームするという別のやり方で書いたものを表しています。

ファイル名: src/lib.rs

use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {
// --snip--
}

fn function2() -> IoResult<()> {
// --snip--
}
Listing 7-16: 型がスコープに持ち込まれた時、as キーワードを使ってその名前を変えている

2 つめの use 文では、std::io::Result に、IoResult という新たな名前を選んでやります。std::fmt の Result もスコープに持ち込んでいますが、この名前はこれとは衝突しません。 Listing 7-15 も Listing 7-16 も慣例的とみなされているので、どちらを使っても構いませんよ！

pub use を使って名前を再公開する
use キーワードで名前をスコープに持ちこんだ時、新しいスコープで使用できるその名前は非公開です。 私達のコードを呼び出すコードが、まるでその名前が私達のコードのスコープで定義されていたかのように参照できるようにするためには、pub と use を組み合わせればいいです。 このテクニックは、要素を自分たちのスコープに持ち込むだけでなく、他の人がその要素をその人のスコープに持ち込むことも可能にすることから、再公開 (re-exporting) と呼ばれています。

Listing 7-17 は Listing 7-11 のコードのルートモジュールでの use を pub use に変更したものを示しています。

ファイル名: src/lib.rs

mod front_of_house {
pub mod hosting {
pub fn add_to_waitlist() {}
}
}

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
hosting::add_to_waitlist();
hosting::add_to_waitlist();
hosting::add_to_waitlist();
}
Listing 7-17: pub use で、新たなスコープのコードがその名前を使えるようにする

pub use を使うことで、外部のコードが hosting::add_to_waitlist を使って add_to_waitlist 関数を呼び出せるようになりました。 pub use を使っていなければ、eat_at_restaurant 関数は hosting::add_to_waitlist を自らのスコープ内で使えるものの、外部のコードはこの新しいパスを利用することはできないでしょう。

再公開は、あなたのコードの内部構造と、あなたのコードを呼び出すプログラマーたちのその領域に関しての見方が異なるときに有用です。 例えば、レストランの比喩では、レストランを経営している人は「接客部門 (front of house)」と「後方部門 (back of house)」のことについて考えるでしょう。 しかし、レストランを訪れるお客さんは、そのような観点からレストランの部門について考えることはありません。 pub use を使うことで、ある構造でコードを書きつつも、別の構造で公開するということが可能になります。 こうすることで、私達のライブラリを、ライブラリを開発するプログラマにとっても、ライブラリを呼び出すプログラマにとっても、よく整理されたものとすることができます。

外部のパッケージを使う
2 章で、乱数を得るために rand という外部パッケージを使って、数当てゲームをプログラムしました。 rand を私達のプロジェクトで使うために、次の行を Cargo.toml に書き加えましたね：

ファイル名: Cargo.toml

[dependencies]
rand = "0.5.5"
rand を依存 (dependency) として Cargo.toml に追加すると、rand パッケージとそのすべての依存を crates.io からダウンロードして、私達のプロジェクトで rand が使えるようにするよう Cargo に命令します。

そして、rand の定義を私達のパッケージのスコープに持ち込むために、クレートの名前である rand から始まる use の行を追加し、そこにスコープに持ち込みたい要素を並べました。 2 章の乱数を生成するの節で、Rng トレイトをスコープに持ち込み rand::thread_rng 関数を呼び出したことを思い出してください。

use rand::Rng;

fn main() {
let secret_number = rand::thread_rng().gen_range(1, 101);
}
Rust コミュニティに所属する人々が crates.io でたくさんのパッケージを利用できるようにしてくれており、上と同じステップを踏めばそれらをあなたのパッケージに取り込むことができます：あなたのパッケージの Cargo.toml ファイルにそれらを書き並べ、use を使って要素をクレートからスコープへと持ち込めばよいのです。

標準ライブラリ (std) も、私達のパッケージの外部にあるクレートだということに注意してください。 標準ライブラリは Rust 言語に同梱されているので、 Cargo.toml を std を含むように変更する必要はありません。 しかし、その要素をそこから私達のパッケージのスコープに持ち込むためには、use を使って参照する必要はあります。 例えば、HashMap には次の行を使います。

use std::collections::HashMap;
これは標準ライブラリクレートの名前 std から始まる絶対パスです。

巨大な use のリストをネストしたパスを使って整理する
同じクレートか同じモジュールで定義された複数の要素を使おうとする時、それぞれの要素を一行一行並べると、縦に大量のスペースを取ってしまいます。 例えば、Listing 2-4 の数当てゲームで使った次の 2 つの use 文が std からスコープへ要素を持ち込みました。

ファイル名: src/main.rs

// --snip--
// （略）
use std::cmp::Ordering;
use std::io;
// --snip--
// （略）
代わりに、ネストしたパスを使うことで、同じ一連の要素を 1 行でスコープに持ち込めます。 これをするには、Listing 7-18 に示されるように、パスの共通部分を書き、2 つのコロンを続け、そこで波括弧で互いに異なる部分のパスのリストを囲みます。

ファイル名: src/main.rs

// --snip--
// （略）
use std::{cmp::Ordering, io};
// --snip--
// （略）
Listing 7-18: 同じプレフィックスをもつ複数の要素をスコープに持ち込むためにネストしたパスを指定する

大きなプログラムにおいては、同じクレートやモジュールからのたくさんの要素をネストしたパスで持ち込むようにすれば、独立した use 文の数を大きく減らすことができます！

ネストしたパスはパスのどの階層においても使うことができます。これはサブパスを共有する 2 つの use 文を合体させるときに有用です。 例えば、Listing 7-19 は 2 つの use 文を示しています：1 つは std::io をスコープに持ち込み、もう一つは std::io::Write をスコープに持ち込んでいます。

ファイル名: src/lib.rs

use std::io;
use std::io::Write;
Listing 7-19: 片方がもう片方のサブパスである 2 つの use 文

これらの 2 つのパスの共通部分は std::io であり、そしてこれは最初のパスにほかなりません。これらの 2 つのパスを 1 つの use 文へと合体させるには、Listing 7-20 に示されるように、ネストしたパスに self を使いましょう。

ファイル名: src/lib.rs

use std::io::{self, Write};
Listing 7-20: Listing 7-19 のパスを一つの use 文に合体させる

この行は std::io と std::io::Write をスコープに持ち込みます。

glob 演算子
パスにおいて定義されているすべての公開要素をスコープに持ち込みたいときは、glob 演算子 \* をそのパスの後ろに続けて書きましょう：

use std::collections::\*;
この use 文は std::collections のすべての公開要素を現在のスコープに持ち込みます。 glob 演算子を使う際にはご注意を！ glob をすると、どの名前がスコープ内にあり、プログラムで使われている名前がどこで定義されたのか分かりづらくなります。

glob 演算子はしばしば、テストの際、テストされるあらゆるものを tests モジュールに持ち込むために使われます。これについては 11 章テストの書き方の節で話します。 glob 演算子はプレリュードパターンの一部としても使われることがあります：そのようなパターンについて、より詳しくは標準ライブラリのドキュメントをご覧ください。
