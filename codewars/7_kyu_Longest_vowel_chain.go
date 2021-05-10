package kata

func Solve(s string) int {
	len,lenMax := 0, 0
	for _, c := range s {
		if c == 'a' || c == 'i' || c == 'u' || c == 'e' || c == 'o' {
			len++
		} else {
			if len > lenMax {
				lenMax = len
			}
			len = 0
		}
	}
	if len > lenMax {
		lenMax = len
	}
  return lenMax
}
