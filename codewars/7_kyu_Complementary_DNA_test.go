// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo></http:>
// Gomega Matcher Library <http://onsi.github.io/gomega></http:>

package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Test Example", func() {
  It("Basic Tests", func() {
    Expect(DNAStrand("AAAA")).To(Equal("TTTT"))
    Expect(DNAStrand("ATTGC")).To(Equal("TAACG"))
    Expect(DNAStrand("GTAT")).To(Equal("CATA"))
  })
})
