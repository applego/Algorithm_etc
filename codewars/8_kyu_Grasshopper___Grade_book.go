package kata

func GetGrade(a,b,c int) rune {
		average := (a+b+c)/3

		if 0<= average && average < 60{
			return LetterGrade.Rune(F)
		}else if 60<= average && average<70{
			return LetterGrade.Rune(D)
		}else if 70<= average && average<80{
			return LetterGrade.Rune(C)
		}else if 80<= average && average<90{
			return LetterGrade.Rune(B)
		}else if 90<= average && average<=100{
			return LetterGrade.Rune(A)
		}else{
			return LetterGrade.Rune(Error)
		}
}

type LetterGrade int

const (
	A LetterGrade = iota
	B
	C
	D
	F
	Error
)

// ハナから文字列で良くない？
// https://qiita.com/kyoh86/items/18b8bfc6ffe045aaf380
type LetterGradeString rune
const (
	A2 = LetterGradeString('A')
	B2 = LetterGradeString('B')
	C2 = LetterGradeString('C')
	D2 = LetterGradeString('D')
	F2 = LetterGradeString('F')
)

func (lg LetterGrade) Rune() rune{
	switch lg{
		case A:
			return 'A'
		case B:
			return 'B'
		case C:
			return 'C'
		case D:
			return 'D'
		case F:
			return 'F'
		default:
			return '0'
	}
}

// Goに例外はない
// https://qiita.com/Maki-Daisuke/items/80cbc26ca43cca3de4e4

// func (lg LetterGrade) Rune() (rune,error){
// 	switch lg{
// 		case A:
// 			return 'A',nil
// 		case B:
// 			return 'B',nil
// 		case C:
// 			return 'C',nil
// 		case D:
// 			return 'D',nil
// 		case F:
// 			return 'F',nil
// 	}
// 	return '0',errors.New("not exist LetterGrade")
// }
