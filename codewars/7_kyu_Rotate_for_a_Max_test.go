package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("7KyuRotateForAMax", func() {

	    It("should handle basic cases", func() {
				dotest(56789,68957)
        dotest(38458215, 85821534)
        dotest(195881031, 988103115)
        dotest(896219342, 962193428)
    })

		It("should handle basic cases2", func() {
				dotest(507992495,507992495)
        dotest(32277202066021, 32277202066021)
    })

})

func dotest(n int64, exp int64) {
    var ans = MaxRot(n)
    Expect(ans).To(Equal(exp))
}
