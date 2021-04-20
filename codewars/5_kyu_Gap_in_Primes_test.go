package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func dotest_20210415(k, start, nd int, exp []int) {
    var ans = Gap(k, start, nd)
    Expect(ans).To(Equal(exp))
}

var _ = Describe("Test Example", func() {

    It("should handle basic cases", func() {
        dotest_20210415(2,100,110, []int{101, 103})
        dotest_20210415(4,100,110, []int{103, 107})
        dotest_20210415(6,100,110, nil)
        dotest_20210415(8,300,400, []int{359, 367})
        dotest_20210415(10,300,400, []int{337, 347})
    })
})
