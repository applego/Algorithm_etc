package kata

func GetSize(w,h,d int) [2]int {
		totalSurface := 2*(w*h+h*d+d*w)
		volume := w*h*d
		return [2]int{totalSurface,volume}
}

// * BP

func GetSizeBP(w,h,d int) [2]int{
	return [2]int{
		GetArea(w,h,d),
		GetVolume(w,h,d),
	}
}

func GetArea(w,h,d int) int{
	return 2*(w*h+h*d+d*w)
}

func GetVolume(w,h,d int) int{
	return w*h*d
}
