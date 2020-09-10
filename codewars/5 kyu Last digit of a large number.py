from functools import reduce

def last_digit(b, a):
    print(str(b)+' '+str(a))
    if a == 0:
        return 1
    b = int(str(b)[-1])
    if b == 0:
        return 0
    elif b == 1:
        return 1
    elif b == 2:
        candidates = [6, 2, 4, 8]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 3:
        candidates = [1, 3, 9, 7]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 4:
        candidates = [6, 4]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 5:
        return 5
    elif b == 6:
        return 6
    elif b == 7:
        candidates = [1, 7, 9, 3]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 8:
        candidates = [6, 8, 4, 2]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 9:
        candidates = [1, 9]
        mod = a % len(candidates)
        return candidates[mod]

from TestCodewar import Test
Test = Test()
Test.it("Example tests")
Test.assert_equals(last_digit(4, 1), 4)
Test.assert_equals(last_digit(4, 2), 6)
Test.assert_equals(last_digit(9, 7), 9)
Test.assert_equals(last_digit(10, 10 ** 10), 0)
Test.assert_equals(last_digit(2 ** 200, 2 ** 300), 6)
Test.assert_equals(last_digit(3715290469715693021198967285016729344580685479654510946723, 68819615221552997273737174557165657483427362207517952651), 7)

Test.it("x ** 0")
for nmbr in range(1, 9):
    a = nmbr ** nmbr
    Test.it("Testing %d and %d" % (a, 0))
    Test.assert_equals(last_digit(a, 0), 1, "x ** 0 must return 1")
