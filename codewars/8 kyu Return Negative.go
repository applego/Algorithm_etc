package main

import (
	"fmt"
	"strconv"
)

// import "fmt"

func negative() {

	main2()
	main3()
	var arr[3] int = [3]int{1,-5,0}
	for i := 0; i <len(arr);i++{
		MakeNegative(arr[i])
	}
}

func MakeNegative(input int)int{
	fmt.Printf(strconv.Itoa(input))
	if input > 0{
		return -1*input
	}
	return input
}



// * 問題とは関係ない
//* https://qiita.com/gorilla0513/items/7e734c4e0680b5ea341d
// go の関数定義方法
// class内に書けない
// 構造体内に定義する
type Human struct{
	Name string
	Age int
	Weight float32
}

func (h Human) addWeight(f float32) float32{
	return h.Weight+f
}

func main2(){
	//　インスタンス生成
	skanehira := Human{
		Name: "skanehira",
		Age:26,
		Weight:62.6,
	}

	fmt.Printf("%#v \n",skanehira)
	skanehira.Weight = skanehira.addWeight(10)
	fmt.Printf("%#v \n",skanehira)
}

/*
type 構造体 struct {
    // フィールド定義
}

func (変数名 構造体) 関数名(変数名 型) 型 {
    // do something
    return 値
}
*/

//* ---------------

type AccountDB struct {}

func (db AccountDB) Insert(account Account){
	fmt.Printf("Insert")
}

func (db AccountDB) Update(accoutId string,account Account){
	fmt.Printf("Update")
}

func (db AccountDB) Get(accoutId string) Account{
	fmt.Printf("Get")
	return Account{ID:accoutId,Name:"takemura",Password: "takemura9080"}
}

func (db AccountDB) Delete(accoutId string){
	fmt.Printf("Delete")
}

var db AccountDB

type Account struct {
	ID string
	Name string
	Password string
}

//アカウント登録
func (account Account) Create(){
	db.Insert(account)
}

// アカウント情報更新
func (account Account) Update() Account{
	db.Update(account.ID,account)
	return account
}

// アカウント情報取得
func (account Account) Read() Account{
	return db.Get(account.ID)
}

// アカウント削除
func (account Account) Delete(){
	db.Delete(account.ID)
}

func main3(){
	account := Account{
		Name:"skanehira",
		Password:"kanehira1005",
	}

	account.Create()
	account.Update()
	account.Read()
	account.Delete()
}
