package kata

func Hero(bullets, dragons int) bool {
  if bullets/2 >= dragons{
		return true
	}
	return false

	// * BP
	// return bullets/2 >= dragons;
	// return bullets >= dragons*2;
}
