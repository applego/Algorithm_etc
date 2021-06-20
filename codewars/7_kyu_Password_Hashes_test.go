package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Example test cases:", func() {
	It("Should test that the solution returns the correct value", func() {
		Expect(PassHash("password")).To(Equal("5f4dcc3b5aa765d61d8327deb882cf99"))
	})

	It("The length of hash string must be 32", func() {
		Expect(PassHash("abc123")).To(Equal("e99a18c428cb38d5f260853678922e03"))
	})

	It("Should handle empty string", func() {
		Expect(PassHash("")).To(Equal("d41d8cd98f00b204e9800998ecf8427e"))
	})
})
