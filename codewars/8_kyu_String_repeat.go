package kata

import (
	"fmt"
	"strings"
)

func RepeatStr(repetitions int, value string) string {
  result:=""
  for i:=0;i<repetitions;i++ {
    result += fmt.Sprintf(value) //* fmt は不要っぽい？
  }
  return result
}

// BP
func RepeatStrBP(repetitions int, value string)string{
  return strings.Repeat(value, repetitions)
}
