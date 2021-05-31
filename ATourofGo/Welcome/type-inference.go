package main

import "fmt"

func main() {
	i := 42 // change me!
	fmt.Printf("i is of type %T\n", i)

	f := 3.14 // change me!
	fmt.Printf("f is of type %T\n", f)

	g := 0.867 + 0.5i // change me!
	fmt.Printf("g is of type %T\n", g)
}

// * Generics 機能追加されるらしいが
// func printType[T any](p T) {
// 	fmt.Printf("p is of type %T\n", p)
// }
