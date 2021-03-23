package kata

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("grade book",func() {
    It("should return an A", func() {
        testA := [...][3]int{{95,90,93},{100,85,96},{92,93,94}}
        for _,v := range testA {Expect(GetGrade(v[0],v[1],v[2])).To(Equal('A'))}
    })
    It("should return a B", func() {
        testB := [...][3]int{{70,70,100},{82,85,87},{84,79,85},{89,89,90}}
        for _,v := range testB {Expect(GetGrade(v[0],v[1],v[2])).To(Equal('B'))}
    })
    It("should return a C", func() {
        testC := [...][3]int{{70,70,70},{75,70,79},{60,82,76}}
        for _,v := range testC {Expect(GetGrade(v[0],v[1],v[2])).To(Equal('C'))}
    })
    It("should return a D", func() {
        testD := [...][3]int{{65,70,59},{66,62,68},{58,62,70}}
        for _,v := range testD {Expect(GetGrade(v[0],v[1],v[2])).To(Equal('D'))}
    })
    It("should return an F", func() {
        testF := [...][3]int{{44,55,52},{48,55,52},{58,59,60}}
        for _,v := range testF {Expect(GetGrade(v[0],v[1],v[2])).To(Equal('F'))}
    })
})
