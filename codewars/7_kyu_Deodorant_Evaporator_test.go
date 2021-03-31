package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func dotestEvaporator(content float64, evapPerDay int, threshold int, exp int) {
    var ans = Evaporator(content, evapPerDay, threshold)
    Expect(ans).To(Equal(exp))
}

var _ = Describe("Tests Evaporator", func() {

    It("should handle basic cases", func() {
        dotestEvaporator(10, 10, 10, 22)
        dotestEvaporator(10, 10, 5, 29)
        dotestEvaporator(100, 5, 5, 59)

    })
})
