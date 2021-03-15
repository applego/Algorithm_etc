package ginkgo_study

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("GinkgoStudy",func(){
	var (
		goodGrade Grade
		badGrade Grade
	)

	BeforeEach(func(){
		goodGrade = Grade{
			Subject:"Math",
			Score:61,
			Mandatory:true,
		}

		badGrade = Grade{
			Subject:"History",
			Score:60,
			Mandatory:false,
		}
	})

	Describe("Criteria of pass of not",func(){
		Context("With more than 60",func(){
			It("should be passed",func(){
				Expect(goodGrade.IsPass()).To(Equal(true))
			})
		})

		Context("With less than 60",func(){
			It("should be failed",func(){
				Expect(badGrade.IsPass()).To(Equal(false))
			})
		})
	})
})
