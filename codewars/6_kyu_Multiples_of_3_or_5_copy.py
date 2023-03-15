def factorial(number: int) -> int:
    if number < 1:
        raise ValueError("引数は1より小さくできません")
        # return -1

    answer = 1
    if number == 1:
        return number
    else:
        return number * factorial(number-1)
    # for i in range(1,number+1):
    # return number * factorial(number - 1)

    # for i in range(1,number+1):
    #     print(i)
    #     answer *= i
    # return answer

v = 0
factorial(v)

from TestCodewar import Test
test = Test()
test.it("Basic tests")
test.assert_equals(factorial(3), 6)
