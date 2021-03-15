package kata

import (
	"strconv"
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)


func Tester(base int, factor int, exp bool) {
    It("CheckForFactor(" + strconv.Itoa(base) + ", " + strconv.Itoa(factor) + ")", func() {
        Expect(CheckForFactor(base, factor)).To(Equal(exp))
    })
}

var _ = Describe("./Codewars/8KyuGrasshopperCheckForFactor", func() {
	  Tester(10, 2, true)
    Tester(63, 7, true)
    Tester(2450, 5, true)
    Tester(24612, 3, true)
    Tester(9, 2, false)
    Tester(653, 7, false)
    Tester(2453, 5, false)
    Tester(24617, 3, false)
})

func TestGinkgo(t *testing.T) {
    RegisterFailHandler(Fail)
    RunSpecs(t, "Ginkgo Suite")
}
