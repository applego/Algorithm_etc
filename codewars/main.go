package main

import "fmt"

// 同一package内なら小文字始まりのstructでOKだが、別packageの場合大文字で
type mydata struct {
	num int
	str string
}

func main() {
	var x mydata
	x.num = 11
	x.str = "apple"
	fmt.Printf("%#v\n",x)

	result := Calculate(3)
	fmt.Printf("3+2=%v\n",result)
}

func Calculate(x int)(result int){
	result = x+2
	return result
}
