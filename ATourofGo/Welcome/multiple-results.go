package main

import (
	"fmt"
)

func swap(x,y string) (string,string) {
	return y, x
}

func main() {
	fmt.Println(swap("a","b"))
	a,b := swap("hello","world")
	fmt.Println(a,b)
}
