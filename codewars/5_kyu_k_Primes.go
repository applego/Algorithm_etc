package kata

import (
	"math"
)

func CountKprimes(k, start, nd int)  []int {
    // your code
		// k 回　素数のみ
		//

		var a[]int
		var tmp int
		for i:= 2;tmp < nd;i++ {
			tmp = i + i
			// fmt.Println(nd)
		}
		return a
		// return nil
}
func Puzzle(s int) int {
    // your code
		return 3
}

func isPrime(x int) bool {
	if x == 1 {
		return false
	}
	if x == 2 {
		return true
	}
	if x%2 == 0 {
		return false
	}

	b := true
	rootx := int(math.Sqrt(float64(x)))
	i := 3
	for i <= rootx {
		if x%i == 0 {
			b = false
			break
		}
		i += 2
	}
	return b
}
