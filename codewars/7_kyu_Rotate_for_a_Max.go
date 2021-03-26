package kata

import (
	"fmt"
	"strconv"
)

func MaxRot(n int64) int64 {
    fmt.Println(n)
    //
    var s string
    s = strconv.Itoa(int(n))
    slen := len(s)

    max:= int64(n)
    rotatedS := s
    for i := 0;i<slen-1;i++{
        // fmt.Println(rotatedS)
        rotatedS = handleRotate(i-1,rotatedS)
        val,_ := strconv.Atoi(rotatedS)
        val64 := int64(val)
        if val64 > max {
            max = val64
        }
    }
    return max
}


func handleRotate(i int,s string) string {
    prefix := ""
    if i >= 0{
        prefix = string(s[:i+1])
    }
    rotateArea := s[i+1:]
    return prefix + rotate(rotateArea)
}

func rotate(s string) string {
    return s[1:]+string(s[0])
}

/*
56789
67895
68957
68579
68597

2
507992495

*/


// func Int64ToInt(i int64) int {
//     if i < math.MinInt32 || i > math.MaxInt32 {
//         return 0
//     } else {
//         return int(i)
//     }
// }
