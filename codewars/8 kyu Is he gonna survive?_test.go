package main

import (
	"testing"
)

// *はポインタ型の宣言を使用するときに使用する(&は変数toポインタ、*はポインタto変数)
func TestTableCaluculate2(t *testing.T){
	var tests = []struct {
		input int
		input2 int
		expected bool
	}{
		{10, 5,true},
     {7, 4,false},
     {4, 5,false},
     {100, 40,true},
     {1500, 751,false},
     {0, 1,false},
	}

	for _,test := range tests{
		output := Hero(test.input,test.input2)
		if output != test.expected{
			t.Errorf("Test Failed: input %v,input2 %v, got %v, want %v",test.input,test.input2,output,test.expected)
		}
	}
}
