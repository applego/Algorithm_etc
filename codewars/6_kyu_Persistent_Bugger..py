"""
we have to multiply the each number of digits
and repeat..
if the answer has only one digit,
return the times of multiply

so we need
・variables
    times(return value):int
    value(the number of result after multiplication):int

・

"""
from operator import mul
from functools import reduce

def persistence(n: int) -> int:
    cnt = 0
    while len_of_digits(n) > 1:
        n = multiply_each_digit(n)
        cnt += 1
    return cnt


def len_of_digits(n: int) -> int:
    return len(str(n))

def multiply_each_digit(n: int) -> int:
    arr = list(map(int, list(str(n))))
    print(f"arr:{arr} = return:{reduce(mul, arr)}")
    return reduce(mul, arr)


from TestCodewar import Test
test = Test()
test.it("Basic tests")
test.assert_equals(persistence(39), 3)
test.assert_equals(persistence(4), 0)
test.assert_equals(persistence(25), 2)
test.assert_equals(persistence(999), 4)

# リスト内包 復習 (BP)
def persistence2(n: int) -> int:
    i = 0
    while n >= 10:
        n = reduce(mul, [int(x) for x in str(n)], 1)
        i += 1
    return i
