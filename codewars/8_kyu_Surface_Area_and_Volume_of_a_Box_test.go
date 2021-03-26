package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("8KyuSurfaceAreaAndVolumeOfABox", func() {
	It("Test 4,2,6",func() {Expect(GetSize(4,2,6)).To(Equal([2]int{88,48}))})
    It("Test 1,1,1",func() {Expect(GetSize(1,1,1)).To(Equal([2]int{6,1}))})
    It("Test 1,2,1",func() {Expect(GetSize(1,2,1)).To(Equal([2]int{10,2}))})
    It("Test 1,2,2",func() {Expect(GetSize(1,2,2)).To(Equal([2]int{16,4}))})
    It("Test 10,10,10",func() {Expect(GetSize(10,10,10)).To(Equal([2]int{600,1000}))})
})


var _ = Describe("8KyuSurfaceAreaAndVolumeOfABox_BP", func() {
	It("Test 4,2,6",func() {Expect(GetSizeBP(4,2,6)).To(Equal([2]int{88,48}))})
    It("Test 1,1,1",func() {Expect(GetSizeBP(1,1,1)).To(Equal([2]int{6,1}))})
    It("Test 1,2,1",func() {Expect(GetSizeBP(1,2,1)).To(Equal([2]int{10,2}))})
    It("Test 1,2,2",func() {Expect(GetSizeBP(1,2,2)).To(Equal([2]int{16,4}))})
    It("Test 10,10,10",func() {Expect(GetSizeBP(10,10,10)).To(Equal([2]int{600,1000}))})
})
