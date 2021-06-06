package main

import "fmt"

func main() {
	sum := 0
	for y := 0; y < 10 ; y++{
		for d := 0; d < 365; d++ {
			sum += d
		}
	}

	var sumMultiple float64 = 1
	for y := 0; y < 10 ; y++{
		for d := 0; d < 365; d++ {
			sumMultiple *= 1.01
		}
	}

	fmt.Println(sum)
	fmt.Println(sumMultiple)
}
