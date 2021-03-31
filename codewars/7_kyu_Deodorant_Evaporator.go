package kata

func Evaporator(content float64, evapPerDay int, threshold int) int {
	nthDay := 0
	thresholdMl := content * float64(threshold) / 100
	remain := content
	for remain >= thresholdMl {
		nthDay ++
		remain = remain * float64((100-evapPerDay)) /100
	}
	return nthDay
}
