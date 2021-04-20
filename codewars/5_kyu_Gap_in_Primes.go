package kata

import (
	"math"
)

func Gap(g, m, n int) []int {
    // mからnの範囲の素数で、隣の素数との差がgであるコンピ（int[])を返す
    ps := primeStruct{g:g,m:m,n:n}
    ps.setPrimsInRange()
    ps.getFirstPrimsInGap()
    if ps.primesInGap[0] == 0 && ps.primesInGap[1] == 0{
        return nil
    }
    return ps.primesInGap
}

type primeStruct struct {
    g int
    m int
    n int
    sieve []bool
    primesInRange []int
    primesInGap []int
}

func (p *primeStruct) setPrimsInRange(){
    isprims := prime(p.n)
    for i := p.m; i < p.n; i++{
        if isprims[i]{
            p.primesInRange = append(p.primesInRange,i)
        }
    }
}

func (p *primeStruct) getFirstPrimsInGap(){
    for i := 1;i<len( p.primesInRange);i++{
        right := p.primesInRange[i]
        left := p.primesInRange[i-1]
        if right - left == p.g {
            p.primesInGap = []int{left, right}
            return
        }
    }
    p.primesInGap = []int {0,0}

    // left := -1
    // for value,is_prime := range(p.sieve){
    //     if is_prime{
    //         right := value
    //         if left == -1{
    //             left = value
    //             continue
    //         }
    //         gap := right - left
    //         if gap == p.g{
    //             p.primesInGap = []int {left,right}
    //             return
    //         }
    //         left = right
    //     }
    // }
    // p.primesInGap = []int {0,0}
}

func prime(maximum int)[] bool {
    sieve := make([]bool, maximum)
    for i:= range sieve {
        sieve[i] = true
    }

    sieved := func(prime int){
        for i := prime + prime; i < maximum;i+=prime{
            sieve[i] = false
        }
    }

    sieve[0] = false; sieve[1] = false
    sieved(2)
    end := int(math.Pow(float64(maximum),0.5)+1)
    for i := 3; i< end; i+=2{
        if sieve[i]{
            sieved(i)
        }
    }
    return sieve
}


//    maximum := 1001
    // print_prime := func(){
    //     for value,is_prime := range prime(maximum){
    //         if is_prime{
    //             fmt.Printf("%v\n",value)
    //         }
    //     }
    // }
    // print_prime()

    // return []int {1,2}


    type MyInt int
    func (i *MyInt) Double(){
        *i *= 2
    }
    func (i *MyInt) IsPrime()bool{
        if *i % 2 == 0{
            return true
        }
        return false
    }
