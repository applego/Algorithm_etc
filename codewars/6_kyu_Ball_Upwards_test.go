package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func testequal_20210521(v0 int, exp int) {
	var ans = MaxBall(v0)
	Expect(ans).To(Equal(exp))
}

var _ = Describe("6KyuBallUpwards", func() {
	It("should handle basic cases", func() {
		testequal_20210521(15, 4)
		testequal_20210521(25, 7)
		testequal_20210521(37, 10)
		testequal_20210521(45, 13)
		testequal_20210521(99, 28)
		testequal_20210521(85, 24)
		testequal_20210521(136, 39)
})
})
