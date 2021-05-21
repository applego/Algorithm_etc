package kata

import "math"


func MaxBall(v0 int) int {
    // km/h -> m/s
		v0ms := float64(v0) * 1000.0 / (60.0*60.0)

		recordInterval := 0.1
		maxHeight := 0.0
		timeAtMaxHeight := 0

		prevHeight := -1.0
		currentHeight := 0.0

		t := recordInterval
		for ; prevHeight < currentHeight;t += recordInterval {
			prevHeight = currentHeight
			currentHeight = v0ms * t - 0.5 * 9.81 * t * t
			if currentHeight > maxHeight {
				maxHeight = currentHeight
				timeAtMaxHeight = int(math.Round(t*10))
			}
		}
		// return int(maxHeight)
		return timeAtMaxHeight
}


/*
v0: km per hour
h = v*t-0.5*g*t*t
	g:earth's gravity
		9.81 m/s**2

1/10秒ごとの高さ

hの最大値を返す
*/
