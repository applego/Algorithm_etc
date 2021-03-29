package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("7KyuFunctionalAddition", func() {
	It("sample test", func() {
		Expect(Add(1)(3)).To(Equal(4))
		})
})
