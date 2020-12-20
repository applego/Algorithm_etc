use std::fs::File;
use std::io::ErrorKind;
use std::io;
use std::io::Read;

fn main() {
    // panic!("crash and burn"); // クラッシュして炎上

    // panic! バックトレースを使用する
    // let v = vec![1,2,3];
    // v[99];

    // リスト9-3: ファイルを開く
    // let f: u32 = File::open("hello.txt");
                    // expected `u32`, found enum `std::result::Result`
    let f = File::open("hello.txt");
    // リスト9-4: match式を使用して返却される可能性のあるResult列挙子を処理する
    let f = match f {
        Ok(file)=>file,
        Err(ref error) if error.kind() == ErrorKind::NotFound =>{
            match File::create("hello.txt"){
                Ok(fc)=>fc,
                Err(e)=>{
                    panic!(
                        // ファイルを作成しようとしましたが、問題がありました
                        "Tried to create file but there was a problem: {:?}",
                        e
                    )
                },
            }
        }
        Err(error)=>{
            // ファイルを開く際に問題がありました
            panic!(
                "There was a problem opening the file: {:?}",
                error
            )
        },
    };

    let f = File::open("hello.txt").unwrap();

    let f = File::open("hello.txt").expect("Failed to open hello.txt");


}

// リスト9-6: matchでエラーを呼び出し元のコードに返す関数
fn read_username_from_file() -> Result<String,io::Error>{
    let f = File::open("hello.txt");

    let mut f = match f{
        Ok(file)=> file,
        Err(e)=> return Err(e),
    };

    let mut s = String::new();
    match f.read_to_string(&mut s){
        Ok(_) => Ok(s),
        Err(e)=> Err(e),
    }
}

// Result　enumは以下のようにOkとErrの２列挙子からなる定義
// TとEはジェネリックな型引数：詳しくは第１０章で
// Tが成功したときにOk列挙子に含まれて返される値の方を表すことと
// Eが失敗したときにErr列挙子に含まれて返されるエラーの型を表すこと
// enum Result<T,E>{
//     Ok(T),
//     Err(E),
// }
