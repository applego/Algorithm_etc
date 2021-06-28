package kata

import (
	. "codewarrior/kata"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func dotest(m, n int, exp [][3]string) {
    var ans = HowMuch(m, n)
    Expect(ans).To(Equal(exp))
}

var _ = Describe("Test Example", func() {

    It("should handle basic cases howMuch", func() {
        dotest(1, 100, [][3]string{{"M: 37", "B: 5", "C: 4"}, {"M: 100", "B: 14", "C: 11"}})
        dotest(0, 200, [][3]string{{"M: 37", "B: 5", "C: 4"}, {"M: 100", "B: 14", "C: 11"}, {"M: 163", "B: 23", "C: 18"}})
        dotest(1500, 1600, [][3]string{{"M: 1549", "B: 221", "C: 172"}})
        dotest(2950, 2950, nil)
        dotest(20000, 20100, [][3]string{{"M: 20008", "B: 2858", "C: 2223"}, {"M: 20071", "B: 2867", "C: 2230"}})
    })
})
