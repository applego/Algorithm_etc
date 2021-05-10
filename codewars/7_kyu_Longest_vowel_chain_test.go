package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("7KyuLongestVowelChain", func() {
	It("Basic tests",func() {
		Expect(Solve("codewarriors")).To(Equal(2))
		Expect(Solve("suoidea")).To(Equal(3))
		Expect(Solve("ultrarevolutionariees")).To(Equal(3))
		Expect(Solve("strengthlessnesses")).To(Equal(1))
		Expect(Solve("cuboideonavicuare")).To(Equal(2))
		Expect(Solve("chrononhotonthuooaos")).To(Equal(5))
		Expect(Solve("iiihoovaeaaaoougjyaw")).To(Equal(8))
	})
})
