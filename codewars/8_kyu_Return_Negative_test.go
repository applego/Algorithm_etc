package kata

import (
	"testing"
)

func TestMakeNegativePlusMinus(test *testing.T) {
	input := 46
	expect := -46
	actual := MakeNegative(input)
	if expect != actual {
		test.Errorf("%v != %v", expect, actual)
	}
}

func TestMakeNegativeMinusMinus(test *testing.T) {
	input := -46
	expect := -46
	actual := MakeNegative(input)
	if expect != actual {
		test.Errorf("%v != %v", expect, actual)
	}
}
