package main

import "fmt"


func Sqrt(x float64) float64 {
	z := 1.0
	diff := 1.0
	diff_pre := 0.0
	for i := 0; i < 100; i++ {
		// tmp := z * z
		// fmt.Println("tmp")
		// fmt.Println(tmp)
		// diff := x - tmp
		// fmt.Println("diff")
		// fmt.Println(diff)
		fmt.Println(z*z)
		diff_pre = diff
		diff = (x - z*z)
		fmt.Println(diff)
		if diff != 1 && diff == diff_pre {
			break
		}
		// ニュートン法
		z -= (z*z - x) / (2*x)
	}
	return z
}

func main() {
	fmt.Println(Sqrt(2))
}
