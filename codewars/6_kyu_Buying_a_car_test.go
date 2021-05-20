package kata
import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
)

func dotest_20210520(startPriceOld, startPriceNew, savingperMonth int, percentLossByMonth float64, exp [2]int) {
    var ans = NbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)
    Expect(ans).To(Equal(exp))
}

var _ = Describe("Test Example", func() {

    It("should handle basic cases", func() {
        dotest_20210520(2000, 8000, 1000, 1.5, [2]int{6, 766})
        dotest_20210520(12000, 8000, 1000, 1.5 , [2]int{0, 4000})
        dotest_20210520(8000, 12000, 500, 1.0, [2]int{8, 597})
        dotest_20210520(18000, 32000, 1500, 1.25, [2]int{8, 332})
        dotest_20210520(7500, 32000, 300, 1.55, [2]int{25, 122})
    })
})
