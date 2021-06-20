package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func dotest1(k, start, nd int, exp []int) {
    var ans = CountKprimes(k, start, nd)
    Expect(ans).To(Equal(exp))
}
func dotest2(s int, exp int) {
    var ans = Puzzle(s)
    Expect(ans).To(Equal(exp))
}

var _ = Describe("Test Example", func() {

    It("should handle basic cases", func() {
        dotest1(5, 1000, 1100, []int{1020, 1026, 1032, 1044, 1050, 1053, 1064,   1072, 1092, 1100})
        dotest1(5, 500, 600, []int{500, 520, 552, 567, 588, 592, 594})
        dotest1(12, 100000, 100100, nil)
    })
    It("should handle basic puzzle", func() {
        dotest2(138, 1)
        dotest2(143, 2)
    })
})
