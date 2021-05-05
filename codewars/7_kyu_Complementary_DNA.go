package kata

import "strings"

func DNAStrand(dna string) string {
  // your code here
	// A -> T
	// T -> A
	// C -> G
	// G -> C
	return DNAStrandLogic(dna)
}

func DNAStrandLogic(dna string) string {
	// dna から　DNAインスタンス生成
	structDNA := NewDNAByStr(dna)
	// dna.symbols から 補完要素の文字列を取得
	return structDNA.ComplementsString()
}

type DNA struct {
	symbols []DNASymbol
}

func NewDNAByStr (strDna string) *DNA  {
	var symbols []DNASymbol
	slice := strings.Split(strDna, "")
	for i := 0; i < len(slice); i++ {
		symbols = append(symbols,NewDNASymbolByStr(slice[i]))
	}
	dna := new(DNA)
	dna.symbols = symbols
	return dna
}

func (dna DNA) ComplementsString() string {
	if len(dna.symbols) == 0 {
		return ""
	}
	var complementsString string
	for _, symbol := range dna.symbols {
		complementsString += string(symbol.ComplementsSymbol())
	}
	return complementsString
}

type DNASymbol string

const (
	Adenine = DNASymbol("A")
	Thymine = DNASymbol("T")
	Guanine = DNASymbol("G")
	Cytosine = DNASymbol("C")
)

func (s DNASymbol) ComplementsSymbol() DNASymbol {
	switch s {
		case Adenine:
			return Thymine
		case Thymine:
			return Adenine
		case Guanine:
			return Cytosine
		case Cytosine:
			return Guanine
	}
	return ""
}

func NewDNASymbolByStr(str string) DNASymbol {
	switch str {
	case "A":
		return Adenine
	case "T":
		return Thymine
	case "C":
		return Cytosine
	case "G":
		return Guanine
	}
	return ""
}
